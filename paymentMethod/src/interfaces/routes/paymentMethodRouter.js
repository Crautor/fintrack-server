import { Router } from 'express';
import * as handler from '../handlers/paymentMethodHandler.js';
import validator from '../../middlewares/validator.js';
import paymentMethodSchema from '../validators/paymentMethodValidator.js';
import verifyJWT from '../../middlewares/verifyJWT.js';

const router = Router();
router.use(verifyJWT);

router
  .get('/', handler.findAll)
  .get('/:id', handler.findById)
  .post('/', validator(paymentMethodSchema), handler.create)
  .put('/:id', validator(paymentMethodSchema), handler.update)
  .delete('/:id', handler.remove);

export default router;
