import { Router } from "express";
import * as handler from "../handlers/financialGoalHandler.js";
import validator from "../../middlewares/validator.js";
import financialGoalSchema from "../validators/financialGoalValidator.js";
import verifyJWT from "../../middlewares/verifyJWT.js";

const router = Router();
router.use(verifyJWT);

router
  .get("/", handler.findAll)
  .get("/:id", handler.findById)
  .post("/", validator(financialGoalSchema), handler.create)
  .put("/:id", validator(financialGoalSchema), handler.update)
  .delete("/:id", handler.remove);

export default router;
