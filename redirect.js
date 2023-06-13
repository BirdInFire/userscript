// ==UserScript==
// @name         Redirect to Perdu
// @author       BirdInFire
// @description  Redirection of my extension to safari with userscript
// @version      1
// @match        *://*.reddit.com/*
// @match        *://*.twitter.com/*
// @match        *://*.youtube.com/*
// @match        *://*.medium.com/*
// @match        *://*.imdb.com/*
// @match        *://*.imgur.com/*
// @match        *://*.stackoverflow.com/*
// @match        *://*.wikipedia.org/*
// @match        *://ajax.googleapis.com/*
// @run-at       document-start
// ==/UserScript==

(function() {
    function redirect() {
        const host = location.hostname;
        const path = location.pathname + location.search;

        let redirectUrl = '';

        if (host.includes('youtube.com') || host.includes('www.youtube.com')) {
            redirectUrl = 'https://piped.hostux.net';
        } else if (host.includes('twitter.com')) {
            redirectUrl = 'https://perdu.com';
        }

        if (redirectUrl !== '') {
            location.href = redirectUrl + path;
        }
    }

    redirect();
})();
