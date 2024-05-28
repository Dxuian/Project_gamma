import { createClient  as frontendclient} from '@/utils/supabase/client'
import { redirect } from 'next/navigation'



const supabasefront = frontendclient()

export async function signUpNewUser(prevstate:any , formData:FormData) {
    const email = String(formData.get('email'));
    const password = String(formData.get('password'));
    const fname = String(formData.get('fname'));
    const lname = String(formData.get('lname'));
  
    console.log(`email, password, fname, lname are ${email}, ${password}, ${fname}, ${lname}`)
    var data  , error ;
    try {
        ({ data, error } = await supabasefront.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    fname: fname,
                    lname: lname,
                },
            },
        }));
    } catch (error) {
        return { message: (error as Error).message };
    }
    
    console.log(data, error) 
    redirect("/blog/signin")
    return {message : "Success"}
  }


export async function signin(prevstate:any , formData:FormData) {
    let email = String(formData.get('email'));
    let password = String(formData.get('password'));
    let data , error;
    debugger;
    console.log(`email, password are ${email}, ${password}`)
    try {
      ({ data, error } = await supabasefront.auth.signInWithPassword({
        email: email,
        password: password,
      }));
    } catch (e) {
      console.log(e);
      return { message: (e as Error).message };
    }
    
    console.log(data, error);
    
    // Add a delay before calling getSession
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    let session = await supabasefront.auth.getSession();
    // let session = await supabaseback.auth.getSession();
    let access_token = session?.data.session?.access_token as string;
    let refresh_token = session?.data.session?.refresh_token as string;
    

    console.log("logged in !!!!!!")
    await redirect("/blog/addblog")
    return {message : "Success"}
  }
  

export async function signout() {
  debugger;
     const { error } = await supabasefront.auth.signOut()    // await supabaseback.auth.signOut();
    console.log("logged out !!!!!!")
    await redirect("/blog/signin")
}
