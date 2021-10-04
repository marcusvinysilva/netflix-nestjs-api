import { Injectable } from '@nestjs/common';
import { Participante, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateParticipanteDto } from './dto/create-participante.dto';

@Injectable()
export class ParticipantesService {
  constructor(private prisma: PrismaService) {}

  async createParticipante(data: CreateParticipanteDto) {
    const filmes = data.filmes?.map((filme) => ({
      id: filme,
    }));

    return this.prisma.participante.create({
      data: {
        ...data,
        filmes: {
          connect: filmes,
        },
      },
    });
  }

  async getAll(): Promise<Participante[]> {
    return this.prisma.participante.findMany();
  }

  async getOneParticipante(participanteId: number): Promise<Participante> {
    return this.prisma.participante.findUnique({
      where: {
        id: participanteId,
      },
      include: {
        filmes: true,
      },
    });
  }

  async updateParticipante(id: number, data: CreateParticipanteDto) {
    const filmes = data.filmes?.map((filme) => ({
      id: filme,
    }));

    return await this.prisma.participante.update({
      data: {
        ...data,
        filmes: {
          connect: filmes,
        },
      },
      where: { id },
    });
  }

  async deleteOneParticipante(
    where: Prisma.ParticipanteWhereUniqueInput,
  ): Promise<Participante> {
    return this.prisma.participante.delete({ where });
  }

  async deleteAllParticipantes() {
    return this.prisma.participante.deleteMany();
  }
}
