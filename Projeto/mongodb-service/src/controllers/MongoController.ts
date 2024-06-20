// src/controllers/MongoController.ts
import { MongoService } from '../services/MongoService';
import { MongoDao } from '../dao/MongoDao';
import { Request, Response } from 'express';

export class MongoController {
    private service: MongoService;

    constructor() {
        const dao = new MongoDao();
        this.service = new MongoService(dao);
    }

    public async saveData(req: Request, res: Response): Promise<void> {
        const data = req.body;
        await this.service.saveData(data);
        res.send('Data saved successfully');
    }
}
