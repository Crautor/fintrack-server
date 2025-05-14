import PaymentMethodRepository from '../infrastructure/database/PaymentMethodRepository.js';

export default {
  findAll: PaymentMethodRepository.findAll,
  findById: PaymentMethodRepository.findById,
  create: PaymentMethodRepository.create,
  update: PaymentMethodRepository.update,
  remove: PaymentMethodRepository.remove,
};
