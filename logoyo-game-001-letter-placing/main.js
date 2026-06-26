"use strict";(()=>{var R={parse(e,t){let o;try{o=JSON.parse(t)}catch(r){const n=r;return{tag:"DecoderError",error:{tag:"custom",message:`${n.name}: ${n.message}`,path:[]}}}return e.decoder(o)},stringify(e,t,o){return JSON.stringify(e.encoder(t),null,o)??"null"}};function _(e){return e}var B={decoder:e=>({tag:"Valid",value:e}),encoder:_},O={decoder:e=>typeof e=="boolean"?{tag:"Valid",value:e}:{tag:"DecoderError",error:{tag:"boolean",got:e,path:[]}},encoder:_},M={decoder:e=>typeof e=="number"?{tag:"Valid",value:e}:{tag:"DecoderError",error:{tag:"number",got:e,path:[]}},encoder:_},w={decoder:e=>typeof e=="string"?{tag:"Valid",value:e}:{tag:"DecoderError",error:{tag:"string",got:e,path:[]}},encoder:_};function U(e){return{decoder:t=>e.includes(t)?{tag:"Valid",value:t}:{tag:"DecoderError",error:{tag:"unknown primitiveUnion variant",knownVariants:e,got:t,path:[]}},encoder:_}}function Ke(e){return Array.isArray(e)?{tag:"Valid",value:e}:{tag:"DecoderError",error:{tag:"array",got:e,path:[]}}}function Je(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)?{tag:"Valid",value:e}:{tag:"DecoderError",error:{tag:"object",got:e,path:[]}}}function pe(e){return{decoder:t=>{const o=Ke(t);if(o.tag==="DecoderError")return o;const r=o.value,n=[];for(let a=0;a<r.length;a++){const i=e.decoder(r[a]);switch(i.tag){case"DecoderError":return{tag:"DecoderError",error:{...i.error,path:[a,...i.error.path]}};case"Valid":n.push(i.value);break}}return{tag:"Valid",value:n}},encoder:t=>{const o=[];for(const r of t)o.push(e.encoder(r));return o}}}function X(e,{allowExtraFields:t=!0}={}){return{decoder:o=>{const r=Je(o);if(r.tag==="DecoderError")return r;const n=r.value,a=new Set,i={};for(const[s,l]of Object.entries(e)){if(s==="__proto__")continue;const d="codec"in l?l:{codec:l},{codec:{decoder:u},renameFrom:f=s,optional:m=!1}=d;if(f==="__proto__")continue;if(a.add(f),!(f in n)){if(!m)return{tag:"DecoderError",error:{tag:"missing field",field:f,got:n,path:[]}};continue}const h=u(n[f]);switch(h.tag){case"DecoderError":return{tag:"DecoderError",error:{...h.error,path:[f,...h.error.path]}};case"Valid":i[s]=h.value;break}}if(!t){const s=Object.keys(n).filter(l=>!a.has(l));if(s.length>0)return{tag:"DecoderError",error:{tag:"exact fields",knownFields:Array.from(a),got:s,path:[]}}}return{tag:"Valid",value:i}},encoder:o=>{const r={};for(const[n,a]of Object.entries(e)){if(n==="__proto__")continue;const i="codec"in a?a:{codec:a},{codec:{encoder:s},renameFrom:l=n,optional:d=!1}=i;if(l==="__proto__"||d&&!(n in o))continue;const u=o[n];r[l]=s(u)}return r}}}function ze(e,t){return{codec:e,...t}}function $(e,t,{allowExtraFields:o=!0}={}){if(e==="__proto__")throw new Error("taggedUnion: decoded common field cannot be __proto__");const r=new Map,n=new Map;let a;for(const[s,l]of t.entries()){const d=l[e],{renameFrom:u=e}=d;if(a===void 0)a=u;else if(a!==u)throw new Error(`taggedUnion: Variant at index ${s}: Key ${JSON.stringify(e)}: Got a different encoded field name (${JSON.stringify(u)}) than before (${JSON.stringify(a)}).`);const f=X(l,{allowExtraFields:o});r.set(d.tag.encoded,f.decoder),n.set(d.tag.decoded,f.encoder)}if(typeof a!="string")throw new Error(`taggedUnion: Got unusable encoded common field: ${H(a)}`);const i=a;return{decoder:s=>{const l=X({[i]:B}).decoder(s);if(l.tag==="DecoderError")return l;const d=l.value[i],u=r.get(d);return u===void 0?{tag:"DecoderError",error:{tag:"unknown taggedUnion tag",knownTags:Array.from(r.keys()),got:d,path:[i]}}:u(s)},encoder:s=>{const l=s[e],d=n.get(l);if(d===void 0)throw new Error(`taggedUnion: Unexpectedly found no encoder for decoded variant name: ${JSON.stringify(l)} at key ${JSON.stringify(e)}`);return d(s)}}}function E(e,t={}){const o="renameTagFrom"in t?t.renameTagFrom:e;return{codec:{decoder:r=>r===o?{tag:"Valid",value:e}:{tag:"DecoderError",error:{tag:"wrong tag",expected:o,got:r,path:[]}},encoder:()=>o},renameFrom:t.renameFieldFrom,tag:{decoded:e,encoded:o}}}function fe(e,t){return{decoder:o=>{const r=e.decoder(o);switch(r.tag){case"DecoderError":return r;case"Valid":return t.decoder(r.value)}},encoder:o=>e.encoder(t.encoder(o))}}function Ye(e,t){const o=e.path.map(a=>`[${JSON.stringify(a)}]`).join(""),r=qe(e,t),n=e.orExpected===void 0?"":`
Or expected: ${e.orExpected}`;return`At root${o}:
${r}${n}`}function qe(e,t){const o=a=>{const i=H(a,t);return t?.sensitive===!0?`${i}
(Actual values are hidden in sensitive mode.)`:i},r=a=>a.replace(/^\[|\s*\]$/g,""),n=a=>a.length===0?" (none)":r(H(a,{maxLength:1/0,maxArrayChildren:1/0,indent:t?.indent}));switch(e.tag){case"boolean":case"number":case"bigint":case"string":return`Expected a ${e.tag}
Got: ${o(e.got)}`;case"array":case"object":return`Expected an ${e.tag}
Got: ${o(e.got)}`;case"unknown multi type":return`Expected one of these types: ${e.knownTypes.length===0?"never":e.knownTypes.join(", ")}
Got: ${o(e.got)}`;case"unknown taggedUnion tag":return`Expected one of these tags:${n(e.knownTags)}
Got: ${o(e.got)}`;case"unknown primitiveUnion variant":return`Expected one of these variants:${n(e.knownVariants)}
Got: ${o(e.got)}`;case"missing field":return`Expected an object with a field called: ${JSON.stringify(e.field)}
Got: ${o(e.got)}`;case"wrong tag":return`Expected this string: ${JSON.stringify(e.expected)}
Got: ${o(e.got)}`;case"exact fields":return`Expected only these fields:${n(e.knownFields)}
Found extra fields:${r(o(e.got))}`;case"tuple size":return`Expected ${e.expected} items
Got: ${e.got}`;case"custom":return"got"in e?`${e.message}
Got: ${o(e.got)}`:e.message}}function H(e,{depth:t=0,indent:o="  ",maxArrayChildren:r=5,maxObjectChildren:n=5,maxLength:a=100,sensitive:i=!1}={}){return Q(e,{depth:t,maxArrayChildren:r,maxObjectChildren:n,maxLength:a,indent:o,sensitive:i},0,[])}function Q(e,t,o,r){const{indent:n,maxLength:a,sensitive:i}=t,s=typeof e,l=Object.prototype.toString.call(e).replace(/^\[object\s+(.+)\]$/,"$1");try{if(e==null||s==="number"||s==="bigint"||s==="boolean"||s==="symbol"||l==="RegExp")return i?l.toLowerCase():W(String(e)+(s==="bigint"?"n":""),a);if(s==="string")return i?s:W(JSON.stringify(e),a);if(typeof e=="function")return`function ${W(JSON.stringify(e.name),a)}`;if(Array.isArray(e)){const d=e;if(d.length===0)return"[]";if(r.includes(d))return`circular ${l}(${d.length})`;if(t.depth<o)return`${l}(${d.length})`;const u=d.length-1,f=[],m=Math.min(t.maxArrayChildren-1,u);for(let h=0;h<=m;h++){const y=h in d?Q(d[h],t,o+1,[...r,d]):"<empty>";f.push(y)}return m<u&&f.push(`(${u-m} more)`),`[
${n.repeat(o+1)}${f.join(`,
${n.repeat(o+1)}`)}
${n.repeat(o)}]`}if(l==="Object"){const d=e,u=Object.keys(d),{name:f}=d.constructor,m=f==="Object"?"":`${f} `;if(u.length===0)return`${m}{}`;if(r.includes(d))return`circular ${f}(${u.length})`;if(t.depth<o)return`${f}(${u.length})`;const h=Math.max(0,u.length-t.maxObjectChildren),y=u.slice(0,t.maxObjectChildren).map(v=>{const C=W(JSON.stringify(v),a),S=Q(d[v],t,o+1,[...r,d]),L=S.includes(`
`)||C.length+S.length+2<=a?" ":`
${n.repeat(o+2)}`;return`${C}:${L}${S}`}).concat(h>0?`(${h} more)`:[]);return`${m}{
${n.repeat(o+1)}${y.join(`,
${n.repeat(o+1)}`)}
${n.repeat(o)}}`}return l}catch{return l}}function W(e,t){const o=Math.floor(t/2);return e.length<=t?e:`${e.slice(0,o)}\u2026${e.slice(-o)}`}function k(e){return e.toString().padStart(2,"0")}function Xe(e){return[k(e.getFullYear()),k(e.getMonth()+1),k(e.getDate())].join("-")}function Z(e){return[k(e.getHours()),k(e.getMinutes()),k(e.getSeconds())].join(":")}async function Qe(e){return new Promise((t,o)=>{const[r,n]=e.init;let a=r;const i=[];let s=!1;const l=f=>{if(s)return;const m=i.length>0;if(i.push(f),!m){for(const h of i){const[y,v]=e.update(h,a);a=y,d(v)}i.length=0}},d=f=>{for(const m of f)if(e.runCmd(m,u,l,h=>{f.length=0,s=!0,t(h)},h=>{f.length=0,s=!0,o(h)}),s)break},u=e.initMutable(l,f=>{s=!0,t(f)},f=>{s=!0,o(f)});d(n)})}function ee(){return w}var te=ee(),N=U(["debug","standard","optimize"]),A=U(["TopLeft","TopRight","BottomLeft","BottomRight"]),uo=ee(),go=ee();async function Ze(e){return(await Promise.allSettled(Array.from(document.styleSheets,o=>et(e,o)))).some(o=>o.status==="fulfilled"&&o.value)}async function et(e,t){if(t.href===null)return!1;const o=he(t.href);if(o===void 0||o.host!==window.location.host)return!1;const r=await fetch(o,{cache:"reload"});if(!r.ok)return!1;const n=await r.text();oe()&&/@import\b/i.test(n)&&console.warn("elm-watch: In Firefox, @import:ed CSS files are not hot reloaded due to over eager caching by Firefox. Style sheet:",o.href);const a=oe()?[]:Ee(o,t);await Promise.allSettled(a.map(s=>fetch(s,{cache:"reload"})));const i=await tt(o,n);return i===void 0?!1:F(e,t,i)}async function tt(e,t){return new Promise(o=>{const r=document.createElement("style");r.media="print",r.textContent=t;const n=document.createElement("base");n.href=e.href,r.onerror=r.onload=()=>{o(r.sheet??void 0),n.remove(),r.remove()},document.head.prepend(n,r)})}function he(e,t){try{return new URL(e,t)}catch{return}}function Ee(e,t){return Array.from(t.cssRules).flatMap(o=>{if(o instanceof CSSImportRule&&o.styleSheet!==null){const r=he(o.href,e);if(r!==void 0&&r.host===e.host)return[r,...Ee(r,o.styleSheet)]}return[]})}function F(e,t,o){let r=!1;const n=Math.min(t.cssRules.length,o.cssRules.length);let a=0;for(;a<n;a++){const i=t.cssRules[a],s=o.cssRules[a];if(i instanceof CSSStyleRule&&s instanceof CSSStyleRule){i.selectorText!==s.selectorText&&(i.selectorText=s.selectorText,r=!0);let l=e.get(i);l===void 0&&(l=i.style.cssText,e.set(i,l)),l!==s.style.cssText?(t.deleteRule(a),t.insertRule(s.cssText,a),e.set(t.cssRules[a],s.style.cssText),r=!0):F(e,i,s)&&(r=!0,i.selectorText=i.selectorText)}else i instanceof CSSImportRule&&s instanceof CSSImportRule&&i.cssText===s.cssText&&!oe()?(i.styleSheet!==null&&s.styleSheet!==null?F(e,i.styleSheet,s.styleSheet):!(i.styleSheet===null&&s.styleSheet===null))&&(r=!0,i.media=i.media):i instanceof CSSConditionRule&&s instanceof CSSConditionRule&&i.conditionText===s.conditionText||i instanceof CSSLayerBlockRule&&s instanceof CSSLayerBlockRule&&i.name===s.name||i instanceof CSSPageRule&&s instanceof CSSPageRule&&i.selectorText===s.selectorText?F(e,i,s)&&(r=!0):i.cssText!==s.cssText&&(t.deleteRule(a),t.insertRule(s.cssText,a),r=!0)}for(;a<t.cssRules.length;)t.deleteRule(a),r=!0;for(;a<o.cssRules.length;a++){const i=o.cssRules[a];t.insertRule(i.cssText,a),r=!0}return r}function oe(){return typeof window.scrollMaxX=="number"}function ot(e){return fe(pe(e),{decoder:t=>rt(t)?{tag:"Valid",value:t}:{tag:"DecoderError",error:{tag:"custom",message:"Expected a non-empty array",got:t,path:[]}},encoder:t=>t})}function rt(e){return e.length>=1}var Te=fe(M,{decoder:e=>Number.isInteger(e)&&e>=0?{tag:"Valid",value:e}:{tag:"DecoderError",error:{tag:"custom",path:[],message:"Expected a non-negative integer",got:e}},encoder:e=>e}),nt=$("tag",[{tag:E("EnvNotSet")},{tag:E("InvalidFilePath"),message:w},{tag:E("CommandFailed"),message:w}]),at=$("tag",[{tag:E("FileOnly"),file:te},{tag:E("FileWithLineAndColumn"),file:te,line:M,column:M},{tag:E("Target"),targetName:w}]),it=X({title:w,location:ze(at,{optional:!0}),htmlContent:w}),st=$("tag",[{tag:E("AlreadyUpToDate"),compilationMode:N,browserUiPosition:A},{tag:E("Busy"),compilationMode:N,browserUiPosition:A},{tag:E("CompileError"),compilationMode:N,browserUiPosition:A,openErrorOverlay:O,errors:pe(it),foregroundColor:w,backgroundColor:w},{tag:E("ElmJsonError"),error:w},{tag:E("ClientError"),message:w}]),be={code:w,elmCompiledTimestamp:M,compilationMode:N,browserUiPosition:A},ct=$("tag",[{tag:E("SuccessfullyCompiled"),...be}]),lt=$("tag",[{tag:E("FocusedTabAcknowledged")},{tag:E("OpenEditorFailed"),error:nt},{tag:E("StaticFilesChanged"),changedFileUrlPaths:ot(w)},{tag:E("StaticFilesMayHaveChangedWhileDisconnected")},{tag:E("StatusChanged"),status:st},{tag:E("SuccessfullyCompiled"),...be},{tag:E("SuccessfullyCompiledButRecordFieldsChanged")}]),dt=$("tag",[{tag:E("ChangedCompilationMode"),compilationMode:N},{tag:E("ChangedBrowserUiPosition"),browserUiPosition:A},{tag:E("ChangedOpenErrorOverlay"),openErrorOverlay:O},{tag:E("FocusedTab")},{tag:E("PressedOpenEditor"),file:te,line:Te,column:Te}]);function ut(e){const t=w.decoder(e);if(t.tag==="DecoderError")return t;const o=t.value;if(o.startsWith("//")){const r=o.indexOf(`
`),n=r===-1?o.length:r,a=o.slice(2,n),i=R.parse(ct,a);switch(i.tag){case"DecoderError":return i;case"Valid":return{tag:"Valid",value:{...i.value,code:o}}}}else return R.parse(lt,o)}var b=globalThis,G=b.window!==void 0,re="__elmWatchReloadMessage",ye="__elmWatchReloadTarget__",gt={MOCKED_TIMINGS:!1,WEBSOCKET_TIMEOUT:1e3,ON_RENDER:()=>{},ON_REACHED_IDLE_STATE:()=>{},CHANGED_CSS:new Date(0),CHANGED_FILE_URL_PATHS:{timestamp:new Date(0),changed:new Set},ORIGINAL_STYLES:new WeakMap,RELOAD_STATUSES:new Map,RELOAD_PAGE:e=>{if(e!==void 0)try{b.sessionStorage.setItem(re,e)}catch{}typeof b.ELM_WATCH_FULL_RELOAD=="function"?b.ELM_WATCH_FULL_RELOAD():G?b.location.reload():(e!==void 0&&console.info(e),console.error(`elm-watch: A full reload or restart of the program running your Elm code is needed (${e===void 0?"because a hot reload was not possible":"see above"}). In a web browser page, I would have reloaded the page. You need to do this manually, or define a \`globalThis.ELM_WATCH_FULL_RELOAD\` function.`))},TARGET_DATA:new Map,SOME_TARGET_IS_PROXY:!1,IS_REGISTERING:!0,REGISTER:()=>{},HOT_RELOAD:()=>{},SHOULD_SKIP_INIT_CMDS:()=>!1,KILL_MATCHING:()=>Promise.resolve(),DISCONNECT:()=>{},LOG_DEBUG:console.debug},{__ELM_WATCH:p}=b;(typeof p!="object"||p===null)&&(p={},Object.defineProperty(b,"__ELM_WATCH",{value:p}));for(const[e,t]of Object.entries(gt))p[e]===void 0&&(p[e]=t);var ve="2.0.0-beta.13",mt="8d1dd2a8-21f2-474f-b277-06c3ecf07ea2",T="LogoyoGame_001_LetterPlacing",ne=+"1782439507010",I="proxy",ae="BottomLeft",ie="8000",j="elm-watch",pt=!1,ft="elm-watch:changed-file-url-paths",we="BROWSER_UI_MOVED_EVENT",Ce="CLOSE_ALL_ERROR_OVERLAYS_EVENT",Se=10,ht=2e3;p.SOME_TARGET_IS_PROXY||=I==="proxy",p.IS_REGISTERING=!0;var x=Symbol("This value is supposed to only be obtained via `Status`.");function Et(...e){pt&&p.LOG_DEBUG(...e)}function Re(e){const t=A.decoder(e);switch(t.tag){case"DecoderError":return ae;case"Valid":return t.value}}function Tt(){const e=document.firstChild;e instanceof Comment&&e.data.trimStart().startsWith("elm-watch debug information:")&&e.remove()}function bt(){let e;try{const n=b.sessionStorage.getItem(re);n!==null&&(console.info(n),b.sessionStorage.removeItem(re));const a=ye+T,i=b.sessionStorage.getItem(a);if(i!==null){const s=Number(i);Number.isFinite(s)&&(e=s),b.sessionStorage.removeItem(a)}}catch{}const t=G?wt():void 0,o=t===void 0?ae:Re(t.container.dataset.position),r=()=>new Date;G&&Tt(),Qe({initMutable:Mt(r,t),init:_t(r(),o,e),update:(n,a)=>{const[i,s]=Lt(n,a),l=i!==a,d=a.status.tag!==i.status.tag&&i.status.tag==="WaitingForReload"&&i.elmCompiledTimestamp===i.elmCompiledTimestampBeforeReload,u=l?{...i,uiExpanded:d?!0:i.uiExpanded}:a,f=V(a.status),m=V(u.status),h=K(u.status.tag),y=h!==K(a.status.tag),v=Bt({statusType:h,statusTypeChanged:y,hasReceivedHotReload:u.elmCompiledTimestamp!==ne,uiRelatedUpdate:n.tag==="UiMsg",errorOverlayVisible:t!==void 0&&!t.overlay.hidden}),C=v===void 0||s.some(L=>L.tag==="Flash")?[]:[{tag:"Flash",flashType:v}],S=l?[...s,{tag:"UpdateGlobalStatus",reloadStatus:yt(u),elmCompiledTimestamp:u.elmCompiledTimestamp},u.status.tag===a.status.tag&&f?.openErrorOverlay===m?.openErrorOverlay?{tag:"NoCmd"}:{tag:"UpdateErrorOverlay",errors:m===void 0||!m.openErrorOverlay?new Map:m.errors,sendKey:Me(u.status)},...t!==void 0||u.status.tag!==a.status.tag?[{tag:"Render",model:u,manageFocus:n.tag==="UiMsg"}]:[],...C,a.browserUiPosition===u.browserUiPosition?{tag:"NoCmd"}:{tag:"SetBrowserUiPosition",browserUiPosition:u.browserUiPosition},d?{tag:"TriggerReachedIdleState",reason:"ReloadTrouble"}:{tag:"NoCmd"}]:[...s,...C];return Et(`${n.tag} (${T})`,n,u,S),[u,S]},runCmd:kt(r,t)}).catch(n=>{console.error("elm-watch: Unexpectedly exited with error:",n)})}function V(e){return"errorOverlay"in e?e.errorOverlay:void 0}function yt(e){switch(e.status.tag){case"Busy":case"Connecting":return{tag:"MightWantToReload"};case"CompileError":case"ElmJsonError":case"EvalError":case"Idle":case"SleepingBeforeReconnect":case"UnexpectedError":return{tag:"NoReloadWanted"};case"WaitingForReload":return e.elmCompiledTimestamp===e.elmCompiledTimestampBeforeReload?{tag:"NoReloadWanted"}:{tag:"ReloadRequested",reasons:e.status.reasons}}}function K(e){switch(e){case"Idle":return"Success";case"Busy":case"Connecting":case"SleepingBeforeReconnect":case"WaitingForReload":return"Waiting";case"CompileError":case"ElmJsonError":case"EvalError":case"UnexpectedError":return"Error"}}function Me(e){switch(e.tag){case"CompileError":case"Idle":return e.sendKey;case"Busy":return x;case"Connecting":case"SleepingBeforeReconnect":case"WaitingForReload":case"ElmJsonError":case"EvalError":case"UnexpectedError":return}}function vt(){const e=document.getElementById(j);if(e!==null)return e;const t=g(typeof HTMLDialogElement=="function"?HTMLDialogElement:HTMLDivElement,{id:j});t.style.all="initial";const o=g(HTMLDivElement,{});return o.style.all="initial",o.style.position="fixed",o.style.zIndex="2147483647",o.popover="manual",o.attachShadow({mode:"open"}).append(g(HTMLStyleElement,{},Wt)),t.append(o),document.documentElement.append(t),t}function wt(){const e=vt(),t=e.firstElementChild;if(t===null)throw new Error(`elm-watch: Cannot set up hot reload, because an element with ID ${j} exists, but \`.firstElementChild\` is null!`);const{shadowRoot:o}=t;if(o===null)throw new Error(`elm-watch: Cannot set up hot reload, because an element with ID ${j} exists, but \`.shadowRoot\` is null!`);let r=o.querySelector(`.${c.overlay}`);r===null&&(r=g(HTMLDivElement,{className:c.overlay,attrs:{"data-test-id":"Overlay"},hidden:!0}),o.append(r));let n=o.querySelector(`.${c.overlayCloseButton}`);if(n===null){const l=()=>{o.dispatchEvent(new CustomEvent(Ce))};n=g(HTMLButtonElement,{className:c.overlayCloseButton,attrs:{"aria-label":"Close error overlay","data-test-id":"OverlayCloseButton"},onclick:l}),o.append(n);const d=r;b.addEventListener("keydown",u=>{d.hasChildNodes()&&u.key==="Escape"&&(u.preventDefault(),u.stopImmediatePropagation(),l())},!0)}let a=o.querySelector(`.${c.root}`);a===null&&(a=g(HTMLDivElement,{className:c.root}),o.append(a));const i=Ct(T);a.append(i);const s={container:e,containerInner:t,shadowRoot:o,overlay:r,overlayCloseButton:n,root:a,targetRoot:i};return _e(ae,s),s}function Ct(e){return g(HTMLDivElement,{className:c.targetRoot,attrs:{"data-target":e}})}function St(e){switch(e){case"TopLeft":return{top:"-1px",bottom:"auto",left:"-1px",right:"auto"};case"TopRight":return{top:"-1px",bottom:"auto",left:"auto",right:"-1px"};case"BottomLeft":return{top:"auto",bottom:"-1px",left:"-1px",right:"auto"};case"BottomRight":return{top:"auto",bottom:"-1px",left:"auto",right:"-1px"}}}function Rt(e){switch(e){case"TopLeft":return{top:"auto",bottom:"0",left:"auto",right:"0"};case"TopRight":return{top:"auto",bottom:"0",left:"0",right:"auto"};case"BottomLeft":return{top:"0",bottom:"auto",left:"auto",right:"0"};case"BottomRight":return{top:"0",bottom:"auto",left:"0",right:"auto"}}}function _e(e,t){if(!(t.targetRoot.previousElementSibling===null))return;t.container.dataset.position=e;for(const[n,a]of Object.entries(St(e)))t.containerInner.style.setProperty(n,a);const r=e==="BottomLeft"||e==="BottomRight";t.root.classList.toggle(c.rootBottomHalf,r),t.shadowRoot.dispatchEvent(new CustomEvent(we,{detail:e}))}function Le(e){return Oe("Elm",e)}function Oe(e,t){return Object.entries(t).flatMap(([o,r])=>o==="init"?[[e,t]]:Oe(`${e}.${o}`,r))}var Mt=(e,t)=>(o,r)=>{let n=[];const a={shouldSkipInitCmds:!0,removeListeners:()=>{for(const m of n)m()},webSocket:Ie(e,ne,o),webSocketTimeoutId:void 0};t!==void 0&&a.webSocket.addEventListener("open",()=>{n=[J(b,"focus",m=>{m instanceof CustomEvent&&m.detail!==T||o({tag:"FocusedTab"})}),J(b,"visibilitychange",()=>{document.visibilityState==="visible"&&o({tag:"PageVisibilityChangedToVisible",date:e()})}),J(t.shadowRoot,we,m=>{o({tag:"BrowserUiMoved",browserUiPosition:Re(m.detail)})}),J(t.shadowRoot,Ce,()=>{o({tag:"UiMsg",date:e(),msg:{tag:"ChangedOpenErrorOverlay",openErrorOverlay:!1}})})]},{once:!0}),p.RELOAD_STATUSES.set(T,{tag:"MightWantToReload"});const i=(m,h,y,v)=>{y.init=(...C)=>{const S=v(...C),L=m.get(h);return L===void 0?m.set(h,[S]):L.push(S),o({tag:"AppInit"}),S}},s=p.REGISTER;p.REGISTER=(m,h)=>{if(s(m,h),m!==T)return;if(p.IS_REGISTERING=!1,p.TARGET_DATA.has(T))throw new Error(`elm-watch: This target is already registered! Maybe a duplicate script is being loaded accidentally? Target: ${T}`);const y=new Map,v=Le(h);for(const[C,S]of v)i(y,C,S,S.init);p.TARGET_DATA.set(T,{originalFlattenedElmExports:new Map(v),initializedElmApps:y})};const l=p.HOT_RELOAD;p.HOT_RELOAD=(m,h)=>{if(l(m,h),m!==T)return;const y=p.TARGET_DATA.get(T);if(y===void 0)return;const v=[];for(const[C,S]of Le(h)){const L=y.originalFlattenedElmExports.get(C);L!==void 0&&i(y.initializedElmApps,C,L,S.init);const co=y.initializedElmApps.get(C)??[];for(const ue of co){const ge=S.init("__elmWatchReturnData");if(ue.__elmWatchProgramType!==ge.programType)v.push({tag:"ProgramTypeChanged",previousProgramType:ue.__elmWatchProgramType,newProgramType:ge.programType,moduleName:C});else try{const me=ue.__elmWatchHotReload(ge);for(const lo of me)v.push({...lo,moduleName:C})}catch(me){v.push({tag:"HotReloadCaughtError",caughtError:me,moduleName:C})}}}a.shouldSkipInitCmds=!1,v.length===0?o({tag:"EvalSucceeded",date:e()}):o({tag:"EvalNeedsReload",date:e(),reasons:v})};const d=p.SHOULD_SKIP_INIT_CMDS;p.SHOULD_SKIP_INIT_CMDS=m=>d(m)||m===T&&a.shouldSkipInitCmds;const u=p.KILL_MATCHING;p.KILL_MATCHING=m=>new Promise((h,y)=>{if(m.test(T)){const v=a.webSocket.readyState!==WebSocket.CLOSED;v&&(a.webSocket.addEventListener("close",()=>{u(m).then(h).catch(y)}),a.webSocket.close()),a.removeListeners(),a.webSocketTimeoutId!==void 0&&(clearTimeout(a.webSocketTimeoutId),a.webSocketTimeoutId=void 0),t?.targetRoot.remove(),r(void 0),v||u(m).then(h).catch(y)}else u(m).then(h).catch(y)});const f=p.DISCONNECT;return p.DISCONNECT=m=>{m.test(T)&&a.webSocket.readyState!==WebSocket.CLOSED?a.webSocket.close():f(m)},a};function J(e,t,o){return e.addEventListener(t,o),()=>{e.removeEventListener(t,o)}}function Ie(e,t,o){const[r,n]=b.location===void 0?["localhost","ws"]:[b.location.hostname===""?"localhost":b.location.hostname,b.location.protocol==="https:"?"wss":"ws"],a=new URL(/^\d+$/.test(ie)?`${n}://${r}:${ie}/elm-watch`:ie);a.searchParams.set("elmWatchVersion",ve),a.searchParams.set("webSocketToken",mt),a.searchParams.set("targetName",T),a.searchParams.set("elmCompiledTimestamp",t.toString());const i=new WebSocket(a);return i.addEventListener("open",()=>{o({tag:"WebSocketConnected",date:e()})}),i.addEventListener("close",()=>{o({tag:"WebSocketClosed",date:e()})}),i.addEventListener("error",()=>{o({tag:"WebSocketClosed",date:e()})}),i.addEventListener("message",s=>{o({tag:"WebSocketMessageReceived",date:e(),data:s.data})}),i}var _t=(e,t,o)=>{const r={status:{tag:"Connecting",date:e,attemptNumber:1},compilationMode:I,browserUiPosition:t,lastBrowserUiPositionChangeDate:void 0,elmCompiledTimestamp:ne,elmCompiledTimestampBeforeReload:o,uiExpanded:!1};return[r,[{tag:"Render",model:r,manageFocus:!1}]]};function Lt(e,t){switch(e.tag){case"AppInit":return[{...t},[]];case"BrowserUiMoved":return[{...t,browserUiPosition:e.browserUiPosition},[]];case"EvalErrored":return[{...t,status:{tag:"EvalError",date:e.date},uiExpanded:!0},[{tag:"TriggerReachedIdleState",reason:"EvalErrored"}]];case"EvalNeedsReload":return[{...t,status:{tag:"WaitingForReload",date:e.date,reasons:Array.from(new Set(e.reasons.map(ro)))}},[]];case"EvalSucceeded":return[{...t,status:{tag:"Idle",date:e.date,sendKey:x}},[{tag:"TriggerReachedIdleState",reason:"EvalSucceeded"}]];case"FocusedTab":return[t,[...K(t.status.tag)==="Error"?[{tag:"Flash",flashType:"error"}]:[],{tag:"SendMessage",message:{tag:"FocusedTab"},sendKey:x},{tag:"WebSocketTimeoutBegin"}]];case"PageVisibilityChangedToVisible":return se(t,e.date,{force:!0});case"ReloadAllCssDone":return[t,e.didChange?[{tag:"Flash",flashType:"success"}]:[]];case"SleepBeforeReconnectDone":return se(t,e.date,{force:!1});case"UiMsg":return Ot(e.date,e.msg,t);case"WebSocketClosed":if(t.status.tag==="SleepingBeforeReconnect")return[t,[]];{const o="attemptNumber"in t.status?t.status.attemptNumber+1:1;return[{...t,status:{tag:"SleepingBeforeReconnect",date:e.date,attemptNumber:o}},[{tag:"SleepBeforeReconnect",attemptNumber:o}]]}case"WebSocketConnected":return[{...t,status:{tag:"Busy",date:e.date,errorOverlay:void 0}},[]];case"WebSocketMessageReceived":{const o=xt(e.data);switch(o.tag){case"Success":return It(e.date,o.message,t);case"Error":return[{...t,status:{tag:"UnexpectedError",date:e.date,message:o.message},uiExpanded:!0},[]]}}}}function Ot(e,t,o){switch(t.tag){case"ChangedBrowserUiPosition":return[{...o,browserUiPosition:t.browserUiPosition,lastBrowserUiPositionChangeDate:e},[{tag:"SendMessage",message:{tag:"ChangedBrowserUiPosition",browserUiPosition:t.browserUiPosition},sendKey:t.sendKey}]];case"ChangedCompilationMode":return[{...o,status:{tag:"Busy",date:e,errorOverlay:V(o.status)},compilationMode:t.compilationMode},[{tag:"SendMessage",message:{tag:"ChangedCompilationMode",compilationMode:t.compilationMode},sendKey:t.sendKey}]];case"ChangedOpenErrorOverlay":return"errorOverlay"in o.status&&o.status.errorOverlay!==void 0?[{...o,status:{...o.status,errorOverlay:{...o.status.errorOverlay,openErrorOverlay:t.openErrorOverlay}},uiExpanded:!1},[{tag:"SendMessage",message:{tag:"ChangedOpenErrorOverlay",openErrorOverlay:t.openErrorOverlay},sendKey:o.status.tag==="Busy"?x:o.status.sendKey}]]:[o,[]];case"PressedChevron":return[{...o,uiExpanded:!o.uiExpanded},[]];case"PressedOpenEditor":return[o,[{tag:"SendMessage",message:{tag:"PressedOpenEditor",file:t.file,line:t.line,column:t.column},sendKey:t.sendKey}]];case"PressedReconnectNow":return se(o,e,{force:!0})}}function It(e,t,o){switch(t.tag){case"FocusedTabAcknowledged":return[o,[{tag:"WebSocketTimeoutClear"}]];case"OpenEditorFailed":return[o.status.tag==="CompileError"?{...o,status:{...o.status,openEditorError:t.error},uiExpanded:!0}:o,[{tag:"TriggerReachedIdleState",reason:"OpenEditorFailed"}]];case"StaticFilesChanged":return[{...o,status:{...o.status,date:e}},[{tag:"HandleStaticFilesChanged",changedFileUrlPaths:t.changedFileUrlPaths}]];case"StaticFilesMayHaveChangedWhileDisconnected":return[{...o,status:{...o.status,date:e}},[{tag:"HandleStaticFilesChanged",changedFileUrlPaths:"AnyFileMayHaveChanged"}]];case"StatusChanged":return $t(e,t.status,o);case"SuccessfullyCompiled":{const r=o.lastBrowserUiPositionChangeDate!==void 0&&e.getTime()-o.lastBrowserUiPositionChangeDate.getTime()<ht;return t.compilationMode!==I?[{...o,status:{tag:"WaitingForReload",date:e,reasons:I==="proxy"?[]:[`compilation mode changed from ${I} to ${t.compilationMode}.`]},compilationMode:t.compilationMode},[]]:[{...o,compilationMode:t.compilationMode,elmCompiledTimestamp:t.elmCompiledTimestamp,browserUiPosition:t.browserUiPosition,lastBrowserUiPositionChangeDate:void 0},[{tag:"Eval",code:t.code},r?{tag:"SetBrowserUiPosition",browserUiPosition:t.browserUiPosition}:{tag:"NoCmd"}]]}case"SuccessfullyCompiledButRecordFieldsChanged":return[{...o,status:{tag:"WaitingForReload",date:e,reasons:["record field mangling in optimize mode was different than last time."]}},[]]}}function $t(e,t,o){switch(t.tag){case"AlreadyUpToDate":return[{...o,status:{tag:"Idle",date:e,sendKey:x},compilationMode:t.compilationMode,browserUiPosition:t.browserUiPosition},[{tag:"TriggerReachedIdleState",reason:"AlreadyUpToDate"}]];case"Busy":return[{...o,status:{tag:"Busy",date:e,errorOverlay:V(o.status)},compilationMode:t.compilationMode,browserUiPosition:t.browserUiPosition},[]];case"ClientError":return[{...o,status:{tag:"UnexpectedError",date:e,message:t.message},uiExpanded:!0},[{tag:"TriggerReachedIdleState",reason:"ClientError"}]];case"CompileError":return[{...o,status:{tag:"CompileError",date:e,sendKey:x,errorOverlay:{errors:new Map(t.errors.map(r=>{const n={title:r.title,location:r.location,htmlContent:r.htmlContent,foregroundColor:t.foregroundColor,backgroundColor:t.backgroundColor};return[R.stringify(B,n),n]})),openErrorOverlay:t.openErrorOverlay},openEditorError:void 0},compilationMode:t.compilationMode,browserUiPosition:t.browserUiPosition},[{tag:"TriggerReachedIdleState",reason:"CompileError"}]];case"ElmJsonError":return[{...o,status:{tag:"ElmJsonError",date:e,error:t.error}},[{tag:"TriggerReachedIdleState",reason:"ElmJsonError"}]]}}function se(e,t,{force:o}){return e.status.tag==="SleepingBeforeReconnect"&&(t.getTime()-e.status.date.getTime()>=ce(e.status.attemptNumber)||o)?[{...e,status:{tag:"Connecting",date:t,attemptNumber:e.status.attemptNumber}},[{tag:"Reconnect",elmCompiledTimestamp:e.elmCompiledTimestamp}]]:[e,[]]}function ce(e){return Math.min(1e3+10*e**2,1e3*60)}function $e(e){return`${ce(e)/1e3} seconds`}var kt=(e,t)=>(o,r,n,a,i)=>{switch(o.tag){case"Eval":P(o.code).catch(s=>{Promise.reject(s),n({tag:"EvalErrored",date:e()})});return;case"Flash":t!==void 0&&Ht(t,o.flashType);return;case"HandleStaticFilesChanged":{const s=e();let l=!1;if(o.changedFileUrlPaths==="AnyFileMayHaveChanged")l=!0;else{s.getTime()-p.CHANGED_FILE_URL_PATHS.timestamp.getTime()>Se&&(p.CHANGED_FILE_URL_PATHS={timestamp:s,changed:new Set});const d=new Set;for(const u of o.changedFileUrlPaths)u.toLowerCase().endsWith(".css")?l=!0:p.CHANGED_FILE_URL_PATHS.changed.has(u)||d.add(u);if(d.size>0){for(const u of d)p.CHANGED_FILE_URL_PATHS.changed.add(u);b.dispatchEvent(new CustomEvent(ft,{detail:d}))}}l&&s.getTime()-p.CHANGED_CSS.getTime()>Se&&G&&(p.CHANGED_CSS=s,Ze(p.ORIGINAL_STYLES).then(d=>{n({tag:"ReloadAllCssDone",didChange:d})}).catch(i));return}case"NoCmd":return;case"Reconnect":r.webSocket=Ie(e,o.elmCompiledTimestamp,n);return;case"Render":{const{model:s}=o,l={version:ve,webSocketUrl:new URL(r.webSocket.url),targetName:T,originalCompilationMode:I,debugModeToggled:Ut()};if(t===void 0){const d=K(s.status.tag)==="Error",u=typeof b.WorkerGlobalScope<"u"&&!d,m=console[d||!u?"error":"info"];m(Pt(s,l))}else{const{targetRoot:d}=t;Dt(e,d,n,s,l,o.manageFocus),typeof t.container.close=="function"&&typeof t.container.showModal=="function"&&t.container.isConnected&&(t.overlay.hidden?t.container.close():t.container.showModal()),typeof t.containerInner.hidePopover=="function"&&typeof t.containerInner.showPopover=="function"&&t.containerInner.isConnected&&(t.containerInner.hidePopover(),t.containerInner.showPopover())}return}case"SendMessage":{const s=R.stringify(dt,o.message);try{r.webSocket.send(s)}catch(l){console.error("elm-watch: Failed to send WebSocket message:",l)}return}case"SetBrowserUiPosition":t!==void 0&&_e(o.browserUiPosition,t);return;case"SleepBeforeReconnect":ke(r),setTimeout(()=>{(typeof document>"u"||document.visibilityState==="visible")&&n({tag:"SleepBeforeReconnectDone",date:e()})},ce(o.attemptNumber));return;case"TriggerReachedIdleState":ke(r),Promise.resolve().then(()=>{p.ON_REACHED_IDLE_STATE(o.reason)}).catch(i);return;case"UpdateErrorOverlay":t!==void 0&&ao(T,s=>{n({tag:"UiMsg",date:e(),msg:s})},o.sendKey,o.errors,t.overlay,t.overlayCloseButton);return;case"UpdateGlobalStatus":switch(p.RELOAD_STATUSES.set(T,o.reloadStatus),o.reloadStatus.tag){case"NoReloadWanted":case"MightWantToReload":break;case"ReloadRequested":try{b.sessionStorage.setItem(ye+T,o.elmCompiledTimestamp.toString())}catch{}}Nt();return;case"WebSocketTimeoutBegin":r.webSocketTimeoutId===void 0&&(r.webSocketTimeoutId=setTimeout(()=>{r.webSocketTimeoutId=void 0,r.webSocket.close(),n({tag:"WebSocketClosed",date:e()})},p.WEBSOCKET_TIMEOUT));return;case"WebSocketTimeoutClear":r.webSocketTimeoutId!==void 0&&(clearTimeout(r.webSocketTimeoutId),r.webSocketTimeoutId=void 0);return}};function ke(e){if(!e.shouldSkipInitCmds)return;const t=p.TARGET_DATA.get(T);if(t!==void 0)for(const o of t.initializedElmApps.values())for(const r of o)r.__elmWatchRunInitCmds();e.shouldSkipInitCmds=!1}async function Ae(e){const t=URL.createObjectURL(new Blob([e],{type:"text/javascript"}));await import(t),URL.revokeObjectURL(t)}async function At(e){await import(`data:text/javascript,${encodeURIComponent(e)}`)}var le=At;Ae("").then(()=>{le=Ae}).catch(()=>{});var P=async e=>{let t;try{t=new Function(e)}catch(o){try{await le(e)}catch(r){throw new Error(`Error when evaluated as a module:

${D(r)}

Error when evaluated as a script:

${D(o)}`)}[P,z]=[z,P];return}t()},z=async e=>{try{await le(e)}catch(t){try{new Function(e)()}catch(o){throw new Error(`Error when evaluated as a module:

${D(t)}

Error when evaluated as a script:

${D(o)}`)}[P,z]=[z,P]}};function xt(e){const t=ut(e);switch(t.tag){case"DecoderError":return{tag:"Error",message:`Failed to decode web socket message sent from the server:
${Ye(t.error)}`};case"Valid":return{tag:"Success",message:t.value}}}function Ut(){if(p.SOME_TARGET_IS_PROXY)return{tag:"Disabled",reason:eo};const e=p.TARGET_DATA.get(T),t=e===void 0?[]:Array.from(e.initializedElmApps.values()).flatMap(r=>r.map(n=>n.__elmWatchProgramType));if(t.length===0)return{tag:"Disabled",reason:to};const o=t.filter(r=>{switch(r){case"Platform.worker":case"Html":return!0;case"Browser.sandbox":case"Browser.element":case"Browser.document":case"Browser.application":return!1}});return o.length===t.length?{tag:"Disabled",reason:oo(new Set(o))}:{tag:"Enabled"}}function Nt(){let e=!1;const t=[];for(const[i,s]of p.RELOAD_STATUSES.entries())switch(s.tag){case"MightWantToReload":return;case"NoReloadWanted":break;case"ReloadRequested":e=!0,s.reasons.length>0&&t.push([i,s.reasons]);break}if(!e)return;const o=t[0],[r,n]=t.length===1&&o!==void 0&&o[1].length===1?[" ",`${o[1].join("")}
(target: ${o[0]})`]:[`:

`,t.map(([i,s])=>[i,...s.map(l=>`- ${l}`)].join(`
`)).join(`

`)],a=t.length===0?void 0:`elm-watch: I did a full page reload because${r}${n}`;p.RELOAD_STATUSES=new Map,p.RELOAD_PAGE(a)}function g(e,{attrs:t,style:o,localName:r,...n},...a){const i=document.createElement(r??e.name.replace(/^HTML(\w+)Element$/,"$1").replace("Anchor","a").replace("Paragraph","p").replace(/^([DOU])List$/,"$1l").toLowerCase());if(Object.assign(i,n),t!==void 0)for(const[s,l]of Object.entries(t))i.setAttribute(s,l);if(o!==void 0)for(const[s,l]of Object.entries(o))i.style[s]=l;for(const s of a)s!==void 0&&i.append(typeof s=="string"?document.createTextNode(s):s);return i}function Pt(e,t){const o=He(e);return`${o.icon} elm-watch: ${o.status} ${Z(e.status.date)} (${t.targetName})`}function Dt(e,t,o,r,n,a){t.replaceChildren(Ft(s=>{o({tag:"UiMsg",date:e(),msg:s})},r,n));const i=t.querySelector("button, [tabindex]");a&&i instanceof HTMLElement&&i.focus(),p.ON_RENDER(T)}var c={browserUiPositionButton:"browserUiPositionButton",browserUiPositionChooser:"browserUiPositionChooser",chevronButton:"chevronButton",compilationModeWithIcon:"compilationModeWithIcon",container:"container",debugModeIcon:"debugModeIcon",envNotSet:"envNotSet",errorLocationButton:"errorLocationButton",errorTitle:"errorTitle",expandedUiContainer:"expandedUiContainer",flash:"flash",overlay:"overlay",overlayCloseButton:"overlayCloseButton",root:"root",rootBottomHalf:"rootBottomHalf",shortStatusContainer:"shortStatusContainer",targetName:"targetName",targetRoot:"targetRoot"};function Bt({statusType:e,statusTypeChanged:t,hasReceivedHotReload:o,uiRelatedUpdate:r,errorOverlayVisible:n}){switch(e){case"Success":return t&&o?"success":void 0;case"Error":return n?t&&o?"error":void 0:r?void 0:"error";case"Waiting":return}}function Ht(e,t){for(const o of e.targetRoot.querySelectorAll(`.${c.flash}`))o.setAttribute("data-flash",t)}var xe="\u25B2",Ue="\u25BC",Wt=`
input,
button,
select,
textarea {
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  color: inherit;
  margin: 0;
}

fieldset {
  display: grid;
  gap: 0.25em;
  margin: 0;
  border: 1px solid var(--grey);
  padding: 0.25em 0.75em 0.5em;
}

fieldset:disabled {
  color: var(--grey);
}

p,
dd {
  margin: 0;
}

dl {
  display: grid;
  grid-template-columns: auto auto;
  gap: 0.25em 1em;
  margin: 0;
  white-space: nowrap;
}

dt {
  text-align: right;
  color: var(--grey);
}

time {
  display: inline-grid;
  overflow: hidden;
}

time::after {
  content: attr(data-format);
  visibility: hidden;
  height: 0;
}

.${c.overlay} {
  position: fixed;
  z-index: -2;
  inset: 0;
  overflow-y: auto;
  padding: 2ch 0;
  user-select: text;
}

.${c.overlayCloseButton} {
  position: fixed;
  z-index: -1;
  top: 0;
  right: 0;
  appearance: none;
  padding: 1em;
  border: none;
  border-radius: 0;
  background: none;
  cursor: pointer;
  font-size: 1.25em;
  filter: drop-shadow(0 0 0.125em var(--backgroundColor));
}

.${c.overlayCloseButton}::before,
.${c.overlayCloseButton}::after {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0.125em;
  height: 1em;
  background-color: var(--foregroundColor);
  transform: translate(-50%, -50%) rotate(45deg);
}

.${c.overlayCloseButton}::after {
  transform: translate(-50%, -50%) rotate(-45deg);
}

.${c.overlay},
.${c.overlay} pre {
  font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
}

.${c.overlay} details {
  --border-thickness: 0.125em;
  border-top: var(--border-thickness) solid;
  margin: 2ch 0;
}

.${c.overlay} summary {
  cursor: pointer;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2ch;
  word-break: break-word;
}

.${c.overlay} summary::-webkit-details-marker {
  display: none;
}

.${c.overlay} summary::marker {
  content: none;
}

.${c.overlay} summary > * {
  pointer-events: auto;
}

.${c.errorTitle} {
  display: inline-block;
  font-weight: bold;
  --padding: 1ch;
  padding: 0 var(--padding);
  transform: translate(calc(var(--padding) * -1), calc(-50% - var(--border-thickness) / 2));
}

.${c.errorTitle}::before {
  content: "${Ue}";
  display: inline-block;
  margin-right: 1ch;
  transform: translateY(-0.0625em);
}

details[open] > summary > .${c.errorTitle}::before {
  content: "${xe}";
}

.${c.errorLocationButton} {
  appearance: none;
  padding: 0;
  border: none;
  border-radius: 0;
  background: none;
  text-align: left;
  text-decoration: underline;
  cursor: pointer;
}

.${c.overlay} pre {
  margin: 0;
  padding: 2ch;
  overflow-x: auto;
}

.${c.root} {
  all: initial;
  --grey: #767676;
  display: flex;
  align-items: start;
  overflow: auto;
  max-height: 100vh;
  max-width: 100vw;
  color: black;
  font-family: system-ui;
}

.${c.rootBottomHalf} {
  align-items: end;
}

.${c.targetRoot} + .${c.targetRoot} {
  margin-left: -1px;
}

.${c.targetRoot}:only-of-type .${c.debugModeIcon},
.${c.targetRoot}:only-of-type .${c.targetName} {
  display: none;
}

.${c.container} {
  display: flex;
  flex-direction: column-reverse;
  background-color: white;
  border: 1px solid var(--grey);
}

.${c.rootBottomHalf} .${c.container} {
  flex-direction: column;
}

.${c.envNotSet} {
  display: grid;
  gap: 0.75em;
  margin: 2em 0;
}

.${c.envNotSet},
.${c.root} pre {
  border-left: 0.25em solid var(--grey);
  padding-left: 0.5em;
}

.${c.root} pre {
  margin: 0;
  white-space: pre-wrap;
}

.${c.expandedUiContainer} {
  padding: 1em;
  padding-top: 0.75em;
  display: grid;
  gap: 0.75em;
  outline: none;
  contain: paint;
}

.${c.rootBottomHalf} .${c.expandedUiContainer} {
  padding-bottom: 0.75em;
}

.${c.expandedUiContainer}:is(.length0, .length1) {
  grid-template-columns: min-content;
}

.${c.expandedUiContainer} > dl {
  justify-self: start;
}

.${c.expandedUiContainer} label {
  display: grid;
  grid-template-columns: min-content auto;
  align-items: center;
  gap: 0.25em;
}

.${c.expandedUiContainer} label.Disabled {
  color: var(--grey);
}

.${c.expandedUiContainer} label > small {
  grid-column: 2;
}

.${c.compilationModeWithIcon} {
  display: flex;
  align-items: center;
  gap: 0.25em;
}

.${c.browserUiPositionChooser} {
  position: absolute;
  display: grid;
  grid-template-columns: min-content min-content;
  pointer-events: none;
}

.${c.browserUiPositionButton} {
  appearance: none;
  padding: 0;
  border: none;
  background: none;
  border-radius: none;
  pointer-events: auto;
  width: 1em;
  height: 1em;
  text-align: center;
  line-height: 1em;
}

.${c.browserUiPositionButton}:hover {
  background-color: rgba(0, 0, 0, 0.25);
}

.${c.targetRoot}:not(:first-child) .${c.browserUiPositionChooser} {
  display: none;
}

.${c.shortStatusContainer} {
  line-height: 1;
  padding: 0.25em;
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  gap: 0.25em;
}

[data-flash]::before {
  content: "";
  position: absolute;
  margin-top: 0.5em;
  margin-left: 0.5em;
  --size: min(500px, 100vmin);
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  animation: flash 0.7s 0.05s ease-out both;
  pointer-events: none;
}

[data-flash="error"]::before {
  background-color: #eb0000;
}

[data-flash="success"]::before {
  background-color: #00b600;
}

@keyframes flash {
  from {
    transform: translate(-50%, -50%) scale(0);
    opacity: 0.9;
  }

  to {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0;
  }
}

@keyframes nudge {
  from {
    opacity: 0;
  }

  to {
    opacity: 0.8;
  }
}

@media (prefers-reduced-motion: reduce) {
  [data-flash]::before {
    transform: translate(-50%, -50%);
    width: 2em;
    height: 2em;
    animation: nudge 0.25s ease-in-out 4 alternate forwards;
  }
}

.${c.chevronButton} {
  appearance: none;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  cursor: pointer;
}
`;function Ft(e,t,o){const r=p.MOCKED_TIMINGS?{...t,status:{...t.status,date:new Date("2022-02-05T13:10:05Z")}}:t,n={...He(r),...Xt(e,r,o)};return g(HTMLDivElement,{className:c.container},r.uiExpanded?Gt(r.status,n,o,r.browserUiPosition,e):void 0,g(HTMLDivElement,{className:c.shortStatusContainer,onclick:()=>{e({tag:"PressedChevron"})}},g(HTMLButtonElement,{className:c.chevronButton,attrs:{"aria-expanded":r.uiExpanded.toString()}},Y(r.uiExpanded?xe:Ue,r.uiExpanded?"Collapse elm-watch":"Expand elm-watch")),Fe(r.compilationMode),Y(n.icon,n.status,{className:c.flash,onanimationend:a=>{a.currentTarget instanceof HTMLElement&&a.currentTarget.removeAttribute("data-flash")}}),g(HTMLTimeElement,{dateTime:r.status.date.toISOString()},Z(r.status.date)),g(HTMLSpanElement,{className:c.targetName},T)))}function Y(e,t,o){return g(HTMLSpanElement,{attrs:{"aria-label":t},...o},g(HTMLSpanElement,{attrs:{"aria-hidden":"true"}},e))}function Gt(e,t,o,r,n){const a=[["target",o.targetName],["elm-watch",o.version],["web socket",Zt(o.webSocketUrl)],["updated",g(HTMLTimeElement,{dateTime:e.date.toISOString(),attrs:{"data-format":"2044-04-30 04:44:44"}},`${Xe(e.date)} ${Z(e.date)}`)],["status",t.status],...t.dl],i=Me(e);return g(HTMLDivElement,{className:`${c.expandedUiContainer} length${t.content.length}`,attrs:{tabindex:"-1"}},g(HTMLDListElement,{},...a.flatMap(([s,l])=>[g(HTMLElement,{localName:"dt"},s),g(HTMLElement,{localName:"dd"},l)])),...t.content,i===void 0?void 0:Vt(r,n,i))}var jt=["TopLeft","TopRight","BottomLeft","BottomRight"];function Vt(e,t,o){const r=qt(e);return g(HTMLDivElement,{className:c.browserUiPositionChooser,style:Rt(e)},...jt.map(n=>{const a=r[n];return a===void 0?g(HTMLDivElement,{style:{visibility:"hidden"}},"\xB7"):g(HTMLButtonElement,{className:c.browserUiPositionButton,attrs:{"data-position":n},onclick:()=>{t({tag:"ChangedBrowserUiPosition",browserUiPosition:n,sendKey:o})}},a)}))}var Ne="\u2191",Pe="\u2193",De="\u2190",Be="\u2192",Kt="\u2196",Jt="\u2197",zt="\u2199",Yt="\u2198";function qt(e){switch(e){case"TopLeft":return{TopLeft:void 0,TopRight:Be,BottomLeft:Pe,BottomRight:Yt};case"TopRight":return{TopLeft:De,TopRight:void 0,BottomLeft:zt,BottomRight:Pe};case"BottomLeft":return{TopLeft:Ne,TopRight:Jt,BottomLeft:void 0,BottomRight:Be};case"BottomRight":return{TopLeft:Kt,TopRight:Ne,BottomLeft:De,BottomRight:void 0}}}function He(e){switch(e.status.tag){case"Busy":return{icon:"\u23F3",status:"Waiting for compilation"};case"CompileError":return{icon:"\u{1F6A8}",status:"Compilation error"};case"Connecting":return{icon:"\u{1F50C}",status:"Connecting"};case"ElmJsonError":return{icon:"\u{1F6A8}",status:"elm.json or inputs error"};case"EvalError":return{icon:"\u26D4\uFE0F",status:"Eval error"};case"Idle":return{icon:"\u2705",status:"Successfully compiled"};case"SleepingBeforeReconnect":return{icon:"\u{1F50C}",status:"Sleeping"};case"UnexpectedError":return{icon:"\u274C",status:"Unexpected error"};case"WaitingForReload":return e.elmCompiledTimestamp===e.elmCompiledTimestampBeforeReload?{icon:"\u274C",status:"Reload trouble"}:{icon:"\u23F3",status:"Waiting for reload"}}}function Xt(e,t,o){const{status:r,compilationMode:n}=t;switch(r.tag){case"Busy":return{dl:[],content:[...de({dispatch:e,sendKey:void 0,compilationMode:n,warnAboutCompilationModeMismatch:!1,info:o}),...r.errorOverlay===void 0?[]:[We(e,r.errorOverlay)]]};case"CompileError":return{dl:[],content:[...de({dispatch:e,sendKey:r.sendKey,compilationMode:n,warnAboutCompilationModeMismatch:!0,info:o}),We(e,r.errorOverlay),...r.openEditorError===void 0?[]:Qt(r.openEditorError)]};case"Connecting":return{dl:[["attempt",r.attemptNumber.toString()],["sleep",$e(r.attemptNumber)]],content:[...Ge(o.webSocketUrl),g(HTMLButtonElement,{disabled:!0},"Connecting web socket\u2026")]};case"ElmJsonError":return{dl:[],content:[g(HTMLPreElement,{style:{minWidth:"80ch"}},r.error)]};case"EvalError":return{dl:[],content:[g(HTMLParagraphElement,{},"Check the console in the browser developer tools to see errors!")]};case"Idle":return{dl:[],content:de({dispatch:e,sendKey:r.sendKey,compilationMode:n,warnAboutCompilationModeMismatch:!0,info:o})};case"SleepingBeforeReconnect":return{dl:[["attempt",r.attemptNumber.toString()],["sleep",$e(r.attemptNumber)]],content:[...Ge(o.webSocketUrl),g(HTMLButtonElement,{onclick:()=>{e({tag:"PressedReconnectNow"})}},"Reconnect web socket now")]};case"UnexpectedError":return{dl:[],content:[g(HTMLParagraphElement,{},"I ran into an unexpected error! This is the error message:"),g(HTMLPreElement,{},r.message)]};case"WaitingForReload":return{dl:[],content:t.elmCompiledTimestamp===t.elmCompiledTimestampBeforeReload?["A while ago I reloaded the page to get new compiled JavaScript.","But it looks like after the last page reload I got the same JavaScript as before, instead of new stuff!",`The old JavaScript was compiled ${new Date(t.elmCompiledTimestamp).toLocaleString()}, and so was the JavaScript currently running.`,"I currently need to reload the page again, but fear a reload loop if I try.","Do you have accidental HTTP caching enabled maybe?","Try hard refreshing the page and see if that helps, and consider disabling HTTP caching during development."].map(a=>g(HTMLParagraphElement,{},a)):[g(HTMLParagraphElement,{},"Waiting for other targets\u2026")]}}}function We(e,t){return g(HTMLButtonElement,{attrs:{"data-test-id":t.openErrorOverlay?"HideErrorOverlayButton":"ShowErrorOverlayButton"},onclick:()=>{e({tag:"ChangedOpenErrorOverlay",openErrorOverlay:!t.openErrorOverlay})}},t.openErrorOverlay?"Hide errors":"Show errors")}function Qt(e){switch(e.tag){case"EnvNotSet":return[g(HTMLDivElement,{className:c.envNotSet},g(HTMLParagraphElement,{},"\u2139\uFE0F Clicking error locations only works if you set it up."),g(HTMLParagraphElement,{},"Check this out: ",g(HTMLAnchorElement,{href:"https://lydell.github.io/elm-watch/browser-ui/#clickable-error-locations",target:"_blank",rel:"noreferrer"},g(HTMLElement,{localName:"strong"},"Clickable error locations"))))];case"InvalidFilePath":case"CommandFailed":return[g(HTMLParagraphElement,{},g(HTMLElement,{localName:"strong"},"Opening the location in your editor failed!")),g(HTMLPreElement,{},e.message)]}}function Fe(e){switch(e){case"proxy":return;case"debug":return Y("\u{1F41B}","Debug mode",{className:c.debugModeIcon});case"standard":return;case"optimize":return Y("\u{1F680}","Optimize mode")}}function Zt(e){const t=e.hostname.endsWith(".localhost")?"localhost":e.hostname;return`${e.protocol}//${t}:${e.port}${e.pathname}`}function Ge(e){return e.protocol==="wss:"?[g(HTMLParagraphElement,{},g(HTMLElement,{localName:"strong"},"Having trouble connecting?")),g(HTMLParagraphElement,{},"Setting up HTTPS can be a bit tricky."),g(HTMLParagraphElement,{},"Read all about ",g(HTMLAnchorElement,{href:"https://lydell.github.io/elm-watch/https/",target:"_blank",rel:"noreferrer"},"HTTPS with elm-watch"),".")]:[]}var eo="The Elm debugger isn't available at this point.",to="The Elm debugger cannot be enabled until at least one Elm app has been initialized. (Check the browser console for errors if you expected an Elm app to be initialized by now.)";function oo(e){return`The Elm debugger isn't supported by ${no(Array.from(e,t=>`\`${t}\``),"and")} programs.`}function ro(e){switch(e.tag){case"FlagsTypeChanged":return`the flags type in \`${e.moduleName}\` changed and now the passed flags aren't correct anymore. The idea is to try to run with new flags!
This is the error:
${e.jsonErrorMessage}`;case"HotReloadCaughtError":return`hot reload for \`${e.moduleName}\` failed, probably because of incompatible model changes.
This is the error:
${D(e.caughtError)}`;case"InitReturnValueChanged":return`\`${e.moduleName}.init\` returned something different than last time. Let's start fresh!`;case"MessageTypeChangedInDebugMode":return`the message type in \`${e.moduleName}\` changed in debug mode ("debug metadata" changed).`;case"NewPortAdded":return`a new port '${e.name}' was added. The idea is to give JavaScript code a chance to set it up!`;case"ProgramTypeChanged":return`\`${e.moduleName}.main\` changed from \`${e.previousProgramType}\` to \`${e.newProgramType}\`.`}}function D(e){return e instanceof Error?e.stack!==void 0?e.stack.includes(e.message)?e.stack:`${e.message}
${e.stack}`:e.message:H(e)}function no(e,t){const{length:o}=e;return o<=1?e.join(""):o===2?e.join(` ${t} `):`${e.slice(0,o-2).join(", ")}, ${e.slice(-2).join(` ${t} `)}`}function de({dispatch:e,sendKey:t,compilationMode:o,warnAboutCompilationModeMismatch:r,info:n}){const a=[{mode:"debug",name:"Debug",toggled:n.debugModeToggled},{mode:"standard",name:"Standard",toggled:{tag:"Enabled"}},{mode:"optimize",name:"Optimize",toggled:{tag:"Enabled"}}];return[g(HTMLFieldSetElement,{disabled:t===void 0},g(HTMLLegendElement,{},"Compilation mode"),...a.map(({mode:i,name:s,toggled:l})=>{const d=g(HTMLSpanElement,{className:c.compilationModeWithIcon},s,i===o?Fe(i):void 0);return g(HTMLLabelElement,{className:l.tag},g(HTMLInputElement,{type:"radio",name:`CompilationMode-${n.targetName}`,value:i,checked:i===o,disabled:t===void 0||l.tag==="Disabled",onchange:t===void 0?null:()=>{e({tag:"ChangedCompilationMode",compilationMode:i,sendKey:t})}}),...l.tag==="Enabled"?[d,r&&i===o&&o!==n.originalCompilationMode&&n.originalCompilationMode!=="proxy"?g(HTMLElement,{localName:"small"},`Note: The code currently running is in ${I} mode.`):void 0]:[d,g(HTMLElement,{localName:"small"},l.reason)])}))]}var q="data-target-names";function ao(e,t,o,r,n,a){const i=new Map(Array.from(n.children,d=>[d.id,{targetNames:new Set((d.getAttribute(q)??"").split(`
`)),element:d}]));for(const[d,{targetNames:u,element:f}]of i)u.has(e)&&!r.has(d)&&(u.delete(e),u.size===0?f.remove():f.setAttribute(q,[...u].join(`
`)));let s;for(const[d,u]of r){const f=i.get(d);if(f===void 0){const m=io(e,t,o,d,u);s===void 0?n.prepend(m):s.after(m),n.style.backgroundColor=u.backgroundColor,a.style.setProperty("--foregroundColor",u.foregroundColor),a.style.setProperty("--backgroundColor",u.backgroundColor),s=m}else f.targetNames.has(e)||f.element.setAttribute(q,[...f.targetNames,e].join(`
`)),s=f.element}const l=!n.hasChildNodes();n.hidden=l,a.hidden=l,a.style.right=`${n.offsetWidth-n.clientWidth}px`}function io(e,t,o,r,n){return g(HTMLDetailsElement,{open:!0,id:r,style:{backgroundColor:n.backgroundColor,color:n.foregroundColor},attrs:{[q]:e}},g(HTMLElement,{localName:"summary"},g(HTMLSpanElement,{className:c.errorTitle,style:{backgroundColor:n.backgroundColor}},n.title),n.location===void 0?void 0:g(HTMLParagraphElement,{},so(t,o,n.location))),g(HTMLPreElement,{innerHTML:n.htmlContent}))}function so(e,t,o){switch(o.tag){case"FileOnly":return je(e,t,{file:o.file,line:1,column:1},o.file);case"FileWithLineAndColumn":return je(e,t,o,`${o.file}:${o.line}:${o.column}`);case"Target":return`Target: ${o.targetName}`}}function je(e,t,o,r){return t===void 0?r:g(HTMLButtonElement,{className:c.errorLocationButton,onclick:()=>{e({tag:"PressedOpenEditor",file:o.file,line:o.line,column:o.column,sendKey:t})}},r)}typeof WebSocket<"u"&&bt()})();{const R=new Error(`
Certain parts of \`window.Elm\` aren't available yet! That's fine though!

\`elm-watch\` has generated a stub file in place of Elm's compiled JS. This is
because until just now, there was no need to spend time on generating JS!

This stub file is now connecting to \`elm-watch\` via WebSocket, letting it know
that it's time to start generating real JS. Once that's done the page should be
automatically reloaded. But if you get compilation errors you'll need to fix
them first.
    `.trim());R.elmWatchProxy=!0;const _=void 0,B=typeof _=="object"&&_!==null?_:void 0;var Ve=new Proxy(B??{},{get(O,M,w){const U=Reflect.get(O,M,w);if(U!==void 0)return U;throw R},getOwnPropertyDescriptor(O,M){const w=Reflect.getOwnPropertyDescriptor(O,M);if(w!==void 0)return w;throw R},has(O,M){if(Reflect.has(O,M))return!0;throw R},ownKeys(){throw R}})}globalThis.__ELM_WATCH.REGISTER("LogoyoGame_001_LetterPlacing",{});export{Ve as default,Ve as Elm};
