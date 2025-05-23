import { Router } from 'express';
import * as handler from '../handlers/expenseHandler.js';
import validator from '../../middlewares/validator.js';
import expenseSchema from '../validators/expenseValidator.js';
import verifyJWT from '../../middlewares/verifyJWT.js';

const router = Router();
router.use(verifyJWT);

router
  .get('/', handler.findAll)
  .get('/:id', handler.findById)
  .post('/', validator(expenseSchema), handler.create)
  .put('/:id', validator(expenseSchema), handler.update)
  .delete('/:id', handler.remove);

export default router;
