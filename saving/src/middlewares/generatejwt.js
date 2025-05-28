import jwt from 'jsonwebtoken';

const payload = {
  userId: 1,
  email: 'teste@teste.com',
  role: 'user',
};

const secret = 'mysecret123';
const token = jwt.sign(payload, secret, { expiresIn: '1h' });

console.log('JWT:', token);
