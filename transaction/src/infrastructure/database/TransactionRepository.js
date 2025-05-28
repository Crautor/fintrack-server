import prisma from '../prismaClient.js';

export default {
  async findAll() {
    return prisma.transaction.findMany();
  },

  async findById(id) {
    return prisma.transaction.findUnique({ where: { transactionId: Number(id) } });
  },

  async create(data) {
    return prisma.transaction.create({ data });
  },

  async update(id, data) {
    return prisma.transaction.update({
      where: { transactionId: Number(id) },
      data,
    });
  },

  async remove(id) {
    return prisma.transaction.delete({ where: { transactionId: Number(id) } });
  },
};
