(() => {
  'use strict';

  const path = location.pathname.replace(/index\.html$/, '').replace(/\/$/, '') || '/';
  if (path !== '/dahab') return;

  const IMG = {
    wingfoil: '/assets/img/dahab-uploaded/choose-wingfoil.webp',
    price: [
      '/assets/img/dahab-uploaded/price-wingfoil.webp',
      '/assets/img/dahab-uploaded/price-foil-boat.webp',
      '/assets/img/dahab-uploaded/price-windsurf.webp',
      '/assets/img/dahab-uploaded/price-kids.webp'
    ],
    aqva: '/assets/img/dahab-uploaded/aqva-aerial.webp',
    blockWingfoil: '/assets/img/dahab-uploaded/block-wingfoil.webp',
    blockWindsurf: '/assets/img/dahab-uploaded/block-windsurf.webp',
    blockStation: '/assets/img/dahab-uploaded/block-station.webp',
    hero: [
      '/assets/img/dahab-uploaded/hero-1.webp',
      '/assets/img/dahab-uploaded/hero-2.webp',
      '/assets/img/dahab-uploaded/hero-3.webp',
      '/assets/img/dahab-uploaded/hero-4.webp',
      '/assets/img/dahab-uploaded/hero-5.webp',
      '/assets/img/dahab-uploaded/hero-6.webp',
      '/assets/img/dahab-uploaded/hero-7.webp'
    ]
  };

  let heroIndex = 0;
  let heroTimer = null;

  const text = (node) => (node?.textContent || '').replace(/\s+/g, ' ').trim();

  const setImage = (img, src) => {
    if (!img || !src) return;
    img.src = src;
    img.removeAttribute('srcset');
    img.style.objectFit = 'cover';
    img.style.objectPosition = 'center center';
  };

  const startHeroSlider = () => {
    const heroImg = document.querySelector('.dahab-redesign .hero > .hero-image');
    if (!heroImg) return;

    document
      .querySelectorAll('.dahab-overview-hero-slider, .dahab-force-hero-slider')
      .forEach(node => node.remove());

    heroImg.style.opacity = '1';
    heroImg.style.visibility = 'visible';
    heroImg.style.display = 'block';

    IMG.hero.forEach(src => {
      const preload = new Image();
      preload.src = src;
    });

    const swap = () => {
      const src = IMG.hero[heroIndex % IMG.hero.length];
      heroImg.style.opacity = '0.35';

      setTimeout(() => {
        setImage(heroImg, src);
        heroImg.style.opacity = '1';
        window.__dahabCleanHero = {
          active: heroIndex % IMG.hero.length,
          src: heroImg.src,
          total: IMG.hero.length
        };
        heroIndex += 1;
      }, 160);
    };

    swap();

    if (heroTimer) clearInterval(heroTimer);
    heroTimer = setInterval(swap, 3800);
  };

  const fixWingfoilChoose = () => {
    const img =
      document.querySelector('.sport-tile[data-href="/dahab/wingfoil/"] img') ||
      document.querySelector('[href="/dahab/wingfoil/"] img') ||
      document.querySelector('[href="/dahab/wingfoil"] img');

    if (!img) return;

    setImage(img, IMG.wingfoil);
    img.style.width = '100%';
    img.style.height = '100%';
  };

  const fixPrices = () => {
    const imgs = [...document.querySelectorAll('.price-card .price-photo img, .price-card figure.price-photo img')];

    imgs.forEach((img, i) => {
      if (IMG.price[i]) setImage(img, IMG.price[i]);
    });

    document.querySelectorAll('.price-card .price-photo, .price-card figure.price-photo').forEach((el) => {
      el.style.aspectRatio = '5 / 4';
      el.style.height = 'auto';
      el.style.maxHeight = 'none';
      el.style.overflow = 'hidden';
    });
  };

  const findHeading = (needle) => {
    return [...document.querySelectorAll('h1,h2,h3,h4,b,strong')]
      .find(el => text(el).includes(needle));
  };

  const fixAquatoria = () => {
    const heading =
      findHeading('Где катаем в Дахабе') ||
      findHeading('Где катаем') ||
      findHeading('Акватория');

    const section = heading?.closest('section');
    if (!section) return;

    const visual = section.querySelector('.water-area__image') || section.querySelector('.water-area__visual');
    if (!visual) return;

    visual.querySelectorAll('.dahab-aqva-map').forEach(node => node.remove());

    let img = visual.querySelector('img');
    if (!img) {
      img = document.createElement('img');
      visual.append(img);
    }

    setImage(img, IMG.aqva);
  };

  const cardForTitle = (title) => {
    const heading = findHeading(title);
    if (!heading) return null;

    return (
      heading.closest('article') ||
      heading.closest('a') ||
      heading.closest('.trust-card') ||
      heading.closest('.atmosphere-card') ||
      heading.closest('.media-card') ||
      heading.closest('div')
    );
  };

  const fixBlockCards = () => {
    [
      ['Полёты над водой', IMG.blockWingfoil],
      ['Парус и ветер', IMG.blockWindsurf],
      ['Форматы без пакетов', IMG.blockStation]
    ].forEach(([title, src]) => {
      const card = cardForTitle(title);
      if (!card) return;
      card.classList.add('dahab-clean-photo-card');
      card.style.backgroundImage = `url("${src}")`;
    });
  };

  const run = () => {
    fixWingfoilChoose();
    fixPrices();
    fixAquatoria();
    fixBlockCards();
  };

  startHeroSlider();
  run();

  requestAnimationFrame(run);
  setTimeout(run, 300);
  setTimeout(run, 900);
  setTimeout(run, 1600);
})();
