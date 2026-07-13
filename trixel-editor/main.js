(function(Dc){"use strict";function eo(e,r,a){return a.a=e,a.f=r,a}function l(e){return eo(2,e,function(r){return function(a){return e(r,a)}})}function S(e){return eo(3,e,function(r){return function(a){return function(t){return e(r,a,t)}}})}function U(e){return eo(4,e,function(r){return function(a){return function(t){return function(o){return e(r,a,t,o)}}}})}function Te(e){return eo(5,e,function(r){return function(a){return function(t){return function(o){return function(c){return e(r,a,t,o,c)}}}}})}function Rr(e){return eo(6,e,function(r){return function(a){return function(t){return function(o){return function(c){return function(i){return e(r,a,t,o,c,i)}}}}}})}function ro(e){return eo(7,e,function(r){return function(a){return function(t){return function(o){return function(c){return function(i){return function(u){return e(r,a,t,o,c,i,u)}}}}}}})}function Be(e){return eo(8,e,function(r){return function(a){return function(t){return function(o){return function(c){return function(i){return function(u){return function($){return e(r,a,t,o,c,i,u,$)}}}}}}}})}function E0(e){return eo(9,e,function(r){return function(a){return function(t){return function(o){return function(c){return function(i){return function(u){return function($){return function(v){return e(r,a,t,o,c,i,u,$,v)}}}}}}}}})}function n(e,r,a){return e.a===2?e.f(r,a):e(r)(a)}function s(e,r,a,t){return e.a===3?e.f(r,a,t):e(r)(a)(t)}function C(e,r,a,t,o){return e.a===4?e.f(r,a,t,o):e(r)(a)(t)(o)}function E(e,r,a,t,o,c){return e.a===5?e.f(r,a,t,o,c):e(r)(a)(t)(o)(c)}function Sr(e,r,a,t,o,c,i){return e.a===6?e.f(r,a,t,o,c,i):e(r)(a)(t)(o)(c)(i)}function ua(e,r,a,t,o,c,i,u){return e.a===7?e.f(r,a,t,o,c,i,u):e(r)(a)(t)(o)(c)(i)(u)}function ao(e,r,a,t,o,c,i,u,$){return e.a===8?e.f(r,a,t,o,c,i,u,$):e(r)(a)(t)(o)(c)(i)(u)($)}function fq(e,r,a,t,o,c,i,u,$,v){return e.a===9?e.f(r,a,t,o,c,i,u,$,v):e(r)(a)(t)(o)(c)(i)(u)($)(v)}var D7=[];function H7(e){return[e]}function A7(e){return e.length}var B7=S(function(e,r,a){for(var t=new Array(e),o=0;o<e;o++)t[o]=a(r+o);return t}),I7=l(function(e,r){for(var a=new Array(e),t=0;t<e&&r.b;t++)a[t]=r.a,r=r.b;return a.length=t,p(a,r)}),E7=l(function(e,r){return r[e]}),F7=S(function(e,r,a){for(var t=a.length,o=new Array(t),c=0;c<t;c++)o[c]=a[c];return o[e]=r,o}),V7=l(function(e,r){for(var a=r.length,t=new Array(a+1),o=0;o<a;o++)t[o]=r[o];return t[a]=e,t}),R7=S(function(e,r,a){for(var t=a.length,o=0;o<t;o++)r=n(e,a[o],r);return r}),O7=S(function(e,r,a){for(var t=a.length-1;t>=0;t--)r=n(e,a[t],r);return r}),$q=l(function(e,r){for(var a=r.length,t=new Array(a),o=0;o<a;o++)t[o]=e(r[o]);return t}),lq=S(function(e,r,a){for(var t=a.length,o=new Array(t),c=0;c<t;c++)o[c]=n(e,r+c,a[c]);return o}),J7=S(function(e,r,a){return a.slice(e,r)}),U7=S(function(e,r,a){var t=r.length,o=e-t;o>a.length&&(o=a.length);for(var c=t+o,i=new Array(c),u=0;u<t;u++)i[u]=r[u];for(var u=0;u<o;u++)i[u+t]=a[u];return i}),vq=l(function(e,r){return r}),sq=l(function(e,r){return console.log(e+": "+kb(r)),r});function dq(e,r){return function(a){Mn(8,e,r,a)}}function bq(e,r,a){return function(t){Mn(9,e,r,a,t)}}function kb(e){return"<internals>"}function pq(e){return Ht(!1,e)}function Ht(e,r){if(typeof r=="function")return If(e,"<function>");if(typeof r=="boolean")return Ni(e,r?"True":"False");if(typeof r=="number")return W7(e,r+"");if(r instanceof String)return q7(e,"'"+wb(r,!0)+"'");if(typeof r=="string")return Tb(e,'"'+wb(r,!1)+'"');if(typeof r=="object"&&"$"in r){var a=r.$;if(typeof a=="number")return If(e,"<internals>");if(a[0]==="#"){var o=[];for(var t in r)t!=="$"&&o.push(Ht(e,r[t]));return"("+o.join(",")+")"}if(a==="Set_elm_builtin")return Ni(e,"Set")+Bf(e,".fromList")+" "+Ht(e,iC(r));if(a==="RBNode_elm_builtin"||a==="RBEmpty_elm_builtin")return Ni(e,"Dict")+Bf(e,".fromList")+" "+Ht(e,ln(r));if(a==="Array_elm_builtin")return Ni(e,"Array")+Bf(e,".fromList")+" "+Ht(e,cC(r));if(a==="::"||a==="[]"){var o="[";for(r.b&&(o+=Ht(e,r.a),r=r.b);r.b;r=r.b)o+=","+Ht(e,r.a);return o+"]"}var o="";for(var c in r)if(c!=="$"){var i=Ht(e,r[c]),u=i[0],$=u==="{"||u==="("||u==="["||u==="<"||u==='"'||i.indexOf(" ")<0;o+=" "+($?i:"("+i+")")}return Ni(e,a)+o}if(typeof DataView=="function"&&r instanceof DataView)return Tb(e,"<"+r.byteLength+" bytes>");if(typeof File<"u"&&r instanceof File)return If(e,"<"+r.name+">");if(typeof r=="object"){var o=[];for(var v in r){var d=v[0]==="_"?v.slice(1):v;o.push(Bf(e,d)+" = "+Ht(e,r[v]))}return o.length===0?"{}":"{ "+o.join(", ")+" }"}return If(e,"<internals>")}function wb(e,r){var a=e.replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/\v/g,"\\v").replace(/\0/g,"\\0");return r?a.replace(/\'/g,"\\'"):a.replace(/\"/g,'\\"')}function Ni(e,r){return e?"\x1B[96m"+r+"\x1B[0m":r}function W7(e,r){return e?"\x1B[95m"+r+"\x1B[0m":r}function Tb(e,r){return e?"\x1B[93m"+r+"\x1B[0m":r}function q7(e,r){return e?"\x1B[92m"+r+"\x1B[0m":r}function Bf(e,r){return e?"\x1B[37m"+r+"\x1B[0m":r}function If(e,r){return e?"\x1B[36m"+r+"\x1B[0m":r}function mq(e){return String.fromCharCode(e<10?48+e:55+e)}function Mn(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function hq(e,r,a,t,o){switch(e){case 0:throw new Error(`What node should I take over? In JavaScript I need something like:

    Elm.Main.init({
        node: document.getElementById("elm-node")
    })

You need to do this with any Browser.sandbox or Browser.element program.`);case 1:throw new Error(`Browser.application programs cannot handle URLs like this:

    `+document.location.href+"\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.");case 2:var c=r;throw new Error(`Problem with the flags given to your Elm program on initialization.

`+c);case 3:var i=r;throw new Error("There can only be one port named `"+i+"`, but your program has multiple.");case 4:var i=r,u=a;throw new Error("Trying to send an unexpected type of value through port `"+i+"`:\n"+u);case 5:throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');case 6:var $=r;throw new Error("Your page is loading multiple Elm scripts with a module named "+$+". Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!");case 8:var $=r,v=a,b=t;throw new Error("TODO in module `"+$+"` "+Lb(v)+`

`+b);case 9:var $=r,v=a,d=t,b=o;throw new Error("TODO in module `"+$+"` from the `case` expression "+Lb(v)+`

It received the following value:

    `+kb(d).replace(`
`,`
    `)+`

But the branch that handles it says:

    `+b.replace(`
`,`
    `));case 10:throw new Error("Bug in https://github.com/elm/virtual-dom/issues");case 11:throw new Error("Cannot perform mod 0. Division by zero error.")}}function Lb(e){return e.ds.gn===e.rj.gn?"on line "+e.ds.gn:"on lines "+e.ds.gn+" through "+e.rj.gn}function re(e,r){for(var a,t=[],o=F0(e,r,0,t);o&&(a=t.pop());o=F0(a.a,a.b,0,t));return o}function F0(e,r,a,t){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&Mn(5),!1;if(a>100)return t.push(p(e,r)),!0;e.$<0&&(e=ln(e),r=ln(r));for(var o in e)if(!F0(e[o],r[o],a+1,t))return!1;return!0}var G7=l(re),N7=l(function(e,r){return!re(e,r)});function Q(e,r,a){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$>"u")return(a=Q(e.a,r.a))||(a=Q(e.b,r.b))?a:Q(e.c,r.c);for(;e.b&&r.b&&!(a=Q(e.a,r.a));e=e.b,r=r.b);return a||(e.b?1:r.b?-1:0)}var Z7=l(function(e,r){return Q(e,r)<0}),Y7=l(function(e,r){return Q(e,r)<1}),X7=l(function(e,r){return Q(e,r)>0}),Q7=l(function(e,r){return Q(e,r)>=0}),K7=l(function(e,r){var a=Q(e,r);return a<0?x2:a?uC:S2}),Eo=0,gq={$:"#0"};function p(e,r){return{a:e,b:r}}function yq(e,r){return{$:"#2",a:e,b:r}}function F(e,r,a){return{a:e,b:r,c:a}}function _q(e,r,a){return{$:"#3",a:e,b:r,c:a}}function Cq(e){return e}function Pq(e){return new String(e)}function M(e,r){var a={};for(var t in e)a[t]=e[t];for(var t in r)a[t]=r[t];return a}var eh=l(X);function X(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var a=tt(e.a,r);e=e.b;for(var t=a;e.b;e=e.b)t=t.b=tt(e.a,r);return a}var P={$:0},Sq={$:"[]"};function tt(e,r){return{$:1,a:e,b:r}}function xq(e,r){return{$:"::",a:e,b:r}}var rh=l(tt);function f(e){for(var r=P,a=e.length;a--;)r=tt(e[a],r);return r}function Ef(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var ah=S(function(e,r,a){for(var t=[];r.b&&a.b;r=r.b,a=a.b)t.push(n(e,r.a,a.a));return f(t)}),jq=U(function(e,r,a,t){for(var o=[];r.b&&a.b&&t.b;r=r.b,a=a.b,t=t.b)o.push(s(e,r.a,a.a,t.a));return f(o)}),nh=Te(function(e,r,a,t,o){for(var c=[];r.b&&a.b&&t.b&&o.b;r=r.b,a=a.b,t=t.b,o=o.b)c.push(C(e,r.a,a.a,t.a,o.a));return f(c)}),kq=Rr(function(e,r,a,t,o,c){for(var i=[];r.b&&a.b&&t.b&&o.b&&c.b;r=r.b,a=a.b,t=t.b,o=o.b,c=c.b)i.push(E(e,r.a,a.a,t.a,o.a,c.a));return f(i)}),th=l(function(e,r){return f(Ef(r).sort(function(a,t){return Q(e(a),e(t))}))}),oh=l(function(e,r){return f(Ef(r).sort(function(a,t){var o=n(e,a,t);return o===S2?0:o===x2?-1:1}))}),ch=l(function(e,r){return e+r}),ih=l(function(e,r){return e-r}),uh=l(function(e,r){return e*r}),fh=l(function(e,r){return e/r}),$h=l(function(e,r){return e/r|0}),lh=l(Math.pow),vh=l(function(e,r){return r%e}),sh=l(function(e,r){var a=r%e;return e===0?Mn(11):a>0&&e<0||a<0&&e>0?a+e:a}),dh=Math.PI,wq=Math.E,bh=Math.cos,ph=Math.sin,mh=Math.tan,hh=Math.acos,Tq=Math.asin,gh=Math.atan,yh=l(Math.atan2);function _h(e){return e}function Lq(e){return e|0}function Ch(e){return e===1/0||e===-1/0}var Ph=Math.ceil,Sh=Math.floor,xh=Math.round,jh=Math.sqrt,Mb=Math.log,kh=isNaN;function wh(e){return!e}var Th=l(function(e,r){return e&&r}),Lh=l(function(e,r){return e||r}),Mq=l(function(e,r){return e!==r}),Mh=l(function(e,r){return e+r});function zh(e){var r=e.charCodeAt(0);return isNaN(r)?w:D(55296<=r&&r<=56319?p(e[0]+e[1],e.slice(2)):p(e[0],e.slice(1)))}var Dh=l(function(e,r){return e+r});function Hh(e){return e.length}var zq=l(function(e,r){for(var a=r.length,t=new Array(a),o=0;o<a;){var c=r.charCodeAt(o);if(55296<=c&&c<=56319){t[o]=e(r[o]+r[o+1]),o+=2;continue}t[o]=e(r[o]),o++}return t.join("")}),Dq=l(function(e,r){for(var a=[],t=r.length,o=0;o<t;){var c=r[o],i=r.charCodeAt(o);o++,55296<=i&&i<=56319&&(c+=r[o],o++),e(c)&&a.push(c)}return a.join("")});function Ah(e){for(var r=e.length,a=new Array(r),t=0;t<r;){var o=e.charCodeAt(t);55296<=o&&o<=56319?(a[r-t]=e[t+1],t++,a[r-t]=e[t-1],t++):(a[r-t]=e[t],t++)}return a.join("")}var Bh=S(function(e,r,a){for(var t=a.length,o=0;o<t;){var c=a[o],i=a.charCodeAt(o);o++,55296<=i&&i<=56319&&(c+=a[o],o++),r=n(e,c,r)}return r}),Ih=S(function(e,r,a){for(var t=a.length;t--;){var o=a[t],c=a.charCodeAt(t);56320<=c&&c<=57343&&(t--,o=a[t]+o),r=n(e,o,r)}return r}),Eh=l(function(e,r){return r.split(e)}),Fh=l(function(e,r){return r.join(e)}),Vh=S(function(e,r,a){return a.slice(e,r)});function Hq(e){return e.trim()}function Rh(e){return e.replace(/^\s+/,"")}function Aq(e){return e.replace(/\s+$/,"")}function Bq(e){return f(e.trim().split(/\s+/g))}function Iq(e){return f(e.split(/\r\n|\r|\n/g))}function Oh(e){return e.toUpperCase()}function Jh(e){return e.toLowerCase()}var Eq=l(function(e,r){for(var a=r.length;a--;){var t=r[a],o=r.charCodeAt(a);if(56320<=o&&o<=57343&&(a--,t=r[a]+t),e(t))return!0}return!1}),Uh=l(function(e,r){for(var a=r.length;a--;){var t=r[a],o=r.charCodeAt(a);if(56320<=o&&o<=57343&&(a--,t=r[a]+t),!e(t))return!1}return!0}),Wh=l(function(e,r){return r.indexOf(e)>-1}),qh=l(function(e,r){return r.indexOf(e)===0}),Gh=l(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length}),Nh=l(function(e,r){var a=e.length;if(a<1)return P;for(var t=0,o=[];(t=r.indexOf(e,t))>-1;)o.push(t),t=t+a;return f(o)});function zb(e){return e+""}function Zh(e){for(var r=0,a=e.charCodeAt(0),t=a==43||a==45?1:0,o=t;o<e.length;++o){var c=e.charCodeAt(o);if(c<48||57<c)return w;r=10*r+c-48}return o==t?w:D(a==45?-r:r)}function Yh(e){if(e.length===0||/[\sxbo]/.test(e))return w;var r=+e;return r===r?D(r):w}function Xh(e){return Ef(e).join("")}function Qh(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Kh(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Fq(e){return e.toUpperCase()}function eg(e){return e.toLowerCase()}function Vq(e){return e.toLocaleUpperCase()}function Rq(e){return e.toLocaleLowerCase()}function rg(e){return{$:0,a:e}}function ag(e){return{$:1,a:e}}function Zi(e){return{$:2,b:e}}var ng=Zi(function(e){return typeof e!="number"?fn("an INT",e):-2147483647<e&&e<2147483647&&(e|0)===e||isFinite(e)&&!(e%1)?We(e):fn("an INT",e)}),tg=Zi(function(e){return typeof e=="boolean"?We(e):fn("a BOOL",e)}),og=Zi(function(e){return typeof e=="number"?We(e):fn("a FLOAT",e)}),cg=Zi(function(e){return We(e)}),ig=Zi(function(e){return typeof e=="string"?We(e):e instanceof String?We(e+""):fn("a STRING",e)});function ug(e){return{$:3,b:e}}function fg(e){return{$:4,b:e}}function $g(e){return{$:5,c:e}}var lg=l(function(e,r){return{$:6,d:e,b:r}}),vg=l(function(e,r){return{$:7,e,b:r}});function sg(e){return{$:8,b:e}}function no(e,r){return{$:9,f:e,g:r}}var dg=l(function(e,r){return{$:10,b:r,h:e}});function bg(e){return{$:11,g:e}}var pg=l(function(e,r){return no(e,[r])}),mg=S(function(e,r,a){return no(e,[r,a])}),hg=U(function(e,r,a,t){return no(e,[r,a,t])}),gg=Te(function(e,r,a,t,o){return no(e,[r,a,t,o])}),yg=Rr(function(e,r,a,t,o,c){return no(e,[r,a,t,o,c])}),_g=ro(function(e,r,a,t,o,c,i){return no(e,[r,a,t,o,c,i])}),Oq=Be(function(e,r,a,t,o,c,i,u){return no(e,[r,a,t,o,c,i,u])}),Jq=E0(function(e,r,a,t,o,c,i,u,$){return no(e,[r,a,t,o,c,i,u,$])}),Cg=l(function(e,r){try{var a=JSON.parse(r);return un(e,a)}catch(t){return Ue(n(lv,"This is not valid JSON! "+t.message,r))}}),V0=l(function(e,r){return un(e,r)});function un(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?We(e.c):fn("null",r);case 3:return Ff(r)?Db(e.b,r,f):fn("a LIST",r);case 4:return Ff(r)?Db(e.b,r,Pg):fn("an ARRAY",r);case 6:var a=e.d;if(typeof r!="object"||r===null||!(a in r))return fn("an OBJECT with a field named `"+a+"`",r);var v=un(e.b,r[a]);return Bn(v)?v:Ue(n(j2,a,v.a));case 7:var t=e.e;if(!Ff(r))return fn("an ARRAY",r);if(t>=r.length)return fn("a LONGER array. Need index "+t+" but only see "+r.length+" entries",r);var v=un(e.b,r[t]);return Bn(v)?v:Ue(n(k2,t,v.a));case 8:if(typeof r!="object"||r===null||Ff(r))return fn("an OBJECT",r);var o=P;for(var c in r)if(Object.prototype.hasOwnProperty.call(r,c)){var v=un(e.b,r[c]);if(!Bn(v))return Ue(n(j2,c,v.a));o=tt(p(c,v.a),o)}return We(Ve(o));case 9:for(var i=e.f,u=e.g,$=0;$<u.length;$++){var v=un(u[$],r);if(!Bn(v))return v;i=i(v.a)}return We(i);case 10:var v=un(e.b,r);return Bn(v)?un(e.h(v.a),r):v;case 11:for(var d=P,b=e.g;b.b;b=b.b){var v=un(b.a,r);if(Bn(v))return v;d=tt(v.a,d)}return Ue(fC(Ve(d)));case 1:return Ue(n(lv,e.a,r));case 0:return We(e.a)}}function Db(e,r,a){for(var t=r.length,o=new Array(t),c=0;c<t;c++){var i=un(e,r[c]);if(!Bn(i))return Ue(n(k2,c,i.a));o[c]=i.a}return We(a(o))}function Ff(e){return Array.isArray(e)||typeof FileList<"u"&&e instanceof FileList}function Pg(e){return n(Qf,e.length,function(r){return e[r]})}function fn(e,r){return Ue(n(lv,"Expecting "+e,r))}function Hc(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Hc(e.b,r.b);case 6:return e.d===r.d&&Hc(e.b,r.b);case 7:return e.e===r.e&&Hc(e.b,r.b);case 9:return e.f===r.f&&Hb(e.g,r.g);case 10:return e.h===r.h&&Hc(e.b,r.b);case 11:return Hb(e.g,r.g)}}function Hb(e,r){var a=e.length;if(a!==r.length)return!1;for(var t=0;t<a;t++)if(!Hc(e[t],r[t]))return!1;return!0}var Sg=l(function(e,r){return JSON.stringify(r,null,e)+""});function Uq(e){return{$:0,a:e}}function Wq(e){return e.a}function Vf(e){return e}function qq(e){return e}function xg(){return[]}function jg(){return{}}var kg=S(function(e,r,a){var t=r;return e==="toJSON"&&typeof t=="function"||(a[e]=t),a});function wg(e){return l(function(r,a){return a.push(e(r)),a})}var Tg=null;function qa(e){return{$:0,a:e}}function R0(e){return{$:1,a:e}}function Qr(e){return{$:2,b:e,c:null}}var O0=l(function(e,r){return{$:3,b:e,d:r}}),Lg=l(function(e,r){return{$:4,b:e,d:r}});function Mg(e){return{$:5,b:e}}var zg=0;function J0(e){var r={$:0,e:zg++,f:e,g:null,h:[]};return q0(r),r}function U0(e){return Qr(function(r){r(qa(J0(e)))})}function Ab(e,r){e.h.push(r),q0(e)}var Dg=l(function(e,r){return Qr(function(a){Ab(e,r),a(qa(Eo))})});function Hg(e){return Qr(function(r){var a=e.f;a.$===2&&a.c&&a.c(),e.f=null,r(qa(Eo))})}var W0=!1,Bb=[];function q0(e){if(Bb.push(e),!W0){for(W0=!0;e=Bb.shift();)Ag(e);W0=!1}}function Ag(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(a){e.f=a,q0(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}function Bg(e){return Qr(function(r){var a=setTimeout(function(){r(qa(Eo))},e);return function(){clearTimeout(a)}})}var Gq=U(function(e,r,a,t){return G0(r,t,e.b1,e.uX,e.aC,function(){return function(){}})});function G0(e,r,a,t,o,c){var i=n(V0,e,r?r.flags:void 0);Bn(i)||Mn(2);var u={},$=a(i.a),v=$.a,d=c(h,v),b=Eg(u,h);function h(g,y){var _=n(t,g,v);d(v=_.a,y),Vb(u,_.b,o(v))}return Vb(u,$.b,o(v)),b?{ports:b}:{}}var Ig;function Nq(e){Ig.add(e)}var fa={};function Eg(e,r){var a;for(var t in fa){var o=fa[t];o.a&&(a=a||{},a[t]=o.a(t,r)),e[t]=Fg(o,r)}return a}function N0(e,r,a,t,o){return{b:e,c:r,d:a,e:t,f:o}}function Fg(e,r){var a={g:r,h:void 0},t=e.c,o=e.d,c=e.e,i=e.f;function u($){return n(O0,u,Mg(function(v){var d=v.a;return v.$===0?s(o,a,d,$):c&&i?C(t,a,d.i,d.j,$):s(t,a,c?d.i:d.j,$)}))}return a.h=J0(n(O0,u,e.b))}var Vg=l(function(e,r){return Qr(function(a){e.g(r),a(qa(Eo))})}),Rg=l(function(e,r){return n(Dg,e.h,{$:0,a:r})});function Yi(e){return function(r){return{$:1,k:e,l:r}}}function Ib(e){return{$:2,m:e}}var Eb=l(function(e,r){return{$:3,n:e,o:r}}),Fb=[],Z0=!1;function Vb(e,r,a){if(Fb.push({p:e,q:r,r:a}),!Z0){Z0=!0;for(var t;t=Fb.shift();)Og(t.p,t.q,t.r);Z0=!1}}function Og(e,r,a){var t={};Rf(!0,r,t,null),Rf(!1,a,t,null);for(var o in e)Ab(e[o],{$:"fx",a:t[o]||{i:P,j:P}})}function Rf(e,r,a,t){switch(r.$){case 1:var o=r.k,c=Jg(e,o,t,r.l);a[o]=Ug(e,c,a[o]);return;case 2:for(var i=r.m;i.b;i=i.b)Rf(e,i.a,a,t);return;case 3:Rf(e,r.o,a,{s:r.n,t});return}}function Jg(e,r,a,t){function o(i){for(var u=a;u;u=u.t)i=u.s(i);return i}var c=e?fa[r].e:fa[r].f;return n(c,o,t)}function Ug(e,r,a){return a=a||{i:P,j:P},e?a.i=tt(r,a.i):a.j=tt(r,a.j),a}function Rb(e){fa[e]&&Mn(3,e)}function At(e,r){return Rb(e),fa[e]={e:Wg,u:r,a:qg},Yi(e)}var Wg=l(function(e,r){return r});function qg(e){var r=[],a=fa[e].u,t=Bg(0);fa[e].b=t,fa[e].c=S(function(i,u,$){for(;u.b;u=u.b)for(var v=r,d=a(u.a),b=0;b<v.length;b++)v[b](d);return t});function o(i){r.push(i)}function c(i){r=r.slice();var u=r.indexOf(i);u>=0&&r.splice(u,1)}return{subscribe:o,unsubscribe:c}}function Of(e,r){return Rb(e),fa[e]={f:Gg,u:r,a:Ng},Yi(e)}var Gg=l(function(e,r){return function(a){return e(r(a))}});function Ng(e,r){var a=P,t=fa[e].u,o=qa(null);fa[e].b=o,fa[e].c=S(function(i,u,$){return a=u,o});function c(i){var u=n(V0,t,i);Bn(u)||Mn(4,e,u.a);for(var $=u.a,v=a;v.b;v=v.b)r(v.a($))}return{send:c}}function Zg(e){Dc.Elm?Ob(Dc.Elm,e):Dc.Elm=e}function Ob(e,r){for(var a in r)a in e?a=="init"?Mn(6):Ob(e[a],r[a]):e[a]=r[a]}function Zq(e){Dc.Elm?Jb("Elm",Dc.Elm,e):Dc.Elm=e}function Jb(e,r,a){for(var t in a)t in r?t=="init"?Mn(6,e):Jb(e+"."+t,r[t],a[t]):r[t]=a[t]}var Jf,$a=typeof document<"u"?document:{};function Y0(e,r){e.appendChild(r)}var Yq=U(function(e,r,a,t){var o=t.node;return o.parentNode.replaceChild(oo(e,function(){}),o),{}});function X0(e){return{$:0,a:e}}var Ub=l(function(e,r){return l(function(a,t){for(var o=[],c=0;t.b;t=t.b){var i=t.a;c+=i.b||0,o.push(i)}return c+=o.length,{$:1,c:r,d:K0(a),e:o,f:e,b:c}})}),$n=Ub(void 0),Wb=l(function(e,r){return l(function(a,t){for(var o=[],c=0;t.b;t=t.b){var i=t.a;c+=i.b.b||0,o.push(i)}return c+=o.length,{$:2,c:r,d:K0(a),e:o,f:e,b:c}})}),Yg=Wb(void 0);function Xg(e,r,a,t){return{$:3,d:K0(e),g:r,h:a,i:t}}var Qg=l(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function to(e,r){return{$:5,l:e,m:r,k:void 0}}var Xq=l(function(e,r){return to([e,r],function(){return e(r)})}),Qq=S(function(e,r,a){return to([e,r,a],function(){return n(e,r,a)})}),Kq=U(function(e,r,a,t){return to([e,r,a,t],function(){return s(e,r,a,t)})}),eG=Te(function(e,r,a,t,o){return to([e,r,a,t,o],function(){return C(e,r,a,t,o)})}),rG=Rr(function(e,r,a,t,o,c){return to([e,r,a,t,o,c],function(){return E(e,r,a,t,o,c)})}),aG=ro(function(e,r,a,t,o,c,i){return to([e,r,a,t,o,c,i],function(){return Sr(e,r,a,t,o,c,i)})}),nG=Be(function(e,r,a,t,o,c,i,u){return to([e,r,a,t,o,c,i,u],function(){return ua(e,r,a,t,o,c,i,u)})}),tG=E0(function(e,r,a,t,o,c,i,u,$){return to([e,r,a,t,o,c,i,u,$],function(){return ao(e,r,a,t,o,c,i,u,$)})}),qb=l(function(e,r){return{$:"a0",n:e,o:r}}),Kg=l(function(e,r){return{$:"a1",n:e,o:r}}),Gb=l(function(e,r){return{$:"a2",n:e,o:r}}),Uf=l(function(e,r){return{$:"a3",n:e,o:r}}),ey=S(function(e,r,a){return{$:"a4",n:r,o:{f:e,o:a}}}),ry=/^script$/i,ay=/^(on|formAction$)/i,ny=/^\s*j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:/i,Q0=/^\s*(j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:|d\s*a\s*t\s*a\s*:\s*t\s*e\s*x\s*t\s*\/\s*h\s*t\s*m\s*l\s*(,|;))/i;function Wf(e){return ry.test(e)?"p":e}function Nb(e){return ay.test(e)?"data-"+e:e}function ty(e){return e=="innerHTML"||e=="outerHTML"||e=="formAction"?"data-"+e:e}function oG(e){return ny.test(e)?"":e}function Zb(e){return Q0.test(e)?"":e}function oy(e){return typeof e=="string"&&Q0.test(e)||Array.isArray(e)&&Q0.test(String(e))?"":e}var cy=l(function(e,r){return r.$==="a0"?n(qb,r.n,iy(e,r.o)):r});function iy(e,r){var a=mv(r);return{$:r.$,a:a?s(Ha,a<3?uy:fy,ae(e),r.a):n(Ye,e,r.a)}}var uy=l(function(e,r){return p(e(r.a),r.b)}),fy=l(function(e,r){return{Y:e(r.Y),ac:r.ac,aa:r.aa}});function K0(e){for(var r={};e.b;e=e.b){var a=e.a,t=a.$,o=a.n,c=a.o;if(t==="a2"){o==="className"?Yb(r,o,c):r[o]=c;continue}var i=r[t]||(r[t]={});t==="a3"&&o==="class"?Yb(i,o,c):i[o]=c}return r}function Yb(e,r,a){var t=e[r];e[r]=t?t+" "+a:a}function oo(e,r){var a=e.$;if(a===5)return oo(e.k||(e.k=e.m()),r);if(a===0)return $a.createTextNode(e.a);if(a===4){for(var t=e.k,o=e.j;t.$===4;)typeof o!="object"?o=[o,t.j]:o.push(t.j),t=t.k;var c={j:o,p:r},i=oo(t,c);return i.elm_event_node_ref=c,i}if(a===3){var i=e.h(e.g);return ev(i,r,e.d),i}var i=e.f?$a.createElementNS(e.f,e.c):$a.createElement(e.c);Jf&&e.c=="a"&&i.addEventListener("click",Jf(i)),ev(i,r,e.d);for(var u=e.e,$=0;$<u.length;$++)Y0(i,oo(a===1?u[$]:u[$].b,r));return i}function ev(e,r,a){for(var t in a){var o=a[t];t==="a1"?$y(e,o):t==="a0"?sy(e,r,o):t==="a3"?ly(e,o):t==="a4"?vy(e,o):(t!=="value"&&t!=="checked"||e[t]!==o)&&(e[t]=o)}}function $y(e,r){var a=e.style;for(var t in r)a[t]=r[t]}function ly(e,r){for(var a in r){var t=r[a];typeof t<"u"?e.setAttribute(a,t):e.removeAttribute(a)}}function vy(e,r){for(var a in r){var t=r[a],o=t.f,c=t.o;typeof c<"u"?e.setAttributeNS(o,a,c):e.removeAttributeNS(o,a)}}function sy(e,r,a){var t=e.elmFs||(e.elmFs={});for(var o in a){var c=a[o],i=t[o];if(!c){e.removeEventListener(o,i),t[o]=void 0;continue}if(i){var u=i.q;if(u.$===c.$){i.q=c;continue}e.removeEventListener(o,i)}i=dy(r,c),e.addEventListener(o,i,rv&&{passive:mv(c)<2}),t[o]=i}}var rv;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){rv=!0}}))}catch{}function dy(e,r){function a(t){var o=a.q,c=un(o.a,t);if(Bn(c)){for(var i=mv(o),u=c.a,$=i?i<3?u.a:u.Y:u,v=i==1?u.b:i==3&&u.ac,d=(v&&t.stopPropagation(),(i==2?u.b:i==3&&u.aa)&&t.preventDefault(),e),b,h;b=d.j;){if(typeof b=="function")$=b($);else for(var h=b.length;h--;)$=b[h]($);d=d.p}d($,v)}}return a.q=r,a}function by(e,r){return e.$==r.$&&Hc(e.a,r.a)}function Xb(e,r){var a=[];return zn(e,r,a,0),a}function Ca(e,r,a,t){var o={$:r,r:a,s:t,t:void 0,u:void 0};return e.push(o),o}function zn(e,r,a,t){if(e!==r){var o=e.$,c=r.$;if(o!==c)if(o===1&&c===2)r=Py(r),c=1;else{Ca(a,0,t,r);return}switch(c){case 5:for(var i=e.l,u=r.l,$=i.length,v=$===u.length;v&&$--;)v=i[$]===u[$];if(v){r.k=e.k;return}r.k=r.m();var d=[];zn(e.k,r.k,d,0),d.length>0&&Ca(a,1,t,d);return;case 4:for(var b=e.j,h=r.j,g=!1,y=e.k;y.$===4;)g=!0,typeof b!="object"?b=[b,y.j]:b.push(y.j),y=y.k;for(var _=r.k;_.$===4;)g=!0,typeof h!="object"?h=[h,_.j]:h.push(_.j),_=_.k;if(g&&b.length!==h.length){Ca(a,0,t,r);return}(g?!py(b,h):b!==h)&&Ca(a,2,t,h),zn(y,_,a,t+1);return;case 0:e.a!==r.a&&Ca(a,3,t,r.a);return;case 1:Qb(e,r,a,t,my);return;case 2:Qb(e,r,a,t,hy);return;case 3:if(e.h!==r.h){Ca(a,0,t,r);return}var x=av(e.d,r.d);x&&Ca(a,4,t,x);var T=r.i(e.g,r.g);T&&Ca(a,5,t,T);return}}}function py(e,r){for(var a=0;a<e.length;a++)if(e[a]!==r[a])return!1;return!0}function Qb(e,r,a,t,o){if(e.c!==r.c||e.f!==r.f){Ca(a,0,t,r);return}var c=av(e.d,r.d);c&&Ca(a,4,t,c),o(e,r,a,t)}function av(e,r,a){var t;for(var o in e){if(o==="a1"||o==="a0"||o==="a3"||o==="a4"){var c=av(e[o],r[o]||{},o);c&&(t=t||{},t[o]=c);continue}if(!(o in r)){t=t||{},t[o]=a?a==="a1"?"":a==="a0"||a==="a3"?void 0:{f:e[o].f,o:void 0}:typeof e[o]=="string"?"":null;continue}var i=e[o],u=r[o];i===u&&o!=="value"&&o!=="checked"||a==="a0"&&by(i,u)||(t=t||{},t[o]=u)}for(var $ in r)$ in e||(t=t||{},t[$]=r[$]);return t}function my(e,r,a,t){var o=e.e,c=r.e,i=o.length,u=c.length;i>u?Ca(a,6,t,{v:u,i:i-u}):i<u&&Ca(a,7,t,{v:i,e:c});for(var $=i<u?i:u,v=0;v<$;v++){var d=o[v];zn(d,c[v],a,++t),t+=d.b||0}}function hy(e,r,a,t){for(var o=[],c={},i=[],u=e.e,$=r.e,v=u.length,d=$.length,b=0,h=0,g=t;b<v&&h<d;){var y=u[b],_=$[h],x=y.a,T=_.a,L=y.b,B=_.b,R=void 0,V=void 0;if(x===T){g++,zn(L,B,o,g),g+=L.b||0,b++,h++;continue}var W=u[b+1],Y=$[h+1];if(W){var oe=W.a,$e=W.b;V=T===oe}if(Y){var pe=Y.a,we=Y.b;R=x===pe}if(R&&V){g++,zn(L,we,o,g),Xi(c,o,x,B,h,i),g+=L.b||0,g++,Qi(c,o,x,$e,g),g+=$e.b||0,b+=2,h+=2;continue}if(R){g++,Xi(c,o,T,B,h,i),zn(L,we,o,g),g+=L.b||0,b+=1,h+=2;continue}if(V){g++,Qi(c,o,x,L,g),g+=L.b||0,g++,zn($e,B,o,g),g+=$e.b||0,b+=2,h+=1;continue}if(W&&oe===pe){g++,Qi(c,o,x,L,g),Xi(c,o,T,B,h,i),g+=L.b||0,g++,zn($e,we,o,g),g+=$e.b||0,b+=2,h+=2;continue}break}for(;b<v;){g++;var y=u[b],L=y.b;Qi(c,o,y.a,L,g),g+=L.b||0,b++}for(;h<d;){var Ae=Ae||[],_=$[h];Xi(c,o,_.a,_.b,void 0,Ae),h++}(o.length>0||i.length>0||Ae)&&Ca(a,8,t,{w:o,x:i,y:Ae})}var Kb="_elmW6BL";function Xi(e,r,a,t,o,c){var i=e[a];if(!i){i={c:0,z:t,r:o,s:void 0},c.push({r:o,A:i}),e[a]=i;return}if(i.c===1){c.push({r:o,A:i}),i.c=2;var u=[];zn(i.z,t,u,i.r),i.r=o,i.s.s={w:u,A:i};return}Xi(e,r,a+Kb,t,o,c)}function Qi(e,r,a,t,o){var c=e[a];if(!c){var i=Ca(r,9,o,void 0);e[a]={c:1,z:t,r:o,s:i};return}if(c.c===0){c.c=2;var u=[];zn(t,c.z,u,o),Ca(r,9,o,{w:u,A:c});return}Qi(e,r,a+Kb,t,o)}function e2(e,r,a,t){Ki(e,r,a,0,0,r.b,t)}function Ki(e,r,a,t,o,c,i){for(var u=a[t],$=u.r;$===o;){var v=u.$;if(v===1)e2(e,r.k,u.s,i);else if(v===8){u.t=e,u.u=i;var d=u.s.w;d.length>0&&Ki(e,r,d,0,o,c,i)}else if(v===9){u.t=e,u.u=i;var b=u.s;if(b){b.A.s=e;var d=b.w;d.length>0&&Ki(e,r,d,0,o,c,i)}}else u.t=e,u.u=i;if(t++,!(u=a[t])||($=u.r)>c)return t}var h=r.$;if(h===4){for(var g=r.k;g.$===4;)g=g.k;return Ki(e,g,a,t,o+1,c,e.elm_event_node_ref)}for(var y=r.e,_=e.childNodes,x=0;x<y.length;x++){o++;var T=h===1?y[x]:y[x].b,L=o+(T.b||0);if(o<=$&&$<=L&&(t=Ki(_[x],T,a,t,o,L,i),!(u=a[t])||($=u.r)>c))return t;o=L}return t}function r2(e,r,a,t){return a.length===0?e:(e2(e,r,a,t),qf(e,a))}function qf(e,r){for(var a=0;a<r.length;a++){var t=r[a],o=t.t,c=gy(o,t);o===e&&(e=c)}return e}function gy(e,r){switch(r.$){case 0:return yy(e,r.s,r.u);case 4:return ev(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return qf(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var c=r.s,t=0;t<c.i;t++)e.removeChild(e.childNodes[c.v]);return e;case 7:for(var c=r.s,a=c.e,t=c.v,o=e.childNodes[t];t<a.length;t++)e.insertBefore(oo(a[t],r.u),o);return e;case 9:var c=r.s;if(!c)return e.parentNode.removeChild(e),e;var i=c.A;return typeof i.r<"u"&&e.parentNode.removeChild(e),i.s=qf(e,c.w),e;case 8:return _y(e,r);case 5:return r.s(e);default:Mn(10)}}function yy(e,r,a){var t=e.parentNode,o=oo(r,a);return o.elm_event_node_ref||(o.elm_event_node_ref=e.elm_event_node_ref),t&&o!==e&&t.replaceChild(o,e),o}function _y(e,r){var a=r.s,t=Cy(a.y,r);e=qf(e,a.w);for(var o=a.x,c=0;c<o.length;c++){var i=o[c],u=i.A,$=u.c===2?u.s:oo(u.z,r.u);e.insertBefore($,e.childNodes[i.r])}return t&&Y0(e,t),e}function Cy(e,r){if(e){for(var a=$a.createDocumentFragment(),t=0;t<e.length;t++){var o=e[t],c=o.A;Y0(a,c.c===2?c.s:oo(c.z,r.u))}return a}}function nv(e){if(e.nodeType===3)return X0(e.textContent);if(e.nodeType!==1)return X0("");for(var r=P,a=e.attributes,t=a.length;t--;){var o=a[t],c=o.name,i=o.value;r=tt(n(Uf,c,i),r)}for(var u=e.tagName.toLowerCase(),$=P,v=e.childNodes,t=v.length;t--;)$=tt(nv(v[t]),$);return s($n,u,r,$)}function Py(e){for(var r=e.e,a=r.length,t=new Array(a),o=0;o<a;o++)t[o]=r[o].b;return{$:1,c:e.c,d:e.d,e:t,f:e.f,b:e.b}}var Sy=l(function(e,r){return e&r}),xy=l(function(e,r){return e|r}),jy=l(function(e,r){return e^r});function ky(e){return~e}var wy=l(function(e,r){return r<<e}),Ty=l(function(e,r){return r>>e}),Ly=l(function(e,r){return r>>>e}),My,zy=My||U(function(e,r,a,t){return G0(r,t,e.b1,e.uX,e.aC,function(o,c){var i=e.bt,u=t.node,$=nv(u);return a2(c,function(v){var d=i(v),b=Xb($,d);u=r2(u,$,b,o),$=d})})}),Dy,Hy=Dy||U(function(e,r,a,t){return G0(r,t,e.b1,e.uX,e.aC,function(o,c){var i=e.kV&&e.kV(o),u=e.bt,$=$a.title,v=$a.body,d=nv(v);return a2(c,function(b){Jf=i;var h=u(b),g=$n("body")(P)(h.hh),y=Xb(d,g);v=r2(v,d,y,o),d=g,Jf=0,$!==h.iT&&($a.title=$=h.iT)})})}),Ay=typeof cancelAnimationFrame<"u"?cancelAnimationFrame:function(e){clearTimeout(e)},eu=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function a2(e,r){r(e);var a=0;function t(){a=a===1?0:(eu(t),r(e),1)}return function(o,c){e=o,c?(r(e),a===2&&(a=1)):(a===0&&eu(t),a=2)}}function cG(e){var r=e.ti,a=e.tj,t=function(){t.a(r(tv()))};return Hy({kV:function(o){return t.a=o,ot.addEventListener("popstate",t),ot.navigator.userAgent.indexOf("Trident")<0||ot.addEventListener("hashchange",t),l(function(c,i){if(!i.ctrlKey&&!i.metaKey&&!i.shiftKey&&i.button<1&&!c.target&&!c.hasAttribute("download")){i.preventDefault();var u=c.href,$=tv(),v=Z2(u).a;o(a(v&&$.oD===v.oD&&$.mX===v.mX&&$.ox.a===v.ox.a?qC(v):WC(u)))}})},b1:function(o){return s(e.b1,o,tv(),t)},bt:e.bt,uX:e.uX,aC:e.aC})}function tv(){return Z2($a.location.href).a||Mn(1)}var iG=l(function(e,r){return n(fu,Uo,Qr(function(){r&&history.go(r),e()}))}),uG=l(function(e,r){return n(fu,Uo,Qr(function(){history.pushState({},"",r),e()}))}),fG=l(function(e,r){return n(fu,Uo,Qr(function(){history.replaceState({},"",r),e()}))}),n2={addEventListener:function(){},removeEventListener:function(){}},Fo=typeof document<"u"?document:n2,ot=typeof window<"u"?window:n2,By=S(function(e,r,a){return U0(Qr(function(t){function o(c){J0(a(c))}return e.addEventListener(r,o,rv&&{passive:!0}),function(){e.removeEventListener(r,o)}}))}),Iy=l(function(e,r){var a=un(e,r);return Bn(a)?D(a.a):w});function $G(){return typeof $a.hidden<"u"?{jP:"hidden",qs:"visibilitychange"}:typeof $a.mozHidden<"u"?{jP:"mozHidden",qs:"mozvisibilitychange"}:typeof $a.msHidden<"u"?{jP:"msHidden",qs:"msvisibilitychange"}:typeof $a.webkitHidden<"u"?{jP:"webkitHidden",qs:"webkitvisibilitychange"}:{jP:"hidden",qs:"visibilitychange"}}function Ey(){return Qr(function(e){var r=eu(function(){e(qa(Date.now()))});return function(){Ay(r)}})}function Fy(){return Qr(function(e){e(qa(Date.now()))})}function Gf(e,r){return Qr(function(a){eu(function(){var t=document.getElementById(e);a(t?qa(r(t)):R0(GC(e)))})})}function Vy(e){return Qr(function(r){eu(function(){r(qa(e()))})})}var Ry=l(function(e,r){return Gf(r,function(a){return a[e](),Eo})});function lG(){return{oR:t2(),pA:{pH:ot.pageXOffset,pJ:ot.pageYOffset,va:Fo.documentElement.clientWidth,rW:Fo.documentElement.clientHeight}}}function t2(){var e=Fo.body,r=Fo.documentElement;return{va:Math.max(e.scrollWidth,e.offsetWidth,r.scrollWidth,r.offsetWidth,r.clientWidth),rW:Math.max(e.scrollHeight,e.offsetHeight,r.scrollHeight,r.offsetHeight,r.clientHeight)}}var vG=l(function(e,r){return Vy(function(){return ot.scroll(e,r),Eo})});function sG(e){return Gf(e,function(r){return{oR:{va:r.scrollWidth,rW:r.scrollHeight},pA:{pH:r.scrollLeft,pJ:r.scrollTop,va:r.clientWidth,rW:r.clientHeight}}})}var Oy=S(function(e,r,a){return Gf(e,function(t){return t.scrollLeft=r,t.scrollTop=a,Eo})});function dG(e){return Gf(e,function(r){var a=r.getBoundingClientRect(),t=ot.pageXOffset,o=ot.pageYOffset;return{oR:t2(),pA:{pH:t,pJ:o,va:Fo.documentElement.clientWidth,rW:Fo.documentElement.clientHeight},rf:{pH:t+a.left,pJ:o+a.top,va:a.width,rW:a.height}}})}function bG(e){return n(fu,Uo,Qr(function(r){$a.location.reload(e)}))}function pG(e){return n(fu,Uo,Qr(function(r){try{ot.location=e}catch{$a.location.reload(!1)}}))}var Jy=Rr(function(e,r,a,t,o,c){var i=r!==9728&&r!==9729;return Qr(function(u){var $=new Image;function v(d){var b=d.createTexture();return d.bindTexture(d.TEXTURE_2D,b),d.pixelStorei(d.UNPACK_FLIP_Y_WEBGL,o),d.texImage2D(d.TEXTURE_2D,0,d.RGBA,d.RGBA,d.UNSIGNED_BYTE,$),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MAG_FILTER,e),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MIN_FILTER,r),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_S,a),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_T,t),i&&d.generateMipmap(d.TEXTURE_2D),d.bindTexture(d.TEXTURE_2D,null),b}$.onload=function(){var d=$.width,b=$.height,h=(d&d-1)===0,g=(b&b-1)===0,y=h&&g||!i&&a===33071&&t===33071;u(y?qa({$:0,qN:v,a:d,b}):R0(n(Dj,d,b)))},$.onerror=function(){u(R0(zj))},c.slice(0,5)!=="data:"&&($.crossOrigin="Anonymous"),$.src=c})}),mG=function(e){return p(e.a,e.b)};function o2(e){return e.byteLength}var hG=l(function(e,r){return Qr(function(a){a(qa(new Uint8Array(new Uint32Array([1]))[0]===1?e:r))})});function Uy(e){var r=new DataView(new ArrayBuffer(i6(e)));return u6(e)(r)(0),r}var Wy=S(function(e,r,a){return e.setInt8(r,a),r+1}),qy=U(function(e,r,a,t){return e.setInt16(r,a,t),r+2}),Gy=U(function(e,r,a,t){return e.setInt32(r,a,t),r+4}),Ny=S(function(e,r,a){return e.setUint8(r,a),r+1}),Zy=U(function(e,r,a,t){return e.setUint16(r,a,t),r+2}),Yy=U(function(e,r,a,t){return e.setUint32(r,a,t),r+4}),Xy=U(function(e,r,a,t){return e.setFloat32(r,a,t),r+4}),Qy=U(function(e,r,a,t){return e.setFloat64(r,a,t),r+8}),Ky=S(function(e,r,a){for(var t=0,o=a.byteLength,c=o-4;t<=c;t+=4)e.setUint32(r+t,a.getUint32(t));for(;t<o;t++)e.setUint8(r+t,a.getUint8(t));return r+o});function gG(e){for(var r=0,a=0;a<e.length;a++){var t=e.charCodeAt(a);r+=t<128?1:t<2048?2:t<55296||56319<t?3:(a++,4)}return r}var e_=S(function(e,r,a){for(var t=0;t<a.length;t++){var o=a.charCodeAt(t);r+=o<128?(e.setUint8(r,o),1):o<2048?(e.setUint16(r,49280|(o>>>6&31)<<8|o&63),2):o<55296||56319<o?(e.setUint16(r,57472|(o>>>12&15)<<8|o>>>6&63),e.setUint8(r+2,128|o&63),3):(o=(o-55296)*1024+a.charCodeAt(++t)-56320+65536,e.setUint32(r,4034953344|(o>>>18&7)<<24|(o>>>12&63)<<16|(o>>>6&63)<<8|o&63),4)}return r}),r_=l(function(e,r){try{return D(n(e,r,0).b)}catch{return w}}),yG=l(function(e,r){return p(r+1,e.getInt8(r))}),_G=S(function(e,r,a){return p(a+2,r.getInt16(a,e))}),CG=S(function(e,r,a){return p(a+4,r.getInt32(a,e))}),a_=l(function(e,r){return p(r+1,e.getUint8(r))}),n_=S(function(e,r,a){return p(a+2,r.getUint16(a,e))}),t_=S(function(e,r,a){return p(a+4,r.getUint32(a,e))}),PG=S(function(e,r,a){return p(a+4,r.getFloat32(a,e))}),SG=S(function(e,r,a){return p(a+8,r.getFloat64(a,e))}),o_=S(function(e,r,a){return p(a+e,new DataView(r.buffer,r.byteOffset+a,e))}),c_=S(function(e,r,a){for(var t="",o=a+e;a<o;){var c=r.getUint8(a++);t+=c<128?String.fromCharCode(c):(c&224)===192?String.fromCharCode((c&31)<<6|r.getUint8(a++)&63):(c&240)===224?String.fromCharCode((c&15)<<12|(r.getUint8(a++)&63)<<6|r.getUint8(a++)&63):(c=((c&7)<<18|(r.getUint8(a++)&63)<<12|(r.getUint8(a++)&63)<<6|r.getUint8(a++)&63)-65536,String.fromCharCode(Math.floor(c/1024)+55296,c%1024+56320))}return p(a,t)}),i_=l(function(){throw 0}),u_=l(function(e,r){return new Float64Array([e,r])}),xG=function(e){return e[0]},jG=function(e){return e[1]},kG=l(function(e,r){return new Float64Array([e,r[1]])}),wG=l(function(e,r){return new Float64Array([r[0],e])}),TG=function(e){return{pH:e[0],pJ:e[1]}},LG=function(e){return new Float64Array([e.pH,e.pJ])},MG=l(function(e,r){var a=new Float64Array(2);return a[0]=e[0]+r[0],a[1]=e[1]+r[1],a}),zG=l(function(e,r){var a=new Float64Array(2);return a[0]=e[0]-r[0],a[1]=e[1]-r[1],a}),DG=function(e){var r=new Float64Array(2);return r[0]=-e[0],r[1]=-e[1],r},HG=l(function(e,r){var a=new Float64Array(2);a[0]=e[0]-r[0],a[1]=e[1]-r[1];var t=1/ov(a);return a[0]=a[0]*t,a[1]=a[1]*t,a});function ov(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}var AG=ov,BG=function(e){return e[0]*e[0]+e[1]*e[1]},IG=l(function(e,r){var a=e[0]-r[0],t=e[1]-r[1];return Math.sqrt(a*a+t*t)}),EG=l(function(e,r){var a=e[0]-r[0],t=e[1]-r[1];return a*a+t*t}),FG=function(e){var r=new Float64Array(2),a=1/ov(e);return r[0]=e[0]*a,r[1]=e[1]*a,r},VG=l(function(e,r){var a=new Float64Array(2);return a[0]=r[0]*e,a[1]=r[1]*e,a}),RG=l(function(e,r){return e[0]*r[0]+e[1]*r[1]}),cv=new Float64Array(3),c2=new Float64Array(3),i2=new Float64Array(3),f_=S(function(e,r,a){return new Float64Array([e,r,a])}),$_=function(e){return e[0]},l_=function(e){return e[1]},v_=function(e){return e[2]},OG=l(function(e,r){return new Float64Array([e,r[1],r[2]])}),JG=l(function(e,r){return new Float64Array([r[0],e,r[2]])}),UG=l(function(e,r){return new Float64Array([r[0],r[1],e])}),WG=function(e){return{pH:e[0],pJ:e[1],O:e[2]}},s_=function(e){return new Float64Array([e.pH,e.pJ,e.O])},qG=l(function(e,r){var a=new Float64Array(3);return a[0]=e[0]+r[0],a[1]=e[1]+r[1],a[2]=e[2]+r[2],a});function u2(e,r,a){return a===void 0&&(a=new Float64Array(3)),a[0]=e[0]-r[0],a[1]=e[1]-r[1],a[2]=e[2]-r[2],a}var GG=l(u2),NG=function(e){var r=new Float64Array(3);return r[0]=-e[0],r[1]=-e[1],r[2]=-e[2],r};function f2(e,r,a){return a===void 0&&(a=new Float64Array(3)),ru(u2(e,r,a),a)}var ZG=l(f2);function iv(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}var YG=iv,XG=function(e){return e[0]*e[0]+e[1]*e[1]+e[2]*e[2]},QG=l(function(e,r){var a=e[0]-r[0],t=e[1]-r[1],o=e[2]-r[2];return Math.sqrt(a*a+t*t+o*o)}),KG=l(function(e,r){var a=e[0]-r[0],t=e[1]-r[1],o=e[2]-r[2];return a*a+t*t+o*o});function ru(e,r){r===void 0&&(r=new Float64Array(3));var a=1/iv(e);return r[0]=e[0]*a,r[1]=e[1]*a,r[2]=e[2]*a,r}var eN=ru,rN=l(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),co=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]},aN=l(co);function uv(e,r,a){return a===void 0&&(a=new Float64Array(3)),a[0]=e[1]*r[2]-e[2]*r[1],a[1]=e[2]*r[0]-e[0]*r[2],a[2]=e[0]*r[1]-e[1]*r[0],a}var nN=l(uv),tN=l(function(e,r){var a,t=cv,o=new Float64Array(3);return t[0]=e[3],t[1]=e[7],t[2]=e[11],a=co(r,t)+e[15],t[0]=e[0],t[1]=e[4],t[2]=e[8],o[0]=(co(r,t)+e[12])/a,t[0]=e[1],t[1]=e[5],t[2]=e[9],o[1]=(co(r,t)+e[13])/a,t[0]=e[2],t[1]=e[6],t[2]=e[10],o[2]=(co(r,t)+e[14])/a,o}),d_=U(function(e,r,a,t){return new Float64Array([e,r,a,t])}),b_=function(e){return e[0]},p_=function(e){return e[1]},m_=function(e){return e[2]},h_=function(e){return e[3]},oN=l(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])}),cN=l(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])}),iN=l(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])}),uN=l(function(e,r){return new Float64Array([r[0],r[1],r[2],e])}),g_=function(e){return{pH:e[0],pJ:e[1],O:e[2],u7:e[3]}},y_=function(e){return new Float64Array([e.pH,e.pJ,e.O,e.u7])},fN=l(function(e,r){var a=new Float64Array(4);return a[0]=e[0]+r[0],a[1]=e[1]+r[1],a[2]=e[2]+r[2],a[3]=e[3]+r[3],a}),$N=l(function(e,r){var a=new Float64Array(4);return a[0]=e[0]-r[0],a[1]=e[1]-r[1],a[2]=e[2]-r[2],a[3]=e[3]-r[3],a}),lN=function(e){var r=new Float64Array(4);return r[0]=-e[0],r[1]=-e[1],r[2]=-e[2],r[3]=-e[3],r},vN=l(function(e,r){var a=new Float64Array(4);a[0]=e[0]-r[0],a[1]=e[1]-r[1],a[2]=e[2]-r[2],a[3]=e[3]-r[3];var t=1/fv(a);return a[0]=a[0]*t,a[1]=a[1]*t,a[2]=a[2]*t,a[3]=a[3]*t,a});function fv(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}var sN=fv,dN=function(e){return e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3]},bN=l(function(e,r){var a=e[0]-r[0],t=e[1]-r[1],o=e[2]-r[2],c=e[3]-r[3];return Math.sqrt(a*a+t*t+o*o+c*c)}),pN=l(function(e,r){var a=e[0]-r[0],t=e[1]-r[1],o=e[2]-r[2],c=e[3]-r[3];return a*a+t*t+o*o+c*c}),mN=function(e){var r=new Float64Array(4),a=1/fv(e);return r[0]=e[0]*a,r[1]=e[1]*a,r[2]=e[2]*a,r[3]=e[3]*a,r},__=l(function(e,r){var a=new Float64Array(4);return a[0]=r[0]*e,a[1]=r[1]*e,a[2]=r[2]*e,a[3]=r[3]*e,a}),hN=l(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]}),C_=new Float64Array(16),P_=new Float64Array(16),gN=new Float64Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),S_=function(e){var r=new Float64Array(16);return r[0]=e.nz,r[1]=e.nD,r[2]=e.nH,r[3]=e.nL,r[4]=e.nA,r[5]=e.nE,r[6]=e.nI,r[7]=e.nM,r[8]=e.nB,r[9]=e.nF,r[10]=e.nJ,r[11]=e.nN,r[12]=e.nC,r[13]=e.nG,r[14]=e.nK,r[15]=e.nO,r},x_=function(e){return{nz:e[0],nD:e[1],nH:e[2],nL:e[3],nA:e[4],nE:e[5],nI:e[6],nM:e[7],nB:e[8],nF:e[9],nJ:e[10],nN:e[11],nC:e[12],nG:e[13],nK:e[14],nO:e[15]}},yN=function(e){var r=new Float64Array(16);r[0]=e[5]*e[10]*e[15]-e[5]*e[11]*e[14]-e[9]*e[6]*e[15]+e[9]*e[7]*e[14]+e[13]*e[6]*e[11]-e[13]*e[7]*e[10],r[4]=-e[4]*e[10]*e[15]+e[4]*e[11]*e[14]+e[8]*e[6]*e[15]-e[8]*e[7]*e[14]-e[12]*e[6]*e[11]+e[12]*e[7]*e[10],r[8]=e[4]*e[9]*e[15]-e[4]*e[11]*e[13]-e[8]*e[5]*e[15]+e[8]*e[7]*e[13]+e[12]*e[5]*e[11]-e[12]*e[7]*e[9],r[12]=-e[4]*e[9]*e[14]+e[4]*e[10]*e[13]+e[8]*e[5]*e[14]-e[8]*e[6]*e[13]-e[12]*e[5]*e[10]+e[12]*e[6]*e[9],r[1]=-e[1]*e[10]*e[15]+e[1]*e[11]*e[14]+e[9]*e[2]*e[15]-e[9]*e[3]*e[14]-e[13]*e[2]*e[11]+e[13]*e[3]*e[10],r[5]=e[0]*e[10]*e[15]-e[0]*e[11]*e[14]-e[8]*e[2]*e[15]+e[8]*e[3]*e[14]+e[12]*e[2]*e[11]-e[12]*e[3]*e[10],r[9]=-e[0]*e[9]*e[15]+e[0]*e[11]*e[13]+e[8]*e[1]*e[15]-e[8]*e[3]*e[13]-e[12]*e[1]*e[11]+e[12]*e[3]*e[9],r[13]=e[0]*e[9]*e[14]-e[0]*e[10]*e[13]-e[8]*e[1]*e[14]+e[8]*e[2]*e[13]+e[12]*e[1]*e[10]-e[12]*e[2]*e[9],r[2]=e[1]*e[6]*e[15]-e[1]*e[7]*e[14]-e[5]*e[2]*e[15]+e[5]*e[3]*e[14]+e[13]*e[2]*e[7]-e[13]*e[3]*e[6],r[6]=-e[0]*e[6]*e[15]+e[0]*e[7]*e[14]+e[4]*e[2]*e[15]-e[4]*e[3]*e[14]-e[12]*e[2]*e[7]+e[12]*e[3]*e[6],r[10]=e[0]*e[5]*e[15]-e[0]*e[7]*e[13]-e[4]*e[1]*e[15]+e[4]*e[3]*e[13]+e[12]*e[1]*e[7]-e[12]*e[3]*e[5],r[14]=-e[0]*e[5]*e[14]+e[0]*e[6]*e[13]+e[4]*e[1]*e[14]-e[4]*e[2]*e[13]-e[12]*e[1]*e[6]+e[12]*e[2]*e[5],r[3]=-e[1]*e[6]*e[11]+e[1]*e[7]*e[10]+e[5]*e[2]*e[11]-e[5]*e[3]*e[10]-e[9]*e[2]*e[7]+e[9]*e[3]*e[6],r[7]=e[0]*e[6]*e[11]-e[0]*e[7]*e[10]-e[4]*e[2]*e[11]+e[4]*e[3]*e[10]+e[8]*e[2]*e[7]-e[8]*e[3]*e[6],r[11]=-e[0]*e[5]*e[11]+e[0]*e[7]*e[9]+e[4]*e[1]*e[11]-e[4]*e[3]*e[9]-e[8]*e[1]*e[7]+e[8]*e[3]*e[5],r[15]=e[0]*e[5]*e[10]-e[0]*e[6]*e[9]-e[4]*e[1]*e[10]+e[4]*e[2]*e[9]+e[8]*e[1]*e[6]-e[8]*e[2]*e[5];var a=e[0]*r[0]+e[1]*r[4]+e[2]*r[8]+e[3]*r[12];if(a===0)return w;a=1/a;for(var t=0;t<16;t=t+1)r[t]=r[t]*a;return D(r)},_N=function(e){var r=b2(e),a=[e[12],e[13],e[14]];return r[3]=r[7]=r[11]=0,r[12]=-co([r[0],r[4],r[8]],a),r[13]=-co([r[1],r[5],r[9]],a),r[14]=-co([r[2],r[6],r[10]],a),r};function $2(e,r,a,t,o,c){var i=new Float64Array(16);return i[0]=2*o/(r-e),i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=2*o/(t-a),i[6]=0,i[7]=0,i[8]=(r+e)/(r-e),i[9]=(t+a)/(t-a),i[10]=-(c+o)/(c-o),i[11]=-1,i[12]=0,i[13]=0,i[14]=-2*c*o/(c-o),i[15]=0,i}var CN=Rr($2),PN=U(function(e,r,a,t){var o=a*Math.tan(e*Math.PI/360),c=-o,i=c*r,u=o*r;return $2(i,u,c,o,a,t)});function l2(e,r,a,t,o,c){var i=new Float64Array(16);return i[0]=2/(r-e),i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=2/(t-a),i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=-2/(c-o),i[11]=0,i[12]=-(r+e)/(r-e),i[13]=-(t+a)/(t-a),i[14]=-(c+o)/(c-o),i[15]=1,i}var SN=Rr(l2),xN=U(function(e,r,a,t){return l2(e,r,a,t,-1,1)});function v2(e,r){var a=new Float64Array(16),t=e[0],o=e[1],c=e[2],i=e[3],u=e[4],$=e[5],v=e[6],d=e[7],b=e[8],h=e[9],g=e[10],y=e[11],_=e[12],x=e[13],T=e[14],L=e[15],B=r[0],R=r[1],V=r[2],W=r[3],Y=r[4],oe=r[5],$e=r[6],pe=r[7],we=r[8],Ae=r[9],Re=r[10],rr=r[11],K=r[12],Je=r[13],ar=r[14],nr=r[15];return a[0]=t*B+u*R+b*V+_*W,a[1]=o*B+$*R+h*V+x*W,a[2]=c*B+v*R+g*V+T*W,a[3]=i*B+d*R+y*V+L*W,a[4]=t*Y+u*oe+b*$e+_*pe,a[5]=o*Y+$*oe+h*$e+x*pe,a[6]=c*Y+v*oe+g*$e+T*pe,a[7]=i*Y+d*oe+y*$e+L*pe,a[8]=t*we+u*Ae+b*Re+_*rr,a[9]=o*we+$*Ae+h*Re+x*rr,a[10]=c*we+v*Ae+g*Re+T*rr,a[11]=i*we+d*Ae+y*Re+L*rr,a[12]=t*K+u*Je+b*ar+_*nr,a[13]=o*K+$*Je+h*ar+x*nr,a[14]=c*K+v*Je+g*ar+T*nr,a[15]=i*K+d*Je+y*ar+L*nr,a}var jN=l(v2),kN=l(function(e,r){var a=new Float64Array(16),t=e[0],o=e[1],c=e[2],i=e[4],u=e[5],$=e[6],v=e[8],d=e[9],b=e[10],h=e[12],g=e[13],y=e[14],_=r[0],x=r[1],T=r[2],L=r[4],B=r[5],R=r[6],V=r[8],W=r[9],Y=r[10],oe=r[12],$e=r[13],pe=r[14];return a[0]=t*_+i*x+v*T,a[1]=o*_+u*x+d*T,a[2]=c*_+$*x+b*T,a[3]=0,a[4]=t*L+i*B+v*R,a[5]=o*L+u*B+d*R,a[6]=c*L+$*B+b*R,a[7]=0,a[8]=t*V+i*W+v*Y,a[9]=o*V+u*W+d*Y,a[10]=c*V+$*W+b*Y,a[11]=0,a[12]=t*oe+i*$e+v*pe+h,a[13]=o*oe+u*$e+d*pe+g,a[14]=c*oe+$*$e+b*pe+y,a[15]=1,a}),wN=l(function(e,r){var a=new Float64Array(16);r=ru(r,cv);var t=r[0],o=r[1],c=r[2],i=Math.cos(e),u=1-i,$=Math.sin(e);return a[0]=t*t*u+i,a[1]=o*t*u+c*$,a[2]=c*t*u-o*$,a[3]=0,a[4]=t*o*u-c*$,a[5]=o*o*u+i,a[6]=o*c*u+t*$,a[7]=0,a[8]=t*c*u+o*$,a[9]=o*c*u-t*$,a[10]=c*c*u+i,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}),TN=S(function(e,r,a){var t=new Float64Array(16),o=1/iv(r),c=r[0]*o,i=r[1]*o,u=r[2]*o,$=Math.cos(e),v=1-$,d=Math.sin(e),b=c*d,h=i*d,g=u*d,y=c*i*v,_=c*u*v,x=i*u*v,T=c*c*v+$,L=y+g,B=_-h,R=y-g,V=i*i*v+$,W=x+b,Y=_+h,oe=x-b,$e=u*u*v+$,pe=a[0],we=a[1],Ae=a[2],Re=a[3],rr=a[4],K=a[5],Je=a[6],ar=a[7],nr=a[8],Dr=a[9],Ke=a[10],sr=a[11],Vr=a[12],oa=a[13],Wa=a[14],tn=a[15];return t[0]=pe*T+rr*L+nr*B,t[1]=we*T+K*L+Dr*B,t[2]=Ae*T+Je*L+Ke*B,t[3]=Re*T+ar*L+sr*B,t[4]=pe*R+rr*V+nr*W,t[5]=we*R+K*V+Dr*W,t[6]=Ae*R+Je*V+Ke*W,t[7]=Re*R+ar*V+sr*W,t[8]=pe*Y+rr*oe+nr*$e,t[9]=we*Y+K*oe+Dr*$e,t[10]=Ae*Y+Je*oe+Ke*$e,t[11]=Re*Y+ar*oe+sr*$e,t[12]=Vr,t[13]=oa,t[14]=Wa,t[15]=tn,t});function s2(e,r,a){var t=new Float64Array(16);return t[0]=e,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}var LN=S(s2),MN=function(e){return s2(e[0],e[1],e[2])},zN=U(function(e,r,a,t){var o=new Float64Array(16);return o[0]=t[0]*e,o[1]=t[1]*e,o[2]=t[2]*e,o[3]=t[3]*e,o[4]=t[4]*r,o[5]=t[5]*r,o[6]=t[6]*r,o[7]=t[7]*r,o[8]=t[8]*a,o[9]=t[9]*a,o[10]=t[10]*a,o[11]=t[11]*a,o[12]=t[12],o[13]=t[13],o[14]=t[14],o[15]=t[15],o}),DN=l(function(e,r){var a=new Float64Array(16),t=e[0],o=e[1],c=e[2];return a[0]=r[0]*t,a[1]=r[1]*t,a[2]=r[2]*t,a[3]=r[3]*t,a[4]=r[4]*o,a[5]=r[5]*o,a[6]=r[6]*o,a[7]=r[7]*o,a[8]=r[8]*c,a[9]=r[9]*c,a[10]=r[10]*c,a[11]=r[11]*c,a[12]=r[12],a[13]=r[13],a[14]=r[14],a[15]=r[15],a});function d2(e,r,a){var t=new Float64Array(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e,t[13]=r,t[14]=a,t[15]=1,t}var HN=S(d2),AN=function(e){return d2(e[0],e[1],e[2])},BN=U(function(e,r,a,t){var o=new Float64Array(16),c=t[0],i=t[1],u=t[2],$=t[3],v=t[4],d=t[5],b=t[6],h=t[7],g=t[8],y=t[9],_=t[10],x=t[11];return o[0]=c,o[1]=i,o[2]=u,o[3]=$,o[4]=v,o[5]=d,o[6]=b,o[7]=h,o[8]=g,o[9]=y,o[10]=_,o[11]=x,o[12]=c*e+v*r+g*a+t[12],o[13]=i*e+d*r+y*a+t[13],o[14]=u*e+b*r+_*a+t[14],o[15]=$*e+h*r+x*a+t[15],o}),IN=l(function(e,r){var a=new Float64Array(16),t=e[0],o=e[1],c=e[2],i=r[0],u=r[1],$=r[2],v=r[3],d=r[4],b=r[5],h=r[6],g=r[7],y=r[8],_=r[9],x=r[10],T=r[11];return a[0]=i,a[1]=u,a[2]=$,a[3]=v,a[4]=d,a[5]=b,a[6]=h,a[7]=g,a[8]=y,a[9]=_,a[10]=x,a[11]=T,a[12]=i*t+d*o+y*c+r[12],a[13]=u*t+b*o+_*c+r[13],a[14]=$*t+h*o+x*c+r[14],a[15]=v*t+g*o+T*c+r[15],a}),EN=S(function(e,r,a){var t=f2(e,r,cv),o=ru(uv(a,t,c2),c2),c=ru(uv(t,o,i2),i2),i=C_,u=P_;return i[0]=o[0],i[1]=c[0],i[2]=t[0],i[3]=0,i[4]=o[1],i[5]=c[1],i[6]=t[1],i[7]=0,i[8]=o[2],i[9]=c[2],i[10]=t[2],i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,u[0]=1,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=1,u[11]=0,u[12]=-e[0],u[13]=-e[1],u[14]=-e[2],u[15]=1,v2(i,u)});function b2(e){var r=new Float64Array(16);return r[0]=e[0],r[1]=e[4],r[2]=e[8],r[3]=e[12],r[4]=e[1],r[5]=e[5],r[6]=e[9],r[7]=e[13],r[8]=e[2],r[9]=e[6],r[10]=e[10],r[11]=e[14],r[12]=e[3],r[13]=e[7],r[14]=e[11],r[15]=e[15],r}var FN=b2,VN=S(function(e,r,a){var t=new Float64Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=0,t[4]=r[0],t[5]=r[1],t[6]=r[2],t[7]=0,t[8]=a[0],t[9]=a[1],t[10]=a[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}),p2=0;function au(e,r){for(;r.b;r=r.b)e(r.a)}function $v(e){for(var r=0;e.b;e=e.b)r++;return r}var j_=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},k_=Te(function(e,r,a,t,o){return{$:0,a:e,b:r,c:a,d:t,e:o}}),w_=l(function(e,r){var a=e.blend;a.toggle=e.toggle,a.enabled||(e.gl.enable(e.gl.BLEND),a.enabled=!0),(a.a!==r.a||a.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),a.a=r.a,a.d=r.d),(a.b!==r.b||a.c!==r.c||a.e!==r.e||a.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),a.b=r.b,a.c=r.c,a.e=r.e,a.f=r.f),(a.g!==r.g||a.h!==r.h||a.i!==r.i||a.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),a.g=r.g,a.h=r.h,a.i=r.i,a.j=r.j)}),T_=l(function(e,r){var a=e.depthTest;a.toggle=e.toggle,a.enabled||(e.gl.enable(e.gl.DEPTH_TEST),a.enabled=!0),a.a!==r.a&&(e.gl.depthFunc(r.a),a.a=r.a),a.b!==r.b&&(e.gl.depthMask(r.b),a.b=r.b),(a.c!==r.c||a.d!==r.d)&&(e.gl.depthRange(r.c,r.d),a.c=r.c,a.d=r.d)}),L_=l(function(e,r){var a=e.stencilTest;a.toggle=e.toggle,a.enabled||(e.gl.enable(e.gl.STENCIL_TEST),a.enabled=!0),(a.d!==r.d||a.a!==r.a||a.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),a.d=r.d),(a.e!==r.e||a.f!==r.f||a.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),a.e=r.e,a.f=r.f,a.g=r.g),a.c!==r.c&&(e.gl.stencilMask(r.c),a.c=r.c),(a.h!==r.h||a.a!==r.a||a.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),a.h=r.h,a.a=r.a,a.b=r.b),(a.i!==r.i||a.j!==r.j||a.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),a.i=r.i,a.j=r.j,a.k=r.k)}),M_=l(function(e,r){var a=e.scissor;a.toggle=e.toggle,a.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),a.enabled=!0),(a.a!==r.a||a.b!==r.b||a.c!==r.c||a.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),a.a=r.a,a.b=r.b,a.c=r.c,a.d=r.d)}),z_=l(function(e,r){var a=e.colorMask;a.toggle=e.toggle,a.enabled=!0,(a.a!==r.a||a.b!==r.b||a.c!==r.c||a.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),a.a=r.a,a.b=r.b,a.c=r.c,a.d=r.d)}),D_=l(function(e,r){var a=e.cullFace;a.toggle=e.toggle,a.enabled||(e.gl.enable(e.gl.CULL_FACE),a.enabled=!0),a.a!==r.a&&(e.gl.cullFace(r.a),a.a=r.a)}),H_=l(function(e,r){var a=e.polygonOffset;a.toggle=e.toggle,a.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),a.enabled=!0),(a.a!==r.a||a.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),a.a=r.a,a.b=r.b)}),A_=l(function(e,r){var a=e.sampleCoverage;a.toggle=e.toggle,a.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),a.enabled=!0),(a.a!==r.a||a.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),a.a=r.a,a.b=r.b)}),B_=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},I_=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},E_=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},F_=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},m2=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},h2=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},V_=function(e){e.gl.disable(e.gl.CULL_FACE)},R_=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},O_=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},J_=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},g2=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],U_=[I_,E_,F_,m2,h2,V_,R_,O_,J_];function y2(e,r,a){var t=e.createShader(a);return e.shaderSource(t,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(t),t}function W_(e,r,a){var t=e.createProgram();if(e.attachShader(t,r),e.attachShader(t,a),e.linkProgram(t),!e.getProgramParameter(t,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(t)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(a);return t}function _2(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function q_(e,r,a,t){for(var o=a.a.mr,c=[],i=0;i<o;i++)c.push(String.fromCharCode(97+i));function u(g,y,_,x,T){var L;if(o===1)for(L=0;L<y;L++)g[_++]=y===1?x[T]:x[T][L];else c.forEach(function(B){for(L=0;L<y;L++)g[_++]=y===1?x[B][T]:x[B][T][L]})}var $=_2(e,r.type);if($===void 0)throw new Error("No info available for: "+r.type);var v=0,d=$.size*$.arraySize*o,b=new $.type($v(a.b)*d);au(function(g){u(b,$.size*$.arraySize,v,g,t[r.name]||r.name),v+=d},a.b);var h=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,h),e.bufferData(e.ARRAY_BUFFER,b,e.STATIC_DRAW),h}function G_(e,r){if(r.a.m0>0){var a=e.createBuffer(),t=N_(r.c,r.a.m0);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,a),e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW),{numIndices:t.length,indexBuffer:a,buffers:{}}}else return{numIndices:r.a.mr*$v(r.b),indexBuffer:null,buffers:{}}}function N_(e,r){var a=new Uint32Array($v(e)*r),t=0,o;return au(function(c){if(r===1)a[t++]=c;else for(o=0;o<r;o++)a[t++]=c[String.fromCharCode(97+o)]},e),a}function C2(e,r){return e+"#"+r}var P2=l(function(e,r){var a=e.f,t=a.gl;if(!t)return r;t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),a.depthTest.b||(t.depthMask(!0),a.depthTest.b=!0),a.stencilTest.c!==a.STENCIL_WRITEMASK&&(t.stencilMask(a.STENCIL_WRITEMASK),a.stencilTest.c=a.STENCIL_WRITEMASK),m2(a),h2(a),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT|t.STENCIL_BUFFER_BIT);function o(c){if(c.d.b.b){var i,u,$;if(c.b.id&&c.c.id&&(i=C2(c.b.id,c.c.id),u=a.programs[i]),!u){var v;c.b.id?v=a.shaders[c.b.id]:c.b.id=p2++,v||(v=y2(t,c.b.src,t.VERTEX_SHADER),a.shaders[c.b.id]=v);var d;c.c.id?d=a.shaders[c.c.id]:c.c.id=p2++,d||(d=y2(t,c.c.src,t.FRAGMENT_SHADER),a.shaders[c.c.id]=d);var b=W_(t,v,d);u={glProgram:b,attributes:Object.assign({},c.b.attributes,c.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},u.uniformSetters=Z_(t,e,u,Object.assign({},c.b.uniforms,c.c.uniforms));var h=t.getProgramParameter(b,t.ACTIVE_ATTRIBUTES);for($=0;$<h;$++){var g=t.getActiveAttrib(b,$),y=t.getAttribLocation(b,g.name);u.activeAttributes.push(g),u.activeAttributeLocations.push(y)}i=C2(c.b.id,c.c.id),a.programs[i]=u}a.lastProgId!==i&&(t.useProgram(u.glProgram),a.lastProgId=i),Y_(u.uniformSetters,c.e);var _=a.buffers.get(c.d);for(_||(_=G_(t,c.d),a.buffers.set(c.d,_)),$=0;$<u.activeAttributes.length;$++){g=u.activeAttributes[$],y=u.activeAttributeLocations[$],_.buffers[g.name]===void 0&&(_.buffers[g.name]=q_(t,g,c.d,u.attributes)),t.bindBuffer(t.ARRAY_BUFFER,_.buffers[g.name]);var x=_2(t,g.type);if(x.arraySize===1)t.enableVertexAttribArray(y),t.vertexAttribPointer(y,x.size,x.baseType,!1,0,0);else for(var T=x.size*4,L=T*x.arraySize,B=0;B<x.arraySize;B++)t.enableVertexAttribArray(y+B),t.vertexAttribPointer(y+B,x.size,x.baseType,!1,L,T*B)}for(a.toggle=!a.toggle,au(yR(a),c.a),$=0;$<g2.length;$++){var R=a[g2[$]];R.toggle!==a.toggle&&R.enabled&&(U_[$](a),R.enabled=!1,R.toggle=a.toggle)}_.indexBuffer?(t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,_.indexBuffer),t.drawElements(c.d.a.n$,_.numIndices,t.UNSIGNED_INT,0)):t.drawArrays(c.d.a.n$,0,_.numIndices)}}return au(o,e.g),r});function Z_(e,r,a,t){var o=a.glProgram,c=a.currentUniforms,i=0,u=r.f;function $(g,y){var _=y.name,x=e.getUniformLocation(g,_);switch(y.type){case e.INT:return function(L){c[_]!==L&&(e.uniform1i(x,L),c[_]=L)};case e.FLOAT:return function(L){c[_]!==L&&(e.uniform1f(x,L),c[_]=L)};case e.FLOAT_VEC2:return function(L){c[_]!==L&&(e.uniform2f(x,L[0],L[1]),c[_]=L)};case e.FLOAT_VEC3:return function(L){c[_]!==L&&(e.uniform3f(x,L[0],L[1],L[2]),c[_]=L)};case e.FLOAT_VEC4:return function(L){c[_]!==L&&(e.uniform4f(x,L[0],L[1],L[2],L[3]),c[_]=L)};case e.FLOAT_MAT4:return function(L){c[_]!==L&&(e.uniformMatrix4fv(x,!1,new Float32Array(L)),c[_]=L)};case e.SAMPLER_2D:var T=i++;return function(L){e.activeTexture(e.TEXTURE0+T);var B=u.textures.get(L);B||(B=L.qN(e),u.textures.set(L,B)),e.bindTexture(e.TEXTURE_2D,B),c[_]!==L&&(e.uniform1i(x,T),c[_]=L)};case e.BOOL:return function(L){c[_]!==L&&(e.uniform1i(x,L),c[_]=L)};default:return function(){}}}for(var v={},d=e.getProgramParameter(o,e.ACTIVE_UNIFORMS),b=0;b<d;b++){var h=e.getActiveUniform(o,b);v[t[h.name]||h.name]=$(o,h)}return v}function Y_(e,r){Object.keys(r).forEach(function(a){var t=e[a];t&&t(r[a])})}var X_=S(function(e,r,a){return Xg(r,{g:a,f:{},h:e},tC,oC)}),Q_=l(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),K_=l(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(a){a.clearDepth(r.a)})}),eC=l(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(a){a.clearStencil(r.a)})}),rC=l(function(e,r){e.contextAttributes.antialias=!0}),aC=l(function(e,r){e.sceneSettings.push(function(a){a.clearColor(r.a,r.b,r.c,r.d)})}),nC=l(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function tC(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};au(function(o){return n(gR,r,o)},e.h);var a=$a.createElement("canvas"),t=a.getContext&&(a.getContext("webgl",r.contextAttributes)||a.getContext("experimental-webgl",r.contextAttributes));return t&&typeof WeakMap<"u"?(r.sceneSettings.forEach(function(o){o(t)}),t.getExtension("OES_standard_derivatives"),t.getExtension("OES_element_index_uint"),e.f.gl=t,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=t.getParameter(t.STENCIL_WRITEMASK),j_(function(){return n(P2,e,a)})):(a=$a.createElement("div"),a.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),a}function oC(e,r){return r.f=e.f,P2(r)}var A=rh,Nf=O7,Zf=S(function(e,r,a){var t=a.c,o=a.d,c=l(function(i,u){if(i.$){var v=i.a;return s(Nf,e,u,v)}else{var $=i.a;return s(Nf,c,u,$)}});return s(Nf,c,s(Nf,e,r,o),t)}),cC=function(e){return s(Zf,A,P,e)},nu=S(function(e,r,a){e:for(;;){if(a.$===-2)return r;var t=a.b,o=a.c,c=a.d,i=a.e,u=e,$=s(e,t,o,s(nu,e,r,i)),v=c;e=u,r=$,a=v;continue e}}),ln=function(e){return s(nu,S(function(r,a,t){return n(A,p(r,a),t)}),P,e)},Yf=function(e){return s(nu,S(function(r,a,t){return n(A,r,t)}),P,e)},iC=function(e){var r=e;return Yf(r)},S2=1,uC=2,x2=0,D=function(e){return{$:0,a:e}},w={$:1},Ue=function(e){return{$:1,a:e}},lv=l(function(e,r){return{$:3,a:e,b:r}}),j2=l(function(e,r){return{$:0,a:e,b:r}}),k2=l(function(e,r){return{$:1,a:e,b:r}}),We=function(e){return{$:0,a:e}},fC=function(e){return{$:2,a:e}},RN=1,$C=ch,lC=Uh,ON=Th,vC=eh,vv=Sg,Ie=zb,Or=l(function(e,r){return n(Fh,e,Ef(r))}),Dn=l(function(e,r){return f(n(Eh,e,r))}),w2=function(e){return n(Or,`
    `,n(Dn,`
`,e))},me=S(function(e,r,a){e:for(;;)if(a.b){var t=a.a,o=a.b,c=e,i=n(e,t,r),u=o;e=c,r=i,a=u;continue e}else return r}),xr=function(e){return s(me,l(function(r,a){return a+1}),0,e)},T2=ah,JN=Y7,UN=ih,sC=S(function(e,r,a){e:for(;;)if(Q(e,r)<1){var t=e,o=r-1,c=n(A,r,a);e=t,r=o,a=c;continue e}else return a}),Ga=l(function(e,r){return s(sC,e,r,P)}),Na=l(function(e,r){return s(T2,e,n(Ga,0,xr(r)-1),r)}),ct=Qh,L2=function(e){var r=ct(e);return 97<=r&&r<=122},M2=function(e){var r=ct(e);return r<=90&&65<=r},WN=Lh,dC=function(e){return L2(e)||M2(e)},bC=function(e){var r=ct(e);return r<=57&&48<=r},z2=function(e){return L2(e)||M2(e)||bC(e)},Ve=function(e){return s(me,A,P,e)},tu=zh,pC=l(function(e,r){return`

(`+(Ie(e+1)+(") "+w2(sv(r))))}),sv=function(e){return n(mC,e,P)},mC=l(function(e,r){e:for(;;)switch(e.$){case 0:var a=e.a,i=e.b,t=(function(){var _=tu(a);if(_.$===1)return!1;var x=_.a,T=x.a,L=x.b;return dC(T)&&n(lC,z2,L)})(),o=t?"."+a:"['"+(a+"']"),$=i,v=n(A,o,r);e=$,r=v;continue e;case 1:var c=e.a,i=e.b,u="["+(Ie(c)+"]"),$=i,v=n(A,u,r);e=$,r=v;continue e;case 2:var d=e.a;if(d.b)if(d.b.b){var b=(function(){return r.b?"The Json.Decode.oneOf at json"+n(Or,"",Ve(r)):"Json.Decode.oneOf"})(),y=b+(" failed in the following "+(Ie(xr(d))+" ways:"));return n(Or,`

`,n(A,y,n(Na,pC,d)))}else{var i=d.a,$=i,v=r;e=$,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+(function(){return r.b?" at json"+n(Or,"",Ve(r)):"!"})();default:var h=e.a,g=e.b,y=(function(){return r.b?"Problem with the value at json"+(n(Or,"",Ve(r))+`:

    `):`Problem with the given value:

`})();return y+(w2(n(vv,4,g))+(`

`+h))}}),Jr=32,io=U(function(e,r,a,t){return{$:0,a:e,b:r,c:a,d:t}}),Vo=D7,dv=Ph,qN=fh,Xf=l(function(e,r){return Mb(r)/Mb(e)}),GN=_h,Hn=dv(n(Xf,2,Jr)),ou=C(io,0,Hn,Vo,Vo),D2=B7,Ac=function(e){return{$:1,a:e}},hC=l(function(e,r){return e(r)}),NN=l(function(e,r){return r(e)}),vn=G7,Da=Sh,it=A7,ZN=X7,Le=l(function(e,r){return Q(e,r)>0?e:r}),gC=uh,Bc=function(e){return{$:0,a:e}},bv=I7,yC=l(function(e,r){e:for(;;){var a=n(bv,Jr,e),t=a.a,o=a.b,c=n(A,Bc(t),r);if(o.b){var i=o,u=c;e=i,r=u;continue e}else return Ve(c)}}),An=function(e){var r=e.a;return r},_C=l(function(e,r){e:for(;;){var a=dv(r/Jr);if(a===1)return n(bv,Jr,e).a;var t=n(yC,e,P),o=a;e=t,r=o;continue e}}),pv=l(function(e,r){if(r.Z){var a=r.Z*Jr,t=Da(n(Xf,Jr,a-1)),o=e?Ve(r.as):r.as,c=n(_C,o,r.Z);return C(io,it(r.ai)+a,n(Le,5,t*Hn),c,r.ai)}else return C(io,it(r.ai),Hn,Vo,r.ai)}),YN=$h,XN=Z7,CC=Te(function(e,r,a,t,o){e:for(;;){if(r<0)return n(pv,!1,{as:t,Z:a/Jr|0,ai:o});var c=Ac(s(D2,Jr,r,e)),i=e,u=r-Jr,$=a,v=n(A,c,t),d=o;e=i,r=u,a=$,t=v,o=d;continue e}}),QN=vh,Qf=l(function(e,r){if(e<=0)return ou;var a=e%Jr,t=s(D2,a,e-a,r),o=e-a-Jr;return E(CC,r,o,e,P,t)}),KN=0,Bn=function(e){return!e.$},H=dg,PC={kw:P,pm:P},Pa=Ib,fe=Pa(P),cu=Ib,uo=cu(P),Ye=pg,Ha=mg,ae=rg,mv=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},In=$n("div"),H2=Kg,ee=H2,Kf=function(e){return{$:0,a:e}},e$=Mh,SC=U(function(e,r,a,t){return{el:t,eP:a,oV:r,kY:e}}),A2=3432918353,B2=461845907,eZ=Sy,rZ=wy,aZ=Ly,Ro=l(function(e,r){return(r&65535)*e+(((r>>>16)*e&65535)<<16)}),r$=N7,nZ=xy,hv=l(function(e,r){return r<<e|r>>>32-e}),tZ=jy,xC=function(e){var r=e.eP?e.oV^n(Ro,B2,n(hv,15,n(Ro,A2,e.eP))):e.oV,a=r^e.el,t=n(Ro,2246822507,a^a>>>16),o=n(Ro,3266489909,t^t>>>13);return(o^o>>>16)>>>0},jC=Bh,kC=l(function(e,r){return n(Ro,5,n(hv,13,e^n(Ro,B2,n(hv,15,n(Ro,A2,r)))))+3864292196}),wC=l(function(e,r){var a=r.eP|(255&ct(e))<<r.kY,t=r.kY;return t===24?{el:r.el+1,eP:0,oV:n(kC,r.oV,a),kY:0}:{el:r.el+1,eP:a,oV:r.oV,kY:r.kY+8}}),TC=l(function(e,r){return xC(s(jC,wC,C(SC,0,e,0,0),r))}),LC=15739,MC=Xh,oZ=function(e){return-e},Kr=sh,I2=function(e){e:for(;;)switch(e){case 0:return"0";case 1:return"1";case 2:return"2";case 3:return"3";case 4:return"4";case 5:return"5";case 6:return"6";case 7:return"7";case 8:return"8";case 9:return"9";case 10:return"a";case 11:return"b";case 12:return"c";case 13:return"d";case 14:return"e";case 15:return"f";default:var r=e;e=r;continue e}},E2=l(function(e,r){e:for(;;){if(r<16)return n(A,I2(r),e);var a=n(A,I2(n(Kr,16,r)),e),t=r/16|0;e=a,r=t;continue e}}),zC=function(e){return MC(e<0?n(A,"-",n(E2,P,-e)):n(E2,P,e))},F2=function(e){return n(e$,"_",zC(n(TC,LC,e)))},gv=K7,Xe=l(function(e,r){e:for(;;){if(r.$===-2)return w;var a=r.b,t=r.c,o=r.d,c=r.e,i=n(gv,e,a);switch(i){case 0:var u=e,$=o;e=u,r=$;continue e;case 1:return D(t);default:var u=e,$=c;e=u,r=$;continue e}}}),cZ=1,Ee=Te(function(e,r,a,t,o){return{$:-1,a:e,b:r,c:a,d:t,e:o}}),ut={$:-2},iZ=0,Ic=Te(function(e,r,a,t,o){if(o.$===-1&&!o.a){var c=o.a,i=o.b,u=o.c,$=o.d,v=o.e;if(t.$===-1&&!t.a){var d=t.a,b=t.b,h=t.c,g=t.d,y=t.e;return E(Ee,0,r,a,E(Ee,1,b,h,g,y),E(Ee,1,i,u,$,v))}else return E(Ee,e,i,u,E(Ee,0,r,a,t,$),v)}else if(t.$===-1&&!t.a&&t.d.$===-1&&!t.d.a){var _=t.a,b=t.b,h=t.c,x=t.d,T=x.a,L=x.b,B=x.c,R=x.d,V=x.e,y=t.e;return E(Ee,0,b,h,E(Ee,1,L,B,R,V),E(Ee,1,r,a,y,o))}else return E(Ee,e,r,a,t,o)}),yv=S(function(e,r,a){if(a.$===-2)return E(Ee,0,e,r,ut,ut);var t=a.a,o=a.b,c=a.c,i=a.d,u=a.e,$=n(gv,e,o);switch($){case 0:return E(Ic,t,o,c,s(yv,e,r,i),u);case 1:return E(Ee,t,o,r,i,u);default:return E(Ic,t,o,c,i,s(yv,e,r,u))}}),$r=S(function(e,r,a){var t=s(yv,e,r,a);if(t.$===-1&&!t.a){var o=t.a,c=t.b,i=t.c,u=t.d,$=t.e;return E(Ee,1,c,i,u,$)}else{var v=t;return v}}),sn=l(function(e,r){var a=e.b,t=e.c;if(a){var o=n(Xe,t,r);return o.$?s($r,t,F2(t),r):r}else return r}),_v=l(function(e,r){return n(Gb,ty(e),oy(r))}),Hr=Vf,fo=l(function(e,r){var a=r.a,t=r.b,o=r.c;if(t){var c=n(Xe,o,e);if(c.$)return n(_v,"className",Hr("_unstyled"));var i=c.a;return n(_v,"className",Hr(i))}else return a}),En=l(function(e,r){return n(Uf,Nb(e),Zb(r))}),a$=l(function(e,r){var a=r.a,t=r.b,o=r.c;if(t){var c=n(Xe,o,e);if(c.$)return n(En,"class","_unstyled");var i=c.a;return n(En,"class",i)}else return a}),n$=function(e){return Yg(Wf(e))},Cv=l(function(e,r){return n(Wb,e,Wf(r))}),V2=U(function(e,r,a,t){if(t.b){var o=t.a,c=t.b;if(c.b){var i=c.a,u=c.b;if(u.b){var $=u.a,v=u.b;if(v.b){var d=v.a,b=v.b,h=a>500?s(me,e,r,Ve(b)):C(V2,e,r,a+1,b);return n(e,o,n(e,i,n(e,$,n(e,d,h))))}else return n(e,o,n(e,i,n(e,$,r)))}else return n(e,o,n(e,i,r))}else return n(e,o,r)}else return r}),dn=S(function(e,r,a){return C(V2,e,r,0,a)}),G=l(function(e,r){return s(dn,l(function(a,t){return n(A,e(a),t)}),P,r)}),Oo=function(e){return $n(Wf(e))},Pv=l(function(e,r){return n(Ub,e,Wf(r))}),Ec=l(function(e,r){var a=e.a,t=e.b,o=r.a,c=r.b;switch(t.$){case 4:var T=t.a;return p(n(A,p(a,T),o),c);case 0:var d=t.a,b=t.b,h=t.c,g=s(me,sn,c,b),i=s(me,Fc,p(P,g),h),_=i.a,x=i.b,T=s(Oo,d,n(G,fo(x),b),Ve(_));return p(n(A,p(a,T),o),x);case 1:var v=t.a,d=t.b,b=t.c,h=t.d,g=s(me,sn,c,b),u=s(me,Fc,p(P,g),h),_=u.a,x=u.b,T=C(Pv,v,d,n(G,fo(x),b),Ve(_));return p(n(A,p(a,T),o),x);case 2:var d=t.a,b=t.b,h=t.c,g=s(me,sn,c,b),$=s(me,Ec,p(P,g),h),_=$.a,x=$.b,T=s(n$,d,n(G,fo(x),b),Ve(_));return p(n(A,p(a,T),o),x);default:var v=t.a,d=t.b,b=t.c,h=t.d,g=s(me,sn,c,b),y=s(me,Ec,p(P,g),h),_=y.a,x=y.b,T=C(Cv,v,d,n(G,fo(x),b),Ve(_));return p(n(A,p(a,T),o),x)}}),Fc=l(function(e,r){var a=r.a,t=r.b;switch(e.$){case 4:var _=e.a;return p(n(A,_,a),t);case 0:var $=e.a,v=e.b,d=e.c,b=s(me,sn,t,v),o=s(me,Fc,p(P,b),d),g=o.a,y=o.b,_=s(Oo,$,n(G,fo(y),v),Ve(g));return p(n(A,_,a),y);case 1:var u=e.a,$=e.b,v=e.c,d=e.d,b=s(me,sn,t,v),c=s(me,Fc,p(P,b),d),g=c.a,y=c.b,_=C(Pv,u,$,n(G,a$(y),v),Ve(g));return p(n(A,_,a),y);case 2:var $=e.a,v=e.b,d=e.c,b=s(me,sn,t,v),i=s(me,Ec,p(P,b),d),g=i.a,y=i.b,_=s(n$,$,n(G,fo(y),v),Ve(g));return p(n(A,_,a),y);default:var u=e.a,$=e.b,v=e.c,d=e.d,b=s(me,sn,t,v),h=s(me,Ec,p(P,b),d),g=h.a,y=h.b,_=C(Cv,u,$,n(G,a$(y),v),Ve(g));return p(n(A,_,a),y)}}),He=ut,Vc=function(e){return f([e])},t$=X0,ft=S(function(e,r,a){e:for(;;){if(a.$===-2)return r;var t=a.b,o=a.c,c=a.d,i=a.e,u=e,$=s(e,t,o,s(ft,e,r,c)),v=i;e=u,r=$,a=v;continue e}}),Sv="\x07",o$=S(function(e,r,a){return n(Or,r,n(Dn,e,a))}),DC=S(function(e,r,a){return a+(`
`+s(o$,Sv,r,e))}),HC=function(e){return s(ft,DC,"",e)},R2=l(function(e,r){return s(ft,S(function(a,t,o){return o+(`
`+s(o$,"."+Sv,"#"+(e+("."+t)),a))}),"",r)}),xv=l(function(e,r){var a=(function(){if(r.$){var o=r.a,c=r.b,i=r.c;return n(R2,o,c)+(`
`+n(R2,o+" ",i))}else{var t=r.a;return HC(t)}})();return s(Oo,"span",f([n(En,"style","display: none;"),n(En,"class","elm-css-style-wrapper")]),f([s(Oo,"style",(function(){if(e.$)return P;var t=e.a;return f([n(En,"nonce",t)])})(),Vc(t$(a)))]))}),AC=U(function(e,r,a,t){var o=s(me,sn,He,a),c=s(me,Fc,p(P,o),t),i=c.a,u=c.b,$=n(xv,e,Kf(u)),v=n(G,fo(u),a);return s(Oo,r,v,n(A,$,Ve(i)))}),BC=l(function(e,r){e:for(;;)if(r.b){var a=r.a,t=a.a,o=r.b;if(re(e,t))return!0;var c=e,i=o;e=c,r=i;continue e}else return!1}),IC=l(function(e,r){e:for(;;)if(r.b){var a=r.a,t=a.a,o=r.b,c="_"+t;if(n(BC,c,o)){var i=c,u=o;e=i,r=u;continue e}else return c}else return e}),O2=S(function(e,r,a){var t=n(IC,"_",a),o=n(xv,e,r);return p(t,o)}),EC=U(function(e,r,a,t){var o=s(me,sn,He,a),c=s(me,Ec,p(P,o),t),i=c.a,u=c.b,$=s(O2,e,Kf(u),i),v=n(G,fo(u),a);return s(n$,r,v,n(A,$,Ve(i)))}),FC=Te(function(e,r,a,t,o){var c=s(me,sn,He,t),i=s(me,Ec,p(P,c),o),u=i.a,$=i.b,v=s(O2,e,Kf($),u),d=n(G,a$($),t);return C(Cv,r,a,d,n(A,v,Ve(u)))}),VC=Te(function(e,r,a,t,o){var c=s(me,sn,He,t),i=s(me,Fc,p(P,c),o),u=i.a,$=i.b,v=n(xv,e,Kf($)),d=n(G,a$($),t);return C(Pv,r,a,d,n(A,v,Ve(u)))}),RC=function(e){switch(e.$){case 4:var r=e.a;return r;case 0:var t=e.a,o=e.b,c=e.c;return C(AC,w,t,o,c);case 1:var a=e.a,t=e.b,o=e.c,c=e.d;return E(VC,w,a,t,o,c);case 2:var t=e.a,o=e.b,c=e.c;return C(EC,w,t,o,c);default:var a=e.a,t=e.b,o=e.c,c=e.d;return E(FC,w,a,t,o,c)}},c$=RC,OC=function(e){return n(In,f([n(ee,"position","fixed"),n(ee,"inset","0"),n(ee,"overflow","clip"),n(ee,"background-color","transparent")]),f([c$(e)]))},Nr=t$,JC=function(e){var r=e.cY;if(r.b){var a=r.a,t=a.b;return n(In,f([n(ee,"position","fixed"),n(ee,"inset","0"),n(ee,"background-color","transparent"),n(ee,"overflow","clip")]),f([t]))}else return Nr("")},jv=function(e){var r=e.a,a=e.b;return F(r,a,P)},UC=function(e){return{lx:e.lx,ba:{bk:Te(function(r,a,t,o,c){return jv(C(e.bk,r,t,o,c))}),bl:U(function(r,a,t,o){return jv(s(e.bl,r,t,o))}),cu:U(function(r,a,t,o){return s(e.cu,r,t,o)}),aC:U(function(r,a,t,o){return s(e.aC,r,t,o)}),bt:U(function(r,a,t,o){return OC(s(e.bt,r,t,o))})},aE:U(function(r,a,t,o){return s(e.aE,r,t,o)}),bH:e.bH,jQ:function(r){return PC},aK:e.aK,eU:function(r){return 0},cY:f([{aE:P,bI:"play",b1:S(function(r,a,t){return jv(n(e.b1,r,t))}),aK:e.aK,fg:!1}]),sl:JC,fi:l(function(r,a){return p(0,fe)}),aC:function(r){return uo},iQ:w,fz:function(r){return P}}},WC=function(e){return{$:1,a:e}},qC=function(e){return{$:0,a:e}},ne=function(e){return e},GC=ne,uZ=0,fZ=1,J2=Rr(function(e,r,a,t,o,c){return{mL:c,mX:r,oo:t,ox:a,oD:e,oE:o}}),U2=Wh,Aa=Hh,bn=Vh,Ba=l(function(e,r){return e<1?r:s(bn,e,Aa(r),r)}),i$=Nh,Jo=function(e){return e===""},Rc=l(function(e,r){return e<1?"":s(bn,0,e,r)}),Oc=Zh,W2=Te(function(e,r,a,t,o){if(Jo(o)||n(U2,"@",o))return w;var c=n(i$,":",o);if(c.b){if(c.b.b)return w;var i=c.a,u=Oc(n(Ba,i+1,o));if(u.$===1)return w;var $=u;return D(Sr(J2,e,n(Rc,i,o),$,r,a,t))}else return D(Sr(J2,e,o,w,r,a,t))}),q2=U(function(e,r,a,t){if(Jo(t))return w;var o=n(i$,"/",t);if(o.b){var c=o.a;return E(W2,e,n(Ba,c,t),r,a,n(Rc,c,t))}else return E(W2,e,"/",r,a,t)}),G2=S(function(e,r,a){if(Jo(a))return w;var t=n(i$,"?",a);if(t.b){var o=t.a;return C(q2,e,D(n(Ba,o+1,a)),r,n(Rc,o,a))}else return C(q2,e,w,r,a)}),N2=l(function(e,r){if(Jo(r))return w;var a=n(i$,"#",r);if(a.b){var t=a.a;return s(G2,e,D(n(Ba,t+1,r)),n(Rc,t,r))}else return s(G2,e,w,r)}),pn=qh,Z2=function(e){return n(pn,"http://",e)?n(N2,0,n(Ba,7,e)):n(pn,"https://",e)?n(N2,1,n(Ba,8,e)):w},Uo=function(e){e:for(;;){var r=e,a=r;e=a;continue e}},$Z=ne,Ia=qa,NC=Ia(0),Sa=O0,iu=l(function(e,r){return n(Sa,function(a){return Ia(e(a))},r)}),ZC=S(function(e,r,a){return n(Sa,function(t){return n(Sa,function(o){return Ia(n(e,t,o))},a)},r)}),uu=function(e){return s(dn,ZC(A),Ia(P),e)},u$=Vg,YC=l(function(e,r){var a=r;return U0(n(Sa,u$(e),a))}),XC=S(function(e,r,a){return n(iu,function(t){return 0},uu(n(G,YC(e),r)))}),QC=S(function(e,r,a){return Ia(0)}),KC=l(function(e,r){var a=r;return n(iu,e,a)});fa.Task=N0(NC,XC,QC,KC);var Y2=Yi("Task"),fu=l(function(e,r){return Y2(n(iu,e,r))}),eP=zy,f$=function(e){return{$:9,a:e}},ea=l(function(e,r){if(r.$)return w;var a=r.a;return e(a)}),rP=function(e){return{$:3,a:e}},Jc=Eb,$$=S(function(e,r,a){return s(me,l(function(t,o){var c=o.a,i=o.b,u=n(e.fi,t,c),$=u.a,v=u.b;return p($,Pa(f([i,n(Jc,rP,v)])))}),p(a,fe),r)}),lZ=0,kv=0,vZ=5,sZ=ne,er=S(function(e,r,a){return Q(a,e)<0?e:Q(a,r)>0?r:a}),mn=l(function(e,r){return M(r,{D:s(er,0,1,r.D-e)})}),hn=l(function(e,r){return M(r,{D:s(er,0,1,r.D+e)})}),aP=l(function(e,r){return{bx:r.bx,i$:n(hn,.14,r.bx),i0:n(hn,.07,r.bx),jg:n(hn,.13,r.F),jh:n(hn,.23,r.F),kx:e,F:r.F,k6:n(hn,.03,r.F),k7:n(hn,.06,r.F),k8:n(hn,.09,r.F),k9:n(mn,.03,r.F),la:n(mn,.06,r.F),lb:n(mn,.09,r.F),lc:{aT:.6,aX:r.F.aX,D:.92,a4:.08},lf:n(mn,.5,r.d3),lh:r.d3,li:n(mn,.15,r.d3)}}),nP=l(function(e,r){var a=r.d3,t=a.D<.12?M(a,{D:.12}):a;return{bx:r.bx,i$:n(mn,.14,r.bx),i0:n(mn,.07,r.bx),jg:n(mn,.13,r.F),jh:n(mn,.23,r.F),kx:e,F:r.F,k6:n(mn,.03,r.F),k7:n(mn,.06,r.F),k8:n(mn,.09,r.F),k9:n(hn,.03,r.F),la:n(hn,.06,r.F),lb:n(hn,.09,r.F),lc:{aT:.88,aX:r.F.aX,D:.18,a4:.1},lf:n(hn,.5,t),lh:t,li:n(hn,.15,t)}}),tP=l(function(e,r){return r.sf?n(aP,r,{bx:e,F:r.p0,d3:r.rA}):n(nP,r,{bx:e,F:r.p0,d3:r.rA})}),X2=l(function(e,r){switch(e){case 0:return r.tO;case 1:return r.rO;case 2:return r.vq;case 3:return r.p8;case 4:return r.sv;default:return r.qQ}}),$u=l(function(e,r){return n(tP,n(X2,e,r),r)}),J=U(function(e,r,a,t){return{aT:t,aX:e,D:a,a4:r}}),oP={p0:C(J,.5833,.0952,.21,1),p7:C(J,.5833,.0952,.21,1),p8:C(J,.5718,.9231,.39,1),qd:C(J,.5667,.0505,.495,1),qe:C(J,.5673,.6341,.59,1),qf:C(J,.4869,.6,.575,1),qg:C(J,.4722,.6,.5,1),qh:C(J,.963,.5294,.575,1),qi:C(J,.0224,1,.665,1),qj:C(J,0,0,1,1),qk:C(J,.1373,1,.575,1),qQ:C(J,.4891,.7176,.425,1),rA:C(J,0,0,.96,1),rO:C(J,.4697,1,.33,1),sf:!0,sv:C(J,.7361,.6,.5,1),sV:"Erkal Dark",tO:C(J,.95,1,.5,1),u9:C(J,0,0,.82,1),vq:C(J,.1315,1,.45,1)},cP={p0:C(J,0,0,.96,1),p7:C(J,.5833,.0952,.21,1),p8:C(J,.5673,.8966,.29,1),qd:C(J,.5833,.0476,.42,1),qe:C(J,.5718,.9231,.39,1),qf:C(J,.4891,.7176,.425,1),qg:C(J,.4697,1,.33,1),qh:C(J,.963,.6,.375,1),qi:C(J,.0288,.5909,.44,1),qj:C(J,0,0,.82,1),qk:C(J,.1315,1,.45,1),qQ:C(J,.4845,.6825,.315,1),rA:C(J,.5833,.0952,.21,1),rO:C(J,.4551,1,.26,1),sf:!1,sv:C(J,.7167,.7143,.35,1),sV:"Erkal Light",tO:C(J,.95,1,.4,1),u9:C(J,0,0,.96,1),vq:C(J,.131,1,.35,1)},iP={p0:C(J,.6784,.5072,.1195,1),p7:C(J,.6784,.5072,.1195,1),p8:C(J,.6963,.7334,.3908,1),qd:C(J,.6596,.1664,.2542,1),qe:C(J,.6963,.8378,.5419,1),qf:C(J,.4985,.746,.7698,1),qg:C(J,.2473,.9215,.6656,1),qh:C(J,.8231,.9879,.5331,1),qi:C(J,.9805,.9839,.5313,1),qj:C(J,.1717,.0624,.8829,1),qk:C(J,.1378,.9702,.5499,1),qQ:C(J,.4985,.432,.6569,1),rA:C(J,.1708,.1275,.8046,1),rO:C(J,.2473,.6142,.5669,1),sf:!0,sv:C(J,.8231,.8982,.4245,1),sV:"Inferno",tO:C(J,.9804,.8923,.417,1),u9:C(J,.1712,.0491,.7129,1),vq:C(J,.1378,.8074,.4652,1)},uP={p0:C(J,.6758,.4926,.1233,1),p7:C(J,.6758,.4926,.1233,1),p8:C(J,.6963,.7334,.3908,1),qd:C(J,.6576,.1668,.257,1),qe:C(J,.6963,.8378,.5419,1),qf:C(J,.4985,.746,.7698,1),qg:C(J,.2989,.7749,.7169,1),qh:C(J,.8231,.9879,.5331,1),qi:C(J,.9805,.9839,.5313,1),qj:C(J,.1241,.0824,.8856,1),qk:C(J,.1226,.912,.646,1),qQ:C(J,.4985,.432,.6569,1),rA:C(J,.1238,.1697,.8105,1),rO:C(J,.2989,.48,.6076,1),sf:!0,sv:C(J,.8231,.8982,.4245,1),sV:"Magma",tO:C(J,.9804,.8923,.417,1),u9:C(J,.1239,.0643,.7167,1),vq:C(J,.1227,.6106,.5447,1)},$o={aT:1,aX:0,D:0,a4:0},Uc=function(e){return n(e$,e,"")},fP=function(e){switch(e){case"0":return D(0);case"1":return D(1);case"2":return D(2);case"3":return D(3);case"4":return D(4);case"5":return D(5);case"6":return D(6);case"7":return D(7);case"8":return D(8);case"9":return D(9);case"a":return D(10);case"b":return D(11);case"c":return D(12);case"d":return D(13);case"e":return D(14);case"f":return D(15);default:return w}},$P=Ih,Wc=function(e){return s($P,A,P,e)},Q2=Jh,wv=function(e){return s(me,l(function(r,a){if(a.$===1){var t=a.a;return Ue(t)}else{var o=a.a,c=fP(r);if(c.$)return Ue("Invalid hex digit: "+Uc(r));var i=c.a;return We(o*16+i)}}),We(0),Wc(Q2(e)))},qe=l(function(e,r){return Q(e,r)<0?e:r}),lP=S(function(e,r,a){var t=n(qe,e,n(qe,r,a)),o=n(Le,e,n(Le,r,a)),c=(o+t)/2,i=o-t;if(i<1e-10)return{aT:1,aX:0,D:c,a4:0};var u=c>.5?i/(2-o-t):i/(o+t),$=(function(){if(o-e<1e-10){var d=Q(r,a)<0?6:0;return(r-a)/i+d}else return o-r<1e-10?(a-e)/i+2:(e-r)/i+4})(),v=$/6;return{aT:1,aX:v,D:c,a4:u}}),K2=function(e){var r=n(pn,"#",e)?n(Ba,1,e):e;if(Aa(r)!==6)return Ue("Expected 6-character hex string, got: "+e);var a=s(bn,0,2,r),t=s(bn,2,4,r),o=s(bn,4,6,r),c=F(wv(a),wv(t),wv(o));if(!c.a.$&&!c.b.$&&!c.c.$){var i=c.a.a,u=c.b.a,$=c.c.a;return We(s(lP,i/255,u/255,$/255))}else return Ue("Invalid hex color: "+e)},e3=l(function(e,r){if(r.$)return e;var a=r.a;return a}),m=l(function(e,r){var a=function(o){return n(e3,$o,K2(s(bn,o*6,(o+1)*6,r)))},t=a(17);return{p0:t,p7:a(0),p8:a(4),qd:a(8),qe:a(12),qf:a(14),qg:a(10),qh:a(13),qi:a(9),qj:a(15),qk:a(11),qQ:a(6),rA:a(16),rO:a(2),sf:t.D<.5,sv:a(5),sV:e,tO:a(1),u9:a(7),vq:a(3)}}),vP={p0:C(J,.6338,.2131,.4193,1),p7:C(J,.6338,.2131,.4193,1),p8:C(J,.6711,.9819,.3556,1),qd:C(J,.6313,.1141,.4988,1),qe:C(J,.6733,.9724,.4995,1),qf:C(J,.5206,.9279,.6164,1),qg:C(J,.408,.9525,.6016,1),qh:C(J,.8129,.6577,.6082,1),qi:C(J,.0348,.7434,.583,1),qj:C(J,.1588,.059,.8705,1),qk:C(J,.1378,.9702,.5499,1),qQ:C(J,.5206,.6303,.518,1),rA:C(J,.1581,.1657,.844,1),rO:C(J,.408,.663,.5087,1),sf:!0,sv:C(J,.8129,.4325,.4851,1),sV:"Parula",tO:C(J,.0348,.5435,.4645,1),u9:C(J,.1584,.0494,.7011,1),vq:C(J,.1378,.8074,.4652,1)},sP={p0:C(J,.6497,.2697,.2788,1),p7:C(J,.6497,.2697,.2788,1),p8:C(J,.6963,.7334,.3908,1),qd:C(J,.6441,.1308,.3827,1),qe:C(J,.6963,.8378,.5419,1),qf:C(J,.4985,.746,.7698,1),qg:C(J,.2594,.8806,.6797,1),qh:C(J,.8231,.9879,.5331,1),qi:C(J,.9805,.9839,.5313,1),qj:C(J,.1553,.0578,.8652,1),qk:C(J,.1378,.9702,.5499,1),qQ:C(J,.4985,.432,.6569,1),rA:C(J,.1544,.1443,.7845,1),rO:C(J,.2594,.5758,.578,1),sf:!0,sv:C(J,.8231,.8982,.4245,1),sV:"Plasma",tO:C(J,.9804,.8923,.417,1),u9:C(J,.1549,.0495,.696,1),vq:C(J,.1378,.8074,.4652,1)},dP={p0:C(J,.7616,.2492,.257,1),p7:C(J,.7616,.2492,.257,1),p8:C(J,.6711,.9819,.3556,1),qd:C(J,.7582,.1116,.3649,1),qe:C(J,.6733,.9724,.4995,1),qf:C(J,.5003,1,.4968,1),qg:C(J,.367,.9956,.5641,1),qh:C(J,.7883,.876,.5781,1),qi:C(J,.0151,.5947,.5814,1),qj:C(J,.1828,.0453,.8406,1),qk:C(J,.1749,.9924,.6211,1),qQ:C(J,.5003,1,.4251,1),rA:C(J,.1818,.1003,.7645,1),rO:C(J,.3705,.8413,.4617,1),sf:!0,sv:C(J,.7886,.6673,.4517,1),sV:"Viridis",tO:C(J,.015,.4413,.4578,1),u9:C(J,.1823,.0425,.6725,1),vq:C(J,.1749,.7036,.5343,1)},r3=f([n(m,"Argonaut","232323ff000f8ce10bffb900008df86d43a600d8ebffffff444444ff2740abe15bffd2420092ff9a5feb67fff0fffffffffaf40e1019"),n(m,"0x96f","262427ff666db3e03affc73900cde8a392e89deaf6fcfcfa545452ff7e83bee55effd05e1bd5ebb0a3ebacedf8fcfcfafcfcfa262427"),n(m,"12-bit Rainbow","000000a0305040d080e090403060b06030900090c0dbded8685656c0606090d050e0d00000b0c080107020b0c0fffffffeffff040404"),n(m,"3024 Day","090300db2d2001a252caba0001a0e4a16a948fbecea5a2a25c5855dbaec33a34324a4543807d7cbcbbbacdab53f7f7f74a4543f7f7f7"),n(m,"3024 Night","090300db2d2001a252fded0201a0e4a16a94b5e4f4a5a2a25c5855e8bbd047413f4a4543807d7cd6d5d4cdab53f7f7f7a5a2a2090300"),n(m,"Aardvark Blue","191919aa342e4b8c0fdbba001370d3c43ac3008eb0bebebe525252f05b5095dc55ffe76360a4ece26be260b6cbf7f7f7dddddd102040"),n(m,"Abernathy","000000cd000000cd00cdcd001093f5cd00cd00cdcdfaebd7404040ff000000ff00ffff0011b5f6ff00ff00ffffffffffeeeeec111416"),n(m,"Adventure","040404d84a335da602eebb6e417ab3e5c499bdcfe5dbded8685656d76b4299b52cffb67097d7efaa7900bdcfe5e4d5c7feffff040404"),n(m,"Adventure Time","050404bd00134ab118e7741e0f4ac666599370a598f8dcc04e7cbffc5f5a9eff6eefc11a1997c69b5953c8faf4f6f5fbf8dcc01f1d45"),n(m,"Adwaita","241f31c01c282ec27ee8b5041e78e49841bb0ab9dcc0bfbc5e5c64ed333b4ad67cd2be3651a1ffc061cb4fd2fdf6f5f4000000ffffff"),n(m,"Adwaita Dark","241f31c01c282ec27ef5c2111e78e49841bb0ab9dcc0bfbc5e5c64ed333b57e389f8e45c51a1ffc061cb4fd2fdf6f5f4ffffff1d1d20"),n(m,"Afterglow","151515ac41427e8e50e5b5676c99bb9f4e857dd6cfd0d0d0505050ac41427e8e50e5b5676c99bb9f4e857dd6cff5f5f5d0d0d0212121"),n(m,"Aizen Dark","1a1a1af08898a4e09cf5dea484b4f8c8a2f490dcd0d0d6f0444444f08898a4e09cf5dea484b4f8c8a2f490dcd0ffffffd0d6f01a1a1a"),n(m,"Aizen Light","f0f2f6d00c363e9e28dd8c1a1c64f28636ec1590964a4d66adb2bcd00c363e9e28dd8c1a1c64f28636ec1590964a4d664a4d66f0f2f6"),n(m,"Alabaster","000000aa3731448c27cb9000325cc07a3e9d0083b2b7b7b7777777f0505060cb00f2af50007acce64ce600aacbf7f7f7000000f7f7f7"),n(m,"Alien Blood","1126167f2b272f7e25717f242f6a7f47587f327f77647d753c4812e0800918e000bde00000aae00058e000e0c473fa91637d750f1610"),n(m,"Andromeda","000000cd313105bc79e5e5122472c8bc3fbc0fa8cde5e5e5666666cd313105bc79e5e5122472c8bc3fbc0fa8cde5e5e5e5e5e5262a33"),n(m,"Apple Classic","000000c91b0000c200c7c4001c3fe1ca30c700c5c7c7c7c7686868ff6e675ffa68fffc676871ffff77ff60fdffffffffd5a2002c2b2b"),n(m,"Apple System Colors","1a1a1acc372e26a439cdac080869cb9647bf479ec298989d464646ff453a32d74bffd60a0a84ffbf5af276d6ffffffffffffff1e1e1e"),n(m,"Apple System Colors Light","1a1a1acc372e26a439cdac080869cb9647bf479ec298989d464646ff453a32d74be5bc000a84ffbf5af269c9f2ffffff000000feffff"),n(m,"Arcoiris","333333da270012c258ffc656518bfce37bd963fad5bab2b2777777ffb9b9e3f6aaffddaab3e8f3cbbaf9bcffc7efefefeee4d9201f1e"),n(m,"Ardoise","2c2c2cd3322d588b35fca93a2465c27332b464e1b8f7f7f7535353fa58528dc252ffea516ab5f8be68ca89ffdbfefefeeaeaea1e1e1e"),n(m,"Arthur","3d352acd5c5c86af80e8ae5b6495eddeb887b0c4debbaa99554444cc553388aa22ffa75d87ceeb996600b0c4deddccbbddeedd1c1c1c"),n(m,"Atelier Sulphurpool","202746c94922ac9739c08b303d8fd16679cc22a2c9979db46b7394c76b294f587c5e6687898ea4dfe2f19c637af5f7ff979db4202746"),n(m,"Atom","000000fd5ff187c38affd7b185befdb9b6fc85befde0e0e04c4c4cfd5ff194fa36f5ffa896cbfeb9b6fc85befde0e0e0c5c8c6161719"),n(m,"Atom One Dark","21252be06c7598c379e5c07b61afefc678dd56b6c2abb2bf767676e06c7598c379e5c07b61afefc678dd56b6c2abb2bfabb2bf21252b"),n(m,"Atom One Light","000000de3e353f953ad2b67c2f5af39500953f953abbbbbb000000de3e353f953ad2b67c2f5af3a000953f953affffff2a2c33f9f9f9"),n(m,"Aura","110f18ff676761ffcaffca85a277ffa277ff61ffcaedecee4d4d4dffca85a277ffffca85a277ffa277ff61ffcaedeceeedecee15141b"),n(m,"Aurora","23262ef0266f8fd46dffe66d102ee4ee5d4303d6b8c74ded4f545ef926728fd46dffe66d03d6b8ee5d4303d6b8c74dedffca2823262e"),n(m,"Ayu","11151cea6c737fd962f9af4f53bdfacda1fa90e1c6c7c7c7686868f07178aad94cffb45459c2ffd2a6ff95e6cbffffffbfbdb60b0e14"),n(m,"Ayu Light","000000ea6c6d6cbf43eca9443199e19e75c746ba94bababa686868f0717186b300f2ae49399ee6a37acc4cbf99d1d1d15c6166f8f9fa"),n(m,"Ayu Mirage","171b24ed827487d96cfacc6e6dcbfadabafa90e1c6c7c7c7686868f28779d5ff80ffd17373d0ffdfbfff95e6cbffffffcccac21f2430"),n(m,"Banana Blueberry","17141fff6b7f00bd9ce6c62f22e8dfdc396a56b6c2f1f1f1495162fe9ea198c379f9e46b91fff4da70d6bcf3ffffffffcccccc191323"),n(m,"Batman","1b1d1ee6dc44c8be46f4fd2273717474727162605fc6c5bf505354fff78efff27dfeed6c9194959a9a9da3a3a6dadbd66f6f6f1b1d1e"),n(m,"Belafonte Day","20111bbe100e858162d08b30426a7997522c989a9c968c835e5252be100e858162d08b30426a7997522c989a9cd5ccba45373cd5ccba"),n(m,"Belafonte Night","20111bbe100e858162eaa549426a7997522c989a9c968c835e5252be100e858162eaa549426a7997522c989a9cd5ccba968c8320111b"),n(m,"Birds Of Paradise","573d26be2d266ba18ae99d2a5a86adac80a674a6ade0dbb79b6c4ae8462795d8bad0d150b8d3edd19ecb93cfd7fff9d5e0dbb72a1f1d"),n(m,"Black Metal","000000486e6fdd9999a06666888888999999aaaaaac1c1c1404040486e6fdd9999a06666888888999999aaaaaac1c1c1c1c1c1000000"),n(m,"Black Metal (Bathory)","0000005f8787fbcb97e78a53888888999999aaaaaac1c1c14040405f8787fbcb97e78a53888888999999aaaaaac1c1c1c1c1c1000000"),n(m,"Black Metal (Burzum)","0000005f8787ddeecc99bbaa888888999999aaaaaac1c1c14040405f8787ddeecc99bbaa888888999999aaaaaac1c1c1c1c1c1000000"),n(m,"Black Metal (Dark Funeral)","0000005f8787d0dfee5f81a5888888999999aaaaaac1c1c14040405f8787d0dfee5f81a5888888999999aaaaaac1c1c1c1c1c1000000"),n(m,"Black Metal (Gorgoroth)","0000005f87879b8d7f8c7f70888888999999aaaaaac1c1c14040405f87879b8d7f8c7f70888888999999aaaaaac1c1c1c1c1c1000000"),n(m,"Black Metal (Immortal)","0000005f87877799bb556677888888999999aaaaaac1c1c14040405f87877799bb556677888888999999aaaaaac1c1c1c1c1c1000000"),n(m,"Black Metal (Khold)","0000005f8787eceee3974b46888888999999aaaaaac1c1c14040405f8787eceee3974b46888888999999aaaaaac1c1c1c1c1c1000000"),n(m,"Black Metal (Marduk)","0000005f8787a5aaa7626b67888888999999aaaaaac1c1c14040405f8787a5aaa7626b67888888999999aaaaaac1c1c1c1c1c1000000"),n(m,"Black Metal (Mayhem)","0000005f8787f3ecd4eecc6c888888999999aaaaaac1c1c14040405f8787f3ecd4eecc6c888888999999aaaaaac1c1c1c1c1c1000000"),n(m,"Black Metal (Nile)","0000005f8787aa9988777755888888999999aaaaaac1c1c14040405f8787aa9988777755888888999999aaaaaac1c1c1c1c1c1000000"),n(m,"Black Metal (Venom)","0000005f8787f8f7f279241f888888999999aaaaaac1c1c14040405f8787f8f7f279241f888888999999aaaaaac1c1c1c1c1c1000000"),n(m,"Blazer","000000b87a7a7ab87ab8b87a7a7ab8b87ab87ab8b8d9d9d94c4c4cdbbdbdbddbbddbdbbdbdbddbdbbddbbddbdbffffffd9e6f20d1926"),n(m,"Blue Berry Pie","0a4c6299246e5cb1b3eab9a890a5bd9d54a77e83ccf0e8d6463c5dc872720a6c7e7a31885f3d63bc94b75e60710a6c7ebabab91c0c28"),n(m,"Blue Dolphin","292d3eff8288b4e88df4d69f82aaffe9c1ff89ebffd0d0d09094a4ff8b92ddffa7ffe5859cc4ffddb0f6a3f7ffffffffc5f2ff006984"),n(m,"Blue Matrix","101116ff568000ff9cfffc5800b0ffd57bff76c1ffc7c7c7686868ff6e675ffa68fffc676871ffd682ec60fdffffffff00a2ff101116"),n(m,"Bluloco Dark","41444dfc2f5225a45cff936a3476ff7a82da4483aacdd4e08f9aaeff64803fc56bf9c85910b1feff78f85fb9bcffffffb9c0cb282c34"),n(m,"Bluloco Light","373a41d5275323974adf631c275fe4823ff127618dbabbc2676a77ff64803cbc66c5a3320099e1ce33c06d93bbd3d3d3373a41f9f9f9"),n(m,"Borland","4f4f4fff6c60a8ff60ffffb696cbfeff73fdc6c5feeeeeee7c7c7cffb6b0ceffacffffccb5dcffff9cfedfdffeffffffffff4e0000a4"),n(m,"Box","000000cc040319cb00cecb000d73cccb1ed10dcdcddddddd767676f2201f23fd00fffd001a8ffffd28ff14ffffffffff9fef00141d2b"),n(m,"Breadog","362c24b10b000072328b4c00005cb49b0097006a78baa99d514337de1100008f40ae60000074e1c300bd008697eae1da362c24f1ebe6"),n(m,"Breeze","31363bed151511d116f674001d99f39b59b61abc9ceff0f17f8c8dc0392b1cdc9afdbc4b3daee98e44ad16a085fcfcfceff0f131363b"),n(m,"Bright Lights","191919ff355bb7e876ffc25176d4ffba76e76cbfb5c2c8d74c4c4cff355bb7e876ffc25176d5ffba76e76cbfb5c2c8d7b3c9d7191919"),n(m,"Broadcast","000000da4939519f50ffd24a6d9cbed0d0ff6e9cbeffffff585858ff7b6b83d182ffff7c9fcef0ffffffa0cef0ffffffe6e1dc2b2b2b"),n(m,"Brogrammer","1f1f1ff811182dc55eecba0f2a84d24e5ab71081d6d6dbe5d6dbe5de352e1dd361f3bd091081d65350b90f7ddbffffffd6dbe5131313"),n(m,"Builtin Dark","000000bb000000bb00bbbb000d0dc8bb00bb00bbbbbbbbbb555555ff555555ff55ffff555555ffff55ff55ffffffffffbbbbbb000000"),n(m,"Builtin Light","000000bb000000bb00bbbb000000bbbb00bb00bbbbbbbbbb555555ff55552fd92fbfbf155555ffff55ff22ccccffffff000000ffffff"),n(m,"Builtin Pastel Dark","4f4f4fff6c60a8ff60ffffb696cbfeff73fdc6c5feeeeeee7c7c7cffb6b0ceffacffffccb5dcffff9cfedfdffeffffffbbbbbb000000"),n(m,"Builtin Tango Dark","000000cc00004e9a06c4a0003465a475507b06989ad3d7cf555753ef29298ae234fce94f729fcfad7fa834e2e2eeeeecffffff000000"),n(m,"Builtin Tango Light","000000cc00004e9a06c4a0003465a475507b06989ab9bdb5555753ef29297dd527d6c329729fcfad7fa827d5d5eeeeec000000ffffff"),n(m,"C64","090300a2524c55a049bfce726657b3984ca367b6bdffffff000000a2524c55a049bfce726657b3984ca367b6bdf7f7f77869c440318d"),n(m,"CGA","000000aa000000aa00aa55000d0db7aa00aa00aaaaaaaaaa555555ff555555ff55ffff555555ffff55ff55ffffffffffaaaaaa000000"),n(m,"CLRS","000000f8282a328a5dfa701d135cd09f00bd33c3c1b3b3b3555753fb04162cc631e3bd0e1670ffe900b03ad5ceeeeeec262626ffffff"),n(m,"Calamity","2f2833fc644da5f69ce9d7a53b79c7f9267274d3ded5ced97e6c88fc644da5f69ce9d7a53b79c7f9267274d3deffffffd5ced92f2833"),n(m,"Carbonfox","282828ee539625be6a08bdba78a9ffbe95ff33b1ffdfdfe0484848f16da646c8802dc7c48cb6ffc8a5ff52bdffe4e4e5f2f4f8161616"),n(m,"Catppuccin Frappe","51576de78284a6d189e5c8908caaeef4b8e481c8bea5adce626880e671728ec772d9ba737b9ef0f2a4db5abfb5b5bfe2c6d0f5303446"),n(m,"Catppuccin Latte","5c5f77d20f3940a02bdf8e1d1e66f5ea76cb179299acb0be6c6f85de293e49af3deea02d456efffe85d82d9fa8bcc0cc4c4f69eff1f5"),n(m,"Catppuccin Macchiato","494d64ed8796a6da95eed49f8aadf4f5bde68bd5caa5adcb5b6078ec74868ccf7fe1c68278a1f6f2a9dd63cbc0b8c0e0cad3f524273a"),n(m,"Catppuccin Mocha","45475af38ba8a6e3a1f9e2af89b4faf5c2e794e2d5a6adc8585b70f3779989d88bebd39174a8fcf2aede6bd7cabac2decdd6f41e1e2e"),n(m,"Chalk","7d8b8fb23a52789b6ab9ac4a2a7facbd4f5a44a799d2d8d9888888f2484080c470ffeb624196fffc527553cdbdd2d8d9d2d8d92b2d2e"),n(m,"Chalkboard","000000c3737272c373c2c3727372c3c372c272c2c3d9d9d9585858dbaaaaaadbaadadbaaaaaadbdbaadaaadadbffffffd9e6f229262f"),n(m,"Challenger Deep","141228ff545862d196ffb37865b2ff906cff63f2f1a6b3cc565575ff808095ffa4ffe9aa91ddffc991e1aaffe4cbe3e7cbe1e71e1c31"),n(m,"Chester","080200fa5e5b16c98dffc83f288ad6d3459028dddee7e7e76f6b68fa5e5b16c98dfeef6d278ad6d3459027dedeffffffffffff2c3643"),n(m,"Ciapre","1818188e0d1648513bcc8b3f576d8c724d7c5c4f4baea47f555555ac3835a6a75ddcdf7c3097c6d33061f3dbb2f4f4f4aea47a191c27"),n(m,"Citruszest","404040ff545400cc7affd40000bfffff90fe48d1ccbfbfbf808080ff1a751affa3ffff0033cfffffb2fe00fff2f9f9f9bfbfbf121212"),n(m,"Cobalt Neon","142631ff23203ba5ffe9e75c8ff586781aa08ff586ba46b2fff688d4312e8ff586e9f06d3c7dd28230a76cbc678ff5868ff586142838"),n(m,"Cobalt Next","000000ff527b8cc98fffc64c409dd4cba3c737b5b4d7deea62747fe47e8bbaddbbffdc917ac0ebf3ccef84e4e3ffffffd7deea162c35"),n(m,"Cobalt Next Dark","262f37f949678cc98fffc64c409dd4cba3c737b5b4d7deea62747fe47e8bbaddbbffdc917ac0ebf3ccef84e4e3ffffffd7deea0b1c24"),n(m,"Cobalt Next Minimal","323d47ff657a8cc98fffc64c409dd4cba3c737b5b4d7deea62747fe47e8bbaddbbffdc917ac0ebf3ccef84e4e3ffffffd7deea0b1c24"),n(m,"Cobalt2","000000ff000038de21ffe50a1460d2ff005d00bbbbbbbbbb555555f40e173bd01dedc8095555ffff55ff6ae3faffffffffffff132738"),n(m,"Coffee Theme","000000c91b0000c200adaa000225c7ca30c700b8baa1a1a1686868ff6e671fba28b2af1b6871fff26af220bdbfffffff000000f5deb3"),n(m,"Crayon Pony Fish","2b1b1d91002b579524ab311b8c87b0692f50e8a86668525a4a383bc5255d8dff57c8381dcfc9fffc6cbaffceafb0949d68525a150707"),n(m,"Cursor Dark","2a2a2abf616aa3be8cebcb8b81a1c1b48ead88c0d0d8dee9505050bf616aa3be8cebcb8b81a1c1b48ead88c0d0ffffffffffff141414"),n(m,"Cutie Pro","000000f56e7fbec975f5866942d9c5d286b737cb8ad5c3c388847fe5a1a3e8d6a7f1bb7980c5deb294bb9dccbbffffffd5d0c9181818"),n(m,"Cyberdyne","080808ff837300c172d2a7000071cfff90fe6bffddf1f1f1484848ffc4bed6fcbafffed5c2e3ffffb2fee6e7feffffff00ff92151144"),n(m,"Cyberpunk","000000ff709200fbacfffa6a00bfffdf95ff86cbfeffffff595959ff8aa421f6bcfff7871bccfde6aefe99d6fcffffffe5e5e5332a57"),n(m,"Cyberpunk Scarlet Protocol","101116ff005101dc84faf9450271b6c930c700c5c7c7c7c7686868ff6e6760fa68fffc676871ffbd35ec60fdffffffffe41951101116"),n(m,"Dark Modern","272727f749492ea0439e6a030078d4d012731db4d6cccccc5d5d5ddc545223d18bf5f5433b8eead670d629b8dbe5e5e5cccccc1f1f1f"),n(m,"Dark Pastel","000000ff555555ff55ffff555555ffff55ff55ffffbbbbbb555555ff555555ff55ffff555555ffff55ff55ffffffffffffffff000000"),n(m,"Dark+","000000cd31310dbc79e5e5102472c8bc3fbc11a8cde5e5e5666666f14c4c23d18bf5f5433b8eead670d629b8dbe5e5e5cccccc1e1e1e"),n(m,"Darkermatrix","0910131a48316fa64c59590000cb6b4e375a1254591a48334040400d452a90d762e2e50000ff874e375a176c7300381e35451a070c0e"),n(m,"Darkmatrix","0910130065366fa64c7e80002c9a84523a60114d5300653640404000733d90d762e2e50046d8b8573d6612545a0065363e5715070c0e"),n(m,"Darkside","000000e8341c68c256f2d42c1c98e88e69c91c98e8bababa4c4c4ce05a4f77b869efd64b387cd3957bbe3d97e2babababababa222324"),n(m,"Dawnfox","575279b4637a618774ea9d34286983907aa956949fb2b6bd5f5695c26d85629f81eea8462d81a39a80b95ca7b4e6ebf3575279faf4ed"),n(m,"Dayfox","352c24a5222f396847ac54022848a96e33ce287980bfb6ae534c45b3434e577f63b86e284863b68452d5488d93f4ece63d2b5af6f2ee"),n(m,"Deep","000000d700051cd915d9bd265665ffb052da50d2dae0e0e0535353fb000722ff18fedc2b9fa9ffe09aff8df9ffffffffcdcdcd090909"),n(m,"Desert","4d4d4dff2b2b98fb98f0e68ccd853fffdeadffa0a0f5deb3626262ff555555ff55ffff5587ceffff55ffffd700ffffffffffff333333"),n(m,"Detuned","171717fe4386a6e32de6da730094d99b37ff50b7d9c7c7c7686868fa80acbde371fff27f00beffbe9eff5ed7ffffffffc7c7c7000000"),n(m,"Dimidium","000000cf494c60b442db9c110575d8af5ed21db6bbbab7b6817e7eff643b37e57bfccd1a688dfded6fe932e0fbdee3e4bab7b6141414"),n(m,"Dimmed Monokai","3a3d43be3f48879a3bc5a6354f76a1855c8d578fa4b9bcba888987fb001f0f722fc47033186de3fb00672e706dfdffb9b9bcba1f1f1f"),n(m,"Django","000000fd620941a83effe862315d3ff8f8f89df39fffffff585858ff943b73da70ffff94568264ffffffcfffd1fffffff8f8f80b2f20"),n(m,"Django Reborn Again","000000fd620941a83effe862245032f8f8f89df39fffffff4c4c4cff943b73da70ffff94568264ffffffcfffd1ffffffdadedc051f14"),n(m,"Django Smooth","000000fd620941a83effe862989898f8f8f89df39fe8e8e7727272ff943b73da70ffff94cacacaffffffcfffd1fffffff8f8f8245032"),n(m,"Doom One","000000ff6c6b98be65ecbe7ba9a1e1c678dd51afefbbc2cf595959ff665599bb66ecbe7ba9a1e1c678dd51afefbfbfbfbbc2cf282c34"),n(m,"Doom Peacock","1c1f24cb4b1626a6a6bcd42a2a6cc6a9a1e15699afede0ce51504dff5d3898be65e6f97251afefc678dd46d9ffdfdfdfede0ce2b2a27"),n(m,"Dot Gov","191919bf091d3d9751f6bb3417b2e07830b08bd2edffffff595959bf091d3d9751f6bb3417b2e07830b08bd2edffffffebebeb262c35"),n(m,"Dracula","21222cff555550fa7bf1fa8cbd93f9ff79c68be9fdf8f8f26272a4ff6e6e69ff94ffffa5d6acffff92dfa4fffffffffff8f8f2282a36"),n(m,"Dracula+","21222cff555550fa7bffcb6b82aaffc792ea8be9fdf8f8f2545454ff6e6e69ff94ffcb6bd6acffff92dfa4fffff8f8f2f8f8f2212121"),n(m,"Duckbones","0e101ae036005dcd97e3950000a3cb795ccc00a3cbebefc0444860ff482158db9ef6a10000b4e0b3a1e600b4e0b3b692ebefc00e101a"),n(m,"Duotone Dark","1f1d27d9393e2dcd73d9b76effc284de8d402488ffb7a1ff4e4a60d9393e2dcd73d9b76effc284de8d402488ffeae5ffb7a1ff1f1d27"),n(m,"Duskfox","393552eb6f92a3be8cf6c177569fbac4a7e79ccfd8e0def4544d8af083a2b1d196f9cb8c65b1cdccb1eda6dae3e2e0f7e0def4232136"),n(m,"ENCOM","0000009f0000008b00ffd0000081ffbc00ca008b8bbbbbbb555555ff000000ee00ffff000000ffff00ff00cdcdffffff00a595000000"),n(m,"Earthsong","121418c9423485c54cf5ae2e1398b9d0633d509552e5c6aa675f54ff645a98e036e0d5615fdaffff926984f088f6f7ece5c7a9292520"),n(m,"Electron Highlighter","15161fff6c8d00ffc3ffd7a977abffdaa4f400fdff778faf4a6789ff6c8d00ffc3ffd7a977abffdaa4f400fdffc3cee2a5b6d423283d"),n(m,"Elegant","0a1222ff025785cc95ffcb8b8dabe1c792eb78ccf0ffffff575656ff005785cc95ffcb8b8dabe1c792eb3facefffffffced2d6292b31"),n(m,"Elemental","3c3c3098290f479a437f7111497f7d7f4e2f387f58807974555445e0502a61e070d6992779d9d9cd7c5459d599fff1e9807a7422211d"),n(m,"Elementary","242424d71c155aa513fdb40c134899e400382595e1efefef4b4b4bfc1c186bc219fec80e0955fffb00503ea8fc8c00ecefefef181818"),n(m,"Embark","1e1c31f0719ba1efd3ffe9aa57c7ffc792ea87dfebf8f8f2585273f02e6e2ce592ffb3781da0e2a742ea63f2f1a6b3cceeffff1e1c31"),n(m,"Embers Dark","16130f826d5757826d6d82576d578282576d576d82a39a905a504782825746403950483f8a8075beb6ae825757dbd6d1a39a9016130f"),n(m,"Espresso","353535d25252a5c261ffc66d6c99bbd197d9bed6ffeeeeec606060f00c0cc2e075e1e48b8ab7d9efb5f7dcf4ffffffffffffff323232"),n(m,"Espresso Libre","000000cc00001a921cf0e53a0066ffc5656b06989ad3d7cf555753ef29299aff87fffb5c43a8edff818a34e2e2eeeeecb8a8982a211c"),n(m,"Everblush","232a2de574748ccf7ee5c76b67b0e8c47fd56cbfbfb3b9b8464e50ef7e7e96d988f4d67a71baf2ce89df67cbe7bdc3c2dadada141b1e"),n(m,"Everforest Dark Hard","7a8478e67e80a7c080dbbc7f7fbbb3d699b683c092f2efdfa6b0a0f855528da101dfa0003a94c5df69ba35a77cfffbefd3c6aa1e2326"),n(m,"Everforest Light Med","7a8478e67e809ab373c1a2667fbbb3d699b683c092b2af9fa6b0a0f855528da101dfa0003a94c5df69ba35a77cfffbef5c6a72efebd4"),n(m,"Fahrenheit","1d1d1dcda0749e744dfecf757f0e0f734c4d979797ffffce404040fecea0cc734dfd9f4dcb4a054e739ffed04dffffffffffce000000"),n(m,"Fairyfloss","040303f92672c2ffdfe6c000c2ffdfffb8d1c5a3fff8f8f06090cbff857fc2ffdfffea00c2ffdfffb8d1c5a3fff8f8f0f8f8f25a5475"),n(m,"Farmhouse Dark","1d2027ba0004549d00c873000049e69f1b611fb65ce8e4e1464d54eb00097ac100ea9a00006efebf3b7f19e062f4eef0e8e4e11d2027"),n(m,"Farmhouse Light","1d20278d00033a7d00a95600092ccd820046229256a8a4a1394047eb00097ac100ea9a00006efebf3b7f00c649f4eef01d2027e8e4e1"),n(m,"Fideloper","292f33cb1e2dedb8acb7ab9b2e78c2c0236f309186eae3ce496068d4605ad4605aa866717c85c45c5db2819090fcf4dfdbdae0292f33"),n(m,"Firefly Traditional","000000c2372033bc26afad245a63ffd53ad233bbc7cccccc828282ff3b1e2ee720ecec16838dffff5cfe29f0f0ebebebf5f5f5000000"),n(m,"Firefox Dev","002831e638535eb83ca57706359ddfd75cff4b73a2dcdcdc26444de1003f1d9000cd9409006fc0a200da005794e2e2e27c8fa40e1011"),n(m,"Firewatch","585f6dd953605ab977dfb5634d89c4d5511944a8b6e6e5ff585f6dd953605ab977dfb5634c89c5d5511944a8b6e6e5ff9ba2b21e2027"),n(m,"Fish Tank","03073cc6004aacf157fecd5e525fb8986f82968763ecf0fc6c5b30da4b8adbffa9fee6a9b2befafda5cda5bd86f6ffececf0fe232537"),n(m,"Flat","222d3fa8232032a548e58d113167ac781aa02c9370b0b6ba475262d4312e2d9440e5be0c3c7dd28230a735b387e7eced2cc55d002240"),n(m,"Flatland","1d1d19f183399fd364f4ef6d5096be695abcd63865ffffff50504cd22a24a7d42cff894961b9d0695abcd63865ffffffb8dbef1d1f21"),n(m,"Flexoki Dark","100f0fd14d41879a39d0a2154385bece5d973aa99f878580575653af302966800bad8301205ea6a02f6f24837bcecdc3cecdc3100f0f"),n(m,"Flexoki Light","100f0faf302966800bad8301205ea6a02f6f24837b6f6e69b7b5acd14d41879a39d0a2154385bece5d973aa99fcecdc3100f0ffffcf0"),n(m,"Floraverse","08002e7e1a465d731acd751c1d6da1b7077e42a38cf3e0b84c3866d02063b4ce59fac35740a4cff12aae62caa8fff5dbdbd1b90e0d15"),n(m,"Forest Blue","333333f8818e92d3a21a8e638ed0ce5e468c31658ce2d8cd4a4a4afb3d666bb48d30c85a39a7a27e62b36096bfe2d8cde2d8cd051519"),n(m,"Framer","141414ff555598ec65ffcc3300aaffaa88ff88ddffcccccc414141ff8888b6f292ffd96633bbffcebbffbbecffffffff777777111111"),n(m,"Front End Delight","242526f8511b565747fa771d2c70b7f02e4f3ca1a6adadad5fac6df7431974ec4cfdc3253393cae75e4f4fbce68c735badadad1b1c1d"),n(m,"Fun Forrest","000000d6262b919c00be8a134699a38d4331da8213ddc2657f6a55e55a1cbfc65affcb1b7cc9cfd26349e6a96bffeaa3dec165251200"),n(m,"Galaxy","000000f9555f21b089fef02a589df6944d951f9ee7bbbbbb555555fa8c8f35bb9affff55589df6e756993979bcffffffffffff1d2837"),n(m,"Galizur","223344aa112233aa11ccaa222255cc7755aa22bbdd8899aa556677ff113333ff11ffdd333377ffaa77ff33ddffbbccddddeeff071317"),n(m,"Ghostty Default Style Dark","1d1f21cc6566b6bd68f0c67482a2beb294bb8abeb7c4c8c6666666d54e53b9ca4be7c5477aa6dac397d870c0b1eaeaeaffffff282c34"),n(m,"GitHub","3e3e3e970b1607962ac5bb94003e8ae946917cc4dfb2b2b2666666de00007ac895d7b6002e6cbaf2959200c7cbffffff3e3e3ef4f4f4"),n(m,"GitHub Dark","000000f7816656d364e3b3416ca4f8db61a22b7489ffffff4d4d4df7816656d364e3b3416ca4f8db61a22b7489ffffff8b949e101216"),n(m,"GitHub Dark Colorblind","484f58ec8e2c58a6ffd2992258a6ffbc8cff39c5cfb1bac46e7681fdac5479c0ffe3b34179c0ffd2a8ff56d4ddffffffc9d1d90d1117"),n(m,"GitHub Dark Default","484f58ff7b723fb950d2992258a6ffbc8cff39c5cfb1bac46e7681ffa19856d364e3b34179c0ffd2a8ff56d4ddffffffe6edf30d1117"),n(m,"GitHub Dark Dimmed","545d68f4706757ab5ac69026539bf5b083f039c5cf909dab636e7bff938a6bc46ddaaa3f6cb6ffdcbdfb56d4ddcdd9e5adbac722272e"),n(m,"GitHub Dark High Contrast","7a828eff949226cd4df0b72f71b7ffcb9eff39c5cfd9dee39ea7b3ffb1af4ae168f7c84391cbffdbb7ff56d4ddfffffff0f3f60a0c10"),n(m,"GitHub Light Colorblind","24292fb359000550ae4d2d000969da8250df1b7c836e778157606a8a46000969da633c01218bffa475f93192aa8c959f24292fffffff"),n(m,"GitHub Light Default","24292fcf222e1163294d2d000969da8250df1b7c836e778157606aa40e261a7f37633c01218bffa475f93192aa8c959f1f2328ffffff"),n(m,"GitHub Light High Contrast","0e1116a0111f024c1a3f22000349b4622cbc1b7c8366707b4b535d86061d055d204e2c001168e3844ae73192aa88929d0e1116ffffff"),n(m,"GitLab Dark","000000f57f6c52b87ad995307fb6edf88aaf32c5d2ffffff666666fcb5aa91d4a8e9be74498dd1fcacc55edee3ffffffffffff28262b"),n(m,"GitLab Dark Grey","000000f57f6c52b87ad995307fb6edf88aaf32c5d2ffffff666666fcb5aa91d4a8e9be74498dd1fcacc55edee3ffffffffffff222222"),n(m,"GitLab Light","303030a317000a7f3daf551d006cd8583cac00798a303030303030a317000a7f3daf551d006cd8583cac00798a303030303030fafaff"),n(m,"Glacier","2e343cbd0f2f35a770fb94351f5872bd2523778397ffffff404a55bd0f2f49e998fddf6e2a8bc1ea4727a0b6d3ffffffffffff0c1115"),n(m,"Grape","2d283fed22611fa91b8ddc20487df48d35c93bdeed9e9ea059516af0729a53aa5eb2dc87a9bcecad81c29de3eba288f79f9fa1171423"),n(m,"Grass","000000ff595900bb00e7b0000000a3ee59bb00bbbbbbbbbb959595ff595900bb00e7b0000000bbff55ff55fffffffffffff0a513773d"),n(m,"Grey Green","000000fe141474ff00f1ff0100deffff00f000ffbcffffff666666ff393900ff44ffd10000afffff008a00ffd3f5ececffffff002a1a"),n(m,"Gruber Darker","181818ff0a3642dc00ffdb0092a7cba095cb90aa9ee4e4e454494eff385142dc00ffdb0092a7cbafafda90aa9ef5f5f5e4e4e4181818"),n(m,"Gruvbox Dark","282828cc241d98971ad79921458588b16286689d6aa89984928374fb4934b8bb26fabd2f83a598d3869b8ec07cebdbb2ebdbb2282828"),n(m,"Gruvbox Dark Hard","1d2021cc241d98971ad79921458588b16286689d6aa89984928374fb4934b8bb26fabd2f83a598d3869b8ec07cebdbb2ebdbb21d2021"),n(m,"Gruvbox Light","fbf1c7cc241d98971ad79921458588b16286689d6a7c6f649283749d000679740eb576140766788f3f71427b583c38363c3836fbf1c7"),n(m,"Gruvbox Light Hard","f9f5d7cc241d98971ad79921458588b16286689d6a7c6f649283749d000679740eb576140766788f3f71427b583c38363c3836f9f5d7"),n(m,"Gruvbox Material","141617ea6926c1d041eecf756da3ecfd9bc1fe9d6effffff4c4c4cd3573bc1d041eecf752c86fffd9bc192a5dfffffffd4be981d2021"),n(m,"Gruvbox Material Dark","282828ea6962a9b665d8a6577daea3d3869b89b482d4be987c6f64ea6962a9b665d8a6577daea3d3869b89b482ddc7a1d4be98282828"),n(m,"Gruvbox Material Light","fbf1c7c14a4a6c782eb4710945707a945e804c7a5d654735a89984c14a4a6c782eb4710945707a945e804c7a5d4f3829654735fbf1c7"),n(m,"Guezwhoz","333333e851817ad694b7d0745aa0d69a90e058d6ced9d9d9808080e85181afd7afd1ed8564b2eda398ed61ede4edededd9d9d91d1d1d"),n(m,"HaX0R Blue","01092110b6ff10b6ff10b6ff10b6ff10b6ff10b6fffafafa48415700b3f700b3f700b3f700b3f700b3f700b3f7fefefe11b7ff010515"),n(m,"HaX0R Gr33N","001f0b15d00d15d00d15d00d15d00d15d00d15d00dfafafa33484319e20e19e20e19e20e19e20e19e20e19e20efefefe16b10e020f01"),n(m,"HaX0R R3D","1f0000b00d0db00d0db00d0db00d0db00d0db00d0dfafafa554040ff1111ff1010ff1010ff1010ff1010ff1010fefefeb10e0e200101"),n(m,"Hacktober","191918b34538587744d08949206ec5864651ac9166f1eee7464444b3332342824ac75a225389c5e795a5ebc587ffffffc9c9c9141414"),n(m,"Hardcore","1b1d1ef92672a6e22efd971f66d9ef9e6ffe5e7175ccccc6505354ff669dbeed5fe6db7466d9ef9e6ffea3babff8f8f2a0a0a0121212"),n(m,"Harper","010101f8b63f7fb5e1d6da25489e48b296c6f5bfd7a8a49d726e6af8b63f7fb5e1d6da25489e48b296c6f5bfd7fefbeaa8a49d010101"),n(m,"Havn Daggry","1f2842985248577159be6b003a577d7c5c97925780b0b5c51f2842cc4a35719679f1a5276089c07d7396aa869dd6dbeb3b4a7af8f9fb"),n(m,"Havn Skumring","252c47ea563e6ead7bf8b330596cf77c719ed588c1dce0ee38425cd172648c9e8feac58c5186cb9b7ceed17ab6fff6e1d6dbeb111522"),n(m,"Heeler","000000e44c2ebdd100f4ce655ba5f2ff95c2ff9763ffffff4c4c4ce44c2ebdd100f4ce650088ffff95c28da6e4fffffffdfdfd211f46"),n(m,"Highway","000000d00e18138034ffcb3e006bb3783482455271ededed5d504af07e18b1d130fff1204fc2fdde00715d504affffffededed222225"),n(m,"Hipster Green","000000b6214a00a600bfbf00246eb2b200b200a6b2bfbfbf666666e5000086a93ee5e5000000ffe500e500e5e5e5e5e584c138100b05"),n(m,"Hivacruz","202746c94922ac9739c08b303d8fd16679cc22a2c9979db46b7394c76b2973ad435e6687898ea4dfe2f19c637af5f7ffede4e4132638"),n(m,"Homebrew","00000099000000a6009999000d0dbfb200b200a6b2bfbfbf666666e5000000d900e5e5000000ffe500e500e5e5e5e5e500ff00000000"),n(m,"Hopscotch","322931dd464c8fc13efdcc591290bfc85e7c149b93b9b5b8797379fd8b195c545c5c545b989498d5d3d5b33508ffffffb9b5b8322931"),n(m,"Hopscotch.256","322931dd464c8fc13efdcc591290bfc85e7c149b93b9b5b8797379dd464c8fc13efdcc591290bfc85e7c149b93ffffffb9b5b8322931"),n(m,"Horizon","000000e9567829d398fab79526bbd9ee64ac59e1e3e5e5e5666666ec6a883fdaa4fbc3a73fc4def075b56be4e6e5e5e5d5d8da1c1e26"),n(m,"Horizon Bright","16161dfc477700ca86f2a68200beddff58b100cdcbbfafac1a1c24fe5f8700d193e5a68800c9e2ff6cba00c3c2fff2ef16161dfdf0ed"),n(m,"Hot Dog Stand","000000ffff54ffff54ffff54000000ffff54ffffffc6c6c6000000ffff54ffff54ffff54000000ffff54ffffffc6c6c6ffffffea3323"),n(m,"Hot Dog Stand (Mustard)","000000ea3323ea3323ea3323000000ea3323000000b9b9b9000000ea3323ea3323ea3323000000ea3323000000c6c6c6000000ffff54"),n(m,"Hurtado","575757ff1b00a5e055fbe74a496487fd5ff186e9fecbcccb404040d51d00a5df55fbe84a89beffc001c186eafedbdbdbdbdbdb000000"),n(m,"Hybrid","2a2e33b84d51b3bf5ae4b55e6e90b0a17eac7fbfb4b5b9b64345488d2e32798431e58a504b6b886e50794d7b745a626ab7bcba161719"),n(m,"IBM 5153 CGA","141414d033331bd01bd08c1b1b1bd0d01bd01bd0d0cecece4e4e4edc4e4e4edc4ef3f34e4e4edcf34ef34ef3f3ffffffcecece141414"),n(m,"IBM 5153 CGA (Black)","000000c4000000c400c47e000000c4c400c400c4c4c4c4c44e4e4edc4e4e4edc4ef3f34e4e4edcf34ef34ef3f3ffffffc4c4c4000000"),n(m,"IC Green PPL","014401ff273641a63876a8312ec3b950a0963ca078e6fef2106910b4fa5caefb86dafa872efaeb50fafa3cfac8e0f1dce0f1dc2c2c2c"),n(m,"IC Orange PPL","000000c13900a4a900caaf00bd6d00fc5e00f79500ffc88a6a4f2aff8c68f6ff40ffe36effbe55fc874fc69752fafaffffcb83262626"),n(m,"IR Black","4f4f4ffa6c60a8ff60fffeb796cafefa73fdc6c5feefedef7b7b7bfcb6b0cfffabffffccb5dcfffb9cfee0e0fefffffff1f1f1000000"),n(m,"IRIX Console","1a1919d4242637a327c29d280739e2911f9c4497dfcccccc767676f34f5945c731f9f2a74079ffc31ba26ed7d7f2f2f2f2f2f20c0c0c"),n(m,"IRIX Terminal","1a1919ff2b1e57ff3dffff440004ffff2cff56ffffffffffffff44ffff44ffff44fffc72ffff44ffff44ffff44ffff44f2f2f2000043"),n(m,"Iceberg Dark","1e2132e27878b4be82e2a47884a0c6a093c789b8c2c6c8d16b7089e98989c0ca8ee9b18991acd1ada0d395c4ced2d4dec6c8d1161821"),n(m,"Iceberg Light","dcdfe7cc517a668e3dc573392d539e7759b43f83a633374c8389a3cc3768598030b6662d22478e6845ad327698262a3f33374ce8e9ec"),n(m,"Idea","adadadfc525698b61cccb444437ee79d74b02488874b4b4bfffffffc707298b61cffff0b6c9cedfc7eff248887181818adadad202020"),n(m,"Idle Toes","323232d252527fe173ffc66d4099fff680ffbed6ffeeeeec606060f070709dff91ffe48b5eb7f7ff9dffdcf4ffffffffffffff323232"),n(m,"Jackie Brown","2c1d16ef57342baf2bbebf00246eb2d05ec100aceebfbfbf666666e5000086a93ee5e5000000ffe500e500e5e5e5e5e5ffcc2f2c1d16"),n(m,"Japanesque","343935cf3f617bb75be9b32a4c9ad4a57fc4389aadfafaf6595b59d18fa6767f2c78592f13597960429176bbcab2b5aef7f6ec1e1e1e"),n(m,"Jellybeans","929292e2737394b979ffba7b97bedce1c0fa00988edededebdbdbdffa1a1bddeabffdca0b1d8f6fbdaff1ab2a8ffffffdedede121212"),n(m,"JetBrains Darcula","000000fa5355126e00c2c3004581ebfa54ff33c2c1adadad555555fb717267ff4fffff006d9df1fb82ff60d3d1eeeeeeadadad202020"),n(m,"Jubi","3b3750cf7b9890a94b6ebfc0576ea6bc4f6875a7d2c3d3dea874cede90abbcdd6187e9ea8c9fcde16c87b7c9efd5e5f1c3d3de262b33"),n(m,"Kanagawa Dragon","0d0c0cc4746e8a9a7bc4b28a8ba4b0a292a38ea4a2c8c093a6a69ce4687687a987e6c3847fb4ca938aa97aa89fc5c9c5c5c9c5181616"),n(m,"Kanagawa Lotus","1f1f28c840536f894e77713f4d699bb35b79597b755454648a8980d7474b6e915f836f4a6693bf624c835e857a43436c545464f2ecbc"),n(m,"Kanagawa Wave","090618c3404376946ac0a36e7e9cd8957fb86a9589c8c093727169e8242498bb6ce6c3847fb4ca938aa97aa89fdcd7badcd7ba1f1f28"),n(m,"Kanagawabones","1f1f28e46a7898bc6de5c2837eb3c9957fb87eb3c9ddd8bb49495eec818c9ec967f1c9827bc2dfa98fd27bc2dfa8a48dddd8bb1f1f28"),n(m,"Kanso Ink","14171dc4746e8a9a7bc4b28a8ba4b0a292a38ea4a2c8c093a4a7a4e4687687a987e6c3847fb4ca938aa97aa89fc5c9c7c5c9c714171d"),n(m,"Kanso Mist","22262dc4746e8a9a7bc4b28a8ba4b0a292a38ea4a2a4a7a45c6066e4687687a987e6c3847fb4ca938aa97aa89fc5c9c7c5c9c722262d"),n(m,"Kanso Pearl","22262dc840536f894e77713f4d699bb35b79597b755454646d6f6ed7474b6e915f836f4a6693bf624c835e857a43436c22262df2f1ef"),n(m,"Kanso Zen","0d0c0cc4746e8a9a7bc4b28a8ba4b0a292a38ea4a2c8c093a4a7a4e4687687a987e6c3847fb4ca938aa97aa89fc5c9c7c5c9c7090e13"),n(m,"Kibble","4d4d4dc7003129cf13d8e30e3449d18400ff0798abe2d1e35a5a5af015786ce05cf3f79e97a4f7c495f068f2e0fffffff7f7f70e100a"),n(m,"Kitty Default","000000cc040319cb00cecb000d73cccb1ed10dcdcddddddd767676f2201f23fd00fffd001a8ffffd28ff14ffffffffffdddddd000000"),n(m,"Kitty Low Contrast","000000cc040319cb00cecb000d73cccb1ed10dcdcddddddd767676f2201f23fd00fffd001a8ffffd28ff14ffffffffffffffff333333"),n(m,"Kolorit","1d1a1eff5b8247d7a1e8e5625db4eeda6cda57e9ebededed504d51ff5b8247d7a1e8e5625db4eeda6cda57e9ebedededefecec1d1a1e"),n(m,"Konsolas","000000aa171718b218ebae1f2323a5ad1edc42b0c8c8c1c17b716eff41415fff5fffff554b4bffff54ff69ffffffffffc8c1c1060606"),n(m,"Kurokula","333333c35a5278b3a9e1b9175c91dd8b79a6867268e0cfc2515151ffc34cafffa5fff70090dbffad93ffffcdb6ffffffe0cfc2141515"),n(m,"Lab Fox","2e2e2efc6d263eb383fca121db3b216b40a86e49cbffffff535353ff651753eaa8fca013db501f6a36b67d53e7ffffffffffff2e2e2e"),n(m,"Laser","626262ff8373b4fb7309b4bdfed300ff90fed1d1fef1f1f18f8f8fffc4bed6fcbafffed5f92883ffb2fee6e7fefffffff106e3030d18"),n(m,"Later This Evening","2b2b2bd45a60afba67e5d289a0bad6c092d691bfb7494a4a525454d3232faabb39e5be396699d6ab53d65fc0aec1c2c2959595222222"),n(m,"Lavandula","2300467d1625337e6f7f6f494f4a7f5a3f7f58777f736e7d443a53e0516752e0c4e0c3868e87e0a776e09ad4e08c91fa736e7d050014"),n(m,"Light Owl","403f53de3d3b08916ae0af02288ed7d6438a2aa298bdbdbd989fb1de3d3b08916adaaa01288ed7d6438a2aa298f0f0f0403f53fbfbfb"),n(m,"Liquid Carbon","000000ff3030559a70ccac000099cccc69c87ac4ccbccccc595959ff3030559a70ccac000099cccc69c87ac4ccbcccccafc2c2303030"),n(m,"Liquid Carbon Transparent","000000ff3030559a70ccac000099cccc69c87ac4ccbccccc404040ff3030559a70ccac000099cccc69c87ac4ccbcccccafc2c2000000"),n(m,"Lovelace","282a36f37f975adecdf2a2728897f4c574dd79e6f3fdfdfd4e5165ff497118e3c8ff8037556fffb043d13fdceebebec1fdfdfd1d1f28"),n(m,"Man Page","000000cc000000a6009999000000b2b200b200a6b2b2b2b2666666e5000000cc00bfbf000000ffe500e500cbcbe5e5e5000000fef49c"),n(m,"Mariana","000000ec5f6699c794f9ae586699ccc695c65fb4b4f7f7f7666666f97b58acd1a8fac76185add6d8b6d882c4c4ffffffd8dee9343d46"),n(m,"Material","212121b7141f457b24f6981e134eb25600880e717cafafaf424242e83b3f7aba3abfaa0054a4f3aa4dbc26bbd1d9d9d9232322eaeaea"),n(m,"Material Dark","212121b7141f457b24f6981e134eb2701aa20e717cefefef4f4f4fe83b3f7aba3affea2e54a4f3aa4dbc26bbd1d9d9d9e5e5e5232322"),n(m,"Material Darker","000000ff5370c3e88dffcb6b82aaffc792ea89ddffffffff545454ff5370c3e88dffcb6b82aaffc792ea89ddffffffffeeffff212121"),n(m,"Material Design Colors","435b67fc38415cf19efed03237b6fffc226e59ffd1ffffffa1b0b8fc746dadf7befee16c70cffffc669b9affe6ffffffe7ebed1d262a"),n(m,"Material Ocean","546e7aff5370c3e88dffcb6b82aaffc792ea89ddffffffff546e7aff5370c3e88dffcb6b82aaffc792ea89ddffffffff8f93a20f111a"),n(m,"Mathias","000000e52222a6e32dfc951ec48dfffa257367d9f0f2f2f2555555ff555555ff55ffff555555ffff55ff55ffffffffffbbbbbb000000"),n(m,"Matrix","0f191c23755a82d967ffd7003f524240993150b45a5073506880602fc07990d762faff004f7e7e11ff25c1ff8a678c614266440f191c"),n(m,"Matte Black","333333d35f5fffc107b91c1ce68e0dd35f5fbebebebebebe8a8a8d891c1cffc107b90a0af59e0bb91c1ceaeaeaffffffbebebe121212"),n(m,"Medallion","000000b64c007c8b16d3bd26616bb08c5a90916c25cac29a5e5219ff9149b2ca3bffe54aacb8ffffa0ffffbc51fed698cac2961d1908"),n(m,"Melange Dark","34302cbd818378997ae49b5d7f91b2b380b07b9695c1a78e867462d4776685b695ebc06da3a9cecf9bc289b3b6ece1d7ece1d7292522"),n(m,"Melange Light","e9e1dbc77b8b6e9b72bc5c007892bdbe79bb7397977d6658a98a78bf00213a684aa06d00465aa49041803d656854433a54433af1f1f1"),n(m,"Mellifluous","1a1a1ad29393b3b393cbaa89a8a1beb39fb0c0af8cdadada5b5b5bc95954828040a6794c5a65999c699574a39effffffdadada1a1a1a"),n(m,"Mellow","27272af5a19190b99fe6b99daca1cfe29ecaea83a5c1c0d4424246ffae9f9dc6acf0c5a9b9aedaecaad6f591b2cac9ddc9c7cd161617"),n(m,"Miasma","0000006857425f875fb36d4378824bbb7744c9a554d7c4836666666857425f875fb36d4378824bbb7744c9a554d7c483c2c2b0222222"),n(m,"Midnight In Mojave","1e1e1eff453a32d74bffd60a0a84ffbf5af25ac8faffffff515151ff453a32d74bffd60a0a84ffbf5af25ac8faffffffffffff1e1e1e"),n(m,"Mirage","011627ff999985cc95ffd7007fb5ffddb3ff21c7a8ffffff575656ff999985cc95ffd7007fb5ffddb3ff85cc95ffffffa6b2c01b2738"),n(m,"Misterioso","000000ff424274af68ffad29338f869414e623d7d7e1e1e0626262ff324274cd68ffb92923d7d7ff37ff00ede1ffffffe1e1e02d3743"),n(m,"Molokai","121212fa257398e123dfd4601080d08700ff43a8d0bbbbbb555555f6669db1e05ffff26d00afffaf87ff51ceffffffffbbbbbb121212"),n(m,"Mona Lisa","351b0e9b291c636232c36e28515c5d9b1d29588056f7d75c874228ff4331b4b264ff95669eb2b4ff5b6a8acd8fffe598f7d66a120b0d"),n(m,"Monokai Classic","272822f92672a6e22ee6db74fd971fae81ff66d9effdfff16e7066f92672a6e22ee6db74fd971fae81ff66d9effdfff1fdfff1272822"),n(m,"Monokai Pro","2d2a2eff6188a9dc76ffd866fc9867ab9df278dce8fcfcfa727072ff6188a9dc76ffd866fc9867ab9df278dce8fcfcfafcfcfa2d2a2e"),n(m,"Monokai Pro Light","faf4f2e14775269d69cc7a0ae160327058be1c8ca829242aa59fa0e14775269d69cc7a0ae160327058be1c8ca829242a29242afaf4f2"),n(m,"Monokai Pro Light Sun","f8efe7ce4770218871b16803d4572b6851a22473b62c232ea59c9cce4770218871b16803d4572b6851a22473b62c232e2c232ef8efe7"),n(m,"Monokai Pro Machine","273136ff6d7ea2e57bffed72ffb270baa0f87cd5f1f2fffc6b7678ff6d7ea2e57bffed72ffb270baa0f87cd5f1f2fffcf2fffc273136"),n(m,"Monokai Pro Octagon","282a3aff657abad761ffd76dff9b5ec39ac99cd1bbeaf2f1696d77ff657abad761ffd76dff9b5ec39ac99cd1bbeaf2f1eaf2f1282a3a"),n(m,"Monokai Pro Ristretto","2c2525fd6883adda78f9cc6cf38d70a8a9eb85daccfff1f372696afd6883adda78f9cc6cf38d70a8a9eb85daccfff1f3fff1f32c2525"),n(m,"Monokai Pro Spectrum","222222fc618d7bd88ffce566fd9353948ae35ad4e6f7f1ff69676cfc618d7bd88ffce566fd9353948ae35ad4e6f7f1fff7f1ff222222"),n(m,"Monokai Remastered","1a1a1af4005f98e024fd971f9d65fff4005f58d1ebc4c5b5625e4cf4005f98e024e0d5619d65fff4005f58d1ebf6f6efd9d9d90c0c0c"),n(m,"Monokai Soda","1a1a1af4005f98e024fa84199d65fff4005f58d1ebc4c5b5625e4cf4005f98e024e0d5619d65fff4005f58d1ebf6f6efc4c5b51a1a1a"),n(m,"Monokai Vivid","121212fa293498e123fff30a0443fff800f801b6edffffff838383f6669db1e05ffff26d0443fff200f651cefffffffff9f9f9121212"),n(m,"Moonfly","323437ff54548cc85fe3c78a80a0ffcf87e879dac8c6c6c6949494ff518936c692c6c68474b2ffae81ff85dc85e4e4e4bdbdbd080808"),n(m,"N0Tch2K","383838a95551666666a98051657d3e767676c9c9c9d0b8a3545454a977758c8c8ca9917598bd5ea3a3a3dcdcdcd8c8bba0a0a0222222"),n(m,"Neobones Dark","0f191fde6e7c90ff6bb77e648190d4b279a766a5adc6d5cf334652e8838fa0ff85d68c6792a0e2cf86c165b8c198a39ec6d5cf0f191f"),n(m,"Neobones Light","e5ede6a8334c567a3094492728648688507d3b8992202e1899ac9c94253e3f5a22803d1c1d55737b3b702b747c415934202e18e5ede6"),n(m,"Neon","000000ff30455ffa74fffc7e0f15d8f924e700fffcc7c7c7686868ff5a5a75ff88fffd963c40cbf15be588fffeffffff00fffc14161a"),n(m,"Neopolitan","0000009a1a1a61ce3cfbde2d324883ff00808da6cef8f8f84c4c4c9a1a1a61ce3cfbde2d324883ff00808da6cef8f8f8ffffff271f19"),n(m,"Neutron","23252bb540365ab977deb5666a7c93a4799d3f94a8e6e8ef494b51b540365ab977deb5666a7c93a4799d3f94a8ebedf2e6e8ef1c1e22"),n(m,"Night Lion V1","4c4c4cbb00005fde8ff3f167276bd8bb00bb00dadfbbbbbb555555ff555555ff55ffff555555ffff55ff55ffffffffffbbbbbb000000"),n(m,"Night Lion V2","4c4c4cbb000004f623f3f16764d0f0ce6fdb00dadfbbbbbb555555ff55557df71dffff5562cbe8ff9bf500ccd8ffffffbbbbbb171717"),n(m,"Night Owl","011627ef535022da6eaddb6782aaffc792ea21c7a8ffffff575656ef535022da6effeb9582aaffc792ea7fdbcaffffffd6deeb011627"),n(m,"Night Owlish Light","011627d3423e2aa298daaa014876d6403f5308916a7a81817a8181f76e6e49d0c5dac26b5ca7e469709800c990989fb1403f53ffffff"),n(m,"Nightfox","393b44c94f6d81b29adbc074719cd69d79d663cdcfdfdfe0575860d169838ebaa4e0c98986abdcbaa1e27ad5d6e4e4e5cdcecf192330"),n(m,"Niji","333333d23e0854ca74fff7002ab9ffff50da1ef9f5ddd0c4515151ffb7b7c1ffaefcffb88efff3ffa2edbcffc7ffffffffffff141515"),n(m,"No Clown Fiesta","151515b4695890a959f4bf75bad7ffaa759f88afa2e1e1e17272727e97ab90a959f4bf75bad7ffaa759f88afa2afafafe0e1e4101010"),n(m,"No Clown Fiesta Light","d6d6d6874e42677940b890588ba1bfaa759f3e5f661515152b2b2b637786677940b8905893a2abaa759f99ab93373737151515e1e1e1"),n(m,"Nocturnal Winter","4d4d4df12d5209cd7ef5f17a3182e0ff2b6d09c87afcfcfc808080f16d860ae78dfffc676096ffff78a20ae78dffffffe6e5e50d0d17"),n(m,"Nord","3b4252bf616aa3be8cebcb8b81a1c1b48ead88c0d0e5e9f0596377bf616aa3be8cebcb8b81a1c1b48ead8fbcbbeceff4d8dee92e3440"),n(m,"Nord Light","3b4252bf616a96b17fc5a56581a1c1b48ead7bb3c3a5abb64c566abf616a96b17fc5a56581a1c1b48ead82afaeeceff4414858e5e9f0"),n(m,"Nord Wave","3b4252bf616aa3be8cebcb8b81a1c1b48ead88c0d0e5e9f04c566abf616aa3be8cebcb8b81a1c1b48ead8fbcbbeceff4d8dee9212121"),n(m,"Nordfox","3b4252bf616aa3be8cebcb8b81a1c1b48ead88c0d0e5e9f053648dd06f79b1d196f0d3998cafd2c895bf93ccdce7ecf4cdcecf2e3440"),n(m,"Novel","000000cc0000009600d06b000000cccc00cc0087cca6a6a6808080cc0000009600d06b000000cccc00cc0087ccffffff3b2322dfdbc3"),n(m,"Nvim Dark","07080dffc0b9b3f6c0fce094a6dbffffcaff8cf8f7eef1f84f5258ffc0b9b3f6c0fce094a6dbffffcaff8cf8f7eef1f8e0e2ea14161b"),n(m,"Nvim Light","07080d5900080055236b5300004c73470045007373a1a4ab4f52585900080055236b5300004c73470045007373eef1f814161be0e2ea"),n(m,"Obsidian","000000b30d0e00bb00fecd223a9bdbbb00bb00bbbbbbbbbb555555ff000393c863fef874a1d7ffff55ff55ffffffffffcdcdcd283033"),n(m,"Ocean","000000e64c4c00a6009999000000b2d826d800a6b2bfbfbf808080ff1a1a00d900e5e5007373ffe500e500e5e5e5e5e5ffffff224fbc"),n(m,"Oceanic Material","000000ee2b2a40a33fffea2e1e80f08800a016afcaa4a4a4777777dc5c6070be71fff16354a4f3aa4dbc42c7daffffffc2c8d71c262b"),n(m,"Oceanic Next","162c35ec5f6799c794fac8636699ccc594c55fb3b3ffffff65737eec5f6799c794fac8636699ccc594c55fb3b3ffffffc0c5ce162c35"),n(m,"Ollie","000000ac2e3131ac61ac43002d57acb085281fa6ac8a8eac684432ff3d483bff99ff5e1e4488ffffc21d1ffaff5b6ea78a8dae222125"),n(m,"One Dark Two","1d1f23e2788198c379eac78671b9f4c88bda62bac6c9ccd34a505ae68991a8cc8eedcf978dc7f6d3a2e278c4cee6e6e6e6e6e621252b"),n(m,"One Double Dark","3d4452f163728cc570ecbe703fb1f5d373e317b9c4dbdfe5525d6fff777b82d882f5c0656dcaffff7bf400e5fbf7f9fcdbdfe5282c34"),n(m,"One Double Light","454b58f7484025a343cc81000087c1b50da9009ab7c5b2b30e131fff371100b90eec99001065dee500d800b4ddffffff383a43fafafa"),n(m,"One Half Dark","282c34e06c7598c379e5c07b61afefc678dd56b6c2dcdfe45d677ae06c7598c379e5c07b61afefc678dd56b6c2dcdfe4dcdfe4282c34"),n(m,"One Half Light","383a42e4564950a14fc184010184bca626a40997b3bababa4f525ee06c7598c379d8b36e61afefc678dd56b6c2ffffff383a42fafafa"),n(m,"Onenord","3b4252e06c759ec183ebcb8b81a1c1b988b088c0d0e5e9f0596377e06c759ec183ebcb8b81a1c1b988b08fbcbbeceff4e5e9f02e3440"),n(m,"Onenord Light","2e3440cb4f5348a53dee5e253879c59f4aca3ea1adb2b6bd646a76d163665f9e9dba793e1b40a69665af8fbcbbeceff42e3440f7f8fa"),n(m,"Operator Mono Dark","5a5a5aca372d4d7b3ad4d6974387cfb86cb472d5c6ced4cd9a9b99c37d6283d0a2fdfdc589d3f6ff2c7a82eadafdfdf6c3cac2191919"),n(m,"Overnight Slumber","0a1222ffa7c485cc95ffcb8b8dabe1c792eb78ccf0ffffff575656ffa7c485cc95ffcb8b8dabe1c792ebffa7c4ffffffced2d60e1729"),n(m,"Oxocarbon","16161600dfdb00b4ffff429700c15ac693ffff74b8f2f4f858585800dfdb00b4ffff429700c15ac693ffff74b8f2f4f8f2f4f8161616"),n(m,"Pale Night Hc","000000f07178c3e88dffcb6b82aaffc792ea89ddffffffff737373f6a9aedbf1baffdfa6b4ccffddbdf2b8eaff999999cccccc3e4251"),n(m,"Pandora","000000ff424274af68ffad29338f869414e623d7d7e2e2e23f5648ff324274cd68ffb92923d7d7ff37ff00ede1ffffffe1e1e1141e43"),n(m,"Paraiso Dark","2f1e2eef615548b685fec41806b6ef815ba45bc4bfa39e9b776e71ef615548b685fec41806b6ef815ba45bc4bfe7e9dba39e9b2f1e2e"),n(m,"Paul Millr","2a2a2aff000079ff0fe7bf00396bd7b449be66ccffbbbbbb666666ff008066ff66f3d64e709aeddb67e67adff2fffffff2f2f2000000"),n(m,"Pencil Dark","212121c3077110a778a89c14008ec45f498620a5bad9d9d94f4f4ffb007a5fd7aff3e43020bbfc6855de4fb8ccf1f1f1f1f1f1212121"),n(m,"Pencil Light","212121c3077110a778a89c14008ec4523c7920a5bab3b3b3424242fb007a52caa2c0b10020bbfc6855de4fb8ccf1f1f1424242f1f1f1"),n(m,"Peppermint","353535e7466989d287dab853449fd0da62dc65aaafb4b4b4535353e4859ba3cca2e1e4876fbce2e586e796dcdbdfdfdfc8c8c8000000"),n(m,"Phala Green Dark","000000ab150000b100a9a7000223c0c22ec000b4c0cbcbcb797979ed220000db00eae7000433ffed3aea00e8eaeaeaeac1fc03000000"),n(m,"Piatto Light","414141b2377166781ecd6f343c5ea8a454b266781ebfbfbf3f3f3fdb3365829429cd6f343c5ea8a454b2829429f2f2f2414141ffffff"),n(m,"Pnevma","2f2e2da3666690a57dd7af877fa5bdc79ec48adbb4d0d0d04a4845d78787afbea2e4c9afa1bdced7bedab1e7ddefefefd0d0d01c1c1c"),n(m,"Poimandres","1a1e28d0679d5de4c7fffac289ddfffcc5e9add7ffffffffa6accdd0679d5de4c7fffac2add7fffae4fc89ddffffffffa6accd1a1e28"),n(m,"Poimandres Darker","16161ed0679d5de4c7fffac289ddfffcc5e9add7ffffffffa6accdd0679d5de4c7fffac2add7fffae4fc89ddffffffffa6accd16161e"),n(m,"Poimandres Storm","252b37d0679d5de4c7fffac289ddfff087bd89ddffffffffa6accdd0679d5de4c7fffac2add7fff087bdadd7ffffffffa6accd252b37"),n(m,"Poimandres White","fefeffff209001dab2e5ba4e8abacdeb83948abacd000000969cbdff209001dab2e5ba4e0ebfffeb83940ebfff000000969cbdfefeff"),n(m,"Popping And Locking","1d2021cc241d98971ad79921458588b16286689d6aa89984928374f42c3eb8bb26fabd2f99c6cad3869b7ec16eebdbb2ebdbb2181921"),n(m,"Powershell","000000981a22098003c4a0004140c3d336820e807f7f7c7f808080ef29291cfe3cfefe45268ad2fe13fa29fffec2c1c3f6f6f7052454"),n(m,"Primary","000000db44370f9d58f4b4004285f4db44374285f4bfbfbf000000db44370f9d58f4b4004285f44285f40f9d58ffffff000000ffffff"),n(m,"Pro","00000099000000a6009999002009dbb200b200a6b2bfbfbf666666e5000000d900e5e5000000ffe500e500e5e5e5e5e5f2f2f2000000"),n(m,"Pro Light","000000e5492b50d148c6c4403b75ffed66e84ed2dec2c2c29f9f9fff664048d53ebfbe230082ffff7eff3bd1d2f2f2f2191919ffffff"),n(m,"Purple Rain","000000ff260e9be205ffc40000a2fa815bb500deefffffff565656ff4250b8e36effd85200a6ffac7bf074fdf3fffffffffbf621084a"),n(m,"Purplepeter","0a0520ff796d99b481efdfac66d9efe78fcdba8cffffba81504b63f99f92b4be8ff2e9bf79daedba91d4a0a0d6b9aed3ece7fa2a1a4a"),n(m,"Rapture","000000fc644d7afde1fff09b6c9bf5ff4fa164e0ffc0c9e5304b66fc644d7afde1fff09b6c9bf5ff4fa164e0ffffffffc0c9e5111e2a"),n(m,"Raycast Dark","000000ff536059d499ffc53156c2ffcf2f9852eee5ffffff4c4c4cff636359d499ffc53156c2ffcf2f9852eee5ffffffffffff1a1a1a"),n(m,"Raycast Light","000000b12424006b4ff8a300138af29a1b6e3eb8bfbfbfbf000000b12424006b4ff8a300138af29a1b6e3eb8bfffffff000000ffffff"),n(m,"Rebecca","12131edd775504dbb5f2e7b77aa5ffbf9cf956d3c2e4e3e9666699ff92cd01eac0fffca869c0fac17ff88bfde1f4f2f9e8e6ed292a44"),n(m,"Red Alert","000000d62e4e71be6bbeb86b489beee979d76bbeb8d6d6d6666666e02553aff08cdfddb765aaf1ddb7dfb7dfddffffffffffff762423"),n(m,"Red Planet","2020208c3432728271e8bf6a69819e8964925b8390b9aa99676767b55242869985ebeb9160827ede497438add8d6bfb8c2b790222222"),n(m,"Red Sands","000000ff3f0000bb00e7b0000072ffbb00bb00bbbbbbbbbb6e6e6ed41a1a00bb00e7b0000072aeff55ff55ffffffffffd7c9a77a251e"),n(m,"Relaxed","151515bc5653909d63ebc17a6a8799b06698c9dfffd9d9d9636363bc5653a0ac77ebc17a7eaac7b06698acbbd0f7f7f7d9d9d9353a44"),n(m,"Retro","13a10e13a10e13a10e13a10e13a10e13a10e13a10e13a10e16ba1016ba1016ba1016ba1016ba1016ba1016ba1016ba1013a10e000000"),n(m,"Retro Legends","262626de545445eb45f7bf2b4066f2bf4cf240d9e6bfe6bf4c594cff666659ff59ffd9334c80ffe666ff59e6fff2fff245eb450d0d0d"),n(m,"Rippedcasts","000000cdaf95a8ff60bfbb1f75a5b0ff73fd5a647ebfbfbf666666eecbadbcee68e5e50086bdc9e500e58c9bc4e5e5e5ffffff2b2b2b"),n(m,"Rose Pine","26233aeb6f9231748ff6c1779ccfd8c4a7e7ebbcbae0def46e6a86eb6f9231748ff6c1779ccfd8c4a7e7ebbcbae0def4e0def4191724"),n(m,"Rose Pine Dawn","f2e9e1b4637a286983ea9d3456949f907aa9d7827e5752799893a5b4637a286983ea9d3456949f907aa9d7827e575279575279faf4ed"),n(m,"Rose Pine Moon","393552eb6f923e8fb0f6c1779ccfd8c4a7e7ea9a97e0def46e6a86eb6f923e8fb0f6c1779ccfd8c4a7e7ea9a97e0def4e0def4232136"),n(m,"Rouge 2","5d5d6bc6797e969e92dbcdab6e94b94c4e788ab6c1e8e8ea616274c6797ee6dcc4e6dcc498b3cd8283a1abcbd3e8e8eaa2a3aa17182b"),n(m,"Royal","241f2b91284c23801cb49d276580b0674d968aaabe5249663e3a4ad5356c2cd946fde83b90baf9a479e3acd4eb9e8cbd514968100815"),n(m,"Ryuuko","2c3941865f5b66907db1a9906a8e95b18a7388b2acececec5d7079865f5b66907db1a9906a8e95b18a7388b2acecececececec2c3941"),n(m,"Sakura","000000d5237041af1abc70536964abc71fbf939393998eac786d69f41d9922e529f595749892f1e90cddeeeeeecbb6ffdd7bdc18131e"),n(m,"Scarlet Protocol","101116ff005100dc84faf9450271b6ca30c700c5c7c7c7c7686868ff6e675ffa68fffc676871ffbd35ec60fdffffffffe419511c153d"),n(m,"Sea Shells","17384cd15123027c9bfca02f1e495068d4f150a3b5deb88d434b53d48678628d98fdd39f1bbcddbbe3ee87acb4fee4cedeb88d09141b"),n(m,"Seafoam Pastel","757575825d4d728c62ada16d4d7b828a7267729494e0e0e08a8a8acf937a98d9aafae79d7ac3cfd6b2a1ade0e0e0e0e0d4e7d4243435"),n(m,"Selenized Black","252525ed4a4670b433dbb32d368aebeb6eb73fc5b7b9b9b9777777ff5e5683c746efc5414f9cfeff81ca56d8c9dededeb9b9b9181818"),n(m,"Selenized Dark","184956fa575075b938dbb32d4695f7f275be41c7b9adbcbc72898fff665c84c747ebc13d58a3ffff84cd53d6c7cad8d9adbcbc103c48"),n(m,"Selenized Light","ece3ccd2212d489100ad89000072d4ca4898009c8f53676d909995cc1729428b00a78300006dcec4439200978a3a4d5353676dfbf3db"),n(m,"Seoulbones Dark","4b4b4be388a398bd99ffdf9b97bddea5a6c56fbdbedddddd797172eb99b18fcd92ffe5b3a2c8e9b2b3da6bcacba8a8a8dddddd4b4b4b"),n(m,"Seoulbones Light","e2e2e2dc5284628562c485620084a3896788008586555555a5a0a1be3c6d487249a76b48006f897f4c7e006f70777777555555e2e2e2"),n(m,"Seti","323232c228328ec43de0c64f43a5d58b57b58ec43deeeeee3f3f3fc228328ec43de0c64f43a5d58b57b58ec43dffffffcacecd111213"),n(m,"Shades Of Purple","000000d904293ad900ffe7006943ffff2c7000c5c7c7c7c7686868f92a1c43d426f1d0006871ffff77ff79e8fbffffffffffff1e1d40"),n(m,"Shaman","012026b2302d00a9415e8baa449a8600599d5d7e19405555384451ff42422aea5e8ed4fd61d5ba1298ff98d02858fbd6405555001015"),n(m,"Slate","222222e2a8bf81d778c4c9c0335856a481d315ab9c02c5e0ffffffffcdd9beffa8d0ccca7ab0d2c5a7d98cdfe0e0e0e035b1d2222222"),n(m,"Sleepy Hollow","572100ba393491773fb556005f63b4a17c7b8faea9af9a914e4b61d9443fd6b04ef668138086efe2c2bba4dce7d2c7a9af9a91121214"),n(m,"Smyck","000000b841317da900c4a50062a3c4ba8acc207383a1a1a17a7a7ad6837cc4f137fee14d8dcff0f79aff6ad9cff7f7f7f7f7f71b1b1b"),n(m,"Snazzy","000000fc434650fb7cf0fb8c49bafffc4cb48be9feededec555555fc434650fb7cf0fb8c49bafffc4cb48be9feededecebece61e1f29"),n(m,"Snazzy Soft","000000ff5c575af78ef3f99d57c7ffff6ac19aedfef1f1f0686868ff5c575af78ef3f99d57c7ffff6ac19aedfef1f1f0eff0eb282a36"),n(m,"Soft Server","000000a2686a9aa56aa3906a6b8fa36a71a36ba58f99a3a2666c6cdd5c60bfdf55deb36062b1df606edf64e39cd2e0de99a3a2242626"),n(m,"Solarized Darcula","25292af24840629655b688002075c7797fd415968dd2d8d965696af24840629655b688002075c7797fd415968dd2d8d9d2d8d93d3f41"),n(m,"Solarized Dark Higher Contrast","002831d11c246cbe6ca577062176c7c61c6f259286eae3cb006488f5163b51ef84b27e28178ec8e24d8e00b39efcf4dc9cc2c3001e27"),n(m,"Solarized Dark Patched","002831d11c24738a05a577062176c7c61c6f259286eae3cb475b62bd3613475b625368707082845956ba819090fcf4dc708284001e27"),n(m,"Solarized Osaka Night","15161ef7768e9ece6ae0af687aa2f7bb9af77dcfffa9b1d6414868f7768e9ece6ae0af687aa2f7bb9af77dcfffc0caf5c0caf51a1b26"),n(m,"Sonokai","181819fc5d7c9ed072e7c66476cce0b39df3f39660e2e2e37f8490fc5d7c9ed072e7c66476cce0b39df3f39660e2e2e3e2e2e32c2e34"),n(m,"Spacedust","6e5346e35b005cab96e3cd7b0f548be35b0006afc7f0f1ce684c31ff8a3aaecab8ffc87867a0ceff8a3a83a7b4fefff1ecf0c10a1e24"),n(m,"Spacegray","000000b04b5787b379e5c1797d8fa4a4799685a7a5b3b8c34c4c4cb04b5787b379e5c1797d8fa4a4799685a7a5ffffffb3b8c320242d"),n(m,"Spacegray Bright","080808bc5553a0b56cf6c9877baec1b98aae85c9b8d8d8d8626262bc5553a0b56cf6c9877baec1b98aae85c9b8f7f7f7f3f3f32a2e3a"),n(m,"Spacegray Eighties","15171cec5f6781a764fec2545486c0bf83c157c2c1efece7555555ff697393d493ffd2564d84d1ff55ff83e9e4ffffffbdbaae222222"),n(m,"Spacegray Eighties Dull","15171cb24a5692b477c6735a7c8fa5a5789e80cdcbb3b8c3555555ec5f6789e986fec2545486c0bf83c158c2c1ffffffc9c6bc222222"),n(m,"Spiderman","1b1d1ee60813e22928e247562c3fff2435db3256fffffef6505354ff0325ff3338fe3a351d50ff747cff6184fffffff9e3e3e31b1d1e"),n(m,"Spring","000000ff4d831f8c3b1fc95b1dd3ee8959a83e999fbfbfbf000000ff00211fc231d5b80715a9fd8959a83e999fffffff4d4d4cffffff"),n(m,"Square","050505e9897cb6377decebbea9cdeb75507bc9caecf2f2f2474747f99286c3f786fcfbccb6defbad7fa8d7d9fce2e2e2acacab1a1a1a"),n(m,"Squirrelsong Dark","372920ba4138468336d4b1394395c6855fb82f9794d3b9a2704f39df4d43659a4ce8c23f4ca4db9d70da60aca9f2d4bbb19b89372920"),n(m,"Srcery","1c1b19ef2f27519f50fbb8292c78bfe02c6d0aaeb3baa67f918175f7534198bc37fed06e68a8e4ff5c8f2be4d0fce8c3fce8c31c1b19"),n(m,"Starlight","242424f62b5a47b413e3c40124acd4f2affd13c299e6e6e6616161ff4d5135d450e9e8365dc5f8feabf224dfc4ffffffffffff242424"),n(m,"Sublette","253045ee557755ee77ffdd885588ffff77cc44eeeef5f5da405570ee665599ee77ffff7777bbffaa88ff55ffbbffffeeccced0202535"),n(m,"Subliminal","7f7f7fe15a60a9cfa4ffe2a96699ccf1a5ab5fb3b3d4d4d47f7f7fe15a60a9cfa4ffe2a96699ccf1a5ab5fb3b3d4d4d4d4d4d4282c35"),n(m,"Sugarplum","1111475ca8dc53b397249a84db7dddd0beeef9f3f9a175d444447a5cb5dc52deb501f5c7fa5dfdc6a5fdffffffb577fddb7ddd111147"),n(m,"Sundried","302b2aa7463d5877449d602a485b988646519c814fc9c9c94d4e48aa000c128c21fc6a217999f7fd8aa1fad484ffffffc9c9c91a1818"),n(m,"Sunset Drive","0a0a13ff006300f992ffe90000a4ffff57fd00ffedededff3e3e4bff948b00fcb9ffff683ea0ffff93ff38fffff8f8ffededfe0f0f1a"),n(m,"Symfonic","000000dc322f56db3aff84000084d4b729d9ccccffffffff414347dc322f56db3aff84000084d4b729d9ccccffffffffffffff000000"),n(m,"Synthwave","000000f6188f1ebb2bfdf8342186ecf85a2112c3e2ffffff7f7094f841a025c141fdf4542f9dedf9713719cde6ffffffdad9c7000000"),n(m,"Synthwave Alpha","241b30e60a7000986cadad3e6e29adb300ad00b0b1b9b1bc7f7094e60a700ae4a4f9f972aa54f9ff00f600fbfdf2f2e3f2f2e3241b30"),n(m,"Synthwave Everything","fefefef97e7272f1b8fede5d6d77b3c792eaf772e0fefefefefefef8841472f1b8fff95136f9f6e1acfff92aadfefefef0eff12a2139"),n(m,"Tango Adapted","000000ff000059d600e3be0000a2ffc17ecc00d0d6c0c5bb8f928bff00136dd900ccbe0088c9ffe9a7e100d8d9f6f6f4000000ffffff"),n(m,"Tango Half Adapted","000000ff00004cc300e2c000008ef6a96cb300bdc3babfb5797d76ff001370dc00d9c60076bfffd898d100d0d4f4f4f2000000ffffff"),n(m,"Tearout","685742cc967b97976d6c9861b5955ec9a554d7c483b5955e75644fcc967b97976d6c9861b5955ec9a554d7c483b5955ef4d2ae34392d"),n(m,"Teerb","1c1c1cd68686aed686d7af8786aed6d6aed68adbb4d0d0d04f4f4fd68686aed686e4c9af86aed6d6aed6b1e7ddefefefd0d0d0262626"),n(m,"Terafox","2f3239e85c517aa4a1fda47f5a93aaad5c7ca1cdd8ebebeb4e5157eb746b8eb2affdb29273a3b7b97490afd4deeeeeeee6eaea152528"),n(m,"Terminal Basic","00000099000000a6009999000000b2b200b200a6b2bfbfbf666666e5000000d900bfbf000000ffe500e500d8d8e5e5e5000000ffffff"),n(m,"Terminal Basic Dark","000000c653396ac44bb8b74a6444edd357db69c1cfd1d1d1909090eb5a3a77ea51efef53d09af9eb5af778f1f2edededffffff1d1e1d"),n(m,"Thayer Bright","1b1d1ef926724df840f4fd222757d68c54fe38c8b5ccccc6505354ff5995b6e354feed6c3f78ff9e6ffe23cfd5f8f8f2f8f8f81b1d1e"),n(m,"The Hulk","1b1d1e269d1b13ce3063e4572525f5712c81378ca9d9d8d15053548dff2a48ff773afe16506b9572589d4085a6e5e6e1b5b5b51b1d1e"),n(m,"Tinacious Design Dark","1d1d26ff339900d364ffcc6600cbffcc66ff00cecacbcbf0636667ff2f9200d364ffd47900cbffd783ff00d5d4d5d6f3cbcbf01d1d26"),n(m,"Tinacious Design Light","1d1d26ff339900d364e5b24d00cbffcc66ff00cecab1b1d6636667ff2f9200d364d9ae5300cbffd783ff00c8c7d5d6f31d1d26f8f8ff"),n(m,"TokyoNight","15161ef7768e9ece6ae0af687aa2f7bb9af77dcfffa9b1d6414868f7768e9ece6ae0af687aa2f7bb9af77dcfffc0caf5c0caf51a1b26"),n(m,"TokyoNight Day","e9e9edf52a655875398c6c3e2e7de99854f10071976172b0a1a6c5f52a655875398c6c3e2e7de99854f10071973760bf3760bfe1e2e7"),n(m,"TokyoNight Moon","1b1d2bff757fc3e88dffc77782aaffc099ff86e1fc828bb8444a73ff757fc3e88dffc77782aaffc099ff86e1fcc8d3f5c8d3f5222436"),n(m,"TokyoNight Night","15161ef7768e9ece6ae0af687aa2f7bb9af77dcfffa9b1d6414868f7768e9ece6ae0af687aa2f7bb9af77dcfffc0caf5c0caf51a1b26"),n(m,"TokyoNight Storm","1d202ff7768e9ece6ae0af687aa2f7bb9af77dcfffa9b1d64e5575f7768e9ece6ae0af687aa2f7bb9af77dcfffc0caf5c0caf524283b"),n(m,"Tomorrow","000000c82829718c00eab7004271ae8959a83e999fbfbfbf000000c82829718c00eab7004271ae8959a83e999fffffff4d4d4cffffff"),n(m,"Tomorrow Night","000000cc6666b5bd68f0c67481a2beb294bb8abeb7ffffff4c4c4ccc6666b5bd68f0c67481a2beb294bb8abeb7ffffffc5c8c61d1f21"),n(m,"Tomorrow Night Blue","000000ff9da4d1f1a9ffeeadbbdaffebbbff99ffffffffff4c4c4cff9da4d1f1a9ffeeadbbdaffebbbff99ffffffffffffffff002451"),n(m,"Tomorrow Night Bright","000000d54e53b9ca4ae7c5477aa6dac397d870c0b1ffffff404040d54e53b9ca4ae7c5477aa6dac397d870c0b1ffffffeaeaea000000"),n(m,"Tomorrow Night Burns","252525832e31a63c40d3494efc595fdf9395ba8586f5f5f55d6f71832e31a63c40d2494efc595fdf9395ba8586f5f5f5a1b0b8151515"),n(m,"Tomorrow Night Eighties","000000f2777a99cc99ffcc666699cccc99cc66ccccffffff595959f2777a99cc99ffcc666699cccc99cc66ccccffffffcccccc2d2d2d"),n(m,"Toy Chest","2c3f58be2d261a9172db8e27325d968a5edc35a08f23d183336889dd594431d07be7d84b34a6daae6bdc42c3aed5d5d531d07b24364b"),n(m,"Treehouse","321300b2270e44a900aa820c58859a97363db25a1e786b53504333ed5d2055f238f2b73285cfede14c5af07d14ffc800786b53191919"),n(m,"Twilight","141414c06d44afb97ac2a86c44474ab4be7c778385ffffd4404040de7c4cccd88ce2c47e5a5e62d0dc8e8a989bffffd4ffffd4141414"),n(m,"Ubuntu","2e3436cc00004e9a06c4a0003465a475507b06989ad3d7cf555753ef29298ae234fce94f729fcfad7fa834e2e2eeeeeceeeeec300a24"),n(m,"Ultra Dark","000000f07178c3e88dffcb6b82aaffc792ea89ddffcccccc404040f6a9aedbf1baffdfa6b4ccffddbdf2b8eaffffffffffffff000000"),n(m,"Ultra Violent","242728ff0090b6ff00fff72747e0fbd731ff0effbbe1e1e1636667fb58b4deff8cebe0877fecffe681ff69fcd3f9f9f5c1c1c1242728"),n(m,"Under The Sea","022026b2302d00a94159819c459a8600599d5d7e19405555384451ff42422aea5e8ed4fd61d5ba1298ff98d02858fbd6ffffff011116"),n(m,"Unikitty","0c0c0ca80f20c7ff98fff964145fcdffe9ff9effeffcf1fb434343d91329d3ffafffef500075eaffefff93ffeffff3fe0b0b0bff8cd9"),n(m,"Urple","000000b0425b37a415ad5c42564d9b6c3ca180808087799c6a3f32ff638829e620f08161867aeda05eeeeaeaeabfa3ff877a9b1b1b23"),n(m,"Vague","252530d8647e7fa563f3be7c6e94b2bb9dbdaeaed1cdcdcd606079e0839899b782f5cb968ba9c1c9b1cabebedad7d7d7cdcdcd141415"),n(m,"Vaughn","25234f70505060b48adfaf8f5555fff08cc38cd0d3709080709080dca3a360b48af0dfaf5555ffec93d393e0e3ffffffdcdccc25234f"),n(m,"Vercel","000000fc003629a948ffae00006afff3288200ac96feffffa8a8a8ff80804be15dffae0049aefff97ea800e4c4fefefefafafa101010"),n(m,"Vesper","101010f5a19190b99fe6b99daca1cfe29ecaea83a5a0a0a07e7e7eff808099ffe4ffc799b9aedaecaad6f591b2ffffffffffff101010"),n(m,"Vibrant Ink","878787ff6600ccff04ffcc0044b4cc9933cc44b4ccf5f5f5555555ff000000ff00ffff000000ffff00ff00ffffe5e5e5ffffff000000"),n(m,"Vimbones","f0f0caa8334c4f6c3194492728648688507d3b8992353535acac8994253e3f5a22803d1c1d55737b3b702b747c5c5c5c353535f0f0ca"),n(m,"Violet Dark","56595cc94c2285981cb4881d2e8bced13a8232a198c9c6bd45484bbd3613738a04a577052176c7c61c6f259286c9c6bd7082841c1d1f"),n(m,"Violet Light","56595cc94c2285981cb4881d2e8bced13a8232a198b9b6af45484bbd3613738a04a577052176c7c61c6f259286c9c6bd536870fcf4dc"),n(m,"Violite","241c36ec797979ecb3ece279a979ecec79ec79ececeef4f656447aef8f8f9fefbfefe78fb78fefef8fcf9fefeff8fafceef4f6241c36"),n(m,"Warm Neon","000000e2434639b13adae1454261c5f920fb2abbd4d0b8a3fefcfce970719cc090ddda7a7b91d6f674ba5ed1e5d8c8bbafdab6404040"),n(m,"Wez","000000cc555555cc55cdcd555555cccc55cc7acacacccccc555555ff555555ff55ffff555555ffff55ff55ffffffffffb3b3b3000000"),n(m,"Whimsy","535178ef64875eca89fdd87765aef7aa7ff043c1beffffff535178ef64875eca89fdd87765aef7aa7ff043c1beffffffb3b0d629283b"),n(m,"Wild Cherry","000507d940852ab250ffd16f883cdcecececc1b8b7fff8de009cc9da6bacf4dca5eac066308cbaae636bff919de4838ddafaff1f1726"),n(m,"Wilmersdorf","34373ee063837ebebdcccccca6c1e0e1c1ee5b94abababab50545dfa71938fd7d6d1dfffb2cff0efccfd69abc5d3d3d3c6c6c6282b33"),n(m,"Wombat","000000ff615ab1e969ebd99c5da9f6e86aff82fff7dedacf4a4a4af58c80ddf88feee5b2a5c7ffddaaffb7fff9ffffffdedacf171717"),n(m,"Wryan","3333338c46652873737c7c993955735e468c31658c899ca13d3d3dbf4d8053a6a69e9ecb477ab37e62b36096bfc0c0c0999993101010"),n(m,"Xcode Dark","414453ff817078c2b3d9c97c4eb0ccff7ab2b281ebdfdfe07f8c98ff8170acf2e4ffa14f6bdfffff7ab2dabaffdfdfe0dfdfe0292a30"),n(m,"Xcode Dark hc","43454bff8a7a83c9bcd9c6684ec4e6ff85b8cda1ffffffff838991ff8a7ab1faebffa14f6bdfffff85b8e5cfffffffffffffff1f1f24"),n(m,"Xcode Light","b4d8fdd12f1b3e808778492a0f68a0ad3da4804fb82626268a99a6d12f1b23575c78492a0b4f79ad3da44b21b0262626262626ffffff"),n(m,"Xcode Light hc","b4d8fdad1805355d6178492a0058a19c2191703daa0000008a99a6ad180517414578492a003f739c2191441ea1000000000000ffffff"),n(m,"Xcode WWDC","494d5cbb383a94c66ed28e5d8884c5b7399900aba4e7e8eb7f869ebb383a94c66ed28e5d8884c5b7399900aba4e7e8ebe7e8eb292c36"),n(m,"Zenbones","f0edeca8334c4f6c3194492728648688507d3b89922c363cb5a7a094253e3f5a22803d1c1d55737b3b702b747c4f5e682c363cf0edec"),n(m,"Zenbones Dark","1c1917de6e7c819b69b77e646099c0b279a766a5adb4bdc34d4540e8838f8bae68d68c6761abdacf86c165b8c1888f94b4bdc31c1917"),n(m,"Zenbones Light","f0edeca8334c4f6c3194492728648688507d3b89922c363cb5a7a094253e3f5a22803d1c1d55737b3b702b747c4f5e682c363cf0edec"),n(m,"Zenburn","4d4d4d7d5d5d60b48af0dfaf5d6d7ddc8cc38cd0d3dcdccc709080dca3a3c3bf9fe0cf9f94bff3ec93d393e0e3ffffffdcdccc3f3f3f"),n(m,"Zenburned","404040e3716e819b69b77e646099c0b279a766a5adf0e4cf6f6768ec86858bae68d68c6761abdacf86c165b8c1c0ab86f0e4cf404040"),n(m,"Zenwritten Dark","191919de6e7c819b69b77e646099c0b279a766a5adbbbbbb4a4546e8838f8bae68d68c6761abdacf86c165b8c18e8e8ebbbbbb191919"),n(m,"Zenwritten Light","eeeeeea8334c4f6c3194492728648688507d3b8992353535aca9a994253e3f5a22803d1c1d55737b3b702b747c5c5c5c353535eeeeee"),n(m,"branch","35241cc2562d96a65ed29b5a3b8e8cc47e5b639a90cfc1a9564a45c2562d96a65ed29b5a3b8e8cc47e5b639a90cfc1a9cfc1a932221a"),n(m,"iTerm2 Dark Background","000000c91b0000c200c7c4000225c7ca30c700c5c7c7c7c7686868ff6e675ffa68fffc676871ffff77ff60fdffffffffc7c7c7000000"),n(m,"iTerm2 Default","000000c91b0000c200c7c4002225c4ca30c700c5c7ffffff686868ff6e675ffa68fffc676871ffff77ff60fdffffffffffffff000000"),n(m,"iTerm2 Light Background","000000c91b0000c200c7c4000225c7ca30c700c5c7bababa686868ff6e6739d442ccc9346871ffff77ff3ad7d9ffffff000000ffffff"),n(m,"iTerm2 Pastel Dark Background","626262ff8373b4fb73fffdc3a5d5feff90fed1d1fef1f1f18f8f8fffc4bed6fcbafffed5c2e3ffffb2fee6e6feffffffc7c7c7000000"),n(m,"iTerm2 Smoooooth","14191eb43c2a00c200c7c4002744c7c040be00c5c7c7c7c7686868dd797558e790ece100a7abf2e17ee160fdffffffffdcdcdc15191f"),n(m,"iTerm2 Solarized Dark","073642dc322f859900b58900268bd2d336822aa198eee8d5335e69cb4b16586e75657b838394966c71c493a1a1fdf6e3839496002b36"),n(m,"iTerm2 Solarized Light","073642dc322f859900b58900268bd2d336822aa198bbb5a2002b36cb4b16586e75657b838394966c71c493a1a1fdf6e3657b83fdf6e3"),n(m,"iTerm2 Tango Dark","000000d81e005ea702cfae00427ab389658e00a7aadbded8686a66f5423599e343fdeb6184b0d8bc94b737e6e8f1f1f0ffffff000000"),n(m,"iTerm2 Tango Light","000000d81e005ea702cfae00427ab389658e00a7aac1c4be686a66f542358cd636d7c53b84b0d8bc94b71ecccef1f1f0000000ffffff"),n(m,"novmbr","282a2e9f64349dac5fcca75f2f7d7cb5896e52877fc7b8ac5d4e479f64349dac5fcca75f2f7d7cb5896e52877fc7b8acc7b8ac241d1a"),n(m,"owl","302c2c5a5a5a989898cacaca656565b1b1b17f7f7fdedede5d595bda5b2c989898cacaca656565b1b1b17f7f7fffffffdedede2f2b2c"),n(m,"traffic","282d31934e46637268c79e84515e67715f5e5c6f7dcfb9a84e575e934e46637270c79e84515e67715f5e5c6f7dddcec2cfb9a8272c30"),n(m,"urban","33303b87404f74934eae835a615772854b64625464c0a79a5c586587404f74934eae835a615772854b64625464c0a79ac0a79a312e39"),oP,cP,n(m,"Logoyo Dark","1c1466ee3b2c22a84af5a6234f8ad6c44cd92bb6b6f2f0ff6a63a0ff6b5e6cc04affc83d6ba8f0b57bf058d6c8fffffff2f0ff2a1e80"),n(m,"Logoyo Light","1c1452ee3b2c22a84af5a6234f8ad6c44cd92bb6b6f4f2ff8983b5ff6b5e6cc04affc83d6ba8f0b57bf058d6c8ffffff29216bc5c1fc"),iP,dP,vP,uP,sP]),gn=function(e){return s(me,l(function(r,a){var t=r.a,o=r.b;return s($r,t,o,a)}),He,e)},bP=gn(n(G,function(e){return p(e.sV,e)},r3)),pP=function(e){return n(Xe,e,bP)},dZ=Ty,a3=S(function(e,r,a){return e<=0?a:s(a3,e>>1,X(r,r),e&1?X(a,r):a)}),Wo=l(function(e,r){return s(a3,e,r,"")}),n3=(function(){var e=r3;if(e.b){var r=e.a,a=e.b;return p(r,a)}else return p(n(m,"Fallback",n(Wo,108,"0")),P)})(),ce=l(function(e,r){if(r.$)return e;var a=r.a;return a}),Tv=function(e){return n(ce,n3.a,pP(e))},Lv=(function(){var e=5;return{hd:e,c9:n($u,e,Tv("Argonaut")),dj:n($u,e,Tv("Erkal Light")),dQ:!1}})(),mP={hQ:!1,f9:!1,dI:!1,ga:!1,gb:!1,dJ:!1,eO:!1,hR:!1,co:!1,hS:!1,hU:kv,bP:!1,e:Lv},hP=function(e){switch(e){case"true":return D(!0);case"false":return D(!1);default:return w}},gP=function(e){return{$:1,a:e}},yP={$:0},je=S(function(e,r,a){return r(e(a))}),_P=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,a=r;e=a;continue e}else return e},t3=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,a=e.b,t=e.c,o=e.d,c=o.a,i=o.b,u=o.c,$=o.d,v=o.e,d=e.e,b=d.a,h=d.b,g=d.c,y=d.d,_=y.a,x=y.b,T=y.c,L=y.d,B=y.e,R=d.e;return E(Ee,0,x,T,E(Ee,1,a,t,E(Ee,0,i,u,$,v),L),E(Ee,1,h,g,B,R))}else{var r=e.a,a=e.b,t=e.c,V=e.d,c=V.a,i=V.b,u=V.c,$=V.d,v=V.e,W=e.e,b=W.a,h=W.b,g=W.c,y=W.d,R=W.e;return E(Ee,1,a,t,E(Ee,0,i,u,$,v),E(Ee,0,h,g,y,R))}else return e},o3=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,a=e.b,t=e.c,o=e.d,c=o.a,i=o.b,u=o.c,$=o.d,v=$.a,d=$.b,b=$.c,h=$.d,g=$.e,y=o.e,_=e.e,x=_.a,T=_.b,L=_.c,B=_.d,R=_.e;return E(Ee,0,i,u,E(Ee,1,d,b,h,g),E(Ee,1,a,t,y,E(Ee,0,T,L,B,R)))}else{var r=e.a,a=e.b,t=e.c,V=e.d,c=V.a,i=V.b,u=V.c,W=V.d,y=V.e,Y=e.e,x=Y.a,T=Y.b,L=Y.c,B=Y.d,R=Y.e;return E(Ee,1,a,t,E(Ee,0,i,u,W,y),E(Ee,0,T,L,B,R))}else return e},CP=ro(function(e,r,a,t,o,c,i){if(c.$===-1&&!c.a){var u=c.a,$=c.b,v=c.c,d=c.d,b=c.e;return E(Ee,a,$,v,d,E(Ee,0,t,o,b,i))}else{e:for(;;)if(i.$===-1&&i.a===1)if(i.d.$===-1)if(i.d.a===1){var h=i.a,g=i.d,y=g.a;return o3(r)}else break e;else{var _=i.a,x=i.d;return o3(r)}else break e;return r}}),l$=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,a=e.b,t=e.c,o=e.d,c=o.a,i=o.d,u=e.e;if(c===1)if(i.$===-1&&!i.a){var $=i.a;return E(Ee,r,a,t,l$(o),u)}else{var v=t3(e);if(v.$===-1){var d=v.a,b=v.b,h=v.c,g=v.d,y=v.e;return E(Ic,d,b,h,l$(g),y)}else return ut}else return E(Ee,r,a,t,l$(o),u)}else return ut},lu=l(function(e,r){if(r.$===-2)return ut;var a=r.a,t=r.b,o=r.c,c=r.d,i=r.e;if(Q(e,t)<0)if(c.$===-1&&c.a===1){var u=c.a,$=c.d;if($.$===-1&&!$.a){var v=$.a;return E(Ee,a,t,o,n(lu,e,c),i)}else{var d=t3(r);if(d.$===-1){var b=d.a,h=d.b,g=d.c,y=d.d,_=d.e;return E(Ic,b,h,g,n(lu,e,y),_)}else return ut}}else return E(Ee,a,t,o,n(lu,e,c),i);else return n(PP,e,ua(CP,e,r,a,t,o,c,i))}),PP=l(function(e,r){if(r.$===-1){var a=r.a,t=r.b,o=r.c,c=r.d,i=r.e;if(re(e,t)){var u=_P(i);if(u.$===-1){var $=u.b,v=u.c;return E(Ic,a,$,v,c,l$(i))}else return ut}else return E(Ic,a,t,o,c,n(lu,e,i))}else return ut}),vu=l(function(e,r){var a=n(lu,e,r);if(a.$===-1&&!a.a){var t=a.a,o=a.b,c=a.c,i=a.d,u=a.e;return E(Ee,1,o,c,i,u)}else{var $=a;return $}}),Bt=S(function(e,r,a){var t=r(n(Xe,e,a));if(t.$)return n(vu,e,a);var o=t.a;return s($r,e,o,a)}),SP=function(e){return n(Bt,e,n(je,ce(0),n(je,$C(1),D)))},xP=l(function(e,r){return s(ft,S(function(a,t,o){return n(e,a,t)?s($r,a,t,o):o}),He,r)}),jP=function(e){if(e.b){var r=Yf(n(xP,l(function(a,t){return t>1}),s(me,l(function(a,t){return n(SP,a.bI,t)}),He,e)));return r.b?D(gP(r)):w}else return D(yP)},kP=function(e){return e?"true":"false"},Mv=l(function(e,r){return r.b?s(dn,A,r,e):e}),Fn=function(e){return s(dn,Mv,P,e)},Vn=l(function(e,r){return Fn(n(G,e,r))}),qo=4294967295>>>32-Hn,bZ=Q7,su=E7,wP=S(function(e,r,a){e:for(;;){var t=qo&r>>>e,o=n(su,t,a);if(o.$){var v=o.a;return n(su,qo&r,v)}else{var c=o.a,i=e-Hn,u=r,$=c;e=i,r=u,a=$;continue e}}}),c3=function(e){return e>>>5<<5},Ur=l(function(e,r){var a=r.a,t=r.b,o=r.c,c=r.d;return e<0||Q(e,a)>-1?w:Q(e,c3(a))>-1?D(n(su,qo&e,c)):D(s(wP,t,e,o))}),i3=function(e){var r=e;return n(ce,r.oV,n(Ur,n(Kr,r.cN,r.ds+r.aU),r.eN))},Go=function(e){if(e.$){var a=e.a;return n(ce,a.oV,n(Ur,a.aU,a.eN))}else{var r=e.a;return i3(r)}},v$=function(e){var r=e.b;return r},qc=function(e){var r=e.b;return Go(r).b},Gc=function(e){return e.n$},Rn=function(e){return e.e},TP=function(e){return e.U},N=zb,u3=function(e){var r=e;return n(G,function(a){var t=a.a,o=a.b;return p(r.r2(t)+"Off",N(o.pH)+(","+N(o.pJ)))},r.c_)},LP=function(e){return u3(e.f)},MP=function(e){return e?"landscape":"portrait"},zP=function(e){var r=e;return r.cQ.sV+("|"+MP(r.dX))},yn=l(function(e,r){return s(me,wg(e),xg(0),r)}),f3=function(e){return n(vv,0,n(yn,function(r){var a=r.a,t=r.b;return n(yn,Hr,f([a,t]))},e))},s$=function(e){return"play:"+e},$3=function(e){switch(e){case 0:return"hudConfigurations";case 1:return"hudInputs";case 2:return"hudFpsMeter";case 3:return"hudProfiler";case 4:return"hudTape";case 5:return"hudPalette";case 6:return"hudCommandPalette";default:return"hudDevice"}},zv=function(e){var r=e;return r.aN},pZ=0,mZ=7,hZ=2,gZ=1,yZ=5,Ar=l(function(e,r){return s(dn,l(function(a,t){return e(a)?n(A,a,t):t}),P,r)}),d$=l(function(e,r){e:for(;;)if(r.b){var a=r.a,t=r.b;if(e(a))return!0;var o=e,c=t;e=o,r=c;continue e}else return!1}),No=l(function(e,r){return n(d$,function(a){return re(a,e)},r)}),l3=function(e){return n(Ar,function(r){return n(No,r,e)},f([0,1,2,5,7]))},DP=function(e){return n(Or,",",n(G,$3,l3(zv(e.f))))},$t=l(function(e,r){return"play:"+(r+(":"+e))}),HP=function(e){return e.bP},v3=function(e){var r=e;return r.hd},AP=function(e){var r=e;return r.c9.kx.sV},du=function(e){var r=e;return r.dQ},BP=function(e){var r=e;return r.dj.kx.sV},s3=function(e){switch(e){case 0:return"Red";case 1:return"Green";case 2:return"Yellow";case 3:return"Blue";case 4:return"Magenta";default:return"Cyan"}},IP=function(e){return n(Or,"|",f([AP(e),BP(e),du(e)?"1":"0",s3(v3(e))]))},d3=function(e){switch(e){case 0:return"User";case 1:return"Author";default:return"Developer"}},b3=l(function(e,r){var a=qc(r.uE),t=n(Vn,function(o){var c=n(Xe,o.bI,a.cY);if(c.$)return P;var i=c.a;return u3(i.im)},e.cY);return f([p(s$("hud-panel-layout"),f3(LP(r.bH))),p(n($t,r.tn,"panel-layout"),f3(t)),p(s$("mode"),d3(Gc(r.bH))),p(n($t,r.tn,"theme"),IP(Rn(r.bH))),p(n($t,r.tn,"device"),zP(TP(r.bH))),p(n($t,r.tn,"hud-open-panels"),DP(r.bH)),p(n($t,r.tn,"tape-record-from-start"),kP(HP(r.bH)))])}),_Z=ne,CZ=1,PZ=0,SZ=2,Dv=f([{aF:0,sV:"iPhone SE",gI:{rW:667,va:375}},{aF:0,sV:"iPhone 12 Pro",gI:{rW:844,va:390}},{aF:0,sV:"iPhone 14 Pro Max",gI:{rW:932,va:430}},{aF:0,sV:"Pixel 7",gI:{rW:915,va:412}},{aF:0,sV:"Samsung Galaxy S20 Ultra",gI:{rW:915,va:412}},{aF:0,sV:"Samsung Galaxy S8+",gI:{rW:740,va:360}},{aF:1,sV:"Galaxy Z Fold 5",gI:{rW:882,va:344}},{aF:1,sV:"Surface Duo",gI:{rW:720,va:540}},{aF:2,sV:"iPad Mini",gI:{rW:1024,va:768}},{aF:2,sV:"iPad Air",gI:{rW:1180,va:820}},{aF:2,sV:"iPad Pro",gI:{rW:1366,va:1024}},{aF:2,sV:"Surface Pro 7",gI:{rW:1368,va:912}}]),jr=function(e){if(e.b){var r=e.a,a=e.b;return D(r)}else return w},EP=function(e){return jr(n(Ar,function(r){return re(r.sV,e)},Dv))},xZ=ne,jZ=ne,p3=14,FP=8,VP=function(e){return e===" "||e==="	"||e==="/"||e==="."||e===":"||e===";"||e===","||e==="|"||e==="\\"||e==="_"||e==="-"||e==="*"},RP=function(e){var r=ct(e);return r>=97&&r<=122},OP=function(e){var r=ct(e);return r>=65&&r<=90},JP=S(function(e,r,a){e:for(;;)if(r.b){var t=r.a,o=r.b,c=VP(e)?p3:RP(e)&&OP(t)?FP:0,i=t,u=o,$=n(A,c,a);e=i,r=u,a=$;continue e}else return Ve(a)}),UP=function(e){if(e.b){var r=e.a,a=e.b;return n(A,p3,s(JP,r,a,P))}else return P},Hv=eg,WP=function(e){var r=Wc(e),a=n(G,Hv,r);return{lR:UP(r),j4:a}},b$=l(function(e,r){return{aV:r,eT:w,dM:!1,iq:n(G,function(a){return p(a,WP(e(a)))},r),b5:0,iE:"",az:0}}),Av=S(function(e,r,a){if(r.$===1)return w;var t=r.a;if(a.$===1)return w;var o=a.a;return D(n(e,t,o))}),kZ=1,wZ=0,qP=function(e){switch(e){case"portrait":return D(0);case"landscape":return D(1);default:return w}},GP=S(function(e,r,a){e:for(;;)if(a.b){var t=a.a,o=a.b;if(r(t))return D(e);var c=e+1,i=r,u=o;e=c,r=i,a=u;continue e}else return w}),p$=GP(0),m$=function(e){return p$(vn(e))},bu=l(function(e,r){var a=r;return M(a,{eT:e,az:n(ce,a.az,n(ea,function(t){return n(m$,t,a.aV)},e))})}),NP=function(e){var r=n(Dn,"|",e);if(r.b&&r.b.b){var a=r.a,t=r.b,o=t.a;return s(Av,l(function(c,i){return{cQ:c,dX:i,bm:n(bu,D(c),n(b$,function(u){return u.sV},Dv))}}),EP(a),qP(o))}else return w},Bv=Cg,Br=vg,pr=ug,It=l(function(e,r){return p(e,r)}),ke=ig,m3=function(e){return n(e3,P,n(Bv,pr(s(Ha,It,n(Br,0,ke),n(Br,1,ke))),e))},TZ=ne,h$=He,h3=l(function(e,r){var a=r;return s($r,e,0,a)}),pu=l(function(e,r){var a=n(Xe,e,r);return!a.$}),g3=l(function(e,r){var a=r;return n(pu,e,a)}),ZP=function(e){return Ve(s(me,l(function(r,a){var t=a.a,o=a.b;return n(g3,r,t)?p(t,o):p(n(h3,r,t),n(A,r,o))}),p(h$,P),e).b)},YP=function(e){return{$:0,a:e}},XP=3600,QP=YP(XP),LZ=1,MZ=2,KP=function(e){switch(e){case"User":return D(0);case"Author":return D(1);case"Developer":return D(2);default:return w}},Iv=function(e){return{$:4,a:e}},y3=function(e){return{$:3,a:e}},Ev=l(function(e,r){return{$:0,a:e,b:r}}),_3=l(function(e,r){return{$:2,a:e,b:r}}),C3=function(e){return{$:5,a:e}},P3=function(e){return{$:1,a:e}},zZ=ne,lt=l(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){var a=r.a,t=r.b,o=e-1,c=t;e=o,r=c;continue e}else return r}}),eS=S(function(e,r,a){e:for(;;){if(e<=0)return a;if(r.b){var t=r.a,o=r.b,c=e-1,i=o,u=n(A,t,a);e=c,r=i,a=u;continue e}else return a}}),rS=l(function(e,r){return Ve(s(eS,e,r,P))}),S3=S(function(e,r,a){if(r<=0)return P;var t=p(r,a);e:for(;;){r:for(;;)if(t.b.b)if(t.b.b.b)switch(t.a){case 1:break e;case 2:var o=t.b,L=o.a,c=o.b,i=c.a;return f([L,i]);case 3:if(t.b.b.b.b){var u=t.b,L=u.a,$=u.b,i=$.a,v=$.b,d=v.a;return f([L,i,d])}else break r;default:if(t.b.b.b.b&&t.b.b.b.b.b){var b=t.b,L=b.a,h=b.b,i=h.a,g=h.b,d=g.a,y=g.b,_=y.a,x=y.b;return e>1e3?n(A,L,n(A,i,n(A,d,n(A,_,n(rS,r-4,x))))):n(A,L,n(A,i,n(A,d,n(A,_,s(S3,e+1,r-4,x)))))}else break r}else{if(t.a===1)break e;break r}else return a;return a}var T=t.b,L=T.a;return f([L])}),vt=l(function(e,r){return s(S3,0,e,r)}),Et=function(e){var r=e;return X(Ve(r.o),n(A,r.fT,r.q))},st=l(function(e,r){var a=r,t=Et(a),o=n(Kr,xr(t),e),c=n(lt,o,t);if(c.b){var i=c.a,u=c.b;return{q:u,o:Ve(n(vt,o,t)),fT:i}}else return a}),se=l(function(e,r){if(r.$)return w;var a=r.a;return D(e(a))}),lo=Yh,aS=l(function(e,r){var a=l(function(g,y){var _=g.a,x=g.b;return Q(y,_)>-1&&Q(y,x)<1});switch(e.$){case 0:var t=e.a;return n(ea,function(g){return n(a,t,g)?D(n(Ev,t,g)):w},lo(r));case 2:var t=e.a;return n(ea,function(g){return n(a,t,g)?D(n(_3,t,g)):w},Oc(r));case 4:switch(r){case"true":return D(Iv(!0));case"false":return D(Iv(!1));default:return w}case 1:return D(P3(r));case 3:var o=n(G,lo,n(Dn,",",r));if(o.b&&!o.a.$&&o.b.b&&!o.b.a.$&&o.b.b.b&&!o.b.b.a.$&&o.b.b.b.b&&!o.b.b.b.a.$&&!o.b.b.b.b.b){var c=o.a.a,i=o.b,u=i.a.a,$=i.b,v=$.a.a,d=$.b,b=d.a.a;return D(y3(C(J,c,u,v,b)))}else return w;default:var h=e.a;return n(se,function(g){return C3(n(st,g,h))},n(p$,vn(r),Et(h)))}}),x3=l(function(e,r){var a=gn(e);return n(G,function(t){return M(t,{bc:n(G,function(o){var c=o.a,i=o.b;return p(c,(function(){var u=n(Xe,c,a);if(u.$)return i;var $=u.a;return n(ce,i,n(aS,i,$))})())},t.bc)})},r)}),vo=l(function(e,r){var a=n(Ar,function(c){var i=c.a;return re(i,e)},r);if(a.b){var t=a.a,o=t.b;return D(o)}else return w}),DZ=ne,nS=S(function(e,r,a){var t=e(r);if(t.$)return a;var o=t.a;return n(A,o,a)}),kr=l(function(e,r){return s(dn,nS(e),P,r)}),j3=l(function(e,r){return e<1?r:s(bn,0,-e,r)}),k3=Gh,tS=l(function(e,r){return n(k3,"Off",r)?e(n(j3,Aa("Off"),r)):w}),oS=function(e){var r=n(Dn,",",e);if(r.b&&r.b.b&&!r.b.b.b){var a=r.a,t=r.b,o=t.a;return s(Av,l(function(c,i){return{pH:c,pJ:i}}),lo(a),lo(o))}else return w},w3=l(function(e,r){var a=r,t=n(kr,function(o){var c=o.a,i=o.b;return n(ea,function(u){return n(se,It(u),oS(i))},n(tS,a.r1,c))},e);return M(a,{c_:t})}),cS=l(function(e,r){return M(r,{f:n(w3,e,r.f)})}),HZ=6,AZ=3,BZ=4,T3=function(e){switch(e){case"hudConfigurations":return D(0);case"hudInputs":return D(1);case"hudFpsMeter":return D(2);case"hudProfiler":return D(3);case"hudTape":return D(4);case"hudPalette":return D(5);case"hudCommandPalette":return D(6);case"hudDevice":return D(7);default:return w}},iS=function(e){return{$:1,a:e}},Fv=iS,so=l(function(e,r){var a=r;switch(e.$){case 0:var t=e.a;return M(a,{aN:n(No,t,a.aN)?n(Ar,r$(t),a.aN):n(A,t,a.aN)});case 1:var t=e.a;return M(a,{aN:n(A,t,n(Ar,r$(t),a.aN))});case 2:var t=e.a;return M(a,{aN:n(Ar,r$(t),a.aN)});default:var t=e.a;return M(a,{c_:n(Ar,function(o){var c=o.a;return!re(c,t)},a.c_)})}}),uS=l(function(e,r){var a=l3(n(kr,T3,n(Dn,",",e)));return M(r,{f:s(me,n(je,Fv,so),r.f,a)})}),IZ=ne,Vv={J:He},EZ=3,FZ=4,VZ=2,RZ=1,OZ=5,JZ=0,L3=function(e){switch(e){case"windows":return 0;case"mac":return 1;case"linux":return 2;case"android":return 3;case"ios":return 4;default:return 5}},fS=l(function(e,r){return{lx:{pT:!1,rv:w},aE:Vv,dC:P,fQ:0,ch:e,eu:r.eu,ev:r.ev,ew:r.ew,hB:r.hB,mG:!0,eJ:r.eJ,rx:r.rx,gf:"play",hW:r.hW,nQ:He,n$:kv,tl:h$,kv:L3(r.kv),gw:{mc:0,md:0,bJ:0,bW:0,u5:0,pB:0},tB:r.tB,tL:r.tL,bT:r.bT,fk:r.fk,iF:r.iF,ea:r.ea,pC:!0,fB:r.fB,pL:!1}}),M3={aF:0,sV:"iPhone 12 Pro",gI:{rW:844,va:390}},$S={cQ:M3,dX:0,bm:n(bu,D(M3),n(b$,function(e){return e.sV},Dv))},lS=function(e){return e.iH+(": "+e.e$)},UZ=ne,WZ=ne,g$={bG:P,bO:P,bp:0,bq:0},vS=g$,sS={ki:0,gF:vS},z3={$:0},dS=z3,Rv=function(e){return{ey:w,r1:e.r1,r2:e.r2,c_:P,aN:P}},qZ=ne,GZ=3,NZ=1,ZZ=4,YZ=0,XZ=2,D3=p(0,f([1,2,3,4,5])),Ov=function(e){var r=e.a,a=e.b;return{q:a,o:P,fT:r}},dt=function(e){var r=e;return r.fT},H3=function(e){var r=e,a=r.q;if(a.b){var t=a.a,o=a.b;return{q:o,o:n(A,r.fT,r.o),fT:t}}else return r},A3=function(e){return n(st,0,e)},tr=function(e){return!e.b},bS=function(e){var r=e;return tr(r.q)},B3=l(function(e,r){var a=function(t){e:for(;;){if(re(dt(t),e))return D(t);if(bS(t))return w;var o=H3(t);t=o;continue e}};return a(A3(r))}),pS=function(e){var r=Ov(D3);return n(ce,r,n(B3,e,r))},Jv=n3,_n=function(e){var r=e;return r.dQ?r.dj:r.c9},Uv=function(e){var r=_n(e).kx.sV,a=Jv,t=a.a,o=a.b;return jr(n(Ar,function(c){return re(c.sV,r)},n(A,t,o)))},mS=function(e){var r=Jv,a=r.a,t=r.b;return{c4:pS(v3(e)),bm:n(bu,Uv(e),n(b$,function(o){return o.sV},n(A,a,t)))}},mu={$:0},QZ=ne,hS=mu,gS=function(e){var r=e.lx,a=e.r9,t=e.r8,o=e.hU,c=e.sa,i=e.gH;return{lx:{R:n(b$,lS,r),rv:w},en:w,U:t,f:Rv({r1:T3,r2:$3}),dg:sS,n$:o,aO:dS,bP:a,T:mS(c),e:c,c1:hS,pL:!1}},hu={$:0},Za=l(function(e,r){return{$:0,a:e,b:r}}),Nc=function(e){return{$:0,a:e}},KZ=ne,y$=l(function(e,r){return n(Qf,e,function(a){return r})}),I3=l(function(e,r){var a=n(Le,1,e);return{cN:a,mf:1,aU:0,eN:n(y$,a,r),oV:r,ds:0}}),E3=l(function(e,r){return Nc(n(I3,e,r))}),gu=function(e){return{$:1,a:e}},F3=function(e){return gu({aU:0,eN:n(y$,1,e),oV:e})},yS=l(function(e,r){if(e.$)return F3(r);var a=e.a;return n(E3,a,r)}),_S=S(function(e,r,a){return n(Za,hu,n(yS,e,p(r,a)))}),CS=l(function(e,r){return n(Za,hu,n(E3,1,p(e,r)))}),Zo=l(function(e,r){return{$:1,a:e,b:r}}),PS=S(function(e,r,a){var t=a.a,o=a.b;return p(e(t),r(o))}),SS=function(e){var r=l(function(a,t){var o=a.a,c=a.b,i=t.a,u=t.b;return p(n(A,o,i),n(A,c,u))});return s(dn,r,p(P,P),e)},V3=function(e){switch(e.$){case 0:return p(P,fe);case 1:var r=e.a;return s(PS,Fn,Pa,SS(n(G,V3,r)));case 2:var a=e.a;return p(P,a);default:var t=e.a;return p(f([t]),fe)}},xS=l(function(e,r){return M(r,{bc:e(r.bc)})}),Yo=l(function(e,r){var a=r.a,t=r.b;return p(a,e(t))}),ze=function(e){return e<0?-e:e},jS=S(function(e,r,a){return n(ce,NaN,lo(n(e,r,a)))}),Wv=wh,kS=l(function(e,r){var a=n(d$,function(t){return t!=="0"&&t!=="."},Wc(r));return X(e&&a?"-":"",r)}),wS=Kh,R3=function(e){var r=e.a,a=e.b;if(r==="9"){var t=tu(a);if(t.$===1)return"01";var o=t.a;return n(e$,"0",R3(o))}else{var c=ct(r);return c>=48&&c<57?n(e$,wS(c+1),a):"0"}},Zc=Ch,qv=kh,_$=S(function(e,r,a){return X(a,n(Wo,e-Aa(a),Uc(r)))}),O3=Ah,J3=function(e){var r=n(Dn,".",e);if(r.b)if(r.b.b){var a=r.a,t=r.b,o=t.a;return p(a,o)}else{var a=r.a;return p(a,"0")}else return p("0","0")},Xo=l(function(e,r){var a=r.a,t=r.b;return p(e(a),t)}),TS=function(e){var r=n(Dn,"e",N(ze(e)));if(r.b)if(r.b.b){var a=r.a,t=r.b,o=t.a,c=n(ce,0,Oc(n(pn,"+",o)?n(Ba,1,o):o)),i=J3(a),u=i.a,$=i.b,v=X(u,$),d=c<0?n(ce,"0",n(se,function(b){var h=b.a,g=b.b;return h+("."+g)},n(se,Xo(Uc),tu(X(n(Wo,ze(c),"0"),v))))):s(_$,c+1,"0",v);return X(e<0?"-":"",d)}else{var a=r.a;return X(e<0?"-":"",a)}else return""},LS=S(function(e,r,a){if(Zc(a)||qv(a))return N(a);var t=a<0,o=J3(TS(ze(a))),c=o.a,i=o.b,u=Aa(c)+r,$=X(n(Wo,-u+1,"0"),s(_$,u,"0",X(c,i))),v=Aa($),d=n(Le,1,u),b=n(e,t,s(bn,d,v,$)),h=s(bn,0,d,$),g=b?O3(n(ce,"1",n(se,R3,tu(O3(h))))):h,y=Aa(g),_=g==="0"?g:r<=0?X(g,n(Wo,ze(r),"0")):Q(r,Aa(i))<0?s(bn,0,y-r,g)+("."+s(bn,y-r,y,g)):X(c+".",s(_$,r,"0",i));return n(kS,t,_)}),Yc=LS(l(function(e,r){var a=tu(r);if(a.$===1)return!1;if(a.a.a==="5")if(a.a.b===""){var t=a.a;return!e}else{var o=a.a;return!0}else{var c=a.a,i=c.a;return(function(u){return u>53&&e||u>=53&&!e})(ct(i))}})),MS=jS(Yc),zS=S(function(e,r,a){var t=n(Xf,10,ze(r-e)),o=t<0?3:t<1?2:t<2?1:0;return n(MS,o,a)}),Xc=S(function(e,r,a){return n(G,function(t){return e(t)?r(t):t},a)}),DS=function(e){switch(e.$){case 2:var a=e.a,r=e.b;return n(Xc,n(je,An,vn(a)),Yo(function(o){if(o.$===2){var c=o.a,i=c.a,u=c.b;return n(_3,p(i,u),s(er,i,u,r))}else return o}));case 1:var a=e.a,r=e.b;return n(Xc,n(je,An,vn(a)),Yo(function(o){return o.$===1?P3(r):o}));case 0:var a=e.a,r=e.b;return n(Xc,n(je,An,vn(a)),Yo(function(o){if(o.$)return o;var c=o.a,i=c.a,u=c.b;return n(Ev,p(i,u),s(zS,i,u,s(er,i,u,r)))}));case 3:var a=e.a,r=e.b;return n(Xc,n(je,An,vn(a)),Yo(function(o){return o.$===3?y3(r):o}));case 4:var a=e.a,r=e.b;return n(Xc,n(je,An,vn(a)),Yo(function(o){return o.$===4?Iv(r):o}));default:var a=e.a,t=e.b;return n(Xc,n(je,An,vn(a)),Yo(function(o){if(o.$===5){var c=o.a;return C3(n(ce,c,n(se,function(i){return n(st,i,c)},n(p$,vn(t),Et(c)))))}else return o}))}},HS=function(e){return xS(DS(e))},U3=l(function(e,r){return n(G,HS(e),r)}),Gv=S(function(e,r,a){var t=V3(r),o=t.a,c=t.b,i=function(u){return s(me,U3,u,o)};return{hn:c,cX:e?i(a.cX):a.cX,jS:i(a.jS)}}),Wr=l(function(e,r){var a=r;return n(No,e,a.aN)}),AS=function(e){return n(Wr,5,e.f)||n(Wr,6,e.f)||n(Wr,7,e.f)},W3=l(function(e,r){return r.va>0&&r.rW>0?r:{rW:e.rW,bJ:0,tr:r.tr,bW:0,va:e.va}}),BS={q2:!1,jz:!1,hC:0,hD:0,rg:P,sg:!1,sS:!1,tZ:!1,t$:!1,lp:!1,pH:0,pJ:0},IS=function(e){var r=e.pd;if(r.$===1)return BS;var a=r.a,t=a.bW+.5*a.rW-.5*e.vb.rW,o=.5*e.vb.va-a.bJ-.5*a.va,c=e.ad.sg?e.cF.c8:e.cF.hT,i=re(c,D(e.gf)),u=re(e.cF.c8,D(e.gf));return{q2:u&&e.ad.q2,jz:u&&e.ad.jz,hC:i?e.ad.hC:0,hD:i?e.ad.hD:0,rg:u?e.ad.rg:P,sg:u&&e.ad.sg,sS:i&&e.ad.sS,tZ:u&&e.ad.tZ,t$:u&&e.ad.t$,lp:u&&e.ad.lp,pH:e.ad.pH+o,pJ:e.ad.pJ+t}},ES={i2:!1,jr:!1,jz:!1,q6:P,bJ:!1,j9:!1,tH:P,bQ:!1,kY:!1,lp:!1},FS={mk:0,ml:0,ms:P,kI:0,io:w},yu=function(e){var r=jr(n(Ar,function($){return re($.tr,e.bI)},e.g.tq)),a=re(e.aJ,D(e.bI)),t=a?e.g.hW:ES,o=a?e.g.fB:FS,c=n(se,W3(e.g.bT),r),i=(function(){if(c.$)return e.g.bT;var $=c.a;return{rW:$.rW,va:$.va}})(),u=IS({gf:e.bI,cF:e.cF,pd:c,ad:e.g.tB,vb:e.g.bT});return{lx:(function(){var $=e.bH;if($.$===1)return{pT:!1,rv:w};var v=$.a;return{pT:AS(v),rv:v.lx.rv}})(),aE:e.aP,dC:e.g.dC,fQ:e.fQ,ch:e.ch,eu:e.g.eu,ev:e.g.ev,ew:e.g.ew,hB:e.g.hB,mG:a,eJ:e.g.eJ,rx:e.g.rx,gf:e.bI,hW:t,nQ:e.nQ,n$:e.n$,tl:e.tl,kv:L3(e.g.kv),gw:e.g.gw,tB:u,tL:e.g.tL,bT:i,fk:e.g.fk,iF:e.g.iF,ea:e.g.ea,pC:e.pC,fB:o,pL:e.pL}},VS={c8:w,hT:w},RS=l(function(e,r){if(e.$)return Rv(r);var a=e.a;return n(w3,a,Rv(r))}),OS=function(e){return function(r){return function(a){return function(t){return function(o){return function(c){return function(i){return function(u){return function($){return function(v){var d=n(Xe,$,e);if(d.$)return v;var b=d.a,h=n(x3,a,b.aK),g=yu({fQ:0,ch:h,aJ:i,bH:w,bI:b.bI,g:t,nQ:He,n$:c,tl:h$,aP:Vv,cF:VS,pC:!1,pL:!1}),y=s(b.b1,g,r,o),_=y.a,x=y.b,T=y.c,L=s(Gv,re(u,D(b.bI)),x,{cX:v.cn,jS:h}),B={aE:b.aE,fG:!1,fQ:0,ch:L.jS,hw:He,bI:b.bI,nQ:He,bK:_,im:n(RS,D(m3(n(ce,"",n(vo,n($t,t.tn,"panel-layout"),t.tu)))),{r1:D,r2:ne}),fg:b.fg,aP:Vv,pC:!1};return M(v,{cP:n(A,n(Jc,Zo(b.bI),L.hn),v.cP),cU:X(v.cU,T),cn:L.cX,cY:s($r,$,B,v.cY)})}}}}}}}}}},JS=l(function(e,r){return n(pu,e.bI,r)?r:s($r,e.bI,e,r)}),q3=function(e){return M(e,{f:n(so,Fv(4),e.f)})},US=At("registerPanes",yn(Hr)),G3=function(e){return{$:1,a:e}},N3="play-device-picker",C$={fR:N3,d6:G3},Ea={$:11},ir=S(function(e,r,a){return e(r(a))}),WS=Lg,Ft=l(function(e,r){return Y2(n(WS,n(ir,n(ir,Ia,e),Ue),n(Sa,n(ir,n(ir,Ia,e),We),r)))}),bo=32,Z3=l(function(e,r){return n(Le,0,bo*r-e.e5/2+bo/2)}),Qo=function(e){return e.fR+"-list"},Ko=Oy,Y3=S(function(e,r,a){var t=a,o=n(ea,function(u){return n(m$,u,t.aV)},r);if(o.$)return p(t,fe);var c=o.a,i=n(Z3,e,c);return p(M(t,{eT:r,b5:i,az:c}),n(Ft,function(u){return e.d6(Ea)},s(Ko,Qo(e),0,i)))}),qS=function(e){return{$:0,a:e}},Qc=function(e){return{fR:e.fR,e5:320,kJ:"Search devices\u2026",d6:n(ir,e.d6,qS),va:{sJ:320,u6:26}}},GS=l(function(e,r){var a=r,t=s(Y3,Qc(e),D(a.cQ),a.bm),o=t.a,c=t.b;return p(M(a,{bm:o}),c)}),NS=function(e){return{$:0,a:e}},Kc=function(e){var r=e.fR,a=e.d6;return{fR:r,e5:320,kJ:"Search palettes\u2026",d6:n(ir,a,NS),va:{sJ:320,u6:26}}},Nv=S(function(e,r,a){var t=a,o=s(Y3,Kc(e),Uv(r),t.bm),c=o.a,i=o.b;return p(M(t,{bm:c}),i)}),X3=function(e){return{$:0,a:e}},Q3="play-theme-picker",ei={fR:Q3,d6:X3},ZS=function(e){var r=n(Wr,5,e.f)?s(Nv,ei,e.e,e.T):p(e.T,fe),a=r.a,t=r.b,o=n(Wr,7,e.f)?n(GS,C$,e.U):p(e.U,fe),c=o.a,i=o.b;return p(M(e,{U:c,T:a}),Pa(f([t,i])))},Zv={$:1},YS=function(e){var r=e;return r.cN},K3=function(e){if(e.$)return F3(Go(e));var r=e.a;return Nc(n(I3,YS(r),i3(r)))},ep=function(e){var r=e.b;return n(Za,Zv,K3(r))},XS=function(e){switch(e){case"Red":return D(0);case"Green":return D(1);case"Yellow":return D(2);case"Blue":return D(3);case"Magenta":return D(4);case"Cyan":return D(5);default:return w}},rp=function(e){var r=Jv,a=r.a,t=r.b;return n(d$,function(o){return re(o.sV,e)},n(A,a,t))},QS=function(e){switch(e){case"1":return D(!0);case"0":return D(!1);default:return w}},Yv=l(function(e,r){var a=r;return M(a,{hd:e,c9:n($u,e,a.c9.kx),dj:n($u,e,a.dj.kx)})}),Xv=l(function(e,r){var a=r,t=n($u,a.hd,e);return e.sf?M(a,{c9:t,dQ:!1}):M(a,{dj:t,dQ:!0})}),ap=function(e){return Xv(Tv(e))},Qv=function(e){var r=e;return M(r,{dQ:!r.dQ})},KS=l(function(e,r){return re(du(r),e)?r:Qv(r)}),ex=function(e){var r=n(Dn,"|",e);if(r.b&&r.b.b&&r.b.b.b&&r.b.b.b.b&&!r.b.b.b.b.b){var a=r.a,t=r.b,o=t.a,c=t.b,i=c.a,u=c.b,$=u.a;return rp(a)&&rp(o)?s(Av,l(function(v,d){return n(KS,d,n(Yv,v,n(ap,o,n(ap,a,Lv))))}),XS($),QS(i)):w}else return w},rx=l(function(e,r){var a=n(ce,P,r.g.iF),t=n(ce,He,n(se,gn,r.g.iF)),o=e.eU(t),c=n(G,function(K){return K.bI},e.cY),i=s(me,JS,He,e.cY),u=n(pu,"embed",t),$=ZP(c),v=(function(){if($.b&&!$.b.b){var K=$.a;return D(K)}else return w})(),d=n(ce,"",n(vo,n($t,r.g.tn,"hud-open-panels"),r.g.tu)),b=(function(){if(u){var K=mP;return M(K,{e:e.bH.e})}else return e.bH})(),h=n(ce,b.hU,n(ea,KP,n(vo,s$("mode"),r.g.tu))),g=n(ce,b.bP,n(ea,hP,n(vo,n($t,r.g.tn,"tape-record-from-start"),r.g.tu))),y=n(ce,b.e,n(ea,ex,n(vo,n($t,r.g.tn,"theme"),r.g.tu))),_=n(ce,$S,n(ea,NP,n(vo,n($t,r.g.tn,"device"),r.g.tu))),x=gS({lx:e.lx,r8:_,hU:h,r9:g,sa:y,gH:b}),T=n(uS,d,n(cS,m3(n(ce,"",n(vo,s$("hud-panel-layout"),r.g.tu))),x)),L=g&&b.hR?q3(T):T,B=n(x3,a,e.aK),R=s(me,ao(OS,i,o,a,r.g,y,h,v,jr($)),{cP:P,cU:P,cn:B,cY:He},$),V=n(fS,R.cn,r.g),W=s($$,e,R.cU,o),Y=W.a,oe=W.b,$e={ch:R.cn,g:r.g,cY:R.cY,S:Y,op:P,oq:P},pe=(function(){if(b.hR){var K=s(_S,QP,V,$e);return g?ep(K):K}else return n(CS,V,$e)})(),we=ZS(L),Ae=we.a,Re=we.b,rr={hs:jP(e.cY),eA:b,aJ:v,bH:Ae,aY:$,gj:P,tn:r.g.tn,uE:pe};return p(M(rr,{gj:n(b3,e,rr)}),Pa(n(A,n(Jc,f$,Re),n(A,US($),n(A,oe,R.cP)))))}),np=function(e){return{$:10,a:e}},Kv={$:1},ax=function(e){return{$:0,a:e}},tp={$:11},nx=l(function(e,r){return{$:4,a:e,b:r}}),tx=l(function(e,r){return{$:5,a:e,b:r}}),ox={$:6},j=lg,ri=hg,ie=tg,cx=sg,ai=function(e){return n(Ye,gn,cx(e))},P$=n(je,ln,n(je,kr(function(e){var r=e.a,a=e.b,t=lo(r);if(t.$)return w;var o=t.a;return D(p(o,a))}),gn)),ix=U(function(e,r,a,t){return{rP:t,u7:a,pH:e,pJ:r}}),q=og,ec=gg,ux=E(ec,ix,n(j,"x",q),n(j,"y",q),n(j,"w",q),n(j,"h",q)),fx=ai(ux),e1=function(e){return{$:1,a:e}},eY=3,ni={$:2},op=function(e){switch(e){case 0:return"texture";case 1:return"sound";case 2:return"font";default:return"atlas"}},po=l(function(e,r){return op(e)+(":"+r)}),$x=l(function(e,r){var a=r;return M(a,{J:s(Bt,n(po,3,e.bI),se(function(t){return e1({eN:e.eN,aZ:e.aZ,at:e.at,I:ni})}),a.J)})}),S$=cg,lx=function(e){return C(ri,S(function(r,a,t){return $x({eN:a,bI:e,aZ:r,at:t})}),n(Ye,P$,n(j,"mipImages",ai(S$))),n(Ye,P$,n(j,"frames",ai(fx))),n(j,"pixelated",ie))},On=bg,r1=function(e){return On(f([n(Ye,D,e),ae(w)]))},a1=n(Ye,ce(""),r1(n(j,"error",ke))),x$=function(e){return{$:3,a:e}},cp=function(e){return{$:3,a:e}},n1=function(e){return{$:2,a:e}},t1=function(e){return{$:0,a:e}},vx=l(function(e,r){switch(r.$){case 0:return t1({ej:0,ek:0,fK:w,aZ:He,e9:He,at:!1,I:x$(e)});case 1:return e1({eN:He,aZ:He,at:!1,I:x$(e)});case 2:return n1({I:x$(e)});default:return cp({I:x$(e)})}}),rY=2,aY=1,nY=0,o1=function(e){switch(e){case"texture":return D(0);case"sound":return D(1);case"font":return D(2);case"atlas":return D(3);default:return w}},c1=U(function(e,r,a,t){var o=t,c=o1(e);if(c.$)return o;var i=c.a;return M(o,{J:s(Bt,n(po,i,r),se(vx(a)),o.J)})}),j$={$:1},sx=function(e){switch(e){case 0:return t1({ej:0,ek:0,fK:w,aZ:He,e9:He,at:!1,I:j$});case 3:return e1({eN:He,aZ:He,at:!1,I:j$});case 1:return n1({I:j$});default:return cp({I:j$})}},i1=S(function(e,r,a){var t=a,o=o1(e);if(o.$)return t;var c=o.a;return M(t,{J:s($r,n(po,c,r),sx(c),t.J)})}),dx=l(function(e,r){var a=r;return M(a,{J:s(Bt,n(po,1,e),se(function(t){return t.$===2?n1({I:ni}):t}),a.J)})}),ip=_g,bx=l(function(e,r){var a=r;return M(a,{J:s(Bt,n(po,0,e.bI),se(function(t){return t.$?t:t1({ej:e.ej,ek:e.ek,fK:e.fK,aZ:e.aZ,e9:e.e9,at:e.at,I:ni})}),a.J)})}),px=function(e){return ua(ip,Rr(function(r,a,t,o,c,i){return bx({ej:o,ek:t,fK:i,bI:e,aZ:r,e9:a,at:c})}),n(Ye,P$,n(j,"mipImages",ai(S$))),n(Ye,n(je,ce(He),P$),r1(n(j,"mipUrls",ai(ke)))),n(j,"baseWidth",q),n(j,"baseHeight",q),n(j,"pixelated",ie),r1(n(j,"baseline",q)))},ti=S(function(e,r,a){var t=a,o=o1(e);if(o.$)return t;var c=o.a;return M(t,{J:n(vu,n(po,c,r),t.J)})}),mx=function(e){var r=e.a,a=e.b,t=e.c,o=p(r,a);e:for(;;)switch(o.a){case"texture":switch(o.b){case"loading":return ae(n(i1,"texture",t));case"loaded":return px(t);case"failed":return n(Ye,function(c){return s(c1,"texture",t,c)},a1);case"unloaded":return ae(n(ti,"texture",t));case"cancelled":return ae(n(ti,"texture",t));default:break e}case"atlas":switch(o.b){case"loading":return ae(n(i1,"atlas",t));case"loaded":return lx(t);case"failed":return n(Ye,function(c){return s(c1,"atlas",t,c)},a1);case"unloaded":return ae(n(ti,"atlas",t));case"cancelled":return ae(n(ti,"atlas",t));default:break e}case"sound":switch(o.b){case"loading":return ae(n(i1,"sound",t));case"loaded":return ae(dx(t));case"failed":return n(Ye,function(c){return s(c1,"sound",t,c)},a1);case"unloaded":return ae(n(ti,"sound",t));case"cancelled":return ae(n(ti,"sound",t));default:break e}default:break e}return ae(ne)},hx=n(H,mx,C(ri,S(function(e,r,a){return F(e,r,a)}),n(j,"kind",ke),n(j,"status",ke),n(j,"id",ke))),gx=s(Ha,It,n(j,"instanceId",ke),hx),up=V0,yx=function(e){var r=n(up,gx,e);if(r.$)return ox;var a=r.a,t=a.a,o=a.b;return n(tx,t,o)},Cn=ag,fp=l(function(e,r){return{$:2,a:e,b:r}}),rc=Eb,u1=function(e){return s(me,h3,h$,e)},k$=function(e){return u1(zv(e.im))},tY=0,$p=S(function(e,r,a){return{$:0,a:e,b:r,c:a}}),lp=l(function(e,r){return{or:r,o7:e}}),_x=Ia(n(lp,P,He)),Cx=function(e){return e?"w_":"d_"},Px=function(e){var r=e.a,a=e.b;return p(X(Cx(r),a),e)},vp=Hg,Sx=Rr(function(e,r,a,t,o,c){var i=S(function(d,b,h){e:for(;;){var g=h.a,y=h.b;if(g.b){var _=g.a,x=_.a,T=_.b,L=g.b;if(Q(x,d)<0){var B=d,R=b,V=p(L,s(e,x,T,y));d=B,b=R,h=V;continue e}else return Q(x,d)>0?p(g,s(a,d,b,y)):p(L,C(r,x,T,b,y))}else return p(g,s(a,d,b,y))}}),u=s(ft,i,p(ln(t),c),o),$=u.a,v=u.b;return s(me,l(function(d,b){var h=d.a,g=d.b;return s(e,h,g,b)}),v,$)}),xx=l(function(e,r){return{my:r,jV:e}}),f1=Rg,jx=S(function(e,r,a){var t=a.a,o=a.b,c=(function(){return t?ot:Fo})();return n(iu,function(i){return p(r,i)},s(By,c,o,function(i){return n(f1,e,n(xx,r,i))}))}),kx=l(function(e,r){return s(ft,$r,r,e)}),wx=S(function(e,r,a){var t=S(function(b,h,g){var y=g.a,_=g.b,x=g.c;return F(y,_,n(A,s(jx,e,b,h),x))}),o=S(function(b,h,g){var y=g.a,_=g.b,x=g.c;return F(n(A,h,y),_,x)}),c=U(function(b,h,g,y){var _=y.a,x=y.b,T=y.c;return F(_,s($r,b,h,x),T)}),i=n(G,Px,r),u=Sr(Sx,o,c,t,a.or,gn(i),F(P,He,P)),$=u.a,v=u.b,d=u.c;return n(Sa,function(b){return Ia(n(lp,i,n(kx,v,gn(b))))},n(Sa,function(b){return uu(d)},uu(n(G,vp,$))))}),Tx=S(function(e,r,a){var t=r.my,o=r.jV,c=function(u){var $=u.a,v=u.b,d=v.a,b=v.b,h=v.c;return re($,o)?n(Iy,h,t):w},i=n(kr,c,a.o7);return n(Sa,function(u){return Ia(a)},uu(n(G,u$(e),i)))}),Lx=l(function(e,r){var a=r.a,t=r.b,o=r.c;return s($p,a,t,n(Ye,e,o))});fa["Browser.Events"]=N0(_x,wx,Tx,0,Lx);var Mx=Yi("Browser.Events"),$1=S(function(e,r,a){return Mx(s($p,e,r,a))}),_u=n($1,0,"keydown"),l1=function(e){return{$:0,a:e}},Cu=l(function(e,r){return s(dn,j,r,e)}),sp=Oh,zx=function(e){var r=sp(e);return r==="INPUT"||r==="TEXTAREA"||r==="SELECT"},Dx=l(function(e,r){if(r.$)return!1;var a=r.a;return re(Q2(e),Uc(Hv(a)))}),Hx=l(function(e,r){return n(se,function(a){return a.bI},jr(n(Ar,function(a){return n(Dx,e,a.ud)},r)))}),Ax=function(e){return n(H,function(r){if(zx(r.pb))return Cn("ignored: text input focused");if(r.jr||r.j9){var a=n(Hx,r.jV,e);if(a.$)return Cn("ignored: no matching entry shortcut");var t=a.a;return ae(l1(t))}else return Cn("ignored: no Ctrl/Cmd modifier")},E(ec,U(function(r,a,t,o){return{jr:a,jV:r,j9:t,pb:o}}),n(j,"key",ke),n(j,"ctrlKey",ie),n(j,"metaKey",ie),n(Cu,f(["target","tagName"]),ke)))},dp=l(function(e,r){return _u(Ax(e))}),oY=ne,Bx=function(e){return n(G,function(r){return{bI:r.bI,ud:n(se,ne,r.ud)}},e)},w$=function(e){return e.pL},Ix=Te(function(e,r,a,t,o){var c=n(Xe,o,a.cY);if(c.$)return w;var i=c.a,u=yu({fQ:i.fQ,ch:i.ch,aJ:r.aJ,bH:D(r.bH),bI:i.bI,g:a.g,nQ:i.nQ,n$:Gc(r.bH),tl:k$(i),aP:i.aP,cF:t,pC:i.pC,pL:w$(r.bH)}),$=C(e.ba.cu,u,a.S,Rn(r.bH),i.bK),v=n(rc,fp(o),n(dp,Bx($),i.im)),d=n(rc,Zo(o),C(e.ba.aC,u,a.S,Rn(r.bH),i.bK));return D(cu(f([d,v])))}),oi=function(e){var r=e.a;return re(r,Zv)},bp=function(e){return n(Wr,4,e.f)},Ex=Of("assetsResponse",S$),Fx=Ex(ne),pp="play-absorbs-pointer-",Vx=function(e){return n(pn,pp,e)},Rx=l(function(e,r){e:for(;;)if(r.b){var a=r.a,t=r.b;if(Vx(a))return w;if(n(g3,a,e))return D(a);var o=e,c=t;e=o,r=c;continue e}else return w}),mp=function(e){var r=.5*e.vb.rW-e.ad.pJ,a=e.ad.pH+.5*e.vb.va,t=function(i){var u=n(W3,e.vb,i);return Q(a,u.bJ)>-1&&Q(a,u.bJ+u.va)<1&&Q(r,u.bW)>-1&&Q(r,u.bW+u.rW)<1},o=n(se,function(i){return i.tr},jr(n(Ar,t,e.ky))),c=n(Rx,e.kP,e.ad.rg);return{c8:c,hT:o}},v1=function(e){return mp({ky:e.g.tq,kP:u1(Yf(e.cY)),ad:e.g.tB,vb:e.g.bT})},hp=function(e){return{$:6,a:e}},gp=function(e){return{$:3,a:e}},yp=function(e){return{$:2,a:e}},_p={$:13},Ox=n(H,function(e){return(e.jV==="p"||e.jV==="P")&&e.kY&&(e.jr||e.j9)?ae(_p):Cn("not Cmd+Shift+P")},E(ec,U(function(e,r,a,t){return{jr:a,jV:e,j9:t,kY:r}}),n(j,"key",ke),n(j,"shiftKey",ie),n(j,"ctrlKey",ie),n(j,"metaKey",ie))),Jx=function(e){var r=e;return tr(r.iq)},Pu=l(function(e,r){return e.hQ&&!Jx(r)}),Ux={$:4},Wx=n(H,function(e){return(e.jV==="i"||e.jV==="I")&&(e.jr||e.j9)?ae(Ux):Cn("not Ctrl+I")},C(ri,S(function(e,r,a){return{jr:r,jV:e,j9:a}}),n(j,"key",ke),n(j,"ctrlKey",ie),n(j,"metaKey",ie))),qx={$:12},Gx=n(H,function(e){return(e.jV==="m"||e.jV==="M")&&(e.jr||e.j9)?ae(qx):Cn("not Ctrl+M")},C(ri,S(function(e,r,a){return{jr:r,jV:e,j9:a}}),n(j,"key",ke),n(j,"ctrlKey",ie),n(j,"metaKey",ie))),Cp=l(function(e,r){return uo}),Nx=l(function(e,r){var a=r;return n(Cp,Qc(e),a.bm)}),Zx=function(e){return{$:7,a:e}},Yx={$:8},Xx=n($1,0,"mousemove"),Qx=n($1,0,"mouseup"),Kx=function(e){if(e.$===3){var r=e.a,a=r.bo;if(a.a.$===1){var t=a.a;return cu(f([Xx(s(Ha,l(function(o,c){return Zx({fP:o,qB:c})}),n(j,"clientX",q),n(j,"clientY",q))),Qx(ae(Yx))]))}else return uo}else return uo},ej=l(function(e,r){var a=r;return n(Cp,Kc(e),a.bm)}),Pp=function(e){return{$:4,a:e}},Sp=function(e){return{$:1,a:e}},T$=S(function(e,r,a){return{kj:a,oK:r,o7:e}}),s1=Ia(s(T$,P,w,0)),rj=Fy(0),xp=Ey(0),jp=U0,aj=S(function(e,r,a){var t=a.kj,o=a.oK,c=p(o,r);if(c.a.$===1)if(c.b.b){var u=c.a;return n(Sa,function(v){return n(Sa,function(d){return Ia(s(T$,r,D(v),d))},rj)},jp(n(Sa,f1(e),xp)))}else{var i=c.a;return s1}else{if(c.b.b)return Ia(s(T$,r,o,t));var $=c.a.a;return n(Sa,function(v){return s1},vp($))}}),cY=ne,nj=ne,tj=S(function(e,r,a){var t=a.kj,o=a.o7,c=function(i){if(i.$){var u=i.a;return n(u$,e,u(r-t))}else{var u=i.a;return n(u$,e,u(nj(r)))}};return n(Sa,function(i){return n(Sa,function(u){return Ia(s(T$,o,D(i),r))},uu(n(G,c,o)))},jp(n(Sa,f1(e),xp)))}),oj=function(e){return{$:0,a:e}},cj=l(function(e,r){if(r.$){var a=r.a;return Sp(n(ir,e,a))}else{var a=r.a;return oj(n(ir,e,a))}});fa["Browser.AnimationManager"]=N0(s1,aj,tj,0,cj);var ij=Yi("Browser.AnimationManager"),uj=function(e){return ij(Sp(e))},kp=uj,fj=function(e){var r=e;if(r.$===1){var a=r.a,t=a._;switch(t.$){case 0:return kp(Pp);case 2:return kp(Pp);case 1:return uo;default:return uo}}else return uo},$j=l(function(e,r){var a=e.d6,t=e.gH,o=n(rc,yp,fj(r.c1)),c=t.co?D(n(ej,ei,r.T)):w,i=t.eO?D(n(rc,gp,Kx(r.aO))):w,u=n(rc,hp,n(dp,P,r.f)),$=t.dI?D(n(Nx,C$,r.U)):w,v=t.dJ?D(_u(Gx)):w,d=t.co?D(_u(Wx)):w,b=n(Pu,t,r.lx.R)?D(_u(Ox)):w;return n(rc,a,cu(n(kr,ne,f([D(o),d,v,c,$,i,D(u),b]))))}),Gr=ng,ci=$g,lj=Of("tick",n(H,function(e){return n(H,function(r){return n(H,function(a){return n(H,function(t){return n(H,function(o){return n(H,function(c){return n(H,function(i){return n(H,function(u){return n(H,function($){return n(H,function(v){return n(H,function(d){return n(H,function(b){return n(H,function(h){return n(H,function(g){return n(H,function(y){return n(H,function(_){return n(H,function(x){return n(H,function(T){return n(H,function(L){return n(H,function(B){return ae({dC:B,eu:L,ev:T,ew:x,hB:_,eJ:y,rx:g,hW:h,kv:b,tn:d,gw:v,tq:$,tu:u,tB:i,tL:c,bT:o,fk:t,iF:a,ea:r,fB:e})},n(j,"boundingClientRects",pr(n(H,function(B){return n(H,function(R){return n(H,function(V){return ae({rh:V,rF:R,t7:B})},n(j,"elements",pr(n(H,function(V){return n(H,function(W){return ae({lV:W,bI:V})},n(j,"boundingClientRect",n(H,function(W){return n(H,function(Y){return n(H,function(oe){return n(H,function($e){return ae({bB:$e,bJ:oe,bQ:Y,bW:W})},n(j,"bottom",q))},n(j,"left",q))},n(j,"right",q))},n(j,"top",q))))},n(j,"id",ke)))))},n(j,"frameId",ke))},n(j,"scroll",n(H,function(B){return n(H,function(R){return n(H,function(V){return n(H,function(W){return n(H,function(Y){return n(H,function(oe){return ae({mc:oe,md:Y,bJ:W,bW:V,u5:R,pB:B})},n(j,"contentHeight",q))},n(j,"contentWidth",q))},n(j,"left",q))},n(j,"top",q))},n(j,"viewportHeight",q))},n(j,"viewportWidth",q)))))))},n(j,"darkModeIsOn",ie))},n(j,"deviceOrientation",On(f([ci(w),n(Ye,D,n(H,function(T){return n(H,function(L){return n(H,function(B){return ae({aT:B,p6:L,rJ:T})},n(j,"alpha",q))},n(j,"beta",q))},n(j,"gamma",q)))]))))},n(j,"devicePixelRatio",q))},n(j,"dt",q))},n(j,"focusedElementIsContentEditable",ie))},n(j,"focusedElementIsTextInput",ie))},n(j,"keyboard",n(H,function(h){return n(H,function(g){return n(H,function(y){return n(H,function(_){return n(H,function(x){return n(H,function(T){return n(H,function(L){return n(H,function(B){return n(H,function(R){return n(H,function(V){return ae({i2:V,jr:R,jz:B,q6:L,bJ:T,j9:x,tH:_,bQ:y,kY:g,lp:h})},n(j,"alt",ie))},n(j,"ctrl",ie))},n(j,"down",ie))},n(j,"downs",pr(ke)))},n(j,"left",ie))},n(j,"meta",ie))},n(j,"pressedKeys",pr(ke)))},n(j,"right",ie))},n(j,"shift",ie))},n(j,"up",ie))))},n(j,"operatingSystem",ke))},n(j,"pageId",ke))},n(j,"pageScroll",n(H,function(v){return n(H,function(d){return n(H,function(b){return n(H,function(h){return n(H,function(g){return n(H,function(y){return ae({mc:y,md:g,bJ:h,bW:b,u5:d,pB:v})},n(j,"contentHeight",q))},n(j,"contentWidth",q))},n(j,"left",q))},n(j,"top",q))},n(j,"viewportHeight",q))},n(j,"viewportWidth",q))))},n(j,"paneBoundingBoxes",pr(n(H,function($){return n(H,function(v){return n(H,function(d){return n(H,function(b){return n(H,function(h){return ae({rW:h,bJ:b,tr:d,bW:v,va:$})},n(j,"height",q))},n(j,"left",q))},n(j,"paneId",ke))},n(j,"top",q))},n(j,"width",q)))))},n(j,"persisted",pr(n(H,function(u){return n(H,function($){return ae(p(u,$))},n(Br,1,ke))},n(Br,0,ke)))))},n(j,"pointer",n(H,function(i){return n(H,function(u){return n(H,function($){return n(H,function(v){return n(H,function(d){return n(H,function(b){return n(H,function(h){return n(H,function(g){return n(H,function(y){return n(H,function(_){return n(H,function(x){return n(H,function(T){return ae({q2:T,jz:x,hC:_,hD:y,rg:g,sg:h,sS:b,tZ:d,t$:v,lp:$,pH:u,pJ:i})},n(j,"doubleClick",ie))},n(j,"down",ie))},n(j,"dx",q))},n(j,"dy",q))},n(j,"elementIdsForLastDown",pr(ke)))},n(j,"isDown",ie))},n(j,"move",ie))},n(j,"rightDown",ie))},n(j,"rightUp",ie))},n(j,"up",ie))},n(j,"x",q))},n(j,"y",q))))},n(j,"rawPointer",n(H,function(c){return n(H,function(i){return n(H,function(u){return n(H,function($){return n(H,function(v){return n(H,function(d){return n(H,function(b){return n(H,function(h){return n(H,function(g){return n(H,function(y){return n(H,function(_){return n(H,function(x){return ae({q2:x,jz:_,hC:y,hD:g,rg:h,sg:b,sS:d,tZ:v,t$:$,lp:u,pH:i,pJ:c})},n(j,"doubleClick",ie))},n(j,"down",ie))},n(j,"dx",q))},n(j,"dy",q))},n(j,"elementIdsForLastDown",pr(ke)))},n(j,"isDown",ie))},n(j,"move",ie))},n(j,"rightDown",ie))},n(j,"rightUp",ie))},n(j,"up",ie))},n(j,"x",q))},n(j,"y",q))))},n(j,"screen",n(H,function(o){return n(H,function(c){return ae({rW:c,va:o})},n(j,"height",q))},n(j,"width",q))))},n(j,"screenOrientationAngle",q))},n(j,"searchParamsFromUrl",On(f([ci(w),n(Ye,D,pr(n(H,function(a){return n(H,function(t){return ae(p(a,t))},n(Br,1,ke))},n(Br,0,ke))))]))))},n(j,"touches",pr(n(H,function(r){return n(H,function(a){return n(H,function(t){return ae({bI:t,pH:a,pJ:r})},n(j,"id",Gr))},n(j,"x",q))},n(j,"y",q)))))},n(j,"wheel",n(H,function(e){return n(H,function(r){return n(H,function(a){return n(H,function(t){return n(H,function(o){return ae({mk:o,ml:t,ms:a,kI:r,io:e})},n(j,"deltaX",q))},n(j,"deltaY",q))},n(j,"elementIdsForLastWheel",pr(ke)))},n(j,"pinchDeltaForChrome",q))},n(j,"pinchScaleForSafari",On(f([ci(w),n(Ye,D,q)]))))))),vj=Of("visibilityChanged",n(H,function(e){return n(H,function(r){return ae({gf:r,pC:e})},n(j,"instanceId",ke))},n(j,"visible",ie))),sj=l(function(e,r){var a=n($j,{gH:r.eA,d6:f$},r.bH),t=qc(r.uE),o=v1(t),c=n(kr,C(Ix,e,r,t,o),r.aY),i=bp(r.bH)?_u(n(H,function($){return $==="Escape"?oi(r.uE)?ae(np(Kv)):ae(tp):Cn("not Escape")},n(j,"key",ke))):uo,u=e.aC(t.S);return cu(X(f([lj(ax),vj(function($){return n(nx,$.gf,$.pC)}),n(rc,yx,Fx),u,a,i]),c))}),ii=F7,wp=U(function(e,r,a,t){var o=qo&r>>>e,c=n(su,o,t);if(c.$){var $=c.a,v=s(ii,qo&r,a,$);return s(ii,o,Ac(v),t)}else{var i=c.a,u=C(wp,e-Hn,r,a,i);return s(ii,o,Bc(u),t)}}),ui=S(function(e,r,a){var t=a.a,o=a.b,c=a.c,i=a.d;return e<0||Q(e,t)>-1?a:Q(e,c3(t))>-1?C(io,t,o,c,s(ii,qo&e,r,i)):C(io,t,o,C(wp,o,e,r,c),i)}),dj=l(function(e,r){var a=r;return M(a,{eN:s(ui,n(Kr,a.cN,a.ds+a.aU),e,a.eN)})}),Tp=l(function(e,r){if(r.$){var t=r.a;return gu(M(t,{eN:s(ui,t.aU,e,t.eN)}))}else{var a=r.a;return Nc(n(dj,e,a))}}),mo=l(function(e,r){var a=r.a,t=r.b,o=Go(t),c=o.a,i=o.b,u=e(i),$=u.a,v=u.b;return p(n(Za,a,n(Tp,p(c,$),t)),v)}),bj=S(function(e,r,a){var t=function(o){var c=s($$,e,r,o.S),i=c.a,u=c.b;return p(M(o,{S:i}),u)};return n(Xo,function(o){return M(a,{uE:o})},n(mo,t,a.uE))}),Lp=Tg,pj=At("clearPlayLocalStorage",function(e){return Lp}),mj=At("pushUrlReset",function(e){return Lp}),hj=S(function(e,r,a){if(r.$===1)return p(a,fe);if(r.a){var u=r.a;return p(a,pj(0))}else{var t=r.a,o=function($){var v=(function(){var d=a.aY;if(d.b){var b=d.a;return s(Bt,b,se(function(h){return M(h,{ch:e.aK})}),$.cY)}else return $.cY})();return p(M($,{ch:e.aK,cY:v}),fe)},c=n(mo,o,a.uE),i=c.a;return p(M(a,{uE:i}),mj(0))}}),gj=S(function(e,r,a){var t=function(o){var c=n(Xe,e,o.cY);if(c.$)return p(o,fe);var i=c.a,u=n(so,r,i.im),$=s($r,e,M(i,{im:u}),o.cY);return p(M(o,{cY:$}),fe)};return n(Xo,function(o){return M(a,{uE:o})},n(mo,t,a.uE))}),yj=function(e){return n(Wr,7,e.f)},_j=l(function(e,r){return e?{rW:r.gI.va,va:r.gI.rW}:r.gI}),Cj=function(e){var r=e;return n(_j,r.dX,r.cQ)},Pj=function(e){return Cj(e.U)},d1=function(e){return yj(e)?D(Pj(e)):w},Mp=24,Su=l(function(e,r){return s(er,.1,1,n(qe,(e.va-Mp)/r.va,(e.rW-Mp)/r.rW))}),Sj=S(function(e,r,a){var t=n(Su,e,r),o=function(c){return M(c,{bB:c.bB/t,bJ:c.bJ/t,bQ:c.bQ/t,bW:c.bW/t})};return n(G,function(c){return M(c,{rh:n(G,function(i){return M(i,{lV:o(i.lV)})},c.rh)})},a)}),xj=S(function(e,r,a){var t=n(Su,e,r),o=.5*(e.va-r.va*t),c=.5*(e.rW-r.rW*t);return M(a,{rW:a.rW/t,bJ:(a.bJ-o)/t,bW:(a.bW-c)/t,va:a.va/t})}),zp=S(function(e,r,a){var t=.5*e.rW-a.pJ,o=a.pH+.5*e.va,c=n(Su,e,r),i=.5*(e.va-r.va*c),u=.5*(e.rW-r.rW*c);return M(a,{pH:(o-i)/c-.5*r.va,pJ:.5*r.rW-(t-u)/c})}),Dp=S(function(e,r,a){var t=s(zp,e,r,a),o=n(Su,e,r);return M(t,{hC:a.hC/o,hD:a.hD/o})}),b1=l(function(e,r){if(e.$)return r;var a=e.a;return{dC:s(Sj,r.bT,a,r.dC),eu:r.eu,ev:r.ev,ew:r.ew,hB:r.hB,eJ:r.eJ,rx:r.rx,hW:r.hW,kv:r.kv,tn:r.tn,gw:r.gw,tq:n(G,n(xj,r.bT,a),r.tq),tu:r.tu,tB:s(Dp,r.bT,a,r.tB),tL:s(Dp,r.bT,a,r.tL),bT:a,fk:r.fk,iF:r.iF,ea:n(G,n(zp,r.bT,a),r.ea),fB:r.fB}}),jj=U(function(e,r,a,t){var o=function(c){var i=n(Xe,r,c.cY);if(i.$)return p(c,fe);var u=i.a,$=v1(c),v=d1(t.bH),d=yu({fQ:u.fQ,ch:u.ch,aJ:t.aJ,bH:D(t.bH),bI:u.bI,g:n(b1,v,c.g),nQ:u.nQ,n$:Gc(t.bH),tl:k$(u),aP:u.aP,cF:$,pC:u.pC,pL:w$(t.bH)}),b=E(e.ba.bk,d,c.S,Rn(t.bH),a,u.bK),h=b.a,g=b.b,y=b.c,_=s(Gv,re(jr(t.aY),D(r)),g,{cX:c.ch,jS:u.ch}),x=s($$,e,y,c.S),T=x.a,L=x.b,B=s($r,r,M(u,{ch:_.jS,bK:h}),c.cY);return p(M(c,{ch:_.cX,cY:B,S:T}),Pa(f([n(Jc,Zo(r),_.hn),L])))};return n(Xo,function(c){return M(t,{uE:c})},n(mo,o,t.uE))}),Hp=function(e){return{$:2,a:e}},Ap=Hp,kj=function(e){return M(e,{f:n(so,Ap(4),e.f)})},wj=function(e){var r=e.b;return n(Za,hu,K3(r))},Tj=S(function(e,r,a){return{$:7,a:e,b:r,c:a}}),iY=ne,Bp=9729,uY=ne,L$=10497,Lj={hM:!0,mW:L$,h4:Bp,h8:Bp,pz:L$},M$=33071,Mj=(function(){var e=Lj;return M(e,{mW:M$,pz:M$})})(),Ip=function(e){return{$:1,a:e}},zj={$:0},Dj=l(function(e,r){return{$:1,a:e,b:r}}),Hj=l(function(e,r){var a=e.hM,t=e.pz,o=e.mW,c=e.h8,i=e.h4,u=U(function($,v,d,b){var h=$,g=v,y=d,_=b;return Sr(Jy,h,g,y,_,a,r)});return C(u,i,c,o,t)}),Aj=l(function(e,r){return n(iu,function(a){return Ip({X:a,tm:e,fy:r})},n(Hj,e,r))}),Ep=9728,Bj={hM:!0,mW:L$,h4:Ep,h8:Ep,pz:L$},Ij=(function(){var e=Bj;return M(e,{mW:M$,pz:M$})})(),Ej=l(function(e,r){var a=r.J,t=n(Xe,n(po,0,e),a);if(!t.$&&!t.a.$){var o=t.a.a.at,c=t.a.a.I;return re(c,ni)?D(o):w}else return w}),z$=function(e){if(e.b){var r=e.a,a=e.b;return D(s(me,Le,r,a))}else return w},Fj=function(e){if(e.b){var r=e.a,a=e.b;return D(s(me,qe,r,a))}else return w},Vj=l(function(e,r){var a=Fj(n(Ar,function(o){return Q(o,e)>-1},r));if(a.$)return n(ce,1,z$(r));var t=a.a;return t}),Rj=S(function(e,r,a){var t=a.J,o=n(Xe,n(po,0,e),t);if(!o.$&&!o.a.$){var c=o.a.a.e9,i=o.a.a.I;if(i.$===2){var u=n(Vj,r,Yf(c));return n(Xe,u,c)}else return w}else return w}),Oj=l(function(e,r){return s(Rj,e,1,r)}),Jj=S(function(e,r,a){return Pa(n(kr,function(t){var o=p(n(Oj,t,a),n(Ej,t,a));if(!o.a.$&&!o.b.$){var c=o.a.a,i=o.b.a,u=i?Ij:Mj;return D(n(Ft,n(Tj,e,t),n(Aj,u,c)))}else return w},r))}),Fp=l(function(e,r){var a=op(e)+":";return n(pn,a,r)?n(Ba,Aa(a),r):r}),Uj=l(function(e,r){var a=e,t=r;return n(kr,function(o){var c=o.a,i=o.b;if(i.$)return w;var u=i.a.I;if(re(u,ni)){var $=n(Xe,c,a.J);if(!$.$&&!$.a.$){var v=$.a.a;return re(v.I,ni)?w:D(n(Fp,0,c))}else return D(n(Fp,0,c))}else return w},ln(t.J))}),Wj=S(function(e,r,a){var t=function(o){var c=n(Xe,e,o.cY);if(c.$)return p(o,fe);var i=c.a,u=r(i.aP),$=n(Uj,i.aP,u),v=M(i,{aP:u});return p(M(o,{cY:s($r,e,v,o.cY)}),s(Jj,e,$,u))};return n(Xo,function(o){return M(a,{uE:o})},n(mo,t,a.uE))}),qj=l(function(e,r){var a=p(e,r);if(a.a.$===5&&a.b.$===5){var t=a.a.a,o=a.b.a;return re(dt(t),dt(o))}else return re(e,r)}),Gj=function(e){switch(e.$){case 0:var r=e.b;return N(r);case 2:var r=e.b;return Ie(r);case 4:var r=e.a;return r?"true":"false";case 1:var r=e.a;return r;case 3:var a=e.a.aT,t=e.a.D,o=e.a.a4,c=e.a.aX;return n(Or,",",n(G,N,f([c,o,t,a])));default:var i=e.a;return dt(i)}},Vp=l(function(e,r){var a=gn(n(Vn,function(t){return t.bc},e));return n(kr,function(t){var o=t.a,c=t.b,i=n(Xe,o,a);if(i.$)return w;var u=i.a;return n(qj,u,c)?w:D(p(o,Gj(c)))},n(Vn,function(t){return t.bc},r))}),Nj=S(function(e,r,a){return X(n(Vp,e.aK,r),a)}),Zj=At("writeUrlParams",yn(function(e){var r=e.a,a=e.b;return n(yn,ne,f([Hr(r),Hr(a)]))})),Yj=l(function(e,r){var a=qc(r.uE),t=e.fz(a.S);return Zj(s(Nj,e,a.ch,t))}),Xj=S(function(e,r,a){var t=function(u){var $=n(U3,r,u.ch),v=(function(){var d=a.aY;if(d.b){var b=d.a;return s(Bt,b,se(function(h){return M(h,{ch:$})}),u.cY)}else return u.cY})();return p(M(u,{ch:$,cY:v}),fe)},o=n(mo,t,a.uE),c=o.a,i=M(a,{uE:c});return p(i,n(Yj,e,i))}),D$=l(function(e,r){return r}),Qj=S(function(e,r,a){if(r.$){var o=r.a,c=n(D$,"Play.Runtime.MaterialLoaded failed",p(e,o));return a}else{var t=r.a;return M(a,{nQ:s($r,e,t,a.nQ)})}}),Kj=U(function(e,r,a,t){var o=function(c){return p(M(c,{cY:s(Bt,e,se(n(Qj,r,a)),c.cY)}),fe)};return n(Xo,function(c){return M(t,{uE:c})},n(mo,o,t.uE))}),ek=Vf,ho=function(e){return s(me,l(function(r,a){var t=r.a,o=r.b;return s(kg,t,o,a)}),jg(0),e)},rk=At("assetsLoadRequest",yn(function(e){return ho(f([p("id",Hr(e.bI)),p("instanceId",Hr(e.gf)),p("kind",Hr(e.bf)),p("mips",yn(ek)(e.dU)),p("url",Hr(e.fy))]))})),p1=function(e){var r=e;return r},ak=l(function(e,r){var a=p1(r);return{bI:a.bI,gf:e,bf:a.bf,dU:a.dU,fy:a.fy}}),Rp=l(function(e,r){return rk(n(G,ak(e),r))}),Op=Vf,nk=At("setInstanceMuted",function(e){return ho(f([p("instanceId",Hr(e.gf)),p("muted",Op(e.sU))]))}),tk=S(function(e,r,a){var t=function(o){var c=n(Xe,e,o.cY);if(c.$)return p(o,fe);var i=c.a,u=r&&!i.fG,$=M(i,{fG:i.fG||r,pC:r}),v=i.fg?nk({gf:e,sU:!r}):fe,d=u?n(Rp,e,i.aE):fe;return p(M(o,{cY:s($r,e,$,o.cY)}),Pa(f([d,v])))};return n(Xo,function(o){return M(a,{uE:o})},n(mo,t,a.uE))}),ok=function(e){return e.bp+e.bq},H$=function(e){var r=e;return r},ck=n(ir,ok,H$),Jp=function(e){var r=e.bO,a=e.bG,t=e.bq,o=e.bp,c=(o+t)/2|0,i=o+t-c,u=4;if(o+t<2)return e;if(Q(o,u*t+1)>0){var $=X(r,Ve(n(lt,c,a))),v=n(vt,c,a);return{bG:v,bO:$,bp:c,bq:i}}else if(Q(t,u*o+1)>0){var $=n(vt,c,r),v=X(a,Ve(n(lt,c,r)));return{bG:v,bO:$,bp:c,bq:i}}else return e},ik=function(e){var r=e.bO,a=e.bG,t=p(a,r);if(t.a.b){var i=t.a,u=i.a,$=i.b;return p(D(u),Jp({bG:$,bO:e.bO,bp:e.bp-1,bq:e.bq}))}else if(t.b.b){if(t.b.b.b)return p(w,g$);var o=t.b,c=o.a;return p(D(c),g$)}else return p(w,g$)},Up=n(ir,n(ir,Yo(ne),ik),H$),Wp=l(function(e,r){return Q(ck(r),e)>0?n(Wp,e,Up(r).b):r}),qp=l(function(e,r){var a=Up(r);if(a.a.$){var c=a.a;return r}else{var t=a.a.a,o=a.b;return Q(t.lj,e)<0?n(qp,e,o):r}}),Gp=60,uk=l(function(e,r){var a=r;return e(a)}),fk=l(function(e,r){var a=r;return n(uk,Jp,{bG:a.bG,bO:n(A,e,a.bO),bp:a.bp,bq:a.bq+1})}),$k=1,lk=l(function(e,r){var a=r,t=a.ki+e,o=t-$k;return{ki:t,gF:n(Wp,Gp,n(fk,{hB:e,lj:t},n(qp,o,a.gF)))}}),vk=l(function(e,r){return M(r,{dg:n(lk,e.hB,r.dg)})}),Np=function(e){var r=e.b;return Go(r).a},Zp=l(function(e,r){var a=Np(e.uE);return M(a,{ch:r.ch,n$:Gc(e.bH)})}),A$={$:2},Yp=function(e){var r=e.a;return re(r,A$)},m1=function(e){var r=e.a;return r.$===3},Vt=function(e){return Yp(e)||m1(e)},Xp={$:13},sk=l(function(e,r){return e}),Qp="play-scrollport",dk=function(e){var r=S(function(o,c,i){return n(Ft,sk(Xp),s(Ko,o,c,i))}),a=s(r,Qp,e.gw.bJ,e.gw.bW),t=n(G,function(o){return s(r,"measure-frame--"+o.rF,o.t7.bJ,o.t7.bW)},e.dC);return Pa(n(A,a,t))},bk={$:4},h1=l(function(e,r){return{$:1,a:e,b:r}}),fY=0,Kp={$:0},B$={$:1},ac=function(e){return{$:3,a:e}},$Y=1,fi=l(function(e,r){return{$:0,a:e,b:r}}),pk={$:2},mk=l(function(e,r){return{bJ:e,bQ:r}}),Ir=function(e){var r=e.a;return r},I$=l(function(e,r){var a=r.aD,t=function(u){return n(ce,0,n(se,function($){return $.dv},n(Ur,u,a)))},o=l(function(u,$){e:for(;;){if(Q(u,$)>-1)return u;if(Q(e,t((u+$)/2|0))<1){var v=u,d=(u+$)/2|0;u=v,$=d;continue e}else{var v=((u+$)/2|0)+1,d=$;u=v,$=d;continue e}}}),c=Ir(a),i=n(o,0,c);return i?re(i,c)?c-1:Q(e-t(i-1),t(i)-e)<1?i-1:i:0}),xu=l(function(e,r){var a=e.a,t=e.b,o=r.aD,c=r.gB,i=a?n(ce,c,n(se,function($){return $.dv},n(Ur,a-1,o))):c,u=n(ce,c,n(se,function($){return $.dv},n(Ur,t,o)));return p(i,u)}),Pn={nX:100,oP:24,iz:100,iM:400,iN:900,pe:4},la=l(function(e,r){return r/Pn.iN*(e.bQ-e.bJ)}),ju=S(function(e,r,a){var t=r.a,o=r.b,c=function(R){return n(la,e,R.hv-R.kK)},i=n(xu,p(1,Ir(a.aD)-2),a),u=i.a,$=i.b,v=n(xu,p(o.c$+1,o.cT-1),a),d=v.a,b=v.b,h=n(xu,p(o.c$,o.cT),a),g=h.a,y=h.b;if(t.$)if(t.a){var L=t.a,x=t.b,B=s(er,d,$,y+c(x));return p(p(g,o.c$),p(B,n(I$,B,a)))}else{var _=t.a,x=t.b,T=s(er,u,b,g+c(x));return p(p(T,n(I$,T,a)+1),p(y,o.cT))}else return p(p(g,o.c$),p(y,o.cT))}),va=lh,hk=U(function(e,r,a,t){var o=e.n1,c=e.oT,i=e.oS,u=t.bQ-t.bJ,$=a-r,v=n(qe,$,n(Le,Pn.nX,u*n(va,1.002,c))),d=i*.001*v,b=t.bJ+o*u-o*v,h=b+v,g=h+d,y=b+d,_=Q(y,r)<0?p(r,r+v):Q(g,a)>0?p(a-v,a):p(y,g),x=_.a,T=_.b;return{bJ:x,bQ:T}}),em=l(function(e,r){var a=p(e,r);e:for(;;)switch(a.a.$){case 2:var t=a.a;return B$;case 3:var o=a.a;return pk;case 4:var c=a.a;return z3;case 0:var i=a.a.a,u=p(0,Ir(i.aD)-1),$=u.a,v=u.b,d=n(xu,p($,v),i),b=d.a,h=d.b;return ac({cp:w,d_:i,bo:n(fi,Kp,{cT:v-1,c$:1}),a9:n(mk,b,h)});case 1:if(a.b.$===3){var g=a.a.a,y=a.b.a,_=p(0,Ir(y.d_.aD)-1),$=_.a,v=_.b,x=n(xu,p($,v),y.d_),T=x.a,L=x.b,B=C(hk,g,T,L,y.a9);return ac(M(y,{a9:B}))}else break e;case 5:if(a.b.$===3){var R=a.a.a.fP,y=a.b.a,V=y.bo,W=V.b;return ac(M(y,{bo:n(fi,n(h1,0,{hv:R,kK:R}),W)}))}else break e;case 6:if(a.b.$===3){var R=a.a.a.fP,y=a.b.a,Y=y.bo,W=Y.b;return ac(M(y,{bo:n(fi,n(h1,1,{hv:R,kK:R}),W)}))}else break e;case 7:if(a.b.$===3){var R=a.a.a.fP,y=a.b.a,oe=y.bo;if(oe.a.$===1){var $e=oe.a,pe=$e.a,we=$e.b,W=oe.b;return ac(M(y,{bo:n(fi,n(h1,pe,M(we,{hv:R})),W)}))}else return r}else break e;case 8:if(a.b.$===3){var Ae=a.a,y=a.b.a,Re=y.bo;if(Re.a.$===1){var rr=Re.a,K=s(ju,y.a9,y.bo,y.d_),Je=K.a,ar=Je.b,nr=K.b,Dr=nr.b;return ac(M(y,{bo:n(fi,Kp,{cT:Dr,c$:ar})}))}else return r}else break e;default:if(a.b.$===3){var Ke=a.a.a,y=a.b.a;return ac(M(y,{cp:Ke}))}else break e}return r}),gk=em(bk),g1={$:2},yk=function(e){return{$:1,a:e}},E$=function(e){return{$:0,a:e}},rm=function(e){return{$:1,a:e}},go=function(e){return{$:0,a:e}},ku=12,F$=72,yo=function(e){switch(e){case 0:return{pH:E$(F$),pJ:go(ku)};case 1:return{pH:E$(F$+44),pJ:go(ku+44)};case 2:return{pH:rm(12),pJ:go(ku)};case 3:return{pH:g1,pJ:go(100)};case 4:return{pH:g1,pJ:yk(40)};case 5:return{pH:E$(F$),pJ:go(ku)};case 6:return{pH:g1,pJ:go(80)};default:return{pH:E$(F$),pJ:go(ku)}}},y1=function(e){return e.$===3},_k=l(function(e,r){if(e.$)return r;var a=e.a;return M(r,{aN:n(A,a,n(Ar,r$(a),r.aN))})}),am=function(e){return{pH:e.tL.pH+.5*e.bT.va,pJ:-e.tL.pJ+.5*e.bT.rW}},nm=l(function(e,r){var a=am(e);return{pH:r.hr.pH+(a.pH-r.hO.pH),pJ:r.hr.pJ+(a.pJ-r.hO.pJ)}}),tm=l(function(e,r){var a="-titlebar",t="draggable-panel-",o="-no-drag",c=function(i){e:for(;;)if(i.b){var u=i.a,$=i.b;if(n(pn,t,u)&&n(U2,o,u)){if(e.je)return w;var v=$;i=v;continue e}else{if(n(pn,t,u)&&n(k3,a,u))return D(n(j3,Aa(a),n(Ba,Aa(t),u)));var v=$;i=v;continue e}}else return w};return c(r)}),Ck=function(e){return n(tm,{je:!0},e)},Pk=function(e){return n(tm,{je:!1},e)},Sk=l(function(e,r){switch(r.$){case 0:var a=r.a;return a;case 1:var a=r.a;return e-a;default:return e/2}}),xk=l(function(e,r){if(r.$){var a=r.a;return e-a}else{var a=r.a;return a}}),V$=12,om=S(function(e,r,a){var t=V$-r,o=e-V$-r;return Q(o,t)<1?t:s(er,t,o,a)}),jk=S(function(e,r,a){return{pH:s(om,e.bT.va,n(Sk,e.bT.va,r.pH),a.pH),pJ:s(om,e.bT.rW,n(xk,e.bT.rW,r.pJ),a.pJ)}}),kk=S(function(e,r,a){return n(ce,e,n(se,v$,jr(n(Ar,function(t){var o=t.a;return re(o,r)},a.c_))))}),wk={pH:0,pJ:0},cm=U(function(e,r,a,t){return s(jk,e,r,s(kk,wk,a,t))}),Tk=S(function(e,r,a){return n(A,p(e,r),n(Ar,function(t){var o=t.a;return!re(o,e)},a))}),im=S(function(e,r,a){var t=a,o=t.ey;if(o.$===1)if(e.tL.jz){var c=function(g){return n(ea,function(y){return n(se,It(y),r(y))},n(ea,t.r1,g(e.tL.rg)))},i=n(_k,n(se,An,c(Pk)),t),u=c(Ck);if(u.$)return i;var $=u.a,v=$.a,d=$.b;return M(i,{ey:D({hr:C(cm,e,d,v,i),hO:am(e),bI:v})})}else return a;else{var b=o.a;if(e.tL.sg)return a;var h=n(nm,e,b);return M(t,{ey:w,c_:s(Tk,b.bI,h,t.c_)})}}),Lk=l(function(e,r){var a=n(ea,function(c){var i=c.kT-e.hB;return i<=0?w:D(M(c,{kT:i}))},r.en),t=s(im,e,n(ir,D,yo),r.f),o=y1(r.aO)&&!n(Wr,3,t)?gk(r.aO):r.aO;return M(r,{en:a,f:t,aO:o})}),wu=12,um=function(e){return{pH:rm(wu),pJ:go(wu+e*40)}},Mk=l(function(e,r){return n(se,um,n(p$,function(a){return re(a.bI,r)},e))}),fm=function(e){return ne},R$=l(function(e,r){if(r.$===-2)return ut;var a=r.a,t=r.b,o=r.c,c=r.d,i=r.e;return E(Ee,a,t,n(e,t,o),n(R$,e,c),n(R$,e,i))}),zk=l(function(e,r){var a=gn(n(G,function(i){return p(p1(i).bI,i)},r)),t=n(R$,l(function(i,u){return p1(u).bf}),a),o=n(kr,function(i){var u=i.a,$=i.b;return n(pu,u,e)?w:D($)},ln(a)),c=n(kr,function(i){var u=i.a,$=i.b;return n(pu,u,a)?w:D({bI:u,bf:$})},ln(e));return{su:t,uK:o,uL:c}}),Dk=function(e){return e.fg&&!e.pC},Hk=At("assetsUnload",yn(function(e){return ho(f([p("id",Hr(e.bI)),p("instanceId",Hr(e.gf)),p("kind",Hr(e.bf))]))})),Ak=l(function(e,r){return{bI:r.bI,gf:e,bf:r.bf}}),Bk=l(function(e,r){return Hk(n(G,Ak(e),r))}),Ik=E0(function(e,r,a,t,o,c,i,u,$){var v=n(Xe,u,$.cY);if(v.$)return $;var d=v.a;if(Dk(d))return $;var b=d.fQ+r.g.hB,h=yu({fQ:b,ch:d.ch,aJ:o,bH:D(a),bI:d.bI,g:n(b1,c,r.g),nQ:d.nQ,n$:Gc(a),tl:k$(d),aP:d.aP,cF:t,pC:d.pC,pL:w$(a)}),g=s(fm,"play:onTick",s(e.ba.bl,h,r.S,Rn(a)),d.bK),y=g.a,_=g.b,x=g.c,T=s(Gv,re(i,D(u)),_,{cX:$.cn,jS:d.ch}),L=C(e.aE,h,r.S,Rn(a),y),B=n(zk,d.hw,L),R=tr(B.uK)?fe:n(Rp,u,B.uK),V=tr(B.uL)?fe:n(Bk,u,B.uL),W=C(e.ba.cu,h,r.S,Rn(a),y),Y=s(im,h,Mk(W),d.im);return M($,{cP:n(A,R,n(A,V,n(A,n(Jc,Zo(u),T.hn),$.cP))),cU:X($.cU,x),cn:T.cX,cY:s($r,u,M(d,{fQ:b,ch:T.jS,hw:B.su,bK:y,im:Y}),$.cY)})}),Ek=function(e){var r=e.c8;if(r.$){var t=e.jt;if(t.$)return w;var o=t.a;return n(No,o,e.aY)?e.jt:w}else{var a=r.a;return D(a)}},$m=function(e){return{$:3,a:e}},lm=function(e){var r=e.b;return Go(r).a.fQ},Fk=function(e){var r=e;return M(r,{aU:n(qe,r.mf-1,r.aU+1)})},Vk=function(e){if(e.$){var a=e.a;return gu(M(a,{aU:n(qe,Ir(a.eN)-1,a.aU+1)}))}else{var r=e.a;return Nc(Fk(r))}},Rk=function(e){var r=e;return r.aU},vm=function(e){if(e.$){var a=e.a;return a.aU}else{var r=e.a;return Rk(r)}},Ok=function(e){var r=e;return r.mf},sm=function(e){if(e.$){var a=e.a;return Ir(a.eN)}else{var r=e.a;return Ok(r)}},Jk=function(e){return re(vm(e),sm(e)-1)},Uk=function(e){var r=e.a,a=e.b;return Jk(a)?w:D(n(Za,r,Vk(a)))},_1=V7,dm=H7,Tu=U(function(e,r,a,t){var o=qo&r>>>e;if(Q(o,it(t))>-1){if(e===5)return n(_1,Ac(a),t);var c=Bc(C(Tu,e-Hn,r,a,Vo));return n(_1,c,t)}else{var i=n(su,o,t);if(i.$){var c=Bc(C(Tu,e-Hn,r,a,dm(i)));return s(ii,o,c,t)}else{var u=i.a,c=Bc(C(Tu,e-Hn,r,a,u));return s(ii,o,c,t)}}}),C1=l(function(e,r){var a=r.a,t=r.b,o=r.c,c=r.d,i=it(c),u=it(e),$=a+(u-i);if(re(u,Jr)){var v=Q($>>>Hn,1<<t)>0;if(v){var d=t+Hn,b=C(Tu,d,a,e,dm(Bc(o)));return C(io,$,d,b,Vo)}else return C(io,$,t,C(Tu,t,a,e,o),Vo)}else return C(io,$,t,o,e)}),Lu=l(function(e,r){var a=r.d;return n(C1,n(_1,e,a),r)}),Wk=l(function(e,r){var a=r;return Q(a.mf,a.cN)<0?M(a,{mf:a.mf+1,aU:a.mf,eN:s(ui,n(Kr,a.cN,a.ds+a.mf),e,a.eN)}):M(a,{aU:a.cN-1,eN:s(ui,a.ds,e,a.eN),ds:n(Kr,a.cN,a.ds+1)})}),qk=l(function(e,r){if(r.$){var t=r.a;return gu(M(t,{aU:Ir(t.eN),eN:n(Lu,e,t.eN)}))}else{var a=r.a;return Nc(n(Wk,e,a))}}),bm=l(function(e,r){return M(r,{dC:e.dC,fQ:r.fQ+e.hB,eu:e.eu,ev:e.ev,ew:e.ew,hB:e.hB,eJ:e.eJ,rx:e.rx,hW:e.hW,gw:e.gw,tB:e.tB,tL:e.tL,bT:e.bT,fk:e.fk,ea:e.ea,fB:e.fB})}),Gk=S(function(e,r,a){var t=a.a,o=a.b;switch(t.$){case 2:return p(a,fe);case 3:var c=t.a.le;return p((Q(c+r.hB,lm(a))>0?n(je,Uk,ce(n(Za,A$,o))):ne)(n(Za,$m({le:c+r.hB}),o)),fe);case 1:var i=Go(o),v=i.a,d=i.b,b=n(bm,r,v),u=n(e,b,d),g=u.a,y=u.b;return p(n(Za,Zv,n(qk,p(b,g),o)),y);default:var $=Go(o),v=$.a,d=$.b,b=n(bm,r,v),h=n(e,b,d),g=h.a,y=h.b;return p(n(Za,hu,n(Tp,p(b,g),o)),y)}}),Nk=S(function(e,r,a){var t=mp({ky:r.tq,kP:u1(a.aY),ad:r.tB,vb:r.bT}),o=Ek({c8:t.c8,jt:a.aJ,aY:a.aY}),c=n(vk,r,a.bH),i=l(function(g,y){var _=t,x=M(y,{g:r}),T=d1(c),L=s(me,ua(Ik,e,x,c,_,o,T,jr(a.aY)),{cP:P,cU:P,cn:x.ch,cY:x.cY},a.aY),B=s($$,e,L.cU,x.S),R=B.a,V=B.b;return p(M(x,{ch:L.cn,cY:L.cY,S:R}),Pa(n(A,V,L.cP)))}),u=s(Gk,i,r,a.uE),$=u.a,v=u.b,d=n(Lk,n(Zp,M(a,{uE:$}),qc($)),c),b=(function(){var g=d.lx;return M(d,{lx:M(g,{rv:w})})})(),h=Vt($)?dk(Np($)):fe;return p(M(a,{aJ:o,bH:b,uE:$}),Pa(f([v,h])))}),lY=1,vY=0,Mu=function(e){var r=e;return M(r,{dM:!1})},Zk=function(e){var r=e;return M(r,{bm:Mu(r.bm)})},Yk=function(e){var r=e;return M(r,{bm:Mu(r.bm)})},pm=function(e){return{$:14,a:e}},mm="play-command-palette",P1={fR:mm,e5:320,kJ:"Type a command\u2026",d6:pm,va:{sJ:400,u6:50}},hm=3,Xk=l(function(e,r){return!y1(e)&&y1(r)}),Qk=function(e){switch(e){case 0:return 1;case 1:return 2;default:return 0}},Kk=Ry("focus"),gm=function(e){return e.fR+"-search"},zu=l(function(e,r){var a=r,t=n(ce,0,n(ea,function(c){return n(m$,c,a.aV)},a.eT)),o=n(Z3,e,t);return p(M(a,{dM:!0,b5:o,az:t}),Pa(f([n(Ft,function(c){return e.d6(Ea)},Kk(gm(e))),n(Ft,function(c){return e.d6(Ea)},s(Ko,Qo(e),0,o))])))}),ew=l(function(e,r){var a=r,t=n(zu,Qc(e),n(bu,D(a.cQ),a.bm)),o=t.a,c=t.b;return p(M(a,{bm:o}),c)}),rw=S(function(e,r,a){var t=a,o=n(zu,Kc(e),n(bu,Uv(r),t.bm)),c=o.a,i=o.b;return p(M(t,{bm:c}),i)}),aw=l1,S1={$:2},ym=function(e){return{$:1,a:e}},nw={$:3},x1=function(e){return{$:0,a:e}},j1=l(function(e,r){return e<0?w:jr(n(lt,e,r))}),tw=l(function(e,r){e:for(;;){var a=p(e,r);if(a.a.b)if(a.b.b){var t=a.a,o=t.a,c=t.b,i=a.b,u=i.a,$=i.b;if(re(o,u)){var v=c,d=$;e=v,r=d;continue e}else{var v=e,d=$;e=v,r=d;continue e}}else return!1;else return!0}}),ow=U(function(e,r,a,t){return{lQ:r,mT:e,oy:a,oz:t}}),cw=2,iw=nh,uw=12,fw=-3,$w=-1,lw=-1,k1=16,nc=-n(va,2,30),vw=Te(function(e,r,a,t,o){var c=E(iw,ow,r,a,t,o),i={fV:P,e_:0,hX:nc,hY:nc,hZ:nc,go:P},u=e.nd?lw:fw,$=l(function(d,b){var h=d.oz,g=d.oy,y=d.lQ,_=d.mT,x=re(_,e.on)?e.nc?b.e_*$w+k1+y*cw:b.e_?n(Le,b.hZ+k1+y,b.hY+k1+uw):nc:nc,T=n(Le,x,b.hX+u);return{fV:n(A,x,b.fV),e_:b.e_+1,hX:T,hY:g,hZ:h,go:n(A,T,b.go)}}),v=s(me,$,i,c);return p(Ve(v.fV),Ve(v.go))}),sw=function(e){return s(me,l(function(r,a){return r}),nc,e)},dw=S(function(e,r,a){e:for(;;){if(r<=0)return e;var t=n(A,a,e),o=r-1,c=a;e=t,r=o,a=c;continue e}}),bw=l(function(e,r){return s(dw,P,e,r)}),pw=S(function(e,r,a){var t=xr(e),o=xr(r),c=n(bw,o,nc),i=n(Na,It,e),u=s(me,l(function(v,d){var b=v.a,h=v.b,g=d.a,y=d.b;return E(vw,{nc:!b,nd:re(b,t-1),on:h},r,a,g,y)}),p(c,c),i),$=u.b;return sw($)}),mw=l(function(e,r){var a=r;if(Jo(e))return D(0);var t=n(G,Hv,Wc(e));return n(tw,t,a.j4)?D(s(pw,t,a.j4,a.lR)):w}),w1=function(e){return{$:8,a:e}},_m=l(function(e,r){var a=bo*r.az,t=a-r.b5,o=r.b5+e.e5-(a+bo);if(t<0)return n(Ft,function(i){return e.d6(w1(a))},s(Ko,Qo(e),0,a));if(o<0){var c=r.b5-o;return n(Ft,function(i){return e.d6(w1(c))},s(Ko,Qo(e),0,c))}else return fe}),hw=oh,T1=S(function(e,r,a){var t=a;switch(r.$){case 0:var o=r.a,c=Jo(o)?n(G,An,t.iq):n(G,v$,n(hw,l(function(x,T){var L=x.a,B=T.a;return n(gv,B,L)}),n(kr,function(x){var T=x.a,L=x.b;return n(se,function(B){return p(B,T)},n(mw,o,L))},t.iq)));return F(M(t,{aV:c,b5:0,iE:o,az:0}),n(Ft,function(x){return e.d6(Ea)},s(Ko,Qo(e),0,0)),n(se,x1,jr(c)));case 1:var g=n(Le,0,t.az-1),i=M(t,{az:g});return F(i,n(_m,e,i),n(se,x1,n(j1,g,t.aV)));case 2:var g=n(qe,xr(t.aV)-1,t.az+1),i=M(t,{az:g});return F(i,n(_m,e,i),n(se,x1,n(j1,g,t.aV)));case 3:var u=n(j1,t.az,t.aV);if(u.$===1)return F(M(t,{dM:!1}),fe,D(S1));var $=u.a;return F(M(t,{eT:D($),dM:!1}),fe,D(ym($)));case 4:return F(M(t,{dM:!1}),fe,D(S1));case 10:var v=n(zu,e,t),d=v.a,b=v.b;return F(d,b,D(nw));case 5:var h=r.a;return F(M(t,{eT:D(h),dM:!1}),fe,D(ym(h)));case 6:var h=r.a,g=n(ce,t.az,n(m$,h,t.aV));return F(M(t,{az:g}),fe,w);case 7:return F(M(t,{dM:!1}),fe,D(S1));case 8:var y=r.a;return F(M(t,{b5:y}),fe,w);case 9:var _=r.a;return F(t,n(Ft,function(x){return e.d6(Ea)},s(Ko,Qo(e),0,t.b5+_)),w);default:return F(t,fe,w)}}),gw=S(function(e,r,a){var t=a;if(r.$===1){var o=r.a;return p(M(t,{dX:o}),fe)}else{var c=r.a,i=s(T1,Qc(e),c,t.bm),u=i.a,$=i.b,v=i.c,d=(function(){e:for(;;){if(v.$)break e;switch(v.a.$){case 1:var b=v.a.a;return b;case 0:var b=v.a.a;return b;default:break e}}return t.cQ})();return p(M(t,{cQ:d,bm:u}),$)}}),yw=function(e){var r=e;return tr(r.q)?A3(e):H3(e)},Du=function(e){var r=e;return 1+xr(r.o)+xr(r.q)},_w=function(e){return n(st,Du(e)-1,e)},Cw=function(e){var r=e,a=r.o;if(a.b){var t=a.a,o=a.b;return{q:n(A,r.fT,r.q),o,fT:t}}else return r},Pw=function(e){var r=e;return tr(r.o)?_w(e):Cw(e)},Cm=S(function(e,r,a){var t=e(a.c4);return F(M(a,{c4:t}),n(Yv,dt(t),r),fe)}),Sw=U(function(e,r,a,t){var o=t;switch(r.$){case 1:var c=r.a,i=n(ce,o.c4,n(B3,c,o.c4));return F(M(o,{c4:i}),n(Yv,c,a),fe);case 2:return s(Cm,Pw,a,o);case 3:return s(Cm,yw,a,o);default:var u=r.a,$=s(T1,Kc(e),u,o.bm),v=$.a,d=$.b,b=$.c,h=(function(){if(b.$)return a;switch(b.a.$){case 1:var g=b.a.a;return n(Xv,g,a);case 0:var g=b.a.a;return n(Xv,g,a);case 2:var y=b.a;return a;default:var _=b.a;return a}})();return F(M(o,{bm:v}),h,d)}}),Fa=function(e){return{$:1,a:e}},L1=function(e){return{$:2,a:e}},Hu=function(e){return{$:0,a:e}},Au={$:1},Pm={$:3},xw=500,jw=200,kw=l(function(e,r){var a=p(r,e);if(a.a.$)switch(a.b.$){case 0:var _=a.a.a,$=a.b,c=$.a,i=$.b,v=(function(){var W=_._;switch(W.$){case 0:return Hu(0);case 1:return Au;case 2:return Au;default:return Pm}})();return Fa({bz:i,ex:c.ex,e$:c.e$,_:v,ud:c.ud});case 1:var _=a.a.a,d=a.b,b=_._;switch(b.$){case 0:return mu;case 1:return Fa(M(_,{_:L1(0)}));case 2:return Fa(M(_,{_:L1(0)}));default:return mu}case 2:var _=a.a.a,h=a.b;return Fa(M(_,{_:Pm}));case 3:var _=a.a.a,g=a.b,y=_._;switch(y.$){case 0:return Fa(M(_,{_:Hu(0)}));case 1:return Fa(M(_,{_:Au}));case 2:return Fa(M(_,{_:Au}));default:return Fa(M(_,{_:Hu(0)}))}default:var _=a.a.a,x=a.b.a,T=_._;switch(T.$){case 0:var L=T.a,B=L+x;return Q(B,xw)>0?Fa(M(_,{_:Au})):Fa(M(_,{_:Hu(B)}));case 2:var L=T.a,B=L+x;return Q(B,jw)>0?mu:Fa(M(_,{_:L1(B)}));case 1:return Fa(_);default:return Fa(_)}}else if(a.b.$){var u=a.a;return mu}else{var t=a.a,o=a.b,c=o.a,i=o.b;return Fa({bz:i,ex:c.ex,e$:c.e$,_:Hu(0),ud:c.ud})}}),ww=l(function(e,r){var a=r;return n(kw,e,a)}),Tw=S(function(e,r,a){var t=e.qF,o=e.gH;switch(r.$){case 0:var sr=r.a;if(o.co){var c=C(Sw,ei,sr,a.e,a.T),i=c.a,_=c.b,u=c.c;return F(M(a,{T:i,e:_}),u,w)}else return F(a,fe,w);case 1:var sr=r.a;if(o.dI){var $=s(gw,C$,sr,a.U),Je=$.a,v=$.b;return F(M(a,{U:Je}),v,w)}else return F(a,fe,w);case 2:var sr=r.a;return F(M(a,{c1:n(ww,sr,a.c1)}),fe,w);case 3:var sr=r.a,d=a.aO,b=n(em,sr,d),h=n(Xk,d,b),g=h?n(so,Fv(3),a.f):a.f;return F(M(a,{f:g,aO:b}),fe,w);case 4:if(o.co){var _=Qv(a.e),y=s(Nv,ei,_,a.T),pe=y.a,u=y.b;return F(M(a,{T:pe,e:_}),u,w)}else return F(a,fe,w);case 5:var _=r.a;if(!o.co||re(_,a.e))return F(a,fe,w);var x=s(Nv,ei,_,a.T),pe=x.a,u=x.b;return F(M(a,{T:pe,e:_}),u,w);case 6:var sr=r.a,T=n(Wr,6,a.f),L=n(Wr,5,a.f),B=n(so,sr,a.f),R=n(Wr,6,B),V=n(Wr,5,B),W=n(Wr,7,a.f),Y=n(Wr,7,B),oe=a.lx,$e=!L&&V?s(rw,ei,a.e,a.T):p(L&&!V?Yk(a.T):a.T,fe),pe=$e.a,we=$e.b,Ae=(function(){if(T&&!R)return p(M(oe,{R:Mu(oe.R)}),fe);if(!T&&R){var rt=n(zu,P1,oe.R),yr=rt.a,zt=rt.b;return p(M(oe,{R:yr}),zt)}else return p(oe,fe)})(),Re=Ae.a,rr=Ae.b,K=!W&&Y?n(ew,C$,a.U):p(W&&!Y?Zk(a.U):a.U,fe),Je=K.a,ar=K.b;return F(M(a,{lx:Re,U:Je,f:B,T:pe}),Pa(f([rr,we,ar])),w);case 7:return F(M(a,{pL:!a.pL}),fe,w);case 8:return F(M(a,{bP:!a.bP}),fe,w);case 9:var nr=r.a;return F(M(a,{en:D({bz:nr,ib:!t,kT:hm})}),fe,t?D(0):w);case 10:return F(a,fe,D(1));case 11:var Dr=r.a;return!o.dJ||re(Dr,a.n$)?F(a,fe,w):F(M(a,{n$:Dr}),fe,w);case 12:return o.dJ?F(M(a,{n$:Qk(a.n$)}),fe,w):F(a,fe,w);case 13:if(n(Pu,o,a.lx.R)){var T=n(Wr,6,a.f),B=n(so,aw(6),a.f),oe=a.lx,Ke=T?p(Mu(oe.R),fe):n(zu,P1,oe.R),i=Ke.a,u=Ke.b;return F(M(a,{lx:M(oe,{R:i}),f:B}),u,w)}else return F(a,fe,w);case 14:var sr=r.a;if(n(Pu,o,a.lx.R)){var oe=a.lx,Vr=s(T1,P1,sr,a.lx.R),i=Vr.a,u=Vr.b,oa=Vr.c,Wa=(function(){e:for(;;){if(oa.$)break e;switch(oa.a.$){case 1:return!0;case 2:var Dt=oa.a;return!0;default:break e}}return!1})(),tn=Wa?n(so,Ap(6),a.f):a.f,Re=(function(){if(!oa.$&&oa.a.$===1){var Dt=oa.a.a;return M(oe,{R:Mu(i),rv:D(p(Dt.iH,Dt.e$))})}else return M(oe,{R:i})})();return F(M(a,{lx:Re,f:tn}),u,w)}else return F(a,fe,w);default:return F(a,fe,w)}}),Lw=l(function(e,r){var a=r;return M(a,{aU:s(er,0,a.mf-1,e)})}),Mw=l(function(e,r){if(r.$){var t=r.a;return gu(M(t,{aU:s(er,0,Ir(t.eN)-1,e)}))}else{var a=r.a;return Nc(n(Lw,e,a))}}),zw=l(function(e,r){var a=r.b;return n(Za,A$,n(Mw,e,a))}),Dw=function(e){var r=e.b;return n(Za,A$,r)},Hw=function(e){var r=e.b;return n(Za,$m({le:lm(e)}),r)},Aw=l(function(e,r){switch(e.$){case 1:return Dw(r);case 2:return ep(r);case 3:return Hw(r);default:var a=e.a;return n(zw,a,r)}}),Bw=S(function(e,r,a){switch(r.$){case 0:var t=r.a;return s(Nk,e,t,a);case 1:var o=r.a,c=r.b;return C(jj,e,o,c,a);case 2:var d=r.a,i=r.b;return s(gj,d,i,a);case 3:var u=r.a;return s(bj,e,f([u]),a);case 4:var d=r.a,$=r.b;return s(tk,d,$,a);case 5:var d=r.a,v=r.b;return s(Wj,d,v,a);case 6:return p(a,fe);case 7:var d=r.a,b=r.b,h=r.c;return C(Kj,d,b,h,a);case 8:return p(M(a,{hs:w}),fe);case 9:var g=r.a,y=qc(a.uE).ch,_=!tr(n(Vp,e.aK,y)),x=s(Tw,{qF:_,gH:a.eA},g,a.bH),T=x.a,L=x.b,B=x.c,R=s(hj,e,B,M(a,{bH:T})),V=R.a,W=R.b;return p(V,Pa(f([n(Jc,f$,L),W])));case 10:var Y=r.a;return p(M(a,{uE:n(Aw,Y,a.uE)}),fe);case 11:return bp(a.bH)?p(M(a,{bH:kj(a.bH),uE:wj(a.uE)}),fe):p(M(a,{bH:q3(a.bH)}),fe);case 12:var oe=r.a;return s(Xj,e,oe,a);default:return p(a,fe)}}),Iw=At("setLocalStorage",function(e){return ho(f([p("key",Hr(e.jV)),p("value",Hr(e.u1))]))}),Ew=l(function(e,r){var a=r.a,t=r.b,o=n(b3,e,a),c=n(kr,function(i){var u=i.a,$=i.b;return re(n(vo,u,a.gj),D($))?w:D(Iw({jV:u,u1:$}))},o);return tr(c)?p(a,t):p(M(a,{gj:o}),Pa(n(A,t,c)))}),Fw=S(function(e,r,a){return n(Ew,e,s(Bw,e,r,a))}),Vw=function(e){return{$:12,a:e}},Rw={$:8},Sm=En,Ow=$n("button"),$i=$n("code"),Jw=$n("li"),O$=$n("p"),Uw=$n("ul"),Ww=function(e){if(e.$){var r=e.a;return n(In,f([n(ee,"margin-top","0.4rem")]),f([n(O$,f([n(ee,"margin","0 0 0.25rem 0")]),f([Nr("Two or more instances share the same id:")])),n(Uw,f([n(ee,"margin","0 0 0.5rem 0"),n(ee,"padding-left","1.25rem")]),n(G,function(a){return n(Jw,P,f([n($i,P,f([Nr(a)]))]))},r)),n(O$,f([n(ee,"margin","0")]),f([Nr("Each "),n($i,P,f([Nr("Play.instance")])),Nr(" needs a unique "),n($i,P,f([Nr("id")])),Nr(" \u2014 the runtime keys per-instance state, asset registries, and DOM nodes by it.")]))]))}else return n(In,f([n(ee,"margin-top","0.4rem")]),f([n(O$,f([n(ee,"margin","0")]),f([n($i,P,f([Nr("Play.multipage")])),Nr(" was called with an empty "),n($i,P,f([Nr("instances")])),Nr(" list. Add at least one "),n($i,P,f([Nr("Play.instance { ... }")])),Nr(" to the list.")]))]))},qw=$n("details"),xm=function(e){return{$:0,a:e}},J$=qb,Gw=l(function(e,r){return n(J$,e,xm(r))}),Nw=function(e){return n(Gw,"click",ae(e))},Zw=$n("strong"),Yw=$n("summary"),Xw=function(e){return n(In,f([n(ee,"position","fixed"),n(ee,"top","1rem"),n(ee,"left","50%"),n(ee,"transform","translateX(-50%)"),n(ee,"max-width","min(40rem, calc(100vw - 2rem))"),n(ee,"padding","1rem 2.75rem 1rem 1.25rem"),n(ee,"background","#fff5f5"),n(ee,"color","#742a2a"),n(ee,"border","1px solid #fc8181"),n(ee,"border-radius","0.5rem"),n(ee,"box-shadow","0 4px 24px rgba(0, 0, 0, 0.15)"),n(ee,"font-family","system-ui, -apple-system, sans-serif"),n(ee,"font-size","0.95rem"),n(ee,"line-height","1.5"),n(ee,"z-index","2147483647")]),f([n(Zw,f([n(ee,"display","block"),n(ee,"color","#c53030"),n(ee,"margin-bottom","0.35rem")]),f([Nr("This page has a configuration problem.")])),n(O$,f([n(ee,"margin","0 0 0.5rem 0")]),f([Nr("Please notify the page author so they can fix it.")])),n(qw,f([n(ee,"margin-top","0.5rem"),n(ee,"color","#742a2a"),n(ee,"font-size","0.88rem")]),f([n(Yw,f([n(ee,"cursor","pointer"),n(ee,"user-select","none")]),f([Nr("Technical detail (for the developer)")])),Ww(e)])),n(Ow,f([Nw(Rw),n(Sm,"aria-label","Dismiss"),n(ee,"position","absolute"),n(ee,"top","0.5rem"),n(ee,"right","0.5rem"),n(ee,"width","1.75rem"),n(ee,"height","1.75rem"),n(ee,"padding","0"),n(ee,"border","none"),n(ee,"background","transparent"),n(ee,"color","#742a2a"),n(ee,"cursor","pointer"),n(ee,"font-size","1.4rem"),n(ee,"line-height","1"),n(ee,"border-radius","0.25rem")]),f([Nr("\xD7")]))]))},Qw=function(e){switch(e){case 0:return 44;case 1:return 40;default:return 24}},Kw=function(e){var r=e;return Qw(r.cQ.aF)},eT=function(e){return Kw(e.U)},lr=l(function(e,r){return e(_n(r))}),M1="scrollbar-muted",jm=S(function(e,r,a){return{$:0,a:e,b:r,c:a}}),rT=jm,Jn=rT,z1=function(e){return{$:4,a:e}},km=function(e){return z1(t$(e))},te=km,Me=function(e){return"hsla("+(N(e.aX*360)+(", "+(N(e.a4*100)+("%, "+(N(e.D*100)+("%, "+(N(e.aT)+")")))))))},wm=l(function(e,r){var a=Me(n(lr,function(c){return c.jh},r)),t=Me(n(lr,function(c){return c.i0},r)),o=Me(n(lr,function(c){return c.bx},r));return s(Jn,"style",P,f([te(`
/* Firefox + recent standards-compliant browsers */
`+(e+(`* {
  scrollbar-width: thin;
  scrollbar-color: `+(o+(` transparent;
}
`+(e+("."+(M1+(` {
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
`+(e+("."+(M1+(`::-webkit-scrollbar-thumb {
  background-color: `+(a+(`;
}
`+(e+("."+(M1+(`::-webkit-scrollbar-thumb:hover {
  background-color: `+(t+`;
}
`))))))))))))))))))))))))))))))))))))]))}),Tm=function(e){return n(wm,"",e)},aT=l(function(e,r){return n(Gb,e,Hr(r))}),Lm=aT("id"),nT=S(function(e,r,a){return s($r,e,{fg:r.fg,pC:r.pC},a)}),Mm=Qg,zm=Mm,Dm=S(function(e,r,a){return{$:2,a:e,b:r,c:a}}),tT=U(function(e,r,a,t){return{$:3,a:e,b:r,c:a,d:t}}),Hm=U(function(e,r,a,t){return{$:1,a:e,b:r,c:a,d:t}}),Rt=S(function(e,r,a){return{$:0,a:e,b:r,c:a}}),oT=cy,U$=l(function(e,r){var a=r.a,t=r.b,o=r.c;return s(Rt,n(oT,e,a),t,o)}),Bu=l(function(e,r){switch(r.$){case 0:var t=r.a,o=r.b,c=r.c;return s(jm,t,n(G,U$(e),o),n(G,Bu(e),c));case 1:var a=r.a,t=r.b,o=r.c,c=r.d;return C(Hm,a,t,n(G,U$(e),o),n(G,Bu(e),c));case 2:var t=r.a,o=r.b,c=r.c;return s(Dm,t,n(G,U$(e),o),n(G,function(u){var $=u.a,v=u.b;return p($,n(Bu,e,v))},c));case 3:var a=r.a,t=r.b,o=r.c,c=r.d;return C(tT,a,t,n(G,U$(e),o),n(G,function(u){var $=u.a,v=u.b;return p($,n(Bu,e,v))},c));default:var i=r.a;return z1(n(Mm,e,i))}}),tc=Bu,O=Jn("div"),Am=l(function(e,r){return s(Rt,n(_v,e,r),!1,"")}),Ot=l(function(e,r){return n(Am,e,Hr(r))}),bt=Ot("id"),cT=function(e){return X(pp,e)},Bm=function(e){return{$:0,a:e}},sY=ne,z=l(function(e,r){return Bm(e+(":"+r))}),ge=l(function(e,r){return n(z,e,r.u1)}),wr=ge("cursor"),iT=function(e){var r=e;return n(se,function(a){return a.bI},r.ey)},D1=l(function(e,r){return!n(d$,n(ir,Wv,e),r)}),uT=l(function(e,r){var a=r.a,t=r.b;switch(e.$){case 0:var o=e.a,$=o.c;return tr($)?p(a,t):p(a,n(A,e,t));case 1:var c=e.b;return n(D1,function(d){var b=d.c;return tr(b)},c)?p(a,t):p(a,n(A,e,t));case 2:var i=e.b;return tr(i)?p(a,t):p(a,n(A,e,t));case 3:return p(a,n(A,e,t));case 4:var $=e.a;return tr($)?p(a,t):p(a,n(A,e,t));case 5:var $=e.a;return tr($)?p(a,t):p(a,n(A,e,t));case 6:var u=e.a;return Jo(u.qS)?p(a,t):p(s($r,u.sV,u.qS,a),t);case 7:var $=e.a;return tr($)?p(a,t):p(a,n(A,e,t));case 8:var $=e.a;return tr($)?p(a,t):p(a,n(A,e,t));default:var v=e.a;return n(D1,function(d){var b=d.b;return tr(b)},v)?p(a,t):p(a,n(A,e,t))}}),Im=function(e){return{$:6,a:e}},fT=l(function(e,r){return n(Mv,n(G,function(a){var t=a.a,o=a.b;return Im({qS:o,sV:t})},ln(e)),r)}),$T=function(e){var r=s(dn,uT,p(He,P),e),a=r.a,t=r.b;return n(fT,a,t)},lT=function(e){var r=e.qT,a=e.n2,t=e.m$,o=e.l3;return{l3:o,qT:$T(r),m$:t,n2:a}},vT=function(e){return n(ce,"",n(se,function(r){return'@charset "'+(r+'"')},e))},sT=U(function(e,r,a,t){e:for(;;)if(a.b)if(a.b.b){var o=a.a,c=a.b,i=e,u=r,$=c,v=t+(e(o)+(r+""));e=i,r=u,a=$,t=v;continue e}else{var o=a.a;return t+(e(o)+"")}else return t}),xa=S(function(e,r,a){return C(sT,e,r,a,"")}),Em=function(e){return"("+(e.mC+(n(ce,"",n(se,vC(": "),e.u1))+")"))},dT=function(e){switch(e){case 0:return"print";case 1:return"screen";default:return"speech"}},Fm=function(e){var r=S(function(c,i,u){return c+(" "+n(Or," and ",n(A,dT(i),n(G,Em,u))))});switch(e.$){case 0:var t=e.a;return s(xa,Em," and ",t);case 1:var a=e.a,t=e.b;return s(r,"only",a,t);case 2:var a=e.a,t=e.b;return s(r,"not",a,t);default:var o=e.a;return o}},bT=l(function(e,r){return'@import "'+(e+(Fm(r)+'"'))}),pT=function(e){var r=e.a,a=e.b;return s(xa,bT(r),`
`,a)},mT=function(e){var r=e.a,a=e.b;return"@namespace "+(r+('"'+(a+'"')))},hT=function(e){return s(xa,function(r){var a=r;return a+";"},"",e)},gT=Dh,yT=function(e){var r=e;return"::"+r},_T=function(e){switch(e){case 0:return"+";case 1:return"~";case 2:return">";default:return""}},H1=function(e){switch(e.$){case 0:var r=e.a;return"."+r;case 1:var r=e.a;return"#"+r;case 2:var r=e.a;return":"+r;default:var r=e.a;return"["+(r+"]")}},Vm=function(e){switch(e.$){case 0:var r=e.a,a=e.b;return X(r,s(xa,H1,"",a));case 1:var a=e.a;return tr(a)?"*":s(xa,H1,"",a);default:var r=e.a,a=e.b;return X(r,s(xa,H1,"",a))}},CT=function(e){var r=e.a,a=e.b;return _T(r)+(" "+Vm(a))},PT=function(e){var r=e.a,a=e.b,t=e.c,o=n(A,Vm(r),n(G,CT,a)),c=n(ce,"",n(se,yT,t));return n(gT,n(Or," ",o),c)},Rm=function(e){var r=e.a,a=e.b,t=e.c,o=s(xa,PT,",",n(A,r,a));return o+("{"+(hT(t)+"}"))},ST=function(e){switch(e.$){case 0:var r=e.a;return Rm(r);case 1:var a=e.a,t=e.b,o=s(xa,Fm,", ",a),c=s(xa,Rm,`
`,t);return"@media "+(o+("{"+(c+"}")));case 2:return"TODO";case 3:return"TODO";case 4:return"TODO";case 5:return"TODO";case 6:var i=e.a.qS,u=e.a.sV;return"@keyframes "+(u+("{"+(i+"}")));case 7:return"TODO";case 8:return"TODO";default:return"TODO"}},xT=function(e){var r=e.qT,a=e.n2,t=e.m$,o=e.l3;return vT(o)+(s(xa,pT,`
`,t)+(s(xa,mT,`
`,a)+(s(xa,ST,`
`,r)+"")))},Om=function(e){return{$:8,a:e}},Jm=function(e){return{$:5,a:e}},Um=function(e){return{$:4,a:e}},Iu=S(function(e,r,a){return{$:0,a:e,b:r,c:a}}),_o=S(function(e,r,a){return{$:0,a:e,b:r,c:a}}),Eu=function(e){return{$:0,a:e}},A1=l(function(e,r){return{$:2,a:e,b:r}}),Wm=function(e){return{$:7,a:e}},oc=l(function(e,r){return{$:1,a:e,b:r}}),B1=l(function(e,r){if(r.b)if(r.b.b){var t=r.a,o=r.b;return n(A,t,n(B1,e,o))}else{var a=r.a;return f([e(a)])}else return r}),qm=l(function(e,r){var a=r.a,t=r.b,o=r.c;return s(_o,a,t,X(o,f([e])))}),I1=l(function(e,r){if(r.b)if(r.b.b){var i=r.a,u=r.b;return n(A,i,n(I1,e,u))}else switch(r.a.$){case 0:var a=r.a.a;return f([Eu(n(qm,e,a))]);case 1:var t=r.a,o=t.a,c=t.b;return f([n(oc,o,n(B1,qm(e),c))]);default:return r}else return r}),Gm=l(function(e,r){if(r.b.b){var o=r.a,c=r.b,t=r.c,i=n(G,e,c),u=e(o);return f([s(_o,o,c,t),s(_o,u,i,P)])}else{var a=r.a,t=r.c;return f([s(_o,a,P,t),s(_o,e(a),P,P)])}}),jT=l(function(e,r){var a=r.a,t=r.b;return s(Iu,a,t,D(e))}),kT=l(function(e,r){return n(Gm,jT(e),r)}),Nm=l(function(e,r){return{$:2,a:e,b:r}}),wT=l(function(e,r){return{$:0,a:e,b:r}}),Zm=function(e){return{$:1,a:e}},Ym=l(function(e,r){switch(r.$){case 0:var a=r.a,o=r.b;return n(wT,a,X(o,f([e])));case 1:var o=r.a;return Zm(X(o,f([e])));default:var t=r.a,o=r.b;return n(Nm,t,X(o,f([e])))}}),Xm=l(function(e,r){if(r.b)if(r.b.b){var c=r.a,i=r.b;return n(A,c,n(Xm,e,i))}else{var a=r.a,t=a.a,o=a.b;return f([p(t,n(Ym,e,o))])}else return P}),TT=l(function(e,r){if(r.b.b){var o=r.a,c=r.b,t=r.c;return s(Iu,o,n(Xm,e,c),t)}else{var a=r.a,t=r.c;return s(Iu,n(Ym,e,a),P,t)}}),LT=l(function(e,r){return n(Gm,TT(e),r)}),E1=function(e){e:for(;;)if(e.b)if(e.a.$){var o=e.b,c=o;e=c;continue e}else{var r=e.a.a,a=r.a,t=r.b,o=e.b;return X(n(A,a,t),E1(o))}else return P},F1=Te(function(e,r,a,t,o){return{$:3,a:e,b:r,c:a,d:t,e:o}}),W$=l(function(e,r){e:for(;;)if(r.b){if(r.b.b)break e;switch(r.a.$){case 0:var R=r.a.a;return n(G,Eu,e(R));case 1:if(r.a.b.b)if(r.a.b.b.b){var c=r.a,t=c.a,i=c.b,V=i.a,W=i.b,u=n(W$,e,f([n(oc,t,W)]));if(u.b&&u.a.$===1&&!u.b.b){var $=u.a,v=$.a,d=$.b;return f([n(oc,v,n(A,V,d))])}else{var b=u;return b}}else{var a=r.a,t=a.a,o=a.b,R=o.a;return f([n(oc,t,e(R))])}else break e;case 2:var h=r.a,g=h.a,y=h.b;return f([n(A1,g,n(W$,e,y))]);case 3:var _=r.a,x=_.a,T=_.b,L=_.c,B=_.d,R=_.e;return n(G,C(F1,x,T,L,B),e(R));case 4:return r;case 5:return r;case 6:return r;case 7:return r;case 8:return r;default:return r}}else return r;var V=r.a,W=r.b;return n(A,V,n(W$,e,W))}),MT=function(e){e:for(;;)if(e.b)if(e.b.b){var a=e.b,t=a;e=t;continue e}else{var r=e.a;return D(r)}else return w},Qm=function(e){e:for(;;)if(e.b)if(e.b.b){var a=e.b,t=a;e=t;continue e}else{var r=e.a;return D(f([r]))}else return w},zT=function(e){e:for(;;)if(e.b){var r=e.a,a=e.b;if(r.$===1){var t=a;e=t;continue e}else return r}else return w},DT=function(e){return{$:9,a:e}},Km=function(e){var r=function(t){if(t.b){var o=t.a,c=t.b;return n(A,o,r(c))}else return P},a=r(e);return f([DT(a)])},HT=l(function(e,r){if(r.$)return r;var a=r.a;return n(oc,e,f([a]))}),q$=function(e){if(e.b){var r=e.a,a=e.b;return D(a)}else return w},e5=Te(function(e,r,a,t,o){if(o.$)return o;var c=o.a;return E(F1,e,r,a,t,c)}),r5=l(function(e,r){switch(r.$){case 0:var d=r.a;return n(oc,e,f([d]));case 1:var a=r.a,t=r.b;return n(oc,X(e,a),t);case 2:var o=r.a,c=r.b;return n(A1,o,n(G,r5(e),c));case 3:var i=r.a,u=r.b,$=r.c,v=r.d,d=r.e;return E(F1,i,u,$,v,d);case 4:return r;case 5:return r;case 6:return r;case 7:return r;case 8:return r;default:return r}}),V1=function(e){var r=e;return r},a5=U(function(e,r,a,t){var o=function(v){return n(ce,P,q$(v))},c=n(pt,r,n(ce,P,Qm(t))),i=(function(){var v=p(jr(c),MT(t));if(!v.a.$&&!v.b.$){var d=v.a.a,b=v.b.a;return X(n(vt,xr(t)-1,t),f([re(b,d)?b:d]))}else return t})(),u=function(v){return Fn(n(B1,pt(e),n(G,Vc,n(W$,a,v))))},$=n(ce,P,n(se,u,Qm(t)));return X(i,X(o($),o(c)))}),pt=l(function(e,r){if(e.b)switch(e.a.$){case 0:var a=e.a.a,V=e.b;return n(pt,V,n(I1,a,r));case 1:var t=e.a,o=t.a,L=t.b,V=e.b;return C(a5,L,V,LT(o),r);case 2:var c=e.a,i=c.a,u=c.b,V=e.b,$=l(function(W,Y){var oe=W.a,$e=W.b,pe=W.c,we=Y.a,Ae=Y.b,Re=Y.c;return s(Iu,oe,X($e,n(A,p(i,we),Ae)),zT(f([Re,pe])))}),v=function(W){switch(W.$){case 0:var Y=W.a,oe=Y.a,$e=Y.b,pe=Y.c,we=n(Vn,function(Wa){return n(G,$(Wa),n(A,oe,$e))},E1(r)),Ae=(function(){if(we.b){var Wa=we.a,tn=we.b;return f([Eu(s(_o,Wa,tn,P))])}else return P})();return n(pt,pe,Ae);case 1:var Re=W.a,rr=W.b;return n(n5,Re,rr);case 2:var K=W.a,Je=W.b;return n(t5,K,Je);case 3:var ar=W.a,nr=W.b,Dr=W.c,Ke=W.d,sr=W.e;return n(G,C(e5,ar,nr,Dr,Ke),G$(sr));case 4:var Vr=W.a;return f([Um(Vr)]);case 5:var Vr=W.a;return f([Jm(Vr)]);case 6:var Vr=W.a;return f([Wm(Vr)]);case 7:var Vr=W.a;return f([Om(Vr)]);default:var oa=W.a;return Km(oa)}};return Fn(X(f([n(pt,V,r)]),n(G,v,n(Vn,V1,u))));case 3:var d=e.a,b=d.a,L=d.b,V=e.b;return C(a5,L,V,kT(b),r);case 5:var h=e.a.a,V=e.b,g=F2(h),y="animation-name:"+g,_=n(pt,V,n(I1,y,r));return n(Mv,_,f([Im({qS:h,sV:g})]));case 4:var x=e.a,T=x.a,L=x.b,V=e.b,B=(function(){var W=E1(r);if(W.b){var Y=W.a,oe=W.b;return n(G,HT(T),n(pt,L,Vc(Eu(s(_o,Y,oe,P)))))}else return P})();return X(n(pt,V,r),B);default:var R=e.a.a,V=e.b;return n(pt,X(R,V),r)}else return r}),G$=function(e){var r=e.a,a=e.b,t=e.c;return n(pt,t,f([Eu(s(_o,r,a,P))]))},R1=function(e){if(e.b){var r=e.a,a=e.b;return X(AT(r),R1(a))}else return P},n5=l(function(e,r){var a=function(t){return n(G,r5(e),G$(t))};return n(Vn,a,r)}),t5=l(function(e,r){var a=R1(n(Vn,V1,r));return f([n(A1,e,a)])}),AT=function(e){switch(e.$){case 0:var v=e.a;return G$(v);case 1:var r=e.a,a=e.b;return n(n5,r,a);case 2:var t=e.a,o=e.b;return n(t5,t,o);case 3:var c=e.a,i=e.b,u=e.c,$=e.d,v=e.e;return n(G,C(e5,c,i,u,$),G$(v));case 4:var d=e.a;return f([Um(d)]);case 5:var d=e.a;return f([Jm(d)]);case 6:var d=e.a;return f([Wm(d)]);case 7:var d=e.a;return f([Om(d)]);default:var b=e.a;return Km(b)}},BT=function(e){var r=e.o$,a=e.n2,t=e.m$,o=e.l3,c=R1(n(Vn,V1,r));return{l3:o,qT:c,m$:t,n2:a}},o5=function(e){return xT(lT(BT(e)))},c5=function(e){return{l3:w,m$:P,n2:P,o$:e}},i5=z1,O1=function(e){return i5(s(Oo,"span",f([n(En,"style","display: none;"),n(En,"class","elm-css-style-wrapper")]),Vc(s(Oo,"style",P,Vc(t$(o5(c5(e))))))))},dY=0,u5={aU:0,u1:"grabbing"},bY=ne,IT=S(function(e,r,a){return{$:0,a:e,b:r,c:a}}),ET=function(e){return{$:0,a:e}},f5=l(function(e,r){var a=s(Iu,r,P,w);return f([ET(s(IT,a,P,e))])}),li=l(function(e,r){return n(f5,r,n(Nm,e,P))}),$5=function(e){var r=iT(e);return r.$?te(""):O1(f([n(li,"body *",f([wr(u5)]))]))},Sn={tF:0,u1:"absolute"},cc={jH:0,f5:0,u1:"row"},ra=M(cc,{u1:"column"}),FT=function(e){return{$:0,a:e}},VT=Zm(f([FT(Sv)])),l5=function(e){if(e.b){var r=e;return o5(c5(f([n(f5,e,VT)])))}else return""},RT=function(e){var r=l5(e),a=n(En,"","");return s(Rt,a,!0,r)},I=RT,le=n(z,"display","flex"),_r=ge("flex-direction"),pY=0,he=function(e){return{dG:0,hV:0,dP:0,cZ:0,s6:0,ic:0,dm:e,fv:"",g0:0,u1:Ie(e)}},Jt={ba:0,p$:1300,r0:1100,sN:1400,ok:100,pl:1500,c1:1200},or=ge("position"),mY=0,Fu=S(function(e,r,a){return{lw:0,lY:0,eH:0,mI:0,gl:0,e0:0,di:0,e1:0,e2:0,dO:0,dP:0,cZ:0,e3:0,dm:a,fr:0,fv:r,g0:e,u1:X(N(a),r)}}),k=n(Fu,0,"px"),mt=ge("right"),ja=ge("top"),hY=0,gY=1,v5=function(e){return e?"true":"false"},_e=function(e){return n(z,"background-color",e.u1)},s5=function(e){return{$:6,a:e}},Oe=s5,d5=U(function(e,r,a,t){return n(z,e,r.u1+(" "+(a.u1+(" "+t.u1))))}),ht=d5("border"),vr=ge("border-radius"),OT=Rr(function(e,r,a,t,o,c){return n(z,e,r.u1+(" "+(a.u1+(" "+(t.u1+(" "+(o.u1+(" "+c.u1))))))))}),Vu=OT("box-shadow"),yY=0,dr=function(e){return{dP:0,cZ:0,e3:0,s6:0,ic:0,dm:e,fv:"",g0:0,u1:N(e)}},aa=ge("opacity"),sa=ge("padding"),Ya={qE:l(function(e,r){return k(e+r)}),so:k(12),e7:k(8),tw:k(9999),kZ:k(4),vi:k(20)},mr=l(function(e,r){return M(r,{aT:e})}),xn={bA:0,d4:0,u1:"solid"},vi=l(function(e,r){return e+("("+(n(Or,",",r)+")"))}),na=dh,JT=function(e){return e*180/na},gt=function(e){return e*na/180},UT=l(function(e,r){var a=Da(e);return n(Kr,r,a)+e-a}),WT=S(function(e,r,a){var t=e/gt(60),o=(1-ze(2*a-1))*r,c=a-o/2,i=o*(1-ze(n(UT,t,2)-1)),u=t<0?F(0,0,0):t<1?F(o,i,0):t<2?F(i,o,0):t<3?F(0,o,i):t<4?F(0,i,o):t<5?F(i,0,o):t<6?F(o,0,i):F(0,0,0),$=u.a,v=u.b,d=u.c;return F($+c,v+c,d+c)}),qT=Te(function(e,r,a,t,o){var c=s(WT,JT(r),a,t),i=c.a,u=c.b,$=c.c;return{aT:o,p8:Da($),l7:0,rO:Da(u),tO:Da(i),u1:e}}),b5=function(e){return N(e*100)+"%"},GT=U(function(e,r,a,t){var o=f([N(e),b5(r),b5(a),N(t)]),c=n(vi,"hsla",o);return E(qT,c,e,r,a,t)}),cr=function(e){return C(GT,e.aX*360,e.a4,e.D,e.aT)},si={aT:1,aX:0,D:1,a4:0},ue={gl:0,e0:0,di:0,e1:0,e2:0,dO:0,dP:0,s6:0,dm:0,il:0,fv:"",g0:0,u1:"0"},p5=S(function(e,r,a){var t=e.jy,o=e.dX,c=cr(n(mr,.08,si)),i=cr(n(mr,.25,$o)),u=cr(n(mr,.18,si));return n(O,X(r,f([I(f([le,(function(){return _r(o===1?ra:cc)})(),n(z,"gap","3px"),sa(k(3)),vr(n(Ya.qE,36/2,3)),_e(c),s(ht,k(1),xn,u),n(z,"backdrop-filter","blur(14px) saturate(160%)"),n(z,"-webkit-backdrop-filter","blur(14px) saturate(160%)"),E(Vu,ue,k(6),k(18),k(-6),i),n(z,"pointer-events","auto"),t?aa(dr(.4)):Oe(P)]))])),a)}),NT=l(function(e,r){return{$:1,a:e,b:r}}),ZT=function(e){return{$:2,a:e}},J1=function(e){return NT(ZT(e))},di=J1("active"),ic=l(function(e,r){return Bm(e+(":"+r))}),N$=S(function(e,r,a){e:for(;;)switch(a.$){case 0:var t=a.a,o=n(ce,"",jr(n(Dn,":",t)));return n(ic,r,o);case 1:var c=a.a;return n(ic,r,"elm-css-error-cannot-apply-"+(e+"-with-inapplicable-Style-for-selector"));case 2:var i=a.a;return n(ic,r,"elm-css-error-cannot-apply-"+(e+"-with-inapplicable-Style-for-combinator"));case 3:var u=a.a;return n(ic,r,"elm-css-error-cannot-apply-"+(e+"-with-inapplicable-Style-for-pseudo-element setter"));case 4:return n(ic,r,"elm-css-error-cannot-apply-"+(e+"-with-inapplicable-Style-for-media-query"));case 5:return n(ic,r,"elm-css-error-cannot-apply-"+(e+"-with-inapplicable-Style-for-keyframes"));default:if(a.a.b)if(a.a.b.b){var g=a.a,y=g.a,_=g.b,d=e,b=r,h=s5(_);e=d,r=b,a=h;continue e}else{var $=a.a,v=$.a,d=e,b=r,h=v;e=d,r=b,a=h;continue e}else return n(ic,r,"elm-css-error-cannot-apply-"+(e+"-with-empty-Style"))}}),_Y=0,Z$=s(Fu,0,"",0),De=function(e){return s(N$,"alignItems","align-items",e(Z$))},Tr=l(function(e,r){return s(Rt,n(En,e,r),!1,"")}),Ge=Tr,CY=1,PY=ne,Y$=U(function(e,r,a,t){return{hf:e,hy:D(a),cR:r,iS:D(t)}}),U1=Y$(1),YT=ge("border-style"),SY=25,m5=Y$(25),Un=Jn("button"),de=ge("center"),be=function(e){return n(z,"color",e.u1)},xY=29,XT=Y$(29),X$=ge("border-bottom-left-radius"),Q$=ge("border-bottom-right-radius"),K$=ge("border-top-left-radius"),el=ge("border-top-right-radius"),jY=0,Ne=n(Fu,0,"%"),QT=l(function(e,r){var a=k(4),t=k(18);switch(r){case 0:return f([vr(Ne(50))]);case 2:return f([vr(a)]);case 1:return f(e===1?[K$(t),el(t),X$(a),Q$(a)]:[K$(t),X$(t),el(a),Q$(a)]);default:return f(e===1?[K$(a),el(a),X$(t),Q$(t)]:[K$(a),X$(a),el(t),Q$(t)])}}),W1=l(function(e,r){return n(Am,e,Op(r))}),bi=W1("disabled"),KT={$:3},rl=KT,Z=l(function(e,r){return cr(e(_n(r)))}),Ce=ge("height"),ka=J1("hover"),q1={bA:0,u1:"inset"},Lr=function(e){return s(N$,"justifyContent","justify-content",e(Z$))},ur={eg:0,lN:0,bA:0,aU:0,q0:0,r_:0,m3:0,jW:0,e2:0,dO:0,cZ:0,r:0,p:0,kh:0,il:0,tC:0,cv:0,iw:0,t6:0,fq:0,d5:0,bX:0,lk:0,uY:0,u1:"none"},G1=l(function(e,r){return s(Rt,n(J$,e,r),!1,"")}),Zr=l(function(e,r){return n(G1,e,xm(r))}),jn=function(e){return n(Zr,"click",ae(e))},Va=ge("outline"),da={aU:0,u1:"pointer"},Co={tF:0,u1:"relative"},kY=89,h5=Y$(89),eL=function(e){return tr(e)?{u1:"none"}:{u1:s(xa,function(r){return r.u1}," ",e)}},al=n(ir,ge("transform"),eL),rL=function(e){switch(e){case 0:return"background";case 1:return"background-color";case 2:return"background-position";case 3:return"background-size";case 4:return"border";case 5:return"border-bottom";case 6:return"border-bottom-color";case 7:return"border-bottom-left-radius";case 8:return"border-bottom-right-radius";case 9:return"border-bottom-width";case 10:return"border-color";case 11:return"border-left";case 12:return"border-left-color";case 13:return"border-left-width";case 14:return"border-radius";case 15:return"border-right";case 16:return"border-right-color";case 17:return"border-right-width";case 18:return"border-top";case 19:return"border-top-color";case 20:return"border-top-left-radius";case 21:return"border-top-right-radius";case 22:return"border-top-width";case 23:return"border-width";case 24:return"bottom";case 25:return"box-shadow";case 26:return"caret-color";case 27:return"clip";case 28:return"clip-path";case 29:return"color";case 30:return"column-count";case 31:return"column-gap";case 32:return"column-rule";case 33:return"column-rule-color";case 34:return"column-rule-width";case 35:return"column-width";case 36:return"columns";case 37:return"filter";case 38:return"flex";case 39:return"flex-basis";case 40:return"flex-grow";case 41:return"flex-shrink";case 42:return"font";case 43:return"font-size";case 44:return"font-size-adjust";case 45:return"font-stretch";case 46:return"font-variation-settings";case 47:return"font-weight";case 48:return"grid-column-gap";case 49:return"grid-gap";case 50:return"grid-row-gap";case 51:return"height";case 52:return"left";case 53:return"letter-spacing";case 54:return"line-height";case 55:return"margin";case 56:return"margin-bottom";case 57:return"margin-left";case 58:return"margin-right";case 59:return"margin-top";case 60:return"mask";case 61:return"mask-position";case 62:return"mask-size";case 63:return"max-height";case 64:return"max-width";case 65:return"min-height";case 66:return"min-width";case 67:return"object-position";case 68:return"offset";case 69:return"offset-anchor";case 70:return"offset-distance";case 71:return"offset-path";case 72:return"offset-rotate";case 73:return"opacity";case 74:return"order";case 75:return"outline";case 76:return"outline-color";case 77:return"outline-offset";case 78:return"outline-width";case 79:return"padding";case 80:return"padding-bottom";case 81:return"padding-left";case 82:return"padding-right";case 83:return"padding-top";case 84:return"right";case 85:return"tab-size";case 86:return"text-indent";case 87:return"text-shadow";case 88:return"top";case 89:return"transform";case 90:return"transform-origin";case 91:return"vertical-align";case 92:return"visibility";case 93:return"width";case 94:return"word-spacing";default:return"z-index"}},g5=function(e){return N(e)+"ms"},aL=function(e){switch(e.$){case 0:return"ease";case 1:return"linear";case 2:return"ease-in";case 3:return"ease-out";case 4:return"ease-in-out";case 5:return"step-start";case 6:return"step-end";default:var r=e.a,a=e.b,t=e.c,o=e.d;return"cubic-bezier("+(N(r)+(" , "+(N(a)+(" , "+(N(t)+(" , "+(N(o)+")")))))))}},nl=function(e){var r=s(bn,0,-1,s(me,l(function(a,t){var o=a.iS,c=a.hy,i=a.cR,u=a.hf;return t+(rL(u)+(" "+(g5(i)+(" "+(n(ce,"",n(se,g5,c))+(" "+(n(ce,"",n(se,aL,o))+",")))))))}),"",e));return n(z,"transition",r)},y5=l(function(e,r){return{lk:0,u1:n(vi,"translate",f([e.u1,r.u1]))}}),ye=ge("width"),_5=l(function(e,r){var a=du(e),t=cr(n(mr,a?.18:.64,$o)),o=cr(n(mr,a?.12:.48,$o)),c=cr(a?n(mr,.06,$o):n(mr,.1,si)),i=r.i9,u=i.a,$=i.b;return n(Un,X(f([jn(r.bj),bi(r.jy),n(Ge,"role",r.i8),n(Ge,u,$),n(Ge,"aria-label",r.e$),I(X(f([or(Co),ye(k(36)),Ce(k(36)),YT(ur),sa(ue),r.jy?n(z,"cursor","default"):wr(da),n(z,"background","transparent"),Va(ur),be(r.ng?n(Z,r.kk,e):n(Z,function(v){return v.lh},e)),nl(f([s(m5,70,0,rl),s(U1,70,0,rl),s(XT,70,0,rl)])),r.ng?Oe(f([E(Vu,q1,ue,k(4),ue,o),_e(o)])):r.jy?Oe(P):Oe(f([ka(f([_e(c),E(Vu,q1,ue,k(1),ue,c)]))])),r.jy?Oe(P):di(f([E(Vu,q1,ue,k(6),ue,t),_e(t)]))]),n(QT,r.dX,r.tF)))]),r.bs),f([n(O,f([I(f([ye(Ne(100)),Ce(Ne(100)),le,De(de),Lr(de),r.ng?al(f([n(y5,ue,k(1))])):Oe(P),r.jy?Oe(P):di(f([al(f([n(y5,ue,k(1.5))]))])),nl(f([s(h5,70,0,rl)]))]))]),f([n(O,f([I(f([ye(k(24)),Ce(k(24))]))]),f([r.ge]))]))]))}),tl=l(function(e,r){return s(p5,{jy:r.jy,dX:1},P,f([n(_5,e,{i8:"button",i9:p("aria-pressed",v5(r.jU)),jy:r.jy,ge:r.ge,ng:r.jU,e$:r.e$,bj:r.bj,kk:r.i1,dX:1,tF:0,bs:r.bs})]))}),pi=l(function(e,r){return n(tl,e,{i1:r.pg,jy:r.jy,ge:r.ge,jU:n(Wr,r.bI,r.bK),e$:r.e$,bj:r.d6(l1(r.bI)),bs:r.bs})}),nL=U(function(e,r,a,t){return n(pi,e,{jy:!1,ge:t.ge,bI:t.bI,e$:t.iT,bK:r,pg:t.pg,d6:a,bs:P})}),yt=ge("z-index"),tL=l(function(e,r){return n(O,f([I(f([or(Sn),ja(k(wu)),mt(k(wu)),le,_r(ra),n(z,"gap","6px"),n(z,"pointer-events",r.jP?"none":"auto"),yt(he(Jt.r0)),n(z,"transform",r.jP?"translateX(calc(100% + "+(N(wu)+"px))"):"translateX(0)"),n(z,"transition","transform 280ms cubic-bezier(0.2, 0.9, 0.25, 1)")]))]),n(G,s(nL,e,r.im,r.d6),r.cu))}),_t=ge("bottom"),ba=ge("left"),oL=function(e){return f([(function(){var r=e.pH;switch(r.$){case 0:var a=r.a;return ba(k(a));case 1:var a=r.a;return mt(k(a));default:return ba(Ne(50))}})(),(function(){var r=e.pJ;if(r.$){var a=r.a;return _t(k(a))}else{var a=r.a;return ja(k(a))}})()])},Ru={pP:0,aU:0,eH:0,hV:0,sk:0,e0:0,di:0,cZ:0,ff:0,cv:0,iO:0,fs:0,bX:0,u1:"auto"},Ct={fI:0,tF:0,iO:0,u1:"fixed"},C5=function(e){var r="blur("+(N(e)+"px) saturate(180%)");return Oe(f([n(z,"backdrop-filter",r),n(z,"-webkit-backdrop-filter",r)]))},P5={aU:0,u1:"grab"},Ut={bA:0,ff:0,u1:"hidden",g2:0},S5=l(function(e,r){return"draggable-panel-"+(e(r)+"-no-drag")}),Wt=ge("overflow"),cL=l(function(e,r){var a=(function(){var t=e.pH;return t.$===2?"calc(-50% + "+(N(r.pH)+"px)"):N(r.pH)+"px"})();return"translate("+(a+(", "+(N(r.pJ)+"px)")))}),Wn=ge("pointer-events"),iL=S(function(e,r,a){var t=a,o=C(cm,e,r.bz,r.bI,t),c=t.ey;if(c.$)return o;var i=c.a;return re(i.bI,r.bI)?n(nm,e,i):o}),x5=ge("box-shadow"),j5=Te(function(e,r,a,t,o){return n(z,e,r.u1+(" "+(a.u1+(" "+(t.u1+(" "+o.u1))))))}),uL=j5("box-shadow"),ol=U(function(e,r,a,t){return{aT:t,p8:a,l7:0,rO:r,tO:e,u1:n(vi,"rgba",X(n(G,Ie,f([e,r,a])),f([N(t)])))}}),cl={q9:x5(ur),ra:C(uL,ue,k(1),k(2),C(ol,0,0,0,.3)),mq:n(z,"box-shadow","0 2px 4px rgba(0, 0, 0, 0.35), 0 1px 2px rgba(0, 0, 0, 0.2)"),rb:n(z,"box-shadow","0 12px 24px -8px rgba(0, 0, 0, 0.55), 0 4px 8px -2px rgba(0, 0, 0, 0.4)"),rc:n(z,"box-shadow","0 28px 60px -20px rgba(0, 0, 0, 0.85), 0 8px 24px -8px rgba(0, 0, 0, 0.55)")},fL=l(function(e,r){return s(Rt,n(H2,e,r),!1,"")}),k5=fL,w5=48,$L={aU:0,u1:"default"},Po=ge("flex"),lL=ge("overflow-x"),T5=ge("overflow-y"),vL=S(function(e,r,a){return n(z,e,r.u1+(" "+a.u1))}),Mr=vL("padding"),sL=l(function(e,r){return n(O,f([I(f([Po(he(1)),T5(Ru),lL(Ru),n(Mr,k(16),k(16))]))]),f([n(O,f([bt(e),I(f([wr($L)]))]),f([r]))]))}),dL=function(e){return{$:3,a:e}},bL={pc:0,u1:"ellipsis"},N1=S(function(e,r,a){return Q(ze(a.D-r.D),e)>-1?a:r.D>.5?M(a,{D:s(er,0,1,r.D-e)}):M(a,{D:s(er,0,1,r.D+e)})}),hr=ge("flex-shrink"),uc=ge("letter-spacing"),Z1={f5:0,hL:0,u1:"nowrap",ed:0},il=ge("padding-left"),Y1=ge("padding-right"),pL=ge("text-overflow"),X1=ge("text-transform"),wY=0,mi=n(Fu,0,"em"),br=ge("font-size"),pa=function(e){var r=e.u1;return n(z,"font-weight",r)},kn=ge("line-height"),wn={hh:f([br(k(15)),pa(he(400)),kn(dr(1.55))]),qo:f([br(k(13)),pa(he(500)),kn(dr(1.3)),uc(mi(.04))]),q0:f([br(k(46)),pa(he(300)),kn(dr(1.05)),uc(mi(-.02))]),rT:f([br(k(16)),pa(he(650)),kn(dr(1.3))]),rU:f([br(k(30)),pa(he(550)),kn(dr(1.15)),uc(mi(-.01))]),e$:f([br(k(14)),pa(he(550)),kn(dr(1.35))]),iT:f([br(k(20)),pa(he(650)),kn(dr(1.25)),uc(mi(-.005))])},Q1={d5:0,u1:"uppercase"},fc=ge("border"),L5={l7:0,u1:"currentColor"},So=Tr("clip-rule"),Pe=Tr("d"),mL=function(e){var r=l5(e),a=n(En,"","");return s(Rt,a,!0,r)},qn=mL,Pt=Tr("fill"),hL=Hm,xo=hL("http://www.w3.org/2000/svg"),ul=xo("svg"),fl=Tr("viewBox"),gL=S(function(e,r,a){return s(ey,e,Nb(r),Zb(a))}),yL=S(function(e,r,a){return s(Rt,s(gL,e,r,a),!1,"")}),_L=n(yL,"http://www.w3.org/XML/1998/namespace","xml:space"),Se=ul(f([fl("0 0 24 24"),Pt("currentColor"),qn(f([ye(Ne(100)),Ce(Ne(100))])),_L("http://www.w3.org/2000/svg")])),jo=Tr("fill-rule"),xe=xo("path"),M5=Tr("transform"),Qe={pM:Se(f([n(xe,f([Pe("M2 13H8V21H2V13ZM9 3H15V21H9V3ZM16 8H22V21H16V8Z")]),P)])),p9:Se(f([n(xe,f([Pe("M12 11.3884C11.0942 9.62673 8.62833 6.34423 6.335 4.7259C4.13833 3.17506 3.30083 3.4434 2.75167 3.69256C2.11583 3.9784 2 4.95506 2 5.52839C2 6.10339 2.315 10.2367 2.52 10.9276C3.19917 13.2076 5.61417 13.9776 7.83917 13.7309C4.57917 14.2142 1.68333 15.4017 5.48083 19.6292C9.65833 23.9542 11.2058 18.7017 12 16.0392C12.7942 18.7017 13.7083 23.7651 18.4442 19.6292C22 16.0392 19.4208 14.2142 16.1608 13.7309C18.3858 13.9784 20.8008 13.2076 21.48 10.9276C21.685 10.2376 22 6.10256 22 5.52923C22 4.95423 21.8842 3.97839 21.2483 3.6909C20.6992 3.44256 19.8617 3.17423 17.665 4.72423C15.3717 6.34506 12.9058 9.62756 12 11.3884Z")]),P)])),qu:Se(f([n(xe,f([jo("evenodd"),So("evenodd"),Pe("M20.7071 5.29289C21.0976 5.68342 21.0976 6.31658 20.7071 6.70711L9.70711 17.7071C9.31658 18.0976 8.68342 18.0976 8.29289 17.7071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929C3.68342 10.9024 4.31658 10.9024 4.70711 11.2929L9 15.5858L19.2929 5.29289C19.6834 4.90237 20.3166 4.90237 20.7071 5.29289Z")]),P)])),qv:Se(f([n(xe,f([jo("evenodd"),So("evenodd"),Pe("M18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289Z")]),P)])),qw:Se(f([n(xe,f([M5("translate(24, 0) scale(-1, 1)"),jo("evenodd"),So("evenodd"),Pe("M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z")]),P)])),qx:Se(f([n(xe,f([jo("evenodd"),So("evenodd"),Pe("M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z")]),P)])),qy:Se(f([n(xe,f([jo("evenodd"),So("evenodd"),Pe("M5.29289 15.7071C4.90237 15.3166 4.90237 14.6834 5.29289 14.2929L11.2929 8.29289C11.6834 7.90237 12.3166 7.90237 12.7071 8.29289L18.7071 14.2929C19.0976 14.6834 19.0976 15.3166 18.7071 15.7071C18.3166 16.0976 17.6834 16.0976 17.2929 15.7071L12 10.4142L6.70711 15.7071C6.31658 16.0976 5.68342 16.0976 5.29289 15.7071Z")]),P)])),qC:Se(f([n(xe,f([Pe("M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z")]),P)])),qD:Se(f([n(xe,f([Pe("M4.00005 16H20V5H4.00005V16ZM13.0001 18V20H17.0001V22H7.00005V20H11.0001V18H2.99205C2.86065 17.9992 2.7307 17.9725 2.60965 17.9214C2.48861 17.8702 2.37885 17.7957 2.28668 17.702C2.19452 17.6084 2.12175 17.4975 2.07256 17.3756C2.02337 17.2538 1.99873 17.1234 2.00005 16.992V4.008C2.00005 3.451 2.45505 3 2.99205 3H21.008C21.556 3 22 3.449 22 4.007V16.992C22 17.549 21.545 18 21.008 18H13.0001Z")]),P)])),qO:Se(f([n(xe,f([Pe("M11.7143 9.78571L17.5 4L19.4286 5.92857L13.6429 11.7143L19.4286 17.5L17.5 19.4286L11.7143 13.6429L5.92857 19.4286L4 17.5L9.78571 11.7143L4 5.92857L5.92857 4L11.7143 9.78571Z")]),P)])),qZ:Se(f([n(xe,f([Pe("M4 6H20A2 2 0 0 1 22 8V16A2 2 0 0 1 20 18H4A2 2 0 0 1 2 16V8A2 2 0 0 1 4 6Z")]),P)])),q_:Se(f([n(xe,f([Pe("M9 2H15A2 2 0 0 1 17 4V20A2 2 0 0 1 15 22H9A2 2 0 0 1 7 20V4A2 2 0 0 1 9 2Z")]),P)])),q4:Se(f([n(xe,f([Pe("M11 3h2v7h3l-4 4-4-4h3z M4 17h16v3H4z")]),P)])),q5:Se(f([n(xe,f([Pe("M11 2h2v7h3l-4 4-4-4h3z M4 16h16v2H4z M7 19h10v2H7z")]),P)])),q8:Se(f([n(xe,f([Pe("M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z")]),P)])),rk:Se(f([n(xe,f([Pe("M7 3V6H3V8H7V11H9V3H7ZM11 8H21V6H11V8ZM17 13V16H21V18H17V21H15V13H17ZM13 18H3V16H13V18Z")]),P)])),rl:Se(f([n(xe,f([Pe("M8.58564 8.85449L3.63589 13.8042L8.83021 18.9985L9.99985 18.9978V18.9966H11.1714L14.9496 15.2184L8.58564 8.85449ZM9.99985 7.44027L16.3638 13.8042L19.1922 10.9758L12.8283 4.61185L9.99985 7.44027ZM13.9999 18.9966H20.9999V20.9966H11.9999L8.00229 20.9991L1.51457 14.5113C1.12405 14.1208 1.12405 13.4877 1.51457 13.0971L12.1212 2.49053C12.5117 2.1 13.1449 2.1 13.5354 2.49053L21.3136 10.2687C21.7041 10.6592 21.7041 11.2924 21.3136 11.6829L13.9999 18.9966Z")]),P)])),ry:Se(f([n(xe,f([Pe("M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h5.175q.4 0 .763.15t.637.425L12 6h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20z")]),P)])),rH:Se(f([n(xe,f([Pe("M8 3V5H4V9H2V3H8ZM2 21V15H4V19H8V21H2ZM22 21H16V19H20V15H22V21ZM22 9H20V5H16V3H22V9Z")]),P)])),rL:Se(f([n(xe,f([Pe("M20.0601 11.6104C20.0639 11.7454 20.0639 11.8804 20.0601 12.0154L21.4588 13.7629C21.5322 13.8547 21.583 13.9624 21.6071 14.0773C21.6312 14.1923 21.6279 14.3113 21.5976 14.4248C21.3679 15.2866 21.0249 16.1141 20.5776 16.8857C20.519 16.9867 20.4376 17.0726 20.34 17.1365C20.2423 17.2005 20.1311 17.2408 20.0151 17.2542L17.7914 17.5017C17.6989 17.5992 17.6051 17.6929 17.5101 17.7829L17.2476 20.0123C17.2341 20.1283 17.1937 20.2396 17.1295 20.3373C17.0654 20.435 16.9794 20.5163 16.8782 20.5748C16.1067 21.0217 15.2791 21.3641 14.4173 21.5929C14.3038 21.6232 14.1848 21.6265 14.0698 21.6024C13.9549 21.5783 13.8472 21.5275 13.7554 21.4542L12.0126 20.0629H11.6076L9.8601 21.4589C9.76835 21.5322 9.66065 21.583 9.54569 21.6071C9.43073 21.6312 9.31171 21.6279 9.19823 21.5976C8.33643 21.3679 7.5089 21.0249 6.73729 20.5776C6.63634 20.519 6.55046 20.4376 6.4865 20.34C6.42254 20.2423 6.38225 20.1311 6.36885 20.0151L6.12135 17.7876C6.02385 17.6945 5.9301 17.6007 5.8401 17.5064L3.61073 17.2504C3.49468 17.2369 3.38338 17.1965 3.28572 17.1324C3.18806 17.0682 3.10674 16.9822 3.04823 16.881C2.60136 16.1093 2.2587 15.2818 2.02916 14.4201C1.99897 14.3065 1.99589 14.1875 2.02015 14.0725C2.04441 13.9576 2.09535 13.8499 2.16885 13.7582L3.5601 12.0154V11.6104L2.16416 9.86292C2.09082 9.77116 2.04006 9.66347 2.01596 9.5485C1.99186 9.43354 1.9951 9.31452 2.02541 9.20104C2.25513 8.33924 2.59812 7.51172 3.04541 6.7401C3.10403 6.63915 3.18541 6.55328 3.28306 6.48931C3.38071 6.42535 3.49195 6.38507 3.60791 6.37167L5.83166 6.12417C5.92479 6.02667 6.01854 5.93292 6.11291 5.84292L6.3726 3.61354C6.3861 3.49749 6.42653 3.3862 6.49066 3.28854C6.55479 3.19088 6.64085 3.10955 6.74198 3.05104C7.51369 2.60418 8.3412 2.26151 9.20291 2.03198C9.31647 2.00179 9.43553 1.9987 9.55049 2.02296C9.66546 2.04723 9.77312 2.09816 9.86479 2.17167L11.6076 3.56292C11.7426 3.55917 11.8776 3.55917 12.0126 3.56292L13.7601 2.16417C13.8519 2.09082 13.9595 2.04006 14.0745 2.01596C14.1895 1.99186 14.3085 1.9951 14.422 2.02542C15.2839 2.25472 16.1115 2.59773 16.8829 3.04542C16.9839 3.10403 17.0697 3.18541 17.1337 3.28306C17.1977 3.38072 17.2379 3.49195 17.2513 3.60792L17.4988 5.83167C17.5963 5.92417 17.6901 6.01792 17.7801 6.11292L20.0095 6.37542C20.1255 6.38892 20.2368 6.42934 20.3345 6.49347C20.4321 6.5576 20.5135 6.64366 20.572 6.74479C21.0188 7.51651 21.3615 8.34402 21.591 9.20573C21.6212 9.31928 21.6243 9.43834 21.6001 9.55331C21.5758 9.66828 21.5249 9.77593 21.4513 9.8676L20.0601 11.6104ZM11.8101 8.06292C11.0684 8.06292 10.3434 8.28285 9.72671 8.6949C9.11003 9.10696 8.62938 9.69263 8.34555 10.3779C8.06172 11.0631 7.98746 11.8171 8.13216 12.5445C8.27685 13.2719 8.634 13.9401 9.15845 14.4646C9.6829 14.989 10.3511 15.3462 11.0785 15.4909C11.8059 15.6356 12.5599 15.5613 13.2452 15.2775C13.9304 14.9936 14.5161 14.513 14.9281 13.8963C15.3402 13.2796 15.5601 12.5546 15.5601 11.8129C15.5601 10.8184 15.165 9.86453 14.4618 9.16127C13.7585 8.458 12.8047 8.06292 11.8101 8.06292Z")]),P)])),rM:Se(f([n(xe,f([Pe("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),P)])),rV:Se(f([n(xe,f([Pe("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),P)])),rX:Se(f([n(xe,f([Pe("M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM13 13.3551V14H11V12.5C11 11.9477 11.4477 11.5 12 11.5C12.8284 11.5 13.5 10.8284 13.5 10C13.5 9.17157 12.8284 8.5 12 8.5C11.2723 8.5 10.6656 9.01823 10.5288 9.70577L8.56731 9.31346C8.88637 7.70919 10.302 6.5 12 6.5C13.933 6.5 15.5 8.067 15.5 10C15.5 11.5855 14.4457 12.9248 13 13.3551Z")]),P)])),rZ:Se(f([n(xe,f([Pe("M20 20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20ZM11 13V19H13V13H11Z")]),P)])),sl:Se(f([n(xe,f([Pe("M6 5C5.73478 5 5.48043 5.10536 5.29289 5.29289C5.10536 5.48043 5 5.73478 5 6V7C5 7.26522 5.10536 7.51957 5.29289 7.70711C5.48043 7.89464 5.73478 8 6 8H8C8.26522 8 8.51957 7.89464 8.70711 7.70711C8.89464 7.51957 9 7.26522 9 7V6C9 5.73478 8.89464 5.48043 8.70711 5.29289C8.51957 5.10536 8.26522 5 8 5H6ZM3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3H8C8.79565 3 9.55871 3.31607 10.1213 3.87868C10.6839 4.44129 11 5.20435 11 6V7C11 7.79565 10.6839 8.55871 10.1213 9.12132C9.55871 9.68393 8.79565 10 8 10H6C5.20435 10 4.44129 9.68393 3.87868 9.12132C3.31607 8.55871 3 7.79565 3 7V6C3 5.20435 3.31607 4.44129 3.87868 3.87868ZM16 5C15.7348 5 15.4804 5.10536 15.2929 5.29289C15.1054 5.48043 15 5.73478 15 6V9C15 9.26522 15.1054 9.51957 15.2929 9.70711C15.4804 9.89464 15.7348 10 16 10H18C18.2652 10 18.5196 9.89464 18.7071 9.70711C18.8946 9.51957 19 9.26522 19 9V6C19 5.73478 18.8946 5.48043 18.7071 5.29289C18.5196 5.10536 18.2652 5 18 5H16ZM13.8787 3.87868C14.4413 3.31607 15.2044 3 16 3H18C18.7956 3 19.5587 3.31607 20.1213 3.87868C20.6839 4.44129 21 5.20435 21 6V9C21 9.79565 20.6839 10.5587 20.1213 11.1213C19.5587 11.6839 18.7957 12 18 12H16C15.2043 12 14.4413 11.6839 13.8787 11.1213C13.3161 10.5587 13 9.79565 13 9V6C13 5.20435 13.3161 4.44129 13.8787 3.87868ZM6 14C5.73478 14 5.48043 14.1054 5.29289 14.2929C5.10536 14.4804 5 14.7348 5 15V18C5 18.2652 5.10536 18.5196 5.29289 18.7071C5.48043 18.8946 5.73478 19 6 19H8C8.26522 19 8.51957 18.8946 8.70711 18.7071C8.89464 18.5196 9 18.2652 9 18V15C9 14.7348 8.89464 14.4804 8.70711 14.2929C8.51957 14.1054 8.26522 14 8 14H6ZM3.87868 12.8787C4.44129 12.3161 5.20435 12 6 12H8C8.79565 12 9.55871 12.3161 10.1213 12.8787C10.6839 13.4413 11 14.2043 11 15V18C11 18.7957 10.6839 19.5587 10.1213 20.1213C9.55871 20.6839 8.79565 21 8 21H6C5.20435 21 4.44129 20.6839 3.87868 20.1213C3.31607 19.5587 3 18.7956 3 18V15C3 14.2044 3.31607 13.4413 3.87868 12.8787ZM16 16C15.7348 16 15.4804 16.1054 15.2929 16.2929C15.1054 16.4804 15 16.7348 15 17V18C15 18.2652 15.1054 18.5196 15.2929 18.7071C15.4804 18.8946 15.7348 19 16 19H18C18.2652 19 18.5196 18.8946 18.7071 18.7071C18.8946 18.5196 19 18.2652 19 18V17C19 16.7348 18.8946 16.4804 18.7071 16.2929C18.5196 16.1054 18.2652 16 18 16H16ZM13.8787 14.8787C14.4413 14.3161 15.2043 14 16 14H18C18.7957 14 19.5587 14.3161 20.1213 14.8787C20.6839 15.4413 21 16.2043 21 17V18C21 18.7957 20.6839 19.5587 20.1213 20.1213C19.5587 20.6839 18.7957 21 18 21H16C15.2043 21 14.4413 20.6839 13.8787 20.1213C13.3161 19.5587 13 18.7957 13 18V17C13 16.2043 13.3161 15.4413 13.8787 14.8787Z")]),P)])),sp:Se(f([n(xe,f([Pe("M9.97308 18H11V13H13V18H14.0269C14.1589 16.7984 14.7721 15.8065 15.7676 14.7226C15.8797 14.6006 16.5988 13.8564 16.6841 13.7501C17.5318 12.6931 18 11.385 18 10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10C6 11.3843 6.46774 12.6917 7.31462 13.7484C7.40004 13.855 8.12081 14.6012 8.23154 14.7218C9.22766 15.8064 9.84103 16.7984 9.97308 18ZM10 20V21H14V20H10ZM5.75395 14.9992C4.65645 13.6297 4 11.8915 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 11.8925 19.3428 13.6315 18.2443 15.0014C17.624 15.7748 16 17 16 18.5V21C16 22.1046 15.1046 23 14 23H10C8.89543 23 8 22.1046 8 21V18.5C8 17 6.37458 15.7736 5.75395 14.9992Z")]),P)])),sB:Se(f([n(xe,f([Pe("M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z")]),P)])),sQ:Se(f([n(xe,f([Pe("M12 22C17.523 22 22 17.523 22 12C22 11.537 21.306 11.46 21.067 11.857C20.5572 12.7013 19.862 13.4186 19.034 13.9545C18.206 14.4903 17.2669 14.8307 16.2878 14.9499C15.3088 15.0691 14.3154 14.9639 13.383 14.6423C12.4507 14.3207 11.6037 13.7911 10.9063 13.0937C10.2089 12.3963 9.67932 11.5493 9.35772 10.617C9.03613 9.68457 8.93093 8.69123 9.0501 7.71217C9.16926 6.73311 9.50967 5.794 10.0455 4.96599C10.5814 4.13797 11.2987 3.44275 12.143 2.933C12.54 2.693 12.463 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z")]),P)])),kx:Se(f([n(xe,f([Pe("M12 2C17.5222 2 22 5.97778 22 10.8889C22 13.9556 19.5111 16.4444 16.4444 16.4444H14.4778C13.5556 16.4444 12.8111 17.1889 12.8111 18.1111C12.8111 18.5333 12.9778 18.9222 13.2333 19.2111C13.5 19.5111 13.6667 19.9 13.6667 20.3333C13.6667 21.2556 12.9 22 12 22C6.47778 22 2 17.5222 2 12C2 6.47778 6.47778 2 12 2ZM7.5 12C8.32843 12 9 11.3284 9 10.5C9 9.67157 8.32843 9 7.5 9C6.67157 9 6 9.67157 6 10.5C6 11.3284 6.67157 12 7.5 12ZM16.5 12C17.3284 12 18 11.3284 18 10.5C18 9.67157 17.3284 9 16.5 9C15.6716 9 15 9.67157 15 10.5C15 11.3284 15.6716 12 16.5 12ZM12 9C12.8284 9 13.5 8.32843 13.5 7.5C13.5 6.67157 12.8284 6 12 6C11.1716 6 10.5 6.67157 10.5 7.5C10.5 8.32843 11.1716 9 12 9Z")]),P)])),ts:Se(f([n(xe,f([Pe("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),P)])),tt:Se(f([n(xe,f([Pe("M 18 2 L 15.585938 4.4140625 L 19.585938 8.4140625 L 22 6 L 18 2 z M 14.076172 5.9238281 L 3 17 L 3 21 L 7 21 L 18.076172 9.9238281 L 14.076172 5.9238281 z")]),P)])),tz:Se(f([n(xe,f([Pe("M7 5V19L18 12L7 5Z")]),P)])),tA:Se(f([n(xe,f([Pe("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),P)])),tB:Se(f([n(xe,f([Pe("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),P)])),tN:Se(f([n(xe,f([Pe("M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4Z")]),P)])),tP:Se(f([n(xe,f([Pe("M18.4 10.6C16.55 8.99 14.15 8 11.5 8C7.34001 8 3.76001 10.42 2.06001 13.93C1.74001 14.6 2.10001 15.4 2.81001 15.64C3.40001 15.84 4.04001 15.56 4.31001 15C5.61001 12.34 8.34001 10.5 11.5 10.5C13.45 10.5 15.23 11.22 16.62 12.38L14.71 14.29C14.08 14.92 14.52 16 15.41 16H21C21.55 16 22 15.55 22 15V9.41C22 8.52 20.92 8.07 20.29 8.7L18.4 10.6Z")]),P)])),tU:Se(f([n(xe,f([Pe("M7.20679 2.29279C7.39426 2.48031 7.49957 2.73462 7.49957 2.99979C7.49957 3.26495 7.39426 3.51926 7.20679 3.70679L5.41379 5.49979H13.2498C14.832 5.49979 16.3788 5.96898 17.6943 6.84803C19.0099 7.72708 20.0353 8.97651 20.6408 10.4383C21.2463 11.9001 21.4048 13.5087 21.0961 15.0605C20.7874 16.6124 20.0255 18.0378 18.9066 19.1566C17.7878 20.2755 16.3624 21.0374 14.8105 21.3461C13.2587 21.6548 11.6501 21.4963 10.1883 20.8908C8.72651 20.2853 7.47708 19.2599 6.59803 17.9443C5.71898 16.6288 5.24979 15.082 5.24979 13.4998C5.24979 13.2346 5.35514 12.9802 5.54268 12.7927C5.73022 12.6051 5.98457 12.4998 6.24979 12.4998C6.515 12.4998 6.76936 12.6051 6.95689 12.7927C7.14443 12.9802 7.24979 13.2346 7.24979 13.4998C7.24979 14.6865 7.60168 15.8465 8.26097 16.8332C8.92026 17.8199 9.85733 18.5889 10.9537 19.0431C12.05 19.4972 13.2564 19.616 14.4203 19.3845C15.5842 19.153 16.6533 18.5815 17.4924 17.7424C18.3315 16.9033 18.903 15.8342 19.1345 14.6703C19.366 13.5064 19.2472 12.3 18.7931 11.2037C18.3389 10.1073 17.5699 9.17026 16.5832 8.51097C15.5965 7.85168 14.4365 7.49979 13.2498 7.49979H5.41379L7.20679 9.29279C7.38894 9.48139 7.48974 9.73399 7.48746 9.99619C7.48518 10.2584 7.38001 10.5092 7.1946 10.6946C7.0092 10.88 6.75838 10.9852 6.49619 10.9875C6.23399 10.9897 5.98139 10.8889 5.79279 10.7068L2.29279 7.20679C2.10532 7.01926 2 6.76495 2 6.49979C2 6.23462 2.10532 5.98031 2.29279 5.79279L5.79279 2.29279C5.98031 2.10532 6.23462 2 6.49979 2C6.76495 2 7.01926 2.10532 7.20679 2.29279Z")]),P)])),tX:Se(f([n(xe,f([Pe("M11.308 2.057C11.867 1.5079 12.7733 1.5079 13.3323 2.057L22.441 11.0058C23 11.5549 23 12.4451 22.441 12.9942L13.3323 21.943C12.7733 22.4921 11.867 22.4921 11.308 21.943C10.7491 21.3938 10.7491 20.5035 11.308 19.9543L17.9734 13.4061H2.4313C1.6408 13.4061 1 12.7766 1 12C1 11.2234 1.6408 10.5938 2.4313 10.5938H17.9734L11.308 4.0456C10.7491 3.4965 10.7491 2.6061 11.308 2.057Z")]),P)])),t2:Se(f([n(xe,f([Pe("M21 7V19C21 19.55 20.8043 20.021 20.413 20.413C20.0217 20.805 19.5507 21.0007 19 21H5C4.45 21 3.97933 20.8043 3.588 20.413C3.19667 20.0217 3.00067 19.5507 3 19V5C3 4.45 3.196 3.97933 3.588 3.588C3.98 3.19667 4.45067 3.00067 5 3H17L21 7ZM12 18C12.8333 18 13.5417 17.7083 14.125 17.125C14.7083 16.5417 15 15.8333 15 15C15 14.1667 14.7083 13.4583 14.125 12.875C13.5417 12.2917 12.8333 12 12 12C11.1667 12 10.4583 12.2917 9.875 12.875C9.29167 13.4583 9 14.1667 9 15C9 15.8333 9.29167 16.5417 9.875 17.125C10.4583 17.7083 11.1667 18 12 18ZM6 10H15V6H6V10Z")]),P)])),uc:Se(f([n(xe,f([Pe("M13 14H11C7.54202 14 4.53953 15.9502 3.03239 18.8107C3.01093 18.5433 3 18.2729 3 18C3 12.4772 7.47715 8 13 8V3L23 11L13 19V14Z")]),P)])),ug:Se(f([n(xe,f([Pe("M6 2H18C18.5523 2 19 2.44772 19 3V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2ZM12 17C11.4477 17 11 17.4477 11 18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18C13 17.4477 12.5523 17 12 17Z")]),P)])),uj:Se(f([n(xe,f([Pe("M8.88889 16.0001H5C4.44772 16.0001 4 15.5524 4 15.0001V9.00007C4 8.44778 4.44772 8.00007 5 8.00007H8.88889L14.1834 3.66821C14.3971 3.49335 14.7121 3.52485 14.887 3.73857C14.9601 3.8279 15 3.93977 15 4.05519V19.9449C15 20.2211 14.7761 20.4449 14.5 20.4449C14.3846 20.4449 14.2727 20.405 14.1834 20.3319L8.88889 16.0001ZM18.8631 16.5911L17.4411 15.1691C18.3892 14.4376 19 13.2902 19 12.0001C19 10.5697 18.2493 9.31476 17.1203 8.60766L18.5589 7.16906C20.0396 8.26166 21 10.0187 21 12.0001C21 13.8422 20.1698 15.4905 18.8631 16.5911Z")]),P)])),up:Se(f([n(xe,f([jo("evenodd"),So("evenodd"),Pe("M8 3H16A5 5 0 0 1 21 8V16A5 5 0 0 1 16 21H8A5 5 0 0 1 3 16V8A5 5 0 0 1 8 3ZM9 6H15A3 3 0 0 1 18 9V15A3 3 0 0 1 15 18H9A3 3 0 0 1 6 15V9A3 3 0 0 1 9 6ZM9.5 12A2.5 2.5 0 1 0 14.5 12A2.5 2.5 0 1 0 9.5 12Z")]),P)])),us:Se(f([n(xe,f([Pe("M6 6H18V18H6Z")]),P)])),ux:Se(f([n(xe,f([Pe("M11.9989 19C12.2641 19 12.5185 19.1054 12.706 19.2929C12.8935 19.4804 12.9989 19.7348 12.9989 20V21C12.9989 21.2652 12.8935 21.5196 12.706 21.7071C12.5185 21.8946 12.2641 22 11.9989 22C11.7337 22 11.4793 21.8946 11.2918 21.7071C11.1042 21.5196 10.9989 21.2652 10.9989 21V20C10.9989 19.7348 11.1042 19.4804 11.2918 19.2929C11.4793 19.1054 11.7337 19 11.9989 19ZM18.3629 16.95L19.0699 17.657C19.252 17.8456 19.3528 18.0982 19.3506 18.3604C19.3483 18.6226 19.2431 18.8734 19.0577 19.0588C18.8723 19.2442 18.6215 19.3494 18.3593 19.3517C18.0971 19.354 17.8445 19.2532 17.6559 19.071L16.9489 18.364C16.7667 18.1754 16.6659 17.9228 16.6682 17.6606C16.6705 17.3984 16.7757 17.1476 16.9611 16.9622C17.1465 16.7768 17.3973 16.6716 17.6595 16.6693C17.9217 16.667 18.1743 16.7678 18.3629 16.95ZM5.63489 16.95C5.81485 16.7707 6.05633 16.6665 6.31028 16.6588C6.56423 16.651 6.81161 16.7402 7.00217 16.9082C7.19274 17.0763 7.3122 17.3106 7.33629 17.5635C7.36038 17.8164 7.2873 18.069 7.13189 18.27L7.04889 18.364L6.34189 19.071C6.16193 19.2503 5.92046 19.3545 5.66651 19.3622C5.41256 19.37 5.16518 19.2808 4.97461 19.1128C4.78405 18.9447 4.66459 18.7104 4.64049 18.4575C4.6164 18.2046 4.68948 17.952 4.84489 17.751L4.92789 17.657L5.63489 16.95ZM11.9989 6C13.5902 6 15.1163 6.63214 16.2415 7.75736C17.3668 8.88258 17.9989 10.4087 17.9989 12C17.9989 13.5913 17.3668 15.1174 16.2415 16.2426C15.1163 17.3679 13.5902 18 11.9989 18C10.4076 18 8.88147 17.3679 7.75625 16.2426C6.63103 15.1174 5.99889 13.5913 5.99889 12C5.99889 10.4087 6.63103 8.88258 7.75625 7.75736C8.88147 6.63214 10.4076 6 11.9989 6ZM3.99889 11C4.25377 11.0003 4.49892 11.0979 4.68426 11.2728C4.8696 11.4478 4.98113 11.687 4.99606 11.9414C5.011 12.1958 4.92822 12.4464 4.76463 12.6418C4.60104 12.8373 4.36899 12.9629 4.11589 12.993L3.99889 13H2.99889C2.74401 12.9997 2.49886 12.9021 2.31352 12.7272C2.12819 12.5522 2.01666 12.313 2.00172 12.0586C1.98678 11.8042 2.06957 11.5536 2.23316 11.3582C2.39675 11.1627 2.6288 11.0371 2.88189 11.007L2.99889 11H3.99889ZM20.9989 11C21.2641 11 21.5185 11.1054 21.706 11.2929C21.8935 11.4804 21.9989 11.7348 21.9989 12C21.9989 12.2652 21.8935 12.5196 21.706 12.7071C21.5185 12.8946 21.2641 13 20.9989 13H19.9989C19.7337 13 19.4793 12.8946 19.2918 12.7071C19.1042 12.5196 18.9989 12.2652 18.9989 12C18.9989 11.7348 19.1042 11.4804 19.2918 11.2929C19.4793 11.1054 19.7337 11 19.9989 11H20.9989ZM4.92789 4.929C5.10008 4.75682 5.32918 4.65339 5.57221 4.63811C5.81524 4.62283 6.05549 4.69675 6.24789 4.846L6.34189 4.929L7.04889 5.636C7.22824 5.81596 7.33237 6.05743 7.34012 6.31138C7.34787 6.56533 7.25868 6.81271 7.09064 7.00328C6.92261 7.19384 6.68834 7.31331 6.43542 7.3374C6.18249 7.36149 5.92988 7.28841 5.72889 7.133L5.63489 7.05L4.92789 6.343C4.74042 6.15547 4.63511 5.90116 4.63511 5.636C4.63511 5.37084 4.74042 5.11653 4.92789 4.929ZM19.0699 4.929C19.2574 5.11653 19.3627 5.37084 19.3627 5.636C19.3627 5.90116 19.2574 6.15547 19.0699 6.343L18.3629 7.05C18.2706 7.14551 18.1603 7.22169 18.0383 7.2741C17.9163 7.32651 17.7851 7.3541 17.6523 7.35525C17.5195 7.3564 17.3878 7.3311 17.2649 7.28082C17.142 7.23054 17.0304 7.15629 16.9365 7.0624C16.8426 6.9685 16.7684 6.85685 16.7181 6.73395C16.6678 6.61106 16.6425 6.47938 16.6436 6.3466C16.6448 6.21382 16.6724 6.0826 16.7248 5.9606C16.7772 5.83859 16.8534 5.72825 16.9489 5.636L17.6559 4.929C17.8434 4.74153 18.0977 4.63621 18.3629 4.63621C18.6281 4.63621 18.8824 4.74153 19.0699 4.929ZM11.9989 2C12.2641 2 12.5185 2.10536 12.706 2.29289C12.8935 2.48043 12.9989 2.73478 12.9989 3V4C12.9989 4.26522 12.8935 4.51957 12.706 4.70711C12.5185 4.89464 12.2641 5 11.9989 5C11.7337 5 11.4793 4.89464 11.2918 4.70711C11.1042 4.51957 10.9989 4.26522 10.9989 4V3C10.9989 2.73478 11.1042 2.48043 11.2918 2.29289C11.4793 2.10536 11.7337 2 11.9989 2Z")]),P)])),uE:Se(f([n(xe,f([jo("evenodd"),So("evenodd"),Pe("M10.8293 13C10.9398 12.6872 11 12.3506 11 12C11 10.3431 9.65685 9 8 9C6.34315 9 5 10.3431 5 12C5 13.6569 6.34315 15 8 15H16C17.6569 15 19 13.6569 19 12C19 10.3431 17.6569 9 16 9C14.3431 9 13 10.3431 13 12C13 12.3506 13.0602 12.6872 13.1707 13H10.8293ZM3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13ZM8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12C9 12.5523 8.55228 13 8 13Z")]),P)])),uO:Se(f([n(xe,f([jo("evenodd"),So("evenodd"),Pe("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),P)])),uQ:Se(f([n(xe,f([Pe("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),P)])),uT:Se(f([n(xe,f([Pe("M12.5 8C9.85 8 7.45 8.99 5.6 10.6L3.71 8.71C3.08 8.08 2 8.52 2 9.41V15C2 15.55 2.45 16 3 16H8.59C9.48 16 9.93 14.92 9.3 14.29L7.39 12.38C8.78 11.22 10.55 10.5 12.51 10.5C15.67 10.5 18.4 12.34 19.7 15C19.97 15.56 20.61 15.84 21.2 15.64C21.91 15.41 22.27 14.6 21.95 13.92C20.23 10.42 16.65 8 12.5 8Z")]),P)])),uZ:Se(f([n(xe,f([Pe("M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z")]),P)])),u8:Se(f([n(xe,f([Pe("M4.47 21H19.53C21.07 21 22.03 19.33 21.26 18L13.73 4.98999C12.96 3.65999 11.04 3.65999 10.27 4.98999L2.74 18C1.97 19.33 2.93 21 4.47 21ZM12 14C11.45 14 11 13.55 11 13V11C11 10.45 11.45 9.99999 12 9.99999C12.55 9.99999 13 10.45 13 11V13C13 13.55 12.55 14 12 14ZM13 18H11V16H13V18Z")]),P)])),vr:Se(f([n(xe,f([Pe("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),P)])),vx:Se(f([n(xe,f([Pe("M9.31445 17.5469L8.43555 18.4355L12 22L15.5645 18.4355L14.6855 17.5469L12 20.2324L9.31445 17.5469ZM14.6855 6.45312L15.5645 5.56445L12 2L8.43555 5.56445L9.31445 6.45312L12 3.76758L14.6855 6.45312ZM6.45312 14.6855L3.76758 12L6.45312 9.31445L5.56445 8.43555L2 12L5.56445 15.5645L6.45312 14.6855ZM22 12L18.4355 8.43555L17.5469 9.31445L20.2324 12L17.5469 14.6855L18.4355 15.5645L22 12ZM8.25 15.75H15.75V8.25H8.25V15.75ZM9.5 9.5H14.5V14.5H9.5V9.5Z")]),P)]))},ko={l7:0,u1:"transparent"},CL=l(function(e,r){return n(Un,f([bt(r),jn(e.d6(Hp(e.bI))),n(Ge,"aria-label","Close"),I(f([ye(k(32)),Ce(k(32)),sa(k(5)),vr(Ne(50)),fc(ue),_e(ko),be(L5),wr(da),le,De(de),Lr(de),Va(ur),aa(dr(.9)),n(z,"transition","opacity 120ms cubic-bezier(0.33, 1, 0.68, 1), background-color 120ms cubic-bezier(0.33, 1, 0.68, 1)"),ka(f([aa(dr(1)),_e(C(ol,255,255,255,.18))]))]))]),f([Qe.qO]))}),z5=xo("circle"),D5=Tr("cx"),H5=Tr("cy"),A5=Tr("r"),PL=n(ul,f([fl("0 0 24 24"),Pt("currentColor"),qn(f([ye(k(18)),Ce(k(18))]))]),n(G,function(e){var r=e.a,a=e.b;return n(z5,f([D5(Ie(r)),H5(Ie(a)),A5("2")]),P)},f([p(9,5),p(15,5),p(9,12),p(15,12),p(9,19),p(15,19)]))),$l=ge("white-space"),SL=S(function(e,r,a){var t=n(Z,function(o){return s(N1,.45,o.F,r.pg(o))},e);return n(O,f([I(f([le,De(de),hr(he(0)),Ce(k(w5)),il(k(16)),Y1(k(8)),n(z,"gap","12px"),be(t)])),n(Zr,"dblclick",ae(r.d6(dL(r.bI))))]),f([PL,n(O,f([I(f([Po(he(1)),$l(Z1),Wt(Ut),pL(bL),be(t),Oe(wn.rT),uc(k(.6)),X1(Q1)]))]),f([te(r.iT)])),n(CL,r,a)]))}),wo=S(function(e,r,a){if(n(Wr,a.bI,a.bK)){var t=n(Z,n(je,a.pg,mr(.18)),e),o=n(Z,n(je,a.pg,mr(.35)),e),c=s(iL,r,a,a.bK),i=(function(){var g=(function(){var y=a.bz.pJ;if(y.$){var _=y.a;return _}else{var _=y.a;return _}})();return"calc(100vh - "+(N(g+V$)+"px)")})(),u=a.bK,$=u,v=n(S5,$.r2,a.bI)+"-body",d=n(S5,$.r2,a.bI),b=$.r2(a.bI),h="draggable-panel-"+(b+"-titlebar");return n(O,f([I(f([_e(t),C5(16),vr(n(Ya.qE,w5/2,1)),s(ht,k(1),xn,o),cl.rb,or(Ct),Oe(oL(a.bz)),n(z,"width","-webkit-fit-content"),n(z,"width","fit-content"),n(z,"max-width","calc(100vw - "+(N(2*V$)+"px)")),n(z,"max-height",i),le,_r(ra),Wt(Ut),yt(he(Jt.ok+n(qe,999,a.a7-1-a.d$))),Wn(Ru),n(z,"will-change","transform"),n(z,"user-select","none"),n(z,"-webkit-user-select","none"),wr(P5)])),bt(h),n(k5,"transform",n(cL,a.bz,c))]),f([s(SL,e,a,d),n(sL,v,a.hh)]))}else return te("")}),xL=Te(function(e,r,a,t,o){return a.jP?te(""):s(wo,e,r,{bz:um(t.l$),hh:o.hh,bI:o.bI,bK:a.im,a7:t.a7,d$:t.d$,pg:o.pg,iT:o.iT,d6:a.d6})}),jL=S(function(e,r,a){if(tr(a.cu))return te("");var t=zv(a.im),o=xr(t),c=gn(n(Na,l(function(u,$){return p($.bI,u)}),a.cu)),i=gn(n(G,function(u){return p(u.bI,u)},a.cu));return n(O,f([bt(cT(a.gf))]),f([n(tL,e,a),n(O,P,n(Na,l(function(u,$){var v=n(Xe,$,i);if(v.$)return te("");var d=v.a;return E(xL,e,r,a,{l$:n(ce,0,n(Xe,$,c)),a7:o,d$:u},d)}),t)),$5(a.im)]))}),kL=Rr(function(e,r,a,t,o,c){var i=n(Xe,c,a.cY);if(i.$)return w;var u=i.a,$=Rn(r.bH),v=yu({fQ:u.fQ,ch:u.ch,aJ:r.aJ,bH:D(r.bH),bI:u.bI,g:n(b1,o,a.g),nQ:u.nQ,n$:Gc(r.bH),tl:k$(u),aP:u.aP,cF:t,pC:u.pC,pL:w$(r.bH)}),d=s(fm,"play:view",s(e.ba.bt,v,a.S,$),u.bK),b=C(e.ba.cu,v,a.S,$,u.bK),h=n(G,function(T){return{hh:n(tc,Zo(c),T.hh),ge:n(tc,Zo(c),T.ge),bI:T.bI,ud:T.ud,pg:T.pg,iT:T.iT}},b),g=c$(s(jL,$,v,{jP:v.pL,gf:c,im:u.im,cu:h,d6:fp(c)})),y=re(r.aJ,D(c)),_=n(lr,function(T){return T.bx},Rn(r.bH)),x=y?"4px solid "+Me(_):"none";return D(p(c,n(In,f([Lm(c),n(Sm,"data-play-pane",c),n(ee,"outline",x),n(ee,"border-radius","inherit")]),f([n(zm,Zo(c),d),g]))))}),B5=function(e){return{$:1,a:e}},wL=l(function(e,r){return n(J$,e,B5(r))}),Gn=Ot("className"),Ou=Oe(f([aa(dr(.4)),n(z,"pointer-events","none")])),Xa=function(e){switch(e){case 0:return n(je,function(r){return r.kx},function(r){return r.p8});case 1:return n(je,function(r){return r.kx},function(r){return r.sv});case 2:return n(je,function(r){return r.kx},function(r){return r.rO});case 3:return n(je,function(r){return r.kx},function(r){return r.vq});case 4:return n(je,function(r){return r.kx},function(r){return r.tO});case 5:return function(r){return r.bx};case 6:return function(r){return r.bx};default:return n(je,function(r){return r.kx},function(r){return r.qQ})}},TL=ge("padding-bottom"),I5=320,Qa={sP:'ui-monospace, "SF Mono", Menlo, Monaco, "Cascadia Mono", "Roboto Mono", Consolas, monospace',s7:'"Nunito", system-ui, sans-serif',uS:'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'},ll=ge("flex-grow"),E5=function(e){return n(O,f([I(f([Ce(k(1)),ll(he(1)),n(z,"background-color",Me(n(lr,function(r){return r.jg},e)))]))]),P)},K1=ge("margin-bottom"),F5=l(function(e,r){return n(O,f([I(f([le,De(de),n(z,"gap","14px"),K1(k(18))]))]),f([E5(e),n(O,f([I(f([n(z,"font-family",Qa.uS),Oe(wn.rT),uc(mi(.18)),X1(Q1),be(n(Z,function(a){return a.lh},e)),hr(he(0)),n(z,"white-space","nowrap")]))]),f([te(r)])),E5(e)]))}),LL=l(function(e,r){return{$:4,a:e,b:r}}),ML=l(function(e,r){return{$:3,a:e,b:r}}),zL=l(function(e,r){return{$:0,a:e,b:r}}),DL=l(function(e,r){return{$:2,a:e,b:r}}),HL=l(function(e,r){return{$:5,a:e,b:r}}),AL=l(function(e,r){return{$:1,a:e,b:r}}),$c=Jn("input"),es=Ot("max"),rs=Ot("min"),BL=function(e){return p(e,!0)},Ju=l(function(e,r){return n(G1,e,B5(r))}),as=n(Cu,f(["target","value"]),ke),hi=function(e){return n(Ju,"input",n(Ye,BL,n(Ye,e,as)))},ns=function(e){return n(Ot,"step",e)},To=Ot("type"),lc=Ot("value"),V5=function(e){return n($c,f([To("range"),rs(e.kb),es(e.j8),ns(e.k2),lc(e.lr),bi(e.jy),hi(e.kt),Gn("ui-slider"),I(f([ye(Ne(100)),Ce(k(32)),n(z,"-webkit-appearance","none"),n(z,"appearance","none"),_e(ko),n(z,"cursor","grab"),Va(ur),n(z,"touch-action","none"),n(z,"--slider-fill",N(e.jF)+"%"),e.jy?Ou:Oe(P)]))]),P)},IL=function(e){var r=Q(e.nR,e.nW)>0?100*(e.u1-e.nW)/(e.nR-e.nW):0;return V5({jy:e.jy,jF:r,j8:N(e.nR),kb:N(e.nW),kt:function(a){return e.ie(n(ce,e.u1,lo(a)))},k2:N(e.uq),lr:N(e.u1)})},ts=ge("space-between"),Cr=Jn("span"),R5=l(function(e,r){return n(O,f([I(f([le,De(de),Lr(ts),n(z,"gap","12px"),n(Mr,k(10),ue)]))]),f([n(Cr,f([I(f([be(n(Z,function(a){return a.li},e)),Oe(wn.e$),n(z,"font-family",Qa.uS)]))]),f([te(r.e$)])),r.et]))}),EL=function(e){var r=e.nR-e.nW,a=r>0?100*(e.u1-e.nW)/r:0;return V5({jy:e.jy,jF:a,j8:Ie(e.nR),kb:Ie(e.nW),kt:function(t){return e.ie(n(ce,e.u1,Oc(t)))},k2:"1",lr:Ie(e.u1)})},vl=function(e){return n(z,"border-color",e.u1)},FL=(function(){var e="#6D6553",r="#A39980";return"linear-gradient(45deg, "+(e+(" 25%, transparent 25%, transparent 75%, "+(e+(" 75%) 0 0 / 8px 8px,"+(" linear-gradient(45deg, "+(e+(" 25%, transparent 25%, transparent 75%, "+(e+(" 75%) 4px 4px / 8px 8px,"+(" "+r))))))))))})(),os=ge("display"),Uu=J1("focus"),cs=function(e){return Oe(f([n(z,"outline","3px solid "+Me(n(mr,.25,e))),n(z,"outline-offset","0")]))},VL={q0:0,u1:"inline-block"},is="ui-color-swatch-popover",gi={jb:0,hj:0,u1:"border-box"},yi=ge("box-sizing"),RL=290,OL=function(e){var r=lo(e);if(r.$)return 0;var a=r.a;return s(er,0,1,a)},us=l(function(e,r){var a=(function(){var c=r.iU;if(c.$)return P;var i=c.a;return f([n(Cr,f([I(f([n(z,"font-family",Qa.sP),br(k(13)),pa(he(600)),ye(k(40)),hr(he(0)),n(z,"text-align","right"),be(n(Z,function(u){return u.li},e))]))]),f([te(i)]))])})(),t=n($c,f([To("range"),rs("0"),es("1"),ns("0.01"),lc(N(r.u1)),hi(function(c){return r.ie(OL(c))}),Gn(r.it),n(Ge,"aria-label",r.e$),I(f([Po(he(1)),Ce(k(26)),n(z,"-webkit-appearance","none"),n(z,"appearance","none"),n(z,"--track",r.hP),n(z,"background-color","transparent"),Va(ur),n(z,"cursor","grab"),n(z,"touch-action","none"),sa(ue)]))]),P),o=n(Cr,f([I(f([n(z,"font-family",Qa.sP),br(k(14)),pa(he(700)),ye(k(18)),hr(he(0)),be(n(Z,function(c){return c.li},e))]))]),f([te(r.e$)]));return n(O,f([I(f([le,De(de),n(z,"gap","10px")]))]),X(f([o,t]),a))}),Yr=xh,O5="linear-gradient(45deg, #6d6553 25%, transparent 25%, transparent 75%, #6d6553 75%) 0 0 / 14px 14px, linear-gradient(45deg, #6d6553 25%, transparent 25%, transparent 75%, #6d6553 75%) 7px 7px / 14px 14px, #a39980",JL=l(function(e,r){var a=r.u1,t="linear-gradient(to right, transparent, "+(Me(n(mr,1,a))+("), "+O5));return n(us,e,{hP:t,e$:"\u03B1",ie:function(o){return r.ie(M(a,{aT:o}))},it:"ui-hsla-alpha",iU:D(Ie(Yr(a.aT*100))+"%"),u1:a.aT})}),UL=l(function(e,r){var a=ze(e-r);return n(qe,a,1-a)}),qr=S(function(e,r,a){return{aT:1,aX:e,D:a,a4:r}}),J5=f([s(qr,6/360,.9,.62),s(qr,33/360,1,.55),s(qr,46/360,1,.55),s(qr,80/360,.7,.52),s(qr,150/360,.65,.46),s(qr,172/360,.75,.45),s(qr,185/360,1,.46),s(qr,217/360,.88,.58),s(qr,239/360,.84,.67),s(qr,270/360,.8,.65),s(qr,330/360,1,.69),s(qr,350/360,.9,.63)]),_i=th,WL=function(e){return n(ce,0,n(se,An,jr(n(_i,v$,n(Na,l(function(r,a){return p(r,n(UL,a.aX,e.aX))}),J5)))))},qL=function(e){return e?"0 0 0 3px rgba(0, 0, 0, 0.55), 0 0 0 6px #fff, 0 4px 10px -3px rgba(0, 0, 0, 0.5)":"inset 0 0 0 1px rgba(0, 0, 0, 0.25), 0 3px 8px -3px rgba(0, 0, 0, 0.5)"},U5=32,GL=S(function(e,r,a){return n(Un,f([jn(e.ie(n(mr,e.u1.aT,a))),n(Ge,"aria-label","preset colour"),I(f([ye(k(U5)),Ce(k(U5)),hr(he(0)),vr(Ne(50)),fc(ue),sa(ue),wr(da),_e(cr(a)),n(z,"box-shadow",qL(r))]))]),P)}),NL=function(e){var r=e.u1.a4<.08?-1:WL(e.u1);return n(O,f([I(f([n(z,"display","grid"),n(z,"grid-template-columns","repeat(6, 1fr)"),n(z,"gap","10px"),n(z,"justify-items","center")]))]),n(Na,l(function(a,t){return s(GL,e,re(a,r),t)}),J5))},ZL=l(function(e,r){return n(H,function(a){var t=K2(a);if(t.$)return Cn("invalid hex");var o=t.a;return ae(r(n(mr,e.aT,o)))},as)}),YL=Dm,fs=YL,$s=S(function(e,r,a){var t=a<0?a+1:a>1?a-1:a;return Q(t,1/6)<0?e+(r-e)*6*t:Q(t,1/2)<0?r:Q(t,2/3)<0?e+(r-e)*(2/3-t)*6:e}),XL=S(function(e,r,a){if(r<1e-10)return{ja:a,jM:a,kM:a};var t=a<.5?a*(1+r):a+r-a*r,o=2*a-t;return{ja:s($s,o,t,e-1/3),jM:s($s,o,t,e),kM:s($s,o,t,e+1/3)}}),W5=function(e){switch(e){case 0:return"0";case 1:return"1";case 2:return"2";case 3:return"3";case 4:return"4";case 5:return"5";case 6:return"6";case 7:return"7";case 8:return"8";case 9:return"9";case 10:return"a";case 11:return"b";case 12:return"c";case 13:return"d";case 14:return"e";default:return"f"}},ls=function(e){var r=s(er,0,255,e),a=r/16|0,t=n(Kr,16,r);return X(Uc(W5(a)),Uc(W5(t)))},QL=function(e){var r=s(XL,e.aX,e.a4,e.D);return"#"+(ls(Yr(r.kM*255))+(ls(Yr(r.jM*255))+ls(Yr(r.ja*255))))},KL=l(function(e,r){var a=sp(QL(r.u1));return s(fs,"div",f([I(f([le,De(de),n(z,"gap","12px")]))]),f([p(a,n($c,f([To("text"),n(Ge,"value",a),n(Ge,"pattern","#?[0-9A-Fa-f]{6}"),n(Ge,"spellcheck","false"),n(Ge,"aria-label","Hex colour"),Gn("ui-hex-input"),n(Zr,"change",n(ZL,r.u1,r.ie)),I(f([ye(Ne(50)),hr(he(0)),yi(gi),n(z,"font-family",Qa.sP),br(k(15)),pa(he(600)),uc(mi(.06)),X1(Q1),be(n(Z,function(t){return t.lh},e)),_e(n(Z,function(t){return t.F},e)),s(ht,k(1),xn,n(Z,function(t){return t.jg},e)),vr(Ya.e7),n(Mr,k(9),k(12)),Va(ur)]))]),P)),p("warn",n(O,f([Gn("ui-hex-warn")]),f([te("invalid hex")])))]))}),vs=S(function(e,r,a){return"hsl("+(N(e*360)+(", "+(N(r*100)+("%, "+(N(a*100)+"%)")))))}),eM=l(function(e,r){var a=r.u1,t="linear-gradient(to right, #000, "+(s(vs,a.aX,a.a4,.5)+", #fff)");return n(us,e,{hP:t,e$:"L",ie:function(o){return r.ie(M(a,{D:o}))},it:"ui-hsla-rail",iU:w,u1:a.D})}),q5=120,rM=function(e){return n(O,f([I(f([le,Lr(de)]))]),f([n(O,f([I(f([or(Co),ye(k(q5)),Ce(k(q5)),vr(Ne(50)),Wt(Ut),n(z,"background",O5),n(z,"box-shadow","inset 0 0 0 2px rgba(0, 0, 0, 0.3), 0 12px 26px -10px rgba(0, 0, 0, 0.6)")]))]),f([n(O,f([I(f([or(Sn),ja(ue),ba(ue),mt(ue),_t(ue),n(z,"background",Me(e))]))]),P)]))]))},aM=l(function(e,r){var a=r.u1,t="linear-gradient(to right, "+(s(vs,a.aX,0,a.D)+(", "+(s(vs,a.aX,1,a.D)+")")));return n(us,e,{hP:t,e$:"S",ie:function(o){return r.ie(M(a,{a4:o}))},it:"ui-hsla-rail",iU:w,u1:a.a4})}),nM=l(function(e,r){return n(O,f([I(f([le,_r(ra),n(z,"gap","18px"),ye(k(RL)),yi(gi),sa(k(18)),_e(n(Z,function(a){return a.k6},e)),s(ht,k(1),xn,n(Z,function(a){return a.jg},e)),vr(Ya.vi),be(n(Z,function(a){return a.lh},e)),n(z,"font-family",Qa.uS)]))]),f([rM(r.u1),n(KL,e,r),NL(r),n(aM,e,r),n(eM,e,r),n(JL,e,r)]))}),tM=function(e){return M(e,{aT:1})},oM=l(function(e,r){var a=Me(r.u1),t=Me(tM(r.u1));return n(O,f([I(f([os(VL)]))]),f([n(Un,f([n(Ge,"popovertarget",r.bI),n(Ge,"aria-label","Pick colour"),n(Ge,"aria-haspopup","dialog"),n(k5,"background","linear-gradient(135deg, transparent 50%, "+(t+(" 50%), "+("linear-gradient(135deg, "+(a+(", "+(a+("), "+FL)))))))),I(f([ye(k(32)),Ce(k(32)),sa(ue),s(ht,k(1),xn,n(Z,function(o){return o.jg},e)),vr(Ya.e7),wr(da),Wt(Ut),n(z,"box-shadow","inset 0 0 0 2px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.4)"),n(z,"transition","border-color 160ms cubic-bezier(0.33, 1, 0.68, 1)"),ka(f([vl(n(Z,function(o){return o.bx},e))])),Uu(f([cs(n(lr,function(o){return o.bx},e))]))]))]),P),n(O,f([bt(r.bI),n(Ge,"popover","auto"),n(Ge,"data-popover",""),Gn(is)]),f([n(nM,e,{ie:r.ie,u1:r.u1})]))]))}),G5=ge("baseline"),sl=l(function(e,r){return n(O,f([I(f([n(Mr,k(10),ue)]))]),f([n(O,f([I(f([le,De(G5),Lr(ts),n(z,"gap","12px"),K1(k(8))]))]),f([n(Cr,f([I(f([be(n(Z,function(a){return a.li},e)),Oe(wn.e$),n(z,"font-family",Qa.uS)]))]),f([te(r.e$)])),(function(){var a=r.u1;if(a.$)return te("");var t=a.a;return n(Cr,f([I(f([be(n(Z,function(o){return o.bx},e)),Oe(wn.e$),pa(he(600)),n(z,"font-family",Qa.sP),n(z,"font-feature-settings",'"tnum"')]))]),f([te(t)]))})()])),r.et]))}),N5=Ot("placeholder"),TY=ne,cM=l(function(e,r){return{$:3,a:e,b:r}}),ss=function(e){return cM(e)},Nn={so:k(16),e7:k(12),kZ:k(8),vi:k(24),vj:k(4),vk:k(32),pI:k(2),vl:k(48)},iM=l(function(e,r){return n($c,f([To("text"),lc(r.u1),N5(r.kJ),hi(r.ie),I(f([ye(Ne(100)),n(Mr,k(10),Nn.e7),_e(n(Z,function(a){return a.k6},e)),be(n(Z,function(a){return a.lh},e)),s(ht,k(1),xn,n(Z,function(a){return a.jg},e)),vr(Ya.e7),n(z,"font-family",Qa.sP),Oe(wn.hh),Va(ur),n(z,"transition","border-color 160ms cubic-bezier(0.33, 1, 0.68, 1), box-shadow 160ms cubic-bezier(0.33, 1, 0.68, 1)"),Uu(f([vl(n(Z,function(a){return a.bx},e)),cs(n(lr,function(a){return a.bx},e))])),n(ss,"placeholder",f([be(n(Z,function(a){return a.lf},e))]))]))]),P)}),Ci=j5("padding"),uM=Jn("option"),fM=W1("selected"),$M=l(function(e,r){return n(uM,f([lc(r),fM(re(r,e))]),f([te(r)]))}),lM=Jn("select"),vM=l(function(e,r){return n(lM,f([n(Zr,"change",n(Ye,r.tf,as)),I(f([ye(Ne(100)),n(z,"appearance","none"),n(z,"-webkit-appearance","none"),_e(n(Z,function(a){return a.k6},e)),be(n(Z,function(a){return a.lh},e)),s(ht,k(1),xn,n(Z,function(a){return a.jg},e)),vr(Ya.e7),C(Ci,k(10),k(34),k(10),Nn.e7),n(z,"font-family",Qa.uS),Oe(wn.hh),pa(he(500)),wr(da),n(z,"background-image",`url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23D4A244' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'><path d='M3 5l3 3 3-3'/></svg>")`),n(z,"background-repeat","no-repeat"),n(z,"background-position","right 12px center"),Va(ur),n(z,"transition","border-color 160ms cubic-bezier(0.33, 1, 0.68, 1), background-color 160ms cubic-bezier(0.33, 1, 0.68, 1)"),ka(f([vl(n(Z,function(a){return a.i$},e)),_e(n(Z,function(a){return a.k7},e))])),Uu(f([vl(n(Z,function(a){return a.bx},e)),n(z,"box-shadow","0 0 0 3px "+Me(n(mr,.25,n(lr,function(a){return a.bx},e))))]))]))]),n(G,$M(r.t8),r.tm))}),sM=ss("after"),dM=U(function(e,r,a,t){return{$:7,a:e,b:r,c:a,d:t}}),Wu=U(function(e,r,a,t){return C(dM,e,r,a,t)}),dl={cR:{p3:200,rt:120,uf:320},hF:{rd:C(Wu,.33,1,.68,1),jN:C(Wu,.45,.05,.25,1),r5:C(Wu,.65,0,.35,1),ui:C(Wu,.2,.9,.25,1),uk:C(Wu,.34,1.56,.64,1)}},Pi=function(e){return al(f([e]))},ds=function(e){var r=e.u1;return{lk:0,u1:n(vi,"translateX",f([r]))}},Z5=l(function(e,r){var a=r.ng?n(Z,function(i){return i.bx},e):n(Z,function(i){return i.jg},e),t=r.ng?20:0,o=r.ng?n(z,"box-shadow","0 0 14px "+Me(n(mr,.4,n(lr,function(i){return i.bx},e)))):x5(ur),c=r.ng?n(Z,function(i){return i.lh},e):n(Z,function(i){return i.lf},e);return n(Un,f([I(f([or(Co),ye(k(46)),Ce(k(26)),_e(a),vr(Ya.tw),fc(ue),wr(da),Va(ur),nl(f([s(U1,220,0,dl.hF.jN)])),hr(he(0)),sM(f([n(z,"content",'""'),or(Sn),ja(k(2)),ba(k(2)),ye(k(22)),Ce(k(22)),_e(c),vr(Ne(50)),Pi(ds(k(t))),o,nl(f([s(h5,220,0,dl.hF.uk),s(U1,220,0,dl.hF.jN),s(m5,220,0,dl.hF.jN)]))])),r.jy?Ou:Oe(P)])),jn(r.oe),bi(r.jy),n(Ge,"aria-pressed",r.ng?"true":"false"),n(Ge,"aria-label",r.e$)]),P)}),bM=l(function(e,r){var a=r.a,t=r.b;switch(t.$){case 0:var o=t.a,i=o.a,u=o.b,$=t.b;return n(sl,e,{et:IL({jy:!1,nR:u,nW:i,ie:zL(a),uq:.01*(u-i),u1:$}),e$:a,u1:D(n(Yc,2,$))});case 2:var c=t.a,i=c.a,u=c.b,$=t.b;return n(sl,e,{et:EL({jy:!1,nR:u,nW:i,ie:DL(a),u1:$}),e$:a,u1:D(Ie($))});case 4:var $=t.a;return n(R5,e,{et:n(Z5,e,{jy:!1,ng:$,e$:a,oe:n(LL,a,!$)}),e$:a});case 1:var $=t.a;return n(sl,e,{et:n(iM,e,{ie:AL(a),kJ:"",u1:$}),e$:a,u1:w});case 3:var $=t.a;return n(R5,e,{et:n(oM,e,{bI:"play-config-color-"+a,ie:ML(a),u1:$}),e$:a});default:var v=t.a;return n(sl,e,{et:n(vM,e,{tf:HL(a),tm:Et(v),t8:dt(v)}),e$:a,u1:w})}}),pM=l(function(e,r){return n(O,f([I(f([n(Mr,ue,k(20))]))]),f([n(F5,e,r.sV),n(O,P,n(G,bM(e),r.bc))]))}),LY=1,MY=1,mM=U(function(e,r,a,t){return{bB:r,bJ:a,bQ:t,bW:e}}),hM=E(ec,mM,n(j,"top",q),n(j,"bottom",q),n(j,"left",q),n(j,"right",q)),Y5=n(Cu,f(["currentTarget","boundingClientRect"]),hM),X5=function(e){return n(Zr,"click",n(Ye,e,Y5))},gM=l(function(e,r){var a=(function(){return r?p(40,Nn.so):p(32,Nn.e7)})(),t=a.a,o=a.b;return f([Ce(k(t)),n(Mr,ue,o),vr(Ya.tw),fc(ue),wr(da),Va(ur),n(z,"font-family",Qa.uS),Oe(wn.e$),le,De(de),Lr(de),n(z,"gap","6px"),n(z,"transition","background-color 160ms cubic-bezier(0.33, 1, 0.68, 1), color 160ms cubic-bezier(0.33, 1, 0.68, 1), box-shadow 160ms cubic-bezier(0.33, 1, 0.68, 1)"),Uu(f([cs(n(lr,function(c){return c.bx},e))]))])}),Q5=function(e){return n(Or,"",e)},bl=function(e){return n(z,"box-shadow",Q5(f(["inset ",N(e*1.5),"px ",N(e*1.5),"px ",N(e*3),"px ",Me(n(mr,.6,$o)),", inset 0 0 0 1px ",Me(n(mr,.35,$o))])))},bs=l(function(e,r){return E(Vu,ue,ue,ue,k(e),cr(r))}),yM=S(function(e,r,a){var t=l(function(i,u){return a?X(i,u):i});switch(r){case 0:var o=f([_e(n(Z,function(i){return i.bx},e)),be(n(Z,function(i){return s(N1,.6,i.bx,i.lh)},e)),n(bs,1,n(lr,function(i){return i.i$},e))]),c=f([_e(n(Z,function(i){return i.i$},e)),bl(1.5)]);return X(n(t,o,c),f([ka(f([_e(n(Z,function(i){return i.i0},e))])),di(c)]));case 1:var o=f([_e(n(Z,function(i){return i.k6},e)),be(n(Z,function(i){return i.lh},e)),n(bs,1,n(lr,function(i){return i.jg},e))]),c=f([_e(n(Z,function(i){return i.k9},e)),bl(1.5)]);return X(n(t,o,c),f([ka(f([_e(n(Z,function(i){return i.k7},e))])),di(c)]));default:var o=f([_e(ko),be(n(Z,function(i){return i.li},e))]),c=f([_e(n(Z,function(i){return i.k9},e)),be(n(Z,function(i){return i.lh},e)),bl(1.5)]);return X(n(t,o,c),f([ka(f([_e(n(Z,function(i){return i.k6},e)),be(n(Z,function(i){return i.lh},e))])),di(c)]))}}),K5=S(function(e,r,a){var t=(function(){var o=r.gI;return o?18:16})();return n(Un,n(A,I(X(n(gM,e,r.gI),X(s(yM,e,r.u2,r.se),r.jy?f([Ou]):P))),n(A,bi(r.jy),a)),(function(){var o=r.ge;if(o.$)return f([te(r.e$)]);var c=o.a;return f([n(Cr,f([I(f([le,De(de),Lr(de),ye(k(t)),Ce(k(t)),hr(he(0))]))]),f([c])),te(r.e$)])})())}),_M=l(function(e,r){return s(K5,e,{jy:!1,ge:w,se:!1,e$:r.e$,gI:1,u2:1},f([X5(r.bj)]))}),CM=function(e){return n(O,f([I(f([C(Ci,k(8),k(20),k(36),k(20)),le,Lr(de)]))]),f([n(_M,e.e,{e$:"Reset Page's Configurations",bj:e.ht.oc})]))},e4=l(function(e,r){return s(K5,e,{jy:r.jy,ge:r.ge,se:r.se,e$:r.e$,gI:r.gI,u2:r.u2},f([jn(r.bj)]))}),r4=l(function(e,r){return n(e4,e,{jy:!1,ge:w,se:!1,e$:r.e$,bj:r.bj,gI:1,u2:1})}),a4={dG:0,u1:"bold"},PM=ge("margin"),SM=ge("margin-top"),n4=ge("max-width"),t4=function(e){return s(N$,"textAlign","text-align",e(Z$))},xM=(function(){var e=s(qr,.11,.55,.2),r=s(qr,.13,.8,.62),a=s(qr,.13,.9,.9),t="play-reset-interface-help",o=function($){return n(O,f([I(f([n(Mr,k(2),ue)]))]),f([te("\u2022 "+$)]))},c=s(qr,.13,1,.58),i=s(qr,.13,.95,.52),u=s(qr,.12,.85,.16);return n(Cr,f([I(f([le,De(de)]))]),f([n(Un,f([To("button"),n(Ge,"popovertarget",t),n(Ge,"aria-label","What does resetting Play's interface clear?"),I(f([ye(k(20)),Ce(k(20)),sa(ue),n(z,"border","none"),vr(Ne(50)),wr(da),pa(a4),br(k(13)),kn(k(20)),t4(de),n(z,"background-color",Me(i)),n(z,"color",Me(u)),n(z,"transition","background-color 160ms"),ka(f([n(z,"background-color",Me(c))])),Uu(f([n(z,"outline","2px solid "+Me(c)),n(z,"outline-offset","2px")]))]))]),f([te("?")])),n(O,f([bt(t),n(Ge,"popover","auto"),n(Ge,"data-popover",""),I(f([or(Ct),PM(ue),n(z,"pointer-events","auto"),n4(k(250)),n(Mr,k(12),k(14)),vr(k(10)),br(k(12.5)),kn(dr(1.5)),n(z,"background-color",Me(a)),n(z,"color",Me(e)),n(z,"border","1px solid "+Me(r)),n(z,"box-shadow","0 6px 20px rgba(0, 0, 0, 0.28)")]))]),f([n(O,f([I(f([pa(a4),K1(k(8))]))]),f([te("Resetting Play's interface clears, for this browser:")])),o("Panel positions & sizes"),o("Light / dark theme"),o("Play / author mode"),o("Device-preview frame"),o("Tape \u201Crecord from start\u201D preference"),n(O,f([I(f([SM(k(8)),aa(dr(.85))]))]),f([te("Your configuration values (in the page URL) and any saved content aren\u2019t affected.")]))]))]))})(),jM=function(e){return n(O,f([I(f([C(Ci,k(16),k(20),k(4),k(20)),le,De(de),Lr(de),n(z,"gap","8px")]))]),f([n(r4,e.e,{e$:"Reset Play's Interface",bj:e.kq}),xM]))},kM=function(e){var r=tr(e.qD.ch)?te(""):CM(e);return n(O,f([I(f([ye(k(I5))]))]),f([jM(e),r,n(tc,e.gu,n(O,f([I(f([le,_r(ra),n(z,"gap","18px"),TL(k(16))]))]),n(G,pM(e.e),e.qD.ch)))]))},wM=function(e){if(!e.ce.f9||e.pL)return te("");var r=s(wo,e.e,e.qD,{bz:yo(0),hh:kM(e),bI:0,bK:e.f,a7:e.aB.a7,d$:e.aB.d0(0),pg:Xa(0),iT:"Configurations",d6:e.a$});return Vt(e.uE)?n(O,f([I(f([Ou]))]),f([r])):r},ps=function(e){return{$:1,a:e}},zY=0,DY=0,TM=function(e){return e?Qe.qZ:Qe.q_},LM=function(e){return e?"Landscape":"Portrait"},HY=1,AY=3,BY=2,MM={$:2},zM=l(function(e,r){return{$:0,a:e,b:r}}),DM={$:1},HM={$:3},o4=function(e){return n(Zr,"mousedown",ae(e))},AM=function(e){return n(Zr,"mouseleave",ae(e))},St=l(function(e,r){return f([n(Zr,"mouseenter",n(Ye,function(a){return e(n(zM,r,a))},Y5)),AM(e(DM)),o4(e(MM)),n(Zr,"mousemove",ae(e(HM)))])}),pl=l(function(e,r){var a=xr(r.sj),t=function(c){return a<=1?0:c?re(c,a-1)?3:2:1},o=l(function(c,i){var u=r.ni(i);return n(_5,e,{i8:"radio",i9:p("aria-checked",v5(u)),jy:r.jy,ge:r.ge(i),ng:u,e$:r.si(i),bj:r.tf(i),kk:r.t9(i),dX:r.dX,tF:t(c),bs:n(St,r.th,{ex:r.uM,e$:r.si(i),ud:r.ud(i)})})});return s(p5,{jy:r.jy,dX:r.dX},f([n(Ge,"role","radiogroup"),n(Ge,"aria-label",r.e$)]),n(Na,o,r.sj))}),BM=U(function(e,r,a,t){return n(O,f([I(f([le,Lr(de),n(Mr,k(6),k(0))]))]),f([n(pl,e,{jy:!1,ge:TM,ni:vn(t),si:LM,sj:f([0,1]),e$:"Orientation",tf:n(ir,r.d6,ps),th:a,dX:0,t9:function(o){return function(c){return c.bx}},ud:function(o){return w},uM:0})]))}),qu=function(e){return{jh:n(Z,function(r){return r.jh},e),kX:cl.rb,F:n(Z,function(r){return r.F},e),la:n(Z,function(r){return r.k9},e),lf:n(Z,function(r){return r.lf},e),lh:n(Z,function(r){return r.lh},e),li:n(Z,function(r){return r.li},e),g8:Jt.ok}},IM=function(e){return{$:0,a:e}},c4=function(e){return{$:3,a:e}},Si=l(function(e,r){return n(G1,e,c4(r))}),EM={$:2},FM={$:1},VM={$:3},RM={$:4},ml=yg,OM=Sr(ml,Te(function(e,r,a,t,o){return{i2:t,jr:r,jV:e,j9:o,kY:a}}),n(j,"key",ke),n(j,"ctrlKey",ie),n(j,"shiftKey",ie),n(j,"altKey",ie),n(j,"metaKey",ie)),JM=l(function(e,r){return n(Ye,function(a){var t=a.j9,o=a.i2,c=a.kY,i=a.jr,u=a.jV,$=i||o||t;if($)return{Y:e.d6(Ea),aa:!1,ac:!1};if(u==="Tab")return{Y:e.d6(Ea),aa:!0,ac:!0};if(u==="ArrowUp")return{Y:e.d6(FM),aa:!0,ac:!0};if(u==="ArrowDown")return{Y:e.d6(EM),aa:!0,ac:!0};if(u==="Enter")return{Y:e.d6(VM),aa:!0,ac:!0};if(u==="Escape")return{Y:e.d6(RM),aa:!0,ac:!0};if(u==="ArrowLeft"||u==="ArrowRight"){if(r.$)return{Y:e.d6(Ea),aa:!1,ac:!1};var v=r.a;return{Y:u==="ArrowLeft"?v.tc:v.te,aa:!0,ac:!0}}else return{Y:e.d6(Ea),aa:!1,ac:!1}},OM)}),i4=5,UM=function(e){return s(Rt,e,!1,"")},u4=UM,WM={aa:!0,ac:!1},qM=l(function(e,r){return n(J$,e,c4(r))}),GM=Te(function(e,r,a,t,o){return{qI:o,sh:t,tB:r,tD:a,tE:e}}),NM=Te(function(e,r,a,t,o){return{rW:r,tI:a,uH:t,uI:o,va:e}}),ZM=Sr(ml,NM,n(j,"width",q),n(j,"height",q),n(j,"pressure",q),n(j,"tiltX",q),n(j,"tiltY",q)),YM=Rr(function(e,r,a,t,o,c){return{ql:r,qA:a,be:e,s9:t,to:o,t3:c}}),IY=4,EY=0,FY=5,VY=1,RY=2,OY=3,XM=function(e){switch(e){case 0:return 1;case 1:return 2;case 2:return 3;case 3:return 4;case 4:return 5;default:return 0}},QM=n(Ye,XM,n(j,"button",Gr)),KM=s(Ha,l(function(e,r){return p(e,r)}),n(j,"clientX",q),n(j,"clientY",q)),ez=U(function(e,r,a,t){return{i2:e,jr:r,j9:a,kY:t}}),rz=E(ec,ez,n(j,"altKey",ie),n(j,"ctrlKey",ie),n(j,"metaKey",ie),n(j,"shiftKey",ie)),az=s(Ha,l(function(e,r){return p(e,r)}),n(j,"offsetX",q),n(j,"offsetY",q)),nz=s(Ha,l(function(e,r){return p(e,r)}),n(j,"pageX",q),n(j,"pageY",q)),tz=s(Ha,l(function(e,r){return p(e,r)}),n(j,"screenX",q),n(j,"screenY",q)),oz=ua(ip,YM,rz,QM,KM,az,nz,tz),JY=0,UY=2,WY=1,cz=function(e){switch(e){case"pen":return 2;case"touch":return 1;default:return 0}},iz=n(Ye,cz,ke),uz=Sr(ml,GM,n(j,"pointerType",iz),oz,n(j,"pointerId",Gr),n(j,"isPrimary",ie),ZM),fz=S(function(e,r,a){return n(qM,e,n(Ye,function(t){return{Y:a(t),aa:r.aa,ac:r.ac}},uz))}),f4=n(fz,"pointerdown",WM),$z=function(e){return{$:5,a:e}},lz=function(e){return{$:6,a:e}},vz=U(function(e,r,a,t){return n(O,f([u4(f4(function(o){return e.d6(lz(t))})),jn(e.d6($z(t)))]),f([n(r,a,t)]))}),sz=U(function(e,r,a,t){return tr(t.aV)?n(O,f([I(f([Ce(k(e.e5)),le,De(de),Lr(de),be(r.lf),hr(he(0))]))]),f([te("No matching items")])):s(fs,"div",f([bt(Qo(e)),I(f([Ce(k(e.e5)),C(Ci,k(0),k(4),k(0),k(4)),Wt(Ru),n(z,"overscroll-behavior","contain"),hr(he(0)),le,_r(ra)])),u4(f4(function(o){return e.d6(Ea)})),n(Zr,"scroll",n(Ye,n(je,w1,e.d6),n(Cu,f(["currentTarget","scrollTop"]),q))),n(Si,"wheel",ae({Y:e.d6(Ea),aa:!1,ac:!0}))]),(function(){var o=xr(t.aV),c=n(qe,o-1,dv((t.b5+e.e5)/bo)+i4),i=n(Le,0,Da(t.b5/bo)-i4),u=i*bo,$=n(Na,l(function(d,b){var h=i+d;return p(Ie(h),C(vz,e,a,re(h,t.az),b))}),n(vt,c-i+1,n(lt,i,t.aV))),v=n(Le,0,o-1-c)*bo;return n(A,p("top-spacer",n(O,f([I(f([Ce(k(u)),hr(he(0))]))]),P)),X($,f([p("bottom-spacer",n(O,f([I(f([Ce(k(v)),hr(he(0))]))]),P))])))})())}),dz=function(e){return{$:9,a:e}},bz=function(e){return n(Ye,function(r){return{Y:e.d6(dz(r)),aa:!0,ac:!0}},n(j,"deltaY",q))},hl=ro(function(e,r,a,t,o,c,i){var u=i;return n(O,f([I(f([be(r.li),le,_r(ra),n(z,"gap","8px"),ye(Ne(100))])),n(Si,"keydown",n(JM,e,t)),n(Si,"mousedown",ae({Y:e.d6(Ea),aa:!1,ac:!0})),n(Si,"pointerdown",ae({Y:e.d6(Ea),aa:!1,ac:!0})),n(Si,"pointerup",ae({Y:e.d6(Ea),aa:!1,ac:!0})),n(Si,"wheel",bz(e))]),X(a,X(f([n($c,f([To("text"),bt(gm(e)),n(Ge,"data-select-all-on-focus","true"),N5(e.kJ),I(f([ye(Ne(100)),hr(he(0)),n(Mr,k(8),k(8)),vr(k(4)),Va(ur),_e(r.la),be(r.lh),n(ss,"placeholder",f([be(r.lf)]))])),hi(n(je,IM,e.d6)),lc(u.iE)]),P),C(sz,e,r,o,u)]),c)))}),Gu=function(e){return e.D>.55?{aT:1,aX:0,D:.1,a4:0}:{aT:1,aX:0,D:.98,a4:0}},pz=function(e){return N(e.gI.va)+(" \xD7 "+N(e.gI.rW))},$4=S(function(e,r,a){var t=r?Oe(f([_e(n(Z,function(c){return c.bx},e)),be(n(Z,n(je,function(c){return c.bx},Gu),e))])):be(n(Z,function(c){return c.lh},e)),o=r?n(Z,n(je,function(c){return c.bx},Gu),e):n(Z,function(c){return c.li},e);return n(O,f([I(f([n(Mr,k(0),k(12)),Ce(k(32)),le,De(de),yi(gi),n(z,"gap","10px"),t]))]),f([n(Cr,f([I(f([ll(he(1)),br(k(13))]))]),f([te(a.sV)])),n(Cr,f([I(f([br(k(12)),be(o)]))]),f([te(pz(a))]))]))}),mz=U(function(e,r,a,t){var o=t;return ua(hl,Qc(r),qu(e),f([C(BM,e,r,a,o.dX)]),D({tc:r.d6(ps(0)),te:r.d6(ps(1))}),$4(e),P,o.bm)}),ms=U(function(e,r,a,t){return n(O,f([I(f([or(Ct),ja(ue),ba(ue),aa(dr(.001)),Wn(ur)])),n(Ge,"inert","")]),f([ua(hl,M(e,{fR:e.fR+"-warmup"}),r,P,w,a,P,t)]))}),hz=S(function(e,r,a){var t=a;return C(ms,Qc(r),qu(e),$4(e),t.bm)}),gz=function(e){if(!e.ce.dI||e.pL)return te("");var r={fR:N3,d6:e.kn};return n(O,P,f([s(wo,e.e,e.qD,{bz:yo(7),hh:C(mz,e.e,r,e.th,e.U),bI:7,bK:e.f,a7:e.aB.a7,d$:e.aB.d0(7),pg:Xa(7),iT:"Device",d6:e.a$}),s(hz,e.e,r,e.U)]))},yz=S(function(e,r,a){return(function(t){return s(dn,e,t,a.bO)})(s(me,e,r,a.bG))}),_z=l(function(e,r){return n(ir,n(yz,e,r),H$)}),Cz=function(e){var r=e,a=s(_z,l(function(c,i){var u=i.a,$=i.b;return p(u+1,$+c.hB)}),p(0,0),r.gF),t=a.a,o=a.b;return t>1&&o>0?D(t/o):w},Pz=ge("flex-end"),l4=function(e){return e*1e3},hs=function(e){var r=e.u1;return{lk:0,u1:n(vi,"translateY",f([r]))}},Sz=function(e){return n(O,f([I(f([or(Sn),ye(Ne(100)),Ce(k(1)),al(f([hs(Ne(-50))])),_e(cr(e.kx.rO)),_t(k(l4(1/60)))]))]),P)},xz=function(e){return X(e.bG,Ve(e.bO))},jz=n(ir,xz,H$),kz=l(function(e,r){var a=r*1e3;return a<=18?e.kx.rO:a<=33?e.kx.vq:e.kx.tO}),wz=l(function(e,r){return n(O,f([I(f([Po(ur),ye(k(4)),Ce(k(l4(r))),_t(ue),_e(cr(n(kz,e,r)))]))]),P)}),Tz=l(function(e,r){return n(O,f([I(f([or(Co),Ce(k(50)),ye(k(Gp*4)),Wt(Ut),_e(cr(e.lb))]))]),f([Sz(e),n(O,f([I(f([or(Sn),mt(ue),_t(ue),Ce(Ne(100)),le,_r(cc),De(Pz)]))]),n(G,n(je,function(a){return a.hB},wz(e)),jz(r)))]))}),v4=l(function(e,r){if(e<0)return r;var a=n(va,10,e),t=gC(a),o=function(c){return c/a};return o(Yr(t(r)))}),Lz=l(function(e,r){return e<0?r:n(v4,e,r)}),Mz=function(e){return e>=0?"":"-"},Nu=l(function(e,r){var a=function(t){var o=n(Dn,".",t);e:for(;;)if(o.b)if(o.b.b){if(o.b.b.b)break e;var c=o.a,i=o.b,u=i.a;return c+("."+s(_$,e,"0",u))}else{var c=o.a;return c+("."+n(Wo,e,"0"))}else break e;return t};return qv(r)?"NaN":Zc(r)?Mz(r)+"Infinity":e<=0?N(n(Lz,e,r)):a(N(n(v4,e,r)))}),zz=l(function(e,r){return n(O,f([I(f([be(cr(e.kx.rO))]))]),f([te("Frame Rate: "),te(n(ce,"-",n(se,Nu(0),r)))]))}),Dz=l(function(e,r){var a=r;return n(O,f([I(f([le,_r(ra),n(z,"gap","8px")]))]),f([n(Tz,e,a.gF),n(zz,e,Cz(r))]))}),s4=function(e){return n(ge,"animation-duration",e)},Hz=function(e){return{$:5,a:e}},d4=function(e){return e.u1==="none"||e.u1==="inherit"||e.u1==="unset"||e.u1==="initial"?n(ge,"animation-name",e):Hz(e.u1)},qY=ne,vc=l(function(e,r){return e+(":"+r)}),Az=function(e){return re(e,B$)},Bz=function(e){var r=e.a,a=e.b,t=s(xa,function(c){var i=c;return i+";"},"",a),o=Ie(r)+"%";return o+("{"+(t+"}"))},Iz=function(e){return s(xa,Bz,"",e)},b4=function(e){return tr(e)?{jW:0,kh:0,u1:"none"}:{jW:0,kh:0,u1:Iz(e)}},p4=function(e){return{cR:0,u1:N(e)+"s"}},Ez={$:2},Fz={$:3},Vz=function(e){return re(e,B$)?Fz:Ez},Rz=function(e){return{$:3,a:e}},Oz=l(function(e,r){return{$:4,a:e,b:r}}),Jz=function(e){return Oz(n(G,Rz,e))},Uz=S(function(e,r,a){var t=Az(a),o=t?"Stop profiling":"Start profiling",c=t?n(O,f([I(f([ye(Ne(100)),Ce(Ne(100)),le,De(de),Lr(de),be(n(Z,n(je,function(i){return i.kx},function(i){return i.tO}),e)),d4(b4(f([p(0,f([n(vc,"opacity","1")])),p(50,f([n(vc,"opacity","0.35")])),p(100,f([n(vc,"opacity","1")]))]))),s4(p4(1.2)),n(z,"animation-iteration-count","infinite"),n(z,"animation-timing-function","ease-in-out"),n(Jz,f(["(prefers-reduced-motion: reduce)"]),f([n(z,"animation","none")]))]))]),f([Qe.tN])):Qe.tN;return n(O,f([I(f([le,Lr(de),ye(Ne(100))]))]),f([n(O,f([I(f([ye(k(160))]))]),f([n(e4,e,{jy:!1,ge:D(c),se:t,e$:o,bj:r(Vz(a)),gI:1,u2:1})]))]))}),Wz=function(e){var r=e.ce.eO?f([s(Uz,e.e,e.gv,e.aO)]):P;return n(O,f([I(f([le,_r(ra),n(z,"gap","8px")]))]),n(A,n(Dz,_n(e.e),e.dg),r))},qz=function(e){return!e.ce.ga||e.pL||Vt(e.uE)?te(""):s(wo,e.e,e.qD,{bz:yo(2),hh:Wz(e),bI:2,bK:e.f,a7:e.aB.a7,d$:e.aB.d0(2),pg:Xa(2),iT:"Performance",d6:e.a$})},Zu=function(e){return e?"true":"false"},gl=function(e){var r=e.b;return vm(r)},Ka=S(function(e,r,a){return n(O,f([I(f([le,n(z,"gap","16px"),n(Mr,k(3),ue),De(G5),n(z,"font-family",Qa.sP),br(k(12)),n(z,"font-feature-settings",'"tnum"')]))]),f([n(O,f([I(f([be(n(Z,function(t){return t.lf},e)),ye(k(120)),hr(he(0))]))]),f([te(r)])),n(O,f([I(f([be(n(Z,function(t){return t.lh},e))]))]),f([te(a)]))]))}),yl=S(function(e,r,a){return n(O,f([I(f([n(Mr,ue,k(20))]))]),n(A,n(F5,e,r),a))}),Gz=function(e){var r=e.e,a=e.qD;return n(O,f([I(f([le,_r(ra),n(z,"gap","18px"),n(Mr,k(14),ue),ye(k(I5))]))]),f([s(yl,r,"Tape",f([s(Ka,r,"frame",Ie(gl(e.uE))),s(Ka,r,"dt",n(Yc,4,a.hB)),s(Ka,r,"clock",n(Yc,4,a.fQ))])),s(yl,r,"Pointer",f([s(Ka,r,"x",n(Yc,2,a.tB.pH)),s(Ka,r,"y",n(Yc,2,a.tB.pJ)),s(Ka,r,"isDown",Zu(a.tB.sg))])),s(yl,r,"Keyboard",f([s(Ka,r,"pressed",n(Or," ",a.hW.tH)),s(Ka,r,"shift",Zu(a.hW.kY)),s(Ka,r,"ctrl",Zu(a.hW.jr)),s(Ka,r,"meta",Zu(a.hW.j9)),s(Ka,r,"alt",Zu(a.hW.i2))])),s(yl,r,"Wheel",f([s(Ka,r,"deltaX",N(a.fB.mk)),s(Ka,r,"deltaY",N(a.fB.ml))]))]))},Nz=function(e){return!e.ce.gb||e.pL?te(""):s(wo,e.e,e.qD,{bz:yo(1),hh:Gz(e),bI:1,bK:e.f,a7:e.aB.a7,d$:e.aB.d0(1),pg:Xa(1),iT:"Inputs",d6:e.a$})},GY=1,m4=function(e){return{i2:!1,qC:e,jr:!1,j9:!1,kY:!1}},Zz=function(e){return M(e,{j9:!0})},gs=function(e){return Zz(m4(e))},Yz=function(e){return M(e,{jr:!0})},ys=function(e){return Yz(m4(e))},Xz=function(e){return e===1?"\u2325":"Alt"},Qz=function(e){return e===1?"\u2303":"Ctrl"},Kz=l(function(e,r){if(n(pn,"Key",r))return n(Ba,3,r);if(n(pn,"Digit",r))return n(Ba,5,r);switch(r){case"BracketLeft":return"[";case"BracketRight":return"]";case"Slash":return"/";case"Backslash":return"\\";case"Period":return".";case"Comma":return",";case"Semicolon":return";";case"Quote":return"'";case"Backquote":return"`";case"Minus":return"-";case"Equal":return"=";case"Space":return"Space";case"ArrowLeft":return"\u2190";case"ArrowRight":return"\u2192";case"ArrowUp":return"\u2191";case"ArrowDown":return"\u2193";case"Enter":return e===1?"\u21A9":"Enter";case"Escape":return e===1?"\u238B":"Esc";case"Tab":return e===1?"\u21E5":"Tab";case"Backspace":return e===1?"\u232B":"Backspace";case"Delete":return e===1?"\u2326":"Del";default:return r}}),eD=function(e){return e===1?"\u2318":"Win"},rD=function(e){return e===1?"\u21E7":"Shift"},_l=l(function(e,r){var a=e===1?"":"+",t=n(kr,ne,f([r.jr?D(Qz(e)):w,r.i2?D(Xz(e)):w,r.kY?D(rD(e)):w,r.j9?D(eD(e)):w,D(n(Kz,e,r.qC))]));return n(Or,a,t)}),aD=function(e){var r=(function(){var t=e.qD.kv===1?gs("KeyI"):ys("KeyI");return n(_l,e.qD.kv,t)})(),a=du(e.e);return n(pl,e.e,{jy:!1,ge:function(t){return t?Qe.ux:Qe.sQ},ni:vn(a),si:function(t){return t?"Lights on":"Lights off"},sj:f([!1,!0]),e$:"Lights",tf:function(t){return re(t,a)?e.fc:e.ko(Qv(e.e))},th:e.th,dX:0,t9:function(t){return function(o){return si}},ud:function(t){return D(r)},uM:1})},nD={$:2},tD={$:3},oD=(function(){var e=D3,r=e.a,a=e.b;return n(A,r,a)})(),cD=function(e){return{$:1,a:e}},h4=Ot("title"),iD=U(function(e,r,a,t){var o=_n(e).kx,c=re(t,a),i=n(X2,t,o),u=n(lr,function(v){return v.jh},e),$=c?f([n(z,"outline","3px solid "+Me(u)),n(z,"outline-offset","2px")]):P;return n(Un,f([n(Ge,"aria-pressed",c?"true":"false"),n(Ge,"type","button"),h4(s3(t)),jn(r(cD(t))),I(X(f([ye(k(28)),Ce(k(28)),vr(Ne(50)),_e(cr(i)),s(ht,k(1),xn,cr(u)),wr(da),sa(k(0))]),$))]),P)}),uD=S(function(e,r,a){var t=dt(a);return n(O,f([n(Ge,"role","group"),n(Ge,"aria-label","Accent colour"),I(f([le,De(de),n(z,"gap","12px"),hr(he(0))]))]),n(G,s(iD,e,r,t),oD))}),fD=U(function(e,r,a,t){return n(O,f([I(f([le,De(de),Lr(de),n(z,"gap","14px"),n(Mr,k(6),k(0)),hr(he(0))]))]),X(a,f([s(uD,e,r,t)])))}),$D=function(e){return n(O,f([I(f([ye(k(12)),Ce(k(12)),vr(k(2)),_e(cr(e))]))]),P)},lD=function(e){return n(O,f([I(f([le,n(z,"gap","3px"),hr(he(0))]))]),n(G,$D,f([e.p0,e.rA,e.p8,e.rO,e.tO,e.vq])))},g4=S(function(e,r,a){var t=r?Oe(f([_e(n(Z,function(o){return o.bx},e)),be(n(Z,n(je,function(o){return o.bx},Gu),e))])):be(n(Z,function(o){return o.lh},e));return n(O,f([I(f([n(Mr,k(0),k(12)),Ce(k(32)),le,De(de),yi(gi),n(z,"gap","10px"),t]))]),f([lD(a),n(Cr,f([I(f([ll(he(1)),br(k(13))]))]),f([te(a.sV)]))]))}),vD=U(function(e,r,a,t){var o=t;return ua(hl,Kc(r),qu(e),f([C(fD,e,r.d6,a,o.c4)]),D({tc:r.d6(nD),te:r.d6(tD)}),g4(e),P,o.bm)}),sD=S(function(e,r,a){var t=a;return C(ms,Kc(r),qu(e),g4(e),t.bm)}),dD=function(e){if(!e.ce.co||e.pL)return te("");var r={fR:Q3,d6:e.ku};return n(O,P,f([s(wo,e.e,e.qD,{bz:yo(5),hh:C(vD,e.e,r,f([aD(e)]),e.T),bI:5,bK:e.f,a7:e.aB.a7,d$:e.aB.d0(5),pg:Xa(5),iT:"Theme",d6:e.a$}),s(sD,e.e,r,e.T)]))},bD=function(e){return s(Jn,"style",P,f([te(`
.`+(is+(` {
  position: fixed;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  overflow: visible;
}
.`+(is+`::backdrop {
  background: transparent;
}
`))))]))},pD=l(function(e,r){return`
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
`)))))}),mD=`
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
`,hD=function(e){var r=Me(n(mr,.25,n(lr,function(t){return t.bx},e))),a=Me(n(lr,function(t){return t.bx},e));return s(Jn,"style",P,f([te(X(mD,n(pD,a,r)))]))},gD=function(e){var r=Me(si),a=Me(n(mr,.25,n(lr,function(i){return i.bx},e))),t=Me(n(lr,function(i){return i.jg},e)),o=Me(n(lr,function(i){return i.i0},e)),c=Me(n(lr,function(i){return i.bx},e));return s(Jn,"style",P,f([te(`
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
`))))))))))))))))))))))))))))]))},yD=l(function(e,r){return n(wm,e+" ",r)}),_D=function(e){return{p0:n(Z,function(r){return r.bx},e),rA:cr(Gu(n(lr,function(r){return r.bx},e))),g8:Jt.c1}},CD=function(e){return _D(e)},PD=function(e){return{$:5,a:e}},SD=function(e){return{$:11,a:e}},xD={$:15},jD=function(e){return{$:9,a:e}},kD={$:10},wD={$:7},TD={$:8},LD=function(e){var r=e,a=n(Na,l(function(t,o){return p(o,t)}),r.aN);return{a7:xr(r.aN),d0:function(t){return n(ce,0,n(se,v$,jr(n(Ar,function(o){var c=o.a;return re(c,t)},a))))}}},MD=l(function(e,r){return{R:r.lx.R,qD:e.qD,ht:{oc:n(ir,e.d6,jD),pl:n(se,function(a){return{bz:a.bz,ib:a.ib}},r.en)},U:r.U,f:r.f,f1:e.f1,dg:r.dg,n$:r.n$,fc:e.d6(xD),kl:n(ir,e.d6,pm),km:e.d6(_p),gu:e.gu,kn:n(ir,e.d6,G3),a$:n(ir,e.d6,hp),ko:function(a){return e.d6(PD(a))},kp:n(ir,e.d6,SD),kq:e.d6(kD),kr:e.d6(wD),gv:n(ir,e.d6,gp),ks:e.d6(TD),dW:e.dW,ku:n(ir,e.d6,X3),fd:e.fd,th:n(ir,e.d6,yp),aO:r.aO,bP:r.bP,aB:LD(r.f),uE:e.uE,T:r.T,e:r.e,c1:r.c1,ce:e.gH,pL:r.pL}}),zD=l(function(e,r){switch(e){case 3:return{pH:r.bQ,pJ:.5*(r.bW+r.bB)};case 2:return{pH:r.bJ,pJ:.5*(r.bW+r.bB)};case 0:return{pH:.5*(r.bJ+r.bQ),pJ:r.bW};default:return{pH:.5*(r.bJ+r.bQ),pJ:r.bB}}}),NY=1,DD={mD:0,f6:0,dG:0,e3:0,oi:0,u1:"normal",ed:0},Cl=S(function(e,r,a){switch(e){case 0:return r;case 1:return .5*(r+a);default:return a}}),HD=U(function(e,r,a,t){switch(r){case 0:return p(s(Cl,a,e.bJ,e.bQ),e.bW-t);case 1:return p(s(Cl,a,e.bJ,e.bQ),e.bB+t);case 2:return p(e.bJ-t,s(Cl,a,e.bW,e.bB));default:return p(e.bQ+t,s(Cl,a,e.bW,e.bB))}}),Pl=function(e){switch(e){case 0:return"0";case 1:return"-50%";default:return"-100%"}},y4=function(e){var r=e.rK,a=e.pQ,t=e.ex,o=e.bz,c=(function(){switch(t){case 0:return"-100%";case 1:return"0";case 2:return Pl(a);default:return Pl(a)}})(),i=(function(){switch(t){case 0:return Pl(a);case 1:return Pl(a);case 2:return"-100%";default:return"0"}})(),u="translate("+(i+(", "+(c+")"))),$=C(HD,o,t,a,r),v=$.a,d=$.b;return f([or(Ct),ba(k(v)),ja(k(d)),n(z,"transform",u)])},AD=l(function(e,r){return n(O,f([I(X(y4({pQ:1,bz:r.bz,ex:r.ex,rK:6}),f([n(Mr,k(7),k(14)),_e(e.p0),be(e.rA),vr(Ya.e7),yt(he(e.g8)),le,_r(cc),n(z,"gap","12px"),n(z,"width","max-content"),$l(DD),n4(k(360)),kn(dr(1.45))])))]),f([n(Cr,P,f([te(r.e$)])),(function(){var a=r.ud;if(a.$===1)return te("");var t=a.a;return n(Cr,f([I(f([be(e.rA)]))]),f([te(t)]))})()]))}),BD=l(function(e,r){return{he:0,cM:0,u1:X(N(r),e)}}),ID=BD("deg"),ED=function(e){var r=e.u1;return{lk:0,u1:n(vi,"rotate",f([r]))}},FD=S(function(e,r,a){return n(O,f([I(f([or(Ct),ba(k(a.pH)),ja(k(a.pJ)),_e(e.p0),ye(k(10)),Ce(k(10)),yt(he(e.g8)),n(z,"transform-origin","top left"),Pi(ED(ID((function(){switch(r){case 3:return-45;case 2:return 135;case 1:return 45;default:return-135}})())))]))]),P)}),_4=l(function(e,r){return n(O,P,f([s(FD,e,r.ex,n(zD,r.ex,r.bz)),n(AD,e,r)]))}),VD=l(function(e,r){var a=r;if(a.$){var t=a.a,o=t._;switch(o.$){case 1:return n(_4,e,t);case 2:return n(_4,e,t);case 0:return te("");default:return te("")}}else return te("")}),RD=480,OD=l(function(e,r){return e.hx}),C4=ge("min-width"),JD=U(function(e,r,a,t){var o=a?Oe(f([_e(n(Z,function(c){return c.bx},e)),be(n(Z,n(je,function(c){return c.bx},Gu),e))])):be(n(Z,function(c){return c.lh},e));return n(O,f([I(f([le,Lr(ts),De(de),n(Mr,k(0),k(12)),Ce(k(32)),yi(gi),o]))]),f([n(Cr,f([I(f([br(k(13)),ll(he(1))]))]),f([te(t.iH+(": "+t.e$))])),n(Cr,f([I(f([br(k(13)),C4(k(70)),hr(he(0)),t4(mt)]))]),f([te(n(ce,"",n(se,_l(r.kv),n(OD,t,r))))]))]))}),UD=function(e){return{fR:mm,e5:320,kJ:"Type a command\u2026",d6:e,va:{sJ:400,u6:50}}},WD=function(e){if(n(Pu,e.ce,e.R)){var r=n(JD,e.e,e.qD),a=qu(e.e),t=UD(e.kl);return n(O,P,f([s(wo,e.e,e.qD,{bz:yo(6),hh:n(O,f([I(f([ye(k(RD))]))]),f([ua(hl,t,a,P,w,r,P,e.R)])),bI:6,bK:e.f,a7:e.aB.a7,d$:e.aB.d0(6),pg:Xa(6),iT:"Command palette",d6:e.a$}),C(ms,t,a,r,e.R)]))}else return te("")},qD=l(function(e,r){return n(O,f([n(Ge,"role","status"),I(X(y4({pQ:r.pQ,bz:r.bz,ex:r.ex,rK:6}),f([n(Mr,Nn.kZ,Nn.so),vr(Ya.e7),_e(n(Z,function(a){return a.bx},e)),be(n(Z,function(a){return s(N1,.6,a.bx,a.lh)},e)),Oe(wn.iT),$l(Z1),cl.rb,yt(he(Jt.pl)),n(z,"pointer-events","none"),d4(b4(f([p(0,f([n(vc,"opacity","0")])),p(8,f([n(vc,"opacity","1")])),p(92,f([n(vc,"opacity","1")])),p(100,f([n(vc,"opacity","0")]))]))),s4(p4(hm)),n(z,"animation-fill-mode","forwards")])))]),f([te(r.Y)]))}),GD=function(e){var r=e.ht.pl;if(r.$===1)return te("");var a=r.a.ib,t=r.a.bz;return n(qD,e.e,{pQ:1,bz:t,ex:1,Y:a?"Nothing to Reset":"Use the browser's Back button to undo"})},ND=function(e){var r=l(function(a,t){return"inset 0 0 "+(N(a)+("px 0 "+Me(n(mr,t,e))))});return n(Or,", ",f([n(r,90,.22),n(r,30,.4),n(r,8,.65)]))},P4=function(e){switch(e){case 0:return w;case 1:return D(s(qr,1/6,1,.5));default:return D(s(qr,1/3,1,.5))}},ZD=function(e){var r=P4(e.n$);if(r.$===1)return te("");var a=r.a;return n(O,f([I(f([or(Ct),ja(ue),ba(ue),mt(ue),_t(ue),n(z,"pointer-events","none"),n(z,"box-shadow",ND(a))]))]),P)},ZY=0,S4=n(Fu,0,"rem"),YD=function(e){if(!Vt(e.uE)||e.pL)return te("");var r=e.qD.bT,a=e.qD.tB,t=Me(a.sg?n(lr,function(c){return c.lh},e.e):n(lr,function(c){return c.bx},e.e)),o=n(Or," ",f(["drop-shadow(1px 0 "+(t+")"),"drop-shadow(-1px 0 "+(t+")"),"drop-shadow(0 1px "+(t+")"),"drop-shadow(0 -1px "+(t+")")]));return n(O,f([I(f([or(Sn),ja(ue),ba(ue),ye(S4(2)),Ce(S4(2)),n(z,"pointer-events","none"),n(z,"transform","translate("+(N(a.pH+.5*r.va)+("px, "+(N(-a.pJ+.5*r.rW)+"px)")))),be(a.sg?n(Z,function(c){return c.bx},e.e):n(Z,function(c){return c.lh},e.e)),n(z,"filter",o),yt(he(Jt.ba+1))]))]),f([Qe.tB]))},XD=function(e){return{$:0,a:e}},QD=fg,YY=ne,KD=function(e){return n(H,e,ae(0))};function _s(){return ai(Cs())}function Cs(){return C(ri,S(function(e,r,a){return{hk:r,dD:a,cR:e}}),n(j,"duration",q),n(j,"callCount",Gr),n(j,"children",KD(function(e){return _s()})))}var x4=_s();_s=function(){return x4};var eH=Cs();Cs=function(){return eH};var rH=function(e){return n(Ye,e,n(Cu,f(["detail"]),s(Ha,l(function(r,a){return{gB:r,aD:a}}),n(j,"recordingStartTime",q),n(j,"tickSnapshots",QD(s(Ha,l(function(r,a){return{jG:a,dv:r}}),n(j,"timestamp",q),n(j,"flameGraph",x4)))))))},aH=function(e){var r=e.td,a=e.t0;return s(Jn,"profiler-element",X(f([n(Zr,"result",rH(r))]),a?f([n(Ge,"running","")]):P),P)},nH=function(e){return aH({td:XD,t0:re(e,B$)})},tH=function(e){return tr(e)?{u1:"none"}:{u1:n(Or,", ",e)}},oH=n(ir,ge("font-family"),tH),Ps=l(function(e,r){return n(R$,l(function(a,t){var o=t,c=n(Xe,a,e);if(c.$===1)return o;var i=c.a;return{hk:o.hk-i.hk,dD:n(Ps,i.dD,o.dD),cR:o.cR-i.cR}}),r)}),j4=l(function(e,r){var a=e.cT,t=e.c$,o=r.aD,c=t?n(ce,He,n(se,function(u){return u.jG},n(Ur,t-1,o))):He,i=n(ce,He,n(se,function(u){return u.jG},n(Ur,a,o)));return n(Ps,c,i)}),cH=ge("max-height"),Ss=function(e){return s(nu,S(function(r,a,t){return n(A,a,t)}),P,e)},xi=function(e){return{$:9,a:e}},k4=function(e){var r=(function(a){return 1-a.iY/a.h6})(s(me,l(function(a,t){var o=n(Kr,t.gr,ct(a));return{h6:t.h6+t.g3,gr:t.gr+1,iY:t.iY+o/(t.gr-1)*t.g3,g3:t.g3*.7}}),{h6:0,gr:10,iY:0,g3:1},n(vt,8,Wc(e))));return{aT:1,aX:r,D:.35,a4:.45}},iH=function(e){return n(Zr,"mouseout",ae(e))},uH=function(e){return n(Zr,"mouseover",ae(e))},fH=Rr(function(e,r,a,t,o,c){var i=a>0?c/a*100:0,u=re(t,D(o)),$=cr(u?e.lh:k4(o)),v=!re(t,w),d=dr(v&&!u?.3:1);return n(O,f([I(f([or(Co),il(k(r*16)),Ce(k(24)),kn(k(24)),wr(da),aa(d),ka(f([_e(cr(e.k9)),be(cr(e.lh))]))])),uH(xi(D(o))),iH(xi(w))]),f([n(O,f([I(f([or(Sn),ja(ue),ba(k(r*16)),ye(Ne(i)),Ce(Ne(100)),_e($)]))]),P),n(Cr,f([I(f([or(Co),il(k(6)),yt(he(1))]))]),f([te(o)]))]))}),$H=Te(function(e,r,a,t,o){var c=o.a,i=o.b.dD,u=o.b.cR;return n(A,Sr(fH,e,r,a,t,c,u),E(w4,e,r+1,a,t,i))}),w4=Te(function(e,r,a,t,o){return n(Vn,C($H,e,r,a,t),n(_i,An,ln(o)))}),lH=Te(function(e,r,a,t,o){var c=s(ju,r,a,t),i=c.a,u=i.b,$=c.b,v=$.b,d=n(j4,{cT:v,c$:u},t),b=n(ce,0,z$(n(G,function(h){var g=h.cR;return g},Ss(d))));return n(O,f([I(f([sa(k(8)),T5(Ru),cH(k(300)),_e(cr(e.lb)),be(cr(e.li))]))]),E(w4,e,0,b,o,d))}),xs=function(e){return s(N$,"alignSelf","align-self",e(Z$))},T4={q0:0,u1:"block"},vH=ge("flex-start"),sc=Tr("height"),L4=Zr,dc=xo("g"),Sl=xo("line"),M4=l(function(e,r){var a=r.aD,t=function(o){return o<0?He:n(ce,He,n(se,function(c){return c.jG},n(Ur,o,a)))};return n(Ps,t(e-1),t(e))}),z4=function(e){return e.$===-2},D4=function(e){return z4(e)?0:n(ce,0,z$(n(G,function(r){var a=r.dD;return 1+D4(a)},Ss(e))))},sH=function(e){var r=Ir(e.aD);return n(ce,0,z$(n(G,function(a){return D4(n(M4,a,e))},n(Ga,1,r-1))))},dH=function(e){return n(_i,ne,e)},xl=l(function(e,r){var a=r.gB,t=r.aD;return e?n(ce,a,n(se,function(o){return o.dv},n(Ur,e-1,t))):a}),H4=l(function(e,r){var a=n(ce,r.gB,n(se,function(t){return t.dv},n(Ur,e,r.aD)));return a-n(xl,e,r)}),bH=function(e){var r=Ir(e.aD),a=dH(n(G,function(o){return n(H4,o,e)},n(Ga,1,r-1))),t=n(Le,0,Da(xr(a)*.95)-1);return n(ce,16.7,jr(n(lt,t,a)))},ji=xo("rect"),Yu=Tr("stroke"),Xu=Tr("stroke-width"),pH=function(e){return{$:5,a:e}},mH=function(e){return{$:6,a:e}},hH={aU:0,u1:"ew-resize"},jl=Tr("x1"),kl=Tr("x2"),wl=Tr("y1"),Tl=Tr("y2"),gH=U(function(e,r,a,t){var o=a.a,c=a.b,i=n(la,r,Pn.iM),u=n(la,r,Pn.iz),$=function(R){return n(Ye,function(V){return R({fP:V})},n(j,"clientX",q))},v=l(function(R,V){return n(dc,P,f([n(Sl,f([jl(N(R)),wl("0"),kl(N(R)),Tl(N(i)),Yu("transparent"),Xu(N(n(la,r,10))),qn(f([wr(hH)])),n(L4,"pointerdown",$(V))]),P),n(Sl,f([jl(N(R)),wl("0"),kl(N(R)),Tl(N(i)),Yu(Me(e.kx.tO)),Xu(N(n(la,r,1))),qn(f([Wn(ur)]))]),P)]))}),d=s(ju,r,n(fi,o,c),t),b=d.a,h=b.a,g=b.b,y=d.b,_=y.a,x=y.b,T=h,L=_,B=(function(){if(o.$){var R=o.a,V=(function(){return R?n(ce,t.gB,n(se,function(W){return W.dv},n(Ur,x,t.aD))):n(xl,g,t)})();return n(Sl,f([jl(N(V)),wl("0"),kl(N(V)),Tl(N(u)),Yu(Me(e.kx.tO)),Xu(N(n(la,r,2))),qn(f([Wn(ur)]))]),P)}else return n(dc,P,P)})();return n(dc,P,f([n(v,T,pH),n(v,L,mH),B]))}),A4=S(function(e,r,a){return re(r,D(a))?Me(e.lh):Me(k4(a))}),B4=l(function(e,r){if(e.$)return 1;var a=e.a;return re(a,r)?1:.3}),I4=function(e){return n(Zr,"mouseout",ae(e))},E4=function(e){return n(Zr,"mouseover",ae(e))},js=Tr("opacity"),ks=km,F4=xo("title"),bc=Tr("width"),pc=Tr("x"),mc=Tr("y"),yH=l(function(e,r){var a=r.nb,t=r.mp,o=r.e$,c=r.rW,i=r.va,u=r.pJ,$=r.pH,v=o+(" ("+(n(Nu,2,t)+"ms)")),d=n(B4,e.cp,o),b=s(A4,e.du,e.cp,o),h=n(ji,f([pc(N($)),mc(N(u)),bc(N(i)),sc(N(c)),Pt(b),js(N(d)),E4(xi(D(o))),I4(xi(w))]),f([n(F4,P,f([ks(v)]))])),g=a?f([n(ji,f([pc(N($)),mc(N(u)),bc(N(i)),sc(N(n(la,e.a9,2))),Pt(Me(e.du.kx.tO)),qn(f([Wn(ur)]))]),P)]):P;return n(A,h,g)}),V4=U(function(e,r,a,t){return s(me,l(function(o,c){var i=o.a,u=o.b,$=c.a,v=c.b,d=u.cR/e.fa,b=Q(d,e.cI)>0,h=C(V4,e,r+1,$,u.dD),g=n(qe,e.cI,d),y=n(yH,e,{mp:u.cR,rW:g,nb:b,e$:i,va:e.iL,pH:e.dE+r*e.iL,pJ:e.cI-$-g});return p($+g,X(y,X(h,v)))}),p(a,P),n(_i,An,ln(t))).b}),_H=l(function(e,r){var a=e.pE/e.fa,t=n(qe,e.cI,a),o=Q(a,e.cI)>0,c=n(la,e.a9,1),i=n(Le,0,e.pf-c),u=n(qe,i,n(la,e.a9,Pn.pe)),$=n(ji,f([pc(N(e.dE)),mc(N(e.cI-t)),bc(N(u)),sc(N(t)),Pt(Me(e.du.lf)),qn(f([Wn(ur)]))]),P),v=n(la,e.a9,2),d=o?f([n(ji,f([pc(N(e.dE)),mc("0"),bc(N(u)),sc(N(v)),Pt(Me(e.du.kx.tO)),qn(f([Wn(ur)]))]),P)]):P,b=n(Le,0,i-u),h=e.dE+u,g=(function(){if(b<=0||e.j7<=0||z4(r))return P;var y=b/e.j7;return C(V4,{dE:h,cp:e.cp,fa:e.fa,cI:e.cI,iL:y,du:e.du,a9:e.a9},0,0,r)})();return n(A,$,X(d,g))}),CH=l(function(e,r){var a=function(i){return n(ce,0,n(se,function(u){return u.dv},n(Ur,i,r.aD)))},t=n(Le,1,n(I$,e.bJ,r)-1),o=Ir(r.aD),c=n(qe,o-1,n(I$,e.bQ,r)+1);return n(Ar,function(i){var u=n(xl,i,r),$=a(i);return Q($,e.bJ)>-1&&Q(u,e.bQ)<1},n(Ga,t,c))}),PH=Te(function(e,r,a,t,o){var c=n(CH,r,t),i=n(la,r,Pn.iz),u=sH(t),$=n(Le,33.3,bH(t)),v=$>0?$/i:1,d=n(Vn,function(y){var _=n(H4,y,t);return n(_H,{dE:n(xl,y,t),cp:o,j7:u,fa:v,cI:i,du:e,pf:_,pE:_,a9:r},n(M4,y,t))},c),b=16.7/v,h=n(Sl,f([jl(N(r.bJ)),kl(N(r.bQ)),wl(N(i-b)),Tl(N(i-b)),Yu(Me(e.kx.vq)),Xu(N(n(la,r,1))),qn(f([Wn(ur)]))]),P),g=n(ji,f([pc(N(r.bJ)),mc("0"),bc(N(r.bQ-r.bJ)),sc(N(i)),Pt(Me(e.lb))]),P);return n(dc,P,f([g,n(dc,P,d),h,C(gH,e,r,a,t)]))}),SH=Tr("font-size"),xH=xo("text"),jH=l(function(e,r){var a=e.lJ,t=e.oj,o=e.mI,c=.6*o,i=Da((a-t)/c);return Q(Aa(r),i)<1?r:i<=1?"":n(Rc,i-1,r)+"\u2026"}),kH=Rr(function(e,r,a,t,o,c){var i=c.hk,u=c.cR,$=n(la,r,Pn.oP),v=.3*$,d=a.f_*$,b=n(B4,t,o),h=.6*$,g=s(A4,e,t,o),y=n(Or," > ",Ve(n(A,o,a.fM))),_=y+(" ("+(Ie(i)+("x, "+(n(Nu,2,u)+"ms)"))));return n(dc,f([E4(xi(D(o))),I4(xi(w))]),f([n(F4,P,f([ks(_)])),n(ji,f([pc(N(a.ee)),mc(N(d)),bc(N(u)),sc(N($)),Pt(g),Yu(Me(e.k8)),Xu(N(n(la,r,1))),js(N(b))]),P),n(xH,f([pc(N(a.ee+v)),mc(N(d+.7*$)),Pt(Me(e.lh)),SH(N(h)),js(N(b))]),f([ks(n(jH,{lJ:u,mI:h,oj:v},_))]))]))}),R4=Te(function(e,r,a,t,o){return s(me,l(function(c,i){var u=c.a,$=c.b,v=i.a,d=i.b,b=E(R4,e,r,{fM:n(A,u,a.fM),f_:a.f_+1,ee:v},t,$.dD),h=Sr(kH,e,r,M(a,{ee:v}),t,u,$);return p(v+$.cR,n(A,h,X(b,d)))}),p(a.ee,P),n(_i,function(c){var i=c.a;return i},ln(o))).b}),wH=Te(function(e,r,a,t,o){var c=n(la,r,Pn.iz),i=s(ju,r,a,t),u=i.a,$=u.a,v=u.b,d=i.b,b=d.b;return n(dc,f([M5("translate("+(N($)+(", "+(N(c)+")"))))]),E(R4,e,r,{fM:P,f_:0,ee:0},o,n(j4,{cT:b,c$:v},t)))}),TH=function(e){return{$:1,a:e}},LH=C(ri,S(function(e,r,a){return TH({n1:a/Pn.iN,oS:e,oT:r})}),n(j,"deltaX",q),n(j,"deltaY",q),n(j,"offsetX",q)),MH=function(e){var r=e.bQ-e.bJ;return n(Or," ",n(G,N,f([e.bJ,0,r,n(la,e,Pn.iM)])))},zH=Te(function(e,r,a,t,o){var c=r.bQ-r.bJ,i=n(ul,f([bc(N(Pn.iN)),sc(N(Pn.iM)),fl(MH(r)),n(L4,"wheel",LH),qn(f([_e(cr(e.F)),os(T4)]))]),f([E(PH,e,r,a,t,o),E(wH,e,r,a,t,o)])),u=function(y){return n(O,f([I(X(f([or(Sn),ja(ue),_t(ue),Wn(ur),n(z,"backdrop-filter","blur(3px)"),n(z,"-webkit-backdrop-filter","blur(3px)")]),y))]),P)},$=function(y){return c?s(er,0,1,(y-r.bJ)/c):0},v=s(ju,r,a,t),d=v.a,b=d.a,h=v.b,g=h.a;return n(O,f([I(f([or(Co),xs(vH)]))]),f([i,u(f([ba(ue),ye(Ne($(b)*100))])),u(f([mt(ue),ye(Ne((1-$(g))*100))]))]))}),DH=l(function(e,r){var a=Ir(r.aD),t=_n(e),o=(function(){var u=n(Ur,a-1,r.aD);if(u.$)return 0;var $=u.a;return $.dv-r.gB})(),c=o>=1e3?n(Nu,2,o/1e3)+" s":n(Nu,0,o)+" ms",i=Ie(a)+(" ticks \xB7 "+c);return n(O,f([I(f([le,De(de),Ce(k(24)),n(Mr,k(4),k(8))]))]),f([n(Cr,f([I(f([be(cr(t.lh))]))]),f([te(i)]))]))}),HH=l(function(e,r){var a=_n(e);return n(O,f([I(f([le,_r(ra),be(cr(a.li)),oH(f(["monospace"])),br(k(12)),n(z,"user-select","none")]))]),f([n(DH,e,r.d_),E(zH,a,r.a9,r.bo,r.d_,r.cp),E(lH,a,r.a9,r.bo,r.d_,r.cp)]))}),AH=l(function(e,r){if(r.$===3){var a=r.a;return D(n(HH,e,a))}else return w}),BH=function(e){if(e.ce.eO){var r=(function(){var t=n(AH,e.e,e.aO);if(t.$)return te("");var o=t.a;return s(wo,e.e,e.qD,{bz:yo(3),hh:n(tc,e.gv,o),bI:3,bK:e.f,a7:e.aB.a7,d$:e.aB.d0(3),pg:Xa(3),iT:"Profile",d6:e.a$})})(),a=n(tc,e.gv,nH(e.aO));return n(O,P,f([a,r]))}else return te("")},IH=lr(n(je,function(e){return e.kx},function(e){return e.tO})),ws=l(function(e,r){return Me(n(mr,r,IH(e.e)))}),EH=S(function(e,r,a){var t=f([n(z,"background-color",n(ws,e,.28)),n(z,"-webkit-backdrop-filter","blur(18px)"),n(z,"backdrop-filter","blur(18px)")]),o="radial-gradient(circle 16px at 100% 0%, transparent 15px, #000 16px)",c=function(i){return n(O,f([I(X(f([or(Sn),ye(k(16)),Ce(k(16)),n(z,"pointer-events","none"),n(z,"-webkit-mask",o),n(z,"mask",o)]),X(t,i)))]),P)};return n(O,f([I(X(f([or(Ct),_t(k(r)),ba(k(r)),yt(he(Jt.ok)),n(z,"pointer-events","auto"),le,De(de),n(z,"gap","12px"),n(z,"padding","8px 14px"),n(z,"border-radius","0 21px 0 0")]),t)),n(Ju,"click",ae(p(e.fc,!0)))]),X(a,f([c(f([n(z,"top","-16px"),n(z,"left","0")])),c(f([n(z,"bottom","0"),n(z,"right","-16px")]))])))}),O4={$:3},FH={$:2},XY=2,QY=1,KY=0,Ts=function(e){var r=e.b;return sm(r)},J4=function(e){var r=e.a;return re(r,hu)},VH=ge("min-height"),U4=ge("stretch"),RH=function(e){return{$:0,a:e}},OH=function(e){var r=Ts(e.uE)-1,a=oi(e.uE),t=a||r<=0;return n($c,f([To("range"),rs("0"),es(Ie(r)),ns("1"),lc(Ie(gl(e.uE))),bi(t),hi(function(o){return e.dW(RH(n(ce,0,Oc(o))))}),Gn("ui-slider"),I(f([ye(k(200)),hr(he(0)),Ce(k(24)),n(z,"-webkit-appearance","none"),n(z,"appearance","none"),_e(ko),wr(da),Va(ur),aa(dr(t?.4:1)),n(z,"--slider-fill",N(r>0?100*gl(e.uE)/r:0)+"%")]))]),P)},JH=function(e){var r=e.e,a=(function(){var $=function(g){return g===1||g===2},v=function(g){switch(g){case 0:return FH;case 1:return O4;default:return Kv}},d=function(g){switch(g){case 0:return"Record";case 1:return"Play";default:return"Pause"}},b=function(g){switch(g){case 0:return oi(e.uE);case 1:return m1(e.uE);default:return Yp(e.uE)}},h=function(g){switch(g){case 0:return Qe.tN;case 1:return Qe.tz;default:return Qe.ts}};return n(pl,r,{jy:!1,ge:h,ni:b,si:d,sj:f([0,1,2]),e$:"Tape transport",tf:function(g){return b(g)||$(g)&&J4(e.uE)?e.fc:e.dW(v(g))},th:e.th,dX:0,t9:function(g){return function(y){return si}},ud:function(g){return w},uM:0})})(),t=n(O,f([I(f([le,_r(ra),n(z,"gap","3px")]))]),f([n(O,f([I(f([le,_r(cc),De(de),n(z,"gap","8px")]))]),f([n(Cr,f([I(f([br(k(12)),be(n(Z,function($){return $.li},r)),n(z,"white-space","nowrap")]))]),f([te("Record from start")])),n(Z5,r,{jy:!1,ng:e.bP,e$:"Record from the first frame (applies on reload)",oe:e.ks})])),n(Cr,f([I(f([br(k(10)),be(n(Z,function($){return $.lf},r)),n(z,"white-space","nowrap")]))]),f([te("applies on reload")]))])),o=oi(e.uE)?n(O,f([I(f([ye(k(200)),hr(he(0)),le,De(de),Lr(de),n(z,"gap","8px"),br(k(13)),be(n(Z,function($){return $.lh},r)),n(z,"white-space","nowrap")]))]),f([n(Cr,f([I(f([ye(k(8)),Ce(k(8)),n(z,"border-radius","50%"),n(z,"background-color",n(ws,e,1))]))]),P),te("Recording\u2026")])):Vt(e.uE)?OH(e):n(O,f([I(f([ye(k(200)),hr(he(0))]))]),P),c=n(O,f([I(f([xs(U4),ye(k(1)),VH(k(28)),n(z,"background-color",Me(n(mr,.18,n(lr,function($){return $.lh},r))))]))]),P),i=(function(){var $=f([ye(k(100)),hr(he(0)),le,De(de),br(k(12)),be(n(Z,function(v){return v.li},r)),n(z,"font-variant-numeric","tabular-nums")]);return J4(e.uE)?n(O,f([I(X($,f([Lr(de)])))]),f([te("\u2014 / \u2014")])):oi(e.uE)?n(O,f([I(X($,f([Lr(de)])))]),f([te(Ie(Ts(e.uE)))])):n(O,f([I($)]),f([n(Cr,f([I(f([Po(he(1)),n(z,"text-align","right")]))]),f([te(Ie(gl(e.uE)+1))])),n(Cr,f([I(f([n(z,"padding","0 4px")]))]),f([te("/")])),n(Cr,f([I(f([Po(he(1)),n(z,"text-align","left")]))]),f([te(Ie(Ts(e.uE)))]))]))})(),u=n(Un,f([jn(e.fd),n(Ge,"aria-label","Close tape"),I(f([ye(k(32)),Ce(k(32)),sa(k(5)),hr(he(0)),vr(Ne(50)),fc(ue),_e(ko),be(L5),wr(da),le,De(de),Lr(de),Va(ur),aa(dr(.9)),n(z,"transition","opacity 120ms cubic-bezier(0.33, 1, 0.68, 1), background-color 120ms cubic-bezier(0.33, 1, 0.68, 1)"),ka(f([aa(dr(1)),_e(C(ol,255,255,255,.18))]))]))]),f([Qe.qO]));return n(O,f([I(f([le,_r(cc),De(de),n(z,"gap","12px")]))]),f([a,o,i,c,t,u]))},UH=function(e){return s(EH,e,6,f([JH(e)]))},WH=function(e){return n(Wr,4,e.f)&&!e.pL?UH(e):te("")},eX=3,W4=function(e){return M(e,{kY:!0})},qH=function(e){var r=(function(){var a=e.qD.kv===1?W4(gs("KeyP")):W4(ys("KeyP"));return n(_l,e.qD.kv,a)})();return n(tl,e.e,{i1:function(a){return a.bx},jy:!1,ge:Qe.sB,jU:n(Wr,6,e.f),e$:"Command palette",bj:e.km,bs:n(St,e.th,{ex:3,e$:"Command palette",ud:D(r)})})},GH=function(e){return n(pi,e.e,{jy:!1,ge:Qe.ug,bI:7,e$:"Device preview",bK:e.f,pg:Xa(7),d6:e.a$,bs:n(St,e.th,{ex:3,e$:"Device preview",ud:w})})},NH=f([0,1,2]),ZH=function(e){switch(e){case 0:return Qe.uZ;case 1:return Qe.tt;default:return Qe.qC}},YH=function(e){var r=(function(){var a=e.qD.kv===1?gs("KeyM"):ys("KeyM");return n(_l,e.qD.kv,a)})();return n(pl,e.e,{jy:Vt(e.uE),ge:ZH,ni:vn(e.n$),si:d3,sj:NH,e$:"Mode",tf:e.kp,th:e.th,dX:1,t9:l(function(a,t){return n(ce,t.bx,P4(a))}),ud:function(a){return D(r)},uM:3})},XH=function(e){return f([n(Ju,"pointerdown",ae(p(e,!0))),n(Ju,"wheel",ae(p(e,!0))),n(Ju,"keydown",n(H,function(r){return r.jr||r.j9||r.i2?Cn("let modifier-bearing combos reach global decoders"):n(No,r.jV,f(["Meta","Control","Shift","Alt"," ","Escape"]))?Cn("bare modifiers, Space, and Escape (global stop) \u2014 let bubble"):ae(p(e,!0))},E(ec,U(function(r,a,t,o){return{i2:o,jr:a,jV:r,j9:t}}),n(j,"key",ke),n(j,"ctrlKey",ie),n(j,"metaKey",ie),n(j,"altKey",ie))))])},QH=function(e){return n(tl,e.e,{i1:function(r){return r.bx},jy:!1,ge:Qe.vr,jU:e.pL,e$:"Zen mode",bj:e.kr,bs:n(St,e.th,{ex:3,e$:"Zen mode",ud:w})})},KH=function(e){var r=e.ce,a=r.hS?f([QH(e)]):P,t=e.e,o=r.co?f([n(pi,t,{jy:!1,ge:Qe.kx,bI:5,e$:"Theme",bK:e.f,pg:Xa(5),d6:e.a$,bs:n(St,e.th,{ex:3,e$:"Theme",ud:w})})]):P,c=r.dJ?f([YH(e)]):P,i=n(kr,ne,f([r.ga?D(n(pi,t,{jy:Vt(e.uE),ge:Qe.pM,bI:2,e$:"FPS meter",bK:e.f,pg:Xa(2),d6:e.a$,bs:n(St,e.th,{ex:3,e$:"FPS meter",ud:w})})):w,r.gb?D(n(pi,t,{jy:!1,ge:Qe.qD,bI:1,e$:"Inputs",bK:e.f,pg:Xa(1),d6:e.a$,bs:n(St,e.th,{ex:3,e$:"Inputs",ud:w})})):w,(function(){if(r.hR){var _=n(Wr,4,e.f);return D(n(tl,t,{i1:Xa(4),jy:!1,ge:Qe.uE,jU:_,e$:_?"Close tape":"Tape",bj:e.fd,bs:n(St,e.th,{ex:3,e$:"Tape",ud:w})}))}else return w})()])),u=f([le,_r(ra),De(de),n(z,"gap","6px")]),$=function(_){return n(O,f([I(u)]),_)},v=r.dI?f([GH(e)]):P,d=r.f9?f([n(pi,t,{jy:!1,ge:Qe.rk,bI:0,e$:"Configurations",bK:e.f,pg:Xa(0),d6:e.a$,bs:n(St,e.th,{ex:3,e$:"Configurations",ud:w})})]):P,b=n(Pu,r,e.R)?f([qH(e)]):P,h=n(Ar,n(ir,Wv,tr),f([d,c,v,o,b,i])),g=n(O,f([I(f([le,_r(ra),De(de),n(z,"gap","24px"),e.pL?Oe(f([Pi(ds(k(-72))),aa(dr(0)),n(z,"pointer-events","none")])):Oe(f([Pi(ds(ue)),aa(dr(1)),n(z,"pointer-events","auto")])),n(z,"transition","transform 240ms cubic-bezier(0.33, 1, 0.68, 1), opacity 240ms cubic-bezier(0.33, 1, 0.68, 1)")])),n(Ge,"aria-hidden",e.pL?"true":"false")]),n(G,$,h)),y=n(kr,ne,f([tr(a)?w:D(n(O,f([I(X(u,f([n(z,"pointer-events","auto")])))]),a)),tr(h)?w:D(g)]));return tr(y)?te(""):n(O,X(f([I(f([or(Sn),ja(k(12)),ba(k(12)),ye(k(48)),le,_r(ra),De(de),n(z,"gap","24px"),n(z,"pointer-events","none"),yt(he(Jt.r0))]))]),XH(e.fc)),y)},eA=function(e){if(!oi(e.uE)&&!Vt(e.uE)||e.pL)return te("");var r=6,a=100,t=N(-a)+"px",o="linear-gradient(#000 0 0) padding-box, linear-gradient(#000 0 0)",c=21,i=a+r,u=i+c;return n(O,f([I(f([or(Ct),ja(ue),ba(ue),mt(ue),_t(ue),n(z,"overflow","hidden"),n(z,"pointer-events",Vt(e.uE)?"auto":"none"),yt(he(Jt.ok-1))])),jn(e.dW(m1(e.uE)?Kv:O4))]),f([n(O,f([I(f([or(Sn),n(z,"top",t),n(z,"left",t),n(z,"right",t),n(z,"bottom",t),n(z,"pointer-events","none"),n(z,"border",N(i)+"px solid transparent"),n(z,"border-radius",N(u)+"px"),n(z,"background-color",n(ws,e,.28)),n(z,"-webkit-backdrop-filter","blur(18px)"),n(z,"backdrop-filter","blur(18px)"),n(z,"-webkit-mask",o),n(z,"-webkit-mask-composite","xor"),n(z,"mask",o),n(z,"mask-composite","exclude")]))]),P)]))},rA=l(function(e,r){var a=n(MD,e,r);return n(O,f([Gn("play-hud"),I(f([or(Ct),ja(ue),ba(ue),mt(ue),_t(ue),n(z,"pointer-events","none")]))]),X(f([gD(a.e),n(yD,".play-hud",a.e),hD(a.e),bD(a.e),ZD(a),wM(a),Nz(a),qz(a),eA(a),KH(a),YD(a),WH(a),n(VD,CD(a.e),a.c1),BH(a),dD(a),gz(a),WD(a),GD(a),$5(a.f)]),a.f1.kw))}),aA=l(function(e,r){if(e.$===1)return n(In,f([n(ee,"display","contents")]),f([n(In,f([n(ee,"display","contents")]),f([r]))]));var a=e.a,t=function(c){return N(c)+"px"},o=n(Su,a.vb,a.jx);return n(In,f([n(ee,"position","fixed"),n(ee,"inset","0"),n(ee,"display","flex"),n(ee,"align-items","center"),n(ee,"justify-content","center"),n(ee,"background-color",a.p$)]),f([n(In,f([n(ee,"position","relative"),n(ee,"width",t(a.jx.va)),n(ee,"height",t(a.jx.rW)),n(ee,"border-radius",t(a.qL)),n(ee,"overflow-x","hidden"),n(ee,"overflow-y","auto"),n(ee,"box-shadow","0 24px 64px rgba(0,0,0,0.28), 0 8px 16px rgba(0,0,0,0.16)"),n(ee,"transform","scale("+(N(o)+")")),n(ee,"transform-origin","center")]),f([r]))]))}),nA=l(function(e,r){var a=qc(r.uE),t=s(ft,nT,He,a.cY),o=v1(a),c=(function(){var x=e.iQ;if(x.$)return Rn(r.bH);var T=x.a;return n(ce,Rn(r.bH),n(se,function(L){return T(L.bK)},n(ea,function(L){return n(Xe,L,a.cY)},jr(r.aY))))})(),i=d1(r.bH),u=n(kr,E(kL,e,r,a,o,i),r.aY),$={mH:r.aJ,cY:u,S:a.S,ol:t,gH:r.eA,e:c},v=e.jQ($),d=c$(n(rA,{qD:n(Zp,r,a),f1:v,gu:Vw,dW:np,fd:tp,gH:r.eA,uE:r.uE,d6:f$},r.bH)),b=Me(_n($.e).F),h=Me(_n($.e).lh),g=c$(Tm($.e)),y=n(aA,n(se,function(x){return{p$:Me(n(lr,function(T){return T.k8},c)),qL:eT(r.bH),jx:x,vb:a.g.bT}},i),e.sl($)),_=(function(){var x=r.hs;if(x.$)return f([g,y,d]);var T=x.a;return f([g,y,d,Xw(T)])})();return n(In,f([Lm(Qp),n(ee,"position","fixed"),n(ee,"inset","0"),n(ee,"overflow-y","auto"),n(ee,"overscroll-behavior","none"),n(ee,"background-color",b),n(ee,"color",h),n(wL,"playflush",ae(p(Xp,!0)))]),_)}),tA=function(e){return eP({b1:rx(e),aC:sj(e),uX:Fw(e),bt:nA(e)})},oA=function(e){return tA(UC(e))},cA={hQ:!0,f9:!0,dI:!0,ga:!0,gb:!1,dJ:!0,eO:!0,hR:!0,co:!0,hS:!0,hU:kv,bP:!1,e:Lv},iA=cA,q4=l(function(e,r){return{aX:e,kW:r}}),Qu=16,G4=function(e){return{aX:0,kW:Yr(s(er,0,255,e)/255*(Qu-1))}},uA=On(f([s(Ha,q4,n(Br,0,Gr),n(Br,1,Gr)),n(Ye,G4,Gr)])),rX=ne,fA=l(function(e,r){return{i:gn(n(G,function(a){var t=a.a,o=a.b;return p(e(t),p(t,o))},r)),pj:e}}),N4=function(e){var r=e.a,a=e.b,t=e.c;return p(p(a,t),(function(){return r?1:0})())},Ll=S(function(e,r,a){return{$:0,a:e,b:r,c:a}}),aX=0,nX=1,Z4=function(e){return e?1:0},$A=On(f([Sr(ml,Te(function(e,r,a,t,o){return p(s(Ll,Z4(e),r,a),n(q4,t,o))}),n(Br,0,Gr),n(Br,1,Gr),n(Br,2,Gr),n(Br,3,Gr),n(Br,4,Gr)),E(ec,U(function(e,r,a,t){return p(s(Ll,Z4(e),r,a),G4(t))}),n(Br,0,Gr),n(Br,1,Gr),n(Br,2,Gr),n(Br,3,Gr))])),lA=s(Ha,l(function(e,r){return{p0:r,uP:n(fA,N4,e)}}),n(j,"trixels",pr($A)),n(j,"bg",uA)),vA=function(e){return{i:He,pj:e}},sA={p0:{aX:0,kW:2},uP:vA(N4)},Ml=Vf,dA=function(e){return n(yn,Ml,f([e.aX,e.kW]))},bA=function(e){return e?1:0},pA=function(e){var r=e.a,a=r.a,t=r.b,o=r.c,c=e.b;return n(yn,Ml,f([bA(a),t,o,c.aX,c.kW]))},Y4=function(e){var r=e.i;return Ss(r)},mA=function(e){return ho(f([p("trixels",n(yn,pA,Y4(e.uP))),p("bg",dA(e.p0))]))},tX=ne,hA=l(function(e,r){switch(e){case 1:return p(r.tO,r.qi);case 2:return p(r.vq,r.qk);case 3:return p(r.rO,r.qg);case 4:return p(r.qQ,r.qf);case 5:return p(r.p8,r.qe);default:return p(r.sv,r.qh)}}),gA=.45,yA=.6,Ls=function(e){return e<=.0404482362771082?e/12.92:n(va,(e+.055)/1.055,2.4)},Ms=function(e){var r=e.a,a=e.b,t=e.c,o=e.d;return{aT:o,p8:t,rO:a,tO:r}},_A=function(e){var r=Ms(e),a=r.aT,t=r.p8,o=r.rO,c=r.tO;return{aT:a,sr:Ls(t),ss:Ls(o),st:Ls(c)}},CA=function(e){var r=e.aT,a=e.sr,t=e.ss,o=e.st,c=.0883024619*o+.2817188376*t+.6299787005*a,i=n(va,c,1/3),u=.2119034982*o+.6806995451*t+.1073969566*a,$=n(va,u,1/3),v=.4122214708*o+.5363325363*t+.0514459929*a,d=n(va,v,1/3);return{hb:1.9779984951*d-2.428592205*$+.4505937099*i,aT:r,ja:.0259040371*d+.7827717662*$-.808675766*i,D:.2104542553*d+.793617785*$-.0040720468*i}},PA=function(e){return CA(_A(e))},X4=U(function(e,r,a,t){return{$:0,a:e,b:r,c:a,d:t}}),zs=U(function(e,r,a,t){var o=F(e,r,a),c=o.a,i=o.b,u=o.c,$=u<=.5?u*(i+1):u+i-u*i,v=u*2-$,d=function(y){var _=y<0?y+1:y>1?y-1:y;return _*6<1?v+($-v)*_*6:_*2<1?$:_*3<2?v+($-v)*(2/3-_)*6:v},b=d(c-1/3),h=d(c),g=d(c+1/3);return C(X4,g,h,b,t)}),Ku=function(e){return C(zs,e.aX,e.a4,e.D,e.aT)},zl=n(je,Ku,PA),Ds=yh,ta=jh,Q4=function(e){var r=e.aT,a=e.ja,t=e.hb,o=e.D,c=n(Ds,a,t)/(na*2),i=c<0?1+c:c,u=ta(t*t+a*a);return{aT:r,ji:u,aX:i,D:o}},Ra=bh,Oa=ph,Dl=function(e){var r=e.aT,a=e.aX,t=e.ji,o=e.D,c=t*Oa(a*2*na),i=t*Ra(a*2*na);return{hb:i,aT:r,ja:c,D:o}},K4=l(function(e,r){var a=Q4(r);return Dl(M(a,{D:e}))}),SA=l(function(e,r){if(e){var a=n(hA,e,r),t=a.a,o=a.b,c=zl(o),i=n(K4,c.D+(1-c.D)*yA,c),u=zl(t),$=n(K4,u.D*(1-gA),u);return f([$,u,c,i])}else return f([zl(r.p0),zl(r.rA)])}),xA=S(function(e,r,a){e:for(;;){var t=n(bv,Jr,e),o=t.a,c=t.b;if(Q(it(o),Jr)<0)return n(pv,!0,{as:r,Z:a,ai:o});var i=c,u=n(A,Ac(o),r),$=a+1;e=i,r=u,a=$;continue e}}),Lo=function(e){return e.b?s(xA,e,P,0):ou},e6=1e-4,r6=function(e){var r=e.aT,a=e.ja,t=e.hb,o=e.D,c=o-.0894841775*t-1.291485548*a,i=c*c*c,u=o-.1055613458*t-.0638541728*a,$=u*u*u,v=o+.3963377774*t+.2158037573*a,d=v*v*v;return{aT:r,sr:-.0041960863*d-.7034186147*$+1.707614701*i,ss:-1.2684380046*d+2.6097574011*$-.3413193965*i,st:4.0767416621*d-3.3077115913*$+.2309699292*i}},a6=function(e){var r=r6(e),a=function(t){return Q(t,-e6)>-1&&Q(t,1+e6)<1};return a(r.st)&&a(r.ss)&&a(r.sr)},jA=U(function(e,r,a,t){e:for(;;){if(t<=0)return r;var o=(r+a)/2;if(a6(Dl(M(e,{ji:o})))){var c=e,i=o,u=a,$=t-1;e=c,r=i,a=u,t=$;continue e}else{var c=e,i=r,u=o,$=t-1;e=c,r=i,a=u,t=$;continue e}}}),kA=function(e){return a6(Dl(e))?e:M(e,{ji:C(jA,e,0,e.ji,24)})},wA=function(e){return{aT:1,aX:e.aX,D:s(er,0,1,e.D),a4:s(er,0,1,e.a4)}},TA=function(e){var r=e.a,a=e.b,t=e.c,o=e.d,c=n(qe,r,n(qe,a,t)),i=n(Le,r,n(Le,a,t)),u=(c+i)/2,$=re(c,i)?0:u<.5?(i-c)/(i+c):(i-c)/(2-i-c),v=re(i,r)?(a-t)/(i-c):re(i,a)?2+(t-r)/(i-c):4+(r-a)/(i-c),d=v*(1/6),b=qv(d)?0:d<0?d+1:d;return{aT:o,aX:b,D:u,a4:$}},LA=function(e){return TA(e)},Hs=function(e){return e<=.00313066844250063?e*12.92:1.055*n(va,e,1/2.4)-.055},MA=U(function(e,r,a,t){return C(X4,e,r,a,t)}),zA=function(e){var r=e.aT,a=e.sr,t=e.ss,o=e.st;return C(MA,Hs(o),Hs(t),Hs(a),r)},DA=function(e){return zA(r6(e))},HA=function(e){return DA(Dl(e))},AA=function(e){return wA(LA(HA(kA(Q4(e)))))},BA=function(e){e:for(;;)if(e.b)if(e.b.b){var a=e.b,t=a;e=t;continue e}else{var r=e.a;return D(r)}else return w},IA=S(function(e,r,a){return{hb:r,aT:1,ja:a,D:e}}),EA=S(function(e,r,a){var t=r.D-e.D,o=t<=1e-6?0:(a-e.D)/t;return{hb:e.hb+(r.hb-e.hb)*o,aT:1,ja:e.ja+(r.ja-e.ja)*o,D:a}}),FA=S(function(e,r,a){e:for(;;)if(r.b){var t=r.a,o=r.b;if(Q(a,t.D)<1)return s(EA,e,t,a);var c=t,i=o,u=a;e=c,r=i,a=u;continue e}else return M(e,{D:a})}),VA=l(function(e,r){if(e.b){var a=e.a,t=e.b;return s(FA,a,t,r)}else return s(IA,r,0,0)}),RA=function(e){var r=n(_i,function(o){return o.D},e),a=n(ce,0,n(se,function(o){return o.D},jr(r))),t=n(ce,a,n(se,function(o){return o.D},BA(r)));return Lo(n(G,function(o){var c=o/(Qu-1);return AA(n(VA,r,a+(t-a)*c))},n(Ga,0,Qu-1)))},As=7,n6=function(e){return Lo(n(G,function(r){return RA(n(SA,r,e))},n(Ga,0,As-1)))},oX=ne,Bs={$:0},t6=Bs,Is=l(function(e,r){return{bI:e,b2:r.b2,sV:r.sV}}),OA=l(function(e,r){return Ov(p(n(Is,0,e),n(Na,l(function(a,t){return n(Is,a+1,t)}),r)))}),JA=U(function(e,r,a,t){return{ez:w,mu:e,dM:!0,j3:r,gC:t6,V:n(OA,a,t)}}),hc={$:0},UA=hc,WA=function(e){return{rp:e.rp,rw:e.rw,tJ:e.tJ,fx:e.fx}},Es=function(e){return{$:0,a:e}},qA=gh,GA=Es({eM:2*qA(.5)}),o6=WA({rp:{pH:0,pJ:0,O:10},rw:{pH:0,pJ:0,O:0},tJ:GA,fx:{pH:0,pJ:1,O:0}}),NA={$:0},gc=NA,c6=function(e){return X(_n(e).kx.sV,du(e)?"|light":"|dark")},ZA=l(function(e,r){return p({cg:o6,dF:!1,dd:n6(_n(r).kx),hK:c6(r),tp:C(JA,mA,lA,{b2:sA,sV:"1"},P),gx:UA,fh:{iV:0,iX:0},cG:{aX:1,kW:9}},gc)}),YA=l(function(e,r){return{bc:r,sV:e}}),XA=l(function(e,r){return n(YA,e,r)}),QA=XA,KA=S(function(e,r,a){var t=r.a,o=r.b;return p(e,n(Ev,p(t,o),a))}),eB=f([n(QA,"Parameters",f([s(KA,"trixel scale",p(.5,1),1)]))]),rB={$:0},aB={$:1},nB={$:2},Fs=l(function(e,r){if(r.$){var t=r.a;return Ue(t)}else{var a=r.a;return e(a)}}),i6=function(e){switch(e.$){case 0:return 1;case 1:return 2;case 2:return 4;case 3:return 1;case 4:return 2;case 5:return 4;case 6:return 4;case 7:return 8;case 8:var r=e.a;return r;case 9:var r=e.a;return r;default:var a=e.a;return o2(a)}},cX=0,u6=S(function(e,r,a){switch(e.$){case 0:var o=e.a;return s(Wy,r,a,o);case 1:var t=e.a,o=e.b;return C(qy,r,a,o,!t);case 2:var t=e.a,o=e.b;return C(Gy,r,a,o,!t);case 3:var o=e.a;return s(Ny,r,a,o);case 4:var t=e.a,o=e.b;return C(Zy,r,a,o,!t);case 5:var t=e.a,o=e.b;return C(Yy,r,a,o,!t);case 6:var t=e.a,o=e.b;return C(Xy,r,a,o,!t);case 7:var t=e.a,o=e.b;return C(Qy,r,a,o,!t);case 8:var i=e.b;return s(tB,i,r,a);case 9:var c=e.b;return s(e_,r,a,c);default:var i=e.a;return s(Ky,r,a,i)}}),tB=S(function(e,r,a){e:for(;;)if(e.b){var t=e.a,o=e.b,c=o,i=r,u=s(u6,t,r,a);e=c,r=i,a=u;continue e}else return a}),Hl=l(function(e,r){var a=e;return n(r_,a,r)}),iX=ne,oB=function(e){return c_(e)},ki=o2,cB=function(e){return n(Hl,oB(ki(e)),e)},f6=function(e){return{$:3,a:e}},iB=function(e){return{$:4,a:e}},$6=1,uB=l(function(e,r){if(r.$){var t=r.a;return Ue(t)}else{var a=r.a;return We(e(a))}}),fB=l(function(e,r){if(r.$){var t=r.a;return Ue(e(t))}else{var a=r.a;return We(a)}}),$B=l(function(e,r){return{b2:r,sV:e}}),lB=function(e){return s(Ha,$B,On(f([n(j,"n",ke),ae("Level")])),n(j,"d",e))},vB=function(e){return n(H,function(r){var a=r.a,t=r.b,o=n(Na,Is,a);if(o.b){var c=o.a,i=o.b;return ae(n(st,s(er,0,xr(a)-1,t),Ov(p(c,i))))}else return Cn("Levels: items is empty")},s(Ha,It,n(j,"items",pr(lB(e))),On(f([n(j,"cur",Gr),ae(0)]))))},l6=l(function(e,r){var a=e,t=n(Bv,n(j,"v",Gr),r);if(t.$===1){var o=t.a;return Ue(f6(sv(o)))}else{var c=t.a;return re(c,$6)?n(uB,function(i){return M(a,{V:i})},n(fB,n(je,sv,f6),n(Bv,vB(a.j3),r))):Ue(iB(c))}}),sB=function(e){var r=s(o$,"_","/",s(o$,"-","+",e)),a=n(Kr,4,4-n(Kr,4,Aa(r)));return X(r,n(Wo,a,"="))},Vs=l(function(e,r){if(r.$)return Ue(e);var a=r.a;return We(a)}),dB=function(e){return{$:10,a:e}},v6=dB,bB=l(function(e,r){var a=r,t={W:0,bb:e,aQ:0,ah:0,ld:0},o=a(t);if(o.$){var u=o.a;return Ue(u)}else{var c=o.a,i=c.a;return We(i)}}),Al=Uy,pB=l(function(e,r){return{$:8,a:e,b:r}}),mB=l(function(e,r){e:for(;;)if(r.b){var a=r.a,t=r.b,o=e+i6(a),c=t;e=o,r=c;continue e}else return e}),ef=function(e){return n(pB,n(mB,0,e),e)},Ja=S(function(e,r,a){return{$:0,a:e,b:r,c:a}}),hB=s(Ja,ou,0,0),uX=ne,gB=S(function(e,r,a){e:for(;;){var t=r(e),o=t,c=o(a);if(c.$===1){var i=c.a;return Ue(i)}else if(c.a.a.$){var g=c.a,y=g.a.a,v=g.b;return We(p(y,v))}else{var u=c.a,$=u.a.a,v=u.b,d=$,b=r,h=v;e=d,r=b,a=h;continue e}}}),Bl=l(function(e,r){return n(gB,e,r)}),xt=l(function(e,r){var a=r;return function(t){var o=a(t);if(o.$){var $=o.a;return Ue($)}else{var c=o.a,i=c.a,u=c.b;return We(p(e(i),u))}}}),fX=1,yB=l(function(e,r){return{$:4,a:e,b:r}}),Mo=yB,_B=l(function(e,r){return{$:5,a:e,b:r}}),Il=_B,CB=function(e){return{$:3,a:e}},zo=CB,PB=function(e){var r=e.a,a=e.b,t=e.c,o=(function(){var i=t>>>(4-a)*8;switch(a){case 4:return f([n(Il,1,t)]);case 1:return f([zo(i)]);case 2:return f([n(Mo,1,i)]);case 3:return f([n(Mo,1,i>>8),zo(255&i)]);default:return P}})(),c=l(function(i,u){return n(A,n(Il,1,i),u)});return Al(ef(s(Zf,c,o,r)))},rf=function(e){return{$:1,a:e}},Tn=function(e){return{$:0,a:e}},Do=l(function(e,r){var a=r;return function(t){var o=a(t);if(o.$){var d=o.a;return Ue(d)}else{var c=o.a,i=c.a,u=c.b,$=e(i),v=$;return v(u)}}}),s6=l(function(e,r){var a=r;return l(function(t,o){var c=n(a,t,o),i=c.a,u=c.b;return p(i,e(u))})}),Rs=l(function(e,r){var a=r.a,t=r.b,o=r.c;if(t===4)return s(Ja,n(Lu,o,a),1,e<<24);if(t){var c=t,i=Ir(a)-1,u=(255&e)<<(3-c)*8|o,$=4278190080>>>c*8;return s(Ja,a,t+1,u)}else return s(Ja,a,1,e<<24)}),d6=S(function(e,r,a){var t=a.a,o=a.b,c=a.c,i=e===4?r:(1<<e*8)-1&r;if(e){if(o===4)return s(Ja,n(Lu,c,t),e,i<<(4-e)*8);if(o){var u=4-o;if(Q(e,u)>0){var $=o+e-4,v=i>>>$*8,d=c|v,b=(8-o-e)*8,h=((1<<$*8)-1&i)<<b;return s(Ja,n(Lu,d,t),e-u,h)}else{var b=(4-(o+e))*8,v=i<<b,d=c|v;return s(Ja,t,o+e,d)}}else return s(Ja,t,e,i<<(4-e)*8)}else return a}),b6=function(e){return l(function(r,a){return p(a,e)})},p6=function(e){return t_(!e)},El=a_,SB=function(e){var r=e.a,a=e.b,t=a.a,o=a.b,c=a.c;return r>=4?n(s6,function(i){return Tn(p(r-4,s(d6,4,i,a)))},p6(1)):r>=1?n(s6,function(i){return Tn(p(r-1,n(Rs,i,a)))},El):b6(rf(a))},xB=U(function(e,r,a,t){e:for(;;){var o=r(e),c=o,i=n(c,a,t),u=i.a,$=i.b;if($.$){var y=$.a;return p(u,y)}else{var v=$.a,d=v,b=r,h=a,g=u;e=d,r=b,a=h,t=g;continue e}}}),jB=l(function(e,r){return n(xB,e,r)}),kB=l(function(e,r){var a=r.a,t=r.b,o=r.c,c=n(jB,p(ki(e),r),SB),i=n(Hl,c,e);if(i.$)return r;var u=i.a;return u}),Os=S(function(e,r,a){var t=(function(){var $=function(d){if(d.$===1)return D(1);var b=d.a;return D(b+1)},v=S(function(d,b,h){return Q(d,r)>-1&&Q(d,a+r)<0?s(Bt,b,$,h):h});return s(ft,v,He,e)})(),o=s(ft,S(function($,v,d){var b=d.a,h=d.b;return p(b+v,s($r,$,b,h))}),p(0,He),t),c=(function(){var $=U(function(b,h,g,y){e:for(;;)if(Q(g,b)>0){var _=b,x=h,T=g-1,L=n(A,0,y);b=_,h=x,g=T,y=L;continue e}else return n(A,h,y)}),v=S(function(b,h,g){var y=g.a,_=g.b;return p(b-1,C($,b,h,y,_))}),d=l(function(b,h){e:for(;;)if(b>=0){var g=b-1,y=n(A,0,h);b=g,h=y;continue e}else return h});return(function(b){var h=b.a,g=b.b;return n(d,h,g)})(s(nu,v,p(15,P),t))})(),i=S(function($,v,d){e:for(;;)if($-a<0){var b=n(Xe,r+$,e);if(b.$===1){var h=$+1,g=v,y=d;$=h,v=g,d=y;continue e}else{var _=b.a;if(_){var x=n(Xe,_,d);if(x.$===1)return v;var T=x.a,h=$+1,g=s(ui,T,$,v),y=s($r,_,T+1,d);$=h,v=g,d=y;continue e}else{var h=$+1,g=v,y=d;$=h,v=g,d=y;continue e}}}else return v}),u=s(i,0,n(y$,a,0),o.b);return{d2:c,gX:u}}),wB=f([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Er=function(e){return function(r){return function(a){return function(t){return function(o){return function(c){return function(i){return function(u){return function($){return function(v){return{$:0,a:e,b:r,c:a,d:t,e:o,f:c,g:i,h:u,i:$,j:v}}}}}}}}}}},Js=l(function(e,r){var a=r.a,t=r.b,o=r.c,c=r.d,i=r.e,u=r.f,$=r.g,v=r.h,d=r.i,b=r.j;if(e>=320)return r;var h=1<<e%32,g=e/32|0;switch(g){case 0:return Er(h|a)(t)(o)(c)(i)(u)($)(v)(d)(b);case 1:return Er(a)(h|t)(o)(c)(i)(u)($)(v)(d)(b);case 2:return Er(a)(t)(h|o)(c)(i)(u)($)(v)(d)(b);case 3:return Er(a)(t)(o)(h|c)(i)(u)($)(v)(d)(b);case 4:return Er(a)(t)(o)(c)(h|i)(u)($)(v)(d)(b);case 5:return Er(a)(t)(o)(c)(i)(h|u)($)(v)(d)(b);case 6:return Er(a)(t)(o)(c)(i)(u)(h|$)(v)(d)(b);case 7:return Er(a)(t)(o)(c)(i)(u)($)(h|v)(d)(b);case 8:return Er(a)(t)(o)(c)(i)(u)($)(v)(h|d)(b);case 9:return Er(a)(t)(o)(c)(i)(u)($)(v)(d)(h|b);default:return r}}),m6=l(function(e,r){var a=r.a,t=r.b,o=r.c,c=r.d,i=r.e,u=r.f,$=r.g,v=r.h,d=r.i,b=r.j;if(e>=320)return!1;var h=1<<e%32,g=e/32|0;switch(g){case 0:return(h&a)>0;case 1:return(h&t)>0;case 2:return(h&o)>0;case 3:return(h&c)>0;case 4:return(h&i)>0;case 5:return(h&u)>0;case 6:return(h&$)>0;case 7:return(h&v)>0;case 8:return(h&d)>0;case 9:return(h&b)>0;default:return!1}}),$X=ky,TB=l(function(e,r){var a=r.a,t=r.b,o=r.c,c=r.d,i=r.e,u=r.f,$=r.g,v=r.h,d=r.i,b=r.j;if(e>=320)return r;var h=~(1<<e%32),g=e/32|0;switch(g){case 0:return Er(h&a)(t)(o)(c)(i)(u)($)(v)(d)(b);case 1:return Er(a)(h&t)(o)(c)(i)(u)($)(v)(d)(b);case 2:return Er(a)(t)(h&o)(c)(i)(u)($)(v)(d)(b);case 3:return Er(a)(t)(o)(h&c)(i)(u)($)(v)(d)(b);case 4:return Er(a)(t)(o)(c)(h&i)(u)($)(v)(d)(b);case 5:return Er(a)(t)(o)(c)(i)(h&u)($)(v)(d)(b);case 6:return Er(a)(t)(o)(c)(i)(u)(h&$)(v)(d)(b);case 7:return Er(a)(t)(o)(c)(i)(u)($)(h&v)(d)(b);case 8:return Er(a)(t)(o)(c)(i)(u)($)(v)(h&d)(b);case 9:return Er(a)(t)(o)(c)(i)(u)($)(v)(d)(h&b);default:return r}}),Us=Te(function(e,r,a,t,o){var c=e+o,i=S(function(d,b,h){e:for(;;)if(d-c<0)if(r){var g=d+1,y=n(Js,d,b),_=s($r,d,r,h);d=g,b=y,h=_;continue e}else if(n(m6,d,b)){var g=d+1,y=n(TB,d,b),_=n(vu,d,h);d=g,b=y,h=_;continue e}else{var g=d+1,y=b,_=h;d=g,b=y,h=_;continue e}else return p(b,h)}),u=s(i,e,a,t),$=u.a,v=u.b;return F(e+o,$,v)}),LB=Te(function(e,r,a,t,o){e:for(;;){var c=a>>>1;if(e.b){var i=e.a,u=e.b,$=(r<<1)+(a&1)-i,v=o+i;if($>=0){var d=u,b=$,h=c,g=t-1,y=v;e=d,r=b,a=h,t=g,o=y;continue e}else return{W:t-1,js:$,k5:v,ld:c}}else return{W:t,js:r,k5:o,ld:a}}}),Fl=l(function(e,r){var a=e===32?r.aQ<<r.W:((1<<e)-1&r.aQ)<<r.W;return{W:r.W+e,bb:r.bb,aQ:r.aQ>>>e,ah:r.ah-e,ld:a|r.ld}}),Ws=function(e){return o_(e)},af=S(function(e,r,a){var t=r,o=a;return l(function(c,i){var u=n(t,c,i),$=u.a,v=u.b,d=n(o,c,$),b=d.a,h=d.b;return p(b,n(e,v,h))})}),MB=S(function(e,r,a){var t=s(af,It,r,Ws(ki(a.bb)-e)),o=n(Hl,t,a.bb);if(o.$)return Ue("BitReader.runDecoder: Unexpected end of Bytes");var c=o.a;return We(c)}),nf=function(e){return n_(!e)},zB=function(e){return e?s(af,l(function(r,a){return r<<16|a}),nf(e),El):s(af,l(function(r,a){return a<<16|r}),nf(e),El)},qs=function(e){e:for(;;){var r=32-e.W;if(Q(r,e.ah)<1&&e.ah>0)return We(n(Fl,r,e));if(ki(e.bb)){var a=n(Fl,e.ah,e),t=(function(){var g=ki(e.bb);switch(g){case 0:return F(0,0,b6(0));case 1:return F(1,8,El);case 2:return F(2,16,nf(0));case 3:return F(3,24,zB(0));default:return F(4,32,p6(0))}})(),o=t.a,c=t.b,i=t.c,u=s(MB,o,i,a);if(u.$===1){var $=u.a;return Ue($)}else{var v=u.a,d=v.a,b=v.b,h={W:a.W,bb:b,aQ:d,ah:c,ld:a.ld};e=h;continue e}}else return We(n(Fl,e.ah,e))}},Gs=l(function(e,r){return function(a){var t=a.W<16?qs(a):We(a);if(t.$===1){var o=t.a;return Ue(o)}else{var c=t.a,i=E(LB,e,0,c.ld,c.W,0),u=i.k5,$=i.W,v=i.ld,d=i.js,b=n(Ur,u+d,r.gX);if(b.$===1)return Ue("Index into trans tree out of bounds");var h=b.a;return We(p(h,{W:$,bb:c.bb,aQ:c.aQ,ah:c.ah,ld:v}))}}}),Zn=l(function(e,r){return function(a){if(e){var t=Q(a.W,e)<0?qs(a):We(a);if(t.$===1){var o=t.a;return Ue(o)}else{var c=t.a,i=c.ld&65535>>>16-e,u=c.ld>>>e;return We(p(i+r,{W:c.W-e,bb:c.bb,aQ:c.aQ,ah:c.ah,ld:u}))}}else return We(p(r,a))}}),Ho=function(e){return function(r){return We(p(e,r))}},DB=U(function(e,r,a,t){var o=t.a,c=t.b,i=t.c;if(Q(o,r+a)<0){var u=n(ce,P,q$(e.d2));return n(Do,function($){switch($){case 16:var v=n(ce,0,n(Xe,o-1,i));return n(xt,n(je,C(Us,o,v,c,i),Tn),n(Zn,2,3));case 17:return n(xt,n(je,C(Us,o,0,c,i),Tn),n(Zn,3,3));case 18:return n(xt,n(je,C(Us,o,0,c,i),Tn),n(Zn,7,11));case 0:return n(m6,o,c)?Ho(Tn(F(o+1,c,n(vu,o,i)))):Ho(Tn(F(o+1,c,i)));default:return Ho(Tn(F(o+1,n(Js,o,c),s($r,o,$,i))))}},n(Gs,u,e))}else return Ho(rf(i))}),HB=Er(0)(0)(0)(0)(0)(0)(0)(0)(0)(0),AB=U(function(e,r,a,t){var o=n(vt,a,wB),c=(function(){var $=S(function(v,d,b){e:for(;;)if(v.b){var h=v.a,g=v.b;if(d.b){var y=d.a,_=d.b;if(y){var x=g,T=_,L=s($r,h,y,b);v=x,d=T,b=L;continue e}else{var x=g,T=_,L=b;v=x,d=T,b=L;continue e}}else return b}else return b});return s($,o,t,He)})(),i=s(Os,c,0,19),u=s(ft,l(function($,v){return Js($)}),HB,c);return n(Bl,F(0,u,c),s(DB,i,e,r))}),BB=l(function(e,r){var a=function(t){var o=t.a,c=t.b;return o<=0?Ho(rf(Ve(c))):n(xt,function(i){return Tn(p(o-1,n(A,i,c)))},r)};return n(Bl,p(e,P),a)}),IB=S(function(e,r,a){var t=function(o){return p(s(Os,o,0,e),s(Os,o,e,r))};return n(xt,t,n(Do,s(AB,e,r,a),n(BB,a,n(Zn,3,0))))}),Vl=S(function(e,r,a){var t=r,o=a;return function(c){var i=t(c);if(i.$===1){var u=i.a;return Ue(u)}else{var $=i.a,v=$.a,d=$.b,b=o(d);if(b.$===1){var u=b.a;return Ue(u)}else{var h=b.a,g=h.a,y=h.b;return We(p(n(e,v,g),y))}}}}),Ns=l(function(e,r){return s(Vl,hC,r,e)}),EB=U(function(e,r,a,t){return n(Ns,t,n(Ns,a,n(Ns,r,Ho(e))))}),FB=n(Do,ne,C(EB,IB,n(Zn,5,257),n(Zn,5,1),n(Zn,4,4))),Zs=function(e){return function(r){return Ue(e)}},Ys=n(Zn,1,0),VB=l(function(e,r){var a=r.a,t=r.b,o=r.c,c=e%4;if(Q(e,Ir(a)*4+t)>-1)return w;if(Q(e,Ir(a)*4)>-1)return D(255&o>>>8*(3-c));var i=e/4|0,u=n(Ur,i,a);if(u.$===1)return w;var $=u.a;return D(255&$>>>8*(3-c))}),RB=Te(function(e,r,a,t,o){e:for(;;){var c=e%4,i=e/4|0;if(r<=0)return s(Ja,a,t,o);if(Q(e+4,(Ir(a)-1)*4+t)>-1){var u=n(VB,e,s(Ja,a,t,o));if(u.$===1)return s(Ja,a,t,o);var $=u.a,v=n(Rs,$,s(Ja,a,t,o)),d=v.a,b=v.b,h=v.c,g=e+1,y=r-1,_=d,x=b,T=h;e=g,r=y,a=_,t=x,o=T;continue e}else{var L=n(Ur,i,a);if(L.$===1)return s(Ja,a,t,o);var $=L.a,B=n(qe,4-c,r),R=$<<8*c,V=(function(){if(Q(4-c,r)>0){var Je=4-r,ar=3-c+1;return R>>Je*8}else return R>>c*8})(),W=s(d6,B,V,s(Ja,a,t,o)),Y=W.a,oe=W.b,$e=W.c,g=e+B,y=r-B,_=Y,x=oe,T=$e;e=g,r=y,a=_,t=x,o=T;continue e}}}),OB=S(function(e,r,a){var t=a.a,o=a.b,c=a.c;return E(RB,e,r,t,o,c)}),lX=ne,jt=R7,JB=S(function(e,r,a){var t=a.c,o=a.d,c=l(function(i,u){if(i.$){var v=i.a;return s(jt,e,u,v)}else{var $=i.a;return s(jt,c,u,$)}});return s(jt,e,s(jt,c,r,t),o)}),h6=l(function(e,r){var a=function(i){return Q(i,e)<0?0:(i-e)/e|0},t=l(function(i,u){var $=u.a,v=u.b;return p($+(1<<i),n(Lu,{p3:$,dz:i},v))}),o=n(Qf,30,a),c=s(JB,t,p(r,ou),o).b;return c}),Xs=n(h6,2,1),UB=(function(e){var r=e;return s(ui,28,{p3:258,dz:0},r)})(n(h6,4,3)),g6=l(function(e,r){var a=r;return n(Ur,e,a)}),WB=function(e){var r=n(g6,e-257,UB);if(r.$===1)return Zs((function(){var t=Xs,o=t;return"index out of bounds in hardcodedLengthTable: requested index "+(Ie(e-257)+("but hardcodedLengthTable has length "+Ie(Ir(o))))})());var a=r.a;return n(Zn,a.dz,a.p3)},qB=l(function(e,r){var a=n(ce,P,q$(r.d2));return n(Do,function(t){var o=n(g6,t,Xs);if(o.$===1)return Zs((function(){var i=Xs,u=i;return"index out of bounds in hardcodedDistanceTable: requested index "+(Ie(t)+("but hardcodedLengthTable has length "+Ie(Ir(u))))})());var c=o.a;return n(xt,function(i){return e-i},n(Zn,c.dz,c.p3))},n(Gs,a,r))}),GB=l(function(e,r){var a=r.a,t=r.b,o=n(ce,P,q$(e.dR.d2));return n(Do,function(c){return c===256?Ho(rf(t)):c<256?Ho(Tn(p(a+1,n(Rs,c,t)))):s(Vl,l(function(i,u){return Tn(p(a+i,s(OB,u,i,t)))}),WB(c),n(qB,a,e.mm))},n(Gs,o,e.dR))}),y6=S(function(e,r,a){return n(Bl,p(r,a),GB(e))}),NB=l(function(e,r){var a=r;return l(function(t,o){var c=n(a,t,o),i=c.a,u=c.b,$=e(u),v=$;return n(v,t,i)})}),ZB=i_,YB=function(e){var r=s(af,It,nf(0),nf(0));return n(NB,function(a){var t=a.a,o=a.b;if(re(t,~o&65535)){var c=e-4-t;return s(af,It,Ws(t),Ws(c))}else return ZB},r)},XB=function(e){var r=n(Hl,YB(ki(e.bb)),e.bb);if(r.$===1)return Ue("inflateUncompressedBlock: ran out of bounds");var a=r.a,t=a.a,o=a.b;return We(p(t,M(e,{bb:o})))},_6=function(e){var r=e.a,a=e.b,t=e.c,o=Ir(r)*4;if(o){var c=o;return c+a}else return a},C6=U7,P6=J7,S6=l(function(e,r){var a=it(e),t=Jr-it(r.ai)-a,o=s(C6,Jr,r.ai,e);return t<0?{as:n(A,Ac(o),r.as),Z:r.Z+1,ai:s(P6,t,a,e)}:t?{as:r.as,Z:r.Z,ai:o}:{as:n(A,Ac(o),r.as),Z:r.Z+1,ai:Vo}}),x6=l(function(e,r){var a=r.a,t=r.c,o=r.d,c=it(e),i=Jr-it(o)-c,u=s(C6,Jr,o,e),$=n(C1,u,r);if(i<0){var v=s(P6,i,c,e);return n(C1,v,$)}else return $}),QB=function(e){var r=e.a,a=e.c,t=e.d,o=l(function(c,i){if(c.$)return n(A,c,i);var u=c.a;return s(jt,o,i,u)});return{as:s(jt,o,P,a),Z:r/Jr|0,ai:t}},j6=l(function(e,r){var a=e.d,t=r.a,o=r.c,c=r.d;if(Q(t,Jr*4)<1){var i=l(function(u,$){if(u.$){var d=u.a;return n(x6,d,$)}else{var v=u.a;return s(jt,i,$,v)}});return n(x6,c,s(jt,i,e,o))}else{var i=l(function($,v){if($.$){var b=$.a;return n(S6,b,v)}else{var d=$.a;return s(jt,i,v,d)}});return n(pv,!0,n(S6,c,s(jt,i,QB(e),o)))}}),KB={d2:f([0,0,0,0,0,32,0,0,0,0,0,0,0,0,0,0]),gX:n(j6,Lo(f([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31])),n(y$,256,0))},eI=function(e){var r=32-e.W,a=n(Fl,n(qe,r,e.ah),e),t=a.ah>24?f([n(Il,0,a.aQ)]):a.ah>16?f([n(Mo,0,a.aQ),zo(a.aQ>>16)]):a.ah>8?f([n(Mo,0,a.aQ)]):a.ah>1?f([zo(a.aQ)]):P,o=a.W>24?f([n(Il,0,a.ld)]):a.W>16?f([n(Mo,0,a.ld),zo(a.ld>>16)]):a.W>8?f([n(Mo,0,a.ld)]):a.W>1?f([zo(a.ld)]):P;return Al(ef(X(o,X(t,f([v6(a.bb)])))))},rI=function(e){return{W:0,bb:eI(e),aQ:0,ah:0,ld:0}},aI=function(e){var r=e.W+e.ah,a=n(Kr,8,r),t=n(Zn,a,0),o=t,c=o(e);if(c.$===1){var i=c.a;return Ue(i)}else{var u=c.a,$=u.b,v=qs($);if(v.$===1){var i=v.a;return Ue(i)}else{var d=v.a;return We(p(0,rI(d)))}}},nI={d2:f([0,0,0,0,0,0,0,24,152,112,0,0,0,0,0,0]),gX:Lo(f([256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,280,281,282,283,284,285,286,287,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255]))},tI=function(e){var r=function(o){switch(o){case 0:return n(xt,function(c){return n(kB,c,e)},n(Do,function(c){return XB},aI));case 1:return s(y6,{mm:KB,dR:nI},_6(e),e);case 2:return n(Do,function(c){var i=c.a,u=c.b;return s(y6,{mm:u,dR:i},_6(e),e)},FB);default:return Zs("invalid block type: "+(Ie(o)+" (only 0, 1 and 2 are valid block types)"))}},a=s(Vl,l(function(o,c){return o+2*c}),Ys,Ys),t=l(function(o,c){return o?n(xt,rf,r(c)):n(xt,Tn,r(c))});return n(Do,ne,s(Vl,t,Ys,a))},oI=n(xt,n(je,PB,Vc),n(Bl,hB,tI)),cI=function(e){var r=n(bB,e,oI);if(r.$===1){var a=r.a;return Ue(a)}else{var t=r.a;return We(Al(ef(n(G,v6,t))))}},iI=function(e){var r=cI(e);if(r.$===1)return w;var a=r.a;return D(a)},uI=iI,tf=function(e){if(z2(e))return!0;switch(e){case"+":return!0;case"/":return!0;default:return!1}},of=function(e){var r=ct(e);if(r>=65&&r<=90)return r-65;if(r>=97&&r<=122)return r-97+26;if(r>=48&&r<=57)return r-48+26+26;switch(e){case"+":return 62;case"/":return 63;default:return-1}},Qs=U(function(e,r,a,t){if(tf(e)&&tf(r)){var o=of(r),c=of(e);if(t==="=")if(a==="="){var i=c<<18|o<<12,u=i>>16;return D(zo(u))}else if(tf(a)){var $=of(a),i=c<<18|o<<12|$<<6,v=i>>8;return D(n(Mo,1,v))}else return w;else if(tf(a)&&tf(t)){var d=of(t),$=of(a),i=c<<18|o<<12|($<<6|d),v=i>>8,b=i;return D(ef(f([n(Mo,1,v),zo(b)])))}else return w}else return w}),fI=l(function(e,r){e:for(;;){var a=Wc(n(Rc,4,e));r:for(;;)if(a.b)if(a.b.b)if(a.b.b.b)if(a.b.b.b.b){if(a.b.b.b.b.b)break r;var t=a.a,o=a.b,c=o.a,i=o.b,u=i.a,$=i.b,v=$.a,d=C(Qs,t,c,u,v);if(d.$)return w;var b=d.a,h=n(Ba,4,e),g=n(A,b,r);e=h,r=g;continue e}else{var t=a.a,y=a.b,c=y.a,_=y.b,u=_.a,x=C(Qs,t,c,u,"=");if(x.$===1)return w;var b=x.a;return D(n(A,b,r))}else{var t=a.a,T=a.b,c=T.a,L=C(Qs,t,c,"=","=");if(L.$===1)return w;var b=L.a;return D(n(A,b,r))}else break r;else return D(r);return w}}),$I=function(e){return n(se,n(je,Ve,ef),n(fI,e,P))},lI=function(e){return n(se,Al,$I(e))},vI=lI,sI=Rh,k6=l(function(e,r){return n(pn,"{",sI(e))?n(l6,r,e):n(Fs,l6(r),n(Fs,n(je,cB,Vs(nB)),n(Fs,n(je,uI,Vs(aB)),n(Vs,rB,vI(sB(e))))))}),dI=S(function(e,r,a){return n(vv,0,ho(f([p("v",Ml($6)),p("cur",Ml(r)),p("items",n(yn,function(t){var o=t.a,c=t.b;return ho(f([p("n",Hr(o)),p("d",e(c))]))},a))])))}),Rl=function(e){var r=e;return xr(r.o)},bI=function(e){var r=e;return n(G,function(a){return p(a.sV,a.b2)},Et(r.V))},pI=function(e){var r=e;return s(dI,r.mu,Rl(r.V),bI(r))},mI=At("levelsOut",ne),hI=l(function(e,r){return ho(f([p("tag",Hr(e)),p("text",Hr(r))]))}),w6=function(e){return mI(n(hI,"store",pI(e)))},Ks=function(e){if(e.$)return w;var r=e.a;return D(r)},gI=l(function(e,r){var a=e.lq;if(a.$){var o=e.k3;if(o.$)return w;var t=o.a;return n(se,function(i){return p(i,w6(i))},Ks(n(k6,t,r)))}else{var t=a.a;return n(se,function(c){return p(c,fe)},Ks(n(k6,t,r)))}}),yI=function(e){return{$:2,a:e}},T6=yI,_I=l(function(e,r){var a=r;return M(a,{fT:e(a.fT)})}),ed=l(function(e,r){var a=r;return M(a,{V:e(a.V)})}),CI=function(e){return ed(_I(function(r){return M(r,{b2:e(r.b2)})}))},rd=l(function(e,r){return M(r,{tp:n(CI,e,r.tp)})}),ad=function(e){return M(e,{dF:!0})},PI=l(function(e,r){return M(r,{p0:e})}),SI=l(function(e,r){var a=r;return M(a,{o:n(A,a.fT,a.o),fT:e})}),xI=function(e){return 1+s(me,function(r){return Le(r.bI)},-1,Et(e))},jI=S(function(e,r,a){var t=a;return M(t,{V:n(SI,{bI:xI(t.V),b2:r,sV:e},t.V)})}),kI=l(function(e,r){var a=r;if(e.$)return a;var t=e.a,o=n(st,t,a.V),c=dt(o);return s(jI,c.sV+" copy",c.b2,M(a,{V:o}))}),wI=function(e){var r=e,a=r.q;if(a.b){var t=a.a,o=a.b;return M(r,{q:o,fT:t})}else{var c=r.o;if(c.b){var t=c.a,o=c.b;return M(r,{o,fT:t})}else return r}},TI=l(function(e,r){if(e.$===1){var a=e.a;return n(ed,n(je,st(a),wI),r)}else return r}),LI=l(function(e,r){if(e.$===6){var a=e.a;return n(ed,st(a),r)}else return r}),MI=l(function(e,r){var a=r;return e.$===5?M(a,{dM:!a.dM}):a}),zI=l(function(e,r){var a=r;return{q:n(G,e,a.q),o:n(G,e,a.o),fT:e(a.fT)}}),DI=l(function(e,r){var a=r;switch(e.$){case 2:var t=e.a;return M(a,{ez:D(t)});case 3:var o=e.a,c=a.ez;if(c.$)return a;var t=c.a;return M(a,{V:n(zI,function(u){return re(u.bI,t)?M(u,{sV:o}):u},a.V)});case 4:return M(a,{ez:w});default:return a}}),HI=l(function(e,r){return n(MI,e,n(DI,e,n(LI,e,n(TI,e,n(kI,e,r)))))}),AI=U(function(e,r,a,t){switch(a.$){case 1:var o=a.a;return p(M(t,{cG:o}),gc);case 2:return p(ad(n(rd,PI(t.cG),t)),gc);case 3:var c=a.a;return p(ad(M(t,{tp:n(HI,c,t.tp)})),gc);case 4:var i=a.a,u=n(gI,i,t.tp);if(u.$)return p(t,gc);var $=u.a,v=$.a,d=$.b;return p(M(t,{tp:v}),T6(d));default:return p(t,gc)}}),L6=function(e){var r=e.iX,a=e.iV,t=function(o){return o-Da(o)};return t(a)+t(r)<1?s(Ll,0,Da(a),Da(r)):s(Ll,1,Da(a),Da(r))},BI=S(function(e,r,a){var t=a;return M(t,{i:s($r,t.pj(e),p(e,r),t.i)})}),II=S(function(e,r,a){return M(a,{uP:s(BI,e,r,a.uP)})}),EI=function(e){return e.$===2},nd=l(function(e,r){return e.tB.sg&&!EI(r.gx)}),FI=l(function(e,r){return n(nd,e,r)?n(rd,n(II,L6(r.fh),r.cG),r):r}),VI=l(function(e,r){return n(nd,e,r)?ad(r):r}),RI=l(function(e,r){var a=c6(e);return re(a,r.hK)?r:M(r,{dd:n6(_n(e).kx),hK:a})}),OI=l(function(e,r){var a=r;return M(a,{i:n(vu,a.pj(e),a.i)})}),JI=l(function(e,r){return M(r,{uP:n(OI,e,r.uP)})}),UI=l(function(e,r){return e.hW.kY&&n(nd,e,r)?n(rd,JI(L6(r.fh)),r):r}),WI=l(function(e,r){return r.dF&&!e.tB.sg?p(M(r,{dF:!1}),T6(w6(r.tp))):p(r,gc)}),M6="canvas",qI=l(function(e,r){return M(r,{pH:r.pH+.5*e.va,pJ:-r.pJ+.5*e.rW})}),GI=function(e){return n(qI,e.bT,{pH:e.tB.pH,pJ:e.tB.pJ})},cf=GI,NI=l(function(e,r){var a=e.vx,t=e.qn,o=(function(){if(t.$)return!0;var u=t.a;return n(No,u,r.fB.ms)})(),c=function(u){return o?u:w},i=function(u){return o?u:0};return{fQ:r.fQ,fS:r.hW.jr||r.hW.j9,kI:i(r.fB.kI),io:c(r.fB.io),ou:r.tB.jz,gz:cf(r),ow:r.tB.lp,bT:{ew:r.ew,rW:r.bT.rW,va:r.bT.va},o1:n(No,"Space",r.hW.tH),g4:i(r.fB.mk),g5:i(r.fB.ml),vx:a}}),td=function(e){return{$:1,a:e}},z6=l(function(e,r){var a=r.O-e.O,t=r.pJ-e.pJ,o=r.pH-e.pH;return ta(o*o+t*t+a*a)}),Ol=mh,od=l(function(e,r){var a=r.tJ;if(a.$){var i=a.a.u5;return e.rW/i}else{var t=a.a.eM,o=n(z6,r.rp,r.rw),c=2*o*Ol(t/2);return e.rW/c}}),gr=S(function(e,r,a){return{pH:e,pJ:r,O:a}}),D6=S(function(e,r,a){return s(gr,r.pH+(a.pH-r.pH)*e,r.pJ+(a.pJ-r.pJ)*e,r.O+(a.O-r.O)*e)}),ZI=S(function(e,r,a){var t=e.sx,o=e.sG,c=n(od,r,a),i=s(er,o,t,c);if(re(i,c))return a;var u=c/i,$=a.tJ;if($.$){var d=$.a.u5;return M(a,{tJ:td({u5:d*u})})}else{var v=$.a;return M(a,{rp:s(D6,u,a.rw,a.rp),tJ:Es(v)})}}),H6=function(e){var r=e.gp,a=e.gq;return ZI({sx:r,sG:a})},YI=S(function(e,r,a){var t=a.a,o=a.b;return p(t,s(H6,e,r.bT,o))}),cd=U(function(e,r,a,t){var o=e.gp,c=e.gq,i=n(od,r,a);if(i<=0)return t;var u=i*t,$=s(er,c,o,u);return $/i}),XI=function(e){var r=2-e;return r<=0?1/1e-4:1/r},QI={n8:F(0,0,1),a0:s(gr,0,0,0)},id=l(function(e,r){var a=e.a,t=e.b,o=e.c,c=r.a,i=r.b,u=r.c;return a*c+t*i+o*u}),en=l(function(e,r){var a=r.a,t=r.b,o=r.c;return F(e*a,e*t,e*o)}),yc=l(function(e,r){var a=e.a,t=e.b,o=e.c;return{pH:r.pH+a,pJ:r.pJ+t,O:r.O+o}}),A6=l(function(e,r){return F(r.pH-e.pH,r.pJ-e.pJ,r.O-e.O)}),KI=l(function(e,r){var a=n(id,e.ex,r.n8);if(ze(a)<1e-10)return w;var t=n(A6,e.a0,r.a0),o=n(id,t,r.n8)/a;return D(n(yc,n(en,o,e.ex),e.a0))}),ud=l(function(e,r){var a=e.a,t=e.b,o=e.c,c=r.a,i=r.b,u=r.c;return F(t*u-o*i,o*c-a*u,a*i-t*c)}),B6=function(e){var r=e.a,a=e.b,t=e.c;return ta(n(va,r,2)+n(va,a,2)+n(va,t,2))},uf=function(e){var r=B6(e);return n(en,1/r,e)},eE=function(e){return F(e.pH,e.pJ,e.O)},rE=function(e){var r=eE(e.fx),a=uf(n(A6,e.rp,e.rw)),t=uf(n(ud,a,r)),o=n(ud,t,a);return{jJ:a,kN:o,bQ:t}},ff=l(function(e,r){var a=e.a,t=e.b,o=e.c,c=r.a,i=r.b,u=r.c;return F(a+c,t+i,o+u)}),aE=n(me,ff,F(0,0,0)),nE=l(function(e,r){var a=r.pJ,t=r.pH;return p(2*t/e.va-1,1-2*a/e.rW)}),tE=S(function(e,r,a){var t=r.va/r.rW,o=rE(e),c=o.jJ,i=o.kN,u=o.bQ,$=n(nE,r,a),v=$.a,d=$.b,b=e.tJ;if(b.$){var x=b.a.u5,g=x/2,y=g*t,T=n(yc,n(en,d*g,i),n(yc,n(en,v*y,u),e.rp));return{ex:uf(c),a0:T}}else{var h=b.a.eM,g=Ol(h/2),y=g*t,_=uf(aE(f([c,n(en,v*y,u),n(en,d*g,i)])));return{ex:_,a0:e.rp}}}),I6=U(function(e,r,a,t){return n(KI,s(tE,r,a,t),e)}),E6=I6(QI),oE=function(e){return I6({n8:F(0,1,0),a0:s(gr,0,e,0)})},Jl=U(function(e,r,a,t){if(e.$){var o=e.a;return C(oE,o,r,a,t)}else return s(E6,r,a,t)}),F6=l(function(e,r){var a=e.mB,t=e.lG,o=(function(){var i=r.tJ;if(i.$){var $=i.a.u5;return td({u5:$/a})}else{var u=i.a;return Es(u)}})(),c=function(i){return s(gr,t.pH+(i.pH-t.pH)/a,t.pJ+(i.pJ-t.pJ)/a,t.O+(i.O-t.O)/a)};return M(r,{rp:c(r.rp),rw:c(r.rw),tJ:o})}),cE=U(function(e,r,a,t){var o=C(Jl,e,a,r.bT,r.gz);if(o.$)return a;var c=o.a;return n(F6,{lG:c,mB:t},a)}),iE=S(function(e,r,a){var t=a.a,o=a.b,c=p(r.io,t);if(!c.a.$&&c.b.$===3){var i=c.a.a,u=c.b.a.lZ,$=XI(i),v=C(cd,e,r.bT,u,$);return p(t,C(cE,e.$7,r,u,v))}else return p(t,o)}),V6=function(e){return{$:1,a:e}},uE=l(function(e,r){var a=r.O-e.O,t=r.pJ-e.pJ,o=r.pH-e.pH;return ta(o*o+t*t+a*a)}),Ul=function(e){var r=e.tJ;if(r.$){var a=r.a.u5;return a}else return n(uE,e.rp,e.rw)},fE=S(function(e,r,a){var t=Ul(r),o=t+e*a;return o<=0?1/1e-4:t/o}),R6=U(function(e,r,a,t){var o=C(Jl,e,a,r.bT,r.gz);if(o.$)return a;var c=o.a;return n(F6,{lG:c,mB:t},a)}),$E=S(function(e,r,a){var t=a.a,o=a.b,c=p(!!r.g4||!!r.g5,t);if(c.a&&c.b.$===1){var i=c.b.a.gi,u=s(fE,e.g7,o,r.g5),$=r.g4&&!r.g5?i:r.fQ,v=C(cd,e,r.bT,o,u);return p(V6({gi:$}),C(R6,e.$7,r,o,v))}else return p(t,o)}),lE=l(function(e,r){var a=r.a,t=r.b,o=p(e.io,a);if(o.a.$===1&&o.b.$===3){var c=o.a;return p(hc,t)}else return p(a,t)}),O6=U(function(e,r,a,t){return s(gr,t.pH+e,t.pJ+r,t.O+a)}),fd=U(function(e,r,a,t){return M(t,{rp:C(O6,e,r,a,t.rp),rw:C(O6,e,r,a,t.rw)})}),J6=function(e){return s(fd,e,0,0)},U6=function(e){return s(fd,0,0,e)},W6=function(e){var r=e.pJ,a=e.pH;return s(fd,a,r,0)},vE=U(function(e,r,a,t){return e.$?n(U6,r.O-a.O,n(J6,r.pH-a.pH,t)):n(W6,{pH:r.pH-a.pH,pJ:r.pJ-a.pJ},t)}),sE=S(function(e,r,a){var t=a.a,o=a.b;if(t.$===2){var c=t.a.l_,i=t.a.ov,u=C(Jl,e.$7,c,r.bT,r.gz),$=C(Jl,e.$7,c,r.bT,i),v=p($,u);if(!v.a.$&&!v.b.$){var d=v.a.a,b=v.b.a;return p(t,C(vE,e.$7,d,b,c))}else return p(t,o)}else return p(t,o)}),dE=Te(function(e,r,a,t,o){var c=Ul(o)*r;return e.$?n(U6,t*c,n(J6,a*c,o)):n(W6,{pH:a*c,pJ:-t*c},o)}),bE=S(function(e,r,a){var t=a.a,o=a.b,c=p(t,r.fS);if(!c.a.$&&!c.b){var i=c.a;return p(t,E(dE,e.$7,e.g6,r.g4,r.g5,o))}else return p(t,o)}),pE=function(e){return{$:2,a:e}},mE=l(function(e,r){var a=r.a,t=r.b;return e.o1&&e.ou?p(pE({l_:t,ov:e.gz}),t):p(a,t)}),hE=function(e){return{$:3,a:e}},gE=l(function(e,r){var a=r.a,t=r.b,o=p(e.io,a);if(!o.a.$&&!o.b.$){var c=o.b;return p(hE({lZ:t}),t)}else return p(a,t)}),yE=l(function(e,r){var a=p(e.fS,r);if(a.a&&!a.b.$){var t=a.b;return V6({gi:e.fQ})}else return r}),_E=l(function(e,r){return e.ow?hc:r}),CE=l(function(e,r){var a=p(!!e.g4,r);if(a.a&&a.b.$===1){var t=a.b.a.gi;return e.fQ-t>.06?hc:r}else return r}),PE=l(function(e,r){if(r.$===1){var a=r.a.gi;return!e.fS&&e.fQ-a>.08?hc:r}else return r}),Wl=l(function(e,r){var a=r.a,t=r.b;return p(e(a),t)}),SE=l(function(e,r){return{pH:e,pJ:r}}),xE=function(e){return n(SE,.5*(e.bJ+e.bQ),.5*(e.bW+e.bB))},jE=function(e){return ze(e.bB-e.bW)},kE=function(e){return e.bQ-e.bJ},wE=S(function(e,r,a){var t=r.va/r.rW,o=xE(e),c=M(a,{rp:s(gr,o.pH,o.pJ,a.rp.O),rw:s(gr,o.pH,o.pJ,a.rw.O)}),i=kE(e),u=jE(e),$=Q(i/u,t)>0?i/t:u,v=a.tJ;if(v.$)return M(c,{tJ:td({u5:$})});var d=v.a.eM,b=$/2/Ol(d/2),h=n(z6,c.rp,c.rw),g=h?s(D6,b/h,c.rw,c.rp):s(gr,c.rw.pH,c.rw.pJ,c.rw.O+b);return M(c,{rp:g})}),TE=S(function(e,r,a){var t=a.a,o=a.b,c=r.vx;if(c.$)return p(t,o);var i=c.a;return p(hc,s(H6,e,r.bT,s(wE,i,r.bT,o)))}),LE=S(function(e,r,a){var t=Ul(r),o=t+e*a;return o<=0?1/1e-4:t/o}),ME=S(function(e,r,a){var t=a.a,o=a.b,c=F(!!r.kI,r.fS,t);if(c.a&&!c.b&&!c.c.$){var i=c.c,u=s(LE,e.fO,o,r.kI),$=C(cd,e,r.bT,o,u);return p(hc,C(R6,e.$7,r,o,$))}else return p(t,o)}),zE=S(function(e,r,a){return s(YI,e,r,n(Wl,_E(r),s(sE,e,r,n(mE,r,s(bE,e,r,n(lE,r,s(iE,e,r,n(gE,r,s(ME,e,r,n(Wl,PE(r),n(Wl,CE(r),s($E,e,r,n(Wl,yE(r),s(TE,e,r,a))))))))))))))}),DE=S(function(e,r,a){return n(zE,e,n(NI,r,a))}),HE={$:0},$d={fO:50,g6:.0015,g7:5},AE=l(function(e,r){var a=Ul(r)/e;return{fO:$d.fO*a,g6:$d.g6,g7:$d.g7*a}}),q6=function(e){return{ew:e.ew,rW:e.bT.rW,va:e.bT.va}},BE=function(e){var r=e.vv,a=e.vw,t=e.bT,o=e.r7;if(t.va<=1||t.rW<=1)return{gp:1/0,gq:0};var c=n(od,t,o);return{gp:c*r,gq:c/a}},IE=l(function(e,r){var a=n(AE,1500,r),t=BE({r7:o6,bT:q6(e),vv:6,vw:3});return{fO:a.fO,gp:t.gp,gq:t.gq,$7:HE,g6:a.g6,g7:a.g7}}),EE=l(function(e,r){var a=C(DE,n(IE,e,r.cg),{qn:D(M6),vx:w},e,p(r.gx,r.cg)),t=a.a,o=a.b;return M(r,{cg:o,gx:t})}),G6="your-levels",$f=36,FE={lx:function(e){return P},mb:function(e){return te("")},mS:Oe(P),bI:G6,oO:$f,oQ:function(e){return Oe(P)},pj:function(e){return Ie(e.bI)}},VE=function(e){return{$:1,a:e}},RE=l(function(e,r){var a=e+"-handle-";return jr(n(kr,function(t){return n(pn,a,t)?Oc(n(Ba,Aa(a),t)):w},r))}),OE=U(function(e,r,a,t){return s(er,0,r-1,a+Da(.5+t/e))}),N6=U(function(e,r,a,t){return C(OE,e.oO,Du(a),t.aW,cf(r).pJ-t.jO)}),JE=function(e){var r=e,a=r.o;if(a.b){var t=a.a,o=a.b;return M(r,{o,fT:t})}else{var c=r.q;if(c.b){var t=c.a,o=c.b;return M(r,{q:o,fT:t})}else return r}},UE=l(function(e,r){return p(n(vt,e,r),n(lt,e,r))}),Z6=l(function(e,r){var a=n(UE,e,Et(JE(r))),t=a.a,o=a.b;return{q:o,o:Ve(t),fT:dt(r)}}),WE=S(function(e,r,a){var t=Rl(a);if(re(e,r))return a;if(re(t,e))return n(Z6,r,a);var o=Q(e,t)<0&&Q(r,t)>-1?t-1:Q(e,t)>0&&Q(r,t)<1?t+1:t;return n(st,o,n(Z6,r,n(st,e,a)))}),qE=U(function(e,r,a,t){if(t.$){var i=t.a;if(r.tB.sg)return p(t,w);var u=C(N6,e,r,a,i);return p(t6,D(s(WE,i.aW,u,a)))}else if(r.tB.jz){var o=n(RE,e.bI,r.tB.rg);if(o.$)return p(Bs,w);var c=o.a;return p(VE({aW:c,jO:cf(r).pJ}),w)}else return p(Bs,w)}),Y6=function(e){return M(e,{tB:e.tL})},GE=l(function(e,r){var a=r,t=C(qE,FE,Y6(e),a.V,a.gC),o=t.a,c=t.b;if(c.$)return p(M(a,{gC:o}),!1);var i=c.a;return p(M(a,{gC:o,V:i}),!0)}),NE=l(function(e,r){var a=n(GE,e,r.tp),t=a.a,o=a.b;return M(r,{dF:r.dF||o,tp:t})}),ZE=function(e){var r=e.pJ,a=e.pH;return{iV:2/ta(3)*a,iX:-1/ta(3)*a+r}},YE=l(function(e,r){var a=s(E6,r.cg,e.bT,cf(e));if(a.$===1)return r;var t=a.a;return M(r,{fh:ZE({pH:t.pH,pJ:t.pJ})})}),XE=S(function(e,r,a){return n(WI,e,n(NE,e,n(VI,e,n(UI,e,n(FI,e,n(YE,e,n(EE,e,n(RI,r,a))))))))}),QE=function(e){return{$:3,a:e}},KE={$:5},eF=function(e){return{$:1,a:e}},rF=function(e){return{$:0,a:e}},aF=function(e){return{$:2,a:e}},nF=function(e){return Oe(f([be(n(Z,function(r){return r.li},e)),ka(f([be(n(Z,function(r){return r.bx},e))]))]))},vX=2,tF=l(function(e,r){if(e.$)return P;var a=e.a;return n(St,a,r)}),oF=l(function(e,r){return n(tF,e.th,{ex:2,e$:r,ud:w})}),X6=d5("border-left"),cF=l(function(e,r){return r.ni?Oe(f([_e(n(Z,function(a){return n(mr,.22,a.bx)},e)),s(X6,k(2),xn,n(Z,function(a){return a.bx},e)),n(z,"transition","background-color 120ms cubic-bezier(0.33, 1, 0.68, 1)"),ka(f([_e(n(Z,function(a){return n(mr,.3,a.bx)},e))]))])):Oe(f([_e(C(ol,0,0,0,0)),s(X6,k(2),xn,ko),n(z,"transition","background-color 120ms cubic-bezier(0.33, 1, 0.68, 1)"),ka(f([_e(n(Z,function(a){return a.k6},e))]))]))}),sX=0,dX=0,iF=l(function(e,r){return f([_e(ko),be(n(Z,function(a){return a.li},e)),n(z,"transition","background-color 120ms cubic-bezier(0.33, 1, 0.68, 1), color 120ms cubic-bezier(0.33, 1, 0.68, 1)"),ka(f([_e(n(Z,r,e)),be(n(Z,n(je,function(a){return a.kx},function(a){return a.qj}),e))]))])}),uF=l(function(e,r){var a=function(t){return n(z,"background-color",Me(n(mr,.7,n(lr,t,e))))};return f([a(function(t){return t.k6}),C5(16),be(n(Z,function(t){return t.li},e)),n(bs,1,n(lr,function(t){return t.jg},e)),n(z,"transition","background-color 160ms cubic-bezier(0.33, 1, 0.68, 1), color 160ms cubic-bezier(0.33, 1, 0.68, 1), box-shadow 160ms cubic-bezier(0.33, 1, 0.68, 1)"),ka(f([a(function(t){return t.k7}),be(n(Z,r,e))])),di(f([a(function(t){return t.k9}),bl(1.5)]))])}),Q6=U(function(e,r,a,t){var o=(function(){return r?p(36,6):p(24,4)})(),c=o.a,i=o.b,u=f([ye(k(c)),Ce(k(c)),sa(k(i)),vr(Ne(50)),wr(da),le,De(de),Lr(de),Va(ur)]);return X(u,(function(){return n(a?uF:iF,e,t)})())}),ld=l(function(e,r){return n(Un,X(f([I(X(C(Q6,e,r.gI,r.fN,r.gd),X(f([fc(ue)]),r.jy?f([Ou]):P))),jn(r.bj),bi(r.jy),n(Ge,"aria-label",r.e$)]),r.bs),f([r.ge]))}),fF=l(function(e,r){return n(ld,e,{fN:0,jy:!1,gd:n(je,function(a){return a.kx},function(a){return a.tO}),ge:Qe.uO,e$:"Delete level",bj:r.bj,gI:0,bs:r.bs})}),$F=l(function(e,r){return n(ld,e,{fN:0,jy:!1,gd:function(a){return a.bx},ge:Qe.q8,e$:"Duplicate level",bj:r.bj,gI:0,bs:r.bs})}),lF=l(function(e,r){return n(ld,e,{fN:0,jy:!1,gd:n(je,function(a){return a.kx},function(a){return a.vq}),ge:Qe.tt,e$:"Rename level",bj:r.bj,gI:0,bs:r.bs})}),vF=function(e){return{$:6,a:e}},sF=function(e){return{$:3,a:e}},K6={$:4},dF=W1("autofocus"),bF=function(e){return n(H,function(r){return r==="Enter"?ae(e):Cn("not Enter")},n(j,"key",ke))},pF=function(e){return n(Zr,"blur",ae(e))},mF=l(function(e,r){return n(O,f([I(f([Ce(Ne(100)),le,De(de),C(Ci,ue,Nn.kZ,ue,Nn.pI)]))]),f([n($c,f([To("text"),lc(r),dF(!0),hi(sF),pF(K6),n(Zr,"keydown",bF(K6)),I(f([os(T4),ye(Ne(100)),yi(gi),n(Mr,k(3),k(6)),_e(n(Z,function(a){return a.k6},e)),be(n(Z,function(a){return a.lh},e)),s(ht,k(1),xn,n(Z,function(a){return a.bx},e)),vr(Ya.e7),n(z,"font-family",Qa.sP),Oe(wn.hh),Va(ur),n(z,"user-select","text")]))]),P)]))}),hF=S(function(e,r,a){return re(r,D(a.dN.bI))?n(mF,e,a.dN.sV):n(O,f([I(f([C(Ci,ue,Nn.e7,ue,Nn.pI),Oe(wn.hh),Ce(Ne(100)),kn(k($f)),$l(Z1),Wt(Ut),n(z,"text-overflow","ellipsis"),wr(da),be(a.ni?n(Z,function(t){return t.lh},e):n(Z,function(t){return t.li},e))])),o4(vF(a.jR)),h4(a.dN.sV)]),f([te(a.dN.sV)]))}),gF=l(function(e,r){return n(Un,X(f([I(X(C(Q6,e,r.gI,r.fN,r.gd),f([fc(ue)]))),X5(r.bj),n(Ge,"aria-label",r.e$)]),r.bs),f([r.ge]))}),yF=l(function(e,r){return n(gF,e,{fN:0,gd:function(a){return a.bx},ge:Qe.uc,e$:"Copy share link to this level",bj:r.bj,gI:0,bs:r.bs})}),_F=S(function(e,r,a){return{lx:function(t){var o=oF(a),c=(function(){var v=a.tg;if(v.$)return P;var d=v.a;return f([n(yF,e,{bj:function(b){return s(d,b,t.dN.sV,t.dN.b2)},bs:o("Copy share link to this level")})])})(),i=n(lF,e,{bj:a.d6(aF(t.dN.bI)),bs:o("Rename level")}),u=n($F,e,{bj:a.d6(rF(t.jR)),bs:o("Duplicate level")}),$=n(fF,e,{bj:a.d6(eF(t.jR)),bs:o("Delete level")});return X(f([i,u]),X(c,f([$])))},mb:function(t){return n(tc,a.d6,s(hF,e,r,t))},mS:nF(e),bI:G6,oO:$f,oQ:cF(e),pj:function(t){return Ie(t.bI)}}}),CF=l(function(e,r){var a=e.pi,t=e.aW;return re(r,t)?a:Q(t,a)<0&&Q(r,t)>0&&Q(r,a)<1?r-1:Q(t,a)>0&&Q(r,a)>-1&&Q(r,t)<0?r+1:r}),PF=l(function(e,r){return O1(f([n(li,"."+(e+(", ."+(e+" *"))),f([wr(u5)])),n(li,"."+r,f([Wn(ur)]))]))}),SF=function(e){return O1(f([n(li,"."+(e+(":hover ."+(e+"-handle"))),f([aa(dr(.4))])),n(li,"."+(e+(" ."+(e+"-handle:hover"))),f([aa(dr(1))])),n(li,"."+(e+(":hover ."+(e+"-actions"))),f([aa(dr(1))]))]))},xF=function(e){return!!e.$},e8=function(e){return n(O,f([I(f([Po(he(1)),C4(ue),xs(U4)]))]),f([e]))},jF=l(function(e,r){return jr(n(lt,e,Et(r)))}),kF=n(ul,f([fl("0 0 24 24"),Pt("currentColor"),qn(f([ye(k(18)),Ce(k(18))]))]),n(G,function(e){var r=e.a,a=e.b;return n(z5,f([D5(Ie(r)),H5(Ie(a)),A5("2")]),P)},f([p(9,5),p(15,5),p(9,12),p(15,12),p(9,19),p(15,19)]))),r8=S(function(e,r,a){return r<=1?n(O,f([I(f([ye(k(e.oO)),hr(ue)]))]),P):n(O,f([bt(e.bI+("-handle-"+Ie(a))),Gn(e.bI+"-row-handle"),I(f([le,De(de),Lr(de),ye(k(e.oO)),Ce(k(e.oO)),hr(ue),wr(P5),aa(ue),n(z,"transition","opacity 0.1s ease, color 0.1s ease"),e.mS]))]),f([kF]))}),wF=U(function(e,r,a,t){var o=n(jF,t.aW,a);if(o.$===1)return te("");var c=o.a,i={jR:t.aW,ni:re(t.aW,Rl(a)),dN:c},u=cf(r).pJ-t.jO,$=Du(a),v=s(er,-t.aW*e.oO,($-1-t.aW)*e.oO,u);return n(O,f([I(f([e.oQ(i),_e(ko),or(Sn),ba(ue),mt(ue),ja(k(t.aW*e.oO)),Ce(k(e.oO)),le,De(de),Pi(hs(k(v))),n(z,"box-shadow","0 4px 12px rgba(0, 0, 0, 0.25)"),Wn(ur)]))]),f([s(r8,e,$,t.aW),e8(e.mb(i))]))}),vd=l(function(e,r){return e?r:Oe(P)}),TF=l(function(e,r){return n(O,f([Gn(e+"-actions"),I(f([le,De(de),n(z,"gap","4px"),Y1(k(6)),aa(ue),n(z,"transition","opacity 0.1s ease")]))]),r)}),LF=ge("visibility"),MF=function(e){var r=e.oN,a=e.lE,t=e.gh,o=e.f$,c=e.mf,i=e.mY,u=e.l9;return n(O,f([Gn(i),I(f([n(vd,!t,u.oQ(r)),Ce(k(u.oO)),le,De(de),Pi(hs(k((o-r.jR)*u.oO))),n(vd,a,n(z,"transition","transform 0.12s ease")),n(z,"user-select","none"),n(vd,t,LF(Ut))]))]),f([s(r8,u,c,r.jR),e8(u.mb(r)),n(TF,i,u.lx(r))]))},zF=U(function(e,r,a,t){var o=Rl(a),c=e.bI+"-row",i=xF(t),u=Du(a),$=l(function(b,h){var g=(function(){if(t.$){var _=t.a;return{f$:n(CF,{aW:_.aW,pi:C(N6,e,r,a,_)},b),gh:re(b,_.aW)}}else return{f$:b,gh:!1}})(),y={jR:b,ni:re(b,o),dN:h};return p(e.pj(h),MF({lE:i,l9:e,mf:u,f$:g.f$,mY:c,gh:g.gh,oN:y}))}),v=e.bI+"-list",d=(function(){if(t.$){var b=t.a;return f([p("reorderable-list:dragging",n(PF,v,c)),p("reorderable-list:lifted",C(wF,e,r,a,b))])}else return f([p("reorderable-list:hover-reveal",SF(c))])})();return s(fs,"div",f([Gn(v),I(f([or(Co),le,_r(ra)]))]),X(n(Na,$,Et(a)),d))}),DF=function(e){return n(O,f([I(f([ye(k(16)),Ce(k(16)),le,De(de),Lr(de)]))]),f([e?Qe.qv:Qe.qx]))},HF=function(e){return n(O,f([I(f([le,De(de),n(z,"gap","4px")]))]),e.d7)},AF=S(function(e,r,a){return n(O,f([I(f([le,De(de),Ce(k($f)),il(Nn.kZ),Y1(k(6)),_e(n(Z,function(t){return t.k7},e)),n(z,"user-select","none")]))]),f([n(O,f([I(f([le,De(de),Po(he(1)),n(z,"gap","6px"),wr(da),Oe(wn.hh),pa(he(600)),be(n(Z,function(t){return t.li},e))])),jn(r.ij)]),f([DF(a),te(r.iT)])),HF(r)]))}),BF=U(function(e,r,a,t){var o=t,c={ij:a.d6(KE),iT:"Levels",d7:a.d7},i=o.dM?Du(o.V)*$f:0;return n(O,f([I(f([vr(Ya.e7),Wt(Ut),_e(n(Z,function(u){return u.k9},e)),cl.mq]))]),f([s(AF,e,c,o.dM),n(O,f([I(f([Ce(k(i)),Wt(Ut),n(z,"transition","height 160ms cubic-bezier(0.33, 1, 0.68, 1)")]))]),f([C(zF,s(_F,e,o.ez,a),Y6(r),o.V,o.gC)]))]))}),IF=S(function(e,r,a){return n(O,f([I(f([le,_r(ra),n(z,"gap","12px")]))]),f([n(O,f([I(f([br(k(16)),pa(he(500)),be(n(Z,function(t){return t.lh},r))]))]),f([te("Levels")])),C(BF,r,e,{tg:w,th:w,d6:QE,d7:P},a.tp)]))}),EF={$:2},ql=l(function(e,r){var a=e.kW,t=e.aX,o=r;return n(ce,$o,n(ea,Ur(s(er,0,Qu-1,a)),n(Ur,s(er,0,As-1,t),o)))}),FF=function(e){switch(e){case 0:return"neutral";case 1:return"red";case 2:return"yellow";case 3:return"green";case 4:return"cyan";case 5:return"blue";default:return"magenta"}},VF=l(function(e,r){return n(O,f([I(f([le,De(de),n(z,"gap","8px"),sa(k(8))]))]),f([n(O,f([I(f([ye(k(24)),Ce(k(24)),vr(k(4)),_e(cr(n(ql,r.cG,r.dd)))]))]),P),n(Cr,f([I(f([be(n(Z,function(a){return a.li},e))]))]),f([te(FF(r.cG.aX)+(" \xB7 shade "+Ie(r.cG.kW)))]))]))}),RF=M(cc,{u1:"column-reverse"}),OF=function(e){return{$:1,a:e}},JF=S(function(e,r,a){var t=re(a,r.cG);return n(O,f([I(f([ye(k(20)),Ce(k(20)),_e(cr(n(ql,a,r.dd))),s(ht,k(t?3:0),xn,n(Z,function(o){return o.lh},e)),wr(da)])),jn(OF(a))]),P)}),UF=S(function(e,r,a){return n(O,f([I(f([le,_r(RF),n(z,"gap","2px")]))]),n(G,function(t){return s(JF,e,r,{aX:a,kW:t})},n(Ga,0,Qu-1)))}),WF=l(function(e,r){return n(O,f([I(f([le,n(z,"gap","2px"),sa(k(8))]))]),n(G,n(UF,e,r),n(Ga,0,As-1)))}),qF=l(function(e,r){return n(O,f([I(f([sa(k(16))]))]),f([n(O,f([I(f([br(k(20))]))]),f([te("Color Palette")])),n(VF,e,r),n(WF,e,r),n(r4,e,{e$:"Set selected as background",bj:EF})]))}),GF=function(e){return n(O,f([I(f([sa(k(16))]))]),f([n(O,f([I(f([br(k(20))]))]),f([te("Instructions")])),n(O,P,f([te("- Press mouse to add trixel")])),n(O,P,f([te("- Hold shift and press mouse to remove trixel")])),n(O,P,f([te("- Panning: SCROLL or SPACE + DRAG")])),n(O,P,f([te("- Zooming: CTRL + SCROLL")]))]))},NF=S(function(e,r,a){return f([{hh:GF(r),ge:Qe.rX,bI:"instructions",ud:w,pg:n(je,function(t){return t.kx},function(t){return t.sv}),iT:"Instructions"},{hh:n(qF,r,a),ge:Qe.kx,bI:"colors",ud:w,pg:n(je,function(t){return t.kx},function(t){return t.rO}),iT:"Color palette"},{hh:s(IF,e,r,a),ge:Qe.ry,bI:"levels",ud:w,pg:n(je,function(t){return t.kx},function(t){return t.p8}),iT:"Levels"}])}),ZF=function(e){return{$:4,a:e}},YF=function(e){var r=function(a){return Ks(n(up,n(j,a,ke),e))};return{oh:n(ce,"",r("origin")),oo:n(ce,"",r("path")),k3:r("stored"),lq:r("urlBlob")}},XF=Of("levelsIn",S$),QF=function(e){return XF(n(je,YF,e))},KF=S(function(e,r,a){return QF(ZF)}),a8=function(e){var r=e;return dt(r.V).b2},n8=l(function(e,r){e:for(;;)if(r.b){var a=r.a,t=r.b,o=e(a);if(o.$){var i=e,u=t;e=i,r=u;continue e}else{var c=o.a;return D(c)}}else return w}),eV=l(function(e,r){return n(n8,function(a){var t=a.a,o=a.b,c=p(re(t,e),o);if(c.a&&!c.b.$){var i=c.b,u=i.b;return D(u)}else return w},r.bc)}),rV=l(function(e,r){return n(ce,0,n(n8,eV(e),r))}),aV=l(function(e,r){return n(rV,e,r.ch)}),nV=aV,tV=function(e){return{$:1,a:e}},oV=function(e){return{l7:e,bN:1,b6:tV({h7:0,iy:1}),b7:w}},Gl=function(e){return{$:0,a:e}},lf=function(e){return{$:0,a:e}},t8=function(e){return{$:0,a:e}},sd=l(function(e,r){return t8({dD:f([r]),lk:e})}),o8=function(e){var r=e.a,a=e.b,t=e.c;return sd({gE:Gl(0),gG:lf(1),gY:s(gr,r,a,t)})},c8=function(e){return o8(F(e,0,0))},i8=function(e){return o8(F(0,e,0))},u8=function(e){return{$:1,a:e}},dd=function(e){var r=e.a,a=e.b,t=e.c;return s(gr,r,a,t)},Nl=l(function(e,r){var a=r.a,t=r.b,o=r.c;return n(ff,n(en,a,e.pH),n(ff,n(en,t,e.pJ),n(en,o,e.O)))}),f8=l(function(e,r){return dd(n(Nl,e,F(r.pH,r.pJ,r.O)))}),$8=S(function(e,r,a){var t=F(-e.a0.pH,-e.a0.pJ,-e.a0.O),o=F(e.a0.pH,e.a0.pJ,e.a0.O),c=Oa(r),i=n(yc,t,a),u=F(i.pH,i.pJ,i.O),$=Ra(r),v=uf(e.ex),d=n(id,v,u),b=n(ff,n(en,$,u),n(ff,n(en,c,n(ud,v,u)),n(en,1-$,n(en,d,v))));return n(yc,o,dd(b))}),l8=l(function(e,r){var a=function(t){var o=s($8,{ex:e,a0:s(gr,0,0,0)},r,dd(t));return F(o.pH,o.pJ,o.O)};return{pH:a(F(1,0,0)),pJ:a(F(0,1,0)),O:a(F(0,0,1))}}),cV=l(function(e,r){var a=e.a0,t=n(l8,e.ex,r),o=n(f8,t,a);return sd({gE:u8(t),gG:lf(1),gY:s(gr,a.pH-o.pH,a.pJ-o.pJ,a.O-o.O)})}),iV=function(e){return n(cV,{ex:F(0,0,1),a0:s(gr,0,0,0)},e)},uV=l(function(e,r){return sd({gE:Gl(0),gG:lf(r),gY:s(gr,e.pH*(1-r),e.pJ*(1-r),e.O*(1-r))})}),v8=function(e){var r=e.iX,a=e.iV;return{pH:ta(3)/2*a,pJ:1/2*a+r}},fV=function(e){return{$:15,a:e}},$V=l(function(e,r){return fV({F:e,ls:r})}),lV=S(function(e,r,a){var t=a.a,o=t.a,c=t.b,i=t.c,u=a.b,$=(function(){var y=v8((function(){return o?{iV:.6666666666666666,iX:.6666666666666666}:{iV:.3333333333333333,iX:.3333333333333333}})());return{pH:y.pH,pJ:y.pJ,O:0}})(),v=n($V,oV(n(ql,u,r)),F({pH:0,pJ:0,O:0},{pH:Ra(gt(30)),pJ:Oa(gt(30)),O:0},{pH:0,pJ:1,O:0})),d=n(i8,1+Oa(gt(30)),n(c8,Ra(gt(30)),n(iV,gt(180),v))),b=v8({iV:c,iX:i}),h=b.pJ,g=b.pH;return n(i8,h,n(c8,g,s(uV,$,n(nV,"trixel scale",e),(function(){return o?d:v})())))}),s8={gE:Gl(0),gG:lf(1),gY:s(gr,0,0,0)},d8=function(e){return t8({dD:e,lk:s8})},vV=l(function(e,r){var a=a8(r.tp);return d8(n(G,n(lV,e,r.dd),Y4(a.uP)))}),sV=i5,dV=function(e){return{$:13,a:e}},bV=function(e){return{$:2,a:e}},pV=function(e){return{$:6,a:e}},mV=function(e){return{$:16,a:e}},hV=function(e){return{$:15,a:e}},gV=function(e){return{$:10,a:e}},yV=function(e){return{$:12,a:e}},_V=function(e){return{$:9,a:e}},CV=function(e){return{$:19,a:e}},PV=function(e){return{$:1,a:e}},SV=function(e){return{$:5,a:e}},xV=function(e){return{$:17,a:e}},jV=function(e){return{$:18,a:e}},kV=function(e){return{$:4,a:e}},wV=function(e){return{$:20,a:e}},TV=function(e){return{$:3,a:e}},LV=function(e){return{$:0,a:e}},MV=function(e){return{$:21,a:e}},zV=function(e){return{$:11,a:e}},DV=function(e){return{$:8,a:e}},HV=function(e){return{$:7,a:e}},AV=function(e){return{$:14,a:e}},b8=$8({ex:F(0,0,1),a0:s(gr,0,0,0)}),p8=l(function(e,r){if(e.$){var t=e.a;return n(f8,t,r)}else{var a=e.a;return n(b8,a,r)}}),m8=l(function(e,r){if(e.$){var t=e.a;return s(gr,r.pH*t.pH,r.pJ*t.pJ,r.O*t.O)}else{var a=e.a;return s(gr,r.pH*a,r.pJ*a,r.O*a)}}),h8=l(function(e,r){return s(gr,r.pH+e.pH,r.pJ+e.pJ,r.O+e.O)}),BV=l(function(e,r){return{pH:n(Nl,e,r.pH),pJ:n(Nl,e,r.pJ),O:n(Nl,e,r.O)}}),IV=function(e){return n(l8,F(0,0,1),e)},g8=function(e){if(e.$){var a=e.a;return a}else{var r=e.a;return IV(r)}},EV=l(function(e,r){var a=p(e,r);if(!a.a.$&&!a.b.$){var t=a.a.a,o=a.b.a;return Gl(t+o)}else return u8(n(BV,g8(e),g8(r)))}),bd=function(e){return{$:1,a:e}},FV=l(function(e,r){var a=p(e,r);if(a.a.$)if(a.b.$){var c=a.a.a,i=a.b.a;return bd(s(gr,c.pH*i.pH,c.pJ*i.pJ,c.O*i.O))}else{var c=a.a.a,t=a.b.a;return bd(s(gr,c.pH*t,c.pJ*t,c.O*t))}else if(a.b.$){var t=a.a.a,c=a.b.a;return bd(s(gr,t*c.pH,t*c.pJ,t*c.O))}else{var t=a.a.a,o=a.b.a;return lf(t*o)}}),VV=l(function(e,r){return{gE:n(EV,e.gE,r.gE),gG:n(FV,e.gG,r.gG),gY:n(h8,e.gY,n(p8,e.gE,n(m8,e.gG,r.gY)))}}),pd=S(function(e,r,a){switch(r.$){case 0:var t=r.a.dD,o=r.a.lk,c=n(VV,e,o);return s(me,pd(c),a,t);case 1:var i=r.a.l4,u=r.a.hm;return X(n(G,function(b){var h=b.a,g=b.b;return p(h,pV({hm:u,sb:g}))},s(pd,e,i,P)),a);case 2:var v=r.a;return n(A,p(e,LV(v)),a);case 3:var v=r.a;return n(A,p(e,PV(v)),a);case 4:var v=r.a;return n(A,p(e,bV(v)),a);case 5:var v=r.a;return n(A,p(e,TV(v)),a);case 6:var v=r.a;return n(A,p(e,kV(v)),a);case 7:var v=r.a;return n(A,p(e,SV(v)),a);case 8:var v=r.a;return n(A,p(e,HV(v)),a);case 9:var v=r.a;return n(A,p(e,DV(v)),a);case 10:var $=r.a;return n(A,p(e,_V($)),a);case 11:var v=r.a;return n(A,p(e,gV(v)),a);case 12:var v=r.a;return n(A,p(e,zV(v)),a);case 13:var v=r.a;return n(A,p(e,yV(v)),a);case 14:var v=r.a;return n(A,p(e,dV(v)),a);case 15:var v=r.a;return n(A,p(e,AV(v)),a);case 16:var v=r.a;return n(A,p(e,hV(v)),a);case 17:var v=r.a;return n(A,p(e,mV(v)),a);case 18:var v=r.a;return n(A,p(e,xV(v)),a);case 19:var v=r.a;return n(A,p(e,jV(v)),a);case 20:var d=r.a;return n(A,p(e,CV(d)),a);case 21:var d=r.a;return n(A,p(e,wV(d)),a);default:var d=r.a;return n(A,p(e,MV(d)),a)}}),y8=function(e){return Ve(s(pd,s8,e,P))},bX=ne,Yn={pH:0,pJ:0,O:0},md=function(e){var r=e;return r.pH},hd=function(e){var r=e;return r.pJ},gd=function(e){var r=e;return r.O},RV=function(e){var r=e,a=gd(r.vu),t=hd(r.vu),o=md(r.vu),c=gd(r.vo),i=hd(r.vo),u=md(r.vo),$=gd(r.vg),v=hd(r.vg),d=md(r.vg);return d*i*a+v*c*o+$*u*t-$*i*o-v*u*a-d*c*t>0},Zl=function(e){var r=e;return r.a0},rn=function(e){var r=e;return r},_c=function(e){var r=e;return r},Yl=function(e){var r=e;return r.vg},Xl=function(e){var r=e;return r.vo},vf=function(e){var r=e;return r.vu},OV=function(e){var r=_c(Zl(e)),a=rn(vf(e)),t=rn(Xl(e)),o=rn(Yl(e));return{nh:RV(e),aj:o.pH,ak:o.pJ,al:o.O,am:t.pH,an:t.pJ,ao:t.O,ap:a.pH,aq:a.pJ,ar:a.O,a1:r.pH,a2:r.pJ,a3:r.O,gG:1}},pX=ne,Cc=l(function(e,r){return{$:6,a:e,b:r}}),_8=l(function(e,r){return{nh:re(e.nh,r.nh),aj:e.aj*r.aj+e.ak*r.am+e.al*r.ap,ak:e.aj*r.ak+e.ak*r.an+e.al*r.aq,al:e.aj*r.al+e.ak*r.ao+e.al*r.ar,am:e.am*r.aj+e.an*r.am+e.ao*r.ap,an:e.am*r.ak+e.an*r.an+e.ao*r.aq,ao:e.am*r.al+e.an*r.ao+e.ao*r.ar,ap:e.ap*r.aj+e.aq*r.am+e.ar*r.ap,aq:e.ap*r.ak+e.aq*r.an+e.ar*r.aq,ar:e.ap*r.al+e.aq*r.ao+e.ar*r.ar,a1:r.a1+(e.a1*r.aj+e.a2*r.am+e.a3*r.ap)*r.gG,a2:r.a2+(e.a1*r.ak+e.a2*r.an+e.a3*r.aq)*r.gG,a3:r.a3+(e.a1*r.al+e.a2*r.ao+e.a3*r.ar)*r.gG,gG:e.gG*r.gG}}),yd={$:0},ve=yd,Ql=l(function(e,r){var a=r;switch(a.$){case 0:return ve;case 6:var t=a.a,o=a.b,c=n(_8,t,e);return n(Cc,c,o);case 1:return n(Cc,e,a);case 2:return n(Cc,e,a);case 4:return n(Cc,e,a);case 3:return n(Cc,e,a);default:return n(Cc,e,a)}}),Kl=l(function(e,r){return n(Ql,OV(e),r)}),JV=l(function(e,r){return n(Kl,e,r)}),mX=ne,wi=function(e){return e},C8=function(e){var r=e;return r.ex},P8=function(e){var r=e;return r.a0},UV=l(function(e,r){var a=r,t=_c(P8(e)),o=.5*a,c=Ra(o),i=Oa(o),u=rn(C8(e)),$=u.pH*i,v=c*$,d=$*$,b=u.pJ*i,h=c*b,g=$*b,y=b*b,_=1-2*(d+y),x=u.O*i,T=c*x,L=2*(g-T),B=2*(g+T),R=$*x,V=2*(R+h),W=2*(R-h),Y=b*x,oe=2*(Y-v),$e=2*(Y+v),pe=x*x,we=1-2*(y+pe),Ae=1-2*(d+pe);return{nh:!0,aj:we,ak:B,al:W,am:L,an:Ae,ao:$e,ap:V,aq:oe,ar:_,a1:t.pH-we*t.pH-L*t.pJ-V*t.O,a2:t.pJ-B*t.pH-Ae*t.pJ-oe*t.O,a3:t.O-W*t.pH-$e*t.pJ-_*t.O,gG:1}}),WV=S(function(e,r,a){return n(Ql,n(UV,e,r),a)}),_d=S(function(e,r,a){return s(WV,e,r,a)}),hX=ne,kt=function(e){return e},gX=ne,e0=function(e){return e},yX=ne,r0=l(function(e,r){return{ex:r,a0:e}}),Cd=kt({pH:0,pJ:0,O:1}),a0=Cd,S8=n(r0,Yn,a0),qV=l(function(e,r){if(e.$){var t=e.a,o=function(c){var i=c.a,u=c.b,$=c.c;return kt({pH:i,pJ:u,O:$})};return n(JV,e0({a0:Yn,vg:o(t.pH),vo:o(t.pJ),vu:o(t.O)}),r)}else{var a=e.a;return s(_d,S8,wi(a),r)}}),GV=l(function(e,r){var a=_c(e),t=1-r;return{nh:r>=0,aj:1,ak:0,al:0,am:0,an:1,ao:0,ap:0,aq:0,ar:1,a1:t*a.pH,a2:t*a.pJ,a3:t*a.O,gG:r}}),NV=S(function(e,r,a){return n(Ql,n(GV,e,r),a)}),ZV=S(function(e,r,a){return s(NV,e,r,a)}),YV=l(function(e,r){if(e.$)return r;var a=e.a;return s(ZV,Yn,a,r)}),_X=ne,x8=S(function(e,r,a){return{pH:e,pJ:r,O:a}}),j8=function(e){var r=e;return r},XV=function(e){var r=j8(e);return{nh:!0,aj:1,ak:0,al:0,am:0,an:1,ao:0,ap:0,aq:0,ar:1,a1:r.pH,a2:r.pJ,a3:r.O,gG:1}},k8=l(function(e,r){return n(Ql,XV(e),r)}),w8=l(function(e,r){return n(k8,e,r)}),QV=l(function(e,r){var a=e.O,t=e.pJ,o=e.pH;return n(w8,s(x8,o,t,a),r)}),Pd=l(function(e,r){var a=e.gG,t=e.gE,o=e.gY;return n(QV,o,n(qV,t,n(YV,a,r)))}),T8=function(e){var r=e;return r},KV=function(e){var r=e;return T8(r.pZ)},CX=1,L8=U(function(e,r,a,t){return{$:2,a:e,b:r,c:a,d:t}}),eR=U(function(e,r,a,t){return{$:3,a:e,b:r,c:a,d:t}}),M8=U(function(e,r,a,t){return{$:4,a:e,b:r,c:a,d:t}}),rR=U(function(e,r,a,t){return{$:6,a:e,b:r,c:a,d:t}}),z8=U(function(e,r,a,t){return{$:7,a:e,b:r,c:a,d:t}}),aR=U(function(e,r,a,t){return{$:5,a:e,b:r,c:a,d:t}}),nR=U(function(e,r,a,t){return{$:1,a:e,b:r,c:a,d:t}}),n0=function(e){switch(e.$){case 0:return e;case 1:var a=e.a,r=e.b,o=e.c;return C(nR,a,r,o,1);case 2:var a=e.a,r=e.b,o=e.c;return C(L8,a,r,o,1);case 3:var a=e.a,t=e.b,o=e.c;return C(eR,a,t,o,1);case 4:var a=e.a,t=e.b,o=e.c;return C(M8,a,t,o,1);case 5:var a=e.a,t=e.b,o=e.c;return C(aR,a,t,o,1);case 6:var a=e.a,t=e.b,o=e.c;return C(rR,a,t,o,1);case 7:var a=e.a,t=e.b,o=e.c;return C(z8,a,t,o,1);case 8:return e;case 9:return e;default:return e}},Sd={$:0},PX=0,SX=ne,tR=Be(function(e,r,a,t,o,c,i,u){e:for(;;)if(u.b){var $=u.a,v=u.b,d=i($),b=d,h=n(qe,b.nY,e),g=n(Le,b.nU,r),y=n(qe,b.sK,a),_=n(Le,b.sz,t),x=n(qe,b.sL,o),T=n(Le,b.sA,c),L=i,B=v;e=h,r=g,a=y,t=_,o=x,c=T,i=L,u=B;continue e}else return{nU:r,sz:t,sA:c,nY:e,sK:a,sL:o}}),oR=S(function(e,r,a){var t=e(r),o=t;return ao(tR,o.nY,o.nU,o.sK,o.sz,o.sL,o.sA,e,a)}),D8=function(e){var r=e.sA,a=r,t=e.sL,o=t,c=e.sz,i=c,u=e.sK,$=u,v=e.nU,d=v,b=e.nY,h=b;return{nU:n(Le,h,d),sz:n(Le,$,i),sA:n(Le,o,a),nY:n(qe,h,d),sK:n(qe,$,i),sL:n(qe,o,a)}},Pc=l(function(e,r){var a=e,t=r;return n(Le,a,t)}),Ti=l(function(e,r){var a=e,t=r;return n(qe,a,t)}),sf=function(e){var r=e;return r},df=function(e){var r=e;return r.pH},bf=function(e){var r=e;return r.pJ},pf=function(e){var r=e;return r.O},H8=function(e){var r=sf(e),a=r.a,t=r.b,o=r.c,c=df(a),i=bf(a),u=pf(a),$=df(t),v=bf(t),d=pf(t),b=df(o),h=bf(o),g=pf(o);return D8({nU:n(Pc,c,n(Pc,$,b)),sz:n(Pc,i,n(Pc,v,h)),sA:n(Pc,u,n(Pc,d,g)),nY:n(Ti,c,n(Ti,$,b)),sK:n(Ti,i,n(Ti,v,h)),sL:n(Ti,u,n(Ti,d,g))})},A8=s_,wt=function(e){return A8(_c(e))},t0=function(e){return A8(j8(e))},xd=l(function(e,r){var a=e,t=r;return{pH:t.pJ*a.O-t.O*a.pJ,pJ:t.O*a.pH-t.pH*a.O,O:t.pH*a.pJ-t.pJ*a.pH}}),o0=l(function(e,r){var a=e,t=r;return{pH:t.pH-a.pH,pJ:t.pJ-a.pJ,O:t.O-a.O}}),jd=function(e){return e},kd={pH:0,pJ:0,O:0},cR=l(function(e,r){var a=e,t=r,o=n(Le,ze(t.pH),n(Le,ze(t.pJ),ze(t.O)));if(o){var c=t.O/o,i=t.pJ/o,u=t.pH/o,$=ta(u*u+i*i+c*c);return{pH:a*u/$,pJ:a*i/$,O:a*c/$}}else return kd}),iR=cR(jd(1)),B8=S(function(e,r,a){var t=n(o0,r,a),o=n(o0,e,r);return iR(n(xd,t,o))}),uR=function(e){var r=sf(e),a=r.a,t=r.b,o=r.c,c=t0(s(B8,a,t,o));return F({ag:c,tF:wt(a)},{ag:c,tF:wt(t)},{ag:c,tF:wt(o)})},fR=l(function(e,r){return{$:2,a:e,b:r}}),I8=fR({mr:3,m0:0,n$:4}),E8=function(e){if(e.b){var r=e.a,a=e.b,t=I8(n(G,uR,e)),o=s(oR,H8,r,a);return C(L8,o,e,t,0)}else return Sd},xX=ne,an=S(function(e,r,a){return F(e,r,a)}),nn=function(e){return e},qt=l(function(e,r){var a=r;return e*a}),Gt=S(function(e,r,a){var t=e,o=r,c=a;return{pH:t,pJ:o,O:c}}),F8=(function(){var e=nn(1),r=nn(1),a=nn(1),t=n(qt,-.5,e),o=n(qt,-.5,r),c=n(qt,-.5,a),i=s(Gt,c,o,t),u=n(qt,.5,e),$=s(Gt,c,o,u),v=n(qt,.5,r),d=s(Gt,c,v,t),b=s(Gt,c,v,u),h=n(qt,.5,a),g=s(Gt,h,o,t),y=s(Gt,h,v,t),_=s(Gt,h,o,u),x=s(Gt,h,v,u);return n0(E8(f([s(an,i,y,g),s(an,i,d,y),s(an,$,_,x),s(an,$,x,b),s(an,g,y,x),s(an,g,x,_),s(an,i,b,d),s(an,i,$,b),s(an,i,g,_),s(an,i,_,$),s(an,d,x,y),s(an,d,b,x)])))})(),c0={$:0},$R=S(function(e,r,a){return{$:1,a:e,b:r,c:a}}),lR=S(function(e,r,a){var t=r.a,o=r.b,c=r.c,i=e(c),u=e(o),$=e(t),v=t0(s(B8,$,u,i)),d={ag:v,tF:wt($)},b={ag:v,tF:wt(u)},h={ag:v,tF:wt(i)};return n(A,d,n(A,b,n(A,h,a)))}),mf=function(e){var r=e;return r.aH},vR=U(function(e,r,a,t){if(r.$===1)return w;var o=r.a;if(a.$===1)return w;var c=a.a;if(t.$===1)return w;var i=t.a;return D(s(e,o,c,i))}),hf=function(e){var r=e;return r.ls},wd=l(function(e,r){return n(Ur,e,hf(r))}),V8=function(e){var r=function(a){var t=a.a,o=a.b,c=a.c;return C(vR,S(function(i,u,$){return F(i,u,$)}),n(wd,t,e),n(wd,o,e),n(wd,c,e))};return n(kr,r,mf(e))},jX=ne,sR=l(function(e,r){var a=Ir(e),t=function(o){var c=o.a,i=o.b,u=o.c;return c>=0&&Q(c,a)<0&&i>=0&&Q(i,a)<0&&u>=0&&Q(u,a)<0};return n(D1,t,r)?{aH:r,ls:e}:{aH:n(Ar,t,r),ls:e}}),dR=S(function(e,r,a){return{$:3,a:e,b:r,c:a}}),Li=dR({mr:1,m0:3,n$:4}),Tt=function(e){var r=e;return r},i0=l(function(e,r){var a=Tt(r),t=Tt(e);return p(F(t.pH,t.pJ,t.O),F(a.pH,a.pJ,a.O))}),gf=f_,R8=s(gf,0,0,0),Td=Rr(function(e,r,a,t,o,c){var i=c.a,u=c.b,$=c.c,v=n(Xe,n(i0,e,r),o);if(v.$){var b={ag:R8,tF:wt(r)},h={ag:R8,tF:wt(e)},g=$+1,y=$;return F(n(A,F(a,y,g),n(A,F(a,g,t),i)),n(A,b,n(A,h,u)),$+2)}else{var d=v.a;return F(n(A,F(a,d,t),i),u,$)}}),bR=Te(function(e,r,a,t,o){e:for(;;)if(a.b){var c=a.a,i=c.a,u=c.b,$=c.c,v=a.b,d=e($),b=e(u),h=e(i),g=t+2,y=t+1,_=t,x=e,T=r,L=v,B=t+3,R=Sr(Td,d,h,g,_,r,Sr(Td,b,d,y,g,r,Sr(Td,h,b,_,y,r,o)));e=x,r=T,a=L,t=B,o=R;continue e}else{var V=o,W=V.a,Y=V.b;return p(W,Ve(Y))}}),pR=Te(function(e,r,a,t,o){e:for(;;)if(r.b){var c=r.a,i=c.a,u=c.b,$=c.c,v=r.b,d=e($),b=e(u),h=e(i),g=a+2,y=a+1,_=a,x=s($r,n(i0,h,d),g,s($r,n(i0,d,b),y,s($r,n(i0,b,h),_,o))),T=n(A,F(_,y,g),t),L=e,B=v,R=a+3,V=T,W=x;e=L,r=B,a=R,t=V,o=W;continue e}else return F(t,o,a)}),Sc=S(function(e,r,a){var t=V8(a),o=s(dn,lR(r),P,t),c=E(pR,r,t,0,P,He),i=c.a,u=c.b,$=c.c,v=E(bR,r,u,t,0,F(i,P,$)),d=v.a,b=v.b,h=tr(b)?o:X(o,b);return s($R,e,n(sR,Lo(h),d),n(Li,h,d))}),O8=function(e){return{aH:n(G,function(r){return F(3*r,3*r+1,3*r+2)},n(Ga,0,xr(e)-1)),ls:Lo(Fn(n(G,function(r){var a=r.a,t=r.b,o=r.c;return f([a,t,o])},e)))}},u0=function(e){switch(e.$){case 0:return c0;case 1:var t=e.a,r=e.b,a=n(G,sf,r);return s(Sc,t,ne,O8(a));case 2:var t=e.a,r=e.b,a=n(G,sf,r);return s(Sc,t,ne,O8(a));case 3:var t=e.a,o=e.b;return s(Sc,t,ne,o);case 4:var t=e.a,o=e.b;return s(Sc,t,function(c){return c.tF},o);case 5:var t=e.a,o=e.b;return s(Sc,t,function(c){return c.tF},o);case 6:var t=e.a,o=e.b;return s(Sc,t,function(c){return c.tF},o);case 7:var t=e.a,o=e.b;return s(Sc,t,function(c){return c.tF},o);case 8:return c0;case 9:return c0;default:return c0}},J8=u0(F8),mR=function(e){var r=e;return r.q$},U8=function(e){return{$:5,a:e}},hR=l(function(e,r){e:for(;;)if(e.b){var a=e.a,t=e.b,o=t,c=n(A,a,r);e=o,r=c;continue e}else return r}),Ao=function(e){return U8(n(hR,e,P))},wa=l(function(e,r){return{$:1,a:e,b:r}}),f0={src:`
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
    `,attributes:{normal:"ag",position:"tF",tangent:"gR",uv:"g1"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",sceneProperties:"m",viewMatrix:"n"}},gR=l(function(e,r){switch(r.$){case 0:return n(Q_,e,r);case 1:return n(K_,e,r);case 2:return n(eC,e,r);case 3:return n(rC,e,r);case 4:return n(aC,e,r);default:return n(nC,e,r)}}),yR=l(function(e,r){switch(r.$){case 0:return n(w_,e,r);case 1:return n(T_,e,r);case 2:return n(L_,e,r);case 3:return n(M_,e,r);case 4:return n(z_,e,r);case 5:return n(D_,e,r);case 6:return n(H_,e,r);case 7:return n(A_,e,r);default:return B_(e)}}),Ze=k_,Mi={src:`
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
    `,attributes:{},uniforms:{ambientOcclusionTexture:"by",constantAmbientOcclusion:"bC",constantMaterialColor:"eq",enabledLights:"af",lights12:"gm",lights34:"h0",lights56:"h1",lights78:"h2",materialColorTexture:"e6",normalMapTexture:"bL",normalMapType:"bM",sceneProperties:"m",viewMatrix:"n"}},W8=l(function(e,r){return{$:2,a:e,b:r}}),_R=l(function(e,r){return yd}),q8=h_,Ta=function(e){var r=q8(e);return r===1?wa:r?W8:_R},kX=ne,CR=1029,PR=function(e){return{$:5,a:e}},G8=function(e){var r=e;return PR(r)},xc=G8(CR),SR=1028,jc=G8(SR),fr=S(function(e,r,a){return r===1?e?n(A,xc,a):n(A,jc,a):a}),N8=g_,Nt=d_,ma=function(e){var r=N8(e),a=r.u7,t=r.O,o=r.pJ,c=r.pH;return C(Nt,c*a,o*a,t*a,a)},zi=C(Nt,0,0,0,0),xR=Be(function(e,r,a,t,o,c,i,u){if(e.$){var v=e.a,d=e.b;return s(Ta,v,c,Be(function(b,h,g,y,_,x,T,L){var B=T.a,R=T.b;return E(Ze,s(fr,y,u,L),f0,Mi,i,{by:r,bC:a,eq:ma(v),af:R,gm:B.gm,h0:B.h0,h1:B.h1,h2:B.h2,e6:d,j:g,k:h,bL:t,bM:o,l:x,m:b,n:_})}))}else{var $=e.a;return n(wa,c,Be(function(b,h,g,y,_,x,T,L){var B=T.a,R=T.b;return E(Ze,s(fr,y,u,L),f0,Mi,i,{by:r,bC:a,eq:zi,af:R,gm:B.gm,h0:B.h0,h1:B.h1,h2:B.h2,e6:$,j:g,k:h,bL:t,bM:o,l:x,m:b,n:_})}))}}),Di={src:`
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
    `,attributes:{},uniforms:{ambientOcclusionTexture:"by",baseColorTexture:"ei",constantAmbientOcclusion:"bC",constantBaseColor:"eo",constantMetallic:"er",constantRoughness:"es",enabledLights:"af",lights12:"gm",lights34:"h0",lights56:"h1",lights78:"h2",metallicTexture:"e8",normalMapTexture:"bL",normalMapType:"bM",roughnessTexture:"fj",sceneProperties:"m",viewMatrix:"n"}},jR=function(e){return function(r){return function(a){return function(t){return function(o){return function(c){return function(i){return function(u){return function($){return function(v){return function(d){return function(b){if(e.$){var g=e.a,y=e.b;return s(Ta,g,v,Be(function(_,x,T,L,B,R,V,W){var Y=V.a,oe=V.b;return E(Ze,s(fr,L,b,W),f0,Di,d,{by:c,ei:y,bC:i,eo:ma(g),er:o,es:a,af:oe,gm:Y.gm,h0:Y.h0,h1:Y.h1,h2:Y.h2,e8:t,j:T,k:x,bL:u,bM:$,l:R,fj:r,m:_,n:B})}))}else{var h=e.a;return n(wa,v,Be(function(_,x,T,L,B,R,V,W){var Y=V.a,oe=V.b;return E(Ze,s(fr,L,b,W),f0,Di,d,{by:c,ei:h,bC:i,eo:zi,er:o,es:a,af:oe,gm:Y.gm,h0:Y.h0,h1:Y.h1,h2:Y.h2,e8:t,j:T,k:x,bL:u,bM:$,l:R,fj:r,m:_,n:B})}))}}}}}}}}}}}}},Z8={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"hp"}},Y8={src:`
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
    `,attributes:{position:"tF",uv:"g1"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",sceneProperties:"m",viewMatrix:"n"}},Ld=U(function(e,r,a,t){return n(wa,r,Be(function(o,c,i,u,$,v,d,b){return E(Ze,s(fr,u,t,b),Y8,Z8,a,{hp:e,j:i,k:c,l:v,m:o,n:$})}))}),Md={src:`
        precision lowp float;
        
        uniform lowp vec4 constantColor;
        
        void main () {
            gl_FragColor = constantColor;
        }
    `,attributes:{},uniforms:{constantColor:"ep"}},X8={src:`
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
    `,attributes:{position:"tF"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",sceneProperties:"m",viewMatrix:"n"}},Zt=U(function(e,r,a,t){return s(Ta,e,r,Be(function(o,c,i,u,$,v,d,b){return E(Ze,s(fr,u,t,b),X8,Md,a,{ep:ma(e),j:i,k:c,l:v,m:o,n:$})}))}),Q8=l(function(e,r){return{$:4,a:e,b:r}}),kR={src:`
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
    `,attributes:{},uniforms:{constantColor:"ep",pointRadius:"ip",sceneProperties:"m"}},K8={src:`
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
    `,attributes:{position:"tF"},uniforms:{modelMatrix:"j",modelScale:"k",pointRadius:"ip",projectionMatrix:"l",sceneProperties:"m",viewMatrix:"n"}},wR=U(function(e,r,a,t){return n(Q8,a,Be(function(o,c,i,u,$,v,d,b){return E(Ze,b,K8,kR,t,{ep:ma(e),j:i,k:c,ip:r,l:v,m:o,n:$})}))}),zd={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"eC",sceneProperties:"m"}},Hi=function(e){var r=e;return r},$0=__,Yt=Te(function(e,r,a,t,o){return n(wa,a,Be(function(c,i,u,$,v,d,b,h){return E(Ze,s(fr,$,o,h),X8,zd,t,{eC:n($0,Hi(r),e),j:u,k:i,l:d,m:c,n:v})}))}),TR={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"eC",pointRadius:"ip",sceneProperties:"m"}},LR=Te(function(e,r,a,t,o){return n(Q8,t,Be(function(c,i,u,$,v,d,b,h){return E(Ze,h,K8,TR,o,{eC:n($0,Hi(r),e),j:u,k:i,ip:a,l:d,m:c,n:v})}))}),Dd={src:`
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
    `,attributes:{},uniforms:{ambientOcclusion:"ef",enabledLights:"af",lights12:"gm",lights34:"h0",lights56:"h1",lights78:"h2",materialColor:"j6",sceneProperties:"m",viewMatrix:"n"}},e9={src:`
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
    `,attributes:{normal:"ag",position:"tF"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",sceneProperties:"m",viewMatrix:"n"}},l0=Te(function(e,r,a,t,o){return s(Ta,e,a,Be(function(c,i,u,$,v,d,b,h){var g=b.a,y=b.b;return E(Ze,s(fr,$,o,h),e9,Dd,t,{ef:r,af:y,gm:g.gm,h0:g.h0,h1:g.h1,h2:g.h2,j6:ma(e),j:u,k:i,l:d,m:c,n:v})}))}),Hd={src:`
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
    `,attributes:{},uniforms:{ambientOcclusion:"ef",baseColor:"p4",enabledLights:"af",lights12:"gm",lights34:"h0",lights56:"h1",lights78:"h2",metallic:"h7",roughness:"iy",sceneProperties:"m",viewMatrix:"n"}},v0=ro(function(e,r,a,t,o,c,i){return s(Ta,e,o,Be(function(u,$,v,d,b,h,g,y){var _=g.a,x=g.b;return E(Ze,s(fr,d,i,y),e9,Hd,c,{ef:t,p4:ma(e),af:x,gm:_.gm,h0:_.h0,h1:_.h1,h2:_.h2,h7:a,j:v,k:$,l:h,iy:r,m:u,n:b})}))}),MR=l(function(e,r){return{$:0,a:e,b:r}}),Ad=S(function(e,r,a){return{$:1,a:e,b:r,c:a}}),Ai=l(function(e,r){return{$:1,a:e,b:r}}),r9=function(e){return{$:0,a:e}},Fr=u_,Bd=function(e){return n(Fr,e,1)},s0=n(Fr,0,0),La=l(function(e,r){if(r.$){var t=r.a.X;return p(t,s0)}else{var a=r.a;return p(e,Bd(a))}}),kc=l(function(e,r){if(r.$){var a=r.a.rB,t=r.a.X;return p(t,(function(){return a?-1:1})())}else return p(e,0)}),Id=S(function(e,r,a){var t=F(e,r,a);if(t.a.$===1){var o=t.a.a.X;return s(Ad,r9(o),n(La,o,r),n(kc,o,a))}else if(t.b.$){var c=t.a.a,o=t.b.a.X;return s(Ad,n(Ai,c,o),n(La,o,r),n(kc,o,a))}else if(t.c.$){var c=t.a.a,o=t.c.a.X;return s(Ad,n(Ai,c,o),n(La,o,r),n(kc,o,a))}else{var c=t.a.a,i=t.b.a,u=t.c;return n(MR,c,i)}}),zR=U(function(e,r,a,t){return{$:0,a:e,b:r,c:a,d:t}}),yf=Te(function(e,r,a,t,o){return{$:1,a:e,b:r,c:a,d:t,e:o}}),DR=Te(function(e,r,a,t,o){return{$:0,a:e,b:r,c:a,d:t,e:o}}),Ed=Te(function(e,r,a,t,o){var c=E(DR,e,r,a,t,o);if(c.a.$===1){var i=c.a.a.X;return E(yf,r9(i),n(La,i,r),n(La,i,a),n(La,i,t),n(kc,i,o))}else if(c.b.$){var u=c.a.a,i=c.b.a.X;return E(yf,n(Ai,u,i),p(i,s0),n(La,i,a),n(La,i,t),n(kc,i,o))}else if(c.c.$){var u=c.a.a,i=c.c.a.X;return E(yf,n(Ai,u,i),n(La,i,r),p(i,s0),n(La,i,t),n(kc,i,o))}else if(c.d.$){var u=c.a.a,i=c.d.a.X;return E(yf,n(Ai,u,i),n(La,i,r),n(La,i,a),p(i,s0),n(kc,i,o))}else if(c.e.$){var u=c.a.a,i=c.e.a.X;return E(yf,n(Ai,u,i),n(La,i,r),n(La,i,a),n(La,i,t),p(i,1))}else{var u=c.a.a,$=c.b.a,v=c.c.a,d=c.d.a,b=c.e;return C(zR,u,$,v,d)}}),a9={src:`
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
    `,attributes:{},uniforms:{backlight:"jc",colorTexture:"hp",sceneProperties:"m"}},Fd=Te(function(e,r,a,t,o){return n(wa,a,Be(function(c,i,u,$,v,d,b,h){return E(Ze,s(fr,$,o,h),Y8,a9,t,{jc:Hi(r),hp:e,j:u,k:i,l:d,m:c,n:v})}))}),d0={src:`
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
    `,attributes:{normal:"ag",position:"tF",uv:"g1"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",sceneProperties:"m",viewMatrix:"n"}},HR=Rr(function(e,r,a,t,o,c){if(e.$){var u=e.a,$=e.b;return s(Ta,u,t,Be(function(v,d,b,h,g,y,_,x){var T=_.a,L=_.b;return E(Ze,s(fr,h,c,x),d0,Mi,o,{by:r,bC:a,eq:ma(u),af:L,gm:T.gm,h0:T.h0,h1:T.h1,h2:T.h2,e6:$,j:b,k:d,bL:$,bM:0,l:y,m:v,n:g})}))}else{var i=e.a;return n(wa,t,Be(function(v,d,b,h,g,y,_,x){var T=_.a,L=_.b;return E(Ze,s(fr,h,c,x),d0,Mi,o,{by:r,bC:a,eq:zi,af:L,gm:T.gm,h0:T.h0,h1:T.h1,h2:T.h2,e6:i,j:b,k:d,bL:i,bM:0,l:y,m:v,n:g})}))}}),AR=Be(function(e,r,a,t,o,c,i,u){if(e.$){var v=e.a,d=e.b;return s(Ta,v,c,Be(function(b,h,g,y,_,x,T,L){var B=T.a,R=T.b;return E(Ze,s(fr,y,u,L),d0,Di,i,{by:d,ei:d,bC:Bd(1),eo:ma(v),er:o,es:a,af:R,gm:B.gm,h0:B.h0,h1:B.h1,h2:B.h2,e8:t,j:g,k:h,bL:d,bM:0,l:x,fj:r,m:b,n:_})}))}else{var $=e.a;return n(wa,c,Be(function(b,h,g,y,_,x,T,L){var B=T.a,R=T.b;return E(Ze,s(fr,y,u,L),d0,Di,i,{by:$,ei:$,bC:Bd(1),eo:zi,er:o,es:a,af:R,gm:B.gm,h0:B.h0,h1:B.h1,h2:B.h2,e8:t,j:g,k:h,bL:$,bM:0,l:x,fj:r,m:b,n:_})}))}}),BR=function(e){var r=e,a=r,t=a.nY,o=a.nU,c=a.sK,i=a.sz,u=a.sL,$=a.sA;return{pH:t+.5*(o-t),pJ:c+.5*(i-c),O:u+.5*($-u)}},IR=function(e){var r=e;return r.nU},ER=function(e){var r=e;return r.sz},n9=function(e){var r=e;return r.sA},FR=function(e){var r=e;return r.nY},VR=function(e){var r=e;return r.sK},t9=function(e){var r=e;return r.sL},Bi=l(function(e,r){var a=e,t=r;return t-a}),o9=function(e){return F(n(Bi,FR(e),IR(e)),n(Bi,VR(e),ER(e)),n(Bi,t9(e),n9(e)))},Fe=function(e){var r=o9(e),a=r.a,t=r.b,o=r.c;return{qr:_c(BR(e)),rQ:a/2,rR:t/2,rS:o/2}},_f=l(function(e,r){switch(e.$){case 0:if(e.b.$){var u=e.a,$=e.b.a.X;switch(r.$){case 0:return ve;case 1:return ve;case 2:return ve;case 3:return ve;case 4:return ve;case 5:var o=r.a,i=r.c,t=r.d;return C(Ld,$,Fe(o),i,t);case 6:var o=r.a,i=r.c,t=r.d;return C(Ld,$,Fe(o),i,t);case 7:var o=r.a,i=r.c,t=r.d;return C(Ld,$,Fe(o),i,t);case 8:return ve;case 9:return ve;default:return ve}}else{var a=e.b.a;switch(r.$){case 0:return ve;case 1:var o=r.a,i=r.c,t=r.d;return C(Zt,a,Fe(o),i,t);case 2:var o=r.a,i=r.c,t=r.d;return C(Zt,a,Fe(o),i,t);case 3:var o=r.a,i=r.c,t=r.d;return C(Zt,a,Fe(o),i,t);case 4:var o=r.a,i=r.c,t=r.d;return C(Zt,a,Fe(o),i,t);case 5:var o=r.a,i=r.c,t=r.d;return C(Zt,a,Fe(o),i,t);case 6:var o=r.a,i=r.c,t=r.d;return C(Zt,a,Fe(o),i,t);case 7:var o=r.a,i=r.c,t=r.d;return C(Zt,a,Fe(o),i,t);case 8:var o=r.a,i=r.c;return C(Zt,a,Fe(o),i,0);case 9:var o=r.a,i=r.c;return C(Zt,a,Fe(o),i,0);default:var o=r.a,c=r.b,i=r.d;return C(wR,a,c,Fe(o),i)}}case 1:if(e.b.$){var b=e.a,$=e.b.a.X,d=e.c;switch(r.$){case 0:return ve;case 1:return ve;case 2:return ve;case 3:return ve;case 4:return ve;case 5:var o=r.a,i=r.c,t=r.d;return E(Fd,$,d,Fe(o),i,t);case 6:var o=r.a,i=r.c,t=r.d;return E(Fd,$,d,Fe(o),i,t);case 7:var o=r.a,i=r.c,t=r.d;return E(Fd,$,d,Fe(o),i,t);case 8:return ve;case 9:return ve;default:return ve}}else{var v=e.b.a,d=e.c;switch(r.$){case 0:return ve;case 1:var o=r.a,i=r.c,t=r.d;return E(Yt,v,d,Fe(o),i,t);case 2:var o=r.a,i=r.c,t=r.d;return E(Yt,v,d,Fe(o),i,t);case 3:var o=r.a,i=r.c,t=r.d;return E(Yt,v,d,Fe(o),i,t);case 4:var o=r.a,i=r.c,t=r.d;return E(Yt,v,d,Fe(o),i,t);case 5:var o=r.a,i=r.c,t=r.d;return E(Yt,v,d,Fe(o),i,t);case 6:var o=r.a,i=r.c,t=r.d;return E(Yt,v,d,Fe(o),i,t);case 7:var o=r.a,i=r.c,t=r.d;return E(Yt,v,d,Fe(o),i,t);case 8:var o=r.a,i=r.c;return E(Yt,v,d,Fe(o),i,0);case 9:var o=r.a,i=r.c;return E(Yt,v,d,Fe(o),i,0);default:var o=r.a,c=r.b,i=r.d;return E(LR,v,d,c,Fe(o),i)}}case 2:var h=e.a,g=e.b,Re=e.c,rr=e.d,y=s(Id,g,Re,rr);if(y.$){var L=y.a,B=y.b,R=B.a,V=B.b,W=y.c,Y=W.a,oe=W.b;switch(r.$){case 0:return ve;case 1:return ve;case 2:return ve;case 3:return ve;case 4:return ve;case 5:return ve;case 6:var o=r.a,i=r.c,T=r.d;return Sr(HR,L,R,V,Fe(o),i,T);case 7:var o=r.a,i=r.c,T=r.d;return ao(xR,L,R,V,Y,oe,Fe(o),i,T);case 8:return ve;case 9:return ve;default:return ve}}else{var _=y.a,x=y.b;switch(r.$){case 0:return ve;case 1:return ve;case 2:var o=r.a,i=r.c,T=r.d;return E(l0,_,x,Fe(o),i,T);case 3:return ve;case 4:var o=r.a,i=r.c,T=r.d;return E(l0,_,x,Fe(o),i,T);case 5:return ve;case 6:var o=r.a,i=r.c,T=r.d;return E(l0,_,x,Fe(o),i,T);case 7:var o=r.a,i=r.c,T=r.d;return E(l0,_,x,Fe(o),i,T);case 8:return ve;case 9:return ve;default:return ve}}default:var $e=e.a,pe=e.b,we=e.c,Ae=e.d,Re=e.e,rr=e.f,K=E(Ed,pe,we,Ae,Re,rr);if(K.$){var Dr=K.a,Ke=K.b,sr=Ke.a,Vr=Ke.b,oa=K.c,Wa=oa.a,tn=oa.b,rt=K.d,R=rt.a,V=rt.b,yr=K.e,Y=yr.a,oe=yr.b;switch(r.$){case 0:return ve;case 1:return ve;case 2:return ve;case 3:return ve;case 4:return ve;case 5:return ve;case 6:var o=r.a,i=r.c,t=r.d;return ao(AR,Dr,sr,Vr,Wa,tn,Fe(o),i,t);case 7:var o=r.a,i=r.c,t=r.d;return jR(Dr)(sr)(Vr)(Wa)(tn)(R)(V)(Y)(oe)(Fe(o))(i)(t);case 8:return ve;case 9:return ve;default:return ve}}else{var Je=K.a,ar=K.b,nr=K.c,x=K.d;switch(r.$){case 0:return ve;case 1:return ve;case 2:var o=r.a,i=r.c,t=r.d;return ua(v0,Je,ar,nr,x,Fe(o),i,t);case 3:return ve;case 4:var o=r.a,i=r.c,t=r.d;return ua(v0,Je,ar,nr,x,Fe(o),i,t);case 5:return ve;case 6:var o=r.a,i=r.c,t=r.d;return ua(v0,Je,ar,nr,x,Fe(o),i,t);case 7:var o=r.a,i=r.c,t=r.d;return ua(v0,Je,ar,nr,x,Fe(o),i,t);case 8:return ve;case 9:return ve;default:return ve}}}}),Cf=function(e){return{$:3,a:e}},c9=l(function(e,r){var a=e.a,t=e.b,o=e.c,c=r.qr;return{qr:{pH:a*c.pH,pJ:t*c.pJ,O:o*c.O},rQ:a*r.rQ,rR:t*r.rR,rS:o*r.rS}}),i9=y_,Vd=function(e){return function(r){return function(a){return function(t){return function(o){return function(c){return function(i){return function(u){return function($){return function(v){var d=e.a,b=e.b,h=e.c,g=N8(t),y=g.u7,_=g.O,x=g.pJ,T=g.pH,L=i9({u7:y,pH:T*d,pJ:x*b,O:_*h});return ao(r,a,L,o,c,i,u,$,v)}}}}}}}}}},Rd=l(function(e,r){switch(r.$){case 0:return yd;case 6:var a=r.a,t=r.b;return n(Cc,a,n(Rd,e,t));case 1:var o=r.a,c=r.b;return n(wa,n(c9,e,o),n(Vd,e,c));case 2:var o=r.a,c=r.b;return n(W8,n(c9,e,o),n(Vd,e,c));case 4:return r;case 3:var c=r.a;return Cf(n(Vd,e,c));default:var i=r.a;return U8(n(G,Rd(e),i))}}),b0=l(function(e,r){var a=r;return n(Rd,e,a)}),p0={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},wX=ne,Ii=519,TX=ne,u9=7683,f9=7682,Ma=7680,RR=function(e){return function(r){return function(a){return function(t){return function(o){return function(c){return function(i){return function(u){return function($){return function(v){return function(d){return{$:2,a:e,b:r,c:a,d:t,e:o,f:c,g:i,h:u,i:$,j:v,k:d}}}}}}}}}}}},Od=S(function(e,r,a){var t=e.lv,o=e.j5,c=e.iu,i=l(function(v,d){var b=v;return d(b)}),u=l(function(v,d){var b=v;return d(b)}),$=function(v){return n(je,i(v.gS),n(je,u(v.f3),n(je,u(v.g9),u(v.ha))))};return n($,a,n($,r,s(RR,c,o,t)))}),OR=s(Od,{j5:0,iu:0,lv:15},{f3:Ma,gS:Ii,g9:Ma,ha:u9},{f3:Ma,gS:Ii,g9:Ma,ha:f9}),JR=s(Od,{j5:0,iu:0,lv:15},{f3:Ma,gS:Ii,g9:Ma,ha:f9},{f3:Ma,gS:Ii,g9:Ma,ha:u9}),m0=l(function(e,r){return e?n(A,JR,r):n(A,OR,r)}),UR={src:`
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
    `,attributes:{normal:"ag",position:"tF"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",sceneProperties:"m",shadowLight:"iI",viewMatrix:"n"}},WR=function(e){if(e.$){var r=e.c;return D(Be(function(a,t,o,c,i,u,$,v){return E(Ze,n(m0,c,v),UR,p0,r,{j:o,k:t,l:u,m:a,iI:$,n:i})}))}else return w},wc=function(e){var r=WR(e);if(r.$)return ve;var a=r.a;return Cf(a)},qR=U(function(e,r,a,t){var o=n(_f,a,F8),c=(function(){var d=p(e,r);return d.a?d.b?Ao(f([o,wc(J8)])):o:d.b?wc(J8):ve})(),i=mR(t),u=i.a,$=i.b,v=i.c;return n(Kl,KV(t),n(b0,F(u,$,v),c))}),GR=l(function(e,r){return C(qR,!0,!0,e,r)}),LX=ne,Ua=function(e){var r=e;return ze(r)},Jd=l(function(e,r){var a=e,t=r;return Q(t,a)>-1}),Ud=l(function(e,r){var a=e,t=r;return a+.5*(t-a)}),NR=kt({pH:-1,pJ:0,O:0}),ZR=kt({pH:0,pJ:-1,O:0}),$9=kt({pH:0,pJ:0,O:-1}),l9=kt({pH:1,pJ:0,O:0}),Pf=kt({pH:0,pJ:1,O:0}),YR=Rr(function(e,r,a,t,o,c){var i=n(Jd,a,c)?Cd:$9,u=n(Jd,r,o)?Pf:ZR,$=n(Jd,e,t)?l9:NR,v=F(Ua(n(Bi,e,t)),Ua(n(Bi,r,o)),Ua(n(Bi,a,c))),d=s(Gt,n(Ud,e,t),n(Ud,r,o),n(Ud,a,c)),b=e0({a0:d,vg:$,vo:u,vu:i});return{pZ:b,q$:v}}),XR=l(function(e,r){return Sr(YR,df(e),bf(e),pf(e),df(r),bf(r),pf(r))}),Pr=S(function(e,r,a){return{pH:e,pJ:r,O:a}}),v9=l(function(e,r){var a=r.a,t=r.b,o=r.c,c=F(a/2,t/2,o/2),i=c.a,u=c.b,$=c.c;return n(GR,e,n(XR,s(Pr,-i,-u,-$),s(Pr,i,u,$)))}),MX=ne,QR=S(function(e,r,a){return{Q:n(r0,e,r),gl:Ua(a.gl),tK:Ua(a.tK)}}),KR=function(e){var r=e;return r.Q},eO=l(function(e,r){var a=hf(e),t=mf(e),o=hf(r),c=Ir(o),i=l(function(v,d){var b=v.a,h=v.b,g=v.c;return n(A,F(b+c,h+c,g+c),d)}),u=mf(r),$=s(me,i,u,t);return{aH:$,ls:n(j6,o,a)}}),h0={aH:P,ls:ou},s9=function(e){var r=e;return{aH:Ve(r.aH),ls:r.ls}},Wd=function(e){if(e.b){var r=e.a,a=e.b;return s9(s(me,eO,s9(r),a))}else return h0},rO=l(function(e,r){var a=e.ag,t=e.tF;return n(A,{ag:t0(a),tF:wt(t)},r)}),d9=$_,b9=l_,p9=v_,aO=ro(function(e,r,a,t,o,c,i){e:for(;;)if(i.b){var u=i.a,$=i.b,v=p9(u.tF),d=b9(u.tF),b=d9(u.tF),h=n(qe,e,b),g=n(Le,r,b),y=n(qe,a,d),_=n(Le,t,d),x=n(qe,o,v),T=n(Le,c,v),L=$;e=h,r=g,a=y,t=_,o=x,c=T,i=L;continue e}else return D8({nU:r,sz:t,sA:c,nY:e,sK:a,sL:o})}),m9=l(function(e,r){var a=p9(e.tF),t=b9(e.tF),o=d9(e.tF);return ua(aO,o,o,t,t,a,a,r)}),h9=function(e){var r=s(Zf,rO,P,hf(e));if(r.b){var a=r.a,t=r.b,o=n(Li,r,mf(e)),c=n(m9,a,t);return C(M8,c,e,o,0)}else return Sd},nO=Te(function(e,r,a,t,o){e:for(;;){var c=t(r/a),i=n(A,c,o);if(re(r,e))return i;var u=e,$=r-1,v=a,d=t,b=i;e=u,r=$,a=v,t=d,o=b;continue e}}),g0=l(function(e,r){return e<1?P:E(nO,0,e-1,e,r,P)}),y0=l(function(e,r){var a=xr(r);return a>=2?{aH:n(G,function(t){return re(t,a-1)?F(0,a,1):F(0,1+t,2+t)},n(Ga,0,a-1)),ls:Lo(n(A,e,r))}:h0}),tO=Rr(function(e,r,a,t,o,c){e:for(;;){var i=n(Kr,r,t+1),u=r*n(Kr,a,o+1),$=r*o,v=u+i,d=$+i,b=u+t,h=$+t,g=F(h,d,v),y=F(h,v,b),_=n(A,g,n(A,y,c));if(t>0){var x=e,T=r,L=a,B=t-1,R=o,V=_;e=x,r=T,a=L,t=B,o=R,c=V;continue e}else if(o>0){var x=e,T=r,L=a,B=e-1,R=o-1,V=_;e=x,r=T,a=L,t=B,o=R,c=V;continue e}else return _}}),g9=Te(function(e,r,a,t,o){return a<=1||t<=1?h0:{aH:Sr(tO,e,a,t,e-1,r-1,P),ls:n(Qf,a*t,function(c){return n(o,n(Kr,a,c),c/a|0)})}}),oO=S(function(e,r,a){return E(g9,e,r,e+1,r,a)}),y9=Te(function(e,r,a,t,o){return n(a,t/e,o/r)}),cO=S(function(e,r,a){return s(oO,e,r,s(y9,e,r,a))}),Lt=function(e){return e},Tc=function(e){return e},_9=(function(){var e=s(cO,1,72,l(function(u,$){var v=2*na*$,d=Oa(v),b=Ra(v);return{ag:Tc({pH:b,pJ:-d,O:0}),tF:Lt({pH:b,pJ:-d,O:u-.5})}})),r=Tc({pH:0,pJ:0,O:1}),a={ag:r,tF:Lt({pH:0,pJ:0,O:.5})},t=n(y0,a,n(g0,72,function(u){var $=2*na*u;return{ag:r,tF:Lt({pH:Ra($),pJ:Oa($),O:.5})}})),o=Tc({pH:0,pJ:0,O:-1}),c={ag:o,tF:Lt({pH:0,pJ:0,O:-.5})},i=n(y0,c,n(g0,72,function(u){var $=2*na*u;return{ag:o,tF:Lt({pH:Ra($),pJ:-Oa($),O:-.5})}}));return n0(h9(Wd(f([t,i,e]))))})(),C9=u0(_9),iO=function(e){var r=e,a=ze(r.O),t=ze(r.pJ),o=ze(r.pH);if(Q(o,t)<1)if(Q(o,a)<1){var c=ta(r.O*r.O+r.pJ*r.pJ);return{pH:0,pJ:-r.O/c,O:r.pJ/c}}else{var c=ta(r.pJ*r.pJ+r.pH*r.pH);return{pH:-r.pJ/c,pJ:r.pH/c,O:0}}else if(Q(t,a)<1){var c=ta(r.O*r.O+r.pH*r.pH);return{pH:r.O/c,pJ:0,O:-r.pH/c}}else{var c=ta(r.pH*r.pH+r.pJ*r.pJ);return{pH:-r.pJ/c,pJ:r.pH/c,O:0}}},qd=function(e){var r=iO(e),a=r,t=a,o=e,c=o,i={pH:c.pJ*t.O-c.O*t.pJ,pJ:c.O*t.pH-c.pH*t.O,O:c.pH*t.pJ-c.pJ*t.pH};return p(r,i)},P9=function(e){var r=C8(e),a=qd(r),t=a.a,o=a.b;return e0({a0:P8(e),vg:t,vo:o,vu:r})},uO=function(e){var r=e;return r.gl},fO=function(e){var r=e;return r.tK},$O=U(function(e,r,a,t){var o=P9(KR(t)),c=n(_f,a,_9),i=(function(){var b=p(e,r);return b.a?b.b?Ao(f([c,wc(C9)])):c:b.b?wc(C9):ve})(),u=fO(t),$=u,v=uO(t),d=v;return n(Kl,o,n(b0,F($,$,d),i))}),lO=l(function(e,r){return C($O,!0,!0,e,r)}),Gd=S(function(e,r,a){return n(lO,e,s(QR,Yn,Pf,{gl:nn(a),tK:nn(r)}))}),Nd=function(e){return Ao(e)},Ei=Nd,Zd=function(e){var r=e.a,a=e.b,t=e.c;return w8(s(x8,r,a,t))},Yd=function(e){return Zd(F(0,e,0))},vO=function(e){var r=e;return r.qr},sO=function(e){var r=e;return r.tK},dO=function(e){var r=e;return r},bO=l(function(e,r){var a=e.uD,t=e.gR,o=e.g1,c=e.ag,i=e.tF,u=dO(t),$=a?-1:1,v=o,d=v.a,b=v.b,h={ag:t0(c),tF:wt(i),gR:i9({u7:$,pH:u.pH,pJ:u.pJ,O:u.O}),g1:n(Fr,d,b)};return n(A,h,r)}),pO=function(e){var r=s(Zf,bO,P,hf(e));if(r.b){var a=r.a,t=r.b,o=n(Li,r,mf(e)),c=n(m9,a,t);return C(z8,c,e,o,0)}else return Sd},mO=S(function(e,r,a){return E(g9,e,r,e+1,r+1,a)}),hO=S(function(e,r,a){return s(mO,e,r,s(y9,e,r,a))}),gO=n0(pO(s(hO,72,72,l(function(e,r){var a=2*na*e,t=Oa(a),o=-na/2+na*r,c=Oa(o),i=Ra(a),u=Ra(o),$={pH:u*i,pJ:u*t,O:c};return{ag:Tc($),tF:Lt($),gR:Tc({pH:-t,pJ:i,O:0}),uD:!0,g1:p(e,r)}})))),_0=72,C0=2*_0,yO=l(function(e,r){e:for(;;){var a=C0+1,t=n(Kr,C0,2*e+3),o=n(Kr,C0,2*e+2),c=2*e+1,i=2*e,u=C0,$=n(A,F(u,i,o),n(A,F(i,t,o),n(A,F(i,c,t),n(A,F(c,a,t),r))));if(e){var v=e-1,d=$;e=v,r=d;continue e}else return $}}),_O=S(function(e,r,a){return a<=.5?e+a*(r-e):r+(1-a)*(e-r)}),CO=l(function(e,r){e:for(;;){var a=s(_O,0,2*na,e/_0),t={he:a,id:0,is:1},o={he:a,id:1,is:1},c=n(A,t,n(A,o,r));if(e){var i=e-1,u=c;e=i,r=u;continue e}else return c}}),PO=(function(){var e=n(CO,_0-1,f([{he:0,id:0,is:0},{he:0,id:1,is:0}])),r=n(yO,_0-1,P);return n(Li,e,r)})(),SO={src:`
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
    `,attributes:{angle:"he",offsetScale:"id",radiusScale:"is"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",sceneProperties:"m",shadowLight:"iI",viewMatrix:"n"}},S9=function(e){return Cf(Be(function(r,a,t,o,c,i,u,$){return E(Ze,n(m0,!0,$),SO,p0,PO,{j:t,k:a,l:i,m:r,iI:u,n:c})}))},xO=U(function(e,r,a,t){var o=n(_f,a,gO),c=(function(){var $=p(e,r);return $.a?$.b?Ao(f([o,S9(t)])):o:$.b?S9(t):ve})(),i=sO(t),u=i;return n(k8,n(o0,Yn,vO(t)),n(b0,F(u,u,u),c))}),jO=l(function(e,r){return C(xO,!0,!0,e,r)}),Xd=S(function(e,r,a){return{$:1,a:e,b:r,c:a}}),x9=U(function(e,r,a,t){return{$:2,a:e,b:r,c:a,d:t}}),Qd=Rr(function(e,r,a,t,o,c){return{$:3,a:e,b:r,c:a,d:t,e:o,f:c}}),Kd=l(function(e,r){return{$:0,a:e,b:r}}),kO=function(e){switch(e.$){case 0:var a=e.a,t=e.b;return n(Kd,a,t);case 1:var a=e.a,t=e.b,r=e.c;return s(Xd,a,t,r);case 2:var a=e.a,t=e.b,i=e.c,u=e.d;return C(x9,a,t,i,u);default:var a=e.a,t=e.b,o=e.c,c=e.d,i=e.e,u=e.f;return Sr(Qd,a,t,o,c,i,u)}},wO=kO,TO=l(function(e,r){return n(jO,wO(e),r)}),zX=ne,LO=l(function(e,r){return{qr:r,tK:Ua(e)}}),eb=l(function(e,r){return n(TO,e,n(LO,nn(r),Yn))}),DX=ne,Sf=function(e){return e},HX=ne,rb=function(e){return s(er,0,1,e<=.04045?e/12.92:n(va,(e+.055)/1.055,2.4))},xf=function(e){var r=Ms(e),a=r.aT,t=r.p8,o=r.rO,c=r.tO;return C(Nt,rb(c),rb(o),rb(t),a)},j9=U(function(e,r,a,t){return{$:0,a:e,b:r,c:a,d:t}}),jf=b_,kf=p_,wf=m_,MO=function(e){var r=e,a=jf(r),t=kf(r),o=wf(r);return C(j9,.4124*a+.3576*t+.1805*o,.2126*a+.7152*t+.0722*o,.0193*a+.1192*t+.9505*o,q8(r))},zO=function(e){return MO(xf(e))},k9=function(e){var r=zO(e),a=r.a,t=r.b,o=r.c,c=a+t+o;return Sf({pH:a/c,pJ:t/c})},Xt=function(e){return{$:0,a:e}},AX=0,DO=l(function(e,r){var a=e,t=r.pJ,o=r.pH;return C(j9,a*o/t,a,a*(1-o-t)/t,1)}),HO=function(e){var r=e.a,a=e.b,t=e.c,o=e.d;return C(Nt,3.2406*r-1.5372*a-.4986*t,-.9689*r+1.8758*a+.0415*t,.0557*r-.204*a+1.057*t,o)},Tf=l(function(e,r){return HO(n(DO,e,r))}),AO=l(function(e,r){var a=n(Tf,jd(1),e);return s(Xd,0,Xt(a),r)}),P0=function(e){return e},Fi=function(e){return C(zs,e.aX,e.a4,e.D,e.aT)},BO=l(function(e,r){return n(AO,k9(Fi(r)),P0(e))}),ab={$:0},IO=function(e){var r=e.h7,a=e.iy,t=e.p4;return Sr(Qd,0,Xt(xf(t)),Xt(s(er,0,1,a)),Xt(s(er,0,1,r)),Xt(1),ab)},EO=l(function(e,r){var a=e.h7,t=e.iy;return IO({p4:Fi(r),h7:a,iy:t})}),w9=function(e){var r=Ms(e),a=r.aT,t=r.p8,o=r.rO,c=r.tO;return C(Nt,c,o,t,a)},FO=function(e){return n(Kd,0,Xt(w9(e)))},VO=function(e){return FO(Fi(e))},Xn=function(e){var r=e.b6;switch(r.$){case 0:return VO(e.l7);case 1:var a=r.a.h7,t=r.a.iy;return n(EO,{h7:a,iy:t},e.l7);default:var o=r.a.kd;return n(BO,o,e.l7)}},Lc=function(e){return Xt(e)},Lf=l(function(e,r){if(r.$){var t=r.a;return Ip(t)}else{var a=r.a;return Xt(e(a))}}),T9=function(e){return n(Kd,0,n(Lf,w9,e))},RO=l(function(e,r){return s(Xd,0,n(Lf,xf,e),r)}),OO=function(e){var r=e.h7,a=e.iy,t=e.p4;return Sr(Qd,0,n(Lf,xf,t),n(Lf,n(er,0,1),a),n(Lf,n(er,0,1),r),Lc(1),ab)},nb=function(e){return C(zs,e.aX,e.a4,e.D,e.aT)},Vi=l(function(e,r){var a=(function(){var u=r.b7;if(u.$)return Lc(nb(r.l7));if(u.a.$)return n(D$,"[textured-surface] FromAtlas textures in 3D Surface are deferred. Rendering as fallback colour.",Lc(nb(r.l7)));var $=u.a.a.bI;return n(ce,Lc(nb(r.l7)),n(Xe,$,e.nQ))})(),t=r.b6;switch(t.$){case 0:return T9(a);case 1:var o=t.a.h7,c=t.a.iy;return OO({p4:a,h7:Lc(o),iy:Lc(c)});default:var i=t.a.kd;return n(RO,a,P0(i))}}),JO=S(function(e,r,a){var t=M(e,{b7:w}),o=n(Vi,{nQ:He},t),c=Xn(t),i=n(Le,0,a-2*r),u=i/2;return Ei(f([s(Gd,c,r,i),n(Yd,u,n(eb,o,r)),n(Yd,-u,n(eb,o,r))]))}),UO=function(e){var r=e;return r.Q},L9=(function(){var e={ag:kd,tF:Lt({pH:0,pJ:0,O:1})},r=Tc({pH:0,pJ:0,O:-1}),a=.5*ta(2),t=n(y0,e,n(g0,72,function(i){var u=2*na*i,$=Oa(u),v=Ra(u);return{ag:Tc({pH:v*a,pJ:$*a,O:a}),tF:Lt({pH:v,pJ:$,O:0})}})),o={ag:r,tF:Yn},c=n(y0,o,n(g0,72,function(i){var u=2*na*i,$=Oa(u),v=Ra(u);return{ag:r,tF:Lt({pH:v,pJ:-$,O:0})}}));return n0(h9(Wd(f([c,t]))))})(),M9=u0(L9),WO=function(e){var r=e;return r.gl},qO=function(e){var r=e;return r.tK},GO=U(function(e,r,a,t){var o=P9(UO(t)),c=n(_f,a,L9),i=(function(){var b=p(e,r);return b.a?b.b?Ao(f([c,wc(M9)])):c:b.b?wc(M9):ve})(),u=qO(t),$=u,v=WO(t),d=v;return n(Kl,o,n(b0,F($,$,d),i))}),NO=l(function(e,r){return C(GO,!0,!0,e,r)}),BX=ne,ZO=S(function(e,r,a){return{Q:n(r0,e,r),gl:Ua(a.gl),tK:Ua(a.tK)}}),YO=S(function(e,r,a){var t=a/2;return n(NO,e,s(ZO,s(Pr,0,-t,0),Pf,{gl:nn(a),tK:nn(r)}))}),tb=S(function(e,r,a){return Nd(f([n(_f,e,r),wc(a)]))}),XO=function(e){return e},QO=function(e){return E8(n(G,XO,V8(e)))},KO=l(function(e,r){if(r.b&&r.b.b){var a=r.a,t=r.b,o=t.a,c=t.b;return{aH:n(G,function(i){return F(0,1+i,2+i)},n(Ga,0,xr(c))),ls:Lo(n(A,e,r))}}else return h0}),eJ=function(e){return s(Pr,e.pH,e.pJ,e.O)},rJ=function(e){var r=n(G,eJ,e);if(r.b&&r.b.b&&r.b.b.b){var a=r.a,t=r.b,o=t.a,c=t.b,i=c.a,u=c.b;return D(n(KO,a,n(A,o,n(A,i,u))))}else return w},aJ=function(e){var r=n(kr,rJ,e);if(r.b){var a=r,t=QO(Wd(a));return D({sC:t,kX:u0(t)})}else return w},Mf=l(function(e,r){var a=aJ(f([r]));if(a.$===1)return Ei(P);var t=a.a.kX,o=a.a.sC;return s(tb,e,o,t)}),nJ=l(function(e,r){return n(v9,e,F(r,r,r))}),tJ=S(function(e,r,a){var t=2*na/e,o=n(G,function(c){return n(b8,t*c,s(gr,0,a,0))},n(Ga,0,e-1));return n(Mf,r,o)}),oJ=ro(function(e,r,a,t,o,c,i){e:for(;;)if(i.b){var u=i.a,$=i.b,v=u,d=v.O,b=v.pJ,h=v.pH,g=n(qe,h,e),y=n(Le,h,r),_=n(qe,b,a),x=n(Le,b,t),T=n(qe,d,o),L=n(Le,d,c),B=$;e=g,r=y,a=_,t=x,o=T,c=L,i=B;continue e}else return{nU:r,sz:t,sA:c,nY:e,sK:a,sL:o}}),cJ=l(function(e,r){var a=e,t=a.O,o=a.pJ,c=a.pH;return ua(oJ,c,c,o,o,t,t,r)}),z9={src:`
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
    `,attributes:{quadVertex:"ir"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",quadVertexPositions:"b3",sceneProperties:"m",viewMatrix:"n"}},Qn=S_,Kn=U(function(e,r,a,t){var o=Tt(t),c=Tt(a),i=Tt(r),u=Tt(e);return Qn({nz:u.pH,nA:i.pH,nB:c.pH,nC:o.pH,nD:u.pJ,nE:i.pJ,nF:c.pJ,nG:o.pJ,nH:u.O,nI:i.O,nJ:c.O,nK:o.O,nL:0,nM:0,nN:0,nO:0})}),D9=l(function(e,r){return{$:0,a:e,b:r}}),iJ=D9({mr:1,m0:0,n$:6}),Mt=iJ(f([{ir:s(gf,0,0,0)},{ir:s(gf,1,0,1)},{ir:s(gf,1,1,2)},{ir:s(gf,0,1,3)}])),H9={src:`
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
    `,attributes:{quadVertex:"ir"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",quadVertexPositions:"b3",sceneProperties:"m",viewMatrix:"n"}},S0={src:`
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
    `,attributes:{quadVertex:"ir"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",quadVertexPositions:"b3",sceneProperties:"m",viewMatrix:"n"}},A9={src:`
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
    `,attributes:{quadVertex:"ir"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",quadVertexPositions:"b3",sceneProperties:"m",viewMatrix:"n"}},uJ=Te(function(e,r,a,t,o){var c=n(cJ,r,f([a,t,o])),i=Fe(c);switch(e.$){case 0:if(e.b.$){var $=e.a,v=e.b.a.X;return n(wa,i,Be(function(Qt,at,on,cn,ca,ia,ga,Xr){return E(Ze,s(fr,cn,0,Xr),A9,Z8,Mt,{hp:v,j:on,k:at,l:ia,b3:C(Kn,r,a,t,o),m:Qt,n:ca})}))}else{var u=e.b.a;return s(Ta,u,i,Be(function(Qt,at,on,cn,ca,ia,ga,Xr){return E(Ze,s(fr,cn,0,Xr),z9,Md,Mt,{ep:ma(u),j:on,k:at,l:ia,b3:C(Kn,r,a,t,o),m:Qt,n:ca})}))}case 1:if(e.b.$){var h=e.a,v=e.b.a.X,b=e.c;return n(wa,i,Be(function(on,cn,ca,ia,ga,Xr,ya,_a){return E(Ze,s(fr,ia,0,_a),A9,a9,Mt,{jc:Hi(b),hp:v,j:ca,k:cn,l:Xr,b3:C(Kn,r,a,t,o),m:on,n:ga})}))}else{var d=e.b.a,b=e.c;return n(wa,i,Be(function(Qt,at,on,cn,ca,ia,ga,Xr){return E(Ze,s(fr,cn,0,Xr),z9,zd,Mt,{jc:b,eC:n($0,Hi(b),d),j:on,k:at,l:ia,b3:C(Kn,r,a,t,o),m:Qt,n:ca})}))}case 2:var g=e.a,y=e.b,nr=e.c,Dr=e.d,_=s(Id,y,nr,Dr);if(_.$)if(_.a.$){var $e=_.a,pe=$e.a,we=$e.b,Ae=_.b,R=Ae.a,V=Ae.b,Re=_.c,Y=Re.a,oe=Re.b;return s(Ta,pe,i,Be(function(ca,ia,ga,Xr,ya,_a,Kt,Hf){var nt=Kt.a,Af=Kt.b;return E(Ze,s(fr,Xr,0,Hf),S0,Mi,Mt,{by:R,bC:V,eq:ma(pe),af:Af,gm:nt.gm,h0:nt.h0,h1:nt.h1,h2:nt.h2,e6:we,j:ga,k:ia,bL:Y,bM:oe,l:_a,b3:C(Kn,r,a,t,o),m:ca,n:ya})}))}else{var L=_.a.a,B=_.b,R=B.a,V=B.b,W=_.c,Y=W.a,oe=W.b;return n(wa,i,Be(function(Qt,at,on,cn,ca,ia,ga,Xr){var ya=ga.a,_a=ga.b;return E(Ze,s(fr,cn,0,Xr),S0,Mi,Mt,{by:R,bC:V,eq:zi,af:_a,gm:ya.gm,h0:ya.h0,h1:ya.h1,h2:ya.h2,e6:L,j:on,k:at,bL:Y,bM:oe,l:ia,b3:C(Kn,r,a,t,o),m:Qt,n:ca})}))}else{var x=_.a,T=_.b;return s(Ta,x,i,Be(function(Qt,at,on,cn,ca,ia,ga,Xr){var ya=ga.a,_a=ga.b;return E(Ze,s(fr,cn,0,Xr),H9,Dd,Mt,{ef:T,af:_a,gm:ya.gm,h0:ya.h0,h1:ya.h1,h2:ya.h2,j6:ma(x),j:on,k:at,l:ia,b3:C(Kn,r,a,t,o),m:Qt,n:ca})}))}default:var rr=e.a,K=e.b,Je=e.c,ar=e.d,nr=e.e,Dr=e.f,Ke=E(Ed,K,Je,ar,nr,Dr);if(Ke.$)if(Ke.a.$){var Gi=Ke.a,k7=Gi.a,we=Gi.b,w7=Ke.b,rt=w7.a,yr=w7.b,T7=Ke.c,zc=T7.a,Dt=T7.b,L7=Ke.d,R=L7.a,V=L7.b,M7=Ke.e,Y=M7.a,oe=M7.b;return s(Ta,k7,i,Be(function(_a,Kt,Hf,nt,Af,cq,z7,iq){var I0=z7.a,uq=z7.b;return E(Ze,s(fr,nt,0,iq),S0,Di,Mt,{by:R,ei:we,bC:V,eo:ma(k7),er:Dt,es:yr,af:uq,gm:I0.gm,h0:I0.h0,h1:I0.h1,h2:I0.h2,e8:zc,j:Hf,k:Kt,bL:Y,bM:oe,l:cq,b3:C(Kn,r,a,t,o),fj:rt,m:_a,n:Af})}))}else{var Wa=Ke.a.a,tn=Ke.b,rt=tn.a,yr=tn.b,zt=Ke.c,zc=zt.a,Dt=zt.b,qi=Ke.d,R=qi.a,V=qi.b,B0=Ke.e,Y=B0.a,oe=B0.b;return n(wa,i,Be(function(ca,ia,ga,Xr,ya,_a,Kt,Hf){var nt=Kt.a,Af=Kt.b;return E(Ze,s(fr,Xr,0,Hf),S0,Di,Mt,{by:R,ei:Wa,bC:V,eo:zi,er:Dt,es:yr,af:Af,gm:nt.gm,h0:nt.h0,h1:nt.h1,h2:nt.h2,e8:zc,j:ga,k:ia,bL:Y,bM:oe,l:_a,b3:C(Kn,r,a,t,o),fj:rt,m:ca,n:ya})}))}else{var sr=Ke.a,Vr=Ke.b,oa=Ke.c,T=Ke.d;return s(Ta,sr,i,Be(function(at,on,cn,ca,ia,ga,Xr,ya){var _a=Xr.a,Kt=Xr.b;return E(Ze,s(fr,ca,0,ya),H9,Hd,Mt,{ef:T,p4:ma(sr),af:Kt,gm:_a.gm,h0:_a.h0,h1:_a.h1,h2:_a.h2,h7:oa,j:cn,k:on,l:ga,b3:C(Kn,r,a,t,o),iy:Vr,m:at,n:ia})}))}}}),fJ=(function(){var e=f([{dq:n(Fr,0,1)},{dq:n(Fr,1,1)},{dq:n(Fr,2,1)},{dq:n(Fr,3,1)},{dq:n(Fr,0,-1)},{dq:n(Fr,1,-1)},{dq:n(Fr,2,-1)},{dq:n(Fr,3,-1)}]),r=f([F(0,1,2),F(0,2,3),F(4,6,5),F(4,7,6),F(4,5,1),F(1,0,4),F(5,6,2),F(2,1,5),F(6,7,3),F(3,2,6),F(7,4,0),F(0,3,7)]);return n(Li,e,r)})(),$J={src:`
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
    `,attributes:{quadShadowVertex:"dq"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",quadVertexPositions:"b3",sceneProperties:"m",shadowLight:"iI",viewMatrix:"n"}},B9=U(function(e,r,a,t){return Cf(Be(function(o,c,i,u,$,v,d,b){return E(Ze,n(m0,u,b),$J,p0,fJ,{j:i,k:c,l:v,b3:C(Kn,e,r,a,t),m:o,iI:d,n:$})}))}),lJ=ro(function(e,r,a,t,o,c,i){var u=E(uJ,a,t,o,c,i),$=p(e,r);return $.a?$.b?Ao(f([u,C(B9,t,o,c,i)])):u:$.b?C(B9,t,o,c,i):ve}),x0=Te(function(e,r,a,t,o){return ua(lJ,!0,!1,e,r,a,t,o)}),vJ=S(function(e,r,a){var t=r/2,o=a/2,c=l(function(i,u){return s(Pr,i,u,0)});return E(x0,T9(e),n(c,-t,-o),n(c,t,-o),n(c,t,o),n(c,-t,o))}),ob=function(e){return{$:1,a:e}},sJ=function(e){return C(x9,0,Xt(xf(e)),Lc(1),ab)},dJ=function(e){return sJ(Fi(e))},I9=function(e){return Zd(F(e,0,0))},bJ=function(e){return Zd(F(0,0,e))},E9=Pf,pJ=n(r0,Yn,E9),mJ=l(function(e,r){return s(_d,pJ,wi(e),r)}),F9=l(function(e,r){return s(_d,S8,wi(e),r)}),hJ=hh,gJ=function(e){var r=e.a,a=e.b,t=e.c,o=B6(F(r,a,t));return{p_:n(Ds,a,r),r6:hJ(t/o),tK:o}},V9=S(function(e,r,a){var t=a.a,o=a.b,c=F(o.pH-t.pH,o.pJ-t.pJ,o.O-t.O),i=c.a,u=c.b,$=c.c,v=gJ(F(i,u,$)),d=v.r6,b=v.p_,h=v.tK;return n(bJ,t.O,n(Yd,t.pJ,n(I9,t.pH,n(F9,b,n(mJ,d-gt(90),n(I9,h/2,n(F9,gt(90),s(Gd,e,r/2,h))))))))}),yJ=S(function(e,r,a){var t=l(function(o,c){e:for(;;)switch(o.$){case 0:var i=o.a;return M(c,{fT:D(i)});case 1:var i=o.a,u=c.fT;if(u.$===1)return M(c,{fT:D(i)});var $=u.a;return{hc:n(A,s(V9,dJ(e),r,p($,i)),c.hc),fT:D(i)};case 2:var v=o.a.uN,b=ob(v),h=c;o=b,c=h;continue e;case 3:var d=o.a.rj,b=ob(d),h=c;o=b,c=h;continue e;default:var d=o.a.rj,b=ob(d),h=c;o=b,c=h;continue e}});return Ve(s(me,t,{hc:P,fT:w},a).hc)}),_J=S(function(e,r,a){if(r.b){var t=r.a,o=r.b;return Ei(s(T2,l(function(c,i){return n(Mf,e,f([c,i,n(yc,F(0,0,-a),i),n(yc,F(0,0,-a),c)]))}),r,X(o,f([t]))))}else return Ei(P)}),CJ=S(function(e,r,a){var t=r/2,o=a/2;return E(x0,e,s(Pr,-t,-o,0),s(Pr,t,-o,0),s(Pr,t,o,0),s(Pr,-t,o,0))}),PJ=function(e){var r=e;return!r.$&&r.a.$===1},SJ=l(function(e,r){var a=r;if(a.$)return Nd(P);if(a.a.$){var t=a.a.a.kX,o=a.a.a.sC;return s(tb,e.uG,o,t)}else{var t=a.a.a.kX,o=a.a.a.sC;return s(tb,e.uU,o,t)}}),R9={src:`
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
    `,attributes:{triangleVertex:"ll"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",sceneProperties:"m",triangleVertexPositions:"gZ",viewMatrix:"n"}},O9={src:`
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
    `,attributes:{triangleVertex:"ll"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",sceneProperties:"m",triangleVertexPositions:"gZ",viewMatrix:"n"}},zf=function(e){var r=sf(e),a=r.a,t=r.b,o=r.c,c=Tt(a),i=Tt(t),u=Tt(o);return Qn({nz:c.pH,nA:i.pH,nB:u.pH,nC:0,nD:c.pJ,nE:i.pJ,nF:u.pJ,nG:0,nH:c.O,nI:i.O,nJ:u.O,nK:0,nL:0,nM:0,nN:0,nO:0})},j0=I8(f([F({ll:0},{ll:1},{ll:2})])),xJ=l(function(e,r){var a=H8(r),t=Fe(a);switch(e.$){case 0:if(e.b.$){var c=e.a,i=e.b.a.X;return ve}else{var o=e.b.a;return s(Ta,o,t,Be(function($e,pe,we,Ae,Re,rr,K,Je){return E(Ze,s(fr,Ae,0,Je),R9,Md,j0,{ep:ma(o),j:we,k:pe,l:rr,m:$e,gZ:zf(r),n:Re})}))}case 1:if(e.b.$){var v=e.a;return ve}else{var u=e.b.a,$=e.c;return n(wa,t,Be(function($e,pe,we,Ae,Re,rr,K,Je){return E(Ze,s(fr,Ae,0,Je),R9,zd,j0,{eC:n($0,Hi($),u),j:we,k:pe,l:rr,m:$e,gZ:zf(r),n:Re})}))}case 2:var d=e.a,b=e.b,B=e.c,R=e.d,h=s(Id,b,B,R);if(h.$)return ve;var g=h.a,y=h.b;return s(Ta,g,t,Be(function($e,pe,we,Ae,Re,rr,K,Je){var ar=K.a,nr=K.b;return E(Ze,s(fr,Ae,0,Je),O9,Dd,j0,{ef:y,af:nr,gm:ar.gm,h0:ar.h0,h1:ar.h1,h2:ar.h2,j6:ma(g),j:we,k:pe,l:rr,m:$e,gZ:zf(r),n:Re})}));default:var _=e.a,x=e.b,T=e.c,L=e.d,B=e.e,R=e.f,V=E(Ed,x,T,L,B,R);if(V.$)return ve;var W=V.a,Y=V.b,oe=V.c,y=V.d;return s(Ta,W,t,Be(function(pe,we,Ae,Re,rr,K,Je,ar){var nr=Je.a,Dr=Je.b;return E(Ze,s(fr,Re,0,ar),O9,Hd,j0,{ef:y,p4:ma(W),af:Dr,gm:nr.gm,h0:nr.h0,h1:nr.h1,h2:nr.h2,h7:oe,j:Ae,k:we,l:K,iy:Y,m:pe,gZ:zf(r),n:rr})}))}}),jJ=(function(){var e=f([{fu:n(Fr,0,1)},{fu:n(Fr,1,1)},{fu:n(Fr,2,1)},{fu:n(Fr,0,-1)},{fu:n(Fr,1,-1)},{fu:n(Fr,2,-1)}]),r=f([F(0,1,2),F(3,5,4),F(3,4,1),F(3,1,0),F(4,5,2),F(4,2,1),F(5,3,0),F(5,0,2)]);return n(Li,e,r)})(),kJ={src:`
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
    `,attributes:{triangleShadowVertex:"fu"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",sceneProperties:"m",shadowLight:"iI",triangleVertexPositions:"gZ",viewMatrix:"n"}},J9=function(e){return Cf(Be(function(r,a,t,o,c,i,u,$){return E(Ze,n(m0,o,$),kJ,p0,jJ,{j:t,k:a,l:i,m:r,iI:u,gZ:zf(e),n:c})}))},wJ=U(function(e,r,a,t){var o=n(xJ,a,t),c=p(e,r);return c.a?c.b?Ao(f([o,J9(t)])):o:c.b?J9(t):ve}),TJ=l(function(e,r){return C(wJ,!0,!0,e,r)}),LJ=l(function(e,r){var a=r.a,t=r.b,o=r.c;return n(TJ,e,s(an,s(Pr,a.pH,a.pJ,a.O),s(Pr,t.pH,t.pJ,t.O),s(Pr,o.pH,o.pJ,o.O)))}),et=S(function(e,r,a){var t=r.b7;return t.$?a:n(D$,"[textured-surface] Textured Surface on "+(e+" is deferred. Rendering as fallback colour."),a)}),MJ=l(function(e,r){e:for(;;){var a=r.a,t=r.b,o=function(yr){return D(n(Pd,a,yr))};switch(t.$){case 0:var y=t.a.rW,we=t.a.va,K=t.a.F;return o(s(CJ,n(Vi,e,K),we,y));case 1:var pe=t.a.tK,K=t.a.F;return o(s(et,"Disc",K,s(tJ,48,Xn(K),pe)));case 2:var $e=t.a.gl,pe=t.a.tK,K=t.a.F;return o(s(et,"Capsule",K,s(JO,K,pe,$e)));case 3:var _=t.a.ls,K=t.a.F;if(_.b&&_.b.b&&_.b.b.b&&_.b.b.b.b&&!_.b.b.b.b.b){var c=_.a,i=_.b,u=i.a,$=i.b,v=$.a,d=$.b,b=d.a;return o(E(x0,n(Vi,e,K),s(Pr,c.pH,c.pJ,c.O),s(Pr,u.pH,u.pJ,u.O),s(Pr,v.pH,v.pJ,v.O),s(Pr,b.pH,b.pJ,b.O)))}else return o(s(et,"polygon ("+(Ie(xr(_))+"-vertex)"),K,n(Mf,Xn(K),_)));case 10:var h=t.a.gI,K=t.a.F;return o(s(et,"Cube",K,n(nJ,Xn(K),h)));case 11:var pe=t.a.tK,K=t.a.F;return o(n(eb,n(Vi,e,K),pe));case 12:var $e=t.a.gl,pe=t.a.tK,K=t.a.F;return o(s(et,"Cylinder",K,s(Gd,Xn(K),pe,$e)));case 13:var g=t.a.q$,K=t.a.F;return o(s(et,"Block",K,n(v9,Xn(K),g)));case 14:var _=t.a.ls,K=t.a.F;return o(s(et,"Triangle",K,n(LJ,Xn(K),_)));case 15:var y=t.a.rW,_=t.a.ls,K=t.a.F,x=n(Vi,e,K),T=M(K,{b7:w}),L=y/2,B=n(G,function(yr){return M(yr,{O:yr.O+L})},_),R=Xn(T),V=(function(){if(_.b&&_.b.b&&_.b.b.b&&_.b.b.b.b&&!_.b.b.b.b.b){var yr=_.a,zt=_.b,zc=zt.a,Dt=zt.b,qi=Dt.a,B0=Dt.b,Gi=B0.a;return E(x0,x,s(Pr,yr.pH,yr.pJ,yr.O+L),s(Pr,zc.pH,zc.pJ,zc.O+L),s(Pr,qi.pH,qi.pJ,qi.O+L),s(Pr,Gi.pH,Gi.pJ,Gi.O+L))}else return s(et,"polygon-with-walls top ("+(Ie(xr(_))+"-vertex)"),K,n(Mf,R,B))})(),W=s(_J,R,B,y),Y=n(G,function(yr){return M(yr,{O:yr.O-L})},_),oe=n(Mf,R,Ve(Y));return o(Ei(f([V,oe,W])));case 16:var $e=t.a.gl,pe=t.a.tK,K=t.a.F;return o(s(et,"Cone",K,s(YO,Xn(K),pe,$e)));case 17:var we=t.a.va,Ae=t.a.rj,Re=t.a.ds,K=t.a.F;return o(s(et,"Line",K,s(V9,Xn(K),we,p(Re,Ae))));case 18:var rr=t.a.sD,K=t.a.F;return n(se,function(yr){var zt=n(SJ,{uG:n(Vi,e,K),uU:Xn(K)},yr);return n(Pd,a,PJ(yr)?zt:s(et,"welded mesh",K,zt))},n(Xe,rr,e.dT));case 4:var Je=t.a.kU,ar=t.a.e4,nr=t.a.eF,Dr=t.a.fo;if(Dr.$)return n(D$,"[LeafPath] fill-only LeafPath in 3D is deferred; no stroke colour set",w);var Ke=Dr.a;return o(Ei(s(yJ,Ke,ar,Je)));case 5:var sr=t.a,Vr=sr.iu;if(Vr.$)return w;var oa=Vr.a.bI;return n(se,function(yr){return n(Pd,a,s(vJ,yr,sr.va,sr.rW))},n(Xe,oa,e.nQ));case 6:var Wa=t.a.sb,tn=e,rt=p(a,Wa);e=tn,r=rt;continue e;case 7:return w;case 8:return w;case 9:return w;case 19:return w;case 20:return w;default:return w}}}),zJ=l(function(e,r){return n(kr,MJ(e),y8(r))}),cb=function(e){return{$:6,a:e}},DJ=function(e){return{$:0,a:e}},HJ=function(e){return{$:1,a:e}},AJ=function(e){return{$:2,a:e}},ib=l(function(e,r){return n(h8,e.gY,n(p8,e.gE,n(m8,e.gG,r)))}),BJ=function(e){return e},Ri=function(e){return e},U9=l(function(e,r){var a=e,t=r,o=t.O-a.O,c=t.pJ-a.pJ,i=t.pH-a.pH,u=n(Le,ze(i),n(Le,ze(c),ze(o)));if(u){var $=o/u,v=c/u,d=i/u,b=ta(d*d+v*v+$*$);return D({pH:d/b,pJ:v/b,O:$/b})}else return w}),IJ=l(function(e,r){var a=n(ib,e,r),t=n(ib,e,s(gr,0,0,0)),o=s(gr,a.pH-t.pH,a.pJ-t.pJ,a.O-t.O);return n(ce,$9,n(U9,Yn,s(Pr,o.pH,o.pJ,o.O)))}),EJ=function(e){var r=e.a,a=e.b;switch(a.$){case 19:var o=a.a;return D(DJ({u:!0,a:cb(Ku(o.l7)),ex:n(IJ,r,o.ex),jT:Ri(o.jT)}));case 20:var o=a.a,t=n(ib,r,o.tF);return D(HJ({u:!0,a:cb(Ku(o.l7)),jT:BJ(o.jT),tF:s(Pr,t.pH,t.pJ,t.O)}));case 21:var o=a.a;return D(AJ({a:cb(Ku(o.uW)),m6:Ri(o.jT),m7:Ri(o.jT),fx:Cd}));default:return w}},FJ=function(e){return n(kr,EJ,y8(e))},IX=ne,k0=function(e){return e},VJ=function(e){return{$:0,a:e}},RJ=VJ,OJ={$:3},JJ=OJ,UJ=U(function(e,r,a,t){return{$:4,a:e,b:r,c:a,d:t}}),WJ=UJ,qJ=function(e){return{$:1,a:e}},GJ=qJ,NJ=function(e){return n(Uf,"height",Ie(e))},ZJ=n$,YJ=function(e){return{$:2,a:e}},XJ=YJ,QJ=function(e){var r=e.a,a=e.b,t=e.c,o=e.d,c=function(u){return Yr(u*1e3)/1e3},i=function(u){return Yr(u*1e4)/100};return Q5(f(["rgba(",N(i(r)),"%,",N(i(a)),"%,",N(i(t)),"%,",N(c(o)),")"]))},KJ=S(function(e,r,a){return s(X_,e,r,a)}),W9=function(e){var r=e;return r},za=C(Nt,1,1,1,1),zr=S(function(e,r,a){return n(G,function(t){return n(t,r,a)},e)}),eU=function(e){return Qn({nz:e.aj,nA:e.am,nB:e.ap,nC:e.a1,nD:e.ak,nE:e.an,nF:e.aq,nG:e.a2,nH:e.al,nI:e.ao,nJ:e.ar,nK:e.a3,nL:0,nM:0,nN:0,nO:1})},w0=Te(function(e,r,a,t,o){var c=t.nh?1:-1,i=C(Nt,t.gG,t.gG,t.gG,c);return Sr(o,e,i,eU(t),t.nh,r,a)}),q9=Rr(function(e,r,a,t,o,c){e:for(;;)switch(o.$){case 0:return c;case 6:var i=o.a,u=o.b,$=e,v=r,d=a,b=n(_8,i,t),h=u,g=c;e=$,r=v,a=d,t=b,o=h,c=g;continue e;case 1:var y=o.b,_=n(A,E(w0,e,r,a,t,y),c.aM);return{aM:_,bn:c.bn,ub:c.ub,P:c.P};case 2:var y=o.b,_=n(A,E(w0,e,r,a,t,y),c.P);return{aM:c.aM,bn:c.bn,ub:c.ub,P:_};case 4:var x=o.b,T=n(A,E(w0,e,r,a,t,x),c.bn);return{aM:c.aM,bn:T,ub:c.ub,P:c.P};case 3:var L=o.a,B=n(A,E(w0,e,r,a,t,L),c.ub);return{aM:c.aM,bn:c.bn,ub:B,P:c.P};default:var R=o.a;return s(me,C(q9,e,r,a,t),c,R)}}),G9=function(e){var r=e;return-r},rU=l(function(e,r){var a=e,t=r;return t+a}),Mc=0,aU=function(e){var r=e,a=n(Le,ze(r.pH),n(Le,ze(r.pJ),ze(r.O)));if(a){var t=r.O/a,o=r.pJ/a,c=r.pH/a,i=ta(c*c+o*o+t*t);return i*a}else return Mc},nU=S(function(e,r,a){var t=e,o=r,c=a;return{pH:t,pJ:o,O:c}}),N9=function(e){var r=o9(e),a=r.a,t=r.b,o=r.c;return aU(s(nU,a,t,o))},tU=l(function(e,r){var a=n(qt,.99,n(Pc,Ua(e),G9(n9(r)))),t=n(qt,1.01,n(rU,N9(r),G9(t9(r))));return p(a,t)}),oU=U(function(e,r,a,t){return{$:4,a:e,b:r,c:a,d:t}}),ub=oU,T0=U(function(e,r,a,t){return{$:1,a:e,b:r,c:a,d:t}}),cU=function(e){var r=e.cm,a=e.cq,t=e.cK;return C(T0,518,t,a,r)},iU=l(function(e,r){return{$:6,a:e,b:r}}),uU=iU,Z9=f([cU({cm:1,cq:0,cK:!1}),C(ub,!1,!1,!1,!1),n(uU,0,1)]),fb=8,Y9=15,Oi=7681,fU={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},$U=D9({mr:1,m0:0,n$:5}),lU=$U(f([{tF:n(Fr,-1,-1)},{tF:n(Fr,1,-1)},{tF:n(Fr,-1,1)},{tF:n(Fr,1,1)}])),vU={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"tF"},uniforms:{}},$b=function(e){return s(Od,{j5:e.j5,iu:e.iu,lv:e.lv},{f3:e.f3,gS:e.gS,g9:e.g9,ha:e.ha},{f3:e.f3,gS:e.gS,g9:e.g9,ha:e.ha})},lb=function(e){return E(Ze,f([$b(e),C(ub,!1,!1,!1,!1)]),vU,fU,lU,{})},sU=lb({f3:Oi,j5:0,iu:fb,gS:Ii,lv:Y9,g9:Oi,ha:Oi}),dU=516,X9=5386,bU=function(e){return n(va,2,e+4)},Q9=function(e){return lb({f3:Ma,j5:Y9,iu:fb,gS:dU,lv:bU(e),g9:X9,ha:X9})},pU=S(function(e,r,a){return Fn(f([s(zr,e,a,Z9),f([Q9(r),sU])]))}),mU=l(function(e,r){return Fn(n(Na,pU(e),r))}),hU=function(e){return function(r){return function(a){return function(t){return function(o){return function(c){return function(i){return function(u){return function($){return function(v){return{$:0,a:e,b:r,c:a,d:t,e:o,f:c,g:i,h:u,i:$,j:v}}}}}}}}}}},gU=function(e){var r=e.aT,a=e.l7,t=e.hb,o=e.ja,c=e.jM,i=e.kM,u=l(function($,v){var d=$.a,b=$.b,h=$.c,g=v.a,y=v.b,_=v.c;return hU(d)(b)(h)(g)(y)(_)(i)(c)(o)(t)});return n(u,a,r)},yU=S(function(e,r,a){return{$:0,a:e,b:r,c:a}}),K9=l(function(e,r){var a=e,t=r;return s(yU,32774,a,t)}),_U=l(function(e,r){return gU({hb:0,aT:n(K9,e,r),ja:0,l7:n(K9,e,r),jM:0,kM:0})}),EX=ne,CU=1,PU=771,SU={$:8},xU=SU,L0=f([n(_U,CU,PU),xU]),jU=function(e){var r=e.cm,a=e.cq,t=e.cK;return C(T0,513,t,a,r)},e7=jU({cm:1,cq:0,cK:!0}),Ji=n(A,e7,L0),r7=514,a7=function(e){var r=e.cm,a=e.cq,t=e.cK;return C(T0,515,t,a,r)},n7=240,kU=n(A,a7({cm:1,cq:0,cK:!0}),n(A,$b({f3:Ma,j5:n7,iu:0,gS:r7,lv:0,g9:Ma,ha:Ma}),L0)),wU=function(e){var r=e.cm,a=e.cq,t=e.cK;return C(T0,514,t,a,r)},Ui=n(A,wU({cm:1,cq:0,cK:!0}),L0),vb=function(e){var r=e;return T8(r.cX)},TU=function(e){return Zl(vb(e))},LU=function(e){return e0({a0:Lt({pH:e.a1,pJ:e.a2,O:e.a3}),vg:kt({pH:e.aj,pJ:e.ak,O:e.al}),vo:kt({pH:e.am,pJ:e.an,O:e.ao}),vu:kt({pH:e.ap,pJ:e.aq,O:e.ar})})},sb=l(function(e,r){var a=e,t=r,o=a.vu,c=o,i=a.vo,u=i,$=a.vg,v=$;return{pH:t.pH*v.pH+t.pJ*v.pJ+t.O*v.O,pJ:t.pH*u.pH+t.pJ*u.pJ+t.O*u.O,O:t.pH*c.pH+t.pJ*c.pJ+t.O*c.O}}),t7=l(function(e,r){var a=e,t=r,o=a.a0,c=o,i=t.pH-c.pH,u=t.pJ-c.pJ,$=t.O-c.O,v=a.vu,d=v,b=a.vo,h=b,g=a.vg,y=g;return{pH:i*y.pH+u*y.pJ+$*y.O,pJ:i*h.pH+u*h.pJ+$*h.O,O:i*d.pH+u*d.pJ+$*d.O}}),o7=l(function(e,r){return{a0:n(t7,e,Zl(r)),vg:n(sb,e,Yl(r)),vo:n(sb,e,Xl(r)),vu:n(sb,e,vf(r))}}),MU=l(function(e,r){var a=r,t=a,o=e,c=o;return{nU:n(Le,c.nU,t.nU),sz:n(Le,c.sz,t.sz),sA:n(Le,c.sA,t.sA),nY:n(qe,c.nY,t.nY),sK:n(qe,c.sK,t.sK),sL:n(qe,c.sL,t.sL)}}),zU=l(function(e,r){var a=r,t=a.O,o=a.pJ,c=a.pH,i=e,u=i.a,$=i.b,v=i.c,d=ze(u)/2,b=ze($)/2,h=ze(v)/2;return{nU:c+d,sz:o+b,sA:t+h,nY:c-d,sK:o-b,sL:t-h}}),db=U(function(e,r,a,t){var o=a.qr,c=2*a.rS*r,i=2*a.rR*r,u=2*a.rQ*r,$=o.O*r,v=o.pJ*r,d=o.pH*r,b=rn(vf(e)),h=ze(u*b.pH)+ze(i*b.pJ)+ze(c*b.O),g=rn(Xl(e)),y=ze(u*g.pH)+ze(i*g.pJ)+ze(c*g.O),_=rn(Yl(e)),x=ze(u*_.pH)+ze(i*_.pJ)+ze(c*_.O),T=n(zU,F(x,y,h),n(t7,e,s(Pr,d,v,$)));if(t.$)return D(T);var L=t.a;return D(n(MU,L,T))}),bb=U(function(e,r,a,t){e:for(;;)if(t.b){var o=t.a,c=t.b;switch(o.$){case 0:var g=e,y=r,_=a,x=c;e=g,r=y,a=_,t=x;continue e;case 1:var i=o.a,u=C(db,e,r,i,a),g=e,y=r,_=u,x=c;e=g,r=y,a=_,t=x;continue e;case 2:var i=o.a,u=C(db,e,r,i,a),g=e,y=r,_=u,x=c;e=g,r=y,a=_,t=x;continue e;case 3:var g=e,y=r,_=a,x=c;e=g,r=y,a=_,t=x;continue e;case 4:var i=o.a,u=C(db,e,r,i,a),g=e,y=r,_=u,x=c;e=g,r=y,a=_,t=x;continue e;case 5:var $=o.a,g=e,y=r,_=C(bb,e,r,a,$),x=c;e=g,r=y,a=_,t=x;continue e;default:var v=o.a,d=o.b,b=n(o7,LU(v),e),h=r*v.gG,g=e,y=r,_=C(bb,b,h,a,f([d])),x=c;e=g,r=y,a=_,t=x;continue e}}else return a}),DU={nh:!0,aj:1,ak:0,al:0,am:0,an:1,ao:0,ap:0,aq:0,ar:1,a1:0,a2:0,a3:0,gG:1},HU=function(e){var r=e;return r},c7=lb({f3:Oi,j5:0,iu:fb,gS:Ii,lv:255,g9:Oi,ha:Oi}),FX=ne,ha={ja:0,u:!1,jM:0,kH:0,kM:0,uR:0,pH:0,pJ:0,O:0},Ln=l(function(e,r){var a=e,t=r;return Qn({nz:a.pH,nA:a.kM,nB:t.pH,nC:t.kM,nD:a.pJ,nE:a.jM,nF:t.pJ,nG:t.jM,nH:a.O,nI:a.ja,nJ:t.O,nK:t.ja,nL:a.uR,nM:a.kH,nN:t.uR,nO:t.kH})}),Df=p({gm:n(Ln,ha,ha),h0:n(Ln,ha,ha),h1:n(Ln,ha,ha),h2:n(Ln,ha,ha)},C(Nt,0,0,0,0)),AU=function(e){var r=e;return r.eI},BU=function(e){var r=e;return r.mK},i7=function(e){var r=e;return .5*r},IU=function(e){var r=e;return Ol(r)},u7=function(e){return IU(i7(BU(e)))},f7=function(e){var r=e;return 2*r},EU=function(e){return f7(n(qt,u7(e),AU(e)))},FU=function(e){var r=e;return r.tJ},VU=l(function(e,r){var a=r.pW,t=r.rs,o=r.sY,c=u7(e),i=Ua(o),u=i,$=Ua(t),v=$,d=FU(e);if(d){var b=EU(e),h=b;return Zc(v)?Qn({nz:2/(a*h),nA:0,nB:0,nC:0,nD:0,nE:2/h,nF:0,nG:0,nH:0,nI:0,nJ:0,nK:-1,nL:0,nM:0,nN:0,nO:1}):Qn({nz:2/(a*h),nA:0,nB:0,nC:0,nD:0,nE:2/h,nF:0,nG:0,nH:0,nI:0,nJ:-2/(v-u),nK:-(v+u)/(v-u),nL:0,nM:0,nN:0,nO:1})}else return Zc(v)?Qn({nz:1/(a*c),nA:0,nB:0,nC:0,nD:0,nE:1/c,nF:0,nG:0,nH:0,nI:0,nJ:-1,nK:-2*u,nL:0,nM:0,nN:-1,nO:0}):Qn({nz:1/(a*c),nA:0,nB:0,nC:0,nD:0,nE:1/c,nF:0,nG:0,nH:0,nI:0,nJ:-(v+u)/(v-u),nK:-2*v*u/(v-u),nL:0,nM:0,nN:-1,nO:0})}),RU=function(e){return n(A,a7({cm:1,cq:0,cK:!0}),n(A,$b({f3:Ma,j5:n7,iu:e,gS:r7,lv:0,g9:Ma,ha:Ma}),L0))},M0=l(function(e,r){return(1&e>>r)===1?0:1}),OU=S(function(e,r,a){return Fn(n(G,function(t){var o=t<<4,c=C(Nt,n(M0,t,0),n(M0,t,1),n(M0,t,2),n(M0,t,3));return s(zr,e,p(r,c),RU(o))},n(Ga,1,n(va,2,a)-1)))}),JU=x_,UU=l9,WU={a0:Yn,vg:UU,vo:E9,vu:a0},qU=function(e){var r=_c(Zl(e)),a=rn(vf(e)),t=rn(Xl(e)),o=rn(Yl(e));return Qn({nz:o.pH,nA:t.pH,nB:a.pH,nC:r.pH,nD:o.pJ,nE:t.pJ,nF:a.pJ,nG:r.pJ,nH:o.O,nI:t.O,nJ:a.O,nK:r.O,nL:0,nM:0,nN:0,nO:1})},GU=l(function(e,r){return qU(n(o7,vb(r),e))}),NU=function(e){return n(GU,WU,e)},Wi=f([e7,C(ub,!1,!1,!1,!1)]),ZU=function(e){var r=vb(e.cg),a=Ao(e.hG),t=a,o=C(bb,r,1,w,f([t]));if(o.$===1)return P;var c=o.a,i=NU(e.cg),u=(function(){var pe=e.G;switch(pe.$){case 0:return p(0,0);case 1:return p(1,0);case 2:return p(2,0);case 3:var we=pe.a;return p(3,we);case 4:var we=pe.a;return p(4,we);default:return p(5,0)}})(),$=u.a,v=u.b,d=n(tU,e.cO,c),b=d.a,h=d.b,g=n(VU,e.cg,{pW:e.pW,rs:h,sY:b}),y=JU(g).nO,_=y?rn(vf(r)):Tt(TU(e.cg)),x=e.B,T=x,L=n(Tf,T,e.H),B=L,R=Qn({nz:0,nA:_.pH,nB:jf(B),nC:e.o8,nD:0,nE:_.pJ,nF:kf(B),nG:HU(N9(c)),nH:0,nI:_.O,nJ:wf(B),nK:$,nL:0,nM:y,nN:0,nO:v}),V=Sr(q9,R,i,g,DU,t,{aM:P,bn:P,ub:P,P}),W=e.E;switch(W.$){case 0:var Y=W.a;return Fn(f([s(zr,V.aM,p(Y,za),Ji),s(zr,V.P,p(Y,za),n(A,jc,Wi)),s(zr,V.P,p(Y,za),n(A,jc,Ui)),s(zr,V.P,p(Y,za),n(A,xc,Wi)),s(zr,V.P,p(Y,za),n(A,xc,Ui)),s(zr,V.bn,Df,Ji)]));case 1:var Y=W.a;return Fn(f([s(zr,V.aM,Df,Ji),f([c7]),s(zr,V.ub,Y.gm,Z9),f([Q9(0)]),s(zr,V.aM,p(Y,za),kU),s(zr,V.P,p(Y,za),n(A,jc,Wi)),s(zr,V.P,p(Y,za),n(A,jc,Ui)),s(zr,V.P,p(Y,za),n(A,xc,Wi)),s(zr,V.P,p(Y,za),n(A,xc,Ui)),s(zr,V.bn,Df,Ji)]));default:var oe=W.a,$e=W.b;return Fn(f([s(zr,V.aM,p($e,za),Ji),f([c7]),n(mU,V.ub,oe),s(OU,V.aM,$e,xr(oe)),s(zr,V.P,p($e,za),n(A,jc,Wi)),s(zr,V.P,p($e,za),n(A,jc,Ui)),s(zr,V.P,p($e,za),n(A,xc,Wi)),s(zr,V.P,p($e,za),n(A,xc,Ui)),s(zr,V.bn,Df,Ji)]))}},YU=function(e){return n(Uf,"width",Ie(e))},$7=l(function(e,r){var a=f([GJ(1),XJ(0),RJ(!0),C(WJ,0,0,0,0)]),t=(function(){var B=e.i3;switch(B.$){case 0:return F(a,"0",1);case 1:return F(n(A,JJ,a),"1",1);default:var R=B.a;return F(a,"0",R)}})(),o=t.a,c=t.b,i=t.c,u=e.q$,$=u.a,v=u.b,d=W9(v),b=n(ee,"height",Ie(d)+"px"),h=W9($),g=h/d,y=n(Vn,function(B){return ZU({pW:g,cg:e.cg,cO:e.cO,hG:B.hG,B:B.B,E:B.E,o8:i,G:B.G,H:B.H})},r),_=n(ee,"width",Ie(h)+"px"),x=e.p0,T=x,L=QJ(T);return s(ZJ,"div",f([n(ee,"padding","0px"),_,b]),f([p(c,s(KJ,o,f([YU(Yr(h*i)),NJ(Yr(d*i)),_,b,n(ee,"display","block"),n(ee,"background-color",L)]),y))]))}),XU=function(e){return{$:2,a:e}},pb=function(e){return XU(e)},l7=function(e){return n($7,{i3:pb(e.ew),p0:e.p0,cg:e.cg,cO:e.cO,q$:e.q$},f([{hG:e.hG,B:e.B,E:e.E,G:e.G,H:e.H}]))},VX=1,RX=0,QU=function(e){return{$:0,a:e}},KU=function(e){return QU(e)},mb=function(e){return e},eW=function(e){return{$:1,a:e}},rW=function(e){return eW(e)},z0=function(e){var r=e,a=n(Le,ze(r.pH),n(Le,ze(r.pJ),ze(r.O)));if(a){var t=r.O/a,o=r.pJ/a,c=r.pH/a,i=ta(c*c+o*o+t*t);return D({pH:c/i,pJ:o/i,O:t/i})}else return w},aW=l(function(e,r){var a=e,t=r,o=t.O-a.O,c=t.pJ-a.pJ,i=t.pH-a.pH,u=n(Le,ze(i),n(Le,ze(c),ze(o)));if(u){var $=o/u,v=c/u,d=i/u,b=ta(d*d+v*v+$*$);return b*u}else return Mc}),nW=l(function(e,r){var a=e,t=r;return t.pH*a.pH+t.pJ*a.pJ+t.O*a.O}),v7=l(function(e,r){var a=e,t=r;return Q(t,a)>0}),tW=l(function(e,r){var a=e,t=r;return Q(t,a)<0}),oW=l(function(e,r){var a=e,t=r;return{pH:t.pH-a.pH,pJ:t.pJ-a.pJ,O:t.O-a.O}}),cW=l(function(e,r){var a=e,t=r,o=t.pH*a.pH+t.pJ*a.pJ+t.O*a.O;return{pH:a.pH*o,pJ:a.pJ*o,O:a.O*o}}),iW=function(e){var r=e;return{pH:-r.pH,pJ:-r.pJ,O:-r.O}},uW=S(function(e,r,a){return n(ea,function(t){var o=n(oW,n(cW,t,r),r);return n(ea,function(c){var i=n(xd,r,e),u=n(nW,a,i),$=n(v7,Mc,u)?i:n(tW,Mc,u)?iW(i):kd;return n(se,function(v){return F(t,c,v)},z0($))},z0(o))},z0(e))}),fW=function(e){var r=e;return r},OX=ne,hb=ne,JX=ne,$W=l(function(e,r){var a=e,t=r;return n(Ds,a,t)}),lW=l(function(e,r){var a=e,t=r;return{pH:a.pJ*t.O-a.O*t.pJ,pJ:a.O*t.pH-a.pH*t.O,O:a.pH*t.pJ-a.pJ*t.pH}}),s7=function(e){var r=e;return r.vg},d7=function(e){var r=e;return r.vo},vW=function(e){return n(lW,s7(e),d7(e))},sW=function(e){var r=e;return r.a0},dW=function(e){return{a0:sW(e),vg:s7(e),vo:d7(e),vu:vW(e)}},bW=function(e){return{eI:e.eI,mK:(function(){var r=e.rD;if(r.$){var t=r.a;return f7(n($W,i7(t),e.eI))}else{var a=r.a;return a}})(),cX:dW(e.lt),tJ:e.tJ}},pW=l(function(e,r){var a=qd(r),t=a.a,o=a.b;return hb({a0:e,vg:t,vo:o})}),mW=l(function(e,r){return n(pW,r,e)}),hW=function(e){var r=n(o0,e.rw,e.rp),a=fW(e.fx),t=n(xd,r,a),o=(function(){var c=s(uW,r,a,t);if(c.$){var d=z0(r);if(d.$){var h=qd(e.fx),g=h.a,y=h.b;return hb({a0:e.rp,vg:y,vo:e.fx})}else{var b=d.a;return n(mW,b,e.rp)}}else{var i=c.a,u=i.a,$=i.b,v=i.c;return hb({a0:e.rp,vg:v,vo:$})}})();return bW({eI:n(aW,e.rp,e.rw),rD:e.rD,tJ:e.tJ,lt:o})},D0=function(e){return hW({rp:mb(e.rp),rw:mb(e.rw),rD:(function(){var r=e.tJ;if(r.$){var t=r.a.u5;return rW(nn(t))}else{var a=r.a.eM;return KU(wi(a))}})(),tJ:(function(){var r=e.tJ;return r.$?1:0})(),fx:n(ce,Pf,n(U9,Yn,mb(e.fx)))})},Bo=function(e){return e},gW=function(e){var r=e;return r},gb=function(e){var r=s(er,1667,25e3,gW(e)),a=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,t=r<=2222?-1.1063814*(a*a*a)-1.3481102*(a*a)+2.18555832*a-.20219683:r<=4e3?-.9549476*(a*a*a)-1.37418593*(a*a)+2.09137015*a-.16748867:3.081758*(a*a*a)-5.8733867*(a*a)+3.75112997*a-.37001483;return Sf({pH:a,pJ:t})},H0=Sf({pH:.31271,pJ:.32902}),yW=Sf({pH:.37208,pJ:.37529}),_W=Sf({pH:.44757,pJ:.40745}),UX=ne,b7=function(e){return e},p7=gb(b7(12e3)),m7=gb(b7(5600)),Io=function(e){switch(e.$){case 0:return H0;case 1:return m7;case 2:return p7;case 3:return _W;case 4:return yW;case 5:var r=e.a;return gb(r);default:var a=e.a;return k9(a)}},WX=ne,yb=function(e){return P0(1.2*n(va,2,e))},h7=function(e){return Ua(e)},CW=function(e){var r=e;return r},PW=function(e){var r=e.nj,a=e.oZ,t=e.mA,o=CW(a);return yb(n(Xf,2,100*n(va,t,2)/(o*r)))},SW=function(e){switch(e.$){case 0:var r=e.a;return yb(r);case 1:var a=e.a;return h7(a);default:var t=e.a;return PW({mA:t.mA,nj:t.nj,oZ:t.oZ})}},xW=l(function(e,r){return{$:2,a:e,b:r}}),g7=function(e){return{$:0,a:e}},A0=function(e){var r=e;return r},jW=function(e){var r=e;return r.u},_b=g7(Df.a),kW=l(function(e,r){var a=l(function(t,o){var c=o.a,i=o.b;return e(t)?p(n(A,t,c),i):p(c,n(A,t,i))});return s(dn,a,p(P,P),r)}),wW=function(e){var r=e;return Qn({nz:r.pH,nA:r.kM,nB:0,nC:0,nD:r.pJ,nE:r.jM,nF:0,nG:0,nH:r.O,nI:r.ja,nJ:0,nK:0,nL:r.uR,nM:r.kH,nN:0,nO:0})},y7=Be(function(e,r,a,t,o,c,i,u){var $=n(kW,jW,f([A0(e),A0(r),A0(a),A0(t)])),v=$.a,d=$.b;if(v.b){var b=X(v,d);if(b.b&&b.b.b&&b.b.b.b&&b.b.b.b.b&&!b.b.b.b.b.b){var h=b.a,g=b.b,y=g.a,_=g.b,x=_.a,T=_.b,L=T.a;return n(xW,n(G,wW,v),{gm:n(Ln,h,y),h0:n(Ln,x,L),h1:n(Ln,o,c),h2:n(Ln,i,u)})}else return _b}else return g7({gm:n(Ln,e,r),h0:n(Ln,a,t),h1:n(Ln,o,c),h2:n(Ln,i,u)})}),qX=ne,Cb=function(e){return e},Pb=l(function(e,r){var a=e,t=rn(r.ex),o=t.O,c=t.pJ,i=t.pH,u=n(Tf,r.jT,r.a),$=u;return{ja:wf($),u:a,jM:kf($),kH:0,kM:jf($),uR:1,pH:-i,pJ:-c,O:-o}}),_7=l(function(e,r){var a=e,t=_c(r.tF),o=t.O,c=t.pJ,i=t.pH,u=n(Tf,r.jT,r.a),$=u;return{ja:wf($),u:a,jM:kf($),kH:0,kM:jf($),uR:2,pH:i,pJ:c,O:o}}),TW=function(e){switch(e.$){case 0:var r=e.a;return n(Pb,Cb(r.u),{a:Io(r.a),ex:r.ex,jT:r.jT});case 1:var r=e.a;return n(_7,Cb(r.u),{a:Io(r.a),jT:r.jT,tF:r.tF});default:return ha}},C7=function(e){var r=e;return r},P7=function(e){var r=e;return{pH:-r.pH,pJ:-r.pJ,O:-r.O}},Sb=function(e){e:for(;;){if(re(e.m6,Mc)&&re(e.m7,Mc))return ha;if(n(v7,Ua(e.m6),Ua(e.m7))){var r={a:e.a,m6:e.m7,m7:e.m6,fx:P7(e.fx)};e=r;continue e}else{var a=ze(C7(e.m7)/na),t=ze(C7(e.m6)/na),o=rn(e.fx),c=o.O,i=o.pJ,u=o.pH,$=n(Tf,jd(1),e.a),v=$;return{ja:t*wf(v),u:!1,jM:t*kf(v),kH:a/t,kM:t*jf(v),uR:3,pH:u,pJ:i,O:c}}}},LW=function(e){return Sb({a:e.a,m6:e.jT,m7:e.jT,fx:a0})},S7=!1,xb=function(e){return Sb({a:e.a,m6:e.jT,m7:Mc,fx:e.fx})},MW=function(e){switch(e.$){case 0:var r=e.a;return n(Pb,S7,{a:Io(r.a),ex:r.ex,jT:r.jT});case 1:var r=e.a;return n(_7,S7,{a:Io(r.a),jT:r.jT,tF:r.tF});case 2:var r=e.a;return Sb({a:Io(r.a),m6:r.m6,m7:r.m7,fx:r.fx});case 3:var r=e.a;return xb({a:Io(r.a),jT:r.jT,fx:r.fx});default:var r=e.a;return LW({a:Io(r.a),jT:r.jT})}},zW=function(e){var r=ha,a=function(u){switch(u.$){case 0:return!0;case 1:return!0;default:return!1}},t=n(G,MW,n(vt,4,n(Ar,n(ir,Wv,a),e))),o=function(u){return n(ce,r,jr(n(lt,u,t)))},c=n(G,TW,n(vt,4,n(Ar,a,e))),i=function(u){return n(ce,r,jr(n(lt,u,c)))};return tr(c)&&tr(t)?_b:ao(y7,i(0),i(1),i(2),i(3),o(0),o(1),o(2),o(3))},DW={$:5},HW=DW,AW={$:0},jb=AW,BW=function(e){return{$:4,a:e}},IW={$:2},EW=function(e){return Zc(e)?IW:BW(e)},FW=function(e){return{$:3,a:e}},VW={$:1},RW=function(e){return Zc(e)?VW:FW(e)},OW=function(e){switch(e.$){case 0:return jb;case 1:var r=e.a;return RW(r);case 2:var r=e.a;return EW(r);default:return HW}},x7=l(function(e,r){return l7({p0:k0(e.A),cg:D0(e.cg),cO:nn(e.cO),ew:e.ew,q$:p(Bo(Yr(e.bT.va)),Bo(Yr(e.bT.rW))),hG:r,B:SW(e.B),E:zW(e.E),G:OW(e.G),H:Io(e.H)})}),JW=l(function(e,r){return l7({p0:k0(e.fJ.A),cg:D0(e.cg),cO:nn(e.cO),ew:e.ew,q$:p(Bo(Yr(e.bT.va)),Bo(Yr(e.bT.rW))),hG:r,B:e.fJ.B,E:e.fJ.E,G:e.fJ.G,H:e.fJ.H})}),UW=.005,WW=l(function(e,r){return n(x7,{A:e.gA.A,cg:e.cg,cO:e.cO,ew:e.ew,B:e.gA.B,E:e.gA.E,bT:e.bT,G:e.gA.G,H:e.gA.H},r)}),qW=function(e){return nn(.01*e)},j7=function(e){return n($7,{i3:e.i3,p0:e.p0,cg:e.cg,cO:e.cO,q$:e.q$},f([{hG:e.hG,B:e.B,E:e.E,G:e.G,H:e.H}]))},GW=S(function(e,r,a){return ao(y7,e,r,a,ha,ha,ha,ha,ha)}),NW=function(e){var r=n(Pb,Cb(e.ub),{a:m7,ex:e.uz,jT:Ri(8e4)}),a=xb({a:p7,jT:Ri(2e4),fx:e.fx}),t=xb({a:H0,jT:Ri(15e3),fx:P7(e.fx)}),o=s(GW,r,a,t);return j7({i3:pb(e.ew),p0:e.p0,cg:e.cg,cO:e.cO,q$:e.q$,hG:e.hG,B:yb(15),E:o,G:jb,H:H0})},ZW=l(function(e,r){var a=e,t=r,o=Ra(t);return{pH:o*Ra(a),pJ:o*Oa(a),O:Oa(t)}}),YW=l(function(e,r){return NW({p0:k0(Fi(e.A)),cg:D0(e.cg),cO:qW(.5),ew:e.ew,q$:p(Bo(Yr(e.bT.va)),Bo(Yr(e.bT.rW))),hG:r,ub:!0,uz:n(ZW,wi(e.uy),wi(e.uA)),fx:a0})}),XW=function(e){return j7({i3:pb(e.ew),p0:e.p0,cg:e.cg,cO:e.cO,q$:e.q$,hG:e.hG,B:h7(P0(80)),E:_b,G:jb,H:H0})},QW=l(function(e,r){return XW({p0:k0(Fi(e.p0)),cg:D0(e.cg),cO:nn(e.cO),ew:e.ew,q$:p(Bo(Yr(e.bT.va)),Bo(Yr(e.bT.rW))),hG:r})}),KW=l(function(e,r){switch(r.$){case 0:var t=r.a;return n(YW,{A:t.p0,cg:e.cg,ew:e.bT.ew,bT:e.bT,uy:t.uy,uA:t.uA},e.hG);case 1:var t=r.a;return n(QW,{p0:t.p0,cg:e.cg,cO:UW,ew:e.bT.ew,bT:e.bT},e.hG);case 2:var t=r.a;return n(x7,{A:Ku(t.p0),cg:e.cg,cO:t.cO,ew:e.bT.ew,B:t.B,E:X(t.E,e.pu),bT:e.bT,G:t.G,H:t.H},e.hG);case 3:var t=r.a,a=t.gA;return n(WW,{cg:e.cg,cO:t.cO,ew:e.bT.ew,gA:M(a,{E:X(a.E,e.pu)}),bT:e.bT},e.hG);default:var t=r.a;return n(JW,{fJ:t.fJ,cg:e.cg,cO:t.cO,ew:e.bT.ew,bT:e.bT},e.hG)}}),eq=l(function(e,r){var a=FJ(r),t=n(zJ,{nQ:e.nQ,dT:e.dT},r);return n(zm,Uo,n(KW,{cg:e.cg,hG:t,bT:e.bT,pu:a},e.nr))}),rq=function(e){return{$:0,a:e}},aq=function(e){return rq(e)},nq=l(function(e,r){return sV(n(eq,{cg:r.cg,nr:aq({p0:n(ql,a8(r.tp).p0,r.dd),uy:gt(225),uA:gt(315)}),nQ:e.nQ,dT:He,bT:q6(e)},d8(f([n(vV,e,r)]))))}),tq=S(function(e,r,a){return n(O,P,f([Tm(r),n(O,f([bt(M6),I(f([or(Ct),ye(Ne(100)),Ce(Ne(100)),n(z,"touch-action","none")]))]),f([n(tc,Uo,n(nq,e,a))]))]))}),oq=oA({lx:P,aE:S(function(e,r,a){return P}),bH:iA,b1:ZA,aK:eB,bk:AI,bl:XE,cu:NF,aC:KF,bt:tq});Zg({TrixelEditor:{Main:{init:oq(n(H,function(e){return ae({g:e})},n(j,"inputs",n(H,function(e){return n(H,function(r){return n(H,function(a){return n(H,function(t){return n(H,function(o){return n(H,function(c){return n(H,function(i){return n(H,function(u){return n(H,function($){return n(H,function(v){return n(H,function(d){return n(H,function(b){return n(H,function(h){return n(H,function(g){return n(H,function(y){return n(H,function(_){return n(H,function(x){return n(H,function(T){return n(H,function(L){return n(H,function(B){return ae({dC:B,eu:L,ev:T,ew:x,hB:_,eJ:y,rx:g,hW:h,kv:b,tn:d,gw:v,tq:$,tu:u,tB:i,tL:c,bT:o,fk:t,iF:a,ea:r,fB:e})},n(j,"boundingClientRects",pr(n(H,function(B){return n(H,function(R){return n(H,function(V){return ae({rh:V,rF:R,t7:B})},n(j,"elements",pr(n(H,function(V){return n(H,function(W){return ae({lV:W,bI:V})},n(j,"boundingClientRect",n(H,function(W){return n(H,function(Y){return n(H,function(oe){return n(H,function($e){return ae({bB:$e,bJ:oe,bQ:Y,bW:W})},n(j,"bottom",q))},n(j,"left",q))},n(j,"right",q))},n(j,"top",q))))},n(j,"id",ke)))))},n(j,"frameId",ke))},n(j,"scroll",n(H,function(B){return n(H,function(R){return n(H,function(V){return n(H,function(W){return n(H,function(Y){return n(H,function(oe){return ae({mc:oe,md:Y,bJ:W,bW:V,u5:R,pB:B})},n(j,"contentHeight",q))},n(j,"contentWidth",q))},n(j,"left",q))},n(j,"top",q))},n(j,"viewportHeight",q))},n(j,"viewportWidth",q)))))))},n(j,"darkModeIsOn",ie))},n(j,"deviceOrientation",On(f([ci(w),n(Ye,D,n(H,function(T){return n(H,function(L){return n(H,function(B){return ae({aT:B,p6:L,rJ:T})},n(j,"alpha",q))},n(j,"beta",q))},n(j,"gamma",q)))]))))},n(j,"devicePixelRatio",q))},n(j,"dt",q))},n(j,"focusedElementIsContentEditable",ie))},n(j,"focusedElementIsTextInput",ie))},n(j,"keyboard",n(H,function(h){return n(H,function(g){return n(H,function(y){return n(H,function(_){return n(H,function(x){return n(H,function(T){return n(H,function(L){return n(H,function(B){return n(H,function(R){return n(H,function(V){return ae({i2:V,jr:R,jz:B,q6:L,bJ:T,j9:x,tH:_,bQ:y,kY:g,lp:h})},n(j,"alt",ie))},n(j,"ctrl",ie))},n(j,"down",ie))},n(j,"downs",pr(ke)))},n(j,"left",ie))},n(j,"meta",ie))},n(j,"pressedKeys",pr(ke)))},n(j,"right",ie))},n(j,"shift",ie))},n(j,"up",ie))))},n(j,"operatingSystem",ke))},n(j,"pageId",ke))},n(j,"pageScroll",n(H,function(v){return n(H,function(d){return n(H,function(b){return n(H,function(h){return n(H,function(g){return n(H,function(y){return ae({mc:y,md:g,bJ:h,bW:b,u5:d,pB:v})},n(j,"contentHeight",q))},n(j,"contentWidth",q))},n(j,"left",q))},n(j,"top",q))},n(j,"viewportHeight",q))},n(j,"viewportWidth",q))))},n(j,"paneBoundingBoxes",pr(n(H,function($){return n(H,function(v){return n(H,function(d){return n(H,function(b){return n(H,function(h){return ae({rW:h,bJ:b,tr:d,bW:v,va:$})},n(j,"height",q))},n(j,"left",q))},n(j,"paneId",ke))},n(j,"top",q))},n(j,"width",q)))))},n(j,"persisted",pr(n(H,function(u){return n(H,function($){return ae(p(u,$))},n(Br,1,ke))},n(Br,0,ke)))))},n(j,"pointer",n(H,function(i){return n(H,function(u){return n(H,function($){return n(H,function(v){return n(H,function(d){return n(H,function(b){return n(H,function(h){return n(H,function(g){return n(H,function(y){return n(H,function(_){return n(H,function(x){return n(H,function(T){return ae({q2:T,jz:x,hC:_,hD:y,rg:g,sg:h,sS:b,tZ:d,t$:v,lp:$,pH:u,pJ:i})},n(j,"doubleClick",ie))},n(j,"down",ie))},n(j,"dx",q))},n(j,"dy",q))},n(j,"elementIdsForLastDown",pr(ke)))},n(j,"isDown",ie))},n(j,"move",ie))},n(j,"rightDown",ie))},n(j,"rightUp",ie))},n(j,"up",ie))},n(j,"x",q))},n(j,"y",q))))},n(j,"rawPointer",n(H,function(c){return n(H,function(i){return n(H,function(u){return n(H,function($){return n(H,function(v){return n(H,function(d){return n(H,function(b){return n(H,function(h){return n(H,function(g){return n(H,function(y){return n(H,function(_){return n(H,function(x){return ae({q2:x,jz:_,hC:y,hD:g,rg:h,sg:b,sS:d,tZ:v,t$:$,lp:u,pH:i,pJ:c})},n(j,"doubleClick",ie))},n(j,"down",ie))},n(j,"dx",q))},n(j,"dy",q))},n(j,"elementIdsForLastDown",pr(ke)))},n(j,"isDown",ie))},n(j,"move",ie))},n(j,"rightDown",ie))},n(j,"rightUp",ie))},n(j,"up",ie))},n(j,"x",q))},n(j,"y",q))))},n(j,"screen",n(H,function(o){return n(H,function(c){return ae({rW:c,va:o})},n(j,"height",q))},n(j,"width",q))))},n(j,"screenOrientationAngle",q))},n(j,"searchParamsFromUrl",On(f([ci(w),n(Ye,D,pr(n(H,function(a){return n(H,function(t){return ae(p(a,t))},n(Br,1,ke))},n(Br,0,ke))))]))))},n(j,"touches",pr(n(H,function(r){return n(H,function(a){return n(H,function(t){return ae({bI:t,pH:a,pJ:r})},n(j,"id",Gr))},n(j,"x",q))},n(j,"y",q)))))},n(j,"wheel",n(H,function(e){return n(H,function(r){return n(H,function(a){return n(H,function(t){return n(H,function(o){return ae({mk:o,ml:t,ms:a,kI:r,io:e})},n(j,"deltaX",q))},n(j,"deltaY",q))},n(j,"elementIdsForLastWheel",pr(ke)))},n(j,"pinchDeltaForChrome",q))},n(j,"pinchScaleForSafari",On(f([ci(w),n(Ye,D,q)])))))))))(0)}}})})(this);
