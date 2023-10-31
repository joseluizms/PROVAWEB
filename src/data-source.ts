// data-source.ts
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Product } from "./entity/Product";

const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'database.sqlite',
  synchronize: false,
  logging: true,
  entities: [Product],
  migrations: [],
  subscribers: [],
});

export async function initializeDataSource() {
  try {
    await AppDataSource.initialize();
    console.log('Data Source has been initialized!');
  } catch (err) {
    console.error('Error during Data Source initialization', err);
  }
}

export { AppDataSource };
