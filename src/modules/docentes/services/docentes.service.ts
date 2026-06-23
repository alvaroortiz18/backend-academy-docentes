import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Docente } from '../entities/docente.entity';
import { Cargo } from '../entities/cargo.entity';
import { CreateDocenteDto } from '../dto/create-docente.dto';
import { UpdateDocenteDto } from '../dto/update-docente.dto';

@Injectable()
export class DocentesService {
    constructor(
        @InjectRepository(Docente)
        private readonly docenteRepository: Repository<Docente>,
        @InjectRepository(Cargo)
        private readonly cargoRepository: Repository<Cargo>,
    ) { }

    async findAll(): Promise<Docente[]> {
        return this.docenteRepository.find();
    }

    async findOne(id: number): Promise<Docente> {
        const docente = await this.docenteRepository.findOneBy({ id });
        if (!docente) throw new NotFoundException('Docente not found');
        return docente;
    }

    async create(createDto: CreateDocenteDto): Promise<Docente> {
        const docente = this.docenteRepository.create(createDto);
        return this.docenteRepository.save(docente);
    }

    async update(id: number, updateDto: UpdateDocenteDto): Promise<Docente> {
        await this.findOne(id);
        await this.docenteRepository.update(id, updateDto);
        return this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.findOne(id);
        await this.docenteRepository.delete(id);
    }

    async findAllCargos(): Promise<Cargo[]> {
        return this.cargoRepository.find();
    }
}
