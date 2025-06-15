import TransactionRepository from '../infrastructure/database/TransactionRepository.js';

export default {
  findAll: TransactionRepository.findAll,
  findById: TransactionRepository.findById,
  create: TransactionRepository.create,
  update: TransactionRepository.update,
  remove: TransactionRepository.remove,
  findByCategory: TransactionRepository.findByCategory,
  findByTransactionDate: TransactionRepository.findByTransactionDate,
  findByPeriod: TransactionRepository.findByPeriod,
};
