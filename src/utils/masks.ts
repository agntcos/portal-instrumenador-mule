export function applyCNPJMask(value: string): string {
  let v = value.replace(/\D/g, '').slice(0, 14);
  v = v.replace(/^(\d{2})(\d)/, '$1.$2');
  v = v.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
  v = v.replace(/\.(\d{3})(\d)/, '.$1/$2');
  v = v.replace(/(\d{4})(\d)/, '$1-$2');
  return v;
}

export function applyCPFMask(value: string): string {
  let v = value.replace(/\D/g, '').slice(0, 11);
  v = v.replace(/(\d{3})(\d)/, '$1.$2');
  v = v.replace(/(\d{3})(\d)/, '$1.$2');
  v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  return v;
}

export function attachMask(input: HTMLInputElement, type: 'cpf' | 'cnpj'): void {
  const maskFn = type === 'cnpj' ? applyCNPJMask : applyCPFMask;
  input.addEventListener('input', (e) => {
    (e.target as HTMLInputElement).value = maskFn((e.target as HTMLInputElement).value);
  });
}

export function initAllMasks(): void {
  document.querySelectorAll<HTMLInputElement>('[data-mask="cnpj"]').forEach(el => attachMask(el, 'cnpj'));
  document.querySelectorAll<HTMLInputElement>('[data-mask="cpf"]').forEach(el => attachMask(el, 'cpf'));
}
