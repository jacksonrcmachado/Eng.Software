// src/dao/MariaDao.ts
import { IDao } from './IDao';
import { createConnection, Connection } from 'mysql2/promise';

export class MariaDao implements IDao {
    private connection: Connection | null = null;

    public async connect(): Promise<void> {
        this.connection = await createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            database: process.env.DB_NAME,
            password: process.env.DB_PASSWORD,
        });
    }

    public async disconnect(): Promise<void> {
        if (this.connection) {
            await this.connection.end();
        }
    }

    public async save(data: any): Promise<void> {
        if (this.connection) {
            await this.connection.execute('INSERT INTO your_table (data) VALUES (?)', [data]);
        }
    }
}
