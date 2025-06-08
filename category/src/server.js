import express from 'express';
import dotenv from 'dotenv';
import CategoryRouter from './interfaces/routes/categoryRouter.js';
import responseHandler from './interfaces/handlers/responseHandler.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use(responseHandler);

app.use('/api/category', CategoryRouter);

app.listen(3006, () => console.log('Category Service running on port 3006'));
