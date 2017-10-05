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
// @version     1.5.0
// ==/UserScript==

function main() {
  var insertedNodes = [];
  var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    for (var i = 0; i < mutation.addedNodes.length; i++)
      insertedNodes.push(mutation.addedNodes[i]);
    })
  });
  observer.observe(document, { childList: true });
  console.log("Node inserts: " + insertedNodes.length);

  insertedNodes.forEach(function(node) {
    node.remove();
  })
  
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
