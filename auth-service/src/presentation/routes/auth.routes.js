const express = require('express');
const rotas = express.Router();

const controlador = require('../controllers/auth.controller');
const MiddlewareAutenticacao = require('../../infrastructure/middlewares/auth.middleware');

/* 
  #swagger.tags = ['Auth']
  #swagger.description = 'Cadastra um novo usuário'
  #swagger.requestBody = {
    required: true,
    content: {
      "application/json": {
        schema: { $ref: "#/components/schemas/User" }
      }
    }
  }
*/
rotas.post('/cadastro', controlador.cadastrar);

/* 
  #swagger.tags = ['Auth']
  #swagger.description = 'Autentica um usuário e retorna um token'
  #swagger.requestBody = {
    required: true,
    content: {
      "application/json": {
        schema: {
          type: 'object',
          required: ['email', 'password'],
          properties: {
            email: { type: 'string', format: 'email' },
            password: { type: 'string' }
          }
        }
      }
    }
  }
*/
rotas.post('/login', controlador.entrar);

/* 
  #swagger.tags = ['Auth']
  #swagger.description = 'Atualiza o token JWT do usuário'
  #swagger.requestBody = {
    required: true,
    content: {
      "application/json": {
        schema: {
          type: 'object',
          required: ['refreshToken'],
          properties: {
            refreshToken: { type: 'string' }
          }
        }
      }
    }
  }
*/
rotas.post('/token', controlador.atualizarToken);

/* 
  #swagger.tags = ['Auth']
  #swagger.description = 'Solicita código de recuperação de senha'
  #swagger.requestBody = {
    required: true,
    content: {
      "application/json": {
        schema: {
          type: 'object',
          required: ['email'],
          properties: {
            email: { type: 'string', format: 'email' }
          }
        }
      }
    }
  }
*/
rotas.post('/senha/solicitar', controlador.solicitarCodigoRecuperacao);

/* 
  #swagger.tags = ['Auth']
  #swagger.description = 'Redefine a senha usando código de recuperação'
  #swagger.requestBody = {
    required: true,
    content: {
      "application/json": {
        schema: {
          type: 'object',
          required: ['email', 'codigo', 'novaSenha'],
          properties: {
            email: { type: 'string', format: 'email' },
            codigo: { type: 'string' },
            novaSenha: { type: 'string' }
          }
        }
      }
    }
  }
*/
rotas.post('/senha/redefinir', controlador.redefinirSenha);

/* 
  #swagger.tags = ['Auth']
  #swagger.description = 'Retorna um usuário por email'
  #swagger.security = [{ "bearerAuth": [] }]
  #swagger.parameters['email'] = {
    in: 'path',
    description: 'Email do usuário',
    required: true,
    type: 'string'
  }
*/
rotas.get('/usuario/:email', MiddlewareAutenticacao.verificarToken, controlador.buscarPorEmail);

/* 
  #swagger.tags = ['Auth']
  #swagger.description = 'Retorna todos os usuários'
  #swagger.security = [{ "bearerAuth": [] }]
*/
rotas.get('/usuario', MiddlewareAutenticacao.verificarToken, controlador.buscarTodosUsuarios);

/* 
  #swagger.tags = ['Auth']
  #swagger.description = 'Valida o código de recuperação de senha'
  #swagger.requestBody = {
    required: true,
    content: {
      "application/json": {
        schema: {
          type: 'object',
          required: ['email', 'codigo'],
          properties: {
            email: { type: 'string', format: 'email' },
            codigo: { type: 'string' }
          }
        }
      }
    }
  }
*/
rotas.post('/usuario/validar', controlador.validarCodigo);

/* 
  #swagger.tags = ['Auth']
  #swagger.description = 'Realiza logout do usuário'
  #swagger.security = [{ "bearerAuth": [] }]
*/
rotas.post('/logout', MiddlewareAutenticacao.verificarToken, controlador.sair);

module.exports = rotas;
