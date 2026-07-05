(() => {
  'use strict';
  const panel = document.querySelector('.station-atmosphere__panel');
  if (!panel) return;

  const title = panel.querySelector('h3');
  const text = panel.querySelector('p');
  const chips = panel.querySelectorAll('.station-atmosphere__chips small');

  if (title) title.textContent = 'Станция живёт между выходами на воду';
  if (text) text.textContent = 'Здесь выбирают комплект, смотрят ветер, обсуждают попытки и возвращаются на воду снова. Не только урок — атмосфера Дахаба и команды рядом.';

  const labels = ['вода', 'берег', 'прогресс'];
  chips.forEach((chip, index) => {
    if (labels[index]) chip.textContent = labels[index];
  });
})();
