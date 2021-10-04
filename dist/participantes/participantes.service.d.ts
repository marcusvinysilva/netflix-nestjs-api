import { Participante, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateParticipanteDto } from './dto/create-participante.dto';
export declare class ParticipantesService {
    private prisma;
    constructor(prisma: PrismaService);
    createParticipante(data: CreateParticipanteDto): Promise<Participante>;
    getAll(): Promise<Participante[]>;
    getOneParticipante(participanteId: number): Promise<Participante>;
    updateParticipante(id: number, data: CreateParticipanteDto): Promise<Participante>;
    deleteOneParticipante(where: Prisma.ParticipanteWhereUniqueInput): Promise<Participante>;
    deleteAllParticipantes(): Promise<Prisma.BatchPayload>;
}
