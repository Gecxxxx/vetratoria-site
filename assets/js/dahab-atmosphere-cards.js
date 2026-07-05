(() => {
  'use strict';

  const oldBlock = document.querySelector('.trust-photo-break');
  if (!oldBlock || !document.body.classList.contains('dahab-redesign')) return;

  oldBlock.outerHTML = `
    <section class="station-atmosphere" aria-label="Атмосфера станции Vetratoria Dahab">
      <a class="station-atmosphere__card station-atmosphere__card--main" href="/dahab/wingfoil/">
        <img src="/assets/img/final/wingfoil/hero.webp" alt="Wingfoil в Дахабе" loading="lazy" decoding="async">
        <span>Wingfoil</span>
        <strong>Полёты над водой</strong>
        <em>Крыло, фойл и быстрый прогресс</em>
      </a>

      <a class="station-atmosphere__card" href="/dahab/windsurf/">
        <img src="/assets/img/final/windsurf/lesson-water.webp" alt="Windsurf в Дахабе" loading="lazy" decoding="async">
        <span>Windsurf</span>
        <strong>Парус и ветер</strong>
        <em>Уроки, прокат и практика</em>
      </a>

      <a class="station-atmosphere__card" href="/dahab/price/">
        <img src="/assets/img/final/stations/wingfoil-station.webp" alt="Станция Vetratoria в Дахабе" loading="lazy" decoding="async">
        <span>Цены</span>
        <strong>Форматы без пакетов</strong>
        <em>Катаетесь и платите по факту</em>
      </a>

      <div class="station-atmosphere__panel">
        <span>Атмосфера станции</span>
        <h3>Приезжаете не на урок — попадаете в живой спот</h3>
        <p>На берегу выбирают снаряжение, смотрят ветер, обсуждают попытки и снова возвращаются на воду. Это место, где хочется остаться после каталки.</p>
        <div class="station-atmosphere__chips">
          <small>Фото с воды</small>
          <small>Живой берег</small>
          <small>Разбор прогресса</small>
        </div>
        <a href="/media/dahab/">Смотреть медиа Дахаба →</a>
      </div>
    </section>
  `;
})();
