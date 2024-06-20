// src/index.ts
import express from 'express';
import { PostgresController } from './controllers/PostgresController';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const postgresController = new PostgresController();

app.post('/data', (req, res) => postgresController.saveData(req, res));

app.listen(port, () => {
    console.log(`PostgreSQL service running on port ${port}`);
});
