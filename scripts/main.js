"use strict";window.g_aSr=class{constructor(c,a){this.g_aSs=c,this.g_aSt=a,this.g_aSu=!1,this.g_aKv=()=>this.g_ank()}g_aSv(){}g_aSw(e,a,b,c){this.g_aSs.g_aSx(this.g_aSt,e,a,!!b,c)}g_aSy(e,a,b,c){return this.g_aSs.g_aSz(this.g_aSt,e,a,!!b,c)}g_aSA(d,a,b){this.g_aSs.g_aSB()?this.g_aSw(d,a,b):this.g_aSs.g_aSC()._OnMessageFromDOM({type:"event",component:this.g_aSt,handler:d,dispatchRuntimeEvent:b,data:a,responseId:null})}g_aSD(c,a){this.g_aSs.g_aSE(this.g_aSt,c,a)}g_aSF(d){for(const[a,b]of d)this.g_aSD(a,b)}g_aSG(){return this.g_aSs}g_aSH(){return this.g_aSt}g_aAL(){this.g_aSu||(this.g_aSs.g_aSI(this.g_aKv),this.g_aSu=!0)}g_aAz(){this.g_aSu&&(this.g_aSs.g_aSJ(this.g_aKv),this.g_aSu=!1)}g_ank(){}},"use strict",window.g_aSK=class extends g_aSr{constructor(c,a){super(c,a),this.g_aSL=new Map,this.g_aSM=!0,this.g_aSD("create",b=>this.g_aSN(b)),this.g_aSD("destroy",b=>this.g_aSO(b)),this.g_aSD("set-visible",b=>this.g_aSP(b)),this.g_aSD("update-position",b=>this.g_aSQ(b)),this.g_aSD("update-state",b=>this.g_aSR(b)),this.g_aSD("focus",b=>this.g_aSS(b)),this.g_aSD("set-css-style",b=>this.g_aST(b))}g_aSU(b){this.g_aSM=!!b}g_aSV(c,e){this.g_aSD(c,b=>{const a=b.elementId,c=this.g_aSL.get(a);return e(c,b)})}g_aSN(d){const a=d.elementId,b=this.g_aBi(a,d);this.g_aSL.set(a,b),this.g_aSM&&document.body.appendChild(b)}g_aBi(){throw new Error("required override")}g_aSW(){}g_aSO(d){const a=d.elementId,b=this.g_aSL.get(a);this.g_aSW(b),this.g_aSM&&b.parentElement.removeChild(b),this.g_aSL.delete(a)}g_aSX(d,a,b){b||(b={}),b.elementId=a,this.g_aSw(d,b)}g_aSY(d,a,b){b||(b={}),b.elementId=a,this.g_aSA(d,b)}g_aSP(c){if(this.g_aSM){const a=this.g_aSL.get(c.elementId);a.style.display=c.isVisible?"":"none"}}g_aSQ(d){if(this.g_aSM){const a=this.g_aSL.get(d.elementId);a.style.left=d.left+"px",a.style.top=d.top+"px",a.style.width=d.width+"px",a.style.height=d.height+"px";const b=d.fontSize;null!==b&&(a.style.fontSize=b+"em")}}g_aSR(c){const a=this.g_aSL.get(c.elementId);this.g_aSZ(a,c)}g_aSZ(){throw new Error("required override")}g_aSS(c){const a=this.g_aSL.get(c.elementId);c.focus?a.focus():a.blur()}g_aST(c){const a=this.g_aSL.get(c.elementId);a.style[c.prop]=c.val}g_aS_(b){return this.g_aSL.get(b)}},"use strict";{function p(e){return new Promise((a,b)=>{const c=document.createElement("script");c.onload=a,c.onerror=b,c.async=!1,c.src=e,document.head.appendChild(c)})}async function q(c){const a=await r(c),b=new TextDecoder("utf-8");return b.decode(a)}function r(e){return new Promise((f,b)=>{const a=new FileReader;a.onload=b=>f(b.target.result),a.onerror=c=>b(c),a.readAsArrayBuffer(e)})}function s(d){if(!d)return"";const a=d.split(".");if(2>a.length)return"";const b=a[a.length-1].toLowerCase();return g.get(b)||""}const a=/(iphone|ipod|ipad)/i.test(navigator.userAgent);let b=new Audio;const c={"audio/webm; codecs=opus":!!b.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!b.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!b.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!b.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!b.canPlayType("audio/mp4"),"audio/mpeg":!!b.canPlayType("audio/mpeg")};b=null;const d=[];let e=0;const f=Math.max(navigator.hardwareConcurrency||0,8),g=new Map([["mp4","video/mp4"],["webm","video/webm"],["m4a","audio/mp4"],["mp3","audio/mpeg"],["js","application/javascript"],["wasm","application/wasm"]]),h=[],i=new Map,j=new Map;let k=0;window.g_aS$=class b{constructor(b){this.g_aTa=b.g_aTb,this.g_aTc=null,this.g_aJx="",this.g_aTd=b.g_aTe,this.g_aTf={},this.g_aTg=null,this.g_aTh=null,this.g_aTi=[],this.g_aTj=null,this.g_aHB=null,this.g_aLf=null,this.g_aIi=-1,this.g_aTk=()=>this.g_aTl(),this.g_aTm=[],this.g_aJC=b.g_fI,this.g_aTn=!1,this.g_aTo=null,("html5"===this.g_aJC||"playable-ad"===this.g_aJC)&&"file"===location.protocol.substr(0,4)&&alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)"),this.g_aSE("runtime","cordova-fetch-local-file",b=>this.g_aTp(b)),this.g_aSE("runtime","create-job-worker",b=>this.g_aTq(b)),"cordova"===this.g_aJC?document.addEventListener("deviceready",()=>this.g_azD(b)):this.g_azD(b)}g_MC(){this.g_aTr(),this.g_aTc&&(this.g_aTc.onmessage=null,this.g_aTc=null),this.g_aTg&&(this.g_aTg.terminate(),this.g_aTg=null),this.g_aTh&&(this.g_aTh.g_MC(),this.g_aTh=null),this.g_aHB&&(this.g_aHB.parentElement.removeChild(this.g_aHB),this.g_aHB=null)}g_aTs(){return this.g_aHB}g_Nc(){return this.g_aJx}g_aSB(){return this.g_aTa}g_afl(){return this.g_aJC}g_aLx(){return"cordova"===this.g_aJC&&a}g_aTt(){if(!this.g_aLx())return!1;const d=window.devicePixelRatio,a=window.screen.width*d,b=window.screen.height*d;return 1125==a&&2436==b}async g_azD(d){if("playable-ad"===this.g_aJC){this.g_aTo=self.c3_base64files,await this.g_aTu();for(let a=0,b=d.g_aTv.length;a<b;++a){const b=d.g_aTv[a].toLowerCase();this.g_aTo.hasOwnProperty(b)&&(d.g_aTv[a]=URL.createObjectURL(this.g_aTo[b]))}}if(d.g_aTw)this.g_aJx=d.g_aTw;else{const c=location.origin;this.g_aJx=("null"===c?"file:///":c)+location.pathname;const a=this.g_aJx.lastIndexOf("/");-1!==a&&(this.g_aJx=this.g_aJx.substr(0,a+1))}if(d.g_aTx)for(const[a,b]of Object.entries(d.g_aTx))this.g_aTf[a]=URL.createObjectURL(b);const a=new MessageChannel;this.g_aTc=a.port1,this.g_aTc.onmessage=b=>this._OnMessageFromRuntime(b.data),window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(b=>this.g_aTy(b)),this.g_aLf=new self.g_aTz(this),await this.g_aLf.g_aEZ(),this.g_aTA(),"object"==typeof window.StatusBar&&window.StatusBar.hide(),await this.g_aTB(),this.g_aTa?await this.g_aTC(d,a.port2):await this.g_aTD(d,a.port2)}g_aTE(b){return this.g_aTf.hasOwnProperty(b)?this.g_aTf[b]:"playable-ad"===this.g_aJC&&this.g_aTo.hasOwnProperty(b.toLowerCase())?URL.createObjectURL(this.g_aTo[b.toLowerCase()]):b}async g_aTF(f,a,g){if(f.startsWith("blob:"))return new Worker(f,g);if(this.g_aLx()){const a=await this.g_afc(this.g_aTd+f);return new Worker(URL.createObjectURL(a),g)}const c=new URL(f,a),b=location.origin!==c.origin;if(b){const d=await fetch(c);if(!d.ok)throw new Error("failed to fetch worker script");const a=await d.blob();return new Worker(URL.createObjectURL(a),g)}return new Worker(c,g)}g_aTA(){if(this.g_aTt()){const d=window.innerWidth>window.innerHeight,a=document.documentElement.style,b=document.body.style;d?(b.height=a.height="375px",b.width=a.width="812px"):(b.width=a.width="375px",b.height=a.height="812px")}}g_aTG(d){return{baseUrl:this.g_aJx,windowInnerWidth:window.innerWidth,windowInnerHeight:window.innerHeight,devicePixelRatio:window.devicePixelRatio,isFullscreen:b.g_aIJ(),projectData:d.g_aTH,previewImageBlobs:window.cr_previewImageBlobs||this.g_aTo,previewProjectFileBlobs:window.cr_previewProjectFileBlobs,shaders:self.C3_Shaders,exportType:d.g_fI,isDebug:-1<self.location.search.indexOf("debug"),ife:!!self.g_aTI,jobScheduler:this.g_aLf.g_aTJ(),supportedAudioFormats:c,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||this.g_aTd+"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||this.g_aTd+"opus.wasm.wasm",isWKWebView:this.g_aLx(),isFBInstantAvailable:"undefined"!=typeof self.FBInstant}}async g_aTC(e,a){const b=this.g_aTE(e.g_aTK);this.g_aTg=await this.g_aTF(b,this.g_aJx,{name:"Runtime"}),this.g_aHB=document.createElement("canvas"),this.g_aHB.style.display="none";const c=this.g_aHB.transferControlToOffscreen();document.body.appendChild(this.g_aHB),this.g_aTg.postMessage(Object.assign(this.g_aTG(e),{type:"init-runtime",isInWorker:!0,messagePort:a,canvas:c,workerDependencyScripts:e.g_aTL||[],engineScripts:e.g_aTv}),[a,c,...this.g_aLf.g_aTM()]),this.g_aTi=h.map(b=>new b(this)),this.g_aTN()}async g_aTD(a,b){this.g_aHB=document.createElement("canvas"),this.g_aHB.style.display="none",document.body.appendChild(this.g_aHB),this.g_aTi=h.map(b=>new b(this)),this.g_aTN();const c=a.g_aTv.map(b=>new URL(b,this.g_aJx).toString());await Promise.all(c.map(a=>p(a)));const d=Object.assign(this.g_aTG(a),{isInWorker:!1,messagePort:b,canvas:this.g_aHB});this.g_aTh=self.C3_CreateRuntime(d),await self.C3_InitRuntime(this.g_aTh,d)}async g_aTq(){const b=await this.g_aLf.g_aTO();return{outputPort:b,transferables:[b]}}g_aSC(){if(this.g_aTa)throw new Error("not available in worker mode");return this.g_aTh}g_aSx(f,a,b,c,d){this.g_aTc.postMessage({type:"event",component:f,handler:a,dispatchRuntimeEvent:c,data:b,responseId:null},this.g_aTn?void 0:d)}g_aSz(h,a,b,c,d){const e=k++,f=new Promise((c,a)=>{j.set(e,{resolve:c,reject:a})});return this.g_aTc.postMessage({type:"event",component:h,handler:a,dispatchRuntimeEvent:c,data:b,responseId:e},this.g_aTn?void 0:d),f}["_OnMessageFromRuntime"](c){const a=c.type;if("event"===a)this.g_aTP(c);else if("result"===a)this.g_aTQ(c);else if("runtime-ready"===a)this.g_aTR();else throw new Error(`unknown message '${a}'`)}g_aTP(j){const k=j.component,b=j.handler,a=j.data,c=j.responseId,d=i.get(k);if(!d)return void console.warn(`[DOM] No event handlers for component '${k}'`);const e=d.get(b);if(!e)return void console.warn(`[DOM] No handler '${b}' for component '${k}'`);let f=null;try{f=e(a)}catch(d){return console.error(`Exception in '${k}' handler '${b}':`,d),void(null!==c&&this.g_aTS(c,!1,d.toString()))}null!==c&&(f&&f.then?f.then(b=>this.g_aTS(c,!0,b)).catch(d=>{console.error(`Rejection from '${k}' handler '${b}':`,d),this.g_aTS(c,!1,d.toString())}):this.g_aTS(c,!0,f))}g_aTS(e,a,b){let c;b&&b.transferables&&(c=b.transferables),this.g_aTc.postMessage({type:"result",responseId:e,isOk:a,result:b},c)}g_aTQ(f){const a=f.responseId,b=f.isOk,c=f.result,d=j.get(a);b?d.resolve(c):d.reject(c),j.delete(a)}g_aSE(e,a,b){let c=i.get(e);if(c||(c=new Map,i.set(e,c)),c.has(a))throw new Error(`[DOM] Component '${e}' already has handler '${a}'`);c.set(a,b)}static g_aTT(b){if(h.includes(b))throw new Error("DOM handler already added");h.push(b)}g_aTN(){for(const b of this.g_aTi)if("runtime"===b.g_aSH())return void(this.g_aTj=b);throw new Error("cannot find runtime DOM handler")}g_aTy(b){this.g_aSx("debugger","message",b)}g_aTR(){for(const b of this.g_aTi)b.g_aSv()}static g_aIJ(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)}g_aSI(b){this.g_aTm.push(b),this.g_aTU()}g_aSJ(c){const a=this.g_aTm.indexOf(c);if(-1===a)throw new Error("invalid callback");this.g_aTm.splice(a,1),this.g_aTm.length||this.g_aTr()}g_aTU(){-1===this.g_aIi&&this.g_aTm.length&&(this.g_aIi=requestAnimationFrame(this.g_aTk))}g_aTr(){-1!==this.g_aIi&&(cancelAnimationFrame(this.g_aIi),this.g_aIi=-1)}g_aTl(){this.g_aIi=-1;for(const b of this.g_aTm)b();this.g_aTU()}g_aTV(b){this.g_aTj.g_aTV(b)}g_aTW(b){this.g_aTj.g_aTW(b)}g_aTX(){this.g_aTj.g_aTX()}g_aTY(b){this.g_aTj.g_aTY(b)}g_afC(b){return!!c[b]}async g_aLi(c){const a=await this.g_aSz("runtime","opus-decode",{arrayBuffer:c},!1,[c]);return new Float32Array(a)}g_NH(b){return /^(?:[a-z]+:)?\/\//.test(b)||"data:"===b.substr(0,5)||"blob:"===b.substr(0,5)}g_NI(b){return!this.g_NH(b)}async g_aTp(c){const a=c.filename;switch(c.as){case"text":return await this.g_afg(a);case"blob":return await this.g_afc(a);case"blob-url":return await this.g_aTZ(a);case"buffer":return await this.g_afi(a);default:throw new Error("unsupported type");}}g_aT_(c){const d=window.cordova.file.applicationDirectory+"www/"+c;return new Promise((e,a)=>{window.resolveLocalFileSystemURL(d,c=>{c.file(e,a)},a)})}async g_afg(b){const a=await this.g_aT_(b);return await q(a)}g_aT$(){if(d.length&&!(e>=f)){e++;const b=d.shift();this.g_aUa(b.filename,b.g_pl,b.g_pm)}}g_afi(f){return new Promise((g,b)=>{d.push({filename:f,g_pl:b=>{e--,this.g_aT$(),g(b)},g_pm:c=>{e--,this.g_aT$(),b(c)}}),this.g_aT$()})}async g_aUa(c,a,b){try{const b=await this.g_aT_(c),d=await r(b);a(d)}catch(c){b(c)}}async g_afc(d,a){a||(a=s(d));const e=await this.g_afi(d);return new Blob([e],{type:a})}async g_aTZ(c){const a=await this.g_afc(c);return URL.createObjectURL(a)}async g_aTu(){const d=[];for(const[a,b]of Object.entries(this.g_aTo))d.push(this.g_aUb(a,b));await Promise.all(d)}async g_aUb(e,a){if("object"==typeof a)this.g_aTo[e]=new Blob([a.str],{type:a.type});else{const b=await fetch(a),c=await b.blob();this.g_aTo[e]=c}}g_aTB(){let e=null;const f=new Promise(a=>e=a),b=new ArrayBuffer(1),c=new MessageChannel;return c.port2.onmessage=a=>{a.data&&a.data.arrayBuffer||(this.g_aTn=!0,console.warn("MessageChannel transfers determined to be broken. Disabling transferables.")),e()},c.port1.postMessage({arrayBuffer:b},[b]),f}}}{function g(b){return b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents}function a(e){return new Promise((a,b)=>{const c=new Image;c.onload=()=>a(c),c.onerror=c=>b(c),c.src=e})}async function h(b){const d=URL.createObjectURL(b);try{return await a(d)}finally{URL.revokeObjectURL(d)}}function b(){try{return window.parent&&window.parent.document.hasFocus()}catch(b){return!1}}self.C3_RasterSvgImage=async function(f,a,b){const c=document.createElement("canvas");c.width=a,c.height=b;const d=c.getContext("2d");return d.drawImage(f,0,0,a,b),c};let c=!1;document.addEventListener("pause",()=>c=!0),document.addEventListener("resume",()=>c=!1);const d=class extends g_aSr{constructor(c){super(c,"runtime"),this.g_aUc=!0,this.g_aUd="any",this.g_aUe=null,c.g_aSE("canvas","update-size",b=>this.g_aUf(b)),c.g_aSE("runtime","invoke-download",b=>this.g_aUg(b)),c.g_aSE("runtime","raster-svg-image",b=>this.g_aUh(b)),c.g_aSE("runtime","set-target-orientation",b=>this.g_aUi(b)),c.g_aSE("runtime","register-sw",()=>this.g_aUj()),c.g_aSE("runtime","post-to-debugger",b=>this.g_aUk(b)),c.g_aSE("runtime","before-start-ticking",()=>this.g_aUl()),c.g_aSE("runtime","debug-highlight",b=>this.g_aUm(b));const a=c.g_aTs();a.addEventListener("contextmenu",b=>b.preventDefault()),a.addEventListener("selectstart",b=>b.preventDefault()),a.addEventListener("gesturehold",b=>b.preventDefault()),a.addEventListener("touchstart",b=>b.preventDefault()),window.addEventListener("mousedown",b=>{1===b.button&&b.preventDefault()}),window.addEventListener("resize",()=>this.g_aIw()),this.g_aUn=new Set,this.g_aUo=new WeakSet,this.g_aUp=!1}g_aUl(){return window.addEventListener("visibilitychange",()=>this.g_aLh(document.hidden)),document.addEventListener("pause",()=>this.g_aLh(!0)),document.addEventListener("resume",()=>this.g_aLh(!1)),{isSuspended:!!(document.hidden||c)}}g_aSv(){window.addEventListener("focus",()=>this.g_aUq("window-focus")),window.addEventListener("blur",()=>this.g_aUq("window-blur",{parentHasFocus:b()})),window.addEventListener("fullscreenchange",()=>this.g_aIx()),window.addEventListener("webkitfullscreenchange",()=>this.g_aIx()),window.addEventListener("mozfullscreenchange",()=>this.g_aIx()),window.addEventListener("fullscreenerror",b=>this.g_aIy(b)),window.addEventListener("webkitfullscreenerror",b=>this.g_aIy(b)),window.addEventListener("mozfullscreenerror",b=>this.g_aIy(b)),window.addEventListener("keydown",b=>this.g_aUr("keydown",b)),window.addEventListener("keyup",b=>this.g_aUr("keyup",b)),window.addEventListener("mousemove",b=>this.g_aUs("mousemove",b)),window.addEventListener("mousedown",b=>this.g_aUs("mousedown",b)),window.addEventListener("mouseup",b=>this.g_aUs("mouseup",b)),window.addEventListener("dblclick",b=>this.g_aUs("dblclick",b)),window.addEventListener("wheel",b=>this.g_aUt("wheel",b)),"undefined"==typeof g_iX?(window.addEventListener("touchstart",b=>this.g_aUu("pointerdown",b)),window.addEventListener("touchmove",b=>this.g_aUu("pointermove",b)),window.addEventListener("touchend",b=>this.g_aUu("pointerup",b)),window.addEventListener("touchcancel",b=>this.g_aUu("pointercancel",b))):(window.addEventListener("pointerdown",b=>this.g_aUv("pointerdown",b)),window.addEventListener("pointermove",b=>this.g_aUv("pointermove",b)),window.addEventListener("pointerup",b=>this.g_aUv("pointerup",b)),window.addEventListener("pointercancel",b=>this.g_aUv("pointercancel",b))),window.addEventListener("deviceorientation",b=>this.g_aPo(b)),window.addEventListener("devicemotion",b=>this.g_aPp(b));const c=()=>this.g_aTX();window.addEventListener("pointerup",c,!0),window.addEventListener("touchend",c,!0),window.addEventListener("click",c,!0),window.addEventListener("keydown",c,!0),window.addEventListener("gamepadconnected",c,!0)}g_aUq(c,a){this.g_aSw(c,a||null,!0)}g_aIw(){this.g_aSw("window-resize",{innerWidth:window.innerWidth,innerHeight:window.innerHeight,devicePixelRatio:window.devicePixelRatio},!0)}g_aUi(b){this.g_aUd=b.targetOrientation}g_aUw(){const c=this.g_aUd;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(c).catch(b=>console.warn("[Construct 3] Failed to lock orientation: ",b));else try{let a=!1;screen.lockOrientation?a=screen.lockOrientation(c):screen.webkitLockOrientation?a=screen.webkitLockOrientation(c):screen.mozLockOrientation?a=screen.mozLockOrientation(c):screen.msLockOrientation&&(a=screen.msLockOrientation(c)),a||console.warn("[Construct 3] Failed to lock orientation")}catch(b){console.warn("[Construct 3] Failed to lock orientation: ",b)}}g_aIx(){const b=g_aS$.g_aIJ();b&&"any"!==this.g_aUd&&this.g_aUw(),this.g_aSw("fullscreenchange",{isFullscreen:b,innerWidth:window.innerWidth,innerHeight:window.innerHeight})}g_aIy(b){console.warn("[Construct 3] Fullscreen request failed: ",b),this.g_aSw("fullscreenerror",{isFullscreen:g_aS$.g_aIJ(),innerWidth:window.innerWidth,innerHeight:window.innerHeight})}g_aLh(b){b?this.g_aSs.g_aTr():this.g_aSs.g_aTU(),this.g_aSw("visibilitychange",{hidden:b})}g_aUr(c,a){this.g_aSA(c,{code:a.code,key:a.key,which:a.which,repeat:a.repeat,altKey:a.altKey,ctrlKey:a.ctrlKey,metaKey:a.metaKey,shiftKey:a.shiftKey,timeStamp:a.timeStamp},!0)}g_aUs(a,b){g(b)||("mousedown"===a&&window!==window.top&&window.focus(),this.g_aSA(a,{button:b.button,clientX:b.clientX,clientY:b.clientY,timeStamp:b.timeStamp},!0))}g_aUt(c,a){this.g_aSw(c,{clientX:a.clientX,clientY:a.clientY,deltaX:a.deltaX,deltaY:a.deltaY,deltaZ:a.deltaZ,deltaMode:a.deltaMode,timeStamp:a.timeStamp},!0)}g_aUv(c,a){"pointerdown"===c&&window!==window.top&&window.focus(),this.g_aSA(c,{pointerId:a.pointerId,pointerType:a.pointerType,clientX:a.clientX,clientY:a.clientY,width:a.width||0,height:a.height||0,pressure:a.pressure||0,tangentialPressure:a.tangentialPressure||0,tiltX:a.tiltX||0,tiltY:a.tiltY||0,twist:a.twist||0,timeStamp:a.timeStamp},!0)}g_aUu(e,a){"pointerdown"===e&&window!==window.top&&window.focus();for(let b=0,c=a.changedTouches.length;b<c;++b){const c=a.changedTouches[b];this.g_aSA(e,{pointerId:c.identifier,pointerType:"touch",clientX:c.clientX,clientY:c.clientY,width:2*(c.radiusX||c.webkitRadiusX||c.mozRadiusX||c.msRadiusX||0),height:2*(c.radiusY||c.webkitRadiusY||c.mozRadiusY||c.msRadiusY||0),pressure:c.force||c.webkitForce||c.mozForce||c.msForce||0,tangentialPressure:0,tiltX:0,tiltY:0,twist:c.rotationAngle||0,timeStamp:a.timeStamp},!0)}}g_aPo(b){this.g_aSw("deviceorientation",{alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp},!0)}g_aPp(j){let a=0,k=0,l=0,m=0,n=0,o=0;const p=j.accelerationIncludingGravity;p&&(a=p.x||0,k=p.y||0,l=p.z||0);const h=j.acceleration;h&&(m=h.x||0,n=h.y||0,o=h.z||0),this.g_aSw("devicemotion",{acceleration:{x:m,y:n,z:o},accelerationWithG:{x:a,y:k,z:l},timeStamp:j.timeStamp},!0)}g_aUf(d){const a=this.g_aSG(),b=a.g_aTs();b.style.width=d.styleWidth+"px",b.style.height=d.styleHeight+"px",b.style.marginLeft=d.marginLeft+"px",b.style.marginTop=d.marginTop+"px",a.g_aTA(),this.g_aUc&&(b.style.display="",this.g_aUc=!1)}g_aUg(f){const b=f.url,c=f.filename,d=document.createElement("a"),e=document.body;d.textContent=c,d.href=b,d.download=c,e.appendChild(d),d.click(),e.removeChild(d)}async g_aUh(c){const a=c.blob,b=c.width,d=c.height,e=await h(a),f=await self.C3_RasterSvgImage(e,b,d);return await createImageBitmap(f)}g_aTX(){const c=[...this.g_aUn];if(this.g_aUn.clear(),!this.g_aUp)for(const d of c){const b=d.play();b&&b.catch(()=>{this.g_aUo.has(d)||this.g_aUn.add(d)})}}g_aTV(c){if("function"!=typeof c.play)throw new Error("missing play function");this.g_aUo.delete(c);let a;try{a=c.play()}catch(a){return void this.g_aUn.add(c)}a&&a.catch(()=>{this.g_aUo.has(c)||this.g_aUn.add(c)})}g_aTW(b){this.g_aUn.delete(b),this.g_aUo.add(b)}g_aTY(b){this.g_aUp=!!b}g_aUm(d){const a=d.show;if(!a)return void(this.g_aUe&&(this.g_aUe.style.display="none"));this.g_aUe||(this.g_aUe=document.createElement("div"),this.g_aUe.id="inspectOutline",document.body.appendChild(this.g_aUe));const b=this.g_aUe;b.style.display="",b.style.left=d.left-1+"px",b.style.top=d.top-1+"px",b.style.width=d.width+2+"px",b.style.height=d.height+2+"px",b.textContent=d.name}g_aUj(){window.C3_RegisterSW&&window.C3_RegisterSW()}g_aUk(b){window.c3_postToMessagePort&&(b.from="runtime",window.c3_postToMessagePort(b))}};g_aS$.g_aTT(d)}{const c=document.currentScript.src;self.g_aTz=class{constructor(a){this.g_aUx=a,this.g_aJx=c?c.substr(0,c.lastIndexOf("/")+1):a.g_Nc(),this.g_aNg=Math.min(navigator.hardwareConcurrency||2,16),this.g_aUy=null,this.g_aUz=[],this.g_aNe=null,this.g_aUA=null}async g_aEZ(){if(this.g_aUB)throw new Error("already initialised");this.g_aUB=!0;const c=this.g_aUx.g_aTE("dispatchWorker.js");this.g_aUy=await this.g_aUx.g_aTF(c,this.g_aJx,{name:"DispatchWorker"});const a=new MessageChannel;this.g_aNe=a.port1,this.g_aUy.postMessage({type:"_init","in-port":a.port2},[a.port2]),this.g_aUA=await this.g_aTO()}async g_aTO(){const f=this.g_aUz.length,a=this.g_aUx.g_aTE("jobWorker.js"),b=await this.g_aUx.g_aTF(a,this.g_aJx,{name:"JobWorker"+f}),c=new MessageChannel,d=new MessageChannel;return this.g_aUy.postMessage({type:"_addJobWorker",port:c.port1},[c.port1]),b.postMessage({type:"init",number:f,"dispatch-port":c.port2,"output-port":d.port2},[c.port2,d.port2]),this.g_aUz.push(b),d.port1}g_aTJ(){return{inputPort:this.g_aNe,outputPort:this.g_aUA,maxNumWorkers:this.g_aNg}}g_aTM(){return[this.g_aNe,this.g_aUA]}}}if("use strict",window.C3_IsSupported){"undefined"!=typeof OffscreenCanvas;window.c3_runtimeInterface=new g_aS$({g_aTb:!1,g_aTK:"workerMain.js",g_aTv:["scripts/c3runtime.js"],g_aTe:"scripts/",g_fI:"html5"})}{function g(b){b.stopPropagation()}function a(b){13!==b.which&&27!==b.which&&b.stopPropagation()}const b=class extends g_aSK{constructor(b){super(b,"text-input"),this.g_aSV("scroll-to-bottom",b=>this.g_aUC(b))}g_aBi(b,c){let d;const h=c.type;return"textarea"===h?(d=document.createElement("textarea"),d.style.resize="none"):(d=document.createElement("input"),d.type=h),d.style.position="absolute",d.autocomplete="off",d.addEventListener("touchstart",g),d.addEventListener("touchmove",g),d.addEventListener("touchend",g),d.addEventListener("mousedown",g),d.addEventListener("mouseup",g),d.addEventListener("keydown",a),d.addEventListener("keyup",a),d.addEventListener("click",c=>{c.stopPropagation(),this.g_aSY("click",b)}),d.addEventListener("dblclick",c=>{c.stopPropagation(),this.g_aSY("dblclick",b)}),d.addEventListener("input",()=>this.g_aSX("change",b,{text:d.value})),this.g_aSZ(d,c),d}g_aSZ(c,a){c.value=a.text,c.placeholder=a.placeholder,c.title=a.title,c.disabled=!a.isEnabled,c.readOnly=a.isReadOnly,c.spellcheck=a.spellCheck,c.id=a.id}g_aUC(b){b.scrollTop=b.scrollHeight}};g_aS$.g_aTT(b)}{function g(b){b.stopPropagation()}const a=class extends g_aSK{constructor(b){super(b,"button")}g_aBi(a,b){const c=document.createElement("input"),d=b.isCheckbox;let e=c;if(d){c.type="checkbox";const b=document.createElement("label");b.appendChild(c),b.appendChild(document.createTextNode("")),b.style.fontFamily="sans-serif",b.style.g_aUD="none",b.style.webkitUserSelect="none",b.style.display="inline-block",b.style.color="black",e=b}else c.type="button";return e.style.position="absolute",e.addEventListener("touchstart",g),e.addEventListener("touchmove",g),e.addEventListener("touchend",g),e.addEventListener("mousedown",g),e.addEventListener("mouseup",g),e.addEventListener("keydown",g),e.addEventListener("keyup",g),c.addEventListener("click",()=>this.g_aSY("click",a,{isChecked:c.checked})),this.g_aSZ(e,b),e}g_aUE(b){return"input"===b.tagName.toLowerCase()?b:b.firstChild}g_aSZ(d,a){const b=this.g_aUE(d);b.id=a.id,b.checked=a.isChecked,b.disabled=!a.isEnabled,d.title=a.title,d.style.display=a.isVisible?"":"none",d===b?b.value=a.text:d.lastChild.textContent=a.text}};g_aS$.g_aTT(a)}{const b=class extends g_aSr{constructor(b){super(b,"browser"),this.g_aJC="",this.g_aSD("get-initial-state",b=>this.g_aUF(b)),this.g_aSD("ready-for-sw-messages",()=>this.g_aUG()),this.g_aSD("alert",b=>this.g_aUH(b)),this.g_aSD("close",()=>this.g_aUI()),this.g_aSD("set-focus",b=>this.g_aSS(b)),this.g_aSD("vibrate",b=>this.g_aUJ(b)),this.g_aSD("lock-orientation",b=>this.g_aUK(b)),this.g_aSD("unlock-orientation",()=>this.g_aUL()),this.g_aSD("navigate",b=>this.g_aUM(b)),this.g_aSD("request-fullscreen",()=>this.g_aUN()),this.g_aSD("exit-fullscreen",()=>this.g_aUO()),window.addEventListener("online",()=>this.g_aQE(!0)),window.addEventListener("offline",()=>this.g_aQE(!1)),document.addEventListener("backbutton",()=>this.g_aUP()),"undefined"!=typeof Windows&&Windows.UI.Core.SystemNavigationManager.getForCurrentView().addEventListener("backrequested",b=>this.g_aUQ(b))}g_aUF(b){return this.g_aJC=b.exportType,{location:location.toString(),isOnline:!!navigator.onLine,referrer:document.referrer,title:document.title,isCookieEnabled:!!navigator.cookieEnabled,screenWidth:screen.width,screenHeight:screen.height,windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,isScirraArcade:"undefined"!=typeof window.is_scirra_arcade}}g_aUG(){window.C3_RegisterSW&&window.OfflineClientInfo&&window.OfflineClientInfo.SetMessageCallback(b=>this.g_aSw("sw-message",b.data))}g_aQE(b){this.g_aSw("online-state",{isOnline:b})}g_aUP(){this.g_aSw("backbutton")}g_aUQ(b){b.handled=!0,this.g_aSw("backbutton")}g_aUR(){return"nwjs"===this.g_aJC?nw.Window.get():null}g_aUH(b){alert(b.message)}g_aUI(){navigator.app&&navigator.app.exitApp?navigator.app.exitApp():navigator.device&&navigator.device.exitApp?navigator.device.exitApp():window.close()}g_aSS(c){const d=c.isFocus;if("nwjs"===this.g_aJC){const b=this.g_aUR();d?b.focus():b.blur()}else d?window.focus():window.blur()}g_aUJ(b){navigator.vibrate&&navigator.vibrate(b.pattern)}g_aUK(c){const d=c.orientation;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(d).catch(b=>console.warn("[Construct 3] Failed to lock orientation: ",b));else try{let b=!1;screen.lockOrientation?b=screen.lockOrientation(d):screen.webkitLockOrientation?b=screen.webkitLockOrientation(d):screen.mozLockOrientation?b=screen.mozLockOrientation(d):screen.msLockOrientation&&(b=screen.msLockOrientation(d)),b||console.warn("[Construct 3] Failed to lock orientation")}catch(b){console.warn("[Construct 3] Failed to lock orientation: ",b)}}g_aUL(){try{screen.orientation&&screen.orientation.unlock?screen.orientation.unlock():screen.unlockOrientation?screen.unlockOrientation():screen.webkitUnlockOrientation?screen.webkitUnlockOrientation():screen.mozUnlockOrientation?screen.mozUnlockOrientation():screen.msUnlockOrientation&&screen.msUnlockOrientation()}catch(b){}}g_aUM(e){const a=e.type;if("back"===a)navigator.app&&navigator.app.backHistory?navigator.app.backHistory():window.back();else if("forward"===a)window.forward();else if("home"===a)window.g_CM();else if("reload"===a)location.reload();else if("url"===a){const a=e.url,b=e.target,c=e.exportType;"windows-uwp"===c&&"undefined"!=typeof Windows?Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(a)):navigator.app&&navigator.app.loadUrl?navigator.app.loadUrl(a,{openExternal:!0}):"cordova"===c?window.open(a,"_system"):"preview"===c?window.open(a,"_blank"):!this.g_aQD&&(2===b?window.top.location=a:1===b?window.parent.location=a:window.location=a)}else if("new-window"===a){const a=e.url,b=e.tag,c=e.exportType;"windows-uwp"===c&&"undefined"!=typeof Windows?Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(a)):navigator.app&&navigator.app.loadUrl?navigator.app.loadUrl(a,{openExternal:!0}):"cordova"===c?window.open(a,"_system"):window.open(a,b)}}g_aUN(){const b=document.documentElement;b.requestFullscreen?b.requestFullscreen():b.mozRequestFullScreen?b.mozRequestFullScreen():b.msRequestFullscreen?b.msRequestFullscreen():b.webkitRequestFullScreen&&("undefined"==typeof Element.ALLOW_KEYBOARD_INPUT?b.webkitRequestFullScreen():b.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT))}g_aUO(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}};g_aS$.g_aTT(b)}{const b=class extends g_aSr{constructor(b){super(b,"mouse"),this.g_aSD("cursor",b=>this.g_aUS(b))}g_aUS(b){document.body.style.cursor=b}};g_aS$.g_aTT(b)}