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
// @version     3.1.1
// ==/UserScript==
var observer = new MutationObserver((function (mutations) {
            // Use different filtering logic on article pages
            if (window.location.pathname.includes("news")) {
                let n = 0,
                nodeList0 = document.body.childNodes;
                for (let i = 0; i < nodeList0.length; i++)
                    "golemContentToHide" !== nodeList0[n].className ? nodeList0[n].remove() : n++;
                n = 0;
                let nodeList1 = document.getElementsByClassName("golemContentToHide")[0].childNodes;
                for (let i = 0; i < nodeList1.length; i++)
                    "grandwrapper" !== nodeList1[n].id ? nodeList1[n].remove() : n++;
                n = 0,
                console.log("Checkpoint");
                let nodeList2 = document.getElementById("grandwrapper").childNodes;
                for (let i = 0; i < nodeList2.length; i++)
                    "screen" !== nodeList2[n].id ? nodeList2[n].remove() : n++;
                n = 0;
                let nodeList3 = document.getElementById("screen").childNodes;
                for (let i = 0; i < nodeList3.length; i++)
                    "g g6" !== nodeList3[n].className || 0 !== n ? nodeList3[n].remove() : n++;
                n = 0;
                let nodeList4 = document.getElementsByClassName("g g6")[0].childNodes[1].childNodes;
                for (let i = 0; i < nodeList4.length; i++)
                    "cluster-header" !== nodeList4[n].className && "formatted" !== nodeList4[n].className ? nodeList4[n].remove() : n++;
                // Remove some additional clutter
                document.getElementsByClassName("social-tools")[0].remove(),
                document.getElementById("job-market").remove()
            } else {
                if (document.body.hasChildNodes()) {
                    let nodeList0 = document.body.childNodes;
                    for (let i = 0; i < nodeList0.length; i++)
                        "golem-flip-std" !== nodeList0[0].className && nodeList0[0].remove()
                }
                let nodeList1 = document.getElementsByClassName("golem-flip-std")[0].childNodes;
                for (let i = 0; i < nodeList1.length; i++)
                    "grandwrapper" !== nodeList1[0].id && nodeList1[0].remove();
                let nodeList2 = document.getElementById("grandwrapper").childNodes,
                n = 0;
                for (let i = 0; i < nodeList2.length; i++)
                    console.log(nodeList2[0].nodeName), "screen" !== nodeList2[n].id ? nodeList2[n].remove() : n++;
                let nodeList3 = document.getElementById("screen").childNodes;
                n = 0,
                console.log("Pathname: " + window.location.pathname);
                for (let i = 0; i < nodeList3.length; i++)
                    "index-promo" !== nodeList3[n].id && "g g4" !== nodeList3[n].className && "longvideo-teaser" !== nodeList3[n].className && "longread-teaser" !== nodeList3[n].className ? nodeList3[n].remove() : n++
            }
        }));
observer.observe(document.body, {
    attributes: !0,
    childList: !0,
    attributeOldValue: !0
});
