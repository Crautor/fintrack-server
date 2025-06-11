import { Router } from 'express';
import * as handler from '../handlers/financialGoalHandler.js';
import validator from '../../middlewares/validator.js';
import financialGoalSchema from '../validators/financialGoalValidator.js';
import verifyJWT from '../../middlewares/verifyJWT.js';

const router = Router();
router.use(verifyJWT);

/* 
  #swagger.tags = ['FinancialGoal']
  #swagger.description = 'Retorna todas as metas financeiras'
  #swagger.security = [{ "bearerAuth": [] }]
*/
router.get('/', handler.findAll);

/* 
  #swagger.tags = ['FinancialGoal']
  #swagger.description = 'Retorna uma meta financeira por ID'
  #swagger.parameters['id'] = {
    in: 'path',
    description: 'ID da meta financeira',
    required: true,
    type: 'integer'
  }
  #swagger.security = [{ "bearerAuth": [] }]
*/
router.get('/:id', handler.findById);

/* 
  #swagger.tags = ['FinancialGoal']
  #swagger.description = 'Cria uma nova meta financeira'
  #swagger.security = [{ "bearerAuth": [] }]
  #swagger.requestBody = {
    required: true,
    content: {
      "application/json": {
        schema: {
          $ref: "#/components/schemas/FinancialGoal"
        }
      }
    }
  }
*/
router.post('/', validator(financialGoalSchema), handler.create);

/* 
  #swagger.tags = ['FinancialGoal']
  #swagger.description = 'Atualiza uma meta financeira'
  #swagger.parameters['id'] = {
    in: 'path',
    description: 'ID da meta financeira',
    required: true,
    type: 'integer'
  }
  #swagger.security = [{ "bearerAuth": [] }]
  #swagger.requestBody = {
    required: true,
    content: {
      "application/json": {
        schema: {
          $ref: "#/components/schemas/FinancialGoal"
        }
      }
    }
  }
*/
router.put('/:id', validator(financialGoalSchema), handler.update);

/* 
  #swagger.tags = ['FinancialGoal']
  #swagger.description = 'Remove uma meta financeira'
  #swagger.parameters['id'] = {
    in: 'path',
    description: 'ID da meta financeira',
    required: true,
    type: 'integer'
  }
  #swagger.security = [{ "bearerAuth": [] }]
*/
router.delete('/:id', handler.remove);

export default router;
