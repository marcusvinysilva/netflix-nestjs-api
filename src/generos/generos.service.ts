import { Injectable } from '@nestjs/common';
import { Genero, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGeneroDto } from './dto/create-genero.dto';

@Injectable()
export class GenerosService {
  constructor(private prisma: PrismaService) {}

  async createGenero(data: CreateGeneroDto) {
    const filmes = data.filmes?.map((filme) => ({
      id: filme,
    }));

    return this.prisma.genero.create({
      data: {
        ...data,
        filmes: {
          connect: filmes,
        },
      },
    });
  }

  async getAll(): Promise<Genero[]> {
    return this.prisma.genero.findMany();
  }

  async getOneGenero(generoId: number): Promise<Genero> {
    return this.prisma.genero.findUnique({
      where: {
        id: generoId,
      },
      include: {
        filmes: true,
      },
    });
  }

  async updateGenero(id: number, data: CreateGeneroDto) {
    const filmes = data.filmes?.map((filme) => ({
      id: filme,
    }));

    return await this.prisma.genero.update({
      data: {
        ...data,
        filmes: {
          connect: filmes,
        },
      },
      where: { id },
    });
  }

  async deleteOneGenero(where: Prisma.GeneroWhereUniqueInput): Promise<Genero> {
    return this.prisma.genero.delete({ where });
  }

  async deleteAllGeneros() {
    return this.prisma.genero.deleteMany();
  }
}
