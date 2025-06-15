import prisma from '../prismaClient.js';

export default {
  async findAll(userId) {
    return prisma.saving.findMany({
      where: { userId: userId },
      orderBy: { createdAt: 'desc' },
    });
  },

  async findById({ id, userId }) {
    const where = {
      savingId: Number(id),
      userId: userId,
    };
    return prisma.saving.findFirst({ where });
  },

  async create(data) {
    return prisma.saving.create({ data });
  },

  async update(id, data) {
    return prisma.saving.update({
      where: { savingId: Number(id) },
      data,
    });
  },

  async remove(id) {
    return prisma.saving.delete({ where: { savingId: Number(id) } });
  },

  async findByFinancialGoal({ userId, financialGoalId }) {
    console.log(financialGoalId);
    const where = {
      financialGoalId: Number(financialGoalId),
      userId,
    };
    return prisma.saving.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    });
  },

  async findByCreatedAt({ userId, createdAt }) {
    const start = new Date(createdAt);
    const end = new Date(createdAt);
    end.setHours(23, 59, 59, 999); // Define o final do dia

    return prisma.saving.findMany({
      where: {
        userId,
        createdAt: {
          gte: start,
          lte: end,
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  },
};
