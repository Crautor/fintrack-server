import express from 'express';
import dotenv from 'dotenv';
import TransactionRouter from './interfaces/routes/transactionRouter.js';
import responseHandler from './interfaces/handlers/responseHandler.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use(responseHandler);

app.use('/api/transactions', TransactionRouter);

app.listen(3003, () => console.log('Transaction Service running on port 3003'));
