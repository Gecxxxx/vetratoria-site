(() => {
  'use strict';

  const isWingfoil = document.body.classList.contains('sport-page--wingfoil');
  const isWindsurf = document.body.classList.contains('sport-page--windsurf');

  const safetyText = isWingfoil
    ? 'На воде работает система безопасности: инструктор контролирует процесс, есть rescue boat, связь и понятные зоны под уровень райдера.'
    : 'На занятиях важна понятная зона, инструктор рядом, подбор условий под уровень и rescue-поддержка при необходимости.';

  const run = () => {
    document.querySelectorAll('#equipment-safety').forEach((section) => {
      const eyebrow = section.querySelector('.sport-section__head .eyebrow');
      const title = section.querySelector('.sport-section__head h2');
      const lead = section.querySelector('.sport-section__head p:not(.eyebrow)');

      if (eyebrow) eyebrow.textContent = 'Безопасность';
      if (title) title.textContent = 'Безопасность на воде';
      if (lead) lead.textContent = safetyText;

      section.querySelectorAll('.sport-equipment-safety__panel').forEach((panel) => {
        const heading = (panel.querySelector('h3')?.textContent || '').trim().toLowerCase();
        if (heading.includes('оборуд')) panel.remove();
      });

      section.querySelectorAll('a[href*="/equipment"], a[href*="equipment"]').forEach((link) => link.remove());
    });

    document.querySelectorAll('img[alt*="Оборудование"], img[alt*="оборудование"], img[src*="equipment"]').forEach((img) => {
      const figure = img.closest('figure');
      const card = img.closest('.sport-card, .sport-step, .sport-media__gallery figure');
      if (card) card.remove();
      else if (figure) figure.remove();
    });

    document.querySelectorAll('.sport-card, .sport-price-card, .trust-card').forEach((card) => {
      const text = card.textContent.toLowerCase();
      if (text.includes('equipment support') || text.includes('снаряжение wsk') || text.includes('снаряга')) {
        card.remove();
      }
    });
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
  else run();
})();
