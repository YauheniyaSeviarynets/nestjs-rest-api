"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyDocs = void 0;
const swagger_1 = require("@nestjs/swagger");
const applyDocs = (app) => {
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Dynamodb REST API')
        .setDescription('Dynamodb REST API sample')
        .setVersion('1.0')
        .addTag('dynamodb')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('docs', app, document);
    return document;
};
exports.applyDocs = applyDocs;
//# sourceMappingURL=apply-docs.js.map