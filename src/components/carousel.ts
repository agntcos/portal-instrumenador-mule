import { CAROUSELS, type CarouselConfig } from '@/data/carousels';

const activeIntervals: Record<string, ReturnType<typeof setInterval>> = {};

export function buildCarousel(key: string): void {
  const data: CarouselConfig | undefined = CAROUSELS[key];
  const container = document.querySelector<HTMLElement>(`[data-carousel="${key}"]`);
  const textBox = document.querySelector<HTMLElement>(`[data-hero-text="${key}"]`);
  if (!container || !textBox || !data) return;

  container.innerHTML = '';
  textBox.innerHTML = '';

  data.slides.forEach((slide, i) => {
    const div = document.createElement('div');
    div.className = 'carousel-slide' + (i === 0 ? ' active' : '');
    div.style.backgroundImage = `url('${slide.bg}')`;
    container.appendChild(div);

    const textEl = document.createElement('div');
    textEl.className = 'hero-slide-text' + (i === 0 ? ' active' : '');
    textEl.innerHTML = `<h1 class="hero-tagline">${slide.tagline}</h1><p class="hero-desc">${slide.desc}</p>`;
    textBox.appendChild(textEl);
  });

  let idx = 0;
  if (activeIntervals[key]) clearInterval(activeIntervals[key]);
  activeIntervals[key] = setInterval(() => {
    const slides = container.querySelectorAll('.carousel-slide');
    const texts = textBox.querySelectorAll('.hero-slide-text');
    slides[idx].classList.remove('active');
    texts[idx].classList.remove('active');
    idx = (idx + 1) % slides.length;
    slides[idx].classList.add('active');
    texts[idx].classList.add('active');
  }, data.duration);
}

export function buildAllCarousels(): void {
  Object.keys(CAROUSELS).forEach(buildCarousel);
}
