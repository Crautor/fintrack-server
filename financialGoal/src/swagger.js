import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    version: '1.0.0',
    title: 'Tecnologias Emergentes',
    description: 'Documentação da API criada em sala',
  },
  servers: [
    {
      url: 'http://localhost:3001/',
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
      FinancialGoal: {
        type: 'object',
        properties: {
          financialGoalId: {
            type: 'integer',
            example: 1,
          },
          userId: {
            type: 'integer',
            example: 1,
          },
          value: {
            type: 'number',
            example: 1000.0,
          },
          limitDate: {
            type: 'string',
            format: 'date-time',
            example: '2023-12-31',
          },
          status: {
            type: 'string',
            enum: ['Aberto', 'Em_Andamento', 'Expirado', 'Concluido'],
            example: 'Aberto',
          },
          title: {
            type: 'string',
            example: 'Viagem de Férias',
          },
          description: {
            nullable: true,
            type: 'string',
            example: 'Economizar para uma viagem de férias em família.',
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
const endpointsFiles = ['./interfaces/routes/financialGoalRouter.js'];

swaggerAutogen({ openapi: '3.0.0' })(outputFile, endpointsFiles, doc).then(async () => {
  await import('./server.js');
});
