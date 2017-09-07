// ==UserScript==
// @name        Golem Adblocker
// @namespace   https://github.com/zyrill/GolemAdBlock
// @description Blocks those annoying adblock notices left on Golem when using Adblock Plus
// @author      zyrill
// @include     https://www.golem.de/*
// @encoding    utf-8
// @description Remove Golem Ads
// @grant       none
// @run-at      document-idle
// @version     1.0
// ==/UserScript==

// Get all child elements of main presentation element
var nodeList = document.getElementById("screen").childNodes;
nodeList.forEach(
  function(value, key, listObj, argument) {
    var serializedHTML = value.outerHTML;
    // Only consider those elements containing text
    if ((typeof serializedHTML) === "string" ) {
      //console.log(serializedHTML.search(">Anzeige</div>"));
      // Select the element that says "Anzeige" and remove it
      if (serializedHTML.search("style=\"text-align: left;\">Anzeige</div>") > 0) {
        //console.log(serializedHTML);
        //console.log(value);
        value.remove();
      }
    }
  }
)
