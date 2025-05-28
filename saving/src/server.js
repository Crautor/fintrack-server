import express from 'express';
import dotenv from 'dotenv';
import SavingRouter from './interfaces/routes/savingRouter.js';
import responseHandler from './interfaces/handlers/responseHandler.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use(responseHandler);

app.use('/api/savings', SavingRouter);

app.listen(3005, () => console.log('Saving Service running on port 3005'));
