// src/controllers/PostgresController.ts
import { PostgresService } from '../services/PostgresService';
import { PostgresDao } from '../dao/PostgresDao';
import { Request, Response } from 'express';

export class PostgresController {
    private service: PostgresService;

    constructor() {
        const dao = new PostgresDao();
        this.service = new PostgresService(dao);
    }

    public async saveData(req: Request, res: Response): Promise<void> {
        const data = req.body;
        await this.service.saveData(data);
        res.send('Data saved successfully');
    }
}
