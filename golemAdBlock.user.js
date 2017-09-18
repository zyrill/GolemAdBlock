// ==UserScript==
// @name        Golem Adblocker
// @namespace   https://github.com/zyrill/GolemAdBlock
// @description Blocks those annoying adblock notices left on Golem when using Adblock Plus
// @author      zyrill
// @include     https://www.golem.de/*
// @include     http://www.golem.de/*
// @encoding    utf-8
// @description Remove Golem Ads
// @grant       none
// @run-at      document-idle
// @version     1.3.0
// ==/UserScript==

setTimeout(main, 3000);

function main() {
  try { var nodeList = document.getElementById("grandwrapper").childNodes; }
  catch(err) { console.log(err.message); }
  
  try {
    if (nodeList !== null) {
      for (var i = 0; i < nodeList.length; i++) {
        if (nodeList[0].id === "screen") {
          i = nodeList.length;
        }
  	    else {
          nodeList[0].remove();
        }
      }
    }
  }
  catch(err) { console.log(err); }
}
