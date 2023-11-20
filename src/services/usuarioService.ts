import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class UsuarioService {
  public async getAllUsuarios() {
    return prisma.usuario.findMany();
  }

  public async getUsuarioById(id: number) {
    return prisma.usuario.findUnique({
      where: { id },
    });
  }

  public async createUsuario(data: { nome: string, email: string }) {
    return prisma.usuario.create({
        data,
    });
  }

  public async deleteUsuario(id: number) {
    
    await prisma.lance.deleteMany({
      where: {
        compradorId: id, 
      },
    });
    await prisma.leilao.deleteMany({
      where: {
        donoId: id,
      },
    });

    // Em seguida, exclua o usuário
    const usuario = await prisma.usuario.delete({
      where: {
        id,
      },
    });

    return usuario;
  }

  public async updateUsuario(id: number, data: { nome: string, email: string }) {
    return prisma.usuario.update({
        where: { id },
        data,
    });
  }

}
