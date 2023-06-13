// ==UserScript==
// @name         Redirect
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
        }
        else if (host.includes('reddit.com') || host.includes('www.reddit.com')) {
            redirectUrl = 'https://libreddit.kutay.dev';
        }
		 else if (host.includes('twitter.com') || host.includes('www.twitter.com')) {
            redirectUrl = 'https://twitter.dr460nf1r3.org';
        }
		 else if (host.includes('medium.com') || host.includes('www.medium.com')) {
            redirectUrl = 'https://medium.hostux.net';
        }
		 else if (host.includes('imdb.com') || host.includes('www.imdb.com')) {
            redirectUrl = 'https://lmdb.hostux.net';
        }
		 else if (host.includes('imgur.com') || host.includes('i.imgur.com')) {
            redirectUrl = 'https://rimgo.hostux.net';
        }
		 else if (host.includes('stackoverflow.com') || host.includes('www.stackoverflow.com')) {
            redirectUrl = 'https://overflow.smnz.de';
        } 
		 else if (host.includes('wikipedia.org') || host.includes('en.wikipedia.org') || host.includes('fr.wikipedia.org')) {
            redirectUrl = 'https://wikiless.tiekoetter.com';
        }

        if (redirectUrl !== '') {
            location.href = redirectUrl + path;
        }
    }

    redirect();
})();
