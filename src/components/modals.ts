import { $ } from '@/utils/dom';
import { initAllMasks } from '@/utils/masks';

export function openModal(type: 'login' | 'register', subtype?: string): void {
  if (type === 'login') {
    resetLoginModal();
    $('#modalLogin')?.classList.add('open');
  } else {
    resetRegModal();
    if (subtype) showRegForm(subtype);
    $('#modalRegister')?.classList.add('open');
  }
}

export function closeModal(id: string): void {
  $(`#${id}`)?.classList.remove('open');
}

function showLoginForm(type: string): void {
  const step1 = $('#loginStep1');
  if (step1) step1.style.display = 'none';
  if (type === 'empresa') $('#loginFormEmpresa')?.classList.add('active');
  else $('#loginFormInst')?.classList.add('active');
}

function resetLoginModal(): void {
  const step1 = $('#loginStep1');
  if (step1) step1.style.display = '';
  $('#loginFormEmpresa')?.classList.remove('active');
  $('#loginFormInst')?.classList.remove('active');
}

function showRegForm(type: string): void {
  const step1 = $('#regStep1');
  if (step1) step1.style.display = 'none';
  if (type === 'empresa') $('#regFormEmpresa')?.classList.add('active');
  else if (type === 'instrumentador') $('#regFormInst')?.classList.add('active');
  else $('#regFormEscola')?.classList.add('active');
}

function resetRegModal(): void {
  const step1 = $('#regStep1');
  if (step1) step1.style.display = '';
  $('#regFormEmpresa')?.classList.remove('active');
  $('#regFormInst')?.classList.remove('active');
  $('#regFormEscola')?.classList.remove('active');
}

export function initModals(): void {
  // Login buttons
  $('#btnLogin')?.addEventListener('click', () => openModal('login'));
  $('#loginStep1')?.querySelectorAll('[data-login-type]').forEach(btn => {
    btn.addEventListener('click', () => showLoginForm((btn as HTMLElement).dataset.loginType!));
  });

  // Register buttons
  $('#btnRegister')?.addEventListener('click', () => openModal('register'));
  $('#regStep1')?.querySelectorAll('[data-reg-type]').forEach(btn => {
    btn.addEventListener('click', () => showRegForm((btn as HTMLElement).dataset.regType!));
  });

  // Panel register buttons (hero panels)
  document.querySelectorAll('[data-register]').forEach(btn => {
    btn.addEventListener('click', () => openModal('register', (btn as HTMLElement).dataset.register));
  });

  // Mobile menu action buttons
  document.querySelectorAll('[data-action="login"]').forEach(btn => {
    btn.addEventListener('click', () => openModal('login'));
  });
  document.querySelectorAll('[data-action="register"]').forEach(btn => {
    btn.addEventListener('click', () => openModal('register'));
  });

  // Close buttons
  document.querySelectorAll('[data-close-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      const overlay = (btn as HTMLElement).closest('.modal-overlay');
      overlay?.classList.remove('open');
    });
  });

  // Back buttons
  document.querySelectorAll('[data-back="login"]').forEach(btn => {
    btn.addEventListener('click', resetLoginModal);
  });
  document.querySelectorAll('[data-back="register"]').forEach(btn => {
    btn.addEventListener('click', resetRegModal);
  });

  // Submit buttons
  document.querySelectorAll('[data-submit-login]').forEach(btn => {
    btn.addEventListener('click', () => closeModal('modalLogin'));
  });
  document.querySelectorAll('[data-submit-register]').forEach(btn => {
    btn.addEventListener('click', () => closeModal('modalRegister'));
  });

  // Close on overlay click
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.classList.remove('open');
    });
  });

  initAllMasks();
}
