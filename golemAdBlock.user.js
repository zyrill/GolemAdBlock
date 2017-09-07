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
// @version     1.1.0
// ==/UserScript==

try { var nodeList = document.getElementById("grandwrapper").childNodes; }
catch(err) { console.log(err.message); }

nodeList.every(function(element, index) {
  element.remove;
  if (element.id === "screen") return false
  else return true
})
