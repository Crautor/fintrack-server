import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

const services = {
  financialGoal: {
    target: 'http://financialgoal:3001/api/financialGoals',
    pathRewrite: { '^/api/financialGoals': '' },
  },
  paymentMethod: {
    target: 'http://paymentmethod:3002/api/paymentMethods',
    pathRewrite: { '^/api/paymentMethods': '' },
  },
};

app.use(
  '/api/financialGoals',
  createProxyMiddleware({
    target: services.financialGoal.target,
    changeOrigin: true,
    pathRewrite: services.financialGoal.pathRewrite,
  }),
);

app.use(
  '/api/paymentMethods',
  createProxyMiddleware({
    target: services.paymentMethod.target,
    changeOrigin: true,
    pathRewrite: services.paymentMethod.pathRewrite,
  }),
);

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
