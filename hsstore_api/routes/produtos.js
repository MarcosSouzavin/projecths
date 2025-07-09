import express from 'express';
import { query } from '../db.js';

const router = express.Router();

// DESTACADOS
router.get('/destaques', async (req, res) => {
  try {
    const destaques = await query(`
      SELECT id, titulo, descricao, preco, tipo, img
      FROM produtos
      WHERE destaque = 1
      ORDER BY criado_em DESC
      LIMIT 10
    `);
    res.json(destaques);
  } catch (err) {
    console.error('Erro ao buscar destaques:', err);
    res.status(500).json({ erro: 'Erro interno ao buscar destaques' });
  }
});

// LISTA TODOS
router.get('/', async (req, res) => {
  try {
    const produtos = await query(`SELECT * FROM produtos ORDER BY criado_em DESC`);
    res.json(produtos);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao listar produtos' });
  }
});

router.post('/', async (req, res) => {
  const { titulo, descricao, preco, tipo, img, destaque } = req.body;

  console.log('[RECEBIDO]', req.body); // 👈 loga a entrada

  if (!titulo || !preco || !tipo) {
    return res.status(400).json({ erro: 'Campos obrigatórios faltando' });
  }

  try {
    await query(`
      INSERT INTO produtos (titulo, descricao, preco, tipo, img, destaque)
      VALUES (?, ?, ?, ?, ?, ?)
    `, [titulo, descricao, preco, tipo, img, destaque ? 1 : 0]);

    res.status(201).json({ msg: 'Produto cadastrado com sucesso' });
  } catch (err) {
    console.error('[ERRO INSERT]', err); // 👈 loga o erro real
    res.status(500).json({ erro: 'Erro ao cadastrar produto', detalhes: err });
  }
});

export default router;
