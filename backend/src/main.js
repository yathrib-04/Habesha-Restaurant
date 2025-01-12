"use strict";
const core = require("@nestjs/core");
const appModule = require("./app.module");
const dataSource = require("./data-source"); // Import AppDataSource

function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Initialize TypeORM
            yield dataSource.AppDataSource.initialize();
            console.log("Data Source has been initialized!");

            const app = yield core.NestFactory.create(appModule.AppModule);

            // Enable CORS
            app.enableCors();

            const port = process.env.PORT || 3000;
            yield app.listen(port);
            console.log(`Application is running on: ${yield app.getUrl()}`);
        } catch (err) {
            console.error("Error during Data Source initialization", err);
        }
    });
}

bootstrap();
