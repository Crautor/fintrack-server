import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    version: '1.0.0',
    title: 'Tecnologias Emergentes',
    description: 'Documentação da API criada em sala',
  },
  servers: [
    {
      url: 'http://localhost:3004/',
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
          id: { type: 'integer', example: 1 },
          name: { type: 'string', example: 'João Silva' },
          phone: { type: 'string', nullable: true, example: '11999999999' },
          birthdate: { type: 'string', format: 'date', nullable: true, example: '1990-01-01' },
          email: { type: 'string', format: 'email', example: 'joao@example.com' },
          password: { type: 'string', example: 'SenhaForte123' },
          recoveryCode: { type: 'string', nullable: true, example: 'ABC123' },
          recoveryExpires: { type: 'string', format: 'date-time', nullable: true, example: '2025-06-10T15:00:00Z' },
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
