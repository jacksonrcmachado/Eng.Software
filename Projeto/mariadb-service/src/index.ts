// src/index.ts
import express from 'express';
import { MariaController } from './controllers/MariaController';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3002;

app.use(express.json());

const mariaController = new MariaController();

app.post('/data', (req, res) => mariaController.saveData(req, res));

app.listen(port, () => {
    console.log(`MariaDB service running on port ${port}`);
});
