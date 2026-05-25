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

    
    @MessagePattern({ cmd: 'get_all_docentes' })
    findAllMs() {
        return this.docentesService.findAll();
    }

    @MessagePattern({ cmd: 'get_one_docente' })
    findOneMs(id: number) {
        return this.docentesService.findOne(Number(id));
    }

    @MessagePattern({ cmd: 'create_docente' })
    createMs(createDto: CreateDocenteDto) {
        return this.docentesService.create(createDto);
    }

    @MessagePattern({ cmd: 'update_docente' })
    updateMs(data: { id: number, [key: string]: any }) {
        const { id, ...updateDto } = data;
        return this.docentesService.update(Number(id), updateDto);
    }

    @MessagePattern({ cmd: 'remove_docente' })
    removeMs(id: number) {
        return this.docentesService.remove(Number(id));
    }
}
