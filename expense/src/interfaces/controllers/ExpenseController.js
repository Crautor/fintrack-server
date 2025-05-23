import ExpenseService from '../../application/ExpenseService.js';
import { hateoas_item, hateoas_list } from '../../utils/hateoas.js';

const baseUrl = '/api/expenses';

export const listExpenses = async (req, res, next) => {
  const expenses = await ExpenseService.getAll();
  res.json(hateoas_list(expenses, baseUrl));
};

export const getExpense = async (req, res, next) => {
  const expense = await ExpenseService.getById(req.params.id);
  if (!expense) return res.not_found.json({ error: 'Not found' });
  res.json(hateoas_item(expense, baseUrl));
};

export const createExpense = async (req, res, next) => {
  const expense = await ExpenseService.create(req.body);
  res.created().json(hateoas_item(expense, baseUrl));
};

export const updateExpense = async (req, res, next) => {
  const expense = await ExpenseService.update(req.params.id, req.body);
  res.json(hateoas_item(expense, baseUrl));
};

export const deleteExpense = async (req, res, next) => {
  await ExpenseService.delete(req.params.id);
  res.no_content().end();
};
