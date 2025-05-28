import TransactionService from '../../application/TransactionService.js';
import { hateoas_item, hateoas_list } from '../../utils/hateoas.js';

const baseUrl = '/api/transactions';

export const listTransactions = async (req, res, next) => {
  const transactions = await TransactionService.findAll();
  res.json(hateoas_list(transactions, baseUrl));
};

export const getTransaction = async (req, res, next) => {
  const transaction = await TransactionService.findById(req.params.id);
  if (!transaction) return res.not_found().json({ error: 'Not found' });
  res.json(hateoas_item(transaction, baseUrl));
};

export const createTransaction = async (req, res, next) => {
  const transaction = await TransactionService.create(req.body);
  res.created().json(hateoas_item(transaction, baseUrl));
};

export const updateTransaction = async (req, res, next) => {
  const transaction = await TransactionService.update(req.params.id, req.body);
  res.json(hateoas_item(transaction, baseUrl));
};

export const deleteTransaction = async (req, res, next) => {
  const transaction = await TransactionService.remove(req.params.id);
  res.no_content().end();
};
