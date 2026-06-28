import { $, $$ } from '@/utils/dom';
import { SCROLL_THRESHOLD, type NavPage } from '@/data/constants';

export function initHeader(): void {
  const header = $<HTMLElement>('#siteHeader');
  const hamburger = $('#hamburger');
  const mobileMenu = $('#mobileMenu');

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (!header) return;
    if (window.scrollY > SCROLL_THRESHOLD) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Hamburger toggle
  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu?.classList.toggle('open');
  });

  // Close mobile menu on nav click
  $$<HTMLElement>('[data-mobile]').forEach(link => {
    link.addEventListener('click', () => {
      hamburger?.classList.remove('active');
      mobileMenu?.classList.remove('open');
    });
  });
}

export function setActiveNav(page: NavPage): void {
  $$('.nav-link').forEach(l => l.classList.remove('active'));
  $$<HTMLElement>(`.nav-link[data-page="${page}"]`).forEach(l => l.classList.add('active'));
}
