import express from 'express';
import dotenv from 'dotenv';
import FinancialGoalRouter from './interfaces/routes/financialGoalRouter.js';
import responseHandler from './interfaces/handlers/responseHandler.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use(responseHandler);

app.use('/api/financialGoals', FinancialGoalRouter);

app.listen(3001, () => console.log('Financial Goal Service running on port 3001'));
