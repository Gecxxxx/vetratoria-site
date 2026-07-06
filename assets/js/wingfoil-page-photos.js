(() => {
  'use strict';

  const path = location.pathname.replace(/index\.html$/, '').replace(/\/$/, '') || '/';
  if (path !== '/dahab/wingfoil') return;

  const base = '/assets/img/wingfoil-uploaded/';
  const images = {
    hero: ['hero-1.webp', 'hero-2.webp', 'hero-3.webp', 'hero-4.webp', 'hero-5.webp'].map((name) => base + name),
    whyAerial: base + 'why-aerial.webp',
    learning: [
      base + 'learning-sup.webp',
      base + 'learning-boat.webp',
      base + 'learning-start.webp',
      base + 'learning-progress.webp'
    ],
    media: [
      base + 'look-1.webp',
      base + 'look-2.webp',
      base + 'look-3.webp',
      base + 'look-4.webp',
      base + 'look-5.webp',
      base + 'try-cta.webp'
    ],
    safetyHelmets: base + 'safety-helmets.webp',
    safetyRescue: base + 'safety-rescue.webp'
  };

  const loaded = new Map();
  let heroIndex = 0;
  let heroTimer = null;

  const preload = (src) => {
    if (loaded.has(src)) return loaded.get(src);
    const promise = new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(src);
      img.onerror = () => resolve(null);
      img.src = src;
    });
    loaded.set(src, promise);
    return promise;
  };

  const setImage = async (img, src) => {
    if (!img || !src) return;
    const ok = await preload(src);
    if (!ok) return;
    img.src = ok;
    img.removeAttribute('srcset');
    img.dataset.wingfoilPhotoLoaded = 'true';
  };

  const startHeroSlider = async () => {
    const img = document.querySelector('.sport-page--wingfoil .sport-hero__media img');
    if (!img) return;
    const available = [];
    for (const src of images.hero) {
      const ok = await preload(src);
      if (ok) available.push(ok);
    }
    if (!available.length) return;
    const apply = () => {
      const src = available[heroIndex % available.length];
      img.style.opacity = '.35';
      window.setTimeout(() => {
        img.src = src;
        img.removeAttribute('srcset');
        img.dataset.wingfoilHeroSlide = 'true';
        img.style.opacity = '1';
        window.__wingfoilHeroState = { active: heroIndex % available.length, total: available.length, src: img.src };
        heroIndex += 1;
      }, 180);
    };
    apply();
    if (heroTimer) window.clearInterval(heroTimer);
    if (available.length > 1) heroTimer = window.setInterval(apply, 4200);
  };

  const replaceStaticImages = () => {
    setImage(document.querySelector('#why-dahab .sport-panorama img'), images.whyAerial);
    document.querySelectorAll('#learning .sport-step figure img').forEach((img, index) => {
      if (images.learning[index]) setImage(img, images.learning[index]);
    });
    setImage(document.querySelector('#media .sport-media__feature img'), images.media[0]);
    document.querySelectorAll('#media .sport-media__gallery figure img').forEach((img, index) => {
      if (images.media[index + 1]) setImage(img, images.media[index + 1]);
    });
  };

  const insertSafetyPhotos = () => {
    const section = document.querySelector('#equipment-safety .sport-section__inner');
    const layout = section?.querySelector('.sport-equipment-safety');
    if (!section || !layout || section.querySelector('.wingfoil-safety-photos')) return;
    const photos = document.createElement('div');
    photos.className = 'wingfoil-safety-photos';
    photos.innerHTML = `
      <figure><img src="${images.safetyRescue}" alt="Rescue boat на станции Vetratoria" loading="lazy" decoding="async"><figcaption><span>Safety</span>Rescue boat рядом с акваторией</figcaption></figure>
      <figure><img src="${images.safetyHelmets}" alt="Шлемы и жилеты для wingfoil" loading="lazy" decoding="async"><figcaption><span>Equipment</span>Шлемы, жилеты и понятный выход на воду</figcaption></figure>
    `;
    layout.insertAdjacentElement('beforebegin', photos);
  };

  const run = () => { replaceStaticImages(); insertSafetyPhotos(); };
  startHeroSlider();
  run();
  window.requestAnimationFrame(run);
  [250, 900, 1800].forEach((delay) => window.setTimeout(run, delay));
  window.addEventListener('load', run, { once: true });
})();
