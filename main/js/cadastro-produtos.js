const API = 'http://localhost:3000/api/produtos';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('cadastroProdutoForm');
  const msg = document.getElementById('cadastroProdutoMsg');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const tipo = document.getElementById('tipoProduto').value;
    const plataforma = document.getElementById('plataformaProduto').value;
    const titulo = document.getElementById('tituloProduto').value;
    const descricao = document.getElementById('descricaoProduto').value;
    const preco = parseFloat(document.getElementById('precoProduto').value);
    const img = document.getElementById('imagemProduto').value;

    if (!tipo || !plataforma || !titulo || !descricao || !preco) {
      msg.textContent = 'Preencha todos os campos obrigatórios.';
      msg.className = 'erro';
      return;
    }

    try {
      const res = await fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tipo,
          titulo: `[${plataforma.toUpperCase()}] ${titulo}`,
          descricao,
          preco,
          img,
          destaque: false
        })
      });

      const data = await res.json();

      if (res.ok) {
        msg.textContent = 'Produto cadastrado com sucesso!';
        msg.className = 'sucesso';
        form.reset();
      } else {
        msg.textContent = data.erro || 'Erro ao cadastrar.';
        msg.className = 'erro';
      }
    } catch (err) {
      msg.textContent = 'Erro de conexão com o servidor.';
      msg.className = 'erro';
    }

    msg.classList.remove('hidden');
  });
});
