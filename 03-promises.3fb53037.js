var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t);var i=t("iQIUW");function r(e,o){const n=Math.random()>.3;return new Promise(((t,i)=>{setTimeout((()=>{n?t({position:e,delay:o}):i({position:e,delay:o})}),o)}))}({form:document.querySelector(".form")}).form.addEventListener("submit",(function(e){e.preventDefault();const{elements:{delay:{value:o},step:{value:n},amount:{value:t}}}=e.currentTarget;!function(e,o,n){for(let t=0;t<n;t+=1)r(t+1,parseInt(e)+t*parseInt(o)).then((({position:e,delay:o})=>{i.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`),console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{i.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`),console.log(`❌ Rejected promise ${e} in ${o}ms`)}))}(o,n,t)}));
//# sourceMappingURL=03-promises.3fb53037.js.map