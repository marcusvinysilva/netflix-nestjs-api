import { Injectable } from '@nestjs/common';
import { Filme, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFilmeDto } from './dto/create-filme.dto';

@Injectable()
export class FilmesService {
  constructor(private prisma: PrismaService) {}

  async createFilme(data: CreateFilmeDto) {
    const genero = data.genero?.map((genero) => ({
      id: genero,
    }));

    const participantes = data.participantes?.map((participante) => ({
      id: participante,
    }));

    return this.prisma.filme.create({
      data: {
        ...data,
        participantes: {
          connect: participantes,
        },
        genero: {
          connect: genero,
        },
      },
      include: {
        genero: true,
        participantes: true,
      },
    });
  }

  async getAll(): Promise<Filme[]> {
    return this.prisma.filme.findMany();
  }

  async getOneFilme(filmeId: number): Promise<Filme> {
    return this.prisma.filme.findUnique({
      where: {
        id: filmeId,
      },
      include: {
        genero: true,
        participantes: true,
      },
    });
  }

  async updateFilme(id: number, data: CreateFilmeDto) {
    const genero = data.genero?.map((genero) => ({
      id: genero,
    }));

    const participantes = data.participantes?.map((participante) => ({
      id: participante,
    }));

    return await this.prisma.filme.update({
      data: {
        ...data,
        participantes: {
          connect: participantes,
        },
        genero: {
          connect: genero,
        },
      },
      include: {
        genero: true,
        participantes: true,
      },
      where: { id },
    });
  }

  async deleteOneFilme(where: Prisma.FilmeWhereUniqueInput): Promise<Filme> {
    return this.prisma.filme.delete({ where });
  }

  async deleteAllFilmes() {
    return this.prisma.filme.deleteMany();
  }
}
