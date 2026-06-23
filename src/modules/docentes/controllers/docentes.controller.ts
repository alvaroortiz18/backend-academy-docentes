import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { DocentesService } from '../services/docentes.service';
import { CreateDocenteDto } from '../dto/create-docente.dto';
import { UpdateDocenteDto } from '../dto/update-docente.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller('docentes')
export class DocentesController {
    constructor(private readonly docentesService: DocentesService) { }

    @Get()
    findAll() {
        return this.docentesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.docentesService.findOne(Number(id));
    }

    @Post()
    create(@Body() createDto: CreateDocenteDto) {
        return this.docentesService.create(createDto);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updateDto: UpdateDocenteDto) {
        return this.docentesService.update(Number(id), updateDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.docentesService.remove(Number(id));
    }

    // HANDLERS PARA MICROSERVICIO
    @MessagePattern({ cmd: 'get_all_docentes' })
    async findAllMs() {
        const rows = await this.docentesService.findAll();
        return { data: rows };
    }

    @MessagePattern({ cmd: 'get_one_docente' })
    async findOneMs(id: number) {
        const row = await this.docentesService.findOne(Number(id));
        return { data: row };
    }

    @MessagePattern({ cmd: 'create_docente' })
    async createMs(createDto: CreateDocenteDto) {
        const row = await this.docentesService.create(createDto);
        return { data: row };
    }

    @MessagePattern({ cmd: 'update_docente' })
    async updateMs(data: { id: number, [key: string]: any }) {
        const { id, ...updateDto } = data;
        const row = await this.docentesService.update(Number(id), updateDto);
        return { data: row };
    }

    @MessagePattern({ cmd: 'remove_docente' })
    async removeMs(id: number) {
        await this.docentesService.remove(Number(id));
        return { data: null };
    }

    @MessagePattern({ cmd: 'get_all_cargos' })
    async findAllCargos() {
        const rows = await this.docentesService.findAllCargos();
        return { data: rows };
    }
}
