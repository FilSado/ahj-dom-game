(()=>{"use strict";var e={56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],u=i[l]||0,d="".concat(l," ").concat(u);i[l]=u+1;var p=n(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,r);r.byIndex=c,t.splice(c,0,{identifier:d,updater:m,references:1})}a.push(d)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var s=r(e,o),l=0;l<i.length;l++){var u=n(i[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}i=s}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},208:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(601),o=n.n(r),i=n(314),a=n.n(i)()(o());a.push([e.id,"#game-board {\n  display: grid;\n  grid-template-columns: repeat(4, 100px); /* Размер ячейки 100px */\n  grid-template-rows: repeat(4, 100px); /* Размер ячейки 100px */\n  width: 400px; /* Общая ширина доски */\n  height: 400px; /* Общая высота доски */\n  margin: 20px auto;\n  border: 1px solid black;\n}\n\n.cell {\n  border: 1px solid #ddd;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#goblin {\n  width: 80px;\n  height: 80px;\n  cursor: pointer;\n}\n",""]);const c=a},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},601:e=>{e.exports=function(e){return e[1]}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.p="/",n.nc=void 0;var r=n(72),o=n.n(r),i=n(825),a=n.n(i),c=n(659),s=n.n(c),l=n(56),u=n.n(l),d=n(540),p=n.n(d),f=n(113),m=n.n(f),h=n(208),v={};v.styleTagTransform=m(),v.setAttributes=u(),v.insert=s().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=p(),o()(h.A,v),h.A&&h.A.locals&&h.A.locals;const b=n.p+"2dbd01ce16c0fa83cb67.png";function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,x(r.key),r)}}function x(e){var t=function(e){if("object"!=y(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==y(t)?t:t+""}var S=function(){return e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.board=document.getElementById("game-board"),this.boardSize=4,this.currentPosition=null,this.goblinImage=null},(t=[{key:"createGameBoard",value:function(){this.board.innerHTML="";for(var e=0;e<this.boardSize*this.boardSize;e+=1){var t=document.createElement("div");t.classList.add("cell"),this.board.appendChild(t)}}},{key:"placeGoblin",value:function(e){var t,n=document.querySelectorAll(".cell");if(n[e]){null!==this.currentPosition&&n[this.currentPosition].contains(this.goblinImage)&&n[this.currentPosition].removeChild(this.goblinImage);var r=((t=document.createElement("img")).src=b,t.alt="Goblin",t.id="goblin",t.style.width="80px",t.style.height="80px",t);r.src="img/goblin.png",r.alt="Goblin",r.classList.add("goblin"),r.id="goblin",this.goblinImage=r,n[e].appendChild(this.goblinImage),this.currentPosition=e}}},{key:"moveGoblin",value:function(){var e,t=document.querySelectorAll(".cell");if(null!==this.currentPosition){var n=t[this.currentPosition];n&&n.contains(this.goblinImage)&&n.removeChild(this.goblinImage)}do{e=Math.floor(Math.random()*this.boardSize*this.boardSize)}while(e===this.currentPosition);this.placeGoblin(e),this.currentPosition=e}},{key:"getGoblinElement",value:function(){return this.goblinImage}},{key:"getCurrentPosition",value:function(){return this.currentPosition}}])&&g(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}();document.addEventListener("DOMContentLoaded",(function(){(new S).init()}))})();