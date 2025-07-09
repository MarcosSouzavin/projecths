import express from 'express';
import bcrypt from 'bcrypt';
import { pool } from '../db.js';

const router = express.Router();

// Registro, Não use em produção sem validação e sanitização adequadas
// Adicione validação de entrada e sanitização para evitar SQL Injection e XSS 👍👍
router.post('/register', async (req, res) => {
  const { nome, email, senha, isTrader } = req.body;
  try {
    const hash = await bcrypt.hash(senha, 10);
    await pool.query(
      'INSERT INTO usuarios (nome, email, senha_hash, is_trader) VALUES (?, ?, ?, ?)',
      [nome, email, hash, isTrader ? 1 : 0]
    );
    res.json({ msg: 'Usuário criado com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao cadastrar', details: err });
  }
});

// Login, não use em produção sem validação e sanitização adequadas
// Adicione validação de entrada e sanitização para evitar SQL Injection e XSS 👍👍
router.post('/login', async (req, res) => {
  const { email, senha } = req.body;
  try {
    const [rows] = await pool.query('SELECT * FROM usuarios WHERE email = ?', [email]);
    if (rows.length === 0) return res.status(404).json({ msg: 'Usuário não encontrado' });

    const usuario = rows[0];
    const valido = await bcrypt.compare(senha, usuario.senha_hash);
    if (!valido) return res.status(401).json({ msg: 'Senha incorreta' });

    res.json({
      msg: 'Login bem-sucedido',
      usuario: {
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email,
        is_trader: !!usuario.is_trader,
      }
    });
  } catch (err) {
    res.status(500).json({ erro: 'Erro no login', details: err });
  }
});

export default router;
