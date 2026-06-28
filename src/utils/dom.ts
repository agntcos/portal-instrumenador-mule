export function $<T extends HTMLElement>(selector: string): T | null {
  return document.querySelector<T>(selector);
}

export function $$<T extends HTMLElement>(selector: string): T[] {
  return Array.from(document.querySelectorAll<T>(selector));
}

export function renderStars(n: number): string {
  return Array.from({ length: 5 }, (_, i) => `<i class="fas fa-star${i < n ? '' : 'h'}"></i>`).join('');
}

export function isDark(): boolean {
  return document.documentElement.classList.contains('dark');
}
