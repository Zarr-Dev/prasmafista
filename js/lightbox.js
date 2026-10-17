/* =========================================================
   LIGHTBOX — klik foto dokumentasi untuk memperbesar
   Tombol: Esc (tutup), ← → (ganti foto), klik latar (tutup)
   ========================================================= */
(function () {
  'use strict';

  var App = (window.Prasmafista = window.Prasmafista || {});

  App.initLightbox = function () {
    var box = document.getElementById('lightbox');
    var img = document.getElementById('lightboxImg');
    var caption = document.getElementById('lightboxCaption');
    var items = Array.prototype.slice.call(document.querySelectorAll('.gallery__item'));
    if (!box || !img || !items.length) return;

    var closeBtn = box.querySelector('.lightbox__close');
    var prevBtn = box.querySelector('.lightbox__nav--prev');
    var nextBtn = box.querySelector('.lightbox__nav--next');
    var focusable = [closeBtn, prevBtn, nextBtn];

    var index = 0;
    var opener = null;

    function show(i) {
      index = (i + items.length) % items.length;
      var item = items[index];
      var thumb = item.querySelector('img');
      img.src = item.getAttribute('data-full') || (thumb ? thumb.src : '');
      img.alt = thumb ? thumb.alt : '';
      caption.textContent = item.getAttribute('data-caption') || '';
    }

    function open(i, trigger) {
      opener = trigger || null;
      show(i);
      box.classList.add('is-open');
      box.setAttribute('aria-hidden', 'false');
      document.documentElement.classList.add('has-lightbox');
      closeBtn.focus();
    }

    function close() {
      box.classList.remove('is-open');
      box.setAttribute('aria-hidden', 'true');
      document.documentElement.classList.remove('has-lightbox');
      if (opener && opener.focus) opener.focus({ preventScroll: true });
    }

    items.forEach(function (item, i) {
      item.addEventListener('click', function () { open(i, item); });
    });

    closeBtn.addEventListener('click', close);
    prevBtn.addEventListener('click', function () { show(index - 1); });
    nextBtn.addEventListener('click', function () { show(index + 1); });

    // klik area gelap (di luar foto & tombol) → tutup
    box.addEventListener('click', function (e) {
      if (e.target === box) close();
    });

    document.addEventListener('keydown', function (e) {
      if (!box.classList.contains('is-open')) return;

      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') show(index - 1);
      else if (e.key === 'ArrowRight') show(index + 1);
      else if (e.key === 'Tab') {
        // fokus tetap berputar di dalam lightbox
        var pos = focusable.indexOf(document.activeElement);
        e.preventDefault();
        var next = e.shiftKey ? pos - 1 : pos + 1;
        focusable[(next + focusable.length) % focusable.length].focus();
      }
    });
  };
})();
