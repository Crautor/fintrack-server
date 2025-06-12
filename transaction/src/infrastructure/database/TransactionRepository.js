import prisma from '../prismaClient.js';

export default {
  async findAll(userId, filter = {}) {
    return prisma.transaction.findMany({
      where: {
        userId,
        ...filter,
        transactionDate: {
          lte: new Date(),
          ...(filter.transactionDate ? { equals: filter.transactionDate } : {}),
        },
      },
      orderBy: {
        transactionDate: 'desc',
      },
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

  async findByCategory(userId, categoryId) {
    return prisma.transaction.findMany({
      where: {
        userId,
        categoryId: Number(categoryId),
        transactionDate: {
          lte: new Date(), // Apenas transações até agora
        },
      },
      orderBy: {
        transactionDate: 'desc',
      },
    });
  },

  async findByTransactionDate(userId, transactionDate) {
    // Converte a string para Date e pega o início e fim do dia
    const start = new Date(transactionDate);
    start.setHours(0, 0, 0, 0);
    const end = new Date(transactionDate);
    end.setHours(23, 59, 59, 999);
    return prisma.transaction.findMany({
      where: {
        userId,
        transactionDate: {
          gte: start,
          lte: end,
        },
      },
      orderBy: {
        transactionDate: 'desc',
      },
    });
  },
};
