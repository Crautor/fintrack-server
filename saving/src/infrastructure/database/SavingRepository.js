import prisma from '../prismaClient.js';

export default {
  async findAll() {
    return prisma.saving.findMany();
  },

  async findById(id) {
    return prisma.saving.findUnique({ where: { savingId: Number(id) } });
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
};
