import { initTheme } from '@/components/theme';
import { initHeader } from '@/components/header';
import { initModals } from '@/components/modals';
import { buildAllCarousels } from '@/components/carousel';
import { initRouter, navigate } from '@/pages/router';
import { renderNoticiasCards } from '@/pages/noticias';

export function boot(): void {
  initTheme();
  initHeader();
  initModals();
  buildAllCarousels();
  initRouter();
  renderNoticiasCards();
  navigate('home');
}
