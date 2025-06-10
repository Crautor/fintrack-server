import express from 'express';
import dotenv from 'dotenv';
import PaymentMethodRouter from './interfaces/routes/paymentMethodRouter.js';
import responseHandler from './interfaces/handlers/responseHandler.js';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const swaggerPath = path.join(__dirname, './config/swagger.json');
const swaggerDocument = JSON.parse(fs.readFileSync(swaggerPath, 'utf8'));

dotenv.config();

const app = express();
app.use(express.json());

app.use(responseHandler);

app.use('/api/paymentMethods', PaymentMethodRouter);

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3002, () => console.log('Payment Method Service running on port 3002'));
