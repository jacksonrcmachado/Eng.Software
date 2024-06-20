// src/services/MariaService.ts
import { IDao } from '../dao/IDao';
import Logger from '../logger/Logger';

export class MariaService {
    private dao: IDao;
    private logger: Logger;

    constructor(dao: IDao) {
        this.dao = dao;
        this.logger = Logger.getInstance();
    }

    public async saveData(data: any): Promise<void> {
        try {
            await this.dao.connect();
            await this.dao.save(data);
            this.logger.log('Data saved successfully');
        } catch (error) {
            this.logger.log(`Error saving data: ${error.message}`);
        } finally {
            await this.dao.disconnect();
        }
    }
}
