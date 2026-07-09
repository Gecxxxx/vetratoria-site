# AUDIT CLEANUP REPORT

Дата аудита: 2026-07-08

Репозиторий: `Gecxxxx/vetratoria-site`.

## Область проверки

Проверялись HTML, CSS, JS, `sitemap.xml`, `_redirects`, `.htaccess`.

## CSS-файлы

Найдено CSS-файлов: 47.

- `assets/css/site.css`
- `assets/css/nav-production.css`
- `assets/css/nav-fixed-all.css`
- `assets/css/sport-page.css`
- `assets/css/dahab-info-page.css`
- `assets/css/country-dahab-like.css`
- `assets/css/blog-media-page.css`
- `assets/css/contacts-page.css`
- `assets/css/stations-page-simple.css`
- `assets/css/vtr-fonts.css`
- `assets/css/vtr-components.css`
- `assets/css/footer-unified.css`
- `assets/css/home-page.css`
- `assets/css/home-redesign.css`
- `assets/css/home-photos.css`
- `assets/css/home-layout-fix.css`
- `assets/css/home-hero-edge-final.css`
- `assets/css/hero-compact-global.css`
- `assets/css/hero-features-unified.css`
- `assets/css/dahab-page.css`
- `assets/css/dahab-menu-clusters.css`
- `assets/css/dahab-mobile-qa.css`
- `assets/css/dahab-mobile-final-fix.css`
- `assets/css/dahab-hero-cta.css`
- `assets/css/dahab-hero-compact.css`
- `assets/css/dahab-clean-photos.css`
- `assets/css/dahab-atmosphere-refine.css`
- `assets/css/dahab-atmosphere-cards.css`
- `assets/css/dahab-aquatoria-unique.css`
- `assets/css/dahab-static-images-3.css`
- `assets/css/dahab-static-layout.css`
- `assets/css/dahab-team-photos.css`
- `assets/css/dahab-team-square.css`
- `assets/css/dahab-team-reviews-fix.css`
- `assets/css/dahab-trust-sliders.css`
- `assets/css/dahab-travel-combined.css`
- `assets/css/dahab-price-page.css`
- `assets/css/dahab-price-redesign.css`
- `assets/css/dahab-price-polish.css`
- `assets/css/dahab-price-tables-full.css`
- `assets/css/dahab-wsk-prices.css`
- `assets/css/dahab-sport-polish.css`
- `assets/css/dahab-url-test.css`
- `assets/css/price-cleanup.css`
- `assets/css/vtr-card-position-fix.css`
- `assets/css/team-cards.css`
- `assets/css/wingfoil-page-photos.css`

## JS-файлы

Найдено JS-файлов: 26.

- `assets/js/site.js`
- `assets/js/nav3-production.js`
- `assets/js/nav-fixed-all.js`
- `assets/js/footer-unified.js`
- `assets/js/copy-fixes.js`
- `assets/js/equipment-block-cleanup.js`
- `assets/js/catalog-filter.js`
- `assets/js/home-redesign.js`
- `assets/js/home-photos.js`
- `assets/js/hero-features-unified.js`
- `assets/js/photo-pass-0703.js`
- `assets/js/dahab-aquatoria.js`
- `assets/js/dahab-atmosphere-cards.js`
- `assets/js/dahab-atmosphere-refine.js`
- `assets/js/dahab-benefits.js`
- `assets/js/dahab-clean-photos.js`
- `assets/js/dahab-hero-cta.js`
- `assets/js/dahab-price-redesign.js`
- `assets/js/dahab-static.js`
- `assets/js/dahab-team-reviews-fix.js`
- `assets/js/dahab-travel-combined.js`
- `assets/js/dahab-trust-sliders.js`
- `assets/js/dahab-wsk-prices.js`
- `assets/js/stations-page-simple.js`
- `assets/js/team-cards.js`
- `assets/js/wingfoil-page-photos.js`

## `!important`

До чистки найдено: 429 вхождений.

Основные источники: `hero-compact-global.css` 64, `home-hero-edge-final.css` 53, `dahab-hero-compact.css` 51, `dahab-clean-photos.css` 48, `home-layout-fix.css` 44, `vtr-card-position-fix.css` 34, `nav3-production.js` 34 inline-вхождения, `site.css` 17, `price-cleanup.css` 15, `nav-fixed-all.css` 11.

## Временные патчи и подозрительные файлы

Высокий приоритет на чистку:

- `assets/js/copy-fixes.js` — меняет текстовые узлы после загрузки страницы.
- `assets/js/equipment-block-cleanup.js` — удаляет equipment-блоки после загрузки.
- `assets/css/price-cleanup.css` — cleanup-override для цен.
- `assets/css/vtr-card-position-fix.css` — поздний positional override.
- `assets/js/photo-pass-0703.js` — крупный DOM-патч: меняет hero, добавляет секции, вставляет inline `<style>`.
- `assets/js/nav-fixed-all.js` + `assets/css/nav-fixed-all.css` — отдельный фикс поверх навигации.

Средний приоритет: `dahab-mobile-final-fix.css`, `dahab-mobile-qa.css`, `dahab-team-reviews-fix.css`, `home-layout-fix.css`, `home-hero-edge-final.css`, `dahab-clean-photos.css`, `dahab-clean-photos.js`, `dahab-team-reviews-fix.js`.

## JS, которые меняют DOM после загрузки

- `assets/js/copy-fixes.js`
- `assets/js/equipment-block-cleanup.js`
- `assets/js/photo-pass-0703.js`
- `assets/js/footer-unified.js`
- `assets/js/nav3-production.js`
- `assets/js/home-redesign.js`
- `assets/js/hero-features-unified.js`
- `assets/js/team-cards.js`
- `assets/js/dahab-wsk-prices.js`
- `assets/js/dahab-price-redesign.js`
- `assets/js/dahab-benefits.js`
- `assets/js/dahab-hero-cta.js`
- `assets/js/dahab-aquatoria.js`
- `assets/js/dahab-atmosphere-cards.js`
- `assets/js/dahab-trust-sliders.js`
- `assets/js/wingfoil-page-photos.js`

Inline style / JS-created CSS найден в `nav3-production.js`, `photo-pass-0703.js`, `dahab-clean-photos.js`, `dahab-team-reviews-fix.js`, `dahab-travel-combined.js`, `home-photos.js`, `wingfoil-page-photos.js`, `nav-fixed-all.js`.

## Старые ссылки на `/equipment/`

Активные ссылки и упоминания найдены в `index.html`, `blog/index.html`, страницах `dahab`, `vietnam`, `russia`, `.htaccess`, `_redirects`, `assets/js/site.js`, `assets/js/equipment-block-cleanup.js`, `assets/js/photo-pass-0703.js`, `assets/js/wingfoil-page-photos.js`.

Редиректы в `_redirects` на `/dahab/equipment/`, `/vietnam/equipment/`, `/russia/equipment/` должны остаться, но ссылки на старые страницы в HTML должны быть убраны.

## WSK / Windsurf Kids в России

В `russia/index.html` явного активного WSK-блока не найдено. Есть защитные CSS-правила в `assets/css/country-dahab-like.css` для скрытия потенциальных `/russia/windsurf-kids/` карточек и редиректы в `_redirects`. Их лучше сохранить до полной проверки генерации карточек.

## `where-to-stay`

- `_redirects` корректно ведёт `/dahab/where-to-stay/` на `/dahab/how-to-get/#hotels`.
- `.htaccess` содержит старый редирект `/dahab/where-to-stay/` на `/dahab/#contact` и требует правки.
- `assets/js/nav3-production.js` уже ведёт `Где жить` на `/dahab/how-to-get/#hotels`.

## Можно безопасно удалить после переноса эффектов

- `assets/js/copy-fixes.js`
- `assets/js/equipment-block-cleanup.js`

Условно безопасно после переноса и проверки: `assets/css/price-cleanup.css`, `assets/css/vtr-card-position-fix.css`.

## Лучше оставить на этом проходе

- Изображения `assets/img/**`.
- `ru/dahab/*` redirect-страницы.
- Старые `equipment/*` redirect/noindex-страницы, если `_redirects` не покрывает локальный fallback.
- `assets/css/nav-fixed-all.css` до полной миграции фиксированной навигации.
- `assets/js/photo-pass-0703.js` до отдельного переноса, потому что он меняет вид нескольких страниц.

## Риски при чистке

- Многие HTML-файлы минифицированы в одну строку.
- Навигация частично строится JS-ом.
- `photo-pass-0703.js` меняет не только фото, но и тексты/секции.
- Массовое удаление `!important` без визуального сравнения может изменить текущий вид.
- Старые equipment-страницы могут быть fallback для прямых заходов.
