(() => {
  'use strict';

  const normalize = (value) => value.endsWith('/') ? value : `${value}/`;
  const path = normalize(location.pathname);

  const map = {
    '/dahab/wingfoil/': ['Wingfoil 70$', 'Foil boat 60$', 'Подбор комплекта', 'Wing Center'],
    '/dahab/windsurf/': ['Windsurf 70$', 'Kids from 55$', 'Учебная акватория', 'Прокат по факту'],
    '/dahab/windsurf-kids/': ['Kids from 55$', 'Лёгкие паруса', 'Инструктор рядом', 'Спокойная вода'],
    '/dahab/stations/': ['Wing Center', 'Swiss Inn', 'Ganet Sinai', 'Подбор станции'],
    '/dahab/team/': ['Wingfoil team', 'Windsurf team', 'Kids instructors', 'Station support'],
    '/dahab/': ['Wingfoil комплект', 'Windsurf комплект', 'Kids equipment', 'Защита'],
    '/dahab/safety/': ['Проверка условий', 'Правила зоны', 'Rescue support', 'Контроль станции'],
  };

  const removePriceStation = () => {
    document.querySelectorAll('.price-hero-features span').forEach((node) => {
      if (node.textContent.trim().toLowerCase().includes('wing center')) node.remove();
    });
  };

  const insert = () => {
    removePriceStation();

    if (document.querySelector('.hero-feature-pills')) return;
    const items = map[path];
    if (!items) return;

    const hero = document.querySelector('main .hero .hero-content');
    if (!hero) return;

    const lead = hero.querySelector('.hero-lead');
    const actions = hero.querySelector('.hero-actions, .price-hero-actions');
    const wrap = document.createElement('div');
    wrap.className = 'hero-feature-pills';
    wrap.innerHTML = items.map((item) => `<span>${item}</span>`).join('');

    if (lead) lead.insertAdjacentElement('afterend', wrap);
    else if (actions) actions.insertAdjacentElement('beforebegin', wrap);
    else hero.append(wrap);
  };

  const start = () => {
    insert();
    window.setTimeout(insert, 150);
    window.setTimeout(insert, 500);
    window.setTimeout(insert, 1000);
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
