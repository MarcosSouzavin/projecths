import { getItem } from './storage.js';

export function updateNavbar() {
  const user = getItem('user');
  const navCadastro = document.getElementById('cadastroProdutoNav');
  const loginLink = document.getElementById('loginLink');

  if (user) {
    if (navCadastro) navCadastro.classList.remove('hidden');
    if (loginLink) loginLink.textContent = `Olá, ${user.nome}`;
  } else {
    if (navCadastro) navCadastro.classList.add('hidden');
    if (loginLink) loginLink.textContent = 'Login';
  }
}
