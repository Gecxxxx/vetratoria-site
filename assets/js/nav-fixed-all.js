(() => {
  'use strict';

  let observer = null;
  let lastHeight = 0;

  const setHeight = () => {
    const header = document.querySelector('.site-header[data-nav]');
    if (!header) return;

    const height = Math.max(1, Math.ceil(header.getBoundingClientRect().height));
    if (height === lastHeight) return;

    lastHeight = height;
    document.documentElement.style.setProperty('--vtr-nav-height', `${height}px`);
    document.body.style.setProperty('--vtr-nav-height', `${height}px`);
  };

  const schedule = () => {
    setHeight();
    requestAnimationFrame(setHeight);
    window.setTimeout(setHeight, 80);
    window.setTimeout(setHeight, 320);
  };

  const watchHeader = () => {
    const header = document.querySelector('.site-header[data-nav]');
    if (!header || observer) return;

    observer = new MutationObserver(schedule);
    observer.observe(header, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class', 'style', 'hidden']
    });
  };

  const init = () => {
    watchHeader();
    schedule();
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  window.addEventListener('load', init, { passive: true });
  window.addEventListener('resize', schedule, { passive: true });
  window.addEventListener('orientationchange', () => window.setTimeout(schedule, 160), { passive: true });
})();
