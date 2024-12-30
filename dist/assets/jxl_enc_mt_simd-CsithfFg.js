var Dt=(()=>{var Or=import.meta.url;return function(i={}){function I(){return b.buffer!=F.buffer&&O(),F}function R(){return b.buffer!=F.buffer&&O(),Br}function G(){return b.buffer!=F.buffer&&O(),Gr}function $r(){return b.buffer!=F.buffer&&O(),zr}function h(){return b.buffer!=F.buffer&&O(),Xr}function g(){return b.buffer!=F.buffer&&O(),Kr}function Le(){return b.buffer!=F.buffer&&O(),qr}function dr(){return b.buffer!=F.buffer&&O(),Jr}var i=typeof i<"u"?i:{},_r,Q;i.ready=new Promise(function(r,e){_r=r,Q=e}),globalThis.ServiceWorkerGlobalScope!==void 0&&typeof self<"u"&&caches.default!==void 0&&(globalThis.ImageData||(globalThis.ImageData=class{constructor(e,n,t){this.data=e,this.width=n,this.height=t}}),import.meta.url===void 0&&(import.meta.url="https://localhost"),self.location===void 0&&(self.location={href:""}));var Ur=Object.assign({},i),Ir="./this.program",mr=(r,e)=>{throw e},pr=typeof window=="object",z=typeof importScripts=="function",Ve=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string",y=i.ENVIRONMENT_IS_PTHREAD||!1,P="";function xr(r){return i.locateFile?i.locateFile(r,P):P+r}var vr;(pr||z)&&(z?P=self.location.href:typeof document<"u"&&document.currentScript&&(P=document.currentScript.src),Or&&(P=Or),P.indexOf("blob:")!==0?P=P.substr(0,P.replace(/[?#].*/,"").lastIndexOf("/")+1):P="",z&&(vr=r=>{var e=new XMLHttpRequest;return e.open("GET",r,!1),e.responseType="arraybuffer",e.send(null),new Uint8Array(e.response)}));var Dr=i.print||console.log.bind(console),C=i.printErr||console.warn.bind(console);Object.assign(i,Ur),Ur=null,i.arguments&&i.arguments,i.thisProgram&&(Ir=i.thisProgram),i.quit&&(mr=i.quit);var X;i.wasmBinary&&(X=i.wasmBinary);var Hr=i.noExitRuntime||!0;typeof WebAssembly!="object"&&q("no native wasm support detected");var b,jr,rr=!1,j;function Nr(r,e){r||q(e)}function Yr(r,e,n){for(var t=e+n,a="";!(e>=t);){var o=r[e++];if(!o)return a;if(!(o&128)){a+=String.fromCharCode(o);continue}var u=r[e++]&63;if((o&224)==192){a+=String.fromCharCode((o&31)<<6|u);continue}var s=r[e++]&63;if((o&240)==224?o=(o&15)<<12|u<<6|s:o=(o&7)<<18|u<<12|s<<6|r[e++]&63,o<65536)a+=String.fromCharCode(o);else{var l=o-65536;a+=String.fromCharCode(55296|l>>10,56320|l&1023)}}return a}function hr(r,e){return r?Yr(R(),r,e):""}function Lr(r,e,n,t){if(!(t>0))return 0;for(var a=n,o=n+t-1,u=0;u<r.length;++u){var s=r.charCodeAt(u);if(s>=55296&&s<=57343){var l=r.charCodeAt(++u);s=65536+((s&1023)<<10)|l&1023}if(s<=127){if(n>=o)break;e[n++]=s}else if(s<=2047){if(n+1>=o)break;e[n++]=192|s>>6,e[n++]=128|s&63}else if(s<=65535){if(n+2>=o)break;e[n++]=224|s>>12,e[n++]=128|s>>6&63,e[n++]=128|s&63}else{if(n+3>=o)break;e[n++]=240|s>>18,e[n++]=128|s>>12&63,e[n++]=128|s>>6&63,e[n++]=128|s&63}}return e[n]=0,n-a}function Be(r,e,n){return Lr(r,R(),e,n)}function Vr(r){for(var e=0,n=0;n<r.length;++n){var t=r.charCodeAt(n);t<=127?e++:t<=2047?e+=2:t>=55296&&t<=57343?(e+=4,++n):e+=3}return e}var F,Br,Gr,zr,Xr,Kr,qr,Jr;function O(){var r=b.buffer;i.HEAP8=F=new Int8Array(r),i.HEAP16=Gr=new Int16Array(r),i.HEAP32=Xr=new Int32Array(r),i.HEAPU8=Br=new Uint8Array(r),i.HEAPU16=zr=new Uint16Array(r),i.HEAPU32=Kr=new Uint32Array(r),i.HEAPF32=qr=new Float32Array(r),i.HEAPF64=Jr=new Float64Array(r)}var er=i.INITIAL_MEMORY||16777216;if(Nr(er>=65536,"INITIAL_MEMORY should be larger than STACK_SIZE, was "+er+"! (STACK_SIZE=65536)"),y)b=i.wasmMemory;else if(i.wasmMemory)b=i.wasmMemory;else if(b=new WebAssembly.Memory({initial:er/65536,maximum:32768,shared:!0}),!(b.buffer instanceof SharedArrayBuffer))throw C("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"),Ve&&C("(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and/or recent version)"),Error("bad memory");O(),er=b.buffer.byteLength;var Zr,Qr=[],re=[],ee=[],ne=0;function nr(){return Hr||ne>0}function Ge(){if(i.preRun)for(typeof i.preRun=="function"&&(i.preRun=[i.preRun]);i.preRun.length;)Xe(i.preRun.shift());wr(Qr)}function te(){y||wr(re)}function ze(){if(!y){if(i.postRun)for(typeof i.postRun=="function"&&(i.postRun=[i.postRun]);i.postRun.length;)qe(i.postRun.shift());wr(ee)}}function Xe(r){Qr.unshift(r)}function Ke(r){re.unshift(r)}function qe(r){ee.unshift(r)}var N=0,K=null;function Je(r){N++,i.monitorRunDependencies&&i.monitorRunDependencies(N)}function Ze(r){if(N--,i.monitorRunDependencies&&i.monitorRunDependencies(N),N==0&&K){var e=K;K=null,e()}}function q(r){i.onAbort&&i.onAbort(r),r="Aborted("+r+")",C(r),rr=!0,j=1,r+=". Build with -sASSERTIONS for more info.";var e=new WebAssembly.RuntimeError(r);throw Q(e),e}var Qe="data:application/octet-stream;base64,";function ie(r){return r.startsWith(Qe)}var Y;i.locateFile?(Y="jxl_enc_mt_simd.wasm",ie(Y)||(Y=xr(Y))):Y=new URL("/squish/assets/jxl_enc_mt_simd-dX2xfs-R.wasm",import.meta.url).href;function ae(r){try{if(r==Y&&X)return new Uint8Array(X);if(vr)return vr(r);throw"both async and sync fetching of the wasm failed"}catch(e){q(e)}}function rn(r){return!X&&(pr||z)&&typeof fetch=="function"?fetch(r,{credentials:"same-origin"}).then(function(e){if(!e.ok)throw"failed to load wasm binary file at '"+r+"'";return e.arrayBuffer()}).catch(function(){return ae(r)}):Promise.resolve().then(function(){return ae(r)})}function oe(r,e,n){return rn(r).then(function(t){return WebAssembly.instantiate(t,e)}).then(function(t){return t}).then(n,function(t){C("failed to asynchronously prepare wasm: "+t),q(t)})}function en(r,e,n,t){return!r&&typeof WebAssembly.instantiateStreaming=="function"&&!ie(e)&&typeof fetch=="function"?fetch(e,{credentials:"same-origin"}).then(function(a){var o=WebAssembly.instantiateStreaming(a,n);return o.then(t,function(u){return C("wasm streaming compile failed: "+u),C("falling back to ArrayBuffer instantiation"),oe(e,n,t)})}):oe(e,n,t)}function nn(){var r={a:$t};function e(t,a){var o=t.exports;return i.asm=o,ln(i.asm.U),Zr=i.asm.aa,Ke(i.asm.R),jr=a,_.loadWasmModuleToAllWorkers(()=>Ze()),o}Je();function n(t){e(t.instance,t.module)}if(i.instantiateWasm)try{return i.instantiateWasm(r,e)}catch(t){C("Module.instantiateWasm callback failed with error: "+t),Q(t)}return en(X,Y,r,n).catch(Q),{}}function gr(r){this.name="ExitStatus",this.message="Program terminated with exit("+r+")",this.status=r}function yr(r){r.terminate(),r.onmessage=e=>{}}function tn(r){var e=_.pthreads[r];delete _.pthreads[r],yr(e),Mr(r),_.runningWorkers.splice(_.runningWorkers.indexOf(e),1),e.pthread_ptr=0}function an(r){var e=_.pthreads[r];e.postMessage({cmd:"cancel"})}function ue(r){var e=_.pthreads[r];Nr(e),_.returnWorkerToPool(e)}function on(r){var e=_.getNewWorker();if(!e)return 6;_.runningWorkers.push(e),_.pthreads[r.pthread_ptr]=e,e.pthread_ptr=r.pthread_ptr;var n={cmd:"run",start_routine:r.startRoutine,arg:r.arg,pthread_ptr:r.pthread_ptr};return e.postMessage(n,r.transferList),0}function se(r){if(y)return $(1,1,r);j=r,nr()||(_.terminateAllThreads(),i.onExit&&i.onExit(r),rr=!0),mr(r,new gr(r))}function un(r,e){if(j=r,y)throw le(r),"unwind";se(r)}var br=un;function fe(r){if(r instanceof gr||r=="unwind")return j;mr(1,r)}var _={unusedWorkers:[],runningWorkers:[],tlsInitFunctions:[],pthreads:{},init:function(){y?_.initWorker():_.initMainThread()},initMainThread:function(){for(var r=navigator.hardwareConcurrency;r--;)_.allocateUnusedWorker()},initWorker:function(){Hr=!1},setExitStatus:function(r){j=r},terminateAllThreads__deps:["$terminateWorker"],terminateAllThreads:function(){for(var r of _.runningWorkers)yr(r);for(var r of _.unusedWorkers)yr(r);_.unusedWorkers=[],_.runningWorkers=[],_.pthreads=[]},returnWorkerToPool:function(r){var e=r.pthread_ptr;delete _.pthreads[e],_.unusedWorkers.push(r),_.runningWorkers.splice(_.runningWorkers.indexOf(r),1),r.pthread_ptr=0,Mr(e)},receiveObjectTransfer:function(r){},threadInitTLS:function(){_.tlsInitFunctions.forEach(r=>r())},loadWasmModuleToWorker:r=>new Promise(e=>{r.onmessage=o=>{var u=o.data,s=u.cmd;if(r.pthread_ptr&&(_.currentProxiedOperationCallerThread=r.pthread_ptr),u.targetThread&&u.targetThread!=fr()){var l=_.pthreads[u.targetThread];l?l.postMessage(u,u.transferList):C('Internal error! Worker sent a message "'+s+'" to target pthread '+u.targetThread+", but that thread no longer exists!"),_.currentProxiedOperationCallerThread=void 0;return}s==="checkMailbox"?ur():s==="spawnThread"?on(u):s==="cleanupThread"?ue(u.thread):s==="killThread"?tn(u.thread):s==="cancelThread"?an(u.thread):s==="loaded"?(r.loaded=!0,e(r)):s==="print"?Dr("Thread "+u.threadId+": "+u.text):s==="printErr"?C("Thread "+u.threadId+": "+u.text):s==="alert"?alert("Thread "+u.threadId+": "+u.text):u.target==="setimmediate"?r.postMessage(u):s==="callHandler"?i[u.handler](...u.args):s&&C("worker sent an unknown command "+s),_.currentProxiedOperationCallerThread=void 0},r.onerror=o=>{var u="worker sent an error!";throw C(u+" "+o.filename+":"+o.lineno+": "+o.message),o};var n=[],t=["onExit","onAbort","print","printErr"];for(var a of t)i.hasOwnProperty(a)&&n.push(a);r.postMessage({cmd:"load",handlers:n,urlOrBlob:i.mainScriptUrlOrBlob,wasmMemory:b,wasmModule:jr})}),loadWasmModuleToAllWorkers:function(r){if(y)return r();Promise.all(_.unusedWorkers.map(_.loadWasmModuleToWorker)).then(r)},allocateUnusedWorker:function(){var r;if(!i.locateFile)r=new Worker(self.location.href);else{var e=xr("jxl_enc_mt_simd.worker.js");r=new Worker(e)}_.unusedWorkers.push(r)},getNewWorker:function(){return _.unusedWorkers.length==0&&(_.allocateUnusedWorker(),_.loadWasmModuleToWorker(_.unusedWorkers[0])),_.unusedWorkers.pop()}};i.PThread=_;function wr(r){for(;r.length>0;)r.shift()(i)}function sn(){var r=fr(),e=h()[r+52>>2],n=h()[r+56>>2],t=e-n;De(e,t),Fr(e)}i.establishStackSpace=sn;function le(r){if(y)return $(2,0,r);br(r)}var tr=[];function Ar(r){var e=tr[r];return e||(r>=tr.length&&(tr.length=r+1),tr[r]=e=Zr.get(r)),e}function fn(r,e){var n=Ar(r)(e);nr()?_.setExitStatus(n):Pr(n)}i.invokeEntryPoint=fn;function ln(r){_.tlsInitFunctions.push(r)}function cn(r){this.excPtr=r,this.ptr=r-24,this.set_type=function(e){g()[this.ptr+4>>2]=e},this.get_type=function(){return g()[this.ptr+4>>2]},this.set_destructor=function(e){g()[this.ptr+8>>2]=e},this.get_destructor=function(){return g()[this.ptr+8>>2]},this.set_refcount=function(e){h()[this.ptr>>2]=e},this.set_caught=function(e){e=e?1:0,I()[this.ptr+12>>0]=e},this.get_caught=function(){return I()[this.ptr+12>>0]!=0},this.set_rethrown=function(e){e=e?1:0,I()[this.ptr+13>>0]=e},this.get_rethrown=function(){return I()[this.ptr+13>>0]!=0},this.init=function(e,n){this.set_adjusted_ptr(0),this.set_type(e),this.set_destructor(n),this.set_refcount(0),this.set_caught(!1),this.set_rethrown(!1)},this.add_ref=function(){Atomics.add(h(),this.ptr+0>>2,1)},this.release_ref=function(){var e=Atomics.sub(h(),this.ptr+0>>2,1);return e===1},this.set_adjusted_ptr=function(e){g()[this.ptr+16>>2]=e},this.get_adjusted_ptr=function(){return g()[this.ptr+16>>2]},this.get_exception_ptr=function(){var e=Ne(this.get_type());if(e)return g()[this.excPtr>>2];var n=this.get_adjusted_ptr();return n!==0?n:this.excPtr}}function dn(r,e,n){var t=new cn(r);throw t.init(e,n),r}function _n(r){Ue(r,!z,1,!pr),_.threadInitTLS()}function mn(r){y?postMessage({cmd:"cleanupThread",thread:r}):ue(r)}function ce(r,e,n){return y?$(3,1,r,e,n):0}function de(r,e,n,t){if(y)return $(4,1,r,e,n,t)}var ir={};function _e(r){for(;r.length;){var e=r.pop(),n=r.pop();n(e)}}function ar(r){return this.fromWireType(h()[r>>2])}var V={},L={},or={},pn=48,vn=57;function hn(r){if(r===void 0)return"_unknown";r=r.replace(/[^a-zA-Z0-9_]/g,"$");var e=r.charCodeAt(0);return e>=pn&&e<=vn?"_"+r:r}function gn(r,e){return r=hn(r),{[r]:function(){return e.apply(this,arguments)}}[r]}function Tr(r,e){var n=gn(e,function(t){this.name=e,this.message=t;var a=new Error(t).stack;a!==void 0&&(this.stack=this.toString()+`
`+a.replace(/^Error(:[^\n]*)?\n/,""))});return n.prototype=Object.create(r.prototype),n.prototype.constructor=n,n.prototype.toString=function(){return this.message===void 0?this.name:this.name+": "+this.message},n}var me=void 0;function pe(r){throw new me(r)}function ve(r,e,n){r.forEach(function(s){or[s]=e});function t(s){var l=n(s);l.length!==r.length&&pe("Mismatched type converter count");for(var c=0;c<r.length;++c)x(r[c],l[c])}var a=new Array(e.length),o=[],u=0;e.forEach((s,l)=>{L.hasOwnProperty(s)?a[l]=L[s]:(o.push(s),V.hasOwnProperty(s)||(V[s]=[]),V[s].push(()=>{a[l]=L[s],++u,u===o.length&&t(a)}))}),o.length===0&&t(a)}function yn(r){var e=ir[r];delete ir[r];var n=e.rawConstructor,t=e.rawDestructor,a=e.fields,o=a.map(u=>u.getterReturnType).concat(a.map(u=>u.setterArgumentType));ve([r],o,u=>{var s={};return a.forEach((l,c)=>{var v=l.fieldName,m=u[c],p=l.getter,T=l.getterContext,S=u[c+a.length],U=l.setter,k=l.setterContext;s[v]={read:H=>m.fromWireType(p(T,H)),write:(H,f)=>{var d=[];U(k,H,S.toWireType(d,f)),_e(d)}}}),[{name:e.name,fromWireType:function(l){var c={};for(var v in s)c[v]=s[v].read(l);return t(l),c},toWireType:function(l,c){for(var v in s)if(!(v in c))throw new TypeError('Missing field:  "'+v+'"');var m=n();for(v in s)s[v].write(m,c[v]);return l!==null&&l.push(t,m),m},argPackAdvance:8,readValueFromPointer:ar,destructorFunction:t}]})}function bn(r,e,n,t,a){}function Er(r){switch(r){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+r)}}function wn(){for(var r=new Array(256),e=0;e<256;++e)r[e]=String.fromCharCode(e);he=r}var he=void 0;function E(r){for(var e="",n=r;R()[n];)e+=he[R()[n++]];return e}var ge=void 0;function W(r){throw new ge(r)}function x(r,e,n={}){if(!("argPackAdvance"in e))throw new TypeError("registerType registeredInstance requires argPackAdvance");var t=e.name;if(r||W('type "'+t+'" must have a positive integer typeid pointer'),L.hasOwnProperty(r)){if(n.ignoreDuplicateRegistrations)return;W("Cannot register type '"+t+"' twice")}if(L[r]=e,delete or[r],V.hasOwnProperty(r)){var a=V[r];delete V[r],a.forEach(o=>o())}}function An(r,e,n,t,a){var o=Er(n);e=E(e),x(r,{name:e,fromWireType:function(u){return!!u},toWireType:function(u,s){return s?t:a},argPackAdvance:8,readValueFromPointer:function(u){var s;if(n===1)s=I();else if(n===2)s=G();else if(n===4)s=h();else throw new TypeError("Unknown boolean type size: "+e);return this.fromWireType(s[u>>o])},destructorFunction:null})}var kr=[],M=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function ye(r){r>4&&--M[r].refcount===0&&(M[r]=void 0,kr.push(r))}function Tn(){for(var r=0,e=5;e<M.length;++e)M[e]!==void 0&&++r;return r}function En(){for(var r=5;r<M.length;++r)if(M[r]!==void 0)return M[r];return null}function kn(){i.count_emval_handles=Tn,i.get_first_emval=En}var B={toValue:r=>(r||W("Cannot use deleted val. handle = "+r),M[r].value),toHandle:r=>{switch(r){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:{var e=kr.length?kr.pop():M.length;return M[e]={refcount:1,value:r},e}}}};function Wn(r,e){e=E(e),x(r,{name:e,fromWireType:function(n){var t=B.toValue(n);return ye(n),t},toWireType:function(n,t){return B.toHandle(t)},argPackAdvance:8,readValueFromPointer:ar,destructorFunction:null})}function Sn(r,e){switch(e){case 2:return function(n){return this.fromWireType(Le()[n>>2])};case 3:return function(n){return this.fromWireType(dr()[n>>3])};default:throw new TypeError("Unknown float type: "+r)}}function Rn(r,e,n){var t=Er(n);e=E(e),x(r,{name:e,fromWireType:function(a){return a},toWireType:function(a,o){return o},argPackAdvance:8,readValueFromPointer:Sn(e,t),destructorFunction:null})}function Cn(r,e,n,t,a,o){var u=e.length;u<2&&W("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var s=e[1]!==null&&n!==null,l=!1,c=1;c<e.length;++c)if(e[c]!==null&&e[c].destructorFunction===void 0){l=!0;break}var v=e[0].name!=="void",m=u-2,p=new Array(m),T=[],S=[];return function(){arguments.length!==m&&W("function "+r+" called with "+arguments.length+" arguments, expected "+m+" args!"),S.length=0;var U;T.length=s?2:1,T[0]=a,s&&(U=e[1].toWireType(S,this),T[1]=U);for(var k=0;k<m;++k)p[k]=e[k+2].toWireType(S,arguments[k]),T.push(p[k]);var H=t.apply(null,T);function f(d){if(l)_e(S);else for(var w=s?1:2;w<e.length;w++){var A=w===1?U:p[w-2];e[w].destructorFunction!==null&&e[w].destructorFunction(A)}if(v)return e[0].fromWireType(d)}return f(H)}}function Mn(r,e,n){if(r[e].overloadTable===void 0){var t=r[e];r[e]=function(){return r[e].overloadTable.hasOwnProperty(arguments.length)||W("Function '"+n+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+r[e].overloadTable+")!"),r[e].overloadTable[arguments.length].apply(this,arguments)},r[e].overloadTable=[],r[e].overloadTable[t.argCount]=t}}function Pn(r,e,n){i.hasOwnProperty(r)?((n===void 0||i[r].overloadTable!==void 0&&i[r].overloadTable[n]!==void 0)&&W("Cannot register public name '"+r+"' twice"),Mn(i,r,r),i.hasOwnProperty(n)&&W("Cannot register multiple overloads of a function with the same number of arguments ("+n+")!"),i[r].overloadTable[n]=e):(i[r]=e,n!==void 0&&(i[r].numArguments=n))}function Fn(r,e){for(var n=[],t=0;t<r;t++)n.push(g()[e+t*4>>2]);return n}function On(r,e,n){i.hasOwnProperty(r)||pe("Replacing nonexistant public symbol"),i[r].overloadTable!==void 0&&n!==void 0?i[r].overloadTable[n]=e:(i[r]=e,i[r].argCount=n)}function $n(r,e,n){var t=i["dynCall_"+r];return n&&n.length?t.apply(null,[e].concat(n)):t.call(null,e)}function Un(r,e,n){if(r.includes("j"))return $n(r,e,n);var t=Ar(e).apply(null,n);return t}function In(r,e){var n=[];return function(){return n.length=0,Object.assign(n,arguments),Un(r,e,n)}}function J(r,e){r=E(r);function n(){return r.includes("j")?In(r,e):Ar(e)}var t=n();return typeof t!="function"&&W("unknown function pointer with signature "+r+": "+e),t}var be=void 0;function we(r){var e=Oe(r),n=E(e);return D(e),n}function xn(r,e){var n=[],t={};function a(o){if(!t[o]&&!L[o]){if(or[o]){or[o].forEach(a);return}n.push(o),t[o]=!0}}throw e.forEach(a),new be(r+": "+n.map(we).join([", "]))}function Dn(r,e,n,t,a,o,u){var s=Fn(e,n);r=E(r),a=J(t,a),Pn(r,function(){xn("Cannot call "+r+" due to unbound types",s)},e-1),ve([],s,function(l){var c=[l[0],null].concat(l.slice(1));return On(r,Cn(r,c,null,a,o),e-1),[]})}function Hn(r,e,n){switch(e){case 0:return n?function(a){return I()[a]}:function(a){return R()[a]};case 1:return n?function(a){return G()[a>>1]}:function(a){return $r()[a>>1]};case 2:return n?function(a){return h()[a>>2]}:function(a){return g()[a>>2]};default:throw new TypeError("Unknown integer type: "+r)}}function jn(r,e,n,t,a){e=E(e);var o=Er(n),u=m=>m;if(t===0){var s=32-8*n;u=m=>m<<s>>>s}var l=e.includes("unsigned"),c=(m,p)=>{},v;l?v=function(m,p){return c(p,this.name),p>>>0}:v=function(m,p){return c(p,this.name),p},x(r,{name:e,fromWireType:u,toWireType:v,argPackAdvance:8,readValueFromPointer:Hn(e,o,t!==0),destructorFunction:null})}function Nn(r,e,n){var t=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],a=t[e];function o(u){u=u>>2;var s=g(),l=s[u],c=s[u+1];return new a(s.buffer,c,l)}n=E(n),x(r,{name:n,fromWireType:o,argPackAdvance:8,readValueFromPointer:o},{ignoreDuplicateRegistrations:!0})}function Yn(r,e){e=E(e);var n=e==="std::string";x(r,{name:e,fromWireType:function(t){var a=g()[t>>2],o=t+4,u;if(n)for(var s=o,l=0;l<=a;++l){var c=o+l;if(l==a||R()[c]==0){var v=c-s,m=hr(s,v);u===void 0?u=m:(u+="\0",u+=m),s=c+1}}else{for(var p=new Array(a),l=0;l<a;++l)p[l]=String.fromCharCode(R()[o+l]);u=p.join("")}return D(t),u},toWireType:function(t,a){a instanceof ArrayBuffer&&(a=new Uint8Array(a));var o,u=typeof a=="string";u||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int8Array||W("Cannot pass non-string to std::string"),n&&u?o=Vr(a):o=a.length;var s=Cr(4+o+1),l=s+4;if(g()[s>>2]=o,n&&u)Be(a,l,o+1);else if(u)for(var c=0;c<o;++c){var v=a.charCodeAt(c);v>255&&(D(l),W("String has UTF-16 code units that do not fit in 8 bits")),R()[l+c]=v}else for(var c=0;c<o;++c)R()[l+c]=a[c];return t!==null&&t.push(D,s),s},argPackAdvance:8,readValueFromPointer:ar,destructorFunction:function(t){D(t)}})}function Ln(r,e){for(var n="",t=0;!(t>=e/2);++t){var a=G()[r+t*2>>1];if(a==0)break;n+=String.fromCharCode(a)}return n}function Vn(r,e,n){if(n===void 0&&(n=2147483647),n<2)return 0;n-=2;for(var t=e,a=n<r.length*2?n/2:r.length,o=0;o<a;++o){var u=r.charCodeAt(o);G()[e>>1]=u,e+=2}return G()[e>>1]=0,e-t}function Bn(r){return r.length*2}function Gn(r,e){for(var n=0,t="";!(n>=e/4);){var a=h()[r+n*4>>2];if(a==0)break;if(++n,a>=65536){var o=a-65536;t+=String.fromCharCode(55296|o>>10,56320|o&1023)}else t+=String.fromCharCode(a)}return t}function zn(r,e,n){if(n===void 0&&(n=2147483647),n<4)return 0;for(var t=e,a=t+n-4,o=0;o<r.length;++o){var u=r.charCodeAt(o);if(u>=55296&&u<=57343){var s=r.charCodeAt(++o);u=65536+((u&1023)<<10)|s&1023}if(h()[e>>2]=u,e+=4,e+4>a)break}return h()[e>>2]=0,e-t}function Xn(r){for(var e=0,n=0;n<r.length;++n){var t=r.charCodeAt(n);t>=55296&&t<=57343&&++n,e+=4}return e}function Kn(r,e,n){n=E(n);var t,a,o,u,s;e===2?(t=Ln,a=Vn,u=Bn,o=()=>$r(),s=1):e===4&&(t=Gn,a=zn,u=Xn,o=()=>g(),s=2),x(r,{name:n,fromWireType:function(l){for(var c=g()[l>>2],v=o(),m,p=l+4,T=0;T<=c;++T){var S=l+4+T*e;if(T==c||v[S>>s]==0){var U=S-p,k=t(p,U);m===void 0?m=k:(m+="\0",m+=k),p=S+e}}return D(l),m},toWireType:function(l,c){typeof c!="string"&&W("Cannot pass non-string to C++ string type "+n);var v=u(c),m=Cr(4+v+e);return g()[m>>2]=v>>s,a(c,m+4,v+e),l!==null&&l.push(D,m),m},argPackAdvance:8,readValueFromPointer:ar,destructorFunction:function(l){D(l)}})}function qn(r,e,n,t,a,o){ir[r]={name:E(e),rawConstructor:J(n,t),rawDestructor:J(a,o),fields:[]}}function Jn(r,e,n,t,a,o,u,s,l,c){ir[r].fields.push({fieldName:E(e),getterReturnType:n,getter:J(t,a),getterContext:o,setterArgumentType:u,setter:J(s,l),setterContext:c})}function Zn(r,e){e=E(e),x(r,{isVoid:!0,name:e,argPackAdvance:0,fromWireType:function(){},toWireType:function(n,t){}})}function Qn(){if(!nr())try{y?Pr(j):br(j)}catch(r){fe(r)}}function rt(r){if(!rr)try{r(),Qn()}catch(e){fe(e)}}function Wr(r){if(typeof Atomics.waitAsync=="function"){var e=Atomics.waitAsync(h(),r>>2,r);e.value.then(ur);var n=r+128;Atomics.store(h(),n>>2,1)}}i.__emscripten_thread_mailbox_await=Wr;function ur(){var r=fr();r&&(Wr(r),rt(()=>xe()))}i.checkMailbox=ur;function et(r,e,n){if(r==e)setTimeout(()=>ur());else if(y)postMessage({targetThread:r,cmd:"checkMailbox"});else{var t=_.pthreads[r];if(!t)return;t.postMessage({cmd:"checkMailbox"})}}function nt(r,e,n){return-1}var tt={};function it(r){var e=tt[r];return e===void 0?E(r):e}function Ae(){if(typeof globalThis=="object")return globalThis;function r(e){e.$$$embind_global$$$=e;var n=typeof $$$embind_global$$$=="object"&&e.$$$embind_global$$$==e;return n||delete e.$$$embind_global$$$,n}if(typeof $$$embind_global$$$=="object"||(typeof global=="object"&&r(global)?$$$embind_global$$$=global:typeof self=="object"&&r(self)&&($$$embind_global$$$=self),typeof $$$embind_global$$$=="object"))return $$$embind_global$$$;throw Error("unable to get global object.")}function at(r){return r===0?B.toHandle(Ae()):(r=it(r),B.toHandle(Ae()[r]))}function ot(r){r>4&&(M[r].refcount+=1)}function ut(r,e){var n=L[r];return n===void 0&&W(e+" has unknown type "+we(r)),n}function st(r){var e=new Array(r+1);return function(n,t,a){e[0]=n;for(var o=0;o<r;++o){var u=ut(g()[t+o*4>>2],"parameter "+o);e[o+1]=u.readValueFromPointer(a),a+=u.argPackAdvance}var s=new(n.bind.apply(n,e));return B.toHandle(s)}}var Te={};function ft(r,e,n,t){r=B.toValue(r);var a=Te[e];return a||(a=st(e),Te[e]=a),a(r,n,t)}function lt(){q("")}function ct(){}function dt(){ne+=1}function _t(){throw dt(),"unwind"}var Ee;Ee=()=>performance.timeOrigin+performance.now();function mt(r,e,n){R().copyWithin(r,e,e+n)}function pt(){return navigator.hardwareConcurrency}function vt(r){var e=He(),n=r();return Fr(e),n}function $(r,e){var n=arguments.length-2,t=arguments;return vt(()=>{for(var a=n,o=je(a*8),u=o>>3,s=0;s<n;s++){var l=t[2+s];dr()[u+s]=l}return Ie(r,a,o,e)})}var Sr=[];function ht(r,e,n){Sr.length=e;for(var t=n>>3,a=0;a<e;a++)Sr[a]=dr()[t+a];var o=Ot[r];return o.apply(null,Sr)}function gt(){return 2147483648}function yt(r){var e=b.buffer;try{return b.grow(r-e.byteLength+65535>>>16),O(),1}catch{}}function bt(r){var e=R().length;if(r=r>>>0,r<=e)return!1;var n=gt();if(r>n)return!1;let t=(l,c)=>l+(c-l%c)%c;for(var a=1;a<=4;a*=2){var o=e*(1+.2/a);o=Math.min(o,r+100663296);var u=Math.min(n,t(Math.max(r,o),65536)),s=yt(u);if(s)return!0}return!1}var Rr={};function wt(){return Ir||"./this.program"}function Z(){if(!Z.strings){var r=(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",e={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:r,_:wt()};for(var n in Rr)Rr[n]===void 0?delete e[n]:e[n]=Rr[n];var t=[];for(var n in e)t.push(n+"="+e[n]);Z.strings=t}return Z.strings}function At(r,e,n){for(var t=0;t<r.length;++t)I()[e++>>0]=r.charCodeAt(t);I()[e>>0]=0}function ke(r,e){if(y)return $(5,1,r,e);var n=0;return Z().forEach(function(t,a){var o=e+n;g()[r+a*4>>2]=o,At(t,o),n+=t.length+1}),0}function We(r,e){if(y)return $(6,1,r,e);var n=Z();g()[r>>2]=n.length;var t=0;return n.forEach(function(a){t+=a.length+1}),g()[e>>2]=t,0}function Se(r){return y?$(7,1,r):52}function Re(r,e,n,t){return y?$(8,1,r,e,n,t):52}function Ce(r,e,n,t,a){return y?$(9,1,r,e,n,t,a):70}var Tt=[null,[],[]];function Et(r,e){var n=Tt[r];e===0||e===10?((r===1?Dr:C)(Yr(n,0)),n.length=0):n.push(e)}function Me(r,e,n,t){if(y)return $(10,1,r,e,n,t);for(var a=0,o=0;o<n;o++){var u=g()[e>>2],s=g()[e+4>>2];e+=8;for(var l=0;l<s;l++)Et(r,R()[u+l]);a+=s}return g()[t>>2]=a,0}function sr(r){return r%4===0&&(r%100!==0||r%400===0)}function kt(r,e){for(var n=0,t=0;t<=e;n+=r[t++]);return n}var Pe=[31,29,31,30,31,30,31,31,30,31,30,31],Fe=[31,28,31,30,31,30,31,31,30,31,30,31];function Wt(r,e){for(var n=new Date(r.getTime());e>0;){var t=sr(n.getFullYear()),a=n.getMonth(),o=(t?Pe:Fe)[a];if(e>o-n.getDate())e-=o-n.getDate()+1,n.setDate(1),a<11?n.setMonth(a+1):(n.setMonth(0),n.setFullYear(n.getFullYear()+1));else return n.setDate(n.getDate()+e),n}return n}function St(r,e,n){var t=Vr(r)+1,a=new Array(t);return Lr(r,a,0,a.length),a}function Rt(r,e){I().set(r,e)}function Ct(r,e,n,t){var a=h()[t+40>>2],o={tm_sec:h()[t>>2],tm_min:h()[t+4>>2],tm_hour:h()[t+8>>2],tm_mday:h()[t+12>>2],tm_mon:h()[t+16>>2],tm_year:h()[t+20>>2],tm_wday:h()[t+24>>2],tm_yday:h()[t+28>>2],tm_isdst:h()[t+32>>2],tm_gmtoff:h()[t+36>>2],tm_zone:a?hr(a):""},u=hr(n),s={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var l in s)u=u.replace(new RegExp(l,"g"),s[l]);var c=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],v=["January","February","March","April","May","June","July","August","September","October","November","December"];function m(f,d,w){for(var A=typeof f=="number"?f.toString():f||"";A.length<d;)A=w[0]+A;return A}function p(f,d){return m(f,d,"0")}function T(f,d){function w(cr){return cr<0?-1:cr>0?1:0}var A;return(A=w(f.getFullYear()-d.getFullYear()))===0&&(A=w(f.getMonth()-d.getMonth()))===0&&(A=w(f.getDate()-d.getDate())),A}function S(f){switch(f.getDay()){case 0:return new Date(f.getFullYear()-1,11,29);case 1:return f;case 2:return new Date(f.getFullYear(),0,3);case 3:return new Date(f.getFullYear(),0,2);case 4:return new Date(f.getFullYear(),0,1);case 5:return new Date(f.getFullYear()-1,11,31);case 6:return new Date(f.getFullYear()-1,11,30)}}function U(f){var d=Wt(new Date(f.tm_year+1900,0,1),f.tm_yday),w=new Date(d.getFullYear(),0,4),A=new Date(d.getFullYear()+1,0,4),cr=S(w),Ut=S(A);return T(cr,d)<=0?T(Ut,d)<=0?d.getFullYear()+1:d.getFullYear():d.getFullYear()-1}var k={"%a":function(f){return c[f.tm_wday].substring(0,3)},"%A":function(f){return c[f.tm_wday]},"%b":function(f){return v[f.tm_mon].substring(0,3)},"%B":function(f){return v[f.tm_mon]},"%C":function(f){var d=f.tm_year+1900;return p(d/100|0,2)},"%d":function(f){return p(f.tm_mday,2)},"%e":function(f){return m(f.tm_mday,2," ")},"%g":function(f){return U(f).toString().substring(2)},"%G":function(f){return U(f)},"%H":function(f){return p(f.tm_hour,2)},"%I":function(f){var d=f.tm_hour;return d==0?d=12:d>12&&(d-=12),p(d,2)},"%j":function(f){return p(f.tm_mday+kt(sr(f.tm_year+1900)?Pe:Fe,f.tm_mon-1),3)},"%m":function(f){return p(f.tm_mon+1,2)},"%M":function(f){return p(f.tm_min,2)},"%n":function(){return`
`},"%p":function(f){return f.tm_hour>=0&&f.tm_hour<12?"AM":"PM"},"%S":function(f){return p(f.tm_sec,2)},"%t":function(){return"	"},"%u":function(f){return f.tm_wday||7},"%U":function(f){var d=f.tm_yday+7-f.tm_wday;return p(Math.floor(d/7),2)},"%V":function(f){var d=Math.floor((f.tm_yday+7-(f.tm_wday+6)%7)/7);if((f.tm_wday+371-f.tm_yday-2)%7<=2&&d++,d){if(d==53){var A=(f.tm_wday+371-f.tm_yday)%7;A!=4&&(A!=3||!sr(f.tm_year))&&(d=1)}}else{d=52;var w=(f.tm_wday+7-f.tm_yday-1)%7;(w==4||w==5&&sr(f.tm_year%400-1))&&d++}return p(d,2)},"%w":function(f){return f.tm_wday},"%W":function(f){var d=f.tm_yday+7-(f.tm_wday+6)%7;return p(Math.floor(d/7),2)},"%y":function(f){return(f.tm_year+1900).toString().substring(2)},"%Y":function(f){return f.tm_year+1900},"%z":function(f){var d=f.tm_gmtoff,w=d>=0;return d=Math.abs(d)/60,d=d/60*100+d%60,(w?"+":"-")+("0000"+d).slice(-4)},"%Z":function(f){return f.tm_zone},"%%":function(){return"%"}};u=u.replace(/%%/g,"\0\0");for(var l in k)u.includes(l)&&(u=u.replace(new RegExp(l,"g"),k[l](o)));u=u.replace(/\0\0/g,"%");var H=St(u);return H.length>e?0:(Rt(H,r),H.length-1)}function Mt(r,e,n,t,a){return Ct(r,e,n,t)}function Pt(r){return h()[$e()>>2]=r,r}function Ft(r){return r?(Pt(52),-1):0}_.init(),me=i.InternalError=Tr(Error,"InternalError"),wn(),ge=i.BindingError=Tr(Error,"BindingError"),kn(),be=i.UnboundTypeError=Tr(Error,"UnboundTypeError");var Ot=[null,se,le,ce,de,ke,We,Se,Re,Ce,Me],$t={l:dn,G:_n,i:mn,J:ce,K:de,r:yn,t:bn,N:An,M:Wn,m:Rn,q:Dn,d:jn,c:Nn,n:Yn,h:Kn,C:qn,e:Jn,O:Zn,z:et,E:nt,F:Wr,g:ye,Q:at,p:ot,o:ft,b:lt,j:ct,L:_t,f:Ee,B:mt,u:pt,D:ht,y:bt,w:ke,x:We,A:br,k:Se,I:Re,s:Ce,H:Me,a:b||i.wasmMemory,v:Mt,P:Ft};nn();var Cr=function(){return(Cr=i.asm.S).apply(null,arguments)},D=function(){return(D=i.asm.T).apply(null,arguments)};i.__emscripten_tls_init=function(){return(i.__emscripten_tls_init=i.asm.U).apply(null,arguments)};var fr=i._pthread_self=function(){return(fr=i._pthread_self=i.asm.V).apply(null,arguments)},Oe=i.___getTypeName=function(){return(Oe=i.___getTypeName=i.asm.W).apply(null,arguments)};i.__embind_initialize_bindings=function(){return(i.__embind_initialize_bindings=i.asm.X).apply(null,arguments)};var $e=function(){return($e=i.asm.Y).apply(null,arguments)},Ue=i.__emscripten_thread_init=function(){return(Ue=i.__emscripten_thread_init=i.asm.Z).apply(null,arguments)};i.__emscripten_thread_crashed=function(){return(i.__emscripten_thread_crashed=i.asm._).apply(null,arguments)};var Ie=function(){return(Ie=i.asm.$).apply(null,arguments)},Mr=function(){return(Mr=i.asm.ba).apply(null,arguments)},Pr=i.__emscripten_thread_exit=function(){return(Pr=i.__emscripten_thread_exit=i.asm.ca).apply(null,arguments)},xe=i.__emscripten_check_mailbox=function(){return(xe=i.__emscripten_check_mailbox=i.asm.da).apply(null,arguments)},De=function(){return(De=i.asm.ea).apply(null,arguments)},He=function(){return(He=i.asm.fa).apply(null,arguments)},Fr=function(){return(Fr=i.asm.ga).apply(null,arguments)},je=function(){return(je=i.asm.ha).apply(null,arguments)},Ne=function(){return(Ne=i.asm.ia).apply(null,arguments)};i.dynCall_jiji=function(){return(i.dynCall_jiji=i.asm.ja).apply(null,arguments)},i.dynCall_iiji=function(){return(i.dynCall_iiji=i.asm.ka).apply(null,arguments)},i.dynCall_viijii=function(){return(i.dynCall_viijii=i.asm.la).apply(null,arguments)},i.dynCall_iiiiij=function(){return(i.dynCall_iiiiij=i.asm.ma).apply(null,arguments)},i.dynCall_iiiiijj=function(){return(i.dynCall_iiiiijj=i.asm.na).apply(null,arguments)},i.dynCall_iiiiiijj=function(){return(i.dynCall_iiiiiijj=i.asm.oa).apply(null,arguments)},i.keepRuntimeAlive=nr,i.wasmMemory=b,i.ExitStatus=gr,i.PThread=_;var lr;K=function r(){lr||Ye(),lr||(K=r)};function Ye(){if(N>0)return;if(y){_r(i),te(),startWorker(i);return}if(Ge(),N>0)return;function r(){lr||(lr=!0,i.calledRun=!0,!rr&&(te(),_r(i),i.onRuntimeInitialized&&i.onRuntimeInitialized(),ze()))}i.setStatus?(i.setStatus("Running..."),setTimeout(function(){setTimeout(function(){i.setStatus("")},1),r()},1)):r()}if(i.preInit)for(typeof i.preInit=="function"&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.pop()();return Ye(),i.ready}})();export{Dt as default};
