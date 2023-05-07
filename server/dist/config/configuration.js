"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constConfiguration = exports.databaseConfig = void 0;
const config_1 = require("@nestjs/config");
const sql_config_1 = require("./sql.config");
exports.databaseConfig = (0, config_1.registerAs)('database', () => ({
    sql: Object.assign({}, (0, sql_config_1.sqlConfig)()),
}));
const constConfiguration = () => ({
    PAGES_LIMIT: 20,
});
exports.constConfiguration = constConfiguration;
//# sourceMappingURL=configuration.js.map