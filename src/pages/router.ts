import { $$ } from '@/utils/dom';
import { setActiveNav } from '@/components/header';
import { animateCountersForPage } from '@/utils/counters';
import type { NavPage } from '@/data/constants';

export function navigate(page: NavPage): void {
  // Hide all pages
  $$('.page').forEach(p => p.classList.remove('active'));

  // Show target page
  const target = document.getElementById(`page-${page}`);
  if (target) target.classList.add('active');

  // Update nav
  setActiveNav(page);

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Animate counters
  setTimeout(() => animateCountersForPage(page), 400);
}

export function initRouter(): void {
  $$<HTMLElement>('[data-nav]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      navigate(el.dataset.nav as NavPage);
    });
  });

  $$<HTMLElement>('.nav-link[data-page]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navigate(link.dataset.page as NavPage);
    });
  });
}
