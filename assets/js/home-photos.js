(() => {
  'use strict';

  const photos = {
    hero: '/assets/img/home-uploaded/home-hero.webp',
    about: '/assets/img/home-uploaded/ABOUTVETRATORIA.jpg',
    directionDahab: '/assets/img/home-uploaded/home-direction-dahab.webp',
    directionVietnam: '/assets/img/home-uploaded/home-direction-vietnam.webp',
    directionRussia: '/assets/img/home-uploaded/home-direction-russia.webp',
    blog: '/assets/img/home-uploaded/home-blog.webp',
    media: '/assets/img/home-uploaded/home-media.webp',
    slider1: '/assets/img/home-uploaded/home-slider-1.webp',
    slider2: '/assets/img/home-uploaded/home-slider-2.webp',
    slider3: '/assets/img/home-uploaded/home-slider-3.webp',
    slider4: '/assets/img/home-uploaded/home-slider-4.webp',
    slider5: '/assets/img/home-uploaded/home-slider-5.webp',
    slider6: '/assets/img/home-uploaded/home-slider-6.webp'
  };

  const heroSlides = ['slider1', 'slider2', 'slider3', 'slider4', 'slider5', 'slider6'];
  const loaded = new Map();

  const canLoad = (src) => {
    if (loaded.has(src)) return loaded.get(src);

    const promise = new Promise((resolve) => {
      const image = new Image();
      image.decoding = 'async';
      image.onload = () => resolve(src);
      image.onerror = () => resolve(null);
      image.src = src;
    });

    loaded.set(src, promise);
    return promise;
  };

  const setKey = (selector, key) => {
    document.querySelectorAll(selector).forEach((node) => {
      if (node && !node.dataset.homePhoto) node.dataset.homePhoto = key;
    });
  };

  const buildHeroSlider = async () => {
    const hero = document.querySelector('.home-hero');
    if (!hero || hero.querySelector('.home-hero__slider')) return;

    const existingImage = hero.querySelector('.home-hero__image');
    const available = [];

    for (const key of heroSlides) {
      const src = photos[key];
      const loadedSrc = await canLoad(src);
      if (loadedSrc) available.push({ key, src: loadedSrc });
    }

    if (!available.length) return;

    const slider = document.createElement('div');
    slider.className = 'home-hero__slider';
    slider.setAttribute('aria-hidden', 'true');
    slider.style.setProperty('--home-hero-slide-count', String(available.length));

    available.forEach((item, index) => {
      const image = document.createElement('img');
      image.src = item.src;
      image.alt = '';
      image.loading = index === 0 ? 'eager' : 'lazy';
      image.decoding = 'async';
      image.dataset.homeHeroSlide = item.key;
      image.style.setProperty('--home-hero-slide-index', String(index));
      slider.append(image);
    });

    if (existingImage) {
      existingImage.dataset.homePhotoLoaded = 'true';
      existingImage.classList.add('home-hero__image--fallback');
      existingImage.insertAdjacentElement('afterend', slider);
    } else {
      hero.prepend(slider);
    }

    hero.dataset.heroSlider = 'true';
  };

  const decorateKnownImages = () => {
    setKey('.home-choice-card[href="/dahab/"] img, .home-choice-card[href="/dahab"] img', 'directionDahab');
    setKey('.home-choice-card[href="/vietnam/"] img, .home-choice-card[href="/vietnam"] img', 'directionVietnam');
    setKey('.home-choice-card[href="/russia/"] img, .home-choice-card[href="/russia"] img', 'directionRussia');
    setKey('.home-choice-card[href="/blog/"] img, .home-choice-card[href="/blog"] img', 'blog');
    setKey('.home-choice-card[href="/media/"] img, .home-choice-card[href="/media"] img', 'media');
    setKey('.home-dahab-panel__media img', 'about');
    setKey('.home-choice-card[href="/contacts/"] img, .home-choice-card[href="/contacts"] img', 'about');

    const sports = document.querySelectorAll('#sports .home-card--photo img');
    if (sports[0]) sports[0].dataset.homePhoto = 'slider6';
    if (sports[1]) sports[1].dataset.homePhoto = 'slider2';
    if (sports[2]) sports[2].dataset.homePhoto = 'media';
    if (sports[3]) sports[3].dataset.homePhoto = 'slider3';

    const gallery = document.querySelectorAll('#photo-story .home-photo-tile img');
    ['slider2', 'slider6', 'slider3', 'slider5', 'slider1', 'slider4'].forEach((key, index) => {
      if (gallery[index]) gallery[index].dataset.homePhoto = key;
    });
  };

  const apply = async (node) => {
    const key = node.dataset.homePhoto;
    const src = photos[key];
    if (!src) return;

    const nextSrc = await canLoad(src);
    if (!nextSrc) return;

    if (node.getAttribute('src') !== nextSrc) {
      node.setAttribute('src', nextSrc);
    }

    node.removeAttribute('srcset');
    node.dataset.homePhotoLoaded = 'true';
  };

  const init = () => {
    decorateKnownImages();
    document.querySelectorAll('img[data-home-photo]').forEach((node) => {
      if (node.classList.contains('home-hero__image')) return;
      apply(node);
    });
    buildHeroSlider();
  };

  const schedule = () => {
    init();
    window.requestAnimationFrame(init);
    [120, 420, 1000, 1800].forEach((delay) => window.setTimeout(init, delay));
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', schedule, { once: true });
  } else {
    schedule();
  }

  window.addEventListener('load', schedule, { once: true });
})();
