parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return n(e)||o(e)||t(e)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function t(e,r){if(e){if("string"==typeof e)return c(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?c(e,r):void 0}}function o(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function n(e){if(Array.isArray(e))return c(e)}function c(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,o=new Array(r);t<r;t++)o[t]=e[t];return o}var l=document.querySelectorAll(".button"),a=document.querySelector(".field"),d=document.querySelector("tr"),i=document.querySelector("td"),u=2,s=10,f=document.querySelector(".append-row"),m=document.querySelector(".remove-row"),b=document.querySelector(".append-column"),y=document.querySelector(".remove-column");l.forEach(function(r){r.addEventListener("click",function(){switch(r){case f:a.tBodies[0].append(d.cloneNode(!0)),m.disabled=!1;break;case m:a.deleteRow(1),f.disabled=!1;break;case b:e(a.rows).forEach(function(e){e.append(i.cloneNode(!0)),y.disabled=!1});break;case y:e(a.rows).forEach(function(e){e.deleteCell(1),b.disabled=!1})}f.disabled=a.rows.length===s,m.disabled=a.rows.length===u,b.disabled=a.rows[0].cells.length===s,y.disabled=a.rows[0].cells.length===u})});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.5412d011.js.map