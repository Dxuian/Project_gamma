"use server"
import 'server-only'
import { createClient as backendclient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

import { saltAndHashPassword } from "@/bcrypt"




import * as schema from '@/seed/schema';
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { users } from '@/seed/schema';

import { eq } from 'drizzle-orm';
import { error } from 'console'
async function savetodb(username: string, email: string, password: string) {

    const connectionString = process.env.DATABASE_URL as string
    const client = postgres(connectionString, { prepare: false, ssl: { rejectUnauthorized: false } });
    const db = await drizzle(client, { schema });
    let existingUser: any = await db.select().from(users).where(eq(users.email, email)).limit(1);

    if (existingUser.length > 0) {
        throw error("email already exists")
    }

    let hashedPassword = await saltAndHashPassword(password)
    let x  =  await db.insert(users).values({ name: username, email: email  , password: hashedPassword })
    return "success"
}

import { object, string } from "zod"
 const Signupschema = object({
    email: string({ required_error: "Email is required" })
      .min(1, "Email is required")
      .email("Invalid email"),
    password: string({ required_error: "Password is required" })
      .min(1, "Password is required")
      .min(6, "Password must be more than 6 characters")
      .max(32, "Password must be less than 32 characters"),
    fname: string({ required_error: "First name is required" })
        .min(1, "First name is required"),
    lname: string().optional()
  })
  
  
export async function signUpNewUser(prevstate: any, formData: FormData) {
    const supabaseback = await backendclient()
    const email = String(formData.get('email'));
    const password = String(formData.get('password'));
    const fname = String(formData.get('fname'));
    const lname = String(formData.get('lname'));
    const username = `${fname} ${lname}`
    var data, error;

    let result = Signupschema.safeParse({
        email: email,
        password: password,
        fname: fname,
        lname: lname
      });
    
      if(!result.success) {
        return { message: `Form data is invalid: ${JSON.parse(result.error.message)[0].message}` };
      }
    try {
        let x = savetodb(username, email, password)
    }
    catch (error) {
        return { message: (error as Error).message };
    }

    console.log(data, error)
    redirect("/blog/signin")
    return { message: "Success" }
}











