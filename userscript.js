// ==UserScript==
// @name         verdana on break
// @namespace    everything
// @version      1
// @description  press Pause/Break to set all fonts to Verdana
// @author       some fucker
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...

    document.addEventListener('keydown', function(event) {
        if (event.which === 19) {

            var style = document.createElement('style');
            style.type = 'text/css';
            style.innerHTML = '* {font-family: verdana !important;}';
            document.getElementsByTagName('head')[0].appendChild(style);

        }
    });

})();
