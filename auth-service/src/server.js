require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');

const rotasAutenticacao = require('./presentation/routes/auth.routes');
const { syncDatabase } = require('./infrastructure/config/database.config');
const servicoEmail = require('./infrastructure/services/email.service');
const servicoEventos = require('./infrastructure/services/event.service');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const path = require('path');

const swaggerPath = path.join(__dirname, './config/swagger.json');
const swaggerDocument = JSON.parse(fs.readFileSync(swaggerPath, 'utf8'));

const app = express();
const porta = process.env.PORT || 3004;

app.use(helmet());
app.use(
  cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3004',
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
  res.json({ mensagem: 'API de autenticação ativa!' });
});

app.use('/api/auth', rotasAutenticacao);

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const iniciarServidor = async () => {
  try {
    await syncDatabase();
    await servicoEmail.iniciar();

    console.log('[Sistema] Eventos de domínio disponíveis:');
    Object.values(servicoEventos.filas || {}).forEach((ev) => console.log(`- ${ev}`));

    app.listen(porta, '0.0.0.0', () => {
      console.log('[DEBUG] JWT_SECRET:', process.env.JWT_SECRET);
      console.log(`Servidor disponível em http://localhost:${porta}`);
      console.log('Rotas principais:');
      console.log('- POST /api/auth/cadastro');
      console.log('- POST /api/auth/login');
      console.log('- POST /api/auth/token');
      console.log('- POST /api/auth/logout');
      console.log('- POST /api/auth/senha/solicitar');
      console.log('- POST /api/auth/senha/redefinir');
    });
  } catch (erro) {
    console.error('[Falha] Erro ao iniciar o servidor:', erro);
    process.exit(1);
  }
};

iniciarServidor();
