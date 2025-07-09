import { MOCK_CONTAS } from './produtos.js';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('lista-contas');
  MOCK_CONTAS.forEach(conta => {
    const card = document.createElement('div');
    card.classList.add('produto-card');
    card.innerHTML = `
      <img src="${conta.img}" alt="${conta.titulo}">
      <h3>${conta.titulo}</h3>
      <p>${conta.descricao}</p>
      <strong>R$ ${conta.preco}</strong>
      <button>Comprar</button>
    `;
    container.appendChild(card);
  });
});
