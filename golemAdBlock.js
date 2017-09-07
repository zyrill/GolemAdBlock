// ==UserScript==
// @name        Golem remove top ad
// @include     https://www.golem.de/*
// @description Remove Golem Ads
// @grant       none
// @version     0.1
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
