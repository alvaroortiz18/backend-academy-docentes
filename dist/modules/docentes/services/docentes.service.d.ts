import { Repository } from 'typeorm';
import { Docente } from '../entities/docente.entity';
import { CreateDocenteDto } from '../dto/create-docente.dto';
import { UpdateDocenteDto } from '../dto/update-docente.dto';
export declare class DocentesService {
    private readonly docenteRepository;
    constructor(docenteRepository: Repository<Docente>);
    findAll(): Promise<Docente[]>;
    findOne(id: number): Promise<Docente>;
    create(createDto: CreateDocenteDto): Promise<Docente>;
    update(id: number, updateDto: UpdateDocenteDto): Promise<Docente>;
    remove(id: number): Promise<void>;
}
