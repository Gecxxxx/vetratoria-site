(() => {
  'use strict';
  const panel = document.querySelector('.station-atmosphere__panel');
  if (!panel) return;

  const title = panel.querySelector('h3');
  const text = panel.querySelector('p');
  const chips = panel.querySelectorAll('.station-atmosphere__chips small');

  if (title) title.textContent = 'Станция';
  if (text) text.textContent = 'Комплект, ветер, старт и возвращение на воду.';

  const labels = ['вода', 'берег', 'прогресс'];
  chips.forEach((chip, index) => {
    if (labels[index]) chip.textContent = labels[index];
  });
})();
