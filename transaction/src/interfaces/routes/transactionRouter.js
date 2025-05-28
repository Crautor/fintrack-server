import { Router } from 'express';
import * as handler from '../handlers/transactionHandler.js';
import validator from '../../middlewares/validator.js';
import transactionSchema from '../validators/transactionValidator.js';
import verifyJWT from '../../middlewares/verifyJWT.js';

const router = Router();
router.use(verifyJWT);

router
  .get('/', handler.findAll)
  .get('/:id', handler.findById)
  .post('/', validator(transactionSchema), handler.create)
  .put('/:id', validator(transactionSchema), handler.update)
  .delete('/:id', handler.remove);

export default router;
