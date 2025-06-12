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

export default router;
