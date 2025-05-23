import ExpenseRepository from '../infrastructure/database/ExpenseRepository.js';

export default {
  findAll: ExpenseRepository.findAll,
  findById: ExpenseRepository.findById,
  create: ExpenseRepository.create,
  update: ExpenseRepository.update,
  remove: ExpenseRepository.remove,
};
