(() => {
  'use strict';

  const parseHashParams = () => {
    const raw = (location.hash || '').replace(/^#/, '');
    const params = new URLSearchParams();
    if (!raw) return params;
    raw.split('&').forEach((part) => {
      const [key, value] = part.split('=');
      if (key && value) params.set(decodeURIComponent(key), decodeURIComponent(value));
    });
    return params;
  };

  const normalize = (value) => String(value || '').trim().toLowerCase();

  const initCatalog = (root) => {
    const items = Array.from(root.querySelectorAll('[data-catalog-item]'));
    if (!items.length) return;

    const state = {};
    const urlParams = new URLSearchParams(location.search);
    const hashParams = parseHashParams();

    root.querySelectorAll('[data-catalog-filter-group]').forEach((group) => {
      const name = group.getAttribute('data-catalog-filter-group');
      const requested = normalize(urlParams.get(name) || hashParams.get(name) || 'all');
      const buttons = Array.from(group.querySelectorAll('[data-catalog-filter]'));
      const hasRequested = buttons.some((button) => normalize(button.getAttribute('data-catalog-filter')) === requested);
      state[name] = hasRequested ? requested : 'all';
      buttons.forEach((button) => {
        const value = normalize(button.getAttribute('data-catalog-filter'));
        button.classList.toggle('is-active', value === state[name]);
      });
    });

    const search = root.querySelector('[data-catalog-search]');

    const apply = () => {
      const query = normalize(search ? search.value : '');
      items.forEach((item) => {
        const categories = normalize(item.getAttribute('data-categories'));
        const text = normalize(item.textContent);
        const matchesGroups = Object.entries(state).every(([, value]) => value === 'all' || categories.includes(value));
        const matchesSearch = !query || categories.includes(query) || text.includes(query);
        item.hidden = !(matchesGroups && matchesSearch);
      });
    };

    root.querySelectorAll('[data-catalog-filter-group]').forEach((group) => {
      const name = group.getAttribute('data-catalog-filter-group');
      group.querySelectorAll('[data-catalog-filter]').forEach((button) => {
        button.addEventListener('click', () => {
          state[name] = normalize(button.getAttribute('data-catalog-filter')) || 'all';
          group.querySelectorAll('[data-catalog-filter]').forEach((node) => node.classList.toggle('is-active', node === button));
          apply();
        });
      });
    });

    if (search) search.addEventListener('input', apply);
    apply();
  };

  const run = () => document.querySelectorAll('[data-catalog]').forEach(initCatalog);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
})();
