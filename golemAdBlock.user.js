// ==UserScript==
// @name        Golem Anti-Adblocker-Blocker
// @namespace   https://github.com/zyrill/GolemAdBlock
// @description Blocks those annoying anti-adblock notices left on Golem when using an adblocker
// @author      zyrill
// @include     https://www.golem.de/*
// @include     http://www.golem.de/*
// @encoding    utf-8
// @description Remove Golem anti-adblocker banner
// @run-at      document-idle
// @grant       none
// @version     2.0.3
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
