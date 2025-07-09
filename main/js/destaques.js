const API_BASE = 'http://localhost:3000/api/produtos/destaques';

document.addEventListener('DOMContentLoaded', async () => {
  const track = document.getElementById('carouselTrack');
  if (!track) return;

  try {
    const res = await fetch(API_BASE);
    const destaques = await res.json();

    if (!Array.isArray(destaques)) throw new Error('Resposta inválida da API');

    track.innerHTML = ''; // limpa os cards fixos

    destaques.forEach(produto => {
      const card = document.createElement('div');
      card.classList.add('highlight-card', 'animated-card');
      card.innerHTML = `
        <img src="${produto.img || 'assets/default.jpg'}" alt="${produto.titulo}">
        <div class="card-info">
          <h3>${produto.titulo}</h3>
          <p>${produto.descricao}</p>
          <span class="price">R$${parseFloat(produto.preco).toFixed(2)}</span>
          <a href="${defineLink(produto.tipo)}" class="btn-secondary">Comprar</a>
        </div>
      `;
      track.appendChild(card);
    });
  } catch (err) {
    console.error('Erro ao carregar destaques:', err);
  }
});

function defineLink(tipo) {
  switch (tipo) {
    case 'conta': return 'contas.html';
    case 'giftcard': return 'giftcards.html';
    case 'jogo': return 'jogos.html';
    default: return '#';
  }
}
