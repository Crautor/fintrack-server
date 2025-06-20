import { Router } from 'express';
import * as handler from '../handlers/transactionHandler.js';
import validator from '../../middlewares/validator.js';
import transactionSchema from '../validators/transactionValidator.js';

const router = Router();

/* 
  #swagger.tags = ['Transaction']
  #swagger.description = 'Retorna todas as transações'
  #swagger.security = [{ "bearerAuth": [] }]
*/
router.get('/', handler.findAll);

/* 
  #swagger.tags = ['Transaction']
  #swagger.description = 'Retorna uma transação por ID'
  #swagger.parameters['id'] = {
    in: 'path',
    description: 'ID da transação',
    required: true,
    type: 'integer'
  }
  #swagger.security = [{ "bearerAuth": [] }]
*/
router.get('/:id', handler.findById);

/* 
  #swagger.tags = ['Transaction']
  #swagger.description = 'Cria uma nova transação'
  #swagger.security = [{ "bearerAuth": [] }]
  #swagger.requestBody = {
    required: true,
    content: {
      "application/json": {
        schema: { $ref: "#/components/schemas/Transaction" }
      }
    }
  }
*/
router.post('/', validator(transactionSchema), handler.create);

/* 
  #swagger.tags = ['Transaction']
  #swagger.description = 'Atualiza uma transação'
  #swagger.parameters['id'] = {
    in: 'path',
    description: 'ID da transação',
    required: true,
    type: 'integer'
  }
  #swagger.security = [{ "bearerAuth": [] }]
  #swagger.requestBody = {
    required: true,
    content: {
      "application/json": {
        schema: { $ref: "#/components/schemas/Transaction" }
      }
    }
  }
*/
router.put('/:id', validator(transactionSchema), handler.update);

/* 
  #swagger.tags = ['Transaction']
  #swagger.description = 'Remove uma transação'
  #swagger.parameters['id'] = {
    in: 'path',
    description: 'ID da transação',
    required: true,
    type: 'integer'
  }
  #swagger.security = [{ "bearerAuth": [] }]
*/
router.delete('/:id', handler.remove);

/* 
  #swagger.tags = ['Transaction']
  #swagger.description = 'Retorna todas as transações de uma categoria'
  #swagger.parameters['categoryId'] = {
    in: 'query',
    description: 'ID da categoria',
    required: true,
    type: 'integer'
  }
  #swagger.parameters['email'] = {
    in: 'query',
    description: 'E-mail do usuário',
    required: true,
    type: 'string'
  }
  #swagger.security = [{ "bearerAuth": [] }]
*/
router.get('/find/category/', handler.getByCategory);

/* 
  #swagger.tags = ['Transaction']
  #swagger.description = 'Retorna todas as transações de uma data específica'
  #swagger.parameters['transactionDate'] = {
    in: 'query',
    description: 'Data da transação (YYYY-MM-DD)',
    required: true,
    type: 'string'
  }
  #swagger.parameters['email'] = {
    in: 'query',
    description: 'E-mail do usuário',
    required: true,
    type: 'string'
  }
  #swagger.security = [{ "bearerAuth": [] }]
*/
router.get('/find/date', handler.getByTransactionDate);

/*
  #swagger.tags = ['Transaction']
  #swagger.description = 'Retorna todas as transações em um período específico'
  #swagger.parameters['startDate'] = {
    in: 'query',
    description: 'Data de início do período (YYYY-MM-DD)',
    required: true,
    type: 'string'
  }
  #swagger.parameters['endDate'] = {
    in: 'query',
    description: 'Data de fim do período (YYYY-MM-DD)',
    required: true,
    type: 'string'
  }
  #swagger.parameters['email'] = {
    in: 'query',
    description: 'E-mail do usuário',
    required: true,
    type: 'string'
  }
  #swagger.security = [{ "bearerAuth": [] }]
*/
router.get('/find/period', handler.getByPeriod);

/* 
  #swagger.tags = ['Transaction']
  #swagger.description = 'Retorna o total de income e expense das transações de uma categoria'
  #swagger.security = [{ "bearerAuth": [] }]
  #swagger.parameters['email'] = {
    in: 'query',
    description: 'Email do usuário',
    required: true,
    type: 'string'
  }
  #swagger.parameters['categoryId'] = {
    in: 'query',
    description: 'ID da categoria',
    required: true,
    type: 'string'
  }
*/
router.get('/total/category', handler.getTotalByCategory);

/* 
  #swagger.tags = ['Transaction']
  #swagger.description = 'Retorna o total de income e expense de todas as transações do usuário'
  #swagger.security = [{ "bearerAuth": [] }]
  #swagger.parameters['email'] = {
    in: 'query',
    description: 'Email do usuário',
    required: true,
    type: 'string'
  }
*/
router.get('/total/user', handler.getTotalByUser);

export default router;
