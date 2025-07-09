import { login, register } from './auth.js';
import { updateNavbar } from './nav.js';

document.addEventListener('DOMContentLoaded', () => {
  updateNavbar();

  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value;
      const senha = document.getElementById('loginPassword').value;

      try {
        await login(email, senha);
        alert('Login feito com sucesso!');
        window.location.href = 'index.html';
      } catch (err) {
        alert(err.message);
      }
    });
  }

  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const nome = document.getElementById('registerName').value;
      const email = document.getElementById('registerEmail').value;
      const senha = document.getElementById('registerPassword').value;
      const isTrader = document.getElementById('isTrader').checked;

      try {
        await register(nome, email, senha, isTrader);
        alert('Cadastro feito! Agora faça login.');
        document.getElementById('showLogin').click();
      } catch (err) {
        alert(err.message);
      }
    });
  }
});
