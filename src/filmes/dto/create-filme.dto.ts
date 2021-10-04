import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateFilmeDto {
  @IsNotEmpty()
  nome: string;

  @IsOptional()
  imagem: string;

  @IsOptional()
  ano_lancamento: number;

  @IsOptional()
  tempo_duracao: number;

  @IsOptional()
  participantes: number[];

  @IsOptional()
  genero: number[];
}
