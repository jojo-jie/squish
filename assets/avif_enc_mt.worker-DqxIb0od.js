var e={},i=!1;function c(){var a=Array.prototype.slice.call(arguments).join(" ");console.error(a)}function o(){var a=Array.prototype.slice.call(arguments).join(" ");postMessage({cmd:"alert",text:a,threadId:e._pthread_self()})}var d=c;self.alert=o;e.instantiateWasm=function(a,n){var r=new WebAssembly.Instance(e.wasmModule,a);return n(r),e.wasmModule=null,r.exports};self.onmessage=function(a){try{if(a.data.cmd==="load")e.wasmModule=a.data.wasmModule,e.wasmMemory=a.data.wasmMemory,e.buffer=e.wasmMemory.buffer,e.ENVIRONMENT_IS_PTHREAD=!0,(a.data.urlOrBlob?import(a.data.urlOrBlob):import("./avif_enc_mt-CG_tB4Ki.js")).then(function(t){return t.default(e)}).then(function(t){e=t});else if(a.data.cmd==="objectTransfer")e.PThread.receiveObjectTransfer(a.data);else if(a.data.cmd==="run"){e.__performance_now_clock_drift=performance.now()-a.data.time,e.__emscripten_thread_init(a.data.threadInfoStruct,0,0);var n=a.data.stackBase,r=a.data.stackBase+a.data.stackSize;e.establishStackSpace(r,n),e.PThread.receiveObjectTransfer(a.data),e.PThread.threadInit(),i||(e.___embind_register_native_and_builtin_types(),i=!0);try{var s=e.invokeEntryPoint(a.data.start_routine,a.data.arg);e.keepRuntimeAlive()?e.PThread.setExitStatus(s):e.PThread.threadExit(s)}catch(t){if(t==="Canceled!")e.PThread.threadCancel();else if(t!="unwind")if(t instanceof e.ExitStatus)e.keepRuntimeAlive()||e.PThread.threadExit(t.status);else throw e.PThread.threadExit(-2),t}}else a.data.cmd==="cancel"?e._pthread_self()&&e.PThread.threadCancel():a.data.target==="setimmediate"||(a.data.cmd==="processThreadQueue"?e._pthread_self()&&e._emscripten_current_thread_process_queued_calls():(d("worker.js received unknown command "+a.data.cmd),d(a.data)))}catch(t){throw d("worker.js onmessage() captured an uncaught exception: "+t),t&&t.stack&&d(t.stack),t}};
