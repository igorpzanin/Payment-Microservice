const express = require('express');
const rabbitMQ = require('./utils/rabbitmq');
const notificacaoController = require('./controllers/notificacaoController');

const app = express();
app.use(express.json());

rabbitMQ.listenToQueue('transacoes', notificacaoController.notificarUsuario);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Serviço de Notificação rodando na porta ${PORT}`);
});
