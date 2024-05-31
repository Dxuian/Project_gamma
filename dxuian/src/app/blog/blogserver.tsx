'use server'




import * as schema  from '@/seed/schema';
import { drizzle  } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { posts } from '@/seed/schema';
import {  desc } from 'drizzle-orm';
export async function getblogs(count:number){
    //return count - 10 last posts 
    // return stuff
    const connectionString = process.env.DATABASE_URL as string 
    const client = postgres(connectionString, {prepare: false,ssl: {rejectUnauthorized: false}});
    const db = await drizzle(client, { schema });
    // const res  =  await db.select().from(posts).orderBy(desc(posts.timestamp)).limit(count);

    // const { data, error } = await supabase.storage.from('avatars').createSignedUrl('folder/avatar1.png', 60) 
    return ["asdasdasd" , "asdasd" , "dadadad", "asdasd" , "dadadad", "asdasd" , "dadadad", "asdasd" , "dadadad"];

}

export default async function BlogsData({count}:{count:number}) {
  const blogs = await getblogs(count);
  // const blogs =  ["Asdadsasd" ,"asdasd"]
  return (
    <div id="bloglist">
      <span className="!text-5xl">
        {blogs.map((blog) => (
          <div>
            <h2>{blog}</h2>
          </div>
        ))}
      </span>
    </div>
  );
}