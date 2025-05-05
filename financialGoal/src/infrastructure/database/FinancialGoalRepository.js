import prisma from '../prismaClient.js';

export default {
  async findAll() {
    return prisma.financialGoal.findMany();
  },

  async findById(id) {
    return prisma.financialGoal.findUnique({ where: { financialGoalId: Number(id) } });
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
