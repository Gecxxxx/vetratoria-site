(() => {
  'use strict';

  const path = location.pathname.replace(/index\.html$/, '').replace(/\/$/, '') || '/';
  if (path !== '/dahab') return;

  const base = '/assets/img/dahab-uploaded/';
  const images = {
    hero: ['hero-1.webp', 'hero-2.webp', 'hero-3.webp', 'hero-4.webp', 'hero-5.webp', 'hero-6.webp', 'hero-7.webp'].map((name) => base + name),
    chooseWingfoil: base + 'choose-wingfoil.webp',
    chooseWindsurf: base + 'choose-windsurf.webp',
    chooseKids: base + 'choose-kids.webp',
    priceWingfoil: base + 'price-wingfoil.webp',
    priceFoilBoat: base + 'price-foil-boat.webp',
    priceWindsurf: base + 'price-windsurf.webp',
    priceKids: base + 'price-kids.webp',
    blockWingfoil: base + 'block-wingfoil.webp',
    blockWindsurf: base + 'block-windsurf.webp',
    blockStation: base + 'block-station.webp',
    aqvaMap: base + 'aqva-map.webp',
    aqvaAerial: base + 'aqva-aerial.webp',
    team: ['team-1.webp', 'team-2.webp', 'team-3.webp', 'team-4.webp', 'team-5.webp', 'team-6.webp'].map((name) => base + name)
  };

  const checked = new Map();
  let heroTimer = null;

  const canLoad = (src) => {
    if (checked.has(src)) return checked.get(src);

    const promise = new Promise((resolve) => {
      const image = new Image();
      image.onload = () => resolve(src);
      image.onerror = () => resolve(null);
      image.src = src;
    });

    checked.set(src, promise);
    return promise;
  };

  const replaceImage = async (selector, src) => {
    const nodes = document.querySelectorAll(selector);
    if (!nodes.length) return;

    const loaded = await canLoad(src);
    if (!loaded) return;

    nodes.forEach((node) => {
      node.setAttribute('src', loaded);
      node.removeAttribute('srcset');
      node.dataset.dahabPhotoLoaded = 'true';
    });
  };

  const replaceNth = async (selector, index, src) => {
    const node = document.querySelectorAll(selector)[index];
    if (!node) return;

    const loaded = await canLoad(src);
    if (!loaded) return;

    node.setAttribute('src', loaded);
    node.removeAttribute('srcset');
    node.dataset.dahabPhotoLoaded = 'true';
  };

  const setActiveHeroSlide = (slider, index) => {
    const slides = Array.from(slider.querySelectorAll('img'));
    if (!slides.length) return;

    const next = ((index % slides.length) + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle('is-active', slideIndex === next);
      slide.setAttribute('aria-hidden', slideIndex === next ? 'false' : 'true');
    });
    slider.dataset.activeSlide = String(next);
  };

  const buildHeroSlider = async () => {
    const hero = document.querySelector('.dahab-redesign .hero');
    if (!hero) return;

    const existing = hero.querySelector('.dahab-overview-hero-slider');
    if (existing) return;

    const available = [];
    for (const src of images.hero) {
      const loaded = await canLoad(src);
      if (loaded) available.push(loaded);
    }

    if (!available.length) return;

    const slider = document.createElement('div');
    slider.className = 'dahab-overview-hero-slider';
    slider.setAttribute('aria-hidden', 'true');
    slider.innerHTML = available.map((src, index) => `<img class="${index === 0 ? 'is-active' : ''}" src="${src}" alt="" loading="${index === 0 ? 'eager' : 'lazy'}" decoding="async" data-slide-index="${index}">`).join('');

    const fallback = hero.querySelector(':scope > .hero-image');
    if (fallback) {
      fallback.classList.add('dahab-overview-hero-fallback');
      fallback.insertAdjacentElement('afterend', slider);
    } else {
      hero.prepend(slider);
    }

    hero.dataset.dahabHeroSlider = 'true';
    setActiveHeroSlide(slider, 0);

    if (available.length > 1) {
      if (heroTimer) window.clearInterval(heroTimer);
      heroTimer = window.setInterval(() => {
        const current = Number(slider.dataset.activeSlide || '0');
        setActiveHeroSlide(slider, current + 1);
      }, 3800);
    }
  };

  const replaceWaterArea = async () => {
    const visual = document.querySelector('.water-area__image');
    if (!visual) return;

    const aerial = await canLoad(images.aqvaAerial);
    if (aerial) {
      visual.classList.add('has-dahab-aqva-photo');
      visual.style.backgroundImage = `linear-gradient(180deg, rgba(0,0,0,.08), rgba(0,0,0,.52)), url("${aerial}")`;
    }

    const map = await canLoad(images.aqvaMap);
    if (map && !visual.querySelector('.dahab-aqva-map')) {
      const img = document.createElement('img');
      img.className = 'dahab-aqva-map';
      img.src = map;
      img.alt = 'Схема акватории Дахаба';
      img.loading = 'lazy';
      img.decoding = 'async';
      visual.append(img);
    }
  };

  const replaceTeamPhotos = async () => {
    const cards = Array.from(document.querySelectorAll('#team-reviews .trust-card--person'));
    if (!cards.length) return;

    for (let index = 0; index < cards.length && index < images.team.length; index += 1) {
      const src = await canLoad(images.team[index]);
      if (!src) continue;

      const figure = cards[index].querySelector('.trust-initial');
      if (!figure || figure.querySelector('img')) continue;

      const label = figure.getAttribute('aria-label') || cards[index].querySelector('h4,h3,b')?.textContent?.trim() || 'Команда Vetratoria';
      figure.classList.add('trust-initial--photo');
      figure.innerHTML = `<img src="${src}" alt="${label}" loading="lazy" decoding="async">`;
    }
  };

  const applyPhotos = () => {
    buildHeroSlider();

    replaceImage('.sport-tile[data-href="/dahab/wingfoil/"] img', images.chooseWingfoil);
    replaceImage('.sport-tile[data-href="/dahab/windsurf/"] img', images.chooseWindsurf);
    replaceImage('.wsk-strip__media img', images.chooseKids);

    replaceNth('.price-card .price-photo img', 0, images.priceWingfoil);
    replaceNth('.price-card .price-photo img', 1, images.priceFoilBoat);
    replaceNth('.price-card .price-photo img', 2, images.priceWindsurf);
    replaceNth('.price-card .price-photo img', 3, images.priceKids);

    replaceNth('.station-advice__list figure img', 0, images.blockWingfoil);
    replaceNth('.station-advice__list figure img', 1, images.blockWindsurf);
    replaceNth('.station-advice__list figure img', 2, images.blockStation);

    replaceWaterArea();
    replaceTeamPhotos();
  };

  const schedule = () => {
    applyPhotos();
    window.requestAnimationFrame(applyPhotos);
    [120, 420, 1000, 1800].forEach((delay) => window.setTimeout(applyPhotos, delay));
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', schedule, { once: true });
  } else {
    schedule();
  }

  window.addEventListener('load', schedule, { once: true });
})();
