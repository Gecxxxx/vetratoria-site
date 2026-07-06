(() => {
  'use strict';

  const currentPath = location.pathname.replace(/index\.html$/, '').replace(/\/$/, '') || '/';

  const wingfoilPhotos = {
    anatoly: 'https://static.tildacdn.com/tild6534-6661-4166-a461-383833363563/noroot.png',
    hassan: 'https://static.tildacdn.com/tild3364-6538-4138-b235-333538373532/noroot.png',
    egor: 'https://static.tildacdn.com/tild6663-3234-4266-b864-646232336132/noroot.png',
    roma: 'https://static.tildacdn.com/tild6663-3134-4038-b239-373365653735/noroot.png',
    ira: 'https://static.tildacdn.com/tild6663-3532-4936-b966-313332363434/photo.jpg',
    anya: 'https://static.tildacdn.com/tild6339-3265-4532-b262-383061326233/noroot.png'
  };

  const wingfoilTeam = [
    {
      name: 'Anatoly',
      meta: 'RU / EN / DE',
      image: wingfoilPhotos.anatoly,
      alt: 'Anatoly — senior instructor Vetratoria Wingfoil Dahab',
      text: 'Менеджер и senior-инструктор. Помогает подобрать RRD-снаряжение и маршрут обучения под уровень, ветер и задачу.'
    },
    {
      name: 'Hassan',
      meta: 'RU / EN',
      image: wingfoilPhotos.hassan,
      alt: 'Hassan — pro instructor Vetratoria Wingfoil Dahab',
      text: 'Pro-инструктор. Баланс, первые старты, уверенность на фойле и спокойная работа на воде в разных условиях.'
    },
    {
      name: 'Egor',
      meta: 'RU / EN',
      image: wingfoilPhotos.egor,
      alt: 'Egor — instructor Vetratoria Wingfoil Dahab',
      text: 'Инструктор по детскому и базовому формату. Объясняет сложные элементы простыми шагами и держит спокойный темп.'
    },
    {
      name: 'Roma',
      meta: 'RU',
      image: wingfoilPhotos.roma,
      alt: 'Roma — instructor Vetratoria Wingfoil Dahab',
      text: 'Инструктор. Помогает разобраться с ветром, крылом, курсом и техникой без перегруза и лишней спешки.'
    },
    {
      name: 'Ira',
      meta: 'RU / EN',
      image: wingfoilPhotos.ira,
      alt: 'Ira — administrator Vetratoria Wingfoil Dahab',
      text: 'Администратор станции. Организация выхода, комфорт гостей, связь с командой и порядок до и после катания.'
    },
    {
      name: 'Anya',
      meta: 'RU / EN',
      image: wingfoilPhotos.anya,
      alt: 'Anya — instructor Vetratoria Wingfoil Dahab',
      text: 'Инструктор. Исправление технических ошибок, база, уверенность и понятный прогресс от урока к уроку.'
    }
  ];

  const windsurfTeam = [
    {
      name: 'Anatoly',
      meta: 'Senior / RU / EN / DE',
      image: wingfoilPhotos.anatoly,
      alt: 'Anatoly — windsurf instructor Vetratoria',
      text: 'База, подбор паруса и доски, маршрут обучения и спокойный вход в windsurf для взрослых и продолжающих.'
    },
    {
      name: 'Hassan',
      meta: 'RU / EN',
      image: wingfoilPhotos.hassan,
      alt: 'Hassan — windsurf instructor Vetratoria',
      text: 'Старт, курс, развороты, контроль доски и уверенность на воде в понятной зоне станции.'
    },
    {
      name: 'Egor',
      meta: 'Kids / RU / EN',
      image: wingfoilPhotos.egor,
      alt: 'Egor — kids windsurf instructor Vetratoria',
      text: 'Детский и начальный формат: лёгкая подача, внимание к безопасности и объяснение без давления.'
    },
    {
      name: 'Roma',
      meta: 'RU',
      image: wingfoilPhotos.roma,
      alt: 'Roma — windsurf instructor Vetratoria',
      text: 'Техника, ветер, парус, первые самостоятельные метры и постепенный переход к более уверенной практике.'
    },
    {
      name: 'Ira',
      meta: 'Station / RU / EN',
      image: wingfoilPhotos.ira,
      alt: 'Ira — Vetratoria station administrator',
      text: 'Администратор станции: запись, выходы, учёт занятий, связь с гостями и организация процесса на берегу.'
    },
    {
      name: 'Anya',
      meta: 'RU / EN',
      image: wingfoilPhotos.anya,
      alt: 'Anya — windsurf instructor Vetratoria',
      text: 'База, исправление ошибок, постановка техники и поддержка ученика на каждом этапе обучения.'
    }
  ];

  const wskTeam = [
    {
      name: 'Иван Пупенок',
      meta: 'WSK organizer',
      image: '/assets/img/final/windsurf/kids-03.webp',
      alt: 'Иван Пупенок — организатор WindSurfKids',
      text: 'Организатор WindSurfKids. Спортсмен, специалист парусного спорта, профессиональный тренер и преподаватель.'
    },
    {
      name: 'Филипп Андреев',
      meta: 'Kids coach',
      image: '/assets/img/final/windsurf/kids-04.webp',
      alt: 'Филипп Андреев — тренер WindSurfKids',
      text: 'Тренер детского лагеря. Легко находит общий язык с детьми и подбирает индивидуальный подход к ученику.'
    },
    {
      name: 'Роман Тарасов',
      meta: 'Kids coach',
      image: '/assets/img/final/windsurf/kids-01.webp',
      alt: 'Роман Тарасов — тренер WindSurfKids',
      text: 'Тренер детского спортивного лагеря WindSurfKids. Помогает детям пройти первые шаги спокойно и уверенно.'
    },
    {
      name: 'Кристина Тришина',
      meta: 'Administrator',
      image: '/assets/img/final/windsurf/kids-02.webp',
      alt: 'Кристина Тришина — администратор WindSurfKids',
      text: 'Администратор. Помогает детям и родителям с организацией, вопросами, комфортом и настроением лагеря.'
    },
    {
      name: 'Тихон',
      meta: 'Kids coach',
      image: '/assets/img/final/windsurf/lesson-water.webp',
      alt: 'Тихон — тренер WindSurfKids',
      text: 'Тренер WSK. Передаёт информацию легко и создаёт тёплую атмосферу, где ребёнок чувствует поддержку.'
    }
  ];

  const kiteTeam = [
    {
      name: 'Anatoly',
      meta: 'Lead / RU / EN / DE',
      image: wingfoilPhotos.anatoly,
      alt: 'Anatoly — kite instructor Vetratoria',
      text: 'Помогает выбрать формат, оценить уровень, условия ветра и безопасный маршрут первого выхода.'
    },
    {
      name: 'Hassan',
      meta: 'Instructor / RU / EN',
      image: wingfoilPhotos.hassan,
      alt: 'Hassan — kite instructor Vetratoria',
      text: 'Инструктор для старта, контроля купола, безопасности и уверенного перехода к практике.'
    },
    {
      name: 'Roma',
      meta: 'Instructor / RU',
      image: wingfoilPhotos.roma,
      alt: 'Roma — kite instructor Vetratoria',
      text: 'Практика, исправление ошибок и понятная подача техники для продолжающих райдеров.'
    },
    {
      name: 'Anya',
      meta: 'Instructor / RU / EN',
      image: wingfoilPhotos.anya,
      alt: 'Anya — kite instructor Vetratoria',
      text: 'Базовая техника, безопасность, контроль ученика и спокойный прогресс от занятия к занятию.'
    }
  ];

  const escapeHtml = (value) => String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

  const isExternalImage = (src) => /^https?:\/\//i.test(src);

  const createCard = (card, variant) => {
    const article = document.createElement('article');
    const classes = {
      sport: 'sport-card sport-card--photo vtr-team-card',
      info: 'info-card info-card--photo vtr-team-card',
      basic: 'card card--photo vtr-team-card'
    };
    const mediaClasses = {
      sport: 'sport-card__media vtr-team-card__media',
      info: 'info-card__media vtr-team-card__media',
      basic: 'card-photo vtr-team-card__media'
    };
    const metaClasses = {
      sport: 'sport-team__lang vtr-team-card__meta',
      info: 'vtr-team-card__meta',
      basic: 'vtr-team-card__meta'
    };

    article.className = classes[variant] || classes.basic;
    article.innerHTML = `
      <figure class="${mediaClasses[variant] || mediaClasses.basic}">
        <img src="${escapeHtml(card.image)}" alt="${escapeHtml(card.alt || card.name)}" loading="lazy" decoding="async"${isExternalImage(card.image) ? ' referrerpolicy="no-referrer"' : ''}>
      </figure>
      <span class="${metaClasses[variant] || metaClasses.basic}">${escapeHtml(card.meta)}</span>
      <h3>${escapeHtml(card.name)}</h3>
      <p>${escapeHtml(card.text)}</p>
    `;
    return article;
  };

  const renderCards = (container, cards, variant = 'basic') => {
    if (!container) return;
    container.classList.add('vtr-team-card-grid');
    container.replaceChildren(...cards.map((card) => createCard(card, variant)));
  };

  const renderSelector = (selector, cards, variant = 'basic') => {
    renderCards(document.querySelector(selector), cards, variant);
  };

  const findSectionByHeading = (headingText) => {
    const normalized = headingText.toLowerCase();
    return Array.from(document.querySelectorAll('section')).find((section) => {
      const heading = section.querySelector('h2');
      return heading && heading.textContent.trim().toLowerCase().includes(normalized);
    });
  };

  const renderByHeading = (headingText, cards) => {
    const section = findSectionByHeading(headingText);
    if (!section) return;
    renderCards(section.querySelector('.card-grid'), cards, 'basic');
  };

  const renderDahabTeamPage = () => {
    renderSelector('#wingfoil-team .info-grid', wingfoilTeam, 'info');
    renderSelector('#windsurf-team .info-grid', windsurfTeam, 'info');

    const kidsInner = document.querySelector('#kids-team .info-inner');
    if (kidsInner) {
      kidsInner.innerHTML = `
        <header class="info-heading">
          <p class="eyebrow">Kids · WSK</p>
          <h2>Команда Windsurf Kids</h2>
          <p>WSK — детский формат с отдельной логикой: спокойная подача, лёгкое снаряжение, внимание к ребёнку и безопасность на воде.</p>
        </header>
        <div class="info-grid" data-vtr-team="wsk"></div>
        <div class="info-hero-actions">
          <a class="button button-primary" href="/dahab/windsurf-kids/">Windsurf Kids</a>
          <a class="button button-ghost" href="/dahab/price/#wsk-prices">Цены WSK</a>
        </div>
      `;
      renderSelector('#kids-team [data-vtr-team="wsk"]', wskTeam, 'info');
    }
  };

  const renderDahabSportPage = () => {
    if (currentPath === '/dahab/wingfoil') {
      renderSelector('#team .sport-team__track', wingfoilTeam, 'sport');
    }
    if (currentPath === '/dahab/windsurf') {
      renderSelector('#team .sport-team__track', windsurfTeam, 'sport');
    }
    if (currentPath === '/dahab/windsurf-kids') {
      renderSelector('.sport-team .sport-team__track', wskTeam, 'sport');
    }
  };

  const renderCountryTeamPage = () => {
    renderSelector('#windsurf .card-grid', windsurfTeam, 'basic');
    renderSelector('#wingfoil .card-grid', wingfoilTeam, 'basic');
    renderSelector('#kite .card-grid', kiteTeam, 'basic');
  };

  const renderCountrySportPage = () => {
    renderByHeading('Инструкторы Windsurf', windsurfTeam);
    renderByHeading('Инструкторы Wingfoil', wingfoilTeam);
    renderByHeading('Инструкторы Kite', kiteTeam);
  };

  const init = () => {
    if (currentPath === '/dahab/team') {
      renderDahabTeamPage();
      return;
    }

    renderDahabSportPage();

    if (currentPath === '/vietnam/team' || currentPath === '/russia/team') {
      renderCountryTeamPage();
      return;
    }

    if (/^\/(vietnam|russia)\/(windsurf|wingfoil|kite)$/.test(currentPath)) {
      renderCountrySportPage();
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
