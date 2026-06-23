import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Docente } from './entities/docente.entity';
import { Cargo } from './entities/cargo.entity';
import { DocentesService } from './services/docentes.service';
import { DocentesController } from './controllers/docentes.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Docente, Cargo])],
    controllers: [DocentesController],
    providers: [DocentesService],
})
export class DocentesModule { }
