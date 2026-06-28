import { THEME_STORAGE_KEY, THEME_ICON_LIGHT, THEME_ICON_DARK, THEME_COLOR_LIGHT, THEME_COLOR_DARK } from '@/data/constants';
import { $, isDark } from '@/utils/dom';

export function toggleTheme(): void {
  document.documentElement.classList.toggle('dark');
  const dark = isDark();
  localStorage.setItem(THEME_STORAGE_KEY, dark ? 'dark' : 'light');
  updateThemeIcons();
}

export function updateThemeIcons(): void {
  const dark = isDark();
  const iconClass = dark ? THEME_ICON_DARK : THEME_ICON_LIGHT;
  const iconColor = dark ? THEME_COLOR_DARK : THEME_COLOR_LIGHT;

  const icon = $<HTMLElement>('#themeIcon');
  if (icon) {
    icon.className = iconClass;
    icon.style.color = iconColor;
  }

  const mobileKnob = $('#themeToggleMobile .knob i');
  if (mobileKnob) {
    mobileKnob.className = iconClass;
    (mobileKnob as HTMLElement).style.color = iconColor;
  }
}

export function restoreTheme(): void {
  if (localStorage.getItem(THEME_STORAGE_KEY) === 'dark') {
    document.documentElement.classList.add('dark');
  }
  updateThemeIcons();
}

export function initTheme(): void {
  restoreTheme();
  $('#themeToggle')?.addEventListener('click', toggleTheme);
  $('#themeToggleMobile')?.addEventListener('click', toggleTheme);
}
