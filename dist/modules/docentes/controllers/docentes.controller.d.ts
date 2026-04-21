import { DocentesService } from '../services/docentes.service';
import { CreateDocenteDto } from '../dto/create-docente.dto';
import { UpdateDocenteDto } from '../dto/update-docente.dto';
export declare class DocentesController {
    private readonly docentesService;
    constructor(docentesService: DocentesService);
    findAll(): Promise<import("../entities/docente.entity").Docente[]>;
    findOne(id: number): Promise<import("../entities/docente.entity").Docente>;
    create(createDto: CreateDocenteDto): Promise<import("../entities/docente.entity").Docente>;
    update(id: number, updateDto: UpdateDocenteDto): Promise<import("../entities/docente.entity").Docente>;
    remove(id: number): Promise<void>;
    findAllMs(): Promise<import("../entities/docente.entity").Docente[]>;
    findOneMs(id: number): Promise<import("../entities/docente.entity").Docente>;
    createMs(createDto: CreateDocenteDto): Promise<import("../entities/docente.entity").Docente>;
    updateMs(data: {
        id: number;
        [key: string]: any;
    }): Promise<import("../entities/docente.entity").Docente>;
    removeMs(id: number): Promise<void>;
}
