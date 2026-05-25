import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const logger = new Logger('Main');
  const tcpPort = Number(process.env.PORT ?? 3003);

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.TCP,
    options: { port: tcpPort },
  });
  await app.listen();
  logger.log(`Microservicio TCP corriendo en el puerto ${tcpPort}`);
}
bootstrap();
