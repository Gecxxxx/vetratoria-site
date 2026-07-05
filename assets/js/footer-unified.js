(() => {
  'use strict';

  const path = location.pathname;
  const section = path.startsWith('/vietnam/') ? 'vietnam' : path.startsWith('/russia/') ? 'russia' : path.startsWith('/dahab/') ? 'dahab' : 'home';

  const data = {
    home: {
      text: 'Vetratoria — windsurf и wingfoil школы в Египте, Вьетнаме и России. Выберите страну, спорт и формат обучения.',
      badges: ['С 2006 года', '3 страны', 'Windsurf', 'Wingfoil'],
      cols: [
        ['Страны', [['Египет · Дахаб','/dahab/'], ['Вьетнам · Муйне','/vietnam/'], ['Россия · Должанская','/russia/']]],
        ['Спорт', [['Wingfoil Дахаб','/dahab/wingfoil/'], ['Windsurf Дахаб','/dahab/windsurf/'], ['Windsurf Kids','/dahab/windsurf-kids/']]],
        ['Материалы', [['Блог','/blog/'], ['Медиа','/media/'], ['Контакты','/contacts/']]],
        ['Связь', [['Написать нам','/contacts/'], ['dahab@vetratoria.ru','mailto:dahab@vetratoria.ru'], ['+201029321772','tel:+201029321772']]],
      ],
    },
    dahab: {
      text: 'Египет · Дахаб: Wingfoil, Windsurf, Windsurf Kids, станции, цены, команда, оборудование и безопасность.',
      badges: ['Дахаб', 'Wing Center', 'Swiss Inn', 'Ganet Sinai'],
      cols: [
        ['Дахаб', [['Обзор','/dahab/'], ['Цены','/dahab/price/'], ['Станции','/dahab/stations/'], ['Контакты','/contacts/']]],
        ['Спорт', [['Wingfoil','/dahab/wingfoil/'], ['Windsurf','/dahab/windsurf/'], ['Windsurf Kids','/dahab/windsurf-kids/']]],
        ['О школе', [['Команда','/dahab/team/'], ['Снаряжение','/dahab/equipment/'], ['Безопасность','/dahab/safety/']]],
        ['Связь', [['dahab@vetratoria.ru','mailto:dahab@vetratoria.ru'], ['+201029321772','tel:+201029321772'], ['Telegram','https://t.me/dahabvetratoria']]],
      ],
    },
    vietnam: {
      text: 'Вьетнам · Муйне: ветровое направление Vetratoria для windsurf, wingfoil и kite в сезон.',
      badges: ['Муйне', 'Vietnam', 'Windsurf', 'Kite'],
      cols: [
        ['Вьетнам', [['Обзор','/vietnam/'], ['Цены','/vietnam/price/'], ['Команда','/vietnam/team/'], ['Контакты','/contacts/']]],
        ['Спорт', [['Windsurf','/vietnam/windsurf/'], ['Wingfoil','/vietnam/wingfoil/'], ['Kite','/vietnam/kite/']]],
        ['Материалы', [['Блог','/blog/'], ['Медиа Вьетнам','/media/vietnam/'], ['Общее медиа','/media/']]],
        ['Связь', [['Написать нам','/contacts/'], ['Vetratoria Vietnam','/vietnam/'], ['Все направления','/']]],
      ],
    },
    russia: {
      text: 'Россия · Должанская: летний windsurf, wingfoil и kite формат Vetratoria на станции.',
      badges: ['Должанская', 'Russia', 'Summer season', 'Wind school'],
      cols: [
        ['Россия', [['Обзор','/russia/'], ['Цены','/russia/price/'], ['Команда','/russia/team/'], ['Контакты','/contacts/']]],
        ['Спорт', [['Windsurf','/russia/windsurf/'], ['Wingfoil','/russia/wingfoil/'], ['Kite','/russia/kite/']]],
        ['Материалы', [['Блог','/blog/'], ['Медиа Россия','/media/russia/'], ['Общее медиа','/media/']]],
        ['Связь', [['Написать нам','/contacts/'], ['Vetratoria Russia','/russia/'], ['Все направления','/']]],
      ],
    },
  };

  const current = data[section] || data.home;
  const link = ([label, href]) => `<a href="${href}">${label}</a>`;
  const col = ([title, items]) => `<nav class="vtr-footer__col"><h2>${title}</h2>${items.map(link).join('')}</nav>`;

  const render = () => {
    const footer = document.querySelector('footer.site-footer');
    if (!footer) return;

    footer.innerHTML = `<div class="vtr-footer"><div class="vtr-footer__inner"><div class="vtr-footer__top"><div class="vtr-footer__brand"><a href="/" aria-label="Vetratoria — главная"><img src="/assets/img/vetratoria-logo.png" width="260" height="76" alt="Vetratoria"></a><p>${current.text}</p><div class="vtr-footer__badges">${current.badges.map((badge) => `<span>${badge}</span>`).join('')}</div></div>${current.cols.map(col).join('')}</div><div class="vtr-footer__bottom"><span>© 2026 Vetratoria</span><span>Условия, расписание, цены и доступность форматов подтверждаются перед поездкой.</span></div></div></div>`;
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render); else render();
})();
