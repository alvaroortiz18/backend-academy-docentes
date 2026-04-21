import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DocentesModule } from './modules/docentes/docentes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.HOST || 'localhost',
      port: process.env.PORT_DB ? parseInt(process.env.PORT_DB, 10) : 5433,
      username: process.env.USERNAME_DB || 'postgres',
      password: process.env.PASSWORD_DB || 'postgres',
      database: process.env.DATABASE || 'academy',
      schema: 'docentes',
      autoLoadEntities: true,
      synchronize: false, // Cambia a true solo para desarrollo
    }),
    DocentesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
