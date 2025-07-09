import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import produtosRoutes from './routes/produtos.js';

dotenv.config();

const app = express(); // <--- DEVE vir antes de usar o `app`

app.use(cors({
  origin: 'http://localhost', // libera pro Apache (WAMP)
  methods: ['GET', 'POST'],
  credentials: false
}));

app.use(express.json());

// Rotas da API
app.use('/api/auth', authRoutes);
app.use('/api/produtos', produtosRoutes); // <--- agora na ordem certa

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🔥 Servidor rodando em http://localhost:${PORT}`);
});
// Exporta o app para testes