import prisma from '../prismaClient.js';

export default {
  async findAll(userId) {
    return prisma.saving.findMany({
      where: { userId: userId },
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
    });
  },
};
