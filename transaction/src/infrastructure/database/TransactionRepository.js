import prisma from '../prismaClient.js';

export default {
  async findAll(userId) {
    return prisma.transaction.findMany({
      where: { userId },
    });
  },

  async findById({ id, userId }) {
    const where = {
      transactionId: Number(id),
      userId: userId,
    };
    return prisma.transaction.findFirst({ where });
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
