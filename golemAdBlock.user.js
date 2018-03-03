// ==UserScript==
// @author      zyrill
// @copyright   2017, zyrill (https://openuserjs.org/users/zyrill)
// @description Blocks those annoying anti-adblock notices left on Golem when using an adblocker
// @encoding    utf-8
// @grant       none
// @include     https://www.golem.de/*
// @include     http://www.golem.de/*
// @license     MIT
// @name        Golem Anti-Adblocker-Blocker
// @namespace   https://github.com/zyrill/GolemAdBlock
// @run-at      document-idle
// @updateURL   https://openuserjs.org/meta/zyrill/Golem_Anti-Adblocker-Blocker.meta.js
// @version     2.0.5
// ==/UserScript==
var target = document.getElementById("grandwrapper");
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.addedNodes !== null) {
            for (var i = 0; i < mutation.addedNodes.length; i++) {
                mutation.addedNodes[i].remove();
            }
        }
    });
});

var config = { attributes: true, childList: true, characterData: true };
if (target !== null && typeof target === 'object') {
    observer.observe(target, config);
}

//observer.disconnect();
