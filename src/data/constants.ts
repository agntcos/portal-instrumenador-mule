export const APP_NAME = 'Portal do Instrumentador';
export const WHATSAPP_NUMBER = '5511999999999';
export const THEME_STORAGE_KEY = 'theme';
export const SCROLL_THRESHOLD = 20;

export const NAV_PAGES = ['home', 'empresas', 'instrumentadores', 'cursos', 'noticias'] as const;
export type NavPage = (typeof NAV_PAGES)[number];

export const THEME_ICON_LIGHT = 'fas fa-sun';
export const THEME_ICON_DARK = 'fas fa-moon';
export const THEME_COLOR_LIGHT = '#F59E0B';
export const THEME_COLOR_DARK = '#93C5FD';
