import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class LanceService {
  public async getAllLances() {
    return prisma.lance.findMany();
  }

  public async getLanceById(id: number) {
    return prisma.lance.findUnique({
      where: { id },
    });
  }

  public async createLance(data: { compradorId: number, leilaoId: number, valor: number }) {
    return prisma.lance.create({
        data,
    });
  }

  public async deleteLance(id: number) {
    // Exclua o lance
    const lance = await prisma.lance.delete({
      where: {
        id,
      },
    });

    return lance;
  }

  public async updateLance(id: number, data: { compradorId: number, leilaoId: number, valor: number }) {
    return prisma.lance.update({
        where: { id },
        data,
    });
  }
}
