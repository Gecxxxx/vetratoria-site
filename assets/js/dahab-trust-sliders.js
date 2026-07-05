(() => {
  'use strict';

  const root = document.querySelector('.day-flow');
  if (!root || !document.body.classList.contains('dahab-redesign')) return;

  const team = [
    {
      name: 'Anatoly',
      role: 'Manager & Senior Instructor',
      text: '25+ лет в водных видах спорта. Подберёт RRD-комплект и формат, чтобы первый выход на воду был спокойным и ярким.',
      langs: 'RU · EN · DE',
      image: 'https://static.tildacdn.com/tild6534-6661-4166-a461-383833363563/noroot.png'
    },
    {
      name: 'Hassan',
      role: 'Pro Instructor',
      text: '10+ лет тренерского опыта. Самый узнаваемый райдер на споте: учит балансу, фойлу и уверенности в любых условиях.',
      langs: 'RU · EN',
      image: 'https://static.tildacdn.com/tild3364-6538-4138-b235-333538373532/noroot.png'
    },
    {
      name: 'Egor',
      role: 'Kids Instructor',
      text: 'Специализируется на обучении детей от 8 лет. Превращает сложную технику в понятную игру и безопасный прогресс.',
      langs: 'RU · EN',
      image: 'https://static.tildacdn.com/tild6663-3234-4266-b864-646232336132/noroot.png'
    },
    {
      name: 'Roma',
      role: 'Instructor',
      text: 'Спокойно объясняет физику ветра, крыло и стойку. Помогает освоиться даже в сильный ветер и не перегружает ученика.',
      langs: 'RU',
      image: 'https://static.tildacdn.com/tild6663-3134-4038-b239-373365653735/noroot.png'
    },
    {
      name: 'Ira',
      role: 'Administrator',
      text: 'Душа станции: отвечает за комфорт, безопасность на воде и хорошее настроение до и после каждой сессии.',
      langs: 'RU · EN',
      image: 'https://static.tildacdn.com/tild6663-3532-4936-b966-313332363434/photo.jpg'
    },
    {
      name: 'Anya',
      role: 'Instructor',
      text: 'Отлично видит технические ошибки и помогает заложить базу, на которой ученик быстрее начинает прогрессировать.',
      langs: 'RU · EN',
      image: 'https://static.tildacdn.com/tild6339-3265-4532-b262-383061326233/noroot.png'
    }
  ];

  const reviews = [
    {
      name: 'Boris Sizov',
      text: 'Очень удобно приезжать без своего снаряжения: есть все размеры крыльев и досок, оборудования хватает. Толик, Ира и Хассан — настоящие профессионалы.',
      image: 'https://static.tildacdn.com/tild6164-3631-4235-a330-383665343863/unnamed.png'
    },
    {
      name: 'Dmitrii Polishchuk',
      text: 'Отличная surf-станция, классная локация для выхода в море, дружелюбная команда и сильное оборудование для wingfoil. Очень рекомендую.',
      image: 'https://static.tildacdn.com/tild3031-3066-4135-b264-653861326330/unnamed_1.png'
    },
    {
      name: 'Olga Krasnova',
      text: 'Wing Center Vetratoria — магическое место. Мои первые шаги на wingfoil получились, а снаряжение подходит и новичкам, и продолжающим.',
      image: 'https://static.tildacdn.com/tild3838-6139-4765-a330-653261633266/unnamed.png'
    },
    {
      name: 'Evgeniy Kolosov',
      text: 'Vetratoria в Египте оставила только положительные впечатления: высокий уровень инструкторов, идеальные условия и очень дружелюбная атмосфера.',
      image: 'https://static.tildacdn.com/tild6534-3361-4233-b534-376166626136/unnamed_2.png'
    },
    {
      name: 'Yuriy Tolchinskiy',
      text: 'Приезжал осваивать wingfoil. Довольно быстро получилось лететь на фойле и делать повороты. Спасибо Hassan за продуктивные тренировки.',
      image: 'https://static.tildacdn.com/tild3631-3539-4165-a238-373166376231/unnamed_1.png'
    }
  ];

  const teamCards = team.map((person) => `
    <article class="trust-card trust-card--person">
      <figure><img src="${person.image}" alt="${person.name} — ${person.role}" loading="lazy" decoding="async"></figure>
      <div class="trust-card__body">
        <span>${person.role}</span>
        <h3>${person.name}</h3>
        <p>${person.text}</p>
        <em>Languages: ${person.langs}</em>
      </div>
    </article>
  `).join('');

  const reviewCards = reviews.map((review) => `
    <article class="trust-card trust-card--review">
      <div class="trust-review__top">
        <img src="${review.image}" alt="${review.name}" loading="lazy" decoding="async">
        <div><strong>${review.name}</strong><span>★★★★★</span></div>
      </div>
      <p>«${review.text}»</p>
    </article>
  `).join('');

  root.outerHTML = `
    <section class="trust-block" id="team-reviews">
      <div class="trust-block__inner">
        <header class="trust-head">
          <p class="eyebrow">Команда и отзывы</p>
          <h2>Команда, которая выводит на воду</h2>
          <p>Мы не просто выдаём снаряжение — подбираем станцию, ветер и формат под ваш уровень. Инструктор рядом: на берегу, на старте и в воде.</p>
        </header>

        <section class="trust-slider" aria-label="Команда Vetratoria Dahab">
          <div class="trust-slider__top">
            <div>
              <span>Команда</span>
              <h3>Инструкторы и команда станции</h3>
            </div>
            <div class="trust-slider__controls">
              <button type="button" data-trust-prev="team" aria-label="Предыдущие участники команды">‹</button>
              <button type="button" data-trust-next="team" aria-label="Следующие участники команды">›</button>
            </div>
          </div>
          <div class="trust-track" data-trust-track="team">${teamCards}</div>
        </section>

        <section class="trust-photo-break" aria-label="Атмосфера Vetratoria Dahab">
          <figure class="trust-photo-break__main"><img src="/assets/img/final/wingfoil/hero.webp" alt="Wingfoil в Дахабе" loading="lazy" decoding="async"><figcaption>Wingfoil</figcaption></figure>
          <figure><img src="/assets/img/final/stations/wingfoil-station.webp" alt="Станция Wing Center в Дахабе" loading="lazy" decoding="async"><figcaption>Станция</figcaption></figure>
          <figure><img src="/assets/img/final/windsurf/lesson-water.webp" alt="Windsurf урок на воде" loading="lazy" decoding="async"><figcaption>Уроки</figcaption></figure>
          <div class="trust-photo-break__text"><span>Атмосфера станции</span><strong>После команды — сразу вода, ветер и настоящая жизнь спота.</strong></div>
        </section>

        <section class="trust-slider trust-slider--reviews" aria-label="Отзывы гостей Vetratoria Dahab">
          <div class="trust-slider__top">
            <div>
              <span>Отзывы</span>
              <h3>Что говорят гости</h3>
            </div>
            <a href="https://www.tripadvisor.com/" target="_blank" rel="noopener">144 отзыва →</a>
            <div class="trust-slider__controls">
              <button type="button" data-trust-prev="reviews" aria-label="Предыдущие отзывы">‹</button>
              <button type="button" data-trust-next="reviews" aria-label="Следующие отзывы">›</button>
            </div>
          </div>
          <div class="trust-track trust-track--reviews" data-trust-track="reviews">${reviewCards}</div>
        </section>
      </div>
    </section>
  `;

  document.querySelectorAll('[data-trust-prev],[data-trust-next]').forEach((button) => {
    button.addEventListener('click', () => {
      const key = button.dataset.trustPrev || button.dataset.trustNext;
      const track = document.querySelector(`[data-trust-track="${key}"]`);
      if (!track) return;
      const direction = button.dataset.trustPrev ? -1 : 1;
      const card = track.querySelector('.trust-card');
      const step = card ? card.getBoundingClientRect().width + 18 : track.clientWidth * 0.8;
      track.scrollBy({ left: direction * step, behavior: 'smooth' });
    });
  });
})();
