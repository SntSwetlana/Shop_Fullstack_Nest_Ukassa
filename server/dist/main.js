"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const session = require("express-session");
const passport = require("passport");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(session({
        secret: 'password_key',
        resave: false,
        saveUninitialized: false,
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.enableCors({
        credentials: true,
        origin: [`http://localhost:3001`],
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Aqua termix')
        .setDescription('api documentation')
        .setVersion('1.0')
        .addTag('api')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('swagger', app, document);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map