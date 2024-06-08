import * as schema from '@/seed/schema';
import { users } from '@/seed/schema';

import postgres from 'postgres';
import {eq , and} from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/postgres-js'
// let postgres = require('postgres');
import  {comparehashes} from "@/bcrypt"
export async function getUserFromDb(email: string, password: string){
    // logic to get user from db
    const connectionString = process.env.DATABASE_URL as string
    const client = postgres(connectionString, { prepare: false, ssl: { rejectUnauthorized: false } });
    const db = await drizzle(client, { schema });
    let user = await db.select().from(users).where(and(eq(users.email, email))).limit(1);
    if(user.length==0){
        return null;
    }
    //@ts-ignore
    
    let ishim = await comparehashes(password,user[0].password)
    if(!ishim)
    {
        return null
    }
    return user[0]||null;
}
  