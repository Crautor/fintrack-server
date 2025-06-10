import { Router } from 'express';
import * as handler from '../handlers/paymentMethodHandler.js';
import validator from '../../middlewares/validator.js';
import paymentMethodSchema from '../validators/paymentMethodValidator.js';
import verifyJWT from '../../middlewares/verifyJWT.js';

const router = Router();
router.use(verifyJWT);

/* 
  #swagger.tags = ['PaymentMethod']
  #swagger.description = 'Retorna todos os métodos de pagamento'
  #swagger.security = [{ "bearerAuth": [] }]
*/
router.get('/', handler.findAll);

/* 
  #swagger.tags = ['PaymentMethod']
  #swagger.description = 'Retorna um método de pagamento por ID'
  #swagger.parameters['id'] = {
    in: 'path',
    description: 'ID do método de pagamento',
    required: true,
    type: 'integer'
  }
  #swagger.security = [{ "bearerAuth": [] }]
*/
router.get('/:id', handler.findById);

/* 
  #swagger.tags = ['PaymentMethod']
  #swagger.description = 'Cria um novo método de pagamento'
  #swagger.security = [{ "bearerAuth": [] }]
  #swagger.requestBody = {
    required: true,
    content: {
      "application/json": {
        schema: { $ref: "#/components/schemas/PaymentMethod" }
      }
    }
  }
*/
router.post('/', validator(paymentMethodSchema), handler.create);

/* 
  #swagger.tags = ['PaymentMethod']
  #swagger.description = 'Atualiza um método de pagamento'
  #swagger.parameters['id'] = {
    in: 'path',
    description: 'ID do método de pagamento',
    required: true,
    type: 'integer'
  }
  #swagger.security = [{ "bearerAuth": [] }]
  #swagger.requestBody = {
    required: true,
    content: {
      "application/json": {
        schema: { $ref: "#/components/schemas/PaymentMethod" }
      }
    }
  }
*/
router.put('/:id', validator(paymentMethodSchema), handler.update);

/* 
  #swagger.tags = ['PaymentMethod']
  #swagger.description = 'Remove um método de pagamento'
  #swagger.parameters['id'] = {
    in: 'path',
    description: 'ID do método de pagamento',
    required: true,
    type: 'integer'
  }
  #swagger.security = [{ "bearerAuth": [] }]
*/
router.delete('/:id', handler.remove);

export default router;
