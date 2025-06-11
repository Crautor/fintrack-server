import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    version: '1.0.0',
    title: 'Tecnologias Emergentes',
    description: 'Documentação da API criada em sala',
  },
  servers: [
    {
      url: 'http://localhost:3005/',
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
      Saving: {
        type: 'object',
        properties: {
          savingId: {
            type: 'integer',
            example: 1,
          },
          userId: {
            type: 'integer',
            example: 123,
          },
          value: {
            type: 'number',
            format: 'float',
            example: 1500.5,
          },
          financialGoalId: {
            type: 'integer',
            example: 10,
          },
          description: {
            type: 'string',
            example: 'Poupança para férias',
            nullable: true,
          },
          title: {
            type: 'string',
            example: 'Férias 2025',
            nullable: true,
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

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  import('./server.js');
});
