import { Genero, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
export declare class GenerosService {
    private prisma;
    constructor(prisma: PrismaService);
    createGenero(data: CreateGeneroDto): Promise<Genero>;
    getAll(): Promise<Genero[]>;
    getOneGenero(generoId: number): Promise<Genero>;
    updateGenero(id: number, data: CreateGeneroDto): Promise<Genero>;
    deleteOneGenero(where: Prisma.GeneroWhereUniqueInput): Promise<Genero>;
    deleteAllGeneros(): Promise<Prisma.BatchPayload>;
}
