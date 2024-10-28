const db = require('../config/db');

const criarTransacao = async (usuarioId, valor) => {
  const result = await db.query(
    `INSERT INTO transacoes (usuario_id, valor, status) VALUES ($1, $2, 'pendente') RETURNING *`,
    [usuarioId, valor]
  );
  return result.rows[0];
};

const atualizarStatusTransacao = async (transacaoId, status) => {
  const result = await db.query(
    `UPDATE transacoes SET status = $1 WHERE id = $2 RETURNING *`,
    [status, transacaoId]
  );
  return result.rows[0];
};

module.exports = {
  criarTransacao,
  atualizarStatusTransacao,
};
