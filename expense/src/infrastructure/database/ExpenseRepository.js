import prisma from '../prismaClient.js';

export default {
  async findAll() {
    return prisma.expense.findMany();
  },

  async findById(id) {
    return prisma.expense.findUnique({ where: { expenseId: Number(id) } });
  },

  async create(data) {
    return prisma.expense.create({ data });
  },

  async update(id, data) {
    return prisma.expense.update({
      where: { expenseId: Number(id) },
      data,
    });
  },

  async remove(id) {
    return prisma.expense.delete({ where: { expenseId: Number(id) } });
  },
};
