"use server"
import 'server-only';

import Script from 'next/script'
import  {Page}  from '@/app/test/page'
import * as schema from '@/seed/schema';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { posts } from '@/seed/schema';
import { desc, eq } from 'drizzle-orm';
export async function fetchblogs() {
  try {
    const connectionString = process.env.DATABASE_URL as string
    
    if (!connectionString) {
      console.error('DATABASE_URL is not set');
      return [];
    }

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
      .where(eq(posts.hidden, false))
      .orderBy(desc(posts.timestamp));

    // let supabase = await createClient();
    for (let x of result) {
      if (x.filename) {
        let temp = x.filename.split(process.env.SEPARATOR as string)
        x.filenameforalt = temp[4];
        x.h = temp[2];
        x.w = temp[3];
        console.log(x.filenameforalt)
        // const { data, error } = await supabase.storage.from('portfolioblog').createSignedUrl(x.filename, Number(process.env.IMGTIMEOUT) as number)
        let link  =`https://jsiydmlmywbrdnwjwwik.supabase.co/storage/v1/object/public/portfolioblog/${x.filename}`
        x.filename = link

        // let starttime = new Date().getTime();
        // let response =  await (fetch(link))
        // response = await response


        // let endtime = new Date().getTime();
        // console.log("Time taken for fetching image: ", endtime - starttime, "ms")
        // console.log(data?.signedUrl)
        //@ts-ignore
        // if ((await response)?.statusCode =="404")
        //   {

        //   }
        // else {
        //   x.filename = "skeletonimg.jpg"
        //   x.filenameforalt = "error loading image"
        // }
      }
    }
    return result;
  } catch (error) {
    console.error('Error fetching blogs from database:', error);
    console.error('This usually happens when:');
    console.error('1. DATABASE_URL environment variable is not set');
    console.error('2. Database credentials are invalid or expired');
    console.error('3. Supabase account has run out of credits');
    return [];
  }
}


export default  async function Blogsser({component}: {component: any}) {
  let blogs: any = await  fetchblogs();

  return (
      <div id="bloglist" className='!w-full'>
        {blogs.length === 0 ? (
          <div className="w-full h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Blog Unavailable
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
                The blog service is currently unavailable
              </p>
              <p className="text-md text-gray-500 dark:text-gray-500">
No money for supabase recharge your creds lol.
              </p>
              <p className="text-sm text-gray-400 dark:text-gray-600 mt-4">
                add money 
              </p>
              <a 
                href="/" 
                className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Back to Portfolio
              </a>
            </div>
          </div>
        ) : (
          <>
            <Page blogslist={blogs} component={component}/> 
            <Script src="lazysizes.min.js" strategy="lazyOnload" />
          </>
        )}
      </div>
  );
}




