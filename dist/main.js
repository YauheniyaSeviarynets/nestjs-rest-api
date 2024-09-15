"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const http_exception_filter_1 = require("./exception-filters/http-exception-filter");
const apply_docs_1 = require("./api-docs/apply-docs");
const app_config_1 = require("./app.config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    (0, apply_docs_1.applyDocs)(app);
    const port = new app_config_1.default().build().metaData.port;
    await app.listen(port, () => {
        console.info(`The app is up and running on ${port} port`);
    });
}
bootstrap().then();
//# sourceMappingURL=main.js.map