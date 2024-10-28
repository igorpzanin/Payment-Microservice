const db = require('../config/db');
const rabbitMQ = require('../utils/rabbitmq');

exports.criarTransacao = async (req, res) => {
  try {
    const { valor, usuarioId } = req.body;
    const novaTransacao = await db.query(
      `INSERT INTO transacoes (usuario_id, valor, status) VALUES ($1, $2, 'pendente') RETURNING *`,
      [usuarioId, valor]
    );

    rabbitMQ.sendMessage('transacoes', { id: novaTransacao.id, status: 'pendente' });
    res.status(201).json(novaTransacao);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao processar transação' });
  }
};
