const express = require('express');
const db = require('./config/db');
const rabbitMQ = require('./utils/rabbitmq');
const pagamentoController = require('./controllers/pagamentoController');

const app = express();
app.use(express.json());

app.post('/pagamento', pagamentoController.criarTransacao);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Serviço de Pagamento rodando na porta ${PORT}`);
});
