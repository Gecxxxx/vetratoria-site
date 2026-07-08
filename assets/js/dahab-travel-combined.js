(() => {
  'use strict';

  const sliders = document.querySelectorAll('[data-hotel-slider]');
  if (!sliders.length) return;

  sliders.forEach((slider) => {
    const track = slider.querySelector('[data-hotel-track]');
    const slides = Array.from(slider.querySelectorAll('[data-hotel-slide]'));
    const prev = slider.querySelector('[data-hotel-prev]');
    const next = slider.querySelector('[data-hotel-next]');
    const dotsWrap = slider.querySelector('[data-hotel-dots]');
    if (!track || slides.length < 2) return;

    let index = 0;
    let timer = null;

    const dots = slides.map((_, dotIndex) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.setAttribute('aria-label', `Показать отель ${dotIndex + 1}`);
      button.addEventListener('click', () => {
        setSlide(dotIndex);
        restart();
      });
      dotsWrap?.append(button);
      return button;
    });

    const setSlide = (nextIndex) => {
      index = (nextIndex + slides.length) % slides.length;
      track.style.transform = `translate3d(${-index * 100}%,0,0)`;
      slides.forEach((slide, slideIndex) => {
        slide.toggleAttribute('aria-hidden', slideIndex !== index);
      });
      dots.forEach((dot, dotIndex) => dot.classList.toggle('is-active', dotIndex === index));
    };

    const restart = () => {
      window.clearInterval(timer);
      timer = window.setInterval(() => setSlide(index + 1), 5200);
    };

    prev?.addEventListener('click', () => {
      setSlide(index - 1);
      restart();
    });

    next?.addEventListener('click', () => {
      setSlide(index + 1);
      restart();
    });

    slider.addEventListener('mouseenter', () => window.clearInterval(timer));
    slider.addEventListener('mouseleave', restart);
    slider.addEventListener('focusin', () => window.clearInterval(timer));
    slider.addEventListener('focusout', restart);

    setSlide(0);
    restart();
  });
})();
