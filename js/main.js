(function () {
  'use strict';
  var App = window.Prasmafista || {};
  function safe(fn, label) {
    try { if (typeof fn === 'function') fn(); }
    catch (error) { if (window.console) console.error('[' + label + '] gagal dijalankan:', error); }
  }
  function start() {
    var year = document.getElementById('year');
    if (year) year.textContent = String(new Date().getFullYear());
    safe(App.initHeader, 'header');
    safe(App.initNavigation, 'navigation');
    safe(App.initReveal, 'reveal');
    safe(App.initLightbox, 'lightbox');
    var initialHash = window.location.hash;
    Promise.resolve(typeof App.runIntro === 'function' ? App.runIntro() : null)
      .catch(function (error) { if (window.console) console.error('[intro]', error); })
      .then(function () {
        window.__prasmafistaReady = true;
        document.documentElement.classList.remove('is-loading');
        document.documentElement.classList.add('nav-ready');
        if (initialHash && initialHash !== '#top' && typeof App.scrollToHash === 'function') App.scrollToHash(initialHash, true);
      });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
