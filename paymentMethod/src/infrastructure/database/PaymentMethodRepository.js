import prisma from '../prismaClient.js';

export default {
    async findAll() {
        return prisma.paymentMethod.findMany();
    },

    async findById(id) {
        return prisma.paymentMethod.findUnique({ where: { paymentMethodId: Number(id) } });
    },

    async create(data) {
        return prisma.paymentMethod.create({ data });
    },

    async update(id, data) {
        return prisma.paymentMethod.update({
            where: { paymentMethodId: Number(id) },
            data,
        });
    },

    async remove(id) {
        return prisma.paymentMethod.delete({ where: { paymentMethodId: Number(id) } });
    },
}