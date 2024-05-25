import { defineConfig } from 'drizzle-kit';
import process from 'process';

export default defineConfig({
  schema: './src/seed/schema.tsx',
  out: './src/seed/migrations',
  dialect: 'postgresql', // 'postgresql' | 'mysql' | 'sqlite'
  dbCredentials: {
    host: process.env.DB_HOST as string,
    user: process.env.DB_USER as string,
    password: process.env.DB_PASSWORD as string,
    database: process.env.DB_NAME as string,
  },
});