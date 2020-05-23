(function(t){function e(e){for(var s,n,l=e[0],o=e[1],u=e[2],d=0,p=[];d<l.length;d++)n=l[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&p.push(r[n][0]),r[n]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);c&&c(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,l=1;l<a.length;l++){var o=a[l];0!==r[o]&&(s=!1)}s&&(i.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},r={app:0},i=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var c=o;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"10a0":function(t,e,a){},"46bf":function(t,e,a){},4997:function(t,e,a){"use strict";var s=a("5411"),r=a.n(s);r.a},5411:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navbar"),a("router-view")],1)},i=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"home"}}},[t._v("Keepr")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarText"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item",class:{active:"home"==t.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"home"}}},[t._v("Home")])],1),t.$auth.isAuthenticated?a("li",{staticClass:"nav-item",class:{active:"dashboard"==t.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"dashboard"}}},[t._v("My-Dashboard")])],1):t._e()]),a("span",{staticClass:"navbar-text"},[t.$auth.isAuthenticated?a("button",{staticClass:"btn btn-danger",on:{click:t.logout}},[t._v("logout")]):a("button",{staticClass:"btn btn-success",on:{click:t.login}},[t._v(" Login ")])])])],1)},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],o=a("bc3a"),u=a.n(o);u.a.create({baseURL:"https://localhost:5001",withCredentials:!0});var c={name:"Navbar",methods:{async login(){await this.$auth.loginWithPopup(),this.$store.dispatch("setBearer",this.$auth.bearer),console.log("this.$auth.user: "),console.log(this.$auth.user),this.$store.dispatch("getUserVaults")},async logout(){this.$store.dispatch("resetBearer"),await this.$auth.logout({returnTo:window.location.origin})}},data(){return{loggedIn:{log:!0},loggedOut:{log:!1}}}},d=c,p=a("2877"),m=Object(p["a"])(d,n,l,!1,null,null,null),h=m.exports,v=a("335d"),b={name:"App",async beforeCreate(){await Object(v["c"])(),this.$store.dispatch("setBearer",this.$auth.bearer)},components:{Navbar:h}},g=b,f=(a("5c0b"),Object(p["a"])(g,r,i,!1,null,null,null)),C=f.exports,w=a("8c4f"),K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("h1",{staticClass:"text-center mt-3"},[t._v("The forum for everybody's posts.")]),a("div",{staticClass:"search-wrapper"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control mr-sm-2",attrs:{type:"search",placeholder:"Search"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})]),this.$auth.isAuthenticated?a("AddKeep",{staticClass:"text-center mb-4 mt-3"}):t._e(),a("div",{staticClass:"d-flex sidebar-wrapper",attrs:{id:"wrapper"}},[t._m(0),a("div",{attrs:{id:"page-content-wrapper"}},[a("button",{staticClass:"btn btn-primary",attrs:{id:"menu-toggle"},on:{click:function(e){return t.toggle()}}},[t._v("Toggle Menu")]),a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row mt-3"},t._l(t.filteredList,(function(t){return a("keepCards",{key:t.id,attrs:{keepData:t}})})),1)])])])],1)},_=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-light border-right",attrs:{id:"sidebar-wrapper"}},[a("img",{attrs:{src:"happyCloud.jpeg",id:"cloud",alt:"..."}}),a("div",{staticClass:"sidebar-heading"},[t._v("Features coming soon ")]),a("div",{staticClass:"list-group list-group-flush"},[a("a",{staticClass:"list-group-item list-group-item-action bg-light",attrs:{href:"#"}},[t._v("Overview")]),a("a",{staticClass:"list-group-item list-group-item-action bg-light",attrs:{href:"#"}},[t._v("Dashboard")]),a("a",{staticClass:"list-group-item list-group-item-action bg-light",attrs:{href:"#"}},[t._v("Popular")]),a("a",{staticClass:"list-group-item list-group-item-action bg-light",attrs:{href:"#"}},[t._v("Events")])])])}],y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"list m-2"},[a("div",{staticClass:"card",staticStyle:{width:"18rem"}},[a("img",{staticClass:"card-img-top",attrs:{src:t.keepData.img}}),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(t._s(t.keepData.name))]),a("p",{staticClass:"card-text"},[t._v(t._s(t.keepData.description))]),"dashboard"==this.$route.name||"home"==this.$route.name&&t.keepData.userId==t.checkUser?a("button",{staticClass:"btn-danger",on:{click:t.deleteKeep}},[t._v("Delete Keep")]):t._e(),t.$auth.isAuthenticated?a("div",{staticClass:"dropdown"},[a("button",{staticClass:"btn btn-secondary dropdown-toggle",attrs:{type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("Choose a vault")]),a("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuButton"}},t._l(t.userVaults,(function(e){return a("a",{key:e.id,staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(a){return t.createVaultKeep(t.keepData.id,e.id)}}},[t._v(t._s(e.name))])})),0)]):t._e()])])])},V=[],x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"addVault"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-toggle":"modal","data-target":"#addVaultModal"}},[t._v("Add Vault")]),a("div",{staticClass:"modal",attrs:{tabindex:"-1",role:"dialog",id:"addVaultModal"}},[a("form",{staticClass:"form-inline",on:{submit:function(e){return e.preventDefault(),t.addVault(e)}}},[a("div",{staticClass:"modal-content form-group rounded input-group-default container"},[a("div",{staticClass:"modal-header d-flex flex-column"},[a("h2",{staticClass:"text-white"},[t._v("Create a vault")]),a("div",{staticClass:"form-group-inline my-1 row"},[a("h5",{staticClass:"text-white mt-2 col-5"},[t._v("Title:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newVault.name,expression:"newVault.name"}],staticClass:"modal-title rounded form-control p-0 text-center col-7",attrs:{placeholder:"Give this a name","aria-describedby":"inputGroup-sizing-default"},domProps:{value:t.newVault.name},on:{input:function(e){e.target.composing||t.$set(t.newVault,"name",e.target.value)}}})]),a("div",{staticClass:"form-group-inline my-1 row"},[a("h5",{staticClass:"text-white mt-2 col-5"},[t._v("Description:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newVault.description,expression:"newVault.description"}],staticClass:"modal-title rounded form-control p-0 text-center col-7",attrs:{placeholder:"Describe?","aria-describedby":"inputGroup-sizing-default"},domProps:{value:t.newVault.description},on:{input:function(e){e.target.composing||t.$set(t.newVault,"description",e.target.value)}}})])]),t._m(0)])])])])},k=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-success",attrs:{type:"submit","data-toggle":"modal","data-target":"#addVaultModal"}},[t._v("Submit")]),a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")])])}],D={name:"AddVaultModal",data(){return{newVault:{name:this.name,description:this.description}}},methods:{addVault(){this.$store.dispatch("addVault",this.newVault)}}},A=D,O=(a("d8a4"),Object(p["a"])(A,x,k,!1,null,"0128466e",null)),j=O.exports,E={name:"keepCards",mounted(){},data(){return{user:null}},computed:{checkUser(){return void 0==this.$auth.user?this.user=null:this.$auth.user.sub?this.$auth.user.sub:void 0},userVaults(){return this.$store.state.userVaults}},methods:{deleteKeep(){this.$store.dispatch("deleteKeep",this.keepData)},createVaultKeep(t,e){let a={keepId:t,vaultId:e};this.$store.dispatch("createVaultKeep",a)},testBtn(){console.log(this.$store.state.userVaults)}},components:{AddVault:j},props:["keepData","vaults"]},M=E,P=(a("a7d1"),Object(p["a"])(M,y,V,!1,null,"c357edce",null)),B=P.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"addKeep"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-toggle":"modal","data-target":"#addKeepModal"}},[t._v("Add Keep")]),a("div",{staticClass:"modal",attrs:{tabindex:"-1",role:"dialog",id:"addKeepModal"}},[a("form",{staticClass:"form-inline",on:{submit:function(e){return e.preventDefault(),t.addKeep(e)}}},[a("div",{staticClass:"modal-content form-group rounded input-group-default container"},[a("div",{staticClass:"modal-header d-flex flex-column"},[a("h2",{staticClass:"text-white"},[t._v("Create a keep")]),a("div",{staticClass:"form-group-inline my-1 row"},[a("h5",{staticClass:"text-white mt-2 col-5"},[t._v("Image:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newKeep.img,expression:"newKeep.img"}],staticClass:"modal-title rounded form-control p-0 text-center col-7",attrs:{placeholder:"What's your image?","aria-describedby":"inputGroup-sizing-default"},domProps:{value:t.newKeep.img},on:{input:function(e){e.target.composing||t.$set(t.newKeep,"img",e.target.value)}}})]),a("div",{staticClass:"form-group-inline my-1 row"},[a("h5",{staticClass:"text-white mt-2 col-5"},[t._v("Name:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newKeep.name,expression:"newKeep.name"}],staticClass:"modal-title rounded form-control p-0 text-center col-7",attrs:{placeholder:"Give this a name","aria-describedby":"inputGroup-sizing-default"},domProps:{value:t.newKeep.name},on:{input:function(e){e.target.composing||t.$set(t.newKeep,"name",e.target.value)}}})]),a("div",{staticClass:"form-group-inline my-1 row"},[a("h5",{staticClass:"text-white mt-2 col-5"},[t._v("Description:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newKeep.description,expression:"newKeep.description"}],staticClass:"modal-title rounded form-control p-0 text-center col-7",attrs:{placeholder:"How would you describe this?","aria-describedby":"inputGroup-sizing-default"},domProps:{value:t.newKeep.description},on:{input:function(e){e.target.composing||t.$set(t.newKeep,"description",e.target.value)}}})])]),t._m(0)])])])])},U=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-success",attrs:{type:"submit","data-toggle":"modal","data-target":"#addKeepModal"}},[t._v("Submit")]),a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")])])}],T={name:"addKeep",data(){return{newKeep:{name:"",description:"",img:"",isPrivate:!1}}},computed:{},methods:{addKeep(){this.$store.dispatch("addKeep",this.newKeep)}},components:{}},S=T,L=(a("b6a4"),Object(p["a"])(S,I,U,!1,null,"f85b4eba",null)),N=L.exports,z=a("262f"),G=a.n(z),Y={name:"home",data(){return{search:"",sideBar:""}},computed:{filteredList(){return this.publicKeeps.filter(t=>t.name.toLowerCase().includes(this.search.toLowerCase()))},publicKeeps(){return this.$store.state.publicKeeps},userVaults(){return this.$store.state.userVaults}},methods:{toggle(){$("#wrapper").toggleClass("toggled1 sidebar-wrapper")},logout(){this.$store.dispatch("logout")},swal(){this.$auth.isAuthenticated?this.$store.dispatch("getUserVaults"):G.a.fire("For more functionality login or create an account")}},async mounted(){this.$store.dispatch("getKeeps"),setTimeout(this.swal,1e3)},components:{KeepCards:B,AddKeep:N}},R=Y,F=(a("4997"),Object(p["a"])(R,K,_,!1,null,"4f2f1e92",null)),H=F.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"keeps container-fluid bg-dark"},[a("p",{staticClass:"text-white mt-3 pt-3"},[t._v("These are your Keeps")]),a("AddKeep"),a("div",{staticClass:"row pb-3"},t._l(t.publicKeeps,(function(t){return a("keepCards",{key:t.id,attrs:{keepData:t}})})),1)],1)},W=[],q={name:"Keeps",mounted(){this.$store.dispatch("getKeeps")},data(){return{}},computed:{publicKeeps(){return this.$store.state.publicKeeps}},methods:{},components:{KeepCards:B,AddKeep:N}},Q=q,Z=Object(p["a"])(Q,J,W,!1,null,"6ff6a930",null),X=(Z.exports,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard container-fluid"},[a("h1",{staticClass:"text-center"},[t._v("The important stuff")]),a("h3",{staticClass:"ml-3"},[t._v("Your Keeps:"),a("AddKeep")],1),a("div",{staticClass:"row ml-2 mr-2"},t._l(t.userKeeps,(function(t){return a("keepCards",{key:t.id,attrs:{keepData:t}})})),1),a("h3",{staticClass:"ml-3"},[t._v("Your Vaults:"),a("AddVault")],1),a("div",{staticClass:"row ml-2 mr-2"},[a("div",{staticClass:"col-md-12 d-flex"},t._l(t.userVaults,(function(t){return a("vaultCards",{key:t.id,attrs:{vaultData:t}})})),1)])])}),tt=[],et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vaultCards m-2"},[a("div",{staticClass:"card",staticStyle:{width:"18rem"}},[a("div",{staticClass:"card-body"},[a("h3",{staticClass:"card-title"},[t._v(t._s(t.vaultData.name))]),a("p",{staticClass:"card-text"},[t._v(t._s(t.vaultData.description))]),a("router-link",{attrs:{to:{name:"vaultKeeps",params:{id:t.vaultData.id}}}},[a("button",{staticClass:"btn btn-success",on:{click:t.setActiveVault}},[t._v("View vault")])]),t.vaultData.userId==this.$auth.user.sub?a("button",{staticClass:"btn-danger",on:{click:t.deleteVault}},[t._v("Delete Vault")]):t._e()],1)])])},at=[],st={name:"vaultCards",mounted(){},data(){return{}},computed:{},methods:{setActiveVault(){this.$store.dispatch("setActiveVault",this.vaultData)},deleteVault(){this.$store.dispatch("deleteVault",this.vaultData)}},components:{},props:["vaultData"]},rt=st,it=Object(p["a"])(rt,et,at,!1,null,"a1bb5a84",null),nt=it.exports,lt={mounted(){this.$store.dispatch("getUserKeeps"),this.$store.dispatch("getUserVaults")},computed:{userKeeps(){return this.$store.state.userKeeps},userVaults(){return this.$store.state.userVaults}},components:{KeepCards:B,VaultCards:nt,AddVault:j,AddKeep:N}},ot=lt,ut=Object(p["a"])(ot,X,tt,!1,null,null,null),ct=ut.exports,dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"VaultKeep"},[a("div",{staticClass:"text-center"},[a("h2",{staticClass:"text-white"},[t._v("Your Vault with all the keeps")]),a("div",{staticClass:"row ml-3"},t._l(t.vaultKeeps,(function(t){return a("keepCards",{key:t.id,attrs:{keepData:t}})})),1)])])},pt=[],mt={name:"VaultKeep",data(){return{}},mounted(){this.$store.dispatch("getVaultKeep",this.$route.params.id)},computed:{vaultKeeps(){return this.$store.state.vaultKeeps}},methods:{},components:{KeepCards:B},prop:[]},ht=mt,vt=Object(p["a"])(ht,dt,pt,!1,null,"73cc029a",null),bt=vt.exports;s["a"].use(w["a"]);var gt=new w["a"]({routes:[{path:"/",name:"home",component:H},{path:"/dashboard",name:"dashboard",component:ct,beforeEnter:v["b"]},{path:"/vault/:id",name:"vaultKeeps",component:bt,beforeEnter:v["b"]}]}),ft=a("2f62");s["a"].use(ft["a"]);let Ct=location.host.includes("localhost")?"https://localhost:5001/":"/",wt=u.a.create({baseURL:Ct+"api/",timeout:3e3,withCredentials:!0});var Kt=new ft["a"].Store({state:{publicKeeps:[],keepById:{},userKeeps:[],userVaults:[],activeVault:[],vaultKeeps:[],loggedIn:{}},mutations:{setKeeps(t,e){t.publicKeeps=e},setKeepById(t,e){t.keepById=e},addKeep(t,e){t.publicKeeps.push(e),t.userKeeps.push(e)},userKeeps(t,e){t.userKeeps=e},removeKeep(t,e){t.publicKeeps=t.publicKeeps.filter(t=>t.id!=e),t.userKeeps=t.userKeeps.filter(t=>t.id!=e)},userVaults(t,e){t.userVaults=e},activeVault(t,e){t.activeVault=e},addVault(t,e){t.userVaults.push(e)},removeVault(t,e){t.userVaults=t.userVaults.filter(t=>t.id!=e)},activeVaultKeep(t,e){t.vaultKeeps=e},setLogin(t,e){t.loggedIn=e}},actions:{setBearer({commit:t},e){wt.defaults.headers.authorization=e;let a=wt.defaults.headers.authorization==e;a&&t("setLogin",!0)},resetBearer(){wt.defaults.headers.authorization=""},async getKeeps({commit:t,dispatch:e}){let a=await wt.get("keeps");t("setKeeps",a.data)},async getKeepsById({commit:t,dispatch:e},a){let s=await wt.get(`keeps/${a.id}`);t("setKeepById",s.data)},async addKeep({commit:t},e){let a=await wt.post("keeps",e);t("addKeep",a.data)},async getUserKeeps({commit:t}){let e=await wt.get("keeps/myKeeps");t("userKeeps",e.data)},async deleteKeep({commit:t},e){await wt.delete(`keeps/${e.id}`),t("removeKeep",e.id)},async getUserVaults({commit:t}){let e=await wt.get("vaults/myVaults");t("userVaults",e.data)},async setActiveVault({commit:t},e){let a=await wt.get(`vaults/${e.id}`);t("activeVault",a.data)},async addVault({commit:t},e){let a=await wt.post("vaults",e);t("addVault",a.data)},async deleteVault({commit:t},e){await wt.delete(`vaults/${e.id}`),t("removeVault",e.id)},async setActiveVaultKeep({commit:t},e){t("activeVaultKeep",e)},async getVaultKeep({commit:t},e){let a=await wt.get(`vaults/${e}/keeps`);t("activeVaultKeep",a.data)},async createVaultKeep({commit:t},e){await wt.post("vaultKeeps",e)},async deleteVaultKeep({commit:t},e){await wt.delete(`vaultKeeps/${e.id}`)}}});const _t="dev-sq-bjbln.auth0.com",yt="https://keepr.com",Vt="pcfYu1UMdZMoSff64RA9hhUnk5QyKY7a";s["a"].use(v["a"],{domain:_t,clientId:Vt,audience:yt,onRedirectCallback:t=>{gt.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),new s["a"]({router:gt,store:Kt,render:function(t){return t(C)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),r=a.n(s);r.a},"9c0c":function(t,e,a){},a7d1:function(t,e,a){"use strict";var s=a("46bf"),r=a.n(s);r.a},b6a4:function(t,e,a){"use strict";var s=a("e2cc"),r=a.n(s);r.a},d8a4:function(t,e,a){"use strict";var s=a("10a0"),r=a.n(s);r.a},e2cc:function(t,e,a){}});