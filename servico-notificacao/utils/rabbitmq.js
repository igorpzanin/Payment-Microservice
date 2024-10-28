const amqplib = require('amqplib');

async function connect() {
  const connection = await amqplib.connect('amqp://rabbitmq');
  const channel = await connection.createChannel();
  await channel.assertQueue('transacoes');

  return channel;
}

async function listenToQueue(queue, callback) {
  const channel = await connect();
  channel.consume(queue, callback, { noAck: true });
}

module.exports = { listenToQueue };
