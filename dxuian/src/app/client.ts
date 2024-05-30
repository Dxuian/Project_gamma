"use server"
// import { createClient  as frontendclient} from '@/utils/supabase/client'
import { createClient  as backendclient} from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
export async function signin(prevstate:any , formData:FormData) {
    debugger ; 
    const supaback =  await backendclient()
    let email = String(formData.get('email'));
    let password = String(formData.get('password'));
    let data , error;
    debugger;
    console.log(`email, password are ${email}, ${password}`)
    try {
      ({ data, error } = await supaback.auth.signInWithPassword({
        email: email,
        password: password,
      }));
    } catch (e) {
      console.log(e);
      return { message: (e as Error).message };
    }
    
    console.log(data, error);
    
    // Add a delay before calling getSession
    
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
  
export async function signout() {
  const supaback = await backendclient()
  debugger;
     const { error } = await supaback.auth.signOut()    // await supabaseback.auth.signOut();
    console.log("logged out !!!!!!")
    redirect("/blog/signin")
}


export default async function isusersignin() {
  const supaback = await backendclient()
  const {data} = await supaback.auth.getSession();
  // debugger;
   if (data?.session) {
     return true;
   }
   return false ;
}


// import { createClient } from '@supabase/supabase-js'
export async function fileupload(file:Buffer)
{

    // Create Supabase client
    const supabase = backendclient()
    uploadFile(file,supabase)
    // Upload file using standard upload
    

}

async function uploadFile(file:Buffer, supabase:any) {
  const { data, error } = await supabase.storage.from('bucket_name').upload('/', file ,   {contentType: 'image/*'})
  if (error) {
    // Handle error
    console.log("Eroor")
  } else {
    // Handle success
    console.log("Success")
  }
}