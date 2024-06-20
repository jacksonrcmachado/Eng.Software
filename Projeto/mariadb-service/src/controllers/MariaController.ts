// src/controllers/MariaController.ts
import { MariaService } from '../services/MariaService';
import { MariaDao } from '../dao/MariaDao';
import { Request, Response } from 'express';

export class MariaController {
    private service: MariaService;

    constructor() {
        const dao = new MariaDao();
        this.service = new MariaService(dao);
    }

    public async saveData(req: Request, res: Response): Promise<void> {
        const data = req.body;
        await this.service.saveData(data);
        res.send('Data saved successfully');
    }
}
