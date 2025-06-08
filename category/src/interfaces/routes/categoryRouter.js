import { Router } from 'express';
import * as handler from '../handlers/CategoryHandler.js';
import validator from '../../middlewares/validator.js';
import categorySchema from '../validators/categoryValidator.js';
import verifyJWT from '../../middlewares/verifyJWT.js';

const router = Router();
router.use(verifyJWT);

router
  .get('/', handler.findAll)
  .get('/:id', handler.findById)
  .post('/', validator(categorySchema), handler.create)
  .put('/:id', validator(categorySchema), handler.update)
  .delete('/:id', handler.remove);

export default router;
