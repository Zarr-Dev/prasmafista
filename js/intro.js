(function () {
  'use strict';
  var App = (window.Prasmafista = window.Prasmafista || {});
  var root = document.documentElement;
  var easeOut = 'cubic-bezier(.22,.9,.24,1)';
  var easeInOut = 'cubic-bezier(.65,0,.25,1)';

  function wait(ms) { return new Promise(function (resolve) { window.setTimeout(resolve, ms); }); }
  function nextFrame() { return new Promise(function (resolve) { requestAnimationFrame(resolve); }); }

  function finish(overlay) {
    var logo = document.getElementById('siteLogo');
    root.classList.add('nav-ready');
    root.classList.remove('is-loading');
    if (overlay && overlay.parentNode) overlay.parentNode.removeChild(overlay);
    if (logo) logo.classList.add('is-landed');
    window.__prasmafistaReady = true;
  }

  App.runIntro = async function () {
    var overlay = document.getElementById('intro');
    var headerLogo = document.getElementById('siteLogoImg');
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!overlay || !headerLogo || reduceMotion || typeof Element.prototype.animate !== 'function') {
      finish(overlay);
      return;
    }

    var logo = overlay.querySelector('.intro__logo');
    var wrap = overlay.querySelector('.intro__text-wrap');
    var text = overlay.querySelector('.intro__text');
    var bg = overlay.querySelector('.intro__bg');
    var skipped = false;
    var running = [];
    var resolveSkip;
    var skipPromise = new Promise(function (resolve) { resolveSkip = resolve; });

    function skip() {
      if (skipped) return;
      skipped = true;
      running.forEach(function (animation) {
        try { animation.finish(); } catch (e) { /* Animasi yang belum mulai tidak perlu dipaksa. */ }
      });
      resolveSkip();
    }
    function onKey(event) {
      if (event.key === 'Escape' || event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        skip();
      }
    }
    overlay.addEventListener('click', skip);
    document.addEventListener('keydown', onKey);

    function animate(element, frames, options) {
      var opts = Object.assign({ fill: 'both' }, options);
      if (skipped) { opts.duration = 0; opts.delay = 0; }
      var animation = element.animate(frames, opts);
      running.push(animation);
      return animation.finished.catch(function () {});
    }
    function pause(ms) { return Promise.race([wait(ms), skipPromise]); }

    try {
      await Promise.race([
        Promise.all([
          document.fonts && document.fonts.load ? Promise.race([document.fonts.load('700 32px "Architects Daughter"'), wait(900)]).catch(function () {}) : Promise.resolve(),
          logo.decode ? logo.decode().catch(function () {}) : Promise.resolve()
        ]),
        skipPromise
      ]);
      if (skipped) return;
      window.scrollTo(0, 0);
      var fullWidth = text.offsetWidth;

      await animate(logo, [
        { opacity: 0, transform: 'scale(.15) rotate(-220deg)' },
        { opacity: 1, transform: 'scale(1.12) rotate(9deg)', offset: .68 },
        { opacity: 1, transform: 'scale(1) rotate(0deg)' }
      ], { duration: 850, easing: easeOut });
      await pause(160);
      if (skipped) return;

      await Promise.all([
        animate(wrap, [{ width: '0px' }, { width: fullWidth + 'px' }], { duration: 650, easing: easeInOut }),
        animate(text, [{ transform: 'translateX(-105%)', opacity: 0 }, { transform: 'translateX(0)', opacity: 1 }], { duration: 650, easing: easeInOut })
      ]);
      await pause(680);
      if (skipped) return;

      await Promise.all([
        animate(wrap, [{ width: fullWidth + 'px' }, { width: '0px' }], { duration: 560, easing: easeInOut }),
        animate(text, [{ transform: 'translateX(0)', opacity: 1 }, { transform: 'translateX(-105%)', opacity: 0 }], { duration: 560, easing: easeInOut }),
        animate(logo, [{ transform: 'scale(1)' }, { transform: 'scale(.94)', offset: .5 }, { transform: 'scale(1)' }], { duration: 560, easing: easeInOut })
      ]);
      if (skipped) return;

      root.classList.add('nav-ready');
      window.scrollTo(0, 0);
      await nextFrame();
      var from = logo.getBoundingClientRect();
      var to = headerLogo.getBoundingClientRect();
      var dx = (to.left + to.width / 2) - (from.left + from.width / 2);
      var dy = (to.top + to.height / 2) - (from.top + from.height / 2);
      var scale = to.width / Math.max(from.width, 1);
      await Promise.all([
        animate(logo, [{ transform: 'translate(0px,0px) scale(1)' }, { transform: 'translate(' + dx + 'px,' + dy + 'px) scale(' + scale + ')' }], { duration: 740, easing: easeInOut }),
        animate(bg, [{ opacity: 1 }, { opacity: 0 }], { duration: 650, delay: 100, easing: 'linear' })
      ]);
    } catch (error) {
      if (window.console) console.error('Animasi pembuka tidak dapat berjalan:', error);
    } finally {
      overlay.removeEventListener('click', skip);
      document.removeEventListener('keydown', onKey);
      finish(overlay);
    }
  };
})();
