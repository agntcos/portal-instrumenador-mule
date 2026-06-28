import { INST_CARDS, EMP_CARDS } from '@/data/cards';
import { renderStars } from '@/utils/dom';

export function renderNoticiasCards(): void {
  const instContainer = document.getElementById('cardsInst');
  const empContainer = document.getElementById('cardsEmp');

  if (instContainer) {
    instContainer.innerHTML = INST_CARDS.map(c => `
      <div class="rating-card">
        <div class="card-header-row">
          <div class="card-avatar">${c.initials}</div>
          <div>
            <div class="card-name">${c.name}</div>
            <div class="card-service">${c.service}</div>
          </div>
        </div>
        <div class="card-comment">"${c.comment}"</div>
        <div class="card-stars">${renderStars(c.stars)}</div>
      </div>
    `).join('');
  }

  if (empContainer) {
    empContainer.innerHTML = EMP_CARDS.map(c => `
      <div class="rating-card">
        <div class="card-header-row">
          <div class="card-avatar company">${c.initials}</div>
          <div>
            <div class="card-name">${c.name}</div>
            <div class="card-service">${c.service}</div>
          </div>
        </div>
        <div class="card-comment">"${c.comment}"</div>
        <div class="card-stars">${renderStars(c.stars)}</div>
      </div>
    `).join('');
  }
}
