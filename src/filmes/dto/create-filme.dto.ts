import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateFilmeDto {
  @IsNotEmpty()
  nome: string;

  @IsOptional()
  imagem: string;

  @IsOptional()
  data_lancamento: Date;

  @IsOptional()
  tempo_duracao: number;
}
