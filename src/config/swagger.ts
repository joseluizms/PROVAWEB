// config/swagger.ts
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

export function setupSwagger(app) {
    const swaggerOptions = {
        definition: {
            openapi: '3.0.0',
            info: {
                title: 'Minha API',
                version: '1.0.0',
                description: 'Documentação da API de Produtos',
            },
            servers: [
                {
                    url: 'http://localhost:3000',
                },
            ],
        },
        apis: ['./src/*.ts', './src/entity/*.yml'],
    };

    const swaggerDocs = swaggerJsdoc(swaggerOptions);
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
}
