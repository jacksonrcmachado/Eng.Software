// src/dao/PostgresDao.ts
import { IDao } from './IDao';
import { Client } from 'pg';

export class PostgresDao implements IDao {
    private client: Client;

    constructor() {
        this.client = new Client({
            user: process.env.DB_USER,
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            password: process.env.DB_PASSWORD,
            port: Number(process.env.DB_PORT),
        });
    }

    public async connect(): Promise<void> {
        await this.client.connect();
    }

    public async disconnect(): Promise<void> {
        await this.client.end();
    }

    public async save(data: any): Promise<void> {
        await this.client.query('INSERT INTO your_table (data) VALUES ($1)', [data]);
    }
}
