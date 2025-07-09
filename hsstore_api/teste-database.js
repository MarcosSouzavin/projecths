import { pool } from './db.js';

const testarDB = async () => {
  try {
    const [rows] = await pool.query('SELECT 1');
    console.log('✅ Banco conectado:', rows);
  } catch (err) {
    console.error('❌ Erro ao conectar no banco:', err);
  }
};

testarDB();
// para teste a gente pode usar o comando:
// node teste-database.js no terminal
// ou se estiver no VS Code, pode usar o terminal integrado