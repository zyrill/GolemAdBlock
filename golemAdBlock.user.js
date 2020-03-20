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
// @version     3.1.0
// ==/UserScript==

var observer = new MutationObserver(
  function(mutations) {
    
    // Use different filtering logic on article pages
    if (window.location.pathname.includes("news")) {
      let n = 0;
      
      let nodeList0 = document.body.childNodes;
      for(let i = 0; i < nodeList0.length; i++) {
        if (nodeList0[n].className === "golemContentToHide") { n++; continue; }
        nodeList0[n].remove();
      }
      
      n = 0;
      let nodeList1 = document.getElementsByClassName("golemContentToHide")[0].childNodes;
      for(let i = 0; i < nodeList1.length; i++) {
        if (nodeList1[n].id === "grandwrapper") { n++; continue; }
        nodeList1[n].remove();
      }
      
      n = 0;
      console.log("Checkpoint");
      let nodeList2 = document.getElementById("grandwrapper").childNodes;
      for(let i = 0; i < nodeList2.length; i++) {
        if (nodeList2[n].id === "screen") { n++; continue; }
        nodeList2[n].remove();
      }
      
      n = 0;
      let nodeList3 = document.getElementById("screen").childNodes;
      for(let i = 0; i < nodeList3.length; i++) {
        if (nodeList3[n].className === "g g6" && n === 0) { n++; continue; }
        nodeList3[n].remove();
      }
      
      n = 0;
      let nodeList4 = document.getElementsByClassName("g g6")[0].childNodes[1].childNodes;
      for(let i = 0; i < nodeList4.length; i++) {
        if (nodeList4[n].className === "cluster-header" || nodeList4[n].className === "formatted") { n++; continue; }
        nodeList4[n].remove();
      }

      // Remove some additional clutter
      document.getElementsByClassName("social-tools")[0].remove();
      document.getElementById("job-market").remove();
      
    // Filter logic for main page
    } else {
      if (document.body.hasChildNodes()) {
        let nodeList0 = document.body.childNodes;
        for(let i = 0; i < nodeList0.length; i++) {
          if (nodeList0[0].className === "golem-flip-std") { continue; }
          nodeList0[0].remove();
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
      console.log("Pathname: " + window.location.pathname);
      for(let i = 0; i < nodeList3.length; i++) {
        if (nodeList3[n].id === "index-promo" || nodeList3[n].className === "g g4" || nodeList3[n].className === "longvideo-teaser"|| nodeList3[n].className === "longread-teaser") { n++; continue; }
        nodeList3[n].remove();
      }
    }
  }
)

observer.observe(document.body, { attributes: true, childList: true, attributeOldValue: true })
