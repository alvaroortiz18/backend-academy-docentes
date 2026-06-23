"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
async function bootstrap() {
    const logger = new common_1.Logger('Main');
    const tcpPort = Number(process.env.PORT ?? 3003);
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.TCP,
        options: { host: '0.0.0.0', port: tcpPort },
    });
    await app.listen();
    logger.log(`Microservicio TCP corriendo en el puerto ${tcpPort}`);
}
bootstrap();
//# sourceMappingURL=main.js.map