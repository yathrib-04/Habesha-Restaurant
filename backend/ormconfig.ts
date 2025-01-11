import { DataSource } from 'typeorm';
import { Order } from './src/orders/order.entity';

const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',  // Use your actual MySQL root password if set
    database: 'ourorder',
    entities: [Order],
    migrations: ['./src/migrations/*.ts'],
    synchronize: false,
    logging: true,
});

export default AppDataSource;
