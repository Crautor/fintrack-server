import prisma from '../prismaClient.js';

export default {
  async findAll(userId) {
    return prisma.financialGoal.findMany({
      where: { userId: userId },
    });
  },

  async findById({ id, userId }) {
    const where = {
      financialGoalId: Number(id),
      userId: userId,
    };
    return prisma.financialGoal.findFirst({ where });
  },

  async create(data) {
    return prisma.financialGoal.create({ data });
  },

  async update(id, data) {
    return prisma.financialGoal.update({
      where: { financialGoalId: Number(id) },
      data,
    });
  },

  async remove(id) {
    return prisma.financialGoal.delete({ where: { financialGoalId: Number(id) } });
  },
};
