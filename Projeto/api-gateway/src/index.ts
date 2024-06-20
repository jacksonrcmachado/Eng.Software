// api-gateway/src/index.ts
import express from 'express';
import * as dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

const services = {
    postgres: `http://localhost:${process.env.POSTGRES_PORT}`,
    mongodb: `http://localhost:${process.env.MONGODB_PORT}`,
    mariadb: `http://localhost:${process.env.MARIADB_PORT}`,
};

app.post('/data', async (req, res) => {
    const { targetService, ...data } = req.body;
    if (!services[targetService]) {
        return res.status(400).send('Invalid target service');
    }

    try {
        const response = await axios.post(`${services[targetService]}/data`, data);
        res.send(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(port, () => {
    console.log(`API Gateway running on port ${port}`);
});
