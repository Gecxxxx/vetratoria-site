(() => {
  'use strict';

  const loadScript = (src) => {
    const script = document.createElement('script');
    script.src = src;
    script.defer = true;
    document.head.append(script);
  };

  const loadStyle = (href) => {
    const exists = Array.from(document.querySelectorAll('link[rel="stylesheet"]'))
      .some((link) => link.getAttribute('href') === href);

    if (exists) return;

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.append(link);
  };

  const path = location.pathname;
  const isHomePage = path === '/' || path === '/index.html';
  const isDahabPage = path === '/dahab/' || path.startsWith('/dahab/');
  const isDahabPrice = path === '/dahab/price/' || path === '/dahab/price';
  const isCatalogPage = path === '/blog/' || path === '/blog/index.html' || path.startsWith('/media/');

  loadStyle('/assets/css/vtr-fonts.css?v=20260705-fonts-2');
  loadStyle('/assets/css/nav-production.css?v=20260705-nav-zindex-1');
  loadScript('/assets/js/nav3-production.js?v=20260705-country-kids-1');
  loadScript('/assets/js/footer-unified.js?v=20260704-unified-footer');

  if (isHomePage) {
    loadStyle('/assets/css/home-redesign.css?v=20260704-home-stage-2');
    loadScript('/assets/js/home-redesign.js?v=20260704-home-stage-2');
  }

  if (isDahabPage) {
    loadStyle('/assets/css/dahab-menu-clusters.css?v=20260704-menu-simple-active');
  }

  if (isDahabPrice) {
    loadStyle('/assets/css/dahab-price-redesign.css?v=20260704-price-final-html');
    loadStyle('/assets/css/dahab-price-polish.css?v=20260704-price-final-html');
  }

  if (isCatalogPage) {
    loadScript('/assets/js/catalog-filter.js?v=20260705-url-filters');
  }

  if (!isDahabPage) {
    loadScript('/assets/js/photo-pass-0703.js?v=20260704-photo-final');
  }

  loadStyle('/assets/css/vtr-components.css?v=20260704-design-system-3');
  loadStyle('/assets/css/vtr-card-position-fix.css?v=20260704-card-position-1');
})();
