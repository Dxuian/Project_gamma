import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
// import { users } from './schema'

const connectionString : any = process.env.DATABASE_URL

// Disable prefetch as it is not supported for "Transaction" pool mode
const client = postgres(connectionString, { prepare: false })
const db = drizzle(client);

// async function fetchUsers() {
//   const allUsers = await db.select().from(users);
//   // do something with allUsers
// }
// fetchUsers();