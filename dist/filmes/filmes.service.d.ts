import { Filme, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFilmeDto } from './dto/create-filme.dto';
export declare class FilmesService {
    private prisma;
    constructor(prisma: PrismaService);
    createFilme(data: CreateFilmeDto): Promise<Filme & {
        participantes: import(".prisma/client").Participante[];
        genero: import(".prisma/client").Genero[];
    }>;
    getAll(): Promise<Filme[]>;
    getOneFilme(filmeId: number): Promise<Filme>;
    updateFilme(id: number, data: CreateFilmeDto): Promise<Filme & {
        participantes: import(".prisma/client").Participante[];
        genero: import(".prisma/client").Genero[];
    }>;
    deleteOneFilme(where: Prisma.FilmeWhereUniqueInput): Promise<Filme>;
    deleteAllFilmes(): Promise<Prisma.BatchPayload>;
}
