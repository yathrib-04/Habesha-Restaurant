"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: 'localhost', // XAMPP typically uses localhost
    port: 3306, // Default MySQL port in XAMPP
    username: 'root', // Default MySQL user in XAMPP
    password: '', // Default password for root user is empty in XAMPP
    database: 'ourorder', // Replace with your actual database name
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    migrations: [__dirname + '/migrations/*.ts'],
    synchronize: false,
    logging: true,
});