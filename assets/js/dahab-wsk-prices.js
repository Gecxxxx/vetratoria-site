(() => {
  'use strict';

  const itemsHalfDay = [
    'Пробежка, зарядка.',
    'Теория на берегу, тренировка на воде.',
    'Занятия проходят с 10.00 до 12.30.',
    'Оборудование включено.'
  ];

  const itemsFullDay = [
    'Пробежка, зарядка.',
    'Теория на берегу, тренировка на воде.',
    'Занятия проходят с 10.00 до 12.30.',
    'Оборудование включено.',
    'Питание.',
    'Настольные игры.',
    'Футбол, баскетбол, волейбол.',
    'Экскурсии в город.',
    'Снорклинг на рифах.',
    'Походы в горы.'
  ];

  const itemsDayCamp = [
    'Пробежка, зарядка.',
    'Теория на берегу, тренировка на воде.',
    'Занятия проходят с 10.00 до 20.00.',
    'Оборудование включено.',
    'Питание.',
    'Настольные игры.',
    'Футбол, баскетбол, волейбол.',
    'Экскурсии в город.',
    'Снорклинг на рифах.',
    'Походы в горы.'
  ];

  const list = (items) => `<ul>${items.map((item) => `<li>${item}</li>`).join('')}</ul>`;

  const card = ({ tag, title, lead, items, price, period = '', accent = false, wide = false }) => `
    <article class="wsk-price-card${accent ? ' wsk-price-card--accent' : ''}${wide ? ' wsk-price-card--wide' : ''}">
      <span class="wsk-price-card__tag">${tag}</span>
      <h3>${title}</h3>
      ${lead ? `<p class="wsk-price-card__lead">${lead}</p>` : ''}
      ${list(items)}
      <div class="wsk-price-card__bottom">
        <strong class="wsk-price-card__price">${price}</strong>
        ${period ? `<span class="wsk-price-card__period">${period}</span>` : ''}
      </div>
    </article>
  `;

  const updateShortLinks = () => {
    document.querySelectorAll('a[href="#wsk-prices"]').forEach((link) => {
      if (link.textContent.trim().toLowerCase().includes('позже')) link.textContent = 'WSK';
    });

    const entry = document.querySelector('.price-entry[href="#wsk-prices"]');
    if (!entry) return;

    const kicker = entry.querySelector('.price-entry__kicker');
    const paragraph = entry.querySelector('.price-entry__body p');
    const linkText = entry.querySelector('.price-entry__link');

    if (kicker) kicker.textContent = 'Kids · цены';
    if (paragraph) paragraph.textContent = 'Половина дня, полный день, летний лагерь, смены и дневное посещение.';
    if (linkText) linkText.textContent = 'Смотреть WSK цены →';
  };

  const render = () => {
    const section = document.getElementById('wsk-prices');
    if (!section) return;

    updateShortLinks();

    section.innerHTML = `
      <div class="price-inner">
        <header class="price-heading">
          <p class="eyebrow">Windsurf Kids · WSK</p>
          <h2>Наши цены и предложения</h2>
          <p>Кэмп доступен в любое время года. Летний лагерь доступен только в летний сезон школьных каникул.</p>
        </header>

        <div class="wsk-price-grid">
          ${card({
            tag: 'Кэмп · любое время года',
            title: 'Половина дня',
            lead: 'Короткий формат на первую половину дня с тренировкой на воде.',
            items: itemsHalfDay,
            price: '$85'
          })}

          ${card({
            tag: 'Кэмп · любое время года',
            title: 'Полный день',
            lead: 'Тренировка на воде плюс дневная программа с активностями.',
            items: itemsFullDay,
            price: '$95'
          })}

          ${card({
            tag: 'Летний лагерь',
            title: 'Половина смены',
            lead: 'Доступно только в летний сезон школьных каникул.',
            items: itemsFullDay,
            price: '$1980',
            period: '2 недели',
            accent: true
          })}

          ${card({
            tag: 'Летний лагерь',
            title: 'Полная смена',
            lead: 'Полный формат лагеря на 4 недели.',
            items: itemsFullDay,
            price: '$2600',
            period: '4 недели',
            accent: true
          })}

          ${card({
            tag: 'Летний лагерь',
            title: 'Дневное посещение',
            lead: 'Формат дневного посещения с расширенным расписанием.',
            items: itemsDayCamp,
            price: '140$',
            wide: true
          })}
        </div>

        <div class="wsk-price-note">
          <h3>Присоединяйтесь :)</h3>
          <p>Оставьте заявку, и мы свяжемся с вами в ближайшее время.</p>
          <div class="price-card-actions"><a class="button button-primary" data-application-open href="#application">Оставить заявку</a><a class="button button-ghost" href="/dahab/windsurf-kids/">Подробнее о WSK</a></div>
        </div>
      </div>
    `;
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render);
  else render();
})();
