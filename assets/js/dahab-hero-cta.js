(() => {
  'use strict';

  const render = () => {
    if (location.pathname !== '/dahab/' && location.pathname !== '/dahab/index.html') return;

    const heroContent = document.querySelector('.dahab-redesign .hero .hero-content');
    const facts = heroContent?.querySelector('.hero-facts');
    if (!heroContent || !facts || heroContent.querySelector('.dahab-hero-actions')) return;

    const actions = document.createElement('div');
    actions.className = 'hero-actions dahab-hero-actions';
    actions.innerHTML = `
      <a class="button button-primary" data-application-open href="#application">Написать нам</a>
      <a class="button button-ghost" href="/dahab/price/">Цены</a>
    `;

    facts.insertAdjacentElement('afterend', actions);
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render);
  else render();
})();
