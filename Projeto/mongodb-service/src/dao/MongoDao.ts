// src/dao/MongoDao.ts
import { IDao } from './IDao';
import { MongoClient } from 'mongodb';

export class MongoDao implements IDao {
    private client: MongoClient;
    private dbName: string = process.env.DB_NAME!;
    private collectionName: string = process.env.COLLECTION_NAME!;

    constructor() {
        this.client = new MongoClient(process.env.DB_URI!);
    }

    public async connect(): Promise<void> {
        await this.client.connect();
    }

    public async disconnect(): Promise<void> {
        await this.client.close();
    }

    public async save(data: any): Promise<void> {
        const db = this.client.db(this.dbName);
        const collection = db.collection(this.collectionName);
        await collection.insertOne(data);
    }
}
