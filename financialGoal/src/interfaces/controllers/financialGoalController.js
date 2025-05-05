import FinancialGoalService from "../../application/FinancialGoalService.js";
import { hateoas_item, hateoas_list } from "../../utils/hateoas.js";

const baseUrl = "/api/financial-goals";

export const listFinancialGoals = async (req, res, next) => {
  const goals = await FinancialGoalService.getAll();
  res.json(hateoas_list(goals, baseUrl));
};

export const getFinancialGoal = async (req, res, next) => {
  const goal = await FinancialGoalService.getById(req.params.id);
  if (!goal) return res.not_found.json({ error: "Not found" });
  res.json(hateoas_item(goal, baseUrl));
};

export const createFinancialGoal = async (req, res, next) => {
  const goal = await FinancialGoalService.create(req.body);
  res.created().json(hateoas_item(goal, baseUrl));
};

export const updateFinancialGoal = async (req, res, next) => {
  const goal = await FinancialGoalService.update(req.params.id, req.body);
  res.json(hateoas_item(goal, baseUrl));
};

export const deleteFinancialGoal = async (req, res, next) => {
  await FinancialGoalService.delete(req.params.id);
  res.no_content().end();
};
