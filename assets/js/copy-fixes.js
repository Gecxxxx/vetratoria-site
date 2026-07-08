(() => {
  'use strict';

  const replacements = new Map([
    ['Платишь только за то, что катал', 'Цены по формату и времени на воде'],
    ['Приезжаете, катаетесь и платите только за использованное.', 'Приезжаете, выбираете формат и рассчитываетесь за фактический объём услуг.'],
    ['Катаетесь и платите по факту', 'Формат и расчёт по фактическому объёму'],
  ]);

  const replaceInTextNode = (node) => {
    let value = node.nodeValue;
    let changed = false;

    replacements.forEach((next, prev) => {
      if (value.includes(prev)) {
        value = value.split(prev).join(next);
        changed = true;
      }
    });

    if (changed) node.nodeValue = value;
  };

  const run = () => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        if (['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
        return Array.from(replacements.keys()).some((text) => node.nodeValue.includes(text))
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(replaceInTextNode);
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
  else run();
})();
