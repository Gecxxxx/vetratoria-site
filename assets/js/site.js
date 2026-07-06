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
  const normalizedPath = path.replace(/index\.html$/, '').replace(/\/$/, '') || '/';
  const isHomePage = path === '/' || path === '/index.html';
  const isDahabRoot = path === '/dahab/' || path === '/dahab/index.html';
  const isDahabPage = path === '/dahab/' || path.startsWith('/dahab/');
  const isDahabPrice = path === '/dahab/price/' || path === '/dahab/price';
  const isDahabSportPrice = path === '/dahab/wingfoil/price/' || path === '/dahab/wingfoil/price' || path === '/dahab/windsurf/price/' || path === '/dahab/windsurf/price' || path === '/dahab/windsurf-kids/price/' || path === '/dahab/windsurf-kids/price';
  const isAnyDahabPrice = isDahabPrice || isDahabSportPrice;
  const isCatalogPage = path === '/blog/' || path === '/blog/index.html' || path.startsWith('/media/');
  const isTeamCardsPage = normalizedPath === '/dahab/team'
    || normalizedPath === '/dahab/wingfoil'
    || normalizedPath === '/dahab/windsurf'
    || normalizedPath === '/dahab/windsurf-kids'
    || normalizedPath === '/vietnam/team'
    || normalizedPath === '/russia/team'
    || /^\/(vietnam|russia)\/(windsurf|wingfoil|kite)$/.test(normalizedPath);

  loadStyle('/assets/css/vtr-fonts.css?v=20260705-fonts-2');
  loadStyle('/assets/css/nav-production.css?v=20260705-nav-zindex-1');
  loadStyle('/assets/css/nav-fixed-all.css?v=20260705-fixed-all-1');
  loadStyle('/assets/css/hero-compact-global.css?v=20260706-hero-compact-global-1');
  loadScript('/assets/js/nav3-production.js?v=20260706-dahab-travel-pages-1');
  loadScript('/assets/js/nav-fixed-all.js?v=20260705-fixed-all-1');
  loadScript('/assets/js/footer-unified.js?v=20260704-unified-footer');

  if (isHomePage) {
    loadStyle('/assets/css/home-redesign.css?v=20260704-home-stage-2');
    loadStyle('/assets/css/home-photos.css?v=20260706-hero-slider-3');
    loadStyle('/assets/css/home-layout-fix.css?v=20260706-final-hero-2');
    loadScript('/assets/js/home-redesign.js?v=20260706-final-hero-1');
  }

  if (isDahabPage) {
    loadStyle('/assets/css/dahab-menu-clusters.css?v=20260704-menu-simple-active');
  }

  if (isDahabRoot) {
    loadStyle('/assets/css/dahab-hero-cta.css?v=20260705-hero-cta-2');
    loadScript('/assets/js/dahab-hero-cta.js?v=20260705-hero-cta-2');
  }

  if (isAnyDahabPrice) {
    loadStyle('/assets/css/dahab-price-tables-full.css?v=20260705-no-choice-1');
  }

  if (isDahabPrice) {
    loadStyle('/assets/css/dahab-price-redesign.css?v=20260704-price-final-html');
    loadStyle('/assets/css/dahab-price-polish.css?v=20260704-price-final-html');
    loadStyle('/assets/css/dahab-wsk-prices.css?v=20260705-wsk-prices-1');
    loadScript('/assets/js/dahab-wsk-prices.js?v=20260705-wsk-prices-1');
  }

  if (isDahabSportPrice) {
    loadStyle('/assets/css/dahab-wsk-prices.css?v=20260705-wsk-prices-2');
  }

  if (isCatalogPage) {
    loadScript('/assets/js/catalog-filter.js?v=20260705-url-filters');
  }

  if (isTeamCardsPage) {
    loadStyle('/assets/css/team-cards.css?v=20260706-team-cards-1');
    loadScript('/assets/js/team-cards.js?v=20260706-team-cards-1');
  }

  if (!isDahabPage && !isHomePage) {
    loadScript('/assets/js/photo-pass-0703.js?v=20260704-photo-final');
  }

  loadStyle('/assets/css/vtr-components.css?v=20260704-design-system-3');
  loadStyle('/assets/css/vtr-card-position-fix.css?v=20260704-card-position-1');

  if (isHomePage) {
    loadStyle('/assets/css/home-hero-edge-final.css?v=20260706-home-edge-final-1');
  }
})();
