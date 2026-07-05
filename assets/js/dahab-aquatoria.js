(() => {
  'use strict';
  const oldBlock = document.querySelector('.safety-rescue');
  if (!oldBlock || !document.body.classList.contains('dahab-redesign')) return;

  oldBlock.outerHTML = `
    <section class="water-area" id="water-area">
      <div class="water-area__inner">
        <div class="water-area__copy">
          <p class="eyebrow">Акватория</p>
          <h2>Где катаем в Дахабе</h2>
          <p class="water-area__lead">У Дахаба есть редкая фишка: рядом находятся спокойная вода для первых стартов, длинная зона для прогресса и открытое море для уверенных райдеров.</p>

          <div class="water-area__cards">
            <article>
              <strong>01. Лагуна</strong>
              <p>Самый спокойный старт: ровная вода, песчаная коса и понятная зона рядом с берегом. Хорошо для первых галсов и первых полётов на фойле.</p>
            </article>
            <article>
              <strong>02. Скоростная зона</strong>
              <p>Длинные галсы и стабильный ветер. Здесь удобно отрабатывать скорость, повороты, контроль крыла или паруса.</p>
            </article>
            <article>
              <strong>03. Волновая зона</strong>
              <p>Открытая вода для тех, кто уже уверенно катается. Больше ветра, волна и настоящая дахабская практика.</p>
            </article>
          </div>

          <div class="water-area__actions">
            <a class="water-area__primary" data-application-open href="#application">Подобрать зону</a>
            <a class="water-area__ghost" href="/dahab/safety/">Безопасность на воде →</a>
          </div>
        </div>

        <div class="water-area__visual">
          <figure>
            <img src="https://static.tildacdn.com/tild3630-3762-4664-a336-363462393264/photo_2024-10-14_13-.jpg" alt="Акватория Дахаба" loading="lazy" decoding="async">
          </figure>
        </div>
      </div>
    </section>
  `;
})();
