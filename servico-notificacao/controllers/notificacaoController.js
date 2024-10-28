exports.notificarUsuario = (message) => {
    const { id, status } = JSON.parse(message.content.toString());
    
    console.log(`Notificação: Transação ${id} está com status ${status}`);
    // Aqui, você pode implementar o envio de e-mail, SMS, etc.
  };
  