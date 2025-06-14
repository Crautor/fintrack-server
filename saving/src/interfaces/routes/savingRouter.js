import { Router } from 'express';
import * as handler from '../handlers/savingHandler.js';
import validator from '../../middlewares/validator.js';
import savingSchema from '../validators/savingValidator.js';

const router = Router();
/* 
  #swagger.tags = ['Saving']
  #swagger.description = 'Retorna todas as poupanças'
  #swagger.security = [{ "bearerAuth": [] }]
*/
router.get('/', handler.findAll);

/* 
  #swagger.tags = ['Saving']
  #swagger.description = 'Retorna uma poupança por ID'
  #swagger.parameters['id'] = {
    in: 'path',
    description: 'ID da poupança',
    required: true,
    type: 'integer'
  }
  #swagger.security = [{ "bearerAuth": [] }]
*/
router.get('/:id', handler.findById);

/* 
  #swagger.tags = ['Saving']
  #swagger.description = 'Cria uma nova poupança'
  #swagger.security = [{ "bearerAuth": [] }]
  #swagger.requestBody = {
    required: true,
    content: {
      "application/json": {
        schema: {
          $ref: "#/components/schemas/Saving"
        }
      }
    }
  }
*/
router.post('/', validator(savingSchema), handler.create);

/* 
  #swagger.tags = ['Saving']
  #swagger.description = 'Atualiza uma poupança'
  #swagger.parameters['id'] = {
    in: 'path',
    description: 'ID da poupança',
    required: true,
    type: 'integer'
  }
  #swagger.security = [{ "bearerAuth": [] }]
  #swagger.requestBody = {
    required: true,
    content: {
      "application/json": {
        schema: {
          $ref: "#/components/schemas/Saving"
        }
      }
    }
  }
*/
router.put('/:id', validator(savingSchema), handler.update);

/* 
  #swagger.tags = ['Saving']
  #swagger.description = 'Remove uma poupança'
  #swagger.parameters['id'] = {
    in: 'path',
    description: 'ID da poupança',
    required: true,
    type: 'integer'
  }
  #swagger.security = [{ "bearerAuth": [] }]
*/
router.delete('/:id', handler.remove);

router.get('/find/goal', handler.findByFinancialGoal);

export default router;
