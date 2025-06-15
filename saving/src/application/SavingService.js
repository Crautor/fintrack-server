import SavingRepository from '../infrastructure/database/SavingRepository.js';

export default {
  findAll: SavingRepository.findAll,
  findById: SavingRepository.findById,
  create: SavingRepository.create,
  update: SavingRepository.update,
  remove: SavingRepository.remove,
  findByFinancialGoal: SavingRepository.findByFinancialGoal,
  findByCreatedAt: SavingRepository.findByCreatedAt,
};
