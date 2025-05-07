import FinancialGoalRepository from '../infrastructure/database/FinancialGoalRepository.js';

export default {
  findAll: FinancialGoalRepository.findAll,
  findById: FinancialGoalRepository.findById,
  create: FinancialGoalRepository.create,
  update: FinancialGoalRepository.update,
  remove: FinancialGoalRepository.remove,
};
