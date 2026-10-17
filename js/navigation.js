/* =========================================================
   NAVIGATION — scroll halus ke bagian (tanpa pindah halaman)
   + penanda menu aktif sesuai posisi scroll (scroll-spy)
   ========================================================= */
(function () {
  'use strict';

  var App = (window.Prasmafista = window.Prasmafista || {});

  function prefersReduced() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function getTarget(hash) {
    if (!hash || hash.length < 2) return null;
    var id = hash.slice(1);
    try { id = decodeURIComponent(id); } catch (e) { /* pakai apa adanya */ }
    return document.getElementById(id);
  }

  /** Scroll halus ke hash tertentu (mis. "#struktur"). */
  App.scrollToHash = function (hash, instant) {
    var behavior = instant || prefersReduced() ? 'auto' : 'smooth';
    if (hash === '#top') {
      window.scrollTo({ top: 0, left: 0, behavior: behavior });
      return true;
    }
    var target = getTarget(hash);
    if (!target) return false;
    target.scrollIntoView({ behavior: behavior, block: 'start' });
    return true;
  };

  App.initNavigation = function () {
    // Semua tautan #... → scroll halus, URL ikut diperbarui tanpa memuat ulang
    document.addEventListener('click', function (e) {
      var link = e.target.closest ? e.target.closest('a[href^="#"]') : null;
      if (!link) return;
      var hash = link.getAttribute('href');
      if (hash === '#' || document.documentElement.classList.contains('is-loading')) return;
      if (App.scrollToHash(hash)) {
        e.preventDefault();
        try { history.replaceState(null, '', hash === '#top' ? location.pathname + location.search : hash); } catch (err) { /* file:// tertentu */ }
      }
    });

    // Scroll-spy
    var navLinks = Array.prototype.slice.call(document.querySelectorAll('[data-nav]'));
    var sections = navLinks
      .map(function (a) { return document.getElementById(a.getAttribute('data-nav')); })
      .filter(Boolean);
    if (!sections.length) return;

    var ticking = false;
    var current = '';

    function update() {
      ticking = false;
      var probe = window.scrollY + window.innerHeight * 0.35;
      var activeId = sections[0].id;

      sections.forEach(function (sec) {
        if (sec.offsetTop <= probe) activeId = sec.id;
      });

      // Mentok di dasar halaman → bagian terakhir (Dokumentasi)
      var atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom) activeId = sections[sections.length - 1].id;

      if (activeId === current) return;
      current = activeId;
      navLinks.forEach(function (a) {
        var on = a.getAttribute('data-nav') === activeId;
        a.classList.toggle('is-active', on);
        if (on) a.setAttribute('aria-current', 'true');
        else a.removeAttribute('aria-current');
      });
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();
  };
})();
