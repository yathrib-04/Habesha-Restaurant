"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const order_entity_1 = require("./src/orders/order.entity");
const AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '', // Use your actual MySQL root password if set
    database: 'ourorder',
    entities: [order_entity_1.Order],
    migrations: ['./src/migrations/*.ts'],
    synchronize: false,
    logging: true,
});
exports.default = AppDataSource;
