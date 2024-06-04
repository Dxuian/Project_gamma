import 'dotenv/config'
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { migrate } from 'drizzle-orm/postgres-js/migrator'

const connectionString = process.env.DATABASE_URL as string 
// console.log(connectionString + " is the connection string")

// Disable prefetch as it is not supported for "Transaction" pool mode
export const client = postgres(connectionString, {prepare: false,ssl: {rejectUnauthorized: false}});
export const db = drizzle(client);

const main = async () => {
  try {
    console.log("Starting migration")
    await migrate(db, { migrationsFolder: "./src/seed/migrations" });
    console.log("Migration completed");
} catch (error) {
    console.error("Error during migration:", error);
    process.exit(1);
}
process.exit(0);
return ;
};

main();