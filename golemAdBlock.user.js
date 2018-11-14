// ==UserScript==
// @author      zyrill
// @copyright   2017, zyrill (https://openuserjs.org/users/zyrill)
// @description Blocks anti-adblock notices and some ads that Adblock Plus does not easily catch on golem.de
// @encoding    utf-8
// @grant       none
// @include     https://www.golem.de/*
// @include     http://www.golem.de/*
// @license     MIT
// @name        Golem Anti-Adblocker-Blocker
// @namespace   https://github.com/zyrill/GolemAdBlock
// @require     http://github.com/eligrey/mutaprophylaxis/raw/master/mutaprophylaxis.js
// @run-at      document-idle
// @updateURL   https://openuserjs.org/meta/zyrill/Golem_Anti-Adblocker-Blocker.meta.js
// @version     2.2.1
// ==/UserScript==

MutationEvent.protect(document.getElementById("grandwrapper"));

function removeClutter() {
  console.log("Starting clutter removal.");
  target = document.getElementById("grandwrapper");
  if (target.childNodes.length > 0) {
    for (var i = 0; i < target.childNodes.length; i++) {
      // console.log(target.childNodes[i].id);
      if (target.childNodes[i].id !== "screen") {
        console.log("Removing: " + target.childNodes[i].id);
        target.childNodes[i].remove;
      }
    }
  }
}

var target = document.body;
var observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    if (mutation.type === 'childList') {
      console.log("childList mutation detected.");
      for (var i = 0; i < mutation.addedNodes.length; i++) {
        console.log("Removing mutation: " + mutation.addedNodes[i]);
        mutation.addedNodes[i].remove();
      }
    }
    else {
      console.log("Unknown mutation detected.");
    }
  });
});
var config = {
  attributes: true,
  childList: true,
  characterData: true
};
if (target !== null && typeof target === 'object') {
  observer.observe(target, config);
  removeClutter();
}
