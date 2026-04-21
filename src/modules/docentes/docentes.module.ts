import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Docente } from './entities/docente.entity';
import { DocentesService } from './services/docentes.service';
import { DocentesController } from './controllers/docentes.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Docente])],
    controllers: [DocentesController],
    providers: [DocentesService],
})
export class DocentesModule { }
