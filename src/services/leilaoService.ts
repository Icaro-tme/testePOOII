import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class LeilaoService {
  public async getAllLeiloes() {
    return prisma.leilao.findMany();
  }

  public async getLeilaoById(id: number) {
    return prisma.leilao.findUnique({
      where: { id },
    });
  }

  public async createLeilao(data: { produto: string, preco: number, data: Date, donoId: number }) {
    return prisma.leilao.create({
        data,
    });
  }

  public async deleteLeilao(id: number) {
    // Antes de excluir o leilão, exclua os lances relacionados
    await prisma.lance.deleteMany({
      where: {
        leilaoId: id,
      },
    });

    // Em seguida, exclua o leilão
    const leilao = await prisma.leilao.delete({
      where: {
        id,
      },
    });

    return leilao;
  }

  public async updateLeilao(id: number, data: { produto: string, preco: number, data: Date, donoId: number }) {
    return prisma.leilao.update({
        where: { id },
        data,
    });
  }
}
