(function () {
  'use strict';
  var App = (window.Prasmafista = window.Prasmafista || {});
  function clamp(value, min, max) { return Math.min(max, Math.max(min, value)); }

  App.initHeader = function () {
    var header = document.getElementById('siteHeader');
    var logoLink = document.getElementById('siteLogo');
    if (!header || !logoLink) return;
    var ringBar = logoLink.querySelector('.site-logo__ring-bar');
    var ringLength = 289.03;
    var ticking = false;
    var scrolled = false;

    function update() {
      ticking = false;
      var y = window.scrollY || document.documentElement.scrollTop || 0;
      scrolled = y > 40;
      header.classList.toggle('is-scrolled', scrolled);
      if (ringBar) {
        var maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        var progress = maxScroll > 0 ? clamp(y / maxScroll, 0, 1) : 0;
        ringBar.style.strokeDashoffset = String(ringLength * (1 - progress));
        logoLink.setAttribute('aria-label', scrolled
          ? 'Kembali ke atas. Cincin di sekeliling logo menunjukkan progres gulir.'
          : 'Buka Instagram Prasmafista.');
      }
    }
    function requestUpdate() {
      if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
    }
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    logoLink.addEventListener('click', function (event) {
      if (!header.classList.contains('is-scrolled')) return;
      event.preventDefault();
      if (App.scrollToHash) App.scrollToHash('#top');
      else window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
      try { history.replaceState(null, '', location.pathname + location.search); } catch (e) {}
    });
    update();
  };
})();
