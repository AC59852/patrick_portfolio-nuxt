/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{271:function(e,t,r){"use strict";var n=r(272);function o(code){if(!Object.prototype.hasOwnProperty.call(c.message,code))throw new Error("invalid status code: "+code);return c.message[code]}function c(code){if("number"==typeof code)return o(code);if("string"!=typeof code)throw new TypeError("code must be a number or string");var e=parseInt(code,10);return isNaN(e)?function(e){var t=e.toLowerCase();if(!Object.prototype.hasOwnProperty.call(c.code,t))throw new Error('invalid status message: "'+e+'"');return c.code[t]}(code):o(e)}e.exports=c,c.message=n,c.code=function(e){var map={};return Object.keys(e).forEach((function(code){var t=e[code],r=Number(code);map[t.toLowerCase()]=r})),map}(n),c.codes=function(e){return Object.keys(e).map((function(code){return Number(code)}))}(n),c.redirect={300:!0,301:!0,302:!0,303:!0,305:!0,307:!0,308:!0},c.empty={204:!0,205:!0,304:!0},c.retry={502:!0,503:!0,504:!0}},272:function(e){e.exports=JSON.parse('{"100":"Continue","101":"Switching Protocols","102":"Processing","103":"Early Hints","200":"OK","201":"Created","202":"Accepted","203":"Non-Authoritative Information","204":"No Content","205":"Reset Content","206":"Partial Content","207":"Multi-Status","208":"Already Reported","226":"IM Used","300":"Multiple Choices","301":"Moved Permanently","302":"Found","303":"See Other","304":"Not Modified","305":"Use Proxy","307":"Temporary Redirect","308":"Permanent Redirect","400":"Bad Request","401":"Unauthorized","402":"Payment Required","403":"Forbidden","404":"Not Found","405":"Method Not Allowed","406":"Not Acceptable","407":"Proxy Authentication Required","408":"Request Timeout","409":"Conflict","410":"Gone","411":"Length Required","412":"Precondition Failed","413":"Payload Too Large","414":"URI Too Long","415":"Unsupported Media Type","416":"Range Not Satisfiable","417":"Expectation Failed","418":"I\'m a Teapot","421":"Misdirected Request","422":"Unprocessable Entity","423":"Locked","424":"Failed Dependency","425":"Too Early","426":"Upgrade Required","428":"Precondition Required","429":"Too Many Requests","431":"Request Header Fields Too Large","451":"Unavailable For Legal Reasons","500":"Internal Server Error","501":"Not Implemented","502":"Bad Gateway","503":"Service Unavailable","504":"Gateway Timeout","505":"HTTP Version Not Supported","506":"Variant Also Negotiates","507":"Insufficient Storage","508":"Loop Detected","509":"Bandwidth Limit Exceeded","510":"Not Extended","511":"Network Authentication Required"}')},287:function(e,t,r){"use strict";r.d(t,"a",(function(){return K}));var n=r(271),o=r.n(n);let c=0;const l=(e,data,t=200)=>{var r,n;if(t>=400)throw new TypeError(`Invalid success status code, expected status to be within \`[100;400[\`, got \`${t}\``);return{requestID:e,status:t,msg:null!=(n=null==(r=o.a.message[t])?void 0:r.replace(/\.$/,"").toLowerCase())?n:"",data:data}},d=(e,t,r=400)=>{var n,c;if(r<400)throw new TypeError(`Invalid error status code, expected status to be within \`[500;600[\`, got \`${r}\``);return{requestID:e,status:r,msg:null!=(c=null==(n=o.a.message[r])?void 0:n.replace(/\.$/,"").toLowerCase())?c:"",error:t}},h=e=>{if("object"!=typeof e||null===e)throw new TypeError(`Invalid message received, expected message to be of type \`object\`, got \`${typeof e}\``);if(!Object.keys(e).every((e=>["requestID","type","data","status","msg","error"].includes(e))))throw new TypeError(`Invalid message received: ${JSON.stringify(e)}`);if("string"!=typeof e.requestID)throw new TypeError(`Invalid message received, expected \`message.requestID\` to be of type \`string\`, got \`${typeof e.id}\``);return e},_=e=>"type"in e,m=e=>!("type"in e);class f extends Error{constructor(e){super(e.msg),this.response=e}}Error;class S extends Error{constructor(e){super("Too many concurrent requests"),this.request=e}}class w extends Error{constructor(e){super(`Request \`${e.requestID}\` timed out`),this.request=e}}class v extends Error{}class y extends Error{constructor(){super("Port is not set")}}Error;const I={debug:!1,maximumRequestConcurrency:20,defaultTimeout:5e3,requestIDPrefix:"channel-"};class M{constructor(e,t){this._port=null,this._pendingRequests=new Map,this.requestHandlers=e,this.options={...I,...t}}get port(){if(!this._port)throw new y;return this._port}set port(e){this._port&&(this._port.onmessage=null),this._port=e,this._port&&(this._port.onmessage=this.onMessage.bind(this))}createRequestMessage(e,data){return((e,data,t="")=>({requestID:`${t}${c++}`,type:e,data:data}))(e,data,this.options.requestIDPrefix)}async onMessage(e){this.options.debug&&console.debug(e.data);try{const t=h(e.data);if(_(t))if(this.requestHandlers[t.type])try{const e=await this.requestHandlers[t.type](t,{success:l.bind(this,t.requestID),error:d.bind(this,t.requestID)});this.postResponse(e)}catch(e){this.postResponse(d(t.requestID,e,500))}else this.postResponse(d(t.requestID,void 0,501));else this._pendingRequests.has(t.requestID)?(this._pendingRequests.get(t.requestID)(t),this._pendingRequests.delete(t.requestID)):console.error(`Unknown request ID received in response: ${JSON.stringify(t)}`)}catch(e){if(!(e instanceof TypeError))throw e;console.warn(e.message)}}postRequest(e,t=(e=>this.port.postMessage(e)),r={}){if(this.options.debug&&console.debug(e),this._pendingRequests.size>=this.options.maximumRequestConcurrency)throw new S(e);return new Promise(((n,o)=>{const c=setTimeout((()=>{this._pendingRequests.has(e.requestID)&&this._pendingRequests.delete(e.requestID),o(new w(e))}),r.timeout||this.options.defaultTimeout);this._pendingRequests.set(e.requestID,(e=>{var t;clearTimeout(c),m(t=e)&&!("error"in t)?n(e):o(new f(e))})),t(e)}))}postResponse(e,t=(e=>this.port.postMessage(e))){return this.options.debug&&console.debug(e),t(e),e}}var D,R;(D||(D={})).Connect="connect",(R||(R={})).Ready="ready";const x={readyTimeout:2e4,requestIDPrefix:"receiver-"};class L extends M{constructor(e,t){super(e,{...x,...t}),this._ready=!1,window.addEventListener("message",(e=>{this._onPublicMessage(e)}))}async ready(){if(window.parent===window)throw new Error("Receiver is currently not embedded as an iframe");this._ready=!1;const e=this.createRequestMessage(R.Ready,void 0),t=await this.postRequest(e,(e=>{window.parent.postMessage(e,"*")}),{timeout:this.options.readyTimeout});return this._ready=!0,t}_onPublicMessage(e){try{const t=h(e.data);if(_(t))if(this.options.debug&&console.debug(e.data),t.type===D.Connect){this.port=e.ports[0];const r=l(t.requestID,void 0);this.postResponse(r)}else this.postResponse(d(t.requestID,void 0),(t=>{e.source.postMessage(t,e.origin)}));else this._ready||this.onMessage(e)}catch(e){if(!(e instanceof TypeError))throw e}}postFormattedRequest(e,data,t={}){if(!this._ready)throw new v("Receiver is not ready, use `ChannelReceiver.ready()` first");return this.postRequest(this.createRequestMessage(e,data),void 0,t)}}var P,T,E;(P||(P={})).SetActiveSlice="setActiveSlice",(E=T||(T={})).Ping="ping",E.GetLibraries="getLibraries",E.SetSliceZone="setSliceZone",E.SetSliceZoneFromSliceIDs="setSliceZoneFromSliceIDs",E.ScrollToSlice="scrollToSlice";var A;T.Ping,T.GetLibraries,T.SetSliceZone,T.SetSliceZoneFromSliceIDs,T.ScrollToSlice;const F={requestIDPrefix:"api-"};class Z extends L{constructor(e,t){var r,n;const o=(null==t?void 0:t.debug)||/[\?&]debug=true/i.test(decodeURIComponent(window.location.search));super({[T.Ping]:(e,t)=>t.success("pong"),...e},{...F,...t,debug:o}),this[A]=async data=>await this.postFormattedRequest(P.SetActiveSlice,data),o&&(window.prismic||(window.prismic={}),(r=window.prismic).sliceSimulator||(r.sliceSimulator={}),(n=window.prismic.sliceSimulator).api||(n.api=[]),window.prismic.sliceSimulator.api.push(this))}}var C,N,$,k;A=P.SetActiveSlice,(N=C||(C={})).ManagedState="managedState",N.Slices="slices",N.ActiveSlice="activeSlice",N.Message="message",(k=$||($={})).Pending="pending",k.Loaded="loaded",k.Error="error";const O=()=>({data:null,status:$.Pending,error:null}),j="slice-simulator",U="slice-simulator--root",z=e=>{let t=document.querySelector(".slice-simulator [data-slice-zone]");if(t)return t.children.length!==e&&console.warn(`Flagged SliceZone has an unexpected number of children, found ${t.children.length} but expected ${e}. This might lead to unexpected behaviors. Are you sure you tagged the right element?`),t;if(t=document.querySelector(".slice-simulator .slice-simulator--root"),!t||!t.children.length)return null;for(let i=0;i<5;i++){if(t.children.length===e)return t;if(!t.children.length)break;t=t.children[0]}return null},a=(e,label)=>`<a href="${e}" style="text-decoration: underline;">${label||e}<a>`,H=`<div style="word-spacing: initial; white-space: pre; line-height: initial; font-family: monospace; color: #ffffff; mix-blend-mode: difference; padding: 1rem; font-size: 1rem;">${["   _____ ___          _____ _                 __      __            \n  / ___// (_)_______ / ___/(_)___ ___  __  __/ /___ _/ /_____  _____\n  \\__ \\/ / / ___/ _ \\\\__ \\/ / __ `__ \\/ / / / / __ `/ __/ __ \\/ ___/\n ___/ / / / /__/  __/__/ / / / / / / / /_/ / / /_/ / /_/ /_/ / /    \n/____/_/_/\\___/\\___/____/_/_/ /_/ /_/\\__,_/_/\\__,_/\\__/\\____/_/     \n                  / /_  __  __   / __ \\_____(_)________ ___  (_)____\n                 / __ \\/ / / /  / /_/ / ___/ / ___/ __ `__ \\/ / ___/\n                / /_/ / /_/ /  / ____/ /  / (__  ) / / / / / / /__  \n               /_.___/\\__, /  /_/   /_/  /_/____/_/ /_/ /_/_/\\___/  \n                     /____/\n\n",`You're seeing this page because you're accessing Slice Simulator\ndirectly, e.g:\n\n  - ${a("http://localhost:3000/slice-simulator")}\n\n\n\nSlice Simulator is not meant to be accessed this way, to preview your\nslices, head over to Slice Machine UI:\n\n  - ${a("http://localhost:9999")}\n\n\n\nIf you believe this is an error, please reach out to us:\n\n  - ${a("https://github.com/prismicio/slice-machine/issues/new/choose")}`,"\n\n\n\n\n\n                                                - The Prismic team"].join("")}</div>`;const G=(e,t=16)=>{let r=!1;return function(...n){r||(e.apply(this,n),r=!0,setTimeout((()=>{r=!1}),t))}};class B extends class{constructor(){this.listeners={}}on(e,t,r=null){var n;this.listeners[e]=[...null!=(n=this.listeners[e])?n:[],[t,r]]}off(e,t){var r;this.listeners[e]=(null!=(r=this.listeners[e])?r:[]).filter((([e,r])=>"function"==typeof t?e!==t:r!==t))}emit(e,t){var r;(null!=(r=this.listeners[e])?r:[]).forEach((e=>e[0](t)))}}{constructor(e=O(),t=[]){super(),this._setActiveSlice=()=>{if(0===this.slices.length)return void(this.activeSlice=null);const e=z(this.slices.length);if(!e)return void(this.activeSlice=null);const t=((e,t)=>{const r=document.elementsFromPoint(t.x,t.y).reverse(),n=r.indexOf(e);if(-1===n)return null;return r[n+1]||null})(e,this._mouse);if(!t)return void(this.activeSlice=null);const r=Array.prototype.indexOf.call(e.children,t);this.activeSlice={rect:t.getBoundingClientRect(),sliceID:this.slices[r].slice_type,variationID:this.slices[r].variation,index:r}},this.setActiveSlice=G(this._setActiveSlice,16),this._setSliceZoneFromSliceIDsLastCall=null,this._managedState=e,this._slices=t,this._activeSlice=null,this._message="",this._mouse={x:0,y:0}}set managedState(e){this._managedState=e,this.emit(C.ManagedState,e)}get managedState(){return this._managedState}set slices(e){this._slices=e,this.message="",this.emit(C.Slices,e),this.setActiveSlice()}get slices(){return this._slices}set activeSlice(e){this._activeSlice=e,this.emit(C.ActiveSlice,e)}get activeSlice(){return this._activeSlice}set message(e){this._message=e,this.emit(C.Message,e)}get message(){return this._message}async init(e){this._managedState=await this.load(e),await this.forceSliceChunksDownload(),this.setDefaultSliceZone(),this.emit(C.ManagedState,this._managedState),window.addEventListener("mousemove",(e=>{this._mouse={x:e.clientX,y:e.clientY}}))}async load(e){try{return{data:await("function"==typeof e?e():e),status:$.Loaded,error:null}}catch(e){return console.error(e),{data:null,status:$.Error,error:e}}}async reload(e){this.managedState=await this.load(e),this.recoverSliceZone()}_throwIfNotLoaded(e){if(this.managedState.status!==$.Loaded||!this.managedState.data)throw new Error(`\`StateManager.${e}()\` can only be called when the state is loaded, use \`StateManager.load()\` first`)}getLibraries(){return this._throwIfNotLoaded("getLibraries"),Object.entries(this.managedState.data).map((([e,t])=>{const r=t.components;return{path:e,slices:Object.values(r).map((e=>({id:e.id,name:e.name||e.id,variations:e.model.variations.map((e=>({id:e.id,name:e.name||e.id})))})))}}))}getMocks(){return this._throwIfNotLoaded("getMocks"),Object.values(this.managedState.data).reduce(((e,t)=>{const r=t.components;return Object.values(r).forEach((t=>{e[t.id]=Object.values(t.mocks).reduce(((e,t)=>(e[t.variation]=t,e)),{})})),e}),{})}async forceSliceChunksDownload(){this.setSliceZoneFromSliceIDs(this.getLibraries().map((e=>e.slices.map((e=>({sliceID:e.id,variationID:e.variations[0].id}))))).flat()),await new Promise((e=>setTimeout(e,0))),this.slices=[]}setDefaultSliceZone(){if(this._throwIfNotLoaded("setDefaultSliceZone"),"undefined"!=typeof window){const e=new URL(window.location.href);e.searchParams.has("sid")&&e.searchParams.has("vid")&&this.setSliceZoneFromSliceIDs([{sliceID:e.searchParams.get("sid"),variationID:e.searchParams.get("vid")}])}}recoverSliceZone(){this._setSliceZoneFromSliceIDsLastCall&&this.setSliceZoneFromSliceIDs(this._setSliceZoneFromSliceIDsLastCall)}setSliceZone(e){this._setSliceZoneFromSliceIDsLastCall=null,this.slices=e}setSliceZoneFromSliceIDs(e){this._setSliceZoneFromSliceIDsLastCall=e;const t=this.getMocks();this.slices=e.map((e=>{const r=e.sliceID,n=e.variationID;if(r in t&&n in t[r])return t[r][n]})).filter(Boolean)}}const J=e=>{e.preventDefault(),e.stopPropagation()},V=e=>{e.path&&e.path.slice(0,5).some((e=>e instanceof HTMLAnchorElement))&&(e.preventDefault(),e.stopPropagation())},Y=new class{constructor(e=O(),t=[]){this.stateManager=new B(e,t),this._api=null}async init(e){if(this.stateManager.managedState.status!==$.Loaded){await this.stateManager.init(e);try{await this._initAPI()}catch(e){return e instanceof Error&&"Receiver is currently not embedded as an iframe"===e.message&&!this.stateManager.slices.length&&(this.stateManager.message=H),void console.error(e)}this._initListeners()}else await this.stateManager.reload(e)}async _initAPI(){this._api=new Z({[T.GetLibraries]:(e,t)=>t.success(this.stateManager.getLibraries()),[T.SetSliceZone]:(e,t)=>(this.stateManager.setSliceZone(e.data),t.success()),[T.SetSliceZoneFromSliceIDs]:(e,t)=>(this.stateManager.setSliceZoneFromSliceIDs(e.data),t.success()),[T.ScrollToSlice]:(e,t)=>{if(e.data.sliceIndex<0)return t.error("`sliceIndex` must be > 0",400);if(e.data.sliceIndex>=this.stateManager.slices.length)return t.error(`\`sliceIndex\` must be < ${this.stateManager.slices.length} (\`<SliceZone />\` current length)`,400);const r=z(this.stateManager.slices.length);if(!r)return t.error("Failed to find `<SliceZone />`",500);this.stateManager.activeSlice=null;const n=r.children[e.data.sliceIndex];return n?(n.scrollIntoView({behavior:e.data.behavior,block:e.data.block,inline:e.data.inline}),setTimeout(this.stateManager.setActiveSlice,750),t.success()):t.error("Failed fo find slice at index $`{req.data.sliceIndex}` in `<SliceZone />`",500)}}),await this._api.ready()}_initListeners(){window.addEventListener("mousemove",this.stateManager.setActiveSlice),window.addEventListener("resize",this.stateManager.setActiveSlice),window.addEventListener("mousewheel",(()=>{setTimeout(this.stateManager.setActiveSlice,200)})),this.stateManager.on(C.ActiveSlice,(async e=>{if(this._api)try{await this._api.setActiveSlice(e)}catch(e){if(!(e instanceof f&&400===e.response.status))throw e;console.error(e.response)}}))}},K={name:"SliceSimulator",props:{state:{type:[Function,Object],required:!0},zIndex:{type:Number,default:100,required:!1},background:{type:String,default:"#ffffff",required:!1}},data:()=>({coreManager:Y,managedState:O(),slices:[],message:""}),mounted(){this.coreManager.stateManager.on(C.ManagedState,(e=>{this.managedState=e}),"simulator-managed-state"),this.coreManager.stateManager.on(C.Slices,(e=>{this.slices=e}),"simulator-slices"),this.coreManager.stateManager.on(C.Message,(e=>{this.message=e}),"simulator-message"),this.coreManager.init(this.state)},watch:{state(){this.coreManager.stateManager.reload(this.state)}},destroyed(){this.coreManager.stateManager.off(C.ManagedState,"simulator-managed-state"),this.coreManager.stateManager.off(C.Slices,"simulator-slices"),this.coreManager.stateManager.off(C.Message,"simulator-message")},render(e){const t=[];return this.message?t.push(e("article",{domProps:{innerHTML:this.message}})):this.slices.length&&this.$scopedSlots.default&&t.push(e("div",{attrs:{id:"root"},class:U,style:this.managedState.status!==$.Loaded?{display:"none"}:void 0,on:{"!click":V,"!submit":J}},[this.$scopedSlots.default({slices:this.slices})])),e("div",{class:j,style:{zIndex:this.zIndex,position:"fixed",top:0,left:0,width:"100%",height:"100vh",overflow:"auto",background:this.background}},t)}}}}]);