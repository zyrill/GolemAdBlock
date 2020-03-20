// ==UserScript==
// @author      zyrill
// @copyright   2017, zyrill (https://openuserjs.org/users/zyrill)
// @description Blocks anti-adblock notices and some ads that Adblock Plus does not easily catch on golem.de
// @encoding    utf-8
// @grant       none
// @include     https://www.golem.de/*
// @license     MIT
// @name        Golem Anti-Adblocker-Blocker
// @namespace   https://github.com/zyrill/GolemAdBlock
// @run-at      document-idle
// @updateURL   https://openuserjs.org/meta/zyrill/Golem_Anti-Adblocker-Blocker.meta.js
// @version     3.0.1
// ==/UserScript==

var observer = new MutationObserver(
  function(mutations) {
    
    if (document.body.hasChildNodes()) {
      let nodeList = document.body.childNodes;
      for(let i = 0; i < nodeList.length; i++) {
        if (nodeList[0].className === "golem-flip-std") { continue; }
        nodeList[0].remove();
      }
    }
    
    let nodeList1 = document.getElementsByClassName("golem-flip-std")[0].childNodes;
    for(let i = 0; i < nodeList1.length; i++) {
      if (nodeList1[0].id === "grandwrapper") { continue; }
      nodeList1[0].remove();
    }
    
    let nodeList2 = document.getElementById("grandwrapper").childNodes;
    let n = 0;
    for(let i = 0; i < nodeList2.length; i++) {
      console.log(nodeList2[0].nodeName);
      if (nodeList2[n].id === "screen") { n++; continue; }
      nodeList2[n].remove();
    }
    
    let nodeList3 = document.getElementById("screen").childNodes;
    n = 0;
    for(let i = 0; i < nodeList3.length; i++) {
      if (nodeList3[n].id === "index-promo" || nodeList3[n].className === "g g4" || nodeList3[n].className === "longvideo-teaser"|| nodeList3[n].className === "longread-teaser") { n++; continue; }
      nodeList3[n].remove();
    }
    
  }
)

observer.observe(document.body, { attributes: true, childList: true, attributeOldValue: true })
