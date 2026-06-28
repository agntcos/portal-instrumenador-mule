const animatedPages = new Set<string>();

export function animateCountersForPage(page: string): void {
  if (animatedPages.has(page)) return;
  animatedPages.add(page);

  const pageEl = document.getElementById(`page-${page}`);
  if (!pageEl) return;

  pageEl.querySelectorAll<HTMLElement>('.stat-number[data-count]').forEach(el => {
    const target = Number(el.dataset.count);
    const suffix = el.dataset.suffix || '+';
    let current = 0;
    const step = Math.max(1, Math.floor(target / 60));

    const interval = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current.toLocaleString('pt-BR') + (current >= target ? suffix : '');
      if (current >= target) clearInterval(interval);
    }, 25);
  });
}

export function resetCounterCache(): void {
  animatedPages.clear();
}
