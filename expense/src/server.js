import express from 'express';
import dotenv from 'dotenv';
import ExpenseRouter from './interfaces/routes/expenseRouter.js';
import responseHandler from './interfaces/handlers/responseHandler.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use(responseHandler);

app.use('/api/expenses', ExpenseRouter);

app.listen(3003, () => console.log('Expense Service running on port 3003'));
