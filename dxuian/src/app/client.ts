"use server"
import { createClient  as backendclient} from '@/utils/supabase/server'
// import { createClient  as frontend} from '@/utils/supabase/client'
import { redirect } from 'next/navigation'

export async function signin(prevstate:any , formData:FormData) {
    // debugger ; 
    const supaback =  await backendclient()
    let email = String(formData.get('email'));
    let password = String(formData.get('password'));
    let data , error;
    // debugger;
    // console.log(`email, password are ${email}, ${password}`)
    try {
      ({ data, error } = await supaback.auth.signInWithPassword({
        email: email,
        password: password,
      }));
    } catch (e) {
      console.log(e);
      return { message: (e as Error).message };
    }

    let session = await supaback.auth.getSession();
    // let session = await supabaseback.auth.getSession();
    let access_token = session?.data.session?.access_token as string;
    let refresh_token = session?.data.session?.refresh_token as string;
    const sessionRes = await supaback.auth.setSession({
        access_token,
        refresh_token,
      });
    
    console.log("logged in !!!!!!")
    await redirect("/blog/addblog")
    return {message : "Success"}
}
export const gotoblog = () =>{()=>{redirect("/blog")}}

export async function signout() {
  const supaback = await backendclient()
  // debugger;
     const { error } = await supaback.auth.signOut()    // await supabaseback.auth.signOut();
    console.log("logged out !!!!!!")
    redirect("/blog/signin")
}


export default async function isusersignin() {
  const supaback = await backendclient()
  const { data: { user } } = await supaback.auth.getUser() 
   if (user) {
     return true;
   }
   return false ;
}


// import { createClient } from '@supabase/supabase-js'
export async function fileupload(file:Buffer ,  filename:string , supabase:any)
{
    // Create Supabase client
    // let isusersignissn = await isusersignin() ;
    // const supabase = await createClient(process.env.NEXT_PUBLIC_SUPABASE_URL as string ,process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string)
    uploadFile(file,filename,supabase)
    // Upload file using standard upload
}
// import { createClient } from '@supabase/supabase-js'
async function uploadFile(file:Buffer,filename:string ,  supabase:any) {
  let data ,  error;
  // ( { data , error } = await supabase.storage.getBucket('portfolioblog')) ;
  // ( { data, error } = await supabase.storage.createBucket('avatars', {public: false,allowedMimeTypes: ['image/*'],fileSizeLimit: 10000000,}) )
  ( { data, error } = await supabase.storage.from('portfolioblog').upload(`${filename}`, file ))
  if (error) {
    // Handle error
    console.log("Eroor")
    // console.log('Error uploading file:', error.message)
    throw error
    
  } else {
    // Handle success
    console.log("Success")
  }
}


export async function singinwithgooggle(prevstate:any , formData:FormData) {
  debugger ;
  const supabase = await backendclient()
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: getURL(),
    }
  })
  if (error)
  {
    return {message : "An error occured while signing in with google. Please try again later."}
  }
  // const { error, data } = await supabase.auth.api.exchangeCodeForSession('your-auth-code')
  if (data.url)
  {
    // return {message : "Success"}
    redirect(data.url as string)
  }
  return {message : "Success"}
}


const getURL = () => {
  let url =
    process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
    process?.env?.NEXT_PUBLIC_VERCEL_URL ??  // Automatically set by Vercel.
    process?.env?.DXU_URL ??
    'http://localhost:3000/blog'
  // Make sure to include `https://` when not localhost.
  url = url.includes('http') ? url : `https://${url}`
  // Make sure to include a trailing `/`.
  url = url.charAt(url.length - 1) === '/' ? url : `${url}/`
  return url
}
