const searchInput = document.querySelector('[data-search]');
const guideCards = Array.from(document.querySelectorAll('[data-guide-card]'));
const categoryBlocks = Array.from(document.querySelectorAll('[data-category-block]'));
const emptyState = document.querySelector('[data-empty-state]');

function normalize(text) {
  return (text || '').toLowerCase().trim();
}

function applySearch(value) {
  const keyword = normalize(value);
  let visibleCount = 0;

  guideCards.forEach((card) => {
    const haystack = normalize(card.dataset.searchText || card.textContent);
    const isVisible = !keyword || haystack.includes(keyword);
    card.style.display = isVisible ? '' : 'none';
    if (isVisible) visibleCount += 1;
  });

  categoryBlocks.forEach((block) => {
    const visibleCards = Array.from(block.querySelectorAll('[data-guide-card]'))
      .filter((card) => card.style.display !== 'none');
    block.style.display = visibleCards.length ? '' : 'none';
  });

  if (emptyState) {
    emptyState.style.display = visibleCount ? 'none' : 'block';
  }
}

if (searchInput) {
  searchInput.addEventListener('input', (event) => applySearch(event.target.value));
}

document.querySelectorAll('[data-copy]').forEach((button) => {
  button.addEventListener('click', async () => {
    const targetSelector = button.getAttribute('data-copy');
    const target = document.querySelector(targetSelector);
    const text = target?.textContent?.trim();

    if (!text) return;

    try {
      await navigator.clipboard.writeText(text);
      const original = button.textContent;
      button.textContent = '已复制';
      setTimeout(() => {
        button.textContent = original;
      }, 1400);
    } catch (error) {
      button.textContent = '复制失败';
    }
  });
});
