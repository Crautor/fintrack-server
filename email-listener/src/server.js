require('dotenv').config();
const servicoEmail = require('./infrastructure/services/email.service');

const iniciarServidor = async () => {
  try {
    await servicoEmail.iniciar();

    console.log(`[Info] Serviço de email iniciado com sucesso escutando a queue 'email_queue' `);
  } catch (erro) {
    console.error('[Falha] Erro ao iniciar o servidor:', erro);
    process.exit(1);
  }
};

iniciarServidor();
