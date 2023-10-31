// index.ts
import express from 'express';
import { setupSwagger } from './config/swagger';
import { setupRoutes } from './routes/app';
import { initializeDataSource } from './data-source';

const app = express();
const port = 3000;

app.use(express.json());

setupSwagger(app);
setupRoutes(app);

initializeDataSource()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server started on http://localhost:${port}`);
        });
    })
    .catch((err) => {
        console.error('Error during Data Source initialization', err);
    });
