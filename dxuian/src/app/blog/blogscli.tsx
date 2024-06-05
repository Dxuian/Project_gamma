"use server"
import 'server-only';

import SuspenseImage from "@/app/blog/bi"
import Script from 'next/script'
import { Suspense } from 'react';
import  {Page}  from '@/app/test/page'
import * as schema from '@/seed/schema';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { posts } from '@/seed/schema';
import { desc } from 'drizzle-orm';
import { createClient } from '@/utils/supabase/server';
export async function fetchblogs() {
  const connectionString = process.env.DATABASE_URL as string
  const client = postgres(connectionString, { prepare: false, ssl: { rejectUnauthorized: false } });
  const db = await drizzle(client, { schema });
  let result: { by: string; title: string | null; content: string; filename: any; timestamp: bigint; filenameforalt?: string ; h?:any ; w?:any }[] = await db.select({
    by: posts.by,
    title: posts.title,
    content: posts.content,
    filename: posts.filename,
    timestamp: posts.timestamp
  })
    .from(posts)
    .orderBy(desc(posts.timestamp));
  let supabase = await createClient();
  for (let x of result) {
    if (x.filename) {
      let temp = x.filename.split(process.env.SEPARATOR as string)
      x.filenameforalt = temp[4];
      x.h = temp[2];
      x.w = temp[3];
      console.log(x.filenameforalt)
      const { data, error } = await supabase.storage.from('portfolioblog').createSignedUrl(x.filename, Number(process.env.IMGTIMEOUT) as number)
      if (data) {
        x.filename = data.signedUrl
      }
      else {
        x.filename = "skeletonimg.jpg"
        x.filenameforalt = "error loading image"
      }
    }
  }
  return result;
}


export default  async function Blogsser({component}: {component: any}) {
  let blogs: any = await fetchblogs();
  if (blogs.length == 0) {
    return <>None yet!!</>
  }
  return (
      <div id="bloglist" className='!w-full'>
       <Page blogslist={blogs} component={component}/> 
       <Script src="lazysizes.min.js" strategy="lazyOnload" />
      </div>
  );

}




