!function(e){function t(t){for(var n,o,r=t[0],i=t[1],a=0,d=[];a<r.length;a++)o=r[a],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(c&&c(t);d.length;)d.shift()()}var n={},s={0:0};function o(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.e=function(e){var t=[],n=s[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,o){n=s[e]=[t,o]}));t.push(n[2]=r);var i,a=document.createElement("script");a.charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.src=function(e){return o.p+""+({1:"categories-index-js",2:"dashboard-index-js",3:"error404-index-js",4:"products-edit-index-js",5:"products-list-index-js",6:"sales-index-js"}[e]||e)+"-"+e+".js"}(e);var c=new Error;i=function(t){a.onerror=a.onload=null,clearTimeout(d);var n=s[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",c.name="ChunkLoadError",c.type=o,c.request=r,n[1](c)}s[e]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:a})}),12e4);a.onerror=a.onload=i,document.head.appendChild(a)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(n,s,function(t){return e[t]}.bind(null,s));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="course-js.javascript.ru/",o.oe=function(e){throw console.error(e),e};var r=window.webpackJsonp=window.webpackJsonp||[],i=r.push.bind(r);r.push=t,r=r.slice();for(var a=0;a<r.length;a++)t(r[a]);var c=i;o(o.s=2)}([function(e,t,n){var s={"./categories/index.js":[6,1],"./dashboard/index.js":[5,2],"./error404/index.js":[3,3],"./products/edit/index.js":[7,4],"./products/list/index.js":[4,5],"./sales/index.js":[8,6]};function o(e){if(!n.o(s,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=s[e],o=t[0];return n.e(t[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(s)},o.id=0,e.exports=o},,function(e,t,n){"use strict";n.r(t);class s{constructor(){this.routes=[],this.initEventListeners()}initEventListeners(){document.addEventListener("click",e=>{const t=e.target.closest("a");if(!t)return;const n=t.getAttribute("href");n&&n.startsWith("/")&&(e.preventDefault(),this.navigate(n))})}static instance(){return this._instance||(this._instance=new s),this._instance}async route(){let e,t=decodeURI(window.location.pathname).replace(/^\/|\/$/,"");console.error("strippedPath",t),console.error("this.routes",this.routes);for(let n of this.routes)if(e=t.match(n.pattern),e){this.page=await this.changePage(n.path,e);break}e||(this.page=await this.changePage(this.notFoundPagePath)),document.dispatchEvent(new CustomEvent("route",{detail:{page:this.page}}))}async changePage(e,t){return this.page&&this.page.destroy&&this.page.destroy(),await async function(e,t){const s=document.querySelector("main");s.classList.add("is-loading");const{default:o}=await n(0)("./".concat(e,"/index.js")),r=new o(t),i=await r.render();s.classList.remove("is-loading");const a=document.querySelector("#content");return a.innerHTML="",a.append(i),r}(e,t)}navigate(e){history.pushState(null,null,e),this.route()}addRoute(e,t){return this.routes.push({pattern:e,path:t}),this}setNotFoundPagePath(e){return this.notFoundPagePath=e,this}listen(){window.addEventListener("popstate",()=>this.route()),this.route()}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class r{removeTooltip(){this.element&&(this.element.remove(),this.element=null,document.removeEventListener("pointermove",this.onMouseMove))}constructor(){if(o(this,"element",void 0),o(this,"onMouseOver",e=>{const t=e.target.closest("[data-tooltip]");t&&(this.render(t.dataset.tooltip),this.moveTooltip(e),document.addEventListener("pointermove",this.onMouseMove))}),o(this,"onMouseMove",e=>{this.moveTooltip(e)}),o(this,"onMouseOut",()=>{this.removeTooltip()}),r.instance)return r.instance;r.instance=this}initEventListeners(){document.addEventListener("pointerover",this.onMouseOver),document.addEventListener("pointerout",this.onMouseOut)}initialize(){this.initEventListeners()}render(e){this.element=document.createElement("div"),this.element.className="tooltip",this.element.innerHTML=e,document.body.append(this.element)}moveTooltip(e){const t=e.clientX+10,n=e.clientY+10;this.element.style.left=t+"px",this.element.style.top=n+"px"}destroy(){document.removeEventListener("pointerover",this.onMouseOver),document.removeEventListener("pointerout",this.onMouseOut),this.removeTooltip()}}o(r,"instance",void 0);var i=new r;const a="course-js.javascript.ru/";console.error("URL_PATH",a);const c=new class{constructor(){i.initialize(),this.router=s.instance(),this.render(),this.addEventListeners()}get template(){return'\n      <main class="main">\n      <div class="progress-bar">\n        <div class="progress-bar__line"></div>\n      </div>\n      <aside class="sidebar">\n        <h2 class="sidebar__title">\n\x3c!--          <a href="/course-js.javascript.ru">shop admin</a>--\x3e\n          <a href="/'.concat(a,'">shop admin</a>\n        </h2>\n        <ul class="sidebar__nav">\n          <li>\n\x3c!--            <a href="/course-js.javascript.ru" data-page="dashboard">--\x3e\n            <a href="/').concat(a,'" data-page="dashboard">\n              <i class="icon-dashboard"></i> <span>Dashboard</span>\n            </a>\n          </li>\n          <li>\n            <a href="/').concat(a,'products" data-page="products">\n              <i class="icon-products"></i> <span>Products</span>\n            </a>\n          </li>\n          <li>\n\x3c!--            <a href="/course-js.javascript.ru/categories" data-page="categories">--\x3e\n            <a href="/').concat(a,'categories" data-page="categories">\n              <i class="icon-categories"></i> <span>Categories</span>\n            </a>\n          </li>\n          <li>\n\x3c!--            <a href="/course-js.javascript.ru/sales" data-page="sales">--\x3e\n            <a href="/').concat(a,'sales" data-page="sales">\n              <i class="icon-sales"></i> <span>Sales</span>\n            </a>\n          </li>\n        </ul>\n        <ul class="sidebar__nav sidebar__nav_bottom">\n          <li>\n            <button type="button" class="sidebar__toggler">\n              <i class="icon-toggle-sidebar"></i> <span>Toggle sidebar</span>\n            </button>\n          </li>\n        </ul>\n      </aside>\n      <section class="content" id="content">\n\n      </section>\n    </main>\n    ')}render(){const e=document.createElement("div");e.innerHTML=this.template,this.element=e.firstElementChild,document.body.append(this.element)}initializeRouter(){this.router.addRoute(new RegExp("^".concat(a,"$")),"dashboard").addRoute(new RegExp("^".concat(a,"products$")),"products/list").addRoute(new RegExp("^".concat(a,"products/add$")),"products/edit").addRoute(new RegExp("^".concat(a,"products/([\\w()-]+)$")),"products/edit").addRoute(new RegExp("^".concat(a,"sales$")),"sales").addRoute(new RegExp("^".concat(a,"categories$")),"categories").addRoute(/404\/?$/,"error404").setNotFoundPagePath("error404").listen()}addEventListeners(){this.element.querySelector(".sidebar__toggler").addEventListener("click",e=>{e.preventDefault(),document.body.classList.toggle("is-collapsed-sidebar")})}};document.body.append(c.element),c.initializeRouter()}]);
//# sourceMappingURL=app.bundle.js.map