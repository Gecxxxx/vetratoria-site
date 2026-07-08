(() => {
  'use strict';

  const path = location.pathname;
  const isDirectionPage = path.startsWith('/dahab/') || path.startsWith('/vietnam/') || path.startsWith('/russia/');
  const country = path.startsWith('/vietnam/') ? 'vietnam' : path.startsWith('/russia/') ? 'russia' : 'dahab';
  const clean = (value) => (value || '/').split('#')[0].split('?')[0].replace(/\/$/, '') || '/';
  const current = clean(path);
  const sectionActive = (href) => {
    const target = clean(href);
    return target === '/' ? current === '/' : current === target || current.startsWith(target + '/');
  };
  const schoolActive = () => ['/dahab/safety', '/dahab/windsurf-kids', '/dahab/team', '/dahab/how-to-get', '/dahab/where-to-stay'].some((href) => current === href || current.startsWith(href + '/'));
  const dahabPriceActive = () => current === '/dahab/price' || current === '/dahab/wingfoil/price' || current === '/dahab/windsurf/price' || current === '/dahab/windsurf-kids/price';
  const vietnamSchoolActive = () => current.startsWith('/vietnam/team') || current.startsWith('/media/vietnam');
  const russiaSchoolActive = () => current.startsWith('/russia/team') || current.startsWith('/media/russia');
  const itemActive = (href) => {
    const target = clean(href);
    if (target === '/dahab') return current === '/dahab';
    if (target === '/dahab/wingfoil') return sectionActive('/dahab/wingfoil');
    if (target === '/dahab/windsurf') return sectionActive('/dahab/windsurf');
    if (target === '/dahab/price') return sectionActive('/dahab/price');
    if (target === '/dahab/stations') return sectionActive('/dahab/stations');
    return sectionActive(href);
  };
  const a = (href, label, hint = '') => `<a class="${itemActive(href) ? 'is-active' : ''}" href="${href}"><strong>${label}</strong>${hint ? `<small>${hint}</small>` : ''}</a>`;
  const drop = (label, items, isActive = false) => `<div class="vtr-drop${isActive ? ' is-active' : ''}"><button type="button" aria-expanded="false">${label} <span aria-hidden="true">⌄</span></button><div class="vtr-drop__menu">${items.join('')}</div></div>`;

  const ensureTopbarStyles = () => {
    if (document.getElementById('vtr-topbar-final-styles')) return;
    const style = document.createElement('style');
    style.id = 'vtr-topbar-final-styles';
    style.textContent = `
      .vtr-nav__top{min-height:54px;display:grid!important;grid-template-columns:1fr auto 1fr!important;align-items:center!important;gap:20px!important;padding:8px 34px!important;background:#10100f!important;border-bottom:1px solid rgba(255,255,255,.1)!important}
      .vtr-nav__top .vtr-nav__countries{height:auto!important;background:transparent!important;border:0!important;display:block!important}
      .vtr-nav__top .vtr-nav__countries-inner{display:flex!important;align-items:center!important;justify-content:center!important;gap:26px!important}
      .vtr-nav__top .vtr-nav__country{height:auto!important;padding:8px 8px!important;color:rgba(255,255,255,.72)!important;font-size:13px!important;font-weight:950!important;letter-spacing:.06em!important;text-transform:uppercase!important;border-bottom:2px solid transparent!important}
      .vtr-nav__top .vtr-nav__country:hover,.vtr-nav__top .vtr-nav__country.is-active{color:#fff!important;background:rgba(255,90,31,.1)!important;border-bottom-color:#ff5a1f!important}
      .vtr-nav__contacts{display:flex!important;align-items:center!important;gap:8px!important;justify-self:start!important;min-width:0!important;white-space:nowrap!important}
      .vtr-nav__contacts a{color:#fff!important;font-size:14px!important;font-weight:850!important;line-height:1!important;text-decoration:none!important}
      .vtr-nav__contacts a:hover{color:#ff8a3d!important}
      .vtr-nav__right{display:flex!important;align-items:center!important;justify-content:flex-end!important;gap:18px!important;justify-self:end!important}
      .vtr-nav__socials{display:flex!important;align-items:center!important;gap:10px!important}
      .vtr-nav__socials a{color:#fff!important;font-size:13px!important;font-weight:950!important;letter-spacing:.02em!important;text-decoration:none!important}
      .vtr-nav__socials a:hover{color:#ff8a3d!important}
      .vtr-nav__lang-drop{position:relative!important}
      .vtr-nav__lang-drop>button{display:flex!important;align-items:center!important;gap:6px!important;border:0!important;background:transparent!important;color:#fff!important;font:inherit!important;font-size:16px!important;font-weight:950!important;cursor:pointer!important}
      .vtr-nav__lang-drop>button span{color:#ff5a1f!important}
      .vtr-nav__lang-menu{position:absolute!important;top:100%!important;right:0!important;min-width:86px!important;padding:7px!important;background:#11100f!important;border:1px solid rgba(255,255,255,.12)!important;box-shadow:0 18px 48px rgba(0,0,0,.38)!important;opacity:0!important;visibility:hidden!important;transform:translateY(6px)!important;pointer-events:none!important;z-index:20!important}
      .vtr-nav__lang-drop:hover .vtr-nav__lang-menu,.vtr-nav__lang-drop:focus-within .vtr-nav__lang-menu,.vtr-nav__lang-drop.is-open .vtr-nav__lang-menu{opacity:1!important;visibility:visible!important;transform:translateY(0)!important;pointer-events:auto!important}
      .vtr-nav__lang-menu a{display:block!important;padding:8px 10px!important;color:rgba(255,255,255,.78)!important;font-size:13px!important;font-weight:900!important;text-decoration:none!important}
      .vtr-nav__lang-menu a:hover{color:#fff!important;background:rgba(255,90,31,.1)!important}
      @media(max-width:1100px){
        .vtr-nav__top{min-height:38px!important;display:flex!important;align-items:center!important;justify-content:center!important;gap:0!important;padding:5px 10px!important}
        .vtr-nav__contacts,.vtr-nav__right{display:none!important}
        .vtr-nav__top .vtr-nav__countries{width:100%!important}
        .vtr-nav__top .vtr-nav__countries-inner{width:100%!important;display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:4px!important;padding:0!important}
        .vtr-nav__top .vtr-nav__country{display:flex!important;align-items:center!important;justify-content:center!important;min-width:0!important;padding:7px 4px!important;font-size:10px!important;line-height:1!important;text-align:center!important;white-space:nowrap!important}
        .site-header[data-nav].is-open .vtr-nav__mobile{top:var(--vtr-mobile-menu-top,94px)!important;height:calc(100dvh - var(--vtr-mobile-menu-top,94px))!important;bottom:auto!important}
        .vtr-mobile-group--primary{padding:10px!important;border:1px solid rgba(255,90,31,.22)!important;background:rgba(255,90,31,.055)!important}
        .vtr-mobile-group--primary>b{font-size:12px!important;color:#fff!important}
        .vtr-mobile-details{display:block!important;margin-bottom:16px!important;border:1px solid rgba(255,255,255,.08)!important;background:rgba(255,255,255,.025)!important}
        .vtr-mobile-details>summary{min-height:44px!important;display:flex!important;align-items:center!important;justify-content:space-between!important;gap:10px!important;padding:0 12px!important;color:#ff5a1f!important;font-size:11px!important;font-weight:1000!important;letter-spacing:.12em!important;text-transform:uppercase!important;cursor:pointer!important;list-style:none!important}
        .vtr-mobile-details>summary::-webkit-details-marker{display:none!important}
        .vtr-mobile-details>summary:after{content:'⌄';color:#ff5a1f;font-size:13px;transition:transform .18s ease}
        .vtr-mobile-details[open]>summary:after{transform:rotate(180deg)}
        .vtr-mobile-details__content{display:grid!important;gap:6px!important;padding:0 10px 10px!important}
      }
      @media(max-width:560px){
        .vtr-nav__top{min-height:36px!important;padding:4px 8px!important}
        .vtr-nav__top .vtr-nav__countries-inner{gap:3px!important}
        .vtr-nav__top .vtr-nav__country{font-size:9px!important;padding:7px 3px!important;letter-spacing:.04em!important}
      }
    `;
    document.head.append(style);
  };

  const countries = [
    ['dahab', '/dahab/', 'Египет'],
    ['vietnam', '/vietnam/', 'Вьетнам'],
    ['russia', '/russia/', 'Россия'],
  ];

  const topContacts = `<div class="vtr-nav__contacts"><a href="mailto:dahab@vetratoria.ru">dahab@vetratoria.ru</a><a href="tel:+201029321772">+201029321772</a></div>`;
  const topSocials = `<div class="vtr-nav__right"><div class="vtr-nav__socials"><a href="/contacts/" aria-label="VK">VK</a><a href="/media/" aria-label="YouTube">YT</a><a href="/contacts/" aria-label="Tripadvisor">TA</a></div><div class="vtr-nav__lang-drop"><button type="button" aria-expanded="false">RU <span aria-hidden="true">⌄</span></button><div class="vtr-nav__lang-menu"><a href="#">EN</a><a href="#">DE</a></div></div></div>`;

  const dahabPriceMenu = drop('Цены', [
    a('/dahab/price/', 'Все цены', 'общий прайс Дахаба'),
    a('/dahab/wingfoil/price/', 'Цены Wingfoil', 'полный wingfoil прайс'),
    a('/dahab/windsurf/price/', 'Цены Windsurf', 'курсы, прокат, хранение'),
    a('/dahab/windsurf-kids/price/', 'Цены WSK', 'кэмп и лагерь')
  ], dahabPriceActive());

  const main = [a('/', 'Vetratoria'), drop('Направления', [a('/dahab/', 'Египет · Дахаб', 'Wingfoil, Windsurf, Kids'), a('/vietnam/', 'Вьетнам · Муйне', 'Windsurf, Wingfoil, Kite'), a('/russia/', 'Россия · Должанская', 'Windsurf, Wingfoil, Kite')]), a('/blog/', 'Блог'), a('/media/', 'Медиа'), a('/contacts/', 'Контакты')];
  const mainMobile = [a('/', 'Vetratoria'), a('/blog/', 'Блог'), a('/media/', 'Медиа'), a('/contacts/', 'Контакты')];
  const mobileDirections = [a('/dahab/', 'Египет · Дахаб', 'Wingfoil, Windsurf, Kids'), a('/vietnam/', 'Вьетнам · Муйне', 'Windsurf, Wingfoil, Kite'), a('/russia/', 'Россия · Должанская', 'Windsurf, Wingfoil, Kite')];
  const directions = {
    dahab: ['Дахаб', [a('/dahab/', 'Обзор'), a('/dahab/wingfoil/', 'Wingfoil'), a('/dahab/windsurf/', 'Windsurf'), dahabPriceMenu, a('/dahab/stations/', 'Станции'), drop('О школе', [a('/dahab/safety/', 'Безопасность', 'зоны, правила, rescue'), a('/dahab/windsurf-kids/', 'WSK', 'Windsurf Kids'), a('/dahab/team/', 'Команда', 'инструкторы и станция'), a('/dahab/how-to-get/', 'Как добраться и где жить', 'аэропорт, трансфер, отели'), a('/media/dahab/', 'Медиа направления', 'альбомы Дахаба')], schoolActive())]],
    vietnam: ['Вьетнам', [a('/vietnam/', 'Обзор'), a('/vietnam/windsurf/', 'Windsurf'), a('/vietnam/wingfoil/', 'Wingfoil'), a('/vietnam/kite/', 'Kite'), a('/vietnam/price/', 'Цены'), drop('О школе', [a('/vietnam/#spots', 'Станции', 'споты и формат'), a('/vietnam/#safety', 'Безопасность', 'правила и условия'), a('/media/vietnam/', 'Медиа', 'альбомы направления'), a('/vietnam/team/', 'Команда', 'инструкторы')], vietnamSchoolActive())]],
    russia: ['Россия', [a('/russia/', 'Обзор'), a('/russia/windsurf/', 'Windsurf'), a('/russia/wingfoil/', 'Wingfoil'), a('/russia/kite/', 'Kite'), a('/russia/price/', 'Цены'), drop('О школе', [a('/russia/#spots', 'Станции', 'споты и формат'), a('/russia/#safety', 'Безопасность', 'kite, прокат'), a('/media/russia/', 'Медиа', 'альбомы направления'), a('/russia/team/', 'Команда', 'инструкторы')], russiaSchoolActive())]],
  };

  const countryHtml = countries.map(([key, href, label]) => `<a class="vtr-nav__country${key === country && isDirectionPage ? ' is-active' : ''}" href="${href}">${label}</a>`).join('');
  const [title, dir] = directions[country] || directions.dahab;
  const group = (name, items, isPrimary = false) => `<div class="vtr-mobile-group${isPrimary ? ' vtr-mobile-group--primary' : ''}"><b>${name}</b>${items.join('')}</div>`;
  const contactsGroup = group('Контакты', [a('mailto:dahab@vetratoria.ru', 'dahab@vetratoria.ru'), a('tel:+201029321772', '+201029321772'), a('https://t.me/dahabvetratoria', 'Telegram')]);
  const directionHtml = isDirectionPage ? `<div class="vtr-nav__direction-wrap"><nav class="vtr-nav__direction" aria-label="Меню направления ${title}">${dir.join('')}</nav></div>` : '';
  const mobileDirectionHtml = isDirectionPage ? group(title, dir, true) : '';
  const mobileMenuHtml = isDirectionPage
    ? `${mobileDirectionHtml}${group('Главное', mainMobile)}${contactsGroup}`
    : `${group('Направления', mobileDirections, true)}${group('Главное', mainMobile)}${contactsGroup}`;

  const closeDrops = (root, except = null) => {
    root.querySelectorAll('.vtr-drop,.vtr-nav__lang-drop').forEach((dropNode) => {
      if (dropNode === except) return;
      dropNode.classList.remove('is-open');
      const button = dropNode.querySelector(':scope > button');
      if (button) button.setAttribute('aria-expanded', 'false');
    });
  };

  const updateMobileMenuPosition = (header) => {
    const menu = header.querySelector('.vtr-nav__mobile');
    if (!menu) return;

    const top = Math.max(0, Math.round(header.getBoundingClientRect().bottom));
    header.style.setProperty('--vtr-mobile-menu-top', `${top}px`);
    menu.style.setProperty('top', `${top}px`, 'important');
    menu.style.setProperty('height', `calc(100dvh - ${top}px)`, 'important');
    menu.style.setProperty('bottom', 'auto', 'important');
  };

  const setMobile = (header, open) => {
    const button = header.querySelector('.vtr-nav__burger');
    const menu = header.querySelector('.vtr-nav__mobile');

    header.classList.toggle('is-open', open);
    document.body.classList.toggle('nav-lock', open);

    if (button) {
      button.setAttribute('aria-expanded', String(open));
      button.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
    }

    if (menu) {
      if (open) {
        updateMobileMenuPosition(header);
        menu.hidden = false;
        menu.removeAttribute('hidden');
        menu.style.display = 'block';
        menu.style.visibility = 'visible';
        menu.style.opacity = '1';
        menu.style.pointerEvents = 'auto';
      } else {
        menu.hidden = true;
        menu.setAttribute('hidden', '');
        menu.style.display = '';
        menu.style.visibility = '';
        menu.style.opacity = '';
        menu.style.pointerEvents = '';
        menu.style.top = '';
        menu.style.height = '';
        menu.style.bottom = '';
      }
    }
  };

  const run = () => {
    ensureTopbarStyles();
    const header = document.querySelector('[data-nav]');
    if (!header) return;
    document.querySelectorAll('.direction-nav').forEach((node) => node.remove());
    header.className = 'site-header vtr-nav';
    header.setAttribute('data-nav', '');
    header.innerHTML = `<div class="vtr-nav__top">${topContacts}<nav class="vtr-nav__countries" aria-label="Выбор страны"><div class="vtr-nav__countries-inner">${countryHtml}</div></nav>${topSocials}</div><div class="vtr-nav__main"><a class="vtr-nav__logo" href="/" aria-label="Vetratoria — главная"><img src="/assets/img/vetratoria-logo.png" alt="Vetratoria"></a><nav class="vtr-nav__main-links" aria-label="Главное меню">${main.join('')}</nav><button class="vtr-nav__burger" type="button" aria-expanded="false" aria-label="Открыть меню"><span></span><span></span><span></span></button></div>${directionHtml}<nav class="vtr-nav__mobile" aria-label="Мобильное меню" hidden>${mobileMenuHtml}</nav>`;

    const onBurgerClick = (event) => {
      const trigger = event.target.closest('.vtr-nav__burger');
      if (!trigger || !header.contains(trigger)) return;

      event.preventDefault();
      event.stopPropagation();

      setMobile(header, !header.classList.contains('is-open'));
    };

    header.addEventListener('click', onBurgerClick, true);
    header.querySelectorAll('.vtr-drop > button, .vtr-nav__lang-drop > button').forEach((button) => {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        const parent = button.closest('.vtr-drop, .vtr-nav__lang-drop');
        const open = !parent.classList.contains('is-open');
        closeDrops(header, parent);
        parent.classList.toggle('is-open', open);
        button.setAttribute('aria-expanded', String(open));
      });
    });
    header.querySelectorAll('.vtr-nav__mobile a').forEach((link) => link.addEventListener('click', () => setMobile(header, false)));
    document.addEventListener('click', (event) => { if (!event.target.closest('.vtr-drop, .vtr-nav__lang-drop')) closeDrops(header); });
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape') { closeDrops(header); setMobile(header, false); } });
    window.addEventListener('resize', () => { if (header.classList.contains('is-open')) updateMobileMenuPosition(header); }, { passive: true });
    window.addEventListener('orientationchange', () => { if (header.classList.contains('is-open')) setTimeout(() => updateMobileMenuPosition(header), 120); });
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
})();