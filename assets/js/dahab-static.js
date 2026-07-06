(() => {
  'use strict';

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
      const key = button.dataset.trustPrev || button.datasetTrustNext;
      const track = document.querySelector('[data-trust-track="' + key + '"]');
      if (!track) return;
      const direction = button.dataset.trustPrev ? -1 : 1;
      const card = track.querySelector('.trust-card');
      const gap = 18;
      const step = card ? card.getBoundingClientRect().width + gap : track.clientWidth * 0.8;
      track.scrollBy({ left: direction * step, behavior: 'smooth' });
    });
  });
})();
