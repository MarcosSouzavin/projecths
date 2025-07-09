const API = 'http://localhost:3000/api/produtos?tipo=conta';

document.addEventListener('DOMContentLoaded', () => {
  const listagem = document.getElementById('contasListagem');
  const filtroForm = document.getElementById('filtroContas');

  let contasOriginais = [];

  async function carregarContas() {
    try {
      const res = await fetch(API);
      const contas = await res.json();

      contasOriginais = contas;
      renderizarContas(contas);
    } catch (err) {
      listagem.innerHTML = '<p>Erro ao carregar contas</p>';
      console.error(err);
    }
  }

  function renderizarContas(lista) {
    listagem.innerHTML = '';

    if (lista.length === 0) {
      listagem.innerHTML = '<p>Nenhuma conta encontrada.</p>';
      return;
    }

    lista.forEach(conta => {
      const card = document.createElement('div');
      card.classList.add('produto-card');
      card.innerHTML = `
        <img src="${conta.img || 'assets/default.jpg'}" alt="${conta.titulo}">
        <h3>${conta.titulo}</h3>
        <p>${conta.descricao || ''}</p>
        <strong>R$ ${parseFloat(conta.preco).toFixed(2)}</strong>
        <button>Comprar</button>
      `;
      listagem.appendChild(card);
    });
  }

  filtroForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const plataforma = document.getElementById('plataforma').value;
    const preco = document.getElementById('preco').value;
    const jogo = document.getElementById('jogo').value.toLowerCase();

    let filtrado = contasOriginais;

    if (plataforma) {
      filtrado = filtrado.filter(p => p.titulo.toLowerCase().includes(plataforma));
    }

    if (preco) {
      filtrado = filtrado.filter(p => {
        const valor = parseFloat(p.preco);
        if (preco === '0-50') return valor <= 50;
        if (preco === '51-150') return valor > 50 && valor <= 150;
        if (preco === '151-300') return valor > 150 && valor <= 300;
        if (preco === '301+') return valor > 300;
        return true;
      });
    }

    if (jogo) {
      filtrado = filtrado.filter(p =>
        p.titulo.toLowerCase().includes(jogo) ||
        (p.descricao && p.descricao.toLowerCase().includes(jogo))
      );
    }

    renderizarContas(filtrado);
  });

  carregarContas();
});
