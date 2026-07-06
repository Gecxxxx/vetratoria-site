(() => {
  'use strict';

  const photos = {
    hero: '/assets/img/home-uploaded/home-hero.webp',
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

  const apply = async (node) => {
    const key = node.dataset.homePhoto;
    const src = photos[key];
    if (!src) return;

    const nextSrc = await canLoad(src);
    if (!nextSrc) return;

    node.src = nextSrc;
    node.removeAttribute('srcset');
    node.dataset.homePhotoLoaded = 'true';
  };

  const init = () => {
    document.querySelectorAll('img[data-home-photo]').forEach((node) => {
      apply(node);
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
