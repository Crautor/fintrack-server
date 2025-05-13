import express from 'express';
import dotenv from 'dotenv';
import PaymentMethodRouter from './interfaces/routes/paymentMethodRouter.js';
import responseHandler from './interfaces/handlers/responseHandler.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use(responseHandler);

app.use('/api/paymentMethods', PaymentMethodRouter);

app.listen(3002, () => console.log('Payment Method Service running on port 3002'));