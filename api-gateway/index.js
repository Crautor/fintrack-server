import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

const services = {
  expense: {
    target: 'http://expense:3003/api/expenses',
  },
  financialGoal: {
    target: 'http://financialgoal:3001/api/financialGoals',
  },
  paymentMethod: {
    target: 'http://paymentmethod:3002/api/paymentMethods',
  },
};

app.use(
  '/api/expenses',
  createProxyMiddleware({
    target: services.expense.target,
    changeOrigin: true,
  }),
);

app.use(
  '/api/financialGoals',
  createProxyMiddleware({
    target: services.financialGoal.target,
    changeOrigin: true,
  }),
);

app.use(
  '/api/paymentMethods',
  createProxyMiddleware({
    target: services.paymentMethod.target,
    changeOrigin: true,
  }),
);

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
