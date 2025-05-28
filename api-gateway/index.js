import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

const services = {
  financialGoal: {
    target: 'http://financialgoal:3001/api/financialGoals',
  },
  paymentMethod: {
    target: 'http://paymentmethod:3002/api/paymentMethods',
  },
  expense: {
    target: 'http://expense:3003/api/expenses',
  },
  auth: {
    target: 'http://auth-service:3004/api/auth',
  },
  saving: {
    target: 'http://saving:3005/api/savings',
  },
};

app.use(
  '/api/savings',
  createProxyMiddleware({
    target: services.saving.target,
    changeOrigin: true,
  }),
);

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

app.use(
  '/api/auth',
  createProxyMiddleware({
    target: services.auth.target,
    changeOrigin: true,
  }),
);

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
