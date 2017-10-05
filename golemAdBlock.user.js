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
// @version     1.5.1
// ==/UserScript==

setTimeout(main(), 4000);

function main() {
    var nodeList = [];
    try { nodeList = document.getElementById("grandwrapper").childNodes; }
    catch(err) { console.log("No matching nodes found.");}

    if (nodeList !== null) {
        console.log("Removing nodes.");
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
