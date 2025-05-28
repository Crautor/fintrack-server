import { Router } from 'express';
import * as handler from '../handlers/savingHandler.js';
import validator from '../../middlewares/validator.js';
import savingSchema from '../validators/savingValidator.js';
import verifyJWT from '../../middlewares/verifyJWT.js';

const router = Router();
router.use(verifyJWT);

router
  .get('/', handler.findAll)
  .get('/:id', handler.findById)
  .post('/', validator(savingSchema), handler.create)
  .put('/:id', validator(savingSchema), handler.update)
  .delete('/:id', handler.remove);

export default router;
