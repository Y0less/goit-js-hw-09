const t={startButton:document.querySelector("[data-start]"),stopButton:document.querySelector("[data-stop]"),body:document.querySelector("body")};t.startButton.addEventListener("click",(function(){o=setInterval(e,1e3)})),t.stopButton.addEventListener("click",(function(){clearInterval(o)}));let o=null;function e(){t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}
//# sourceMappingURL=01-color-switcher.5bc38ad8.js.map
