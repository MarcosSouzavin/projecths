import { setItem, getItem } from './storage.js';

const API_BASE = 'http://localhost:3000/api/auth';

export async function login(email, senha) {
  const res = await fetch(`${API_BASE}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, senha })
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.msg || 'Erro ao fazer login');

  setItem('user', data.usuario);
  return data.usuario;
}

export async function register(nome, email, senha, isTrader) {
  const res = await fetch(`${API_BASE}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, email, senha, isTrader })
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.msg || 'Erro ao cadastrar');
  return data;
}

export function logout() {
  localStorage.removeItem('user');
}
