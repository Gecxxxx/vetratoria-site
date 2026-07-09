(() => {
  'use strict';

  const path = location.pathname.replace(/index\.html$/, '').replace(/\/$/, '') || '/';
  if (path !== '/dahab/stations') return;

  const sliders = Array.from(document.querySelectorAll('[data-station-slider]'));
  if (!sliders.length) return;

  const activate = (slider, index) => {
    const slides = Array.from(slider.querySelectorAll('.station-slider__viewport img'));
    if (!slides.length) return;

    const next = ((index % slides.length) + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      const active = slideIndex === next;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', active ? 'false' : 'true');
    });
    slider.dataset.activeSlide = String(next);
  };

  sliders.forEach((slider) => {
    const slides = Array.from(slider.querySelectorAll('.station-slider__viewport img'));
    if (!slides.length) return;

    activate(slider, 0);

    const prev = slider.querySelector('[data-station-prev]');
    const next = slider.querySelector('[data-station-next]');

    const step = (direction) => {
      const current = Number(slider.dataset.activeSlide || '0');
      activate(slider, current + direction);
    };

    if (prev) prev.addEventListener('click', () => step(-1));
    if (next) next.addEventListener('click', () => step(1));

    if (slides.length > 1) {
      window.setInterval(() => step(1), 5800);
    }
  });
})();
