// ==UserScript==
// @name         Redirect Script
// @namespace    your-namespace
// @version      1.0
// @description  Redirects specified URLs to different hosts with HTTPS scheme.
// @match        *://reddit.com/*
// @match        *://twitter.com/*
// @match        *://youtube.com/*
// @match        *://medium.com/*
// @match        *://imdb.com/*
// @match        *://imgur.com/*
// @match        *://stackoverflow.com/*
// @match        *://wikipedia.org/*
// @match        *://ajax.googleapis.com/*
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    var redirects = [
        { urlFilter: "||reddit.com", host: "libreddit.kutay.dev" },
        { urlFilter: "||twitter.com", host: "twitter.dr460nf1r3.org" },
        { urlFilter: "||youtube.com", host: "piped.hostux.net" },
        { urlFilter: "||medium.com", host: "medium.hostux.net" },
        { urlFilter: "||imdb.com", host: "lmdb.hostux.net" },
        { urlFilter: "||imgur.com", host: "rimgo.hostux.net" },
        { urlFilter: "||stackoverflow.com", host: "overflow.smnz.de" },
        { urlFilter: "||wikipedia.org", host: "wikiless.tiekoetter.com" },
        { urlFilter: "||ajax.googleapis.com", host: "cdnjs.cloudflare.com" }
    ];

    function applyRedirect(url, host) {
        var newUrl = url.replace(/^(https?:\/\/)([^/]+)/, function(match, scheme, oldHost) {
            return scheme + host;
        });
        window.location.replace(newUrl);
    }

    function shouldApplyRedirect(url, condition) {
        var urlFilter = condition.urlFilter;
        var resourceTypes = condition.resourceTypes;

        if (urlFilter === "*" && resourceTypes.includes("main_frame")) {
            return true;
        }

        var urlRegex = urlFilter.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&").replace(/\\\*/g, ".*");
        var regex = new RegExp(urlRegex, "i");

        return regex.test(url) && resourceTypes.includes("main_frame");
    }

    redirects.forEach(function(redirect) {
        if (shouldApplyRedirect(window.location.href, redirect)) {
            applyRedirect(window.location.href, redirect.host);
        }
    });
})();
