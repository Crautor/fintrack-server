import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    version: '1.0.0',
    title: 'Tecnologias Emergentes',
    description: 'Documentação da API criada em sala',
  },
  servers: [
    {
      url: 'http://localhost:3002/',
    },
  ],
  components: {
    schemas: {
      InternalServerError: {
        type: 'object',
        properties: {
          code: { type: 'string' },
          message: { type: 'string' },
        },
      },
      User: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          email: { type: 'string' },
          password: { type: 'string' },
        },
      },
      PaymentMethod: {
        type: 'object',
        properties: {
          paymentMethodId: {
            type: 'integer',
            example: 1,
          },
          name: {
            type: 'string',
            example: 'Cartão de Crédito',
          },
        },
      },
    },
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
      },
    },
  },
};

const outputFile = './config/swagger.json';
const endpointsFiles = ['./server.js'];

swaggerAutogen({ openapi: '3.0.0' })(outputFile, endpointsFiles, doc).then(async () => {
  await import('./server.js');
});
