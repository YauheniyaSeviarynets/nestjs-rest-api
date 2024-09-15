"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
class Logger {
    info({ message }) {
        console.info(`Info: ${new Date().toISOString()}`, message);
    }
    error({ message }) {
        console.error(`Error: ${new Date().toISOString()}`, message);
    }
    log({ message }) {
        console.log(`Log: ${new Date().toISOString()}`, message);
    }
}
exports.logger = new Logger();
//# sourceMappingURL=logger.js.map