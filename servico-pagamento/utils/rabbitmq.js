const amqplib = require('amqplib');

let channel;

async function connect() {
  const connection = await amqplib.connect('amqp://rabbitmq');
  channel = await connection.createChannel();
  await channel.assertQueue('transacoes');
}

async function sendMessage(queue, message) {
  channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));
}

module.exports = { connect, sendMessage };
