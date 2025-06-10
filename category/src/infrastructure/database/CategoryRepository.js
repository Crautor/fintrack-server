import prisma from '../prismaClient.js';

export default {
  async findAll(userId) {
    return prisma.category.findMany({
      where: { userId: userId },
    });
  },

  async findById({ id, userId }) {
    const where = {
      categoryId: Number(id),
      userId: userId,
    };

    return prisma.category.findFirst({ where });
  },

  async create(data) {
    return prisma.category.create({ data });
  },

  async update(id, data) {
    return prisma.category.update({
      where: { categoryId: Number(id) },
      data,
    });
  },

  async remove(id) {
    return prisma.category.delete({ where: { categoryId: Number(id) } });
  },
};
