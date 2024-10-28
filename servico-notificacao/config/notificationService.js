const sendNotification = (userId, message) => {
    // Aqui, você poderia integrar um serviço de e-mail/SMS, como Nodemailer ou Twilio
    console.log(`Notificando usuário ${userId}: ${message}`);
  };
  
  module.exports = {
    sendNotification,
  };
  