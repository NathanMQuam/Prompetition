(function(e){function t(t){for(var a,c,o=t[0],i=t[1],u=t[2],l=0,d=[];l<o.length;l++)c=o[l],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&d.push(s[c][0]),s[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);p&&p(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,c=1;c<n.length;c++){var o=n[c];0!==s[o]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},c={app:0},s={app:0},r=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-15fe602c":"0d63656e","chunk-2bd0fff0":"1726ccdb","chunk-33ac4550":"ab2759df","chunk-3997093e":"41718aee","chunk-56b74eaa":"b729d5af","chunk-59062bc0":"1231d295","chunk-a980e250":"ca81e2d6","chunk-cdfd2e16":"b971b501"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-2bd0fff0":1,"chunk-33ac4550":1,"chunk-3997093e":1,"chunk-56b74eaa":1,"chunk-59062bc0":1,"chunk-a980e250":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-15fe602c":"31d6cfe0","chunk-2bd0fff0":"0a579f9f","chunk-33ac4550":"0cf7416a","chunk-3997093e":"4c14c28d","chunk-56b74eaa":"ffb56049","chunk-59062bc0":"4fe05adb","chunk-a980e250":"1ce4d3c2","chunk-cdfd2e16":"31d6cfe0"}[e]+".css",s=i.p+a,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var u=r[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===s))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],l=u.getAttribute("data-href");if(l===a||l===s)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||s,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete c[e],p.parentNode.removeChild(p),n(r)},p.href=s;var b=document.getElementsByTagName("head")[0];b.appendChild(p)})).then((function(){c[e]=0})));var a=s[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,n){a=s[e]=[t,n]}));t.push(a[2]=r);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=o(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=s[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",d.name="ChunkLoadError",d.type=a,d.request=c,n[1](d)}s[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0195":function(e,t,n){"use strict";n.r(t);var a=n("7a23");const c=Object(a["G"])("data-v-2d21e051");Object(a["u"])("data-v-2d21e051");const s={class:"row mb-4"},r={class:"col-12 response-card"},o={class:"row d-inline-flex justify-content-between align-items-center w-100"},i={class:"response-date mb-0"},u={class:"row d-inline-flex justify-content-between align-items-start w-100 mt-3"},l={class:"col-10 text-cblue mb-3 pl-0"},d={class:"col d-inline-flex align-items-center heart-container bold"},p={class:"text-light"};Object(a["s"])();const b=c((e,t,n,c,b,h)=>(Object(a["r"])(),Object(a["d"])("div",s,[Object(a["h"])("div",r,[Object(a["h"])("div",o,[Object(a["h"])("h6",i,Object(a["A"])(n.response.creator.name),1),n.response.creator.email===c.state.user.email?(Object(a["r"])(),Object(a["d"])("i",{key:0,class:"fa fa-ban fa-2x text-delete","aria-hidden":"true",onClick:t[1]||(t[1]=e=>b.deleteResponse(n.response))})):Object(a["e"])("",!0)]),Object(a["h"])("div",u,[Object(a["h"])("h5",l,Object(a["A"])(n.response.body),1),Object(a["h"])("div",d,[Object(a["h"])("span",p,Object(a["A"])(n.votes.length),1),1!==n.votes.filter(e=>e.creator.email===c.state.user.email).length?(Object(a["r"])(),Object(a["d"])("i",{key:0,class:["fa fa-heart fa-2x ml-2",{"text-red":b.buttonLiked}],"aria-hidden":"true",onClick:t[2]||(t[2]=e=>b.createVote(n.response.id))},null,2)):(Object(a["r"])(),Object(a["d"])("i",{key:1,class:["fa fa-heart fa-2x ml-2",{"text-red":!b.buttonLiked}],"aria-hidden":"true",onClick:t[3]||(t[3]=e=>b.deleteVote(n.votes.filter(e=>e.creator.email===c.state.user.email)[0].id))},null,2))])])])])));var h=n("3329"),f=n("83fc"),v=n("1892"),O=n("995c"),m=n("a838"),j={name:"Response",props:{response:{type:Object,default:()=>new h["a"]},votes:{type:Array,default:e=>new v["a"](e)}},setup(){const e=Object(a["v"])({user:Object(a["b"])(()=>f["a"].user)});return{state:e}},data(){return{buttonLiked:!1,createVote(e){O["a"].createVote(e)},deleteVote(e){O["a"].deleteVote(e)},deleteResponse(e){m["a"].deleteResponse(e)}}}};n("0657");j.render=b,j.__scopeId="data-v-2d21e051";t["default"]=j},"02ea":function(e,t,n){},"02f2":function(e,t,n){"use strict";n.r(t);var a=n("7a23");const c={class:"UserSubmissions"},s=Object(a["h"])("h4",null,"User Submissions",-1),r={class:"col-12 text-dark"};function o(e,t,n,o,i,u){const l=Object(a["y"])("Response");return Object(a["r"])(),Object(a["d"])("div",c,[s,Object(a["h"])("div",r,[(Object(a["r"])(!0),Object(a["d"])(a["a"],null,Object(a["x"])(o.state.responses.filter(e=>e.creator.email===o.state.user.email),e=>(Object(a["r"])(),Object(a["d"])(l,{key:e.id,response:e,votes:o.state.votes.filter(t=>t.responseId===e.id)},null,8,["response","votes"]))),128))])])}var i=n("0195"),u=n("83fc"),l=n("a838"),d=n("995c"),p={name:"UserSubmissions",props:{user:{type:Object,default:void 0}},setup(){Object(a["p"])(async()=>{await l["a"].getAllResponses(),await d["a"].getAllVotes()});const e=Object(a["v"])({responses:Object(a["b"])(()=>u["a"].responses),user:Object(a["b"])(()=>u["a"].user),votes:Object(a["b"])(()=>u["a"].votes)});return{state:e}},components:{Response:i["default"]}};p.render=o;t["default"]=p},"0657":function(e,t,n){"use strict";n("82c7")},1:function(e,t){},1892:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));class a{constructor(e={}){this.responseId=e.responseId||"unknown id",this.creatorId=e.creatorId||"unknown creator",this.creator=e.creator||{},this.id=e.id||"id unknown"}}},"1a45":function(e,t,n){"use strict";n("02ea")},"211a":function(e,t,n){},"235c":function(e,t,n){"use strict";n("9eba")},"2b20":function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return i}));var a=n("bc3a"),c=n.n(a);const s=window.location.origin.includes("localhost")?"http://localhost:3000":"",r=c.a.create({baseURL:s,timeout:8e3}),o=c.a.create({baseURL:"https://api.unsplash.com/photos/?client_id=V7dSys0b4fMgI4zRfk3SwqRsNsyoi1ifyXSITjUzSXM&w=800&h=400",timeout:8e3}),i=function(e){r.defaults.headers.authorization=e}},"32e5":function(e,t,n){"use strict";n.r(t);var a=n("7a23");const c=Object(a["G"])("data-v-7e18913a");Object(a["u"])("data-v-7e18913a");const s={class:"row"},r={key:0,class:"col-12 duel-card"},o={class:"row d-flex"},i={class:"duel-date"},u={class:"row"},l={class:"col"},d={class:"mb-0"},p=Object(a["h"])("br",null,null,-1);Object(a["s"])();const b=c((e,t,n,b,h,f)=>{const v=Object(a["y"])("router-link");return Object(a["r"])(),Object(a["d"])("div",s,[Object(a["h"])(v,{to:{name:"DuelsInfo",params:{id:n.duel.id}}},{default:c(()=>[n.duel.userA&&n.duel.userB?(Object(a["r"])(),Object(a["d"])("div",r,[Object(a["h"])("div",o,[Object(a["h"])("h6",i,Object(a["A"])(n.duel.body),1)]),Object(a["h"])("div",u,[Object(a["h"])("div",l,[Object(a["h"])("p",d,Object(a["A"])(n.duel.userA.body),1),p,Object(a["h"])("p",null,Object(a["A"])(n.duel.userB.body),1)])])])):Object(a["e"])("",!0)]),_:1},8,["to"])])});var h=n("fd98"),f={name:"Duel",props:{duel:{type:Object,default:()=>new h["a"]}}};n("9ae4");f.render=b,f.__scopeId="data-v-7e18913a";t["default"]=f},3329:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));class a{constructor(e={}){this.id=e.id||e._id||"placeholder id",this.body=e.body||"",this.topicId=e.topicId||"placeholder topic id",this.creator=e.creator||{},this.createdAt=e.createdAt||"creation date unknown",this.votes=e.votes||"0"}}},"41cb":function(e,t,n){"use strict";var a=n("6c02"),c=n("8816");function s(e){return()=>n("a2f9")(`./${e}.vue`)}const r=[{path:"/",name:"Home",component:s("HomePage")},{path:"/account",name:"Account",component:s("AccountPage"),beforeEnter:c["a"]},{path:"/account/:id",name:"User",component:s("AccountPage")},{path:"/prompts",name:"Topics",component:s("TopicsPage")},{path:"/responses/:topicId",name:"Responses",component:s("ResponsesPage")},{path:"/write/:topicId",name:"Write",component:s("WritePage"),beforeEnter:c["a"]},{path:"/write/dailyChallenge",name:"Daily-Challenge",component:s("WritePage"),beforeEnter:c["a"]},{path:"/duels/:id",name:"Duels",component:s("DuelsPage")},{path:"/duels/list",name:"DuelsList",component:s("DuelsListPage")},{path:"/duels/info/:id",name:"DuelsInfo",component:s("DuelsInfoPage")}],o=Object(a["a"])({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:Object(a["b"])(),routes:r});t["a"]=o},"473f":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("83fc");class c{constructor(e={}){this.id=e.id||e._id||"",this.name=e.name||"",this.email=e.email||"",this.picture=e.picture||"https://placehold.it/200x200"}}var s=n("8a4e"),r=n("2b20");class o{async getAccount(){try{const e=await r["a"].get("/account");a["a"].account=e.data}catch(e){s["a"].error("HAVE YOU STARTED YOUR SERVER YET???",e)}}async getUser(e){try{const t=await r["a"].get("/account/"+e);a["a"].activeUserView=new c(t.data)}catch(t){s["a"].error(t)}}async editUserName(e){try{const t=await r["a"].put("account",{name:e});s["a"].log(t),a["a"].account=t.data}catch(t){s["a"].error(t)}}}const i=new o},4803:function(e,t,n){"use strict";n.r(t);var a=n("7a23");const c={class:"UserPractices"},s=Object(a["h"])("h4",null,"User Practices",-1);function r(e,t,n,r,o,i){return Object(a["r"])(),Object(a["d"])("div",c,[s])}var o={name:"UserPractices",props:{user:Object},setup(){return{}},components:{}};o.render=r;t["default"]=o},"4e56":function(e,t,n){"use strict";n.r(t);var a=n("7a23");const c=Object(a["G"])("data-v-d44edc70");Object(a["u"])("data-v-d44edc70");const s={class:"row d-flex mb-3"},r={class:"col-12 topic-card"},o={class:"row d-flex m-2 mt-4"},i={class:"topic-date"},u={class:"row d-flex m-2 mb-4"},l={class:"mb-0"};Object(a["s"])();const d=c((e,t,n,d,p,b)=>{const h=Object(a["y"])("router-link");return Object(a["r"])(),Object(a["d"])("div",s,[Object(a["h"])(h,{to:{name:"Responses",params:{topicId:n.topic.id}}},{default:c(()=>[Object(a["h"])("div",r,[Object(a["h"])("div",o,[Object(a["h"])("h6",i,Object(a["A"])(new Date(n.topic.challengeStartDate).toLocaleDateString()),1)]),Object(a["h"])("div",u,[Object(a["h"])("h4",l,Object(a["A"])(n.topic.body),1)])])]),_:1},8,["to"])])});var p=n("9f2e"),b={name:"Topic",props:{topic:{type:Object,default:()=>new p["a"]},winners:{type:Object,default:()=>new Response}}};n("235c");b.render=d,b.__scopeId="data-v-d44edc70";t["default"]=b},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("7a23");const c={class:"bg-none"},s={class:"container-fluid"};function r(e,t,n,r,o,i){const u=Object(a["y"])("Navbar"),l=Object(a["y"])("router-view");return Object(a["r"])(),Object(a["d"])(a["a"],null,[Object(a["h"])("header",c,[Object(a["h"])(u)]),Object(a["h"])("main",s,[Object(a["h"])(l)])],64)}var o=n("83fc"),i={name:"App",setup(){return{appState:Object(a["b"])(()=>o["a"])}}};n("1a45");i.render=r;var u=i;function l(e){const t=n("ccc2");t.keys().forEach(n=>{const a=t(n),c=a.default||a,s=c.name||n.substr(n.lastIndexOf("/")+1).replace(/\.\w+$/,"");e.component(s,c)})}var d=n("41cb"),p=n("4989"),b=n.n(p),h=n("1157"),f=n.n(h),v=n("f0bd");const O=Object(a["c"])(u);l(O),O.use(d["a"],b.a,f.a,v["default"]).mount("#app")},"82c7":function(e,t,n){},"83fc":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("7a23");const c=Object(a["v"])({user:{},account:{},topics:[],activeTopic:{},responses:[],myResponse:{},votes:[],activeUserView:{},todaysTopic:{},duels:[],activeDuel:{},duelVotes:[]})},"8a4e":function(e,t,n){"use strict";function a(e,t){window.location.origin.includes("localhost")&&console[e](...t)}n.d(t,"a",(function(){return c}));const c={log(){a("log",arguments)},error(){a("error",arguments)},warn(){a("warn",arguments)},assert(){a("assert",arguments)},trace(){a("trace",arguments)}}},"8f66":function(e,t,n){},"8ff2":function(e,t,n){"use strict";n.r(t);var a=n("7a23");const c={class:"carousel-item"},s={class:"carousel-caption d-none d-md-block text-shadow"},r=Object(a["g"])("from "),o={class:"bold"};function i(e,t,n,i,u,l){return Object(a["r"])(),Object(a["d"])("div",c,[Object(a["h"])("div",{class:"d-flex bg-dark cimg-container justify-content-center",src:i.props.img,alt:"First slide"},[Object(a["h"])("img",{class:"",src:i.props.img,alt:"First slide"},null,8,["src"])],8,["src"]),Object(a["h"])("div",s,[Object(a["h"])("h6",null,[r,Object(a["h"])("span",o,Object(a["A"])(i.props.unsplashuser),1)])])])}var u={name:"CarouselItem",props:{img:{type:String,default:"https://place-hold.it/800x400"},unsplashuser:{type:String,default:"unknown"}},setup(e){return{props:e}}};n("9c47");u.render=i;t["default"]=u},"995c":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("83fc"),c=n("1892"),s=n("8a4e"),r=n("2b20");class o{async getVotes(e){try{const t=await r["a"].get("api/responses/"+e+"/votes");a["a"].votes=t.data}catch(t){s["a"].error("Couldnt retrieve votes \n",t)}}async getAllVotes(){try{const e=await r["a"].get("api/votes");a["a"].votes=e.data.map(e=>new c["a"](e))}catch(e){s["a"].error("Couldnt retrieve votes \n",e)}}async toggleVote(e){try{this.getVotes(e)}catch(t){s["a"].error("Couldnt like this response \n",t)}}async createVote(e){try{await r["a"].post("api/votes",{responseId:e}),this.getAllVotes()}catch(t){s["a"].error("Couldnt add a vote \n",t)}}async deleteVote(e){try{await r["a"].delete("api/votes/"+e),this.getAllVotes()}catch(t){s["a"].error("Couldnt add a vote \n",t)}}}const i=new o},"9ae4":function(e,t,n){"use strict";n("fe05")},"9c47":function(e,t,n){"use strict";n("211a")},"9d8d":function(e,t,n){"use strict";n.r(t);var a=n("7a23");const c=Object(a["G"])("data-v-8612405e");Object(a["u"])("data-v-8612405e");const s={class:"navbar navbar-expand-lg"},r=Object(a["h"])("div",{class:"d-flex flex-column align-items-center"},[Object(a["h"])("img",{alt:"logo",src:"https://raw.githubusercontent.com/JordanWilker/Prompetition/master/prompetition-code.client/src/assets/img/logo.PNG",height:"45"})],-1),o=Object(a["h"])("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(a["h"])("span",{class:"navbar-toggler-icon text-cblue"},[Object(a["h"])("i",{class:"fa fa-bars","aria-hidden":"true"})])],-1),i={class:"collapse navbar-collapse",id:"navbarText"},u={class:"navbar-nav mr-auto"},l={class:"nav-item"},d=Object(a["g"])(" Prompts "),p={class:"navbar-text"},b={key:1,class:"dropdown"},h={class:"mx-3 text-cblue"},f=Object(a["h"])("div",{class:"list-group-item list-group-item-action hoverable bg-none text-light"}," Account ",-1);Object(a["s"])();const v=c((e,t,n,v,O,m)=>{const j=Object(a["y"])("router-link");return Object(a["r"])(),Object(a["d"])("nav",s,[Object(a["h"])(j,{class:"navbar-brand d-flex",to:{name:"Home"}},{default:c(()=>[r]),_:1}),o,Object(a["h"])("div",i,[Object(a["h"])("ul",u,[Object(a["h"])("li",l,[Object(a["h"])(j,{to:{name:"Topics"},class:"nav-link"},{default:c(()=>[d]),_:1})])]),Object(a["h"])("span",p,[v.user.isAuthenticated?(Object(a["r"])(),Object(a["d"])("div",b,[Object(a["h"])("div",{class:"dropdown-toggle",onClick:t[2]||(t[2]=e=>v.state.dropOpen=!v.state.dropOpen)},[Object(a["h"])("img",{src:v.user.picture,alt:"user photo",height:"40",class:"rounded"},null,8,["src"]),Object(a["h"])("span",h,Object(a["A"])(v.user.name),1)]),Object(a["h"])("div",{class:["dropdown-menu p-0 list-group w-100 bg-none",{show:v.state.dropOpen}],onClick:t[4]||(t[4]=e=>v.state.dropOpen=!1)},[Object(a["h"])(j,{to:{name:"Account"}},{default:c(()=>[f]),_:1}),Object(a["h"])("div",{class:"list-group-item list-group-item-action hoverable bg-none text-light",onClick:t[3]||(t[3]=(...e)=>v.logout&&v.logout(...e))}," logout ")],2)])):(Object(a["r"])(),Object(a["d"])("button",{key:0,class:"btn btn-outline-primary text-uppercase",onClick:t[1]||(t[1]=(...e)=>v.login&&v.login(...e))}," Login "))])])])});var O=n("8816"),m=n("83fc");const j="nathan-m-quam.us.auth0.com",g="HBQHaxG8v8NV7VsSZYG5JAzGkwEj0Pja",y="https://bcw-prompetition";var w=n("41cb"),k=n("2b20"),A=n("473f"),x=n("d89f");const T=Object(O["b"])({domain:j,clientId:g,audience:y,onRedirectCallback:e=>{w["a"].push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}});T.on(T.AUTH_EVENTS.AUTHENTICATED,(async function(){Object(k["c"])(T.bearer),m["a"].user=T.user,await A["a"].getAccount(),x["a"].authenticate(T.bearer)}));var I={name:"Navbar",setup(){const e=Object(a["v"])({dropOpen:!1});return{state:e,user:Object(a["b"])(()=>m["a"].user),async login(){T.loginWithPopup()},async logout(){await T.logout({returnTo:window.location.origin})}}}};n("b4dd");I.render=v,I.__scopeId="data-v-8612405e";t["default"]=I},"9eba":function(e,t,n){},"9f2e":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));class a{constructor(e={}){this.id=e.id||e._id||"placeholder id",this.body=e.body||"test body",this.createdAt=e.createdAt||"creation date unkown",this.challengeStartDate=e.challengeStartDate||"challenge start date unknown",this.winners=e.winner||[]}parseDate(e){const t=new Date(e);return t.toString().substring(0,15)}}},a2f9:function(e,t,n){var a={"./AccountPage.vue":["e542","chunk-3997093e"],"./DuelsInfoPage.vue":["55ff","chunk-cdfd2e16"],"./DuelsListPage.vue":["76ab","chunk-a980e250"],"./DuelsPage.vue":["be28","chunk-15fe602c"],"./HomePage.vue":["78a7","chunk-56b74eaa"],"./ResponsesPage.vue":["3c1a","chunk-59062bc0"],"./TopicsPage.vue":["cd0f","chunk-33ac4550"],"./WritePage.vue":["298d","chunk-2bd0fff0"]};function c(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],c=t[0];return n.e(t[1]).then((function(){return n(c)}))}c.keys=function(){return Object.keys(a)},c.id="a2f9",e.exports=c},a838:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("83fc"),c=n("3329"),s=n("8a4e"),r=n("2b20");class o{async getResponsesByTopicId(e){try{const t=await r["a"].get("api/topics/"+e+"/responses");a["a"].responses=t.data.map(e=>new c["a"](e)),a["a"].myResponse=a["a"].responses.find(e=>e.creator.id===a["a"].account.id)}catch(t){s["a"].error("Couldn't retrieve responses \n",t)}}async getDailyChallengeResponse(){try{const e=await r["a"].get("api/topics/dailyChallenge/response");a["a"].myResponse=e.data}catch(e){s["a"].error(e)}}async getAllResponses(){try{const e=await r["a"].get("api/responses");a["a"].responses=e.data.map(e=>new c["a"](e))}catch(e){s["a"].error(e)}}async createResponse(e){try{const t=await r["a"].post("api/responses/",e);a["a"].myResponse=new c["a"](t.data),this.getResponsesByTopicId(e.topicId)}catch(t){s["a"].error(t)}}async editResponse(e){try{await r["a"].put("api/responses/"+e.topicId,e),this.getResponsesByTopicId(e.topicId)}catch(t){s["a"].error(t)}}async deleteResponse(e){try{await r["a"].delete("api/responses/"+e.id),this.getResponsesByTopicId(e.topicId)}catch(t){s["a"].error(t)}}}const i=new o},b4dd:function(e,t,n){"use strict";n("8f66")},c3ac:function(e,t,n){"use strict";n.r(t);var a=n("7a23");const c={class:"UserWins container-fluid"},s=Object(a["h"])("h4",null,"User Wins",-1),r=Object(a["h"])("div",{class:"row"},[Object(a["h"])("div",{class:"col-12"}," Today's response "),Object(a["h"])("div",{class:"col-12"}," Previous Wins "),Object(a["h"])("div",{class:"col-12"})],-1);function o(e,t,n,o,i,u){return Object(a["r"])(),Object(a["d"])("div",c,[s,r])}var i={name:"UserWins",props:{user:Object},setup(){return{}}};i.render=o;t["default"]=i},ccc2:function(e,t,n){var a={"./CarouselImage.vue":"8ff2","./Duel.vue":"32e5","./Response.vue":"0195","./Topic.vue":"4e56","./UserPractices.vue":"4803","./UserSubmissions.vue":"02f2","./UserWins.vue":"c3ac","./navbar.vue":"9d8d"};function c(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}c.keys=function(){return Object.keys(a)},c.resolve=s,e.exports=c,c.id="ccc2"},d89f:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("83fc"),c=n("8a4e"),s=n("8055"),r=n.n(s),o=n("2b20");class i{constructor(e){this.socket=r()(e||o["b"]),this.authenticated=!1,this.queue=[],this.on("connected",this.onConnected).on("authenticated",this.onAuthenticated).on("error",this.onError)}on(e,t){return this.socket.on(e,t.bind(this)),this}onConnected(e){c["a"].log("[SOCKET_CONNECTION]",e)}onAuthenticated(e){c["a"].log("[SOCKET_AUTHENTICATED]",e),this.authenticated=!0;const t=[...this.queue];this.queue=[],t.forEach(e=>{this.emit(e.action,e.payload)})}onError(e){c["a"].error("[SOCKET_ERROR]",e)}emit(e,t){if(!this.authenticated)return c["a"].log("[ENQUEING_ACTION]",{action:e,payload:t}),this.queue.push({action:e,payload:t});this.socket.emit(e,t)}}class u extends i{constructor(){super(),this.on("create:duel",this.createDuel).on("remove:duel",this.removeDuel).on("update:duel",this.updateDuel).on("get:duel",this.getDuel).on("get:test",this.test)}authenticate(e){this.socket.emit("authenticate",e)}connected(e){}createDuel(e){a["a"].duels.push(e)}getDuel(e){a["a"].duels.push(e)}removeDuel(e){const t=a["a"].duels.findIndex(t=>t.id===e);a["a"].duels.splice(t,1)}updateDuel(e){const t=a["a"].duels.findIndex(t=>t.id===e.id);a["a"].duels.splice(t,1,e)}test(e){}}const l=new u},fd98:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));class a{constructor(e={}){this.id=e.id||e._id||"placeholder id",this.body=e.body||"test body",this.winnerId=e.winnerId||"b",this.votable=e.votable,this.timeAlloted=e.timeAlloted,this.userA=e.userA,this.userB=e.userB}}},fe05:function(e,t,n){}});