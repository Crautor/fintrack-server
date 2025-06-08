import prisma from '../prismaClient.js';

export default {
  async findAll() {
    return prisma.category.findMany();
  },

  async findById(id) {
    return prisma.category.findUnique({ where: { categoryId: Number(id) } });
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
