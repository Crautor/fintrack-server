import { Router } from 'express';
import * as handler from '../handlers/CategoryHandler.js';
import validator from '../../middlewares/validator.js';
import categorySchema from '../validators/categoryValidator.js';
import verifyJWT from '../../middlewares/verifyJWT.js';

const router = Router();
router.use(verifyJWT);

/* 
  #swagger.tags = ['Category']
  #swagger.description = 'Retorna todas as categorias'
  #swagger.security = [{ "bearerAuth": [] }]
*/
router.get('/', handler.findAll);

/* 
  #swagger.tags = ['Category']
  #swagger.description = 'Retorna uma categoria por ID'
  #swagger.parameters['id'] = {
    in: 'path',
    description: 'ID da categoria',
    required: true,
    type: 'integer'
  }
  #swagger.security = [{ "bearerAuth": [] }]
*/
router.get('/:id', handler.findById);

/* 
  #swagger.tags = ['Category']
  #swagger.description = 'Cria uma nova categoria'
  #swagger.security = [{ "bearerAuth": [] }]
  #swagger.requestBody = {
    required: true,
    content: {
      "application/json": {
        schema: {
          $ref: "#/components/schemas/Category"
        }
      }
    }
  }
*/
router.post('/', validator(categorySchema), handler.create);

/* 
  #swagger.tags = ['Category']
  #swagger.description = 'Atualiza uma categoria'
  #swagger.parameters['id'] = {
    in: 'path',
    description: 'ID da categoria',
    required: true,
    type: 'integer'
  }
  #swagger.security = [{ "bearerAuth": [] }]
  #swagger.requestBody = {
    required: true,
    content: {
      "application/json": {
        schema: {
          $ref: "#/components/schemas/Category"
        }
      }
    }
  }
*/
router.put('/:id', handler.update);

/* 
  #swagger.tags = ['Category']
  #swagger.description = 'Remove uma categoria'
  #swagger.parameters['id'] = {
    in: 'path',
    description: 'ID da categoria',
    required: true,
    type: 'integer'
  }
  #swagger.security = [{ "bearerAuth": [] }]
*/
router.delete('/:id', handler.remove);

export default router;
