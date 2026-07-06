(() => {
  'use strict';

  const path = location.pathname.replace(/index\.html$/, '').replace(/\/$/, '') || '/';
  if (path !== '/dahab') return;

  const wingfoilSrc = '/assets/img/dahab-uploaded/choose-wingfoil.webp';
  const teamImages = [
    '/assets/img/dahab-uploaded/team-1.webp',
    '/assets/img/dahab-uploaded/team-2.webp',
    '/assets/img/dahab-uploaded/team-3.webp',
    '/assets/img/dahab-uploaded/team-4.webp',
    '/assets/img/dahab-uploaded/team-5.webp',
    '/assets/img/dahab-uploaded/team-6.webp'
  ];

  const preload = (src) => new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(src);
    img.onerror = () => resolve(null);
    img.src = src;
  });

  const setWingfoilChoosePhoto = async () => {
    const img =
      document.querySelector('.sport-tile[data-href="/dahab/wingfoil/"] img') ||
      document.querySelector('.sport-tile[data-href="/dahab/wingfoil"] img') ||
      document.querySelector('[href="/dahab/wingfoil/"] img') ||
      document.querySelector('[href="/dahab/wingfoil"] img');

    if (!img) return;

    const ok = await preload(wingfoilSrc);
    if (!ok) return;

    img.src = ok;
    img.removeAttribute('srcset');
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';
    img.style.objectPosition = 'center center';
  };

  const restoreTeamPhotos = async () => {
    const cards = Array.from(document.querySelectorAll('#team-reviews .trust-card--person'));
    if (!cards.length) return;

    for (let i = 0; i < cards.length && i < teamImages.length; i += 1) {
      const figure = cards[i].querySelector('.trust-initial');
      if (!figure) continue;

      const src = await preload(teamImages[i]);
      if (!src) continue;

      figure.classList.remove('review-avatar-hidden');
      figure.classList.add('trust-initial--photo');
      figure.innerHTML = '';

      const img = document.createElement('img');
      img.src = src;
      img.alt = 'Команда Vetratoria';
      img.loading = 'lazy';
      img.decoding = 'async';

      figure.appendChild(img);
    }
  };

  const hideReviewAvatars = () => {
    const allAvatars = document.querySelectorAll('#team-reviews .trust-card .trust-initial');

    allAvatars.forEach((avatar) => {
      const isTeamCard = !!avatar.closest('.trust-card--person');
      if (isTeamCard) return;

      avatar.innerHTML = '';
      avatar.classList.add('review-avatar-hidden');
    });
  };

  const run = () => {
    setWingfoilChoosePhoto();
    restoreTeamPhotos();
    hideReviewAvatars();
  };

  run();
  requestAnimationFrame(run);
  setTimeout(run, 250);
  setTimeout(run, 800);
  setTimeout(run, 1600);
})();
