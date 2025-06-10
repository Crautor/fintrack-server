import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    version: '1.0.0',
    title: 'Tecnologias Emergentes',
    description: 'Documentação da API criada em sala',
  },
  servers: [
    {
      url: 'http://localhost:3003/',
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
    },
    Transaction: {
      type: 'object',
      properties: {
        transactionId: {
          type: 'integer',
          example: 1,
        },
        userId: {
          type: 'integer',
          example: 42,
        },
        value: {
          type: 'number',
          format: 'float',
          example: 150.75,
        },
        categoryId: {
          type: 'integer',
          example: 5,
        },
        transactionDate: {
          type: 'string',
          format: 'date-time',
          example: '2025-06-10T14:30:00Z',
        },
        description: {
          type: 'string',
          example: 'Compra supermercado',
          nullable: true,
        },
        recurrence: {
          type: 'boolean',
          example: false,
        },
        type: {
          type: 'string',
          enum: ['Income', 'Expense'],
          example: 'Expense',
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
const endpointsFiles = ['./interfaces/routes/transactionRouter.js'];

swaggerAutogen({ openapi: '3.0.0' })(outputFile, endpointsFiles, doc).then(async () => {
  await import('./server.js');
});
