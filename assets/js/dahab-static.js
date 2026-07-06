(() => {
  'use strict';

  const base = '/assets/img/dahab-uploaded/';
  const imageMap = {
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

  const checkedImages = new Map();
  let heroTimer = null;

  const canLoad = (src) => {
    if (checkedImages.has(src)) return checkedImages.get(src);

    const promise = new Promise((resolve) => {
      const image = new Image();
      image.onload = () => resolve(src);
      image.onerror = () => resolve(null);
      image.src = src;
    });

    checkedImages.set(src, promise);
    return promise;
  };

  const setImg = async (node, src) => {
    if (!node) return;
    const loaded = await canLoad(src);
    if (!loaded) return;
    node.setAttribute('src', loaded);
    node.removeAttribute('srcset');
    node.dataset.dahabPhotoLoaded = 'true';
  };

  const setSelectorImg = (selector, src) => {
    document.querySelectorAll(selector).forEach((node) => setImg(node, src));
  };

  const setNthImg = (selector, index, src) => {
    const node = document.querySelectorAll(selector)[index];
    setImg(node, src);
  };

  const styleHeroSlider = (slider) => {
    Object.assign(slider.style, {
      position: 'absolute',
      inset: '0',
      zIndex: '-3',
      overflow: 'hidden',
      background: '#10100f'
    });
  };

  const styleHeroSlide = (image, isActive) => {
    Object.assign(image.style, {
      position: 'absolute',
      inset: '0',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center center',
      opacity: isActive ? '1' : '0',
      transform: isActive ? 'scale(1.09)' : 'scale(1.03)',
      filter: 'saturate(.96) contrast(1.04) brightness(.86)',
      transition: 'opacity 900ms ease, transform 5200ms ease'
    });
  };

  const activateHeroSlide = (slider, index) => {
    const slides = Array.from(slider.querySelectorAll('img'));
    if (!slides.length) return;
    const next = ((index % slides.length) + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === next;
      slide.classList.toggle('is-active', isActive);
      slide.setAttribute('aria-hidden', isActive ? 'false' : 'true');
      styleHeroSlide(slide, isActive);
    });
    slider.dataset.activeSlide = String(next);
  };

  const buildHeroSlider = async () => {
    const hero = document.querySelector('.dahab-redesign .hero');
    if (!hero || hero.querySelector('.dahab-overview-hero-slider')) return;

    const available = [];
    for (const src of imageMap.hero) {
      const loaded = await canLoad(src);
      if (loaded) available.push(loaded);
    }
    if (!available.length) return;

    const slider = document.createElement('div');
    slider.className = 'dahab-overview-hero-slider';
    slider.setAttribute('aria-hidden', 'true');
    styleHeroSlider(slider);

    available.forEach((src, index) => {
      const image = document.createElement('img');
      image.src = src;
      image.alt = '';
      image.loading = index === 0 ? 'eager' : 'lazy';
      image.decoding = 'async';
      image.dataset.slideIndex = String(index);
      styleHeroSlide(image, index === 0);
      slider.append(image);
    });

    const fallback = hero.querySelector(':scope > .hero-image');
    if (fallback) {
      fallback.style.opacity = '0';
      fallback.insertAdjacentElement('afterend', slider);
    } else {
      hero.prepend(slider);
    }

    hero.dataset.dahabHeroSlider = 'true';
    activateHeroSlide(slider, 0);

    if (available.length > 1) {
      if (heroTimer) window.clearInterval(heroTimer);
      heroTimer = window.setInterval(() => {
        const current = Number(slider.dataset.activeSlide || '0');
        activateHeroSlide(slider, current + 1);
      }, 3800);
    }
  };

  const applyOverviewPhotos = () => {
    buildHeroSlider();

    setSelectorImg('.sport-tile[data-href="/dahab/wingfoil/"] img', imageMap.chooseWingfoil);
    setSelectorImg('.sport-tile[data-href="/dahab/windsurf/"] img', imageMap.chooseWindsurf);
    setSelectorImg('.wsk-strip__media img', imageMap.chooseKids);

    setNthImg('.price-card .price-photo img', 0, imageMap.priceWingfoil);
    setNthImg('.price-card .price-photo img', 1, imageMap.priceFoilBoat);
    setNthImg('.price-card .price-photo img', 2, imageMap.priceWindsurf);
    setNthImg('.price-card .price-photo img', 3, imageMap.priceKids);

    setNthImg('.station-advice__list figure img', 0, imageMap.blockWingfoil);
    setNthImg('.station-advice__list figure img', 1, imageMap.blockWindsurf);
    setNthImg('.station-advice__list figure img', 2, imageMap.blockStation);

    applyWaterArea();
    applyTeamPhotos();
  };

  const applyWaterArea = async () => {
    const visual = document.querySelector('.water-area__image');
    if (!visual) return;

    const aerial = await canLoad(imageMap.aqvaAerial);
    if (aerial) {
      Object.assign(visual.style, {
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,.08), rgba(0,0,0,.52)), url("' + aerial + '")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
      });
    }

    const map = await canLoad(imageMap.aqvaMap);
    if (map && !visual.querySelector('.dahab-aqva-map')) {
      const img = document.createElement('img');
      img.className = 'dahab-aqva-map';
      img.src = map;
      img.alt = 'Схема акватории Дахаба';
      img.loading = 'lazy';
      img.decoding = 'async';
      Object.assign(img.style, {
        position: 'absolute',
        left: '24px',
        right: '24px',
        bottom: '24px',
        zIndex: '2',
        width: 'auto',
        maxWidth: 'min(560px, calc(100% - 48px))',
        maxHeight: '46%',
        objectFit: 'contain',
        border: '1px solid rgba(255,255,255,.2)',
        borderRadius: '18px',
        boxShadow: '0 18px 50px rgba(0,0,0,.36)'
      });
      visual.append(img);
    }
  };

  const applyTeamPhotos = async () => {
    const cards = Array.from(document.querySelectorAll('#team-reviews .trust-card--person'));
    if (!cards.length) return;

    for (let index = 0; index < cards.length && index < imageMap.team.length; index += 1) {
      const src = await canLoad(imageMap.team[index]);
      if (!src) continue;
      const figure = cards[index].querySelector('.trust-initial');
      if (!figure || figure.querySelector('img')) continue;
      const label = figure.getAttribute('aria-label') || 'Команда Vetratoria';
      figure.classList.add('trust-initial--photo');
      figure.innerHTML = '';
      const img = document.createElement('img');
      img.src = src;
      img.alt = label;
      img.loading = 'lazy';
      img.decoding = 'async';
      Object.assign(img.style, {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center top'
      });
      figure.style.overflow = 'hidden';
      figure.append(img);
    }
  };

  const schedulePhotos = () => {
    applyOverviewPhotos();
    window.requestAnimationFrame(applyOverviewPhotos);
    [120, 420, 1000, 1800].forEach((delay) => window.setTimeout(applyOverviewPhotos, delay));
  };

  const openCard = (card) => {
    const href = card && card.dataset ? card.dataset.href : '';
    if (href) window.location.href = href;
  };

  document.addEventListener('click', (event) => {
    const card = event.target.closest('.price-card[data-href], .sport-tile[data-href]');
    if (!card || event.target.closest('a')) return;
    openCard(card);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    if (event.target.closest('a')) return;
    const card = event.target.closest('.price-card[data-href], .sport-tile[data-href]');
    if (!card) return;
    event.preventDefault();
    openCard(card);
  });

  document.querySelectorAll('[data-trust-prev], [data-trust-next]').forEach((button) => {
    button.addEventListener('click', () => {
      const key = button.dataset.trustPrev || button.dataset.trustNext;
      const track = document.querySelector('[data-trust-track="' + key + '"]');
      if (!track) return;
      const direction = button.dataset.trustPrev ? -1 : 1;
      const card = track.querySelector('.trust-card');
      const gap = 18;
      const step = card ? card.getBoundingClientRect().width + gap : track.clientWidth * 0.8;
      track.scrollBy({ left: direction * step, behavior: 'smooth' });
    });
  });

  schedulePhotos();
  window.addEventListener('load', schedulePhotos, { once: true });
})();
