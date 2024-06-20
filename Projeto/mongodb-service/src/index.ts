// src/index.ts
import express from 'express';
import { MongoController } from './controllers/MongoController';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const mongoController = new MongoController();

app.post('/data', (req, res) => mongoController.saveData(req, res));

app.listen(port, () => {
    console.log(`MongoDB service running on port ${port}`);
});
