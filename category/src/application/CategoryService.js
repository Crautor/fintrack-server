import CategoryRepository from '../infrastructure/database/CategoryRepository.js';

export default {
  findAll: CategoryRepository.findAll,
  findById: CategoryRepository.findById,
  create: CategoryRepository.create,
  update: CategoryRepository.update,
  remove: CategoryRepository.remove,
};
