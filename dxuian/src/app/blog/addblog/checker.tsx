"use server"


import fs from 'fs/promises';
import { redirect } from 'next/navigation';
import path from 'path';
import { fileupload } from '@/app/client';
import z from "zod" ;





let schemaforform = z.object({
  title: z.string().min(1).max(20).optional(),
  content: z.string().min(1).max(300),
  file: z.any().refine((file) => file?.size <= 800000, `Max image size is 5MB.`).refine((file) => ["image/jpeg", "image/jpg", "image/png", "image/webp",  "image/bmp"].includes(file?.type),"Only .jpg, .jpeg, .png and .webp formats are supported.")
})


import * as schema  from '@/seed/schema';
import { drizzle  } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { posts } from '@/seed/schema';
async function savetodb(content:string , title:string ,  username : string  , id : string, timestamp : any   , filename ?: string ) {
  const connectionString = process.env.DATABASE_URL as string 
  const client = postgres(connectionString, {prepare: false,ssl: {rejectUnauthorized: false}});
  const db = await drizzle(client, { schema });
  let x  = await db.insert(posts).values({ by: username, uuid: id, title: title, content: content,timestamp:BigInt(timestamp)  , filename: filename }).returning({ timstamp: posts.timestamp });
  let p =  1 ;
}


async function savetofs(filesss: any ,  filename: string , supabase : any) {

  if (filesss) {
    // Get the file details
    try {
      fileupload(filesss , filename , supabase );
    } 
    catch (error) {
      console.error('Error saving the file:', error);
      return {message:`Error saving the file: ${(error as Error)?.message}`}
    }
  } 

}

import { createClient  as backend} from '@/utils/supabase/server'
// import { connect } from 'http2';
export default async function test(prevstate:any,e: FormData) {
  //validate with schemaform
  let result = schemaforform.safeParse({
    title: e.get('title'),
    content: e.get('content'),
    file: e.get('file'),
  });
  if (result.success) {
    console.log('Form data is valid');
  } 
  else {
    return {message:`Form data is invalid: ${JSON.parse(result.error.message)[0].message}`};
  }
  let supabase = await backend()
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    return { message: `Error getting user: ${error.message}. Please contact admin` };
  }

  let id = data?.user.id;
  let username = "paul" ; 
  const content = e.get('content'); // get the value of the textarea with the name "content"
  let title = e.get('title'); // get the value of the textarea with the name "content"
  let filesss : any  = e.get('file');
let timestamp = Date.now();
let filename  = filesss ? `${id}/${filesss["name"]}/${timestamp}` : null;
try{
  !filesss ? filesss : savetofs(filesss as any , filename as string , supabase as any); 
  !filesss ? savetodb(content as string , title as string , username as string  , id as string , timestamp): savetodb(content as string , title as string , username as string  , id as string, timestamp  ,  filename as string  ); 
}
catch (error) {
  console.error('Error saving the file:', error);
  return {message:`Error saving the file: ${(error as Error)?.message}`}
}
console.log("ASdasd") ;
  redirect("/blog")
  return {message:'Success'};
  // console.log(e.keys()); // Log the keys of the FormData
}

