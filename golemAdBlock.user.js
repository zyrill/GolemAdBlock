// ==UserScript==
// @name        Golem Adblocker
// @namespace   https://github.com/zyrill/GolemAdBlock
// @description Blocks those annoying adblock notices left on Golem when using Adblock Plus
// @author      zyrill
// @include     https://www.golem.de/*
// @include     http://www.golem.de/*
// @encoding    utf-8
// @description Remove Golem Ads
// @run-at      document-idle
// @grant       none
// @version     2.0.0
// ==/UserScript==

// select the target node
var target = document.getElementById("grandwrapper");

// create an observer instance
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
//      console.log("Detected mutation: " + mutation.type);
        if (mutation.addedNodes !== null) {
            for (var i = 0; i < mutation.addedNodes.length; i++) {
//              console.log("Removing mutation: " + mutation.addedNodes[i]);
                mutation.addedNodes[i].remove();
            }
        }
    });
});

// configuration of the observer:
var config = { attributes: true, childList: true, characterData: true };

// pass in the target node, as well as the observer options
if (target !== null && typeof target === 'object') {
    observer.observe(target, config);
}

// later, you can stop observing
//observer.disconnect();
