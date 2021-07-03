(()=>{"use strict";var e={212:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]);const i=o},426:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,"::-webkit-scrollbar {\n  background-color: #27292a;\n  color: #afaaa2;\n}\n::-webkit-scrollbar-corner {\n  background-color: #1f2021;\n}\n::-webkit-scrollbar-thumb {\n  background-color: #4c5052;\n}\n:root {\n  --dark-background: #182949;\n  --dark-gray: #1e2024;\n  --basic-red: rgb(228, 62, 56);\n  --lighter-red: rgb(236, 91, 86);\n}\nhtml {\n  font-size: 1.1em;\n  font-family: 'Helvetica', 'Arial', sans-serif;\n  background-color: var(--dark-background);\n}\nheader {\n  position: fixed;\n  width: 100%;\n  font-size: 0.9em;\n  background-color: var(--dark-gray);\n  color: white;\n}\n#content {\n  overflow: auto;\n  position: absolute;\n  top: 3em;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\nnav {\n  padding: 1.2em;\n  width: 75%;\n  margin: 0 auto;\n}\nheader a {\n  padding: 0 1em;\n  cursor: pointer;\n  transition: color 0.3s;\n}\nheader a:hover {\n  color: var(--lighter-red);\n  transition: color 0.1s;\n}\n.hero-section {\n  height: 70vh;\n  min-height: 40em;\n  width: 100%;\n  background-color: #24262b;\n  display: flex;\n  flex-direction: row;\n}\n.hero-photo {\n  /* background: url(\"pizza-hero.jpg\") fixed center; */\n  /* background-color: blue; */\n  height: 100%;\n  width: 60vw;\n}\n.hero-copy {\n  background-color: white;\n  height: 100%;\n  width: 40vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.hero-copy-content {\n  width: 60%;\n  padding-bottom: 4em;\n}\nh1 {\n  font-size: 3.3em;\n  font-weight: bold;\n  padding-bottom: 0.3em;\n}\n.hero-copy-content p {\n  font-size: 1.2em;\n  padding-bottom: 0.5em;\n}\nbutton {\n  font-size: 1em;\n  font-weight: bold;\n  text-transform: uppercase;\n  margin: 1.5em 0;\n  padding: 0.7em 1.9em;\n  border-radius: 1em;\n  border: none;\n  background-color: var(--basic-red);\n  color: white;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\nbutton:hover {\n  background-color: var(--lighter-red);\n  transition: background-color 0.1s;\n}\n.about-section {\n  padding: 6em 0;\n  background-color: var(--dark-gray);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.about-content {\n  color: white;\n  font-size: 1.1em;\n  line-height: 1.5em;\n  width: 45%;\n  max-width: 45em;\n}\n.about-content h2 {\n  font-size: 1.1em;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;;\n  font-weight: bold;\n}\n.about-content p {\n  margin-block-start: 1em;\n  margin-block-end: 1em;\n}\n.menu-section {\n  width: 100%;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.menu-container {\n  width: 75%;\n  background-color: white;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  padding: 2em 15% 6em 15%;\n  gap: 1em 1em;\n  box-sizing: border-box;\n}\n.item-container {\n  text-align: center;\n  padding: 1.3em 0.8em;\n  border: 1px solid rgb(168, 178, 187);\n  border-radius: 0.5em;\n  height: 9em;\n}\n.item-name {\n  font-size: 1.5em;\n  font-weight: 700;\n  padding-bottom: 0.3em;\n}\n.item-description {\n  font-size: 0.8em;\n  padding-bottom: 2.5em;\n}\n.item-price {\n  font-size: 0.8em;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  padding: 0.5em 0.5em;\n  border-radius: 0.3em;\n  background-color: var(--basic-red);\n  color: white;\n}",""]);const i=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&o[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),n.push(d))}},n}},695:e=>{var n={};e.exports=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var d=e[c],s=r.base?d[0]+r.base:d[0],l=i[s]||0,u="".concat(s," ").concat(l);i[s]=l+1;var p=t(u),m={css:d[1],media:d[2],sourceMap:d[3]};-1!==p?(n[p].references++,n[p].updater(m)):n.push({identifier:u,updater:o(m,r),references:1}),a.push(u)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var d=r(e,o),s=0;s<i.length;s++){var l=t(i[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=d}}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n),n}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},625:(e,n,t)=>{e.exports=t.p+"5a441d554b844a4e73ea.jpg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),i=t(695),a=t.n(i),c=t(216),d=t.n(c),s=t(212),l={styleTagTransform:function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}},setAttributes:function(e){var n=t.nc;n&&e.setAttribute("nonce",n)},insert:function(e){var n=a()("head");if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(e)}};l.domAPI=o(),l.insertStyleElement=d(),n()(s.Z,l),s.Z&&s.Z.locals&&s.Z.locals;var u=t(426),p={styleTagTransform:function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}},setAttributes:function(e){var n=t.nc;n&&e.setAttribute("nonce",n)},insert:function(e){var n=a()("head");if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(e)}};p.domAPI=o(),p.insertStyleElement=d(),n()(u.Z,p),u.Z&&u.Z.locals&&u.Z.locals;var m=t(625);function h(e){const n=document.createElement("section");n.classList.add("hero-section"),function(e){const n=document.createElement("div"),t=new Image;t.src=m,t.setAttribute("width","100%"),t.setAttribute("height","100%"),t.setAttribute("style","object-fit: cover"),n.classList.add("hero-photo"),n.appendChild(t),e.appendChild(n)}(n),function(e){const n=document.createElement("div"),t=document.createElement("div");n.classList.add("hero-copy"),t.classList.add("hero-copy-content");const r=document.createElement("h1");r.innerText="Chicago's Favorite Pizza";const o=document.createElement("p");o.innerText="Rated #1 in 2020";const i=document.createElement("button");i.dataset.callback="displayMenu",i.innerText="Order Now",t.appendChild(r),t.appendChild(o),t.appendChild(i),n.appendChild(t),e.appendChild(n)}(n),e.appendChild(n);const t=document.createElement("section");return t.classList.add("about-section"),function(e){const n=document.createElement("div");n.classList.add("about-content");const t=document.createElement("h2");t.innerText="Our Story";const r=document.createElement("p");r.innerText="On April 9, 1964, our story began in Gurnee, IL when Greg Mangione opened the first Mangione's Pizzeria. The restaurant was to be a model of hospitality and community.";const o=document.createElement("p");o.innerText="Since then, our restaurants have spent over 50 years delivering the absolute best pizza.",n.appendChild(t),n.appendChild(r),n.appendChild(o),e.appendChild(n)}(t),e.appendChild(t),"Home"}const f={menuItems:[{name:"Cheese Slice",description:"A big slice of standard Cheese.",price:"$3.98"},{name:"Sausage Slice",description:"A sweet slice of down home Sausage.",price:"$4.34"},{name:"Pepperoni Slice",description:"A killin' slice of spicy pepperoni.",price:"$4.34"},{name:"Supreme Slice",description:"All that you want on a big ol' slice.",price:"$4.51"},{name:"Cheese Pizza",description:"A whole spankin' Cheese Pizza.",price:"$8.93"},{name:"Sausage Pizza",description:"A larger than life Sausage Pizza.",price:"$9.61"},{name:"Pepperoni Pizza",description:"The Pepperoni Pizza of your dreams.",price:"$9.61"}]};function b(e){const n=document.createElement("div");n.classList.add("menu-section");const t=document.createElement("div");return t.classList.add("menu-container"),n.appendChild(t),e.appendChild(n),function(e){f.menuItems.forEach((n=>{const t=document.createElement("div");t.classList.add("item-container");const r=document.createElement("h3");r.innerText=n.name,r.classList.add("item-name");const o=document.createElement("p");o.innerText=n.description,o.classList.add("item-description");const i=document.createElement("span");i.innerText=n.price,i.classList.add("item-price"),t.appendChild(r),t.appendChild(o),t.appendChild(i),e.appendChild(t)}))}(t),"Menu"}const g=document.querySelector("#content"),v=document.querySelector("body");let y="";function w(){for(;g.firstChild;)g.removeChild(g.lastChild);g.childNodes.forEach((e=>{e.remove()}))}function C(){document.querySelectorAll("button").forEach((e=>{e.addEventListener("click",(function(n){w(),"displayHome"==e.dataset.callback?y=h(g):"displayContact"==e.dataset.callback?y="Contact":"displayMenu"==e.dataset.callback&&(y=b(g))}))}))}!function(){const e=document.createElement("header"),n=document.createElement("nav");["Home","Contact","Menu"].forEach((e=>{const t=document.createElement("a");t.innerHTML=e,t.addEventListener("click",(function(e){y!=e.target.innerText&&(w(),"Home"==e.target.innerText?y=h(g):"Contact"==e.target.innerText?y="Contact":"Menu"==e.target.innerText&&(y=b(g))),C()})),n.appendChild(t)})),v.insertBefore(e,g),e.appendChild(n)}(),y=h(g),C()})()})();