import { IsString, IsOptional, IsInt, IsEmail } from 'class-validator';

export class CreateDocenteDto {
    @IsString()
    nombres: string;

    @IsString()
    apellidos: string;

    @IsOptional()
    @IsEmail()
    email?: string;

    @IsOptional()
    @IsString()
    direccion?: string;

    @IsOptional()
    @IsString()
    cedula?: string;

    @IsOptional()
    @IsString()
    telefono?: string;

    @IsInt()
    etnia_id: number;

    @IsInt()
    cargo_id: number;

    @IsInt()
    sexo_id: number;
}