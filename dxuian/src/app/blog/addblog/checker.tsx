"use server"
import { redirect } from 'next/navigation';
import { fileupload } from '@/app/client';
import sharp from 'sharp';

import z from "zod";

let schemaforform = z.object({
  title: z.string().min(1).max(20).optional(),
  content: z.string().min(1).max(300),
  file: z.any().refine((file) => file?.size <= 800000, `Max image size is 5MB.`).refine((file) => ["image/jpeg", "image/jpg", "image/png", "image/webp", "image/bmp"].includes(file?.type), "Only .jpg, .jpeg, .png and .webp formats are supported.")
})


import * as schema from '@/seed/schema';
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { posts } from '@/seed/schema';
async function savetodb(content: string, title: string, username: string, id: string, timestamp: any, filename?: string) {
  const connectionString = process.env.DATABASE_URL as string
  const client = postgres(connectionString, { prepare: false, ssl: { rejectUnauthorized: false } });
  const db = await drizzle(client, { schema });
  let x = await db.insert(posts).values({ by: username, uuid: id, title: title, content: content, timestamp: BigInt(timestamp), filename: filename }).returning({ timstamp: posts.timestamp });
  let p = 1;
}


async function savetofs(filesss: any, filename: string, supabase: any) {
  if (filesss) {
    try {
      fileupload(filesss, filename, supabase);
    }
    catch (error) {
      console.error('Error saving the file:', error);
      return { message: `Error saving the file: ${(error as Error)?.message}` }
    }
  }
}

import { createClient as backend } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache';
export default async function test(prevstate: any, e: FormData) {
  let supabase = await backend()
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    return { message: `Error getting user: ${error.message}. Please contact admin` };
  }

  let result = schemaforform.safeParse({
    title: e.get('title'),
    content: e.get('content'),
    file: e.get('file'),
  });
  if (result.success) {
    // console.log('Form data is valid');
  }
  else {
    return { message: `Form data is invalid: ${JSON.parse(result.error.message)[0].message}` };
  }
  
  let id = data?.user.id;
  let fname: string = data?.user?.user_metadata.fname
  let lname: string = data?.user?.user_metadata.lname || " ";
  let username: string = `${fname} ${lname}`;
  if(data.user.app_metadata.provider=="google")
  {
      username = data.user.user_metadata.full_name;
  }
  const content = e.get('content'); // get the value of the textarea with the name "content"
  let title = e.get('title'); // get the value of the textarea with the name "content"
  let filesss: any = e.get('file');
  let timestamp = Date.now();
  let separator = process.env.SEPARATOR as string;
  let filename : any  = "" ;
  if (filesss) {
  const buffer = await filesss.arrayBuffer();
  const metadata = await sharp(Buffer.from(buffer)).metadata();
  let imageWidth: any = metadata.width;
  let imageHeight: any = metadata.height;
  filename = filesss ? `${id}${separator}${timestamp}${separator}${imageHeight}${separator}${imageWidth}${separator}${filesss["name"]}` : null;
  !filesss ? filesss :await savetofs(filesss as any, filename as string, supabase as any);
  }
  
  try {
    if(!filesss)
    {
        filename = null;
    }
    !filesss ? await savetodb(content as string, title as string, username as string, id as string, timestamp) :await savetodb(content as string, title as string, username as string, id as string, timestamp, filename as string);
  }
  catch (error) {
    console.error('Error saving the file:', error);
    return { message: `Error saving the file: ${(error as Error)?.message}` }
  }
  console.log("ASdasd");
  revalidatePath("/blog")
  redirect("/blog")
  return { message: 'Success' };
  // console.log(e.keys()); // Log the keys of the FormData
}

