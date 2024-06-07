import { NextRequest ,  NextResponse } from "next/server";
export const dynamic = 'force-dynamic' // defaults to auto

async function deldb() {
    const connectionString = process.env.DATABASE_URL as string
    const client = postgres(connectionString, { prepare: false, ssl: { rejectUnauthorized: false } });
    const db = await drizzle(client, { schema });
    let x = await db.delete(addordel);
    return x
}
async function dbaddndelete(){
    let x =  await finddb() ; 
    if (!x)
    {
        console.log("adding")
      let z =  await  savetodb()
       return 'saved'
    }
    else{
        console.log("deleting")
       let y  = await  deldb()
       return 'deleted'
    }
}
export async function GET(request: NextRequest) {
    //check if request has a authorization header 
    console.log("hello")
    if(request.headers.get("authorization")){
        if (request.headers.get("authorization") == process.env.CRONJOBKEY  ){
           let x  = await dbaddndelete()
           return NextResponse.json({ message: `Successfully ${x}` }, { status: 200 })
        }
    }
    return NextResponse.json({ error: 'Youre not him' }, { status: 500 })
}



export async function finddb() {
    const connectionString = process.env.DATABASE_URL as string
    const client = postgres(connectionString, { prepare: false, ssl: { rejectUnauthorized: false } });
    const db = await drizzle(client, { schema });
    let result: { string?: string  ; timestamp ?: string}[] = await db.select({
      string: addordel.string,
      when: addordel.when
    }).from(addordel)

    if (result.length == 0) {
      return false 
    }
    
    return true;
  }


import * as schema from '@/seed/schema';
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { addordel } from '@/seed/schema';
async function savetodb() {
  const connectionString = process.env.DATABASE_URL as string
  const client = postgres(connectionString, { prepare: false, ssl: { rejectUnauthorized: false } });
  const db = await drizzle(client, { schema });
  let x = await db.insert(addordel).values({ string : "added" , when:`${(new Date).toLocaleDateString()} ${(new Date).toLocaleTimeString() }` });
}