"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const config_1 = require("vitest/config");
const path = (0, path_1.resolve)(__dirname, 'src');
exports.default = (0, config_1.defineConfig)({
    test: {
        coverage: {
            functions: 80,
            branches: 80,
            statements: 80,
            lines: 80
        }
    },
    resolve: {
        alias: {
            '@app': `${path}/app`,
            '@core': `${path}/core`,
            '@infra': `${path}/infra`,
            '@shared': `${path}/shared`,
            '@test': `${path}/test`
        }
    }
});
