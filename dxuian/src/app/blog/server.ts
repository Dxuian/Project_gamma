"use server"
import { createClient  as backendclient} from '@/utils/supabase/server'
import { redirect } from 'next/navigation'



export async function signUpNewUser(prevstate:any , formData:FormData) {
    const supabaseback = await  backendclient()
    const email = String(formData.get('email'));
    const password = String(formData.get('password'));
    const fname = String(formData.get('fname'));
    const lname = String(formData.get('lname'));
    debugger ; 
    console.log(`email, password, fname, lname are ${email}, ${password}, ${fname}, ${lname}`)
    var data  , error ;
    try {
        ({ data, error } = await supabaseback.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    fname: fname,
                    lname: lname,
                },
            },
        }));
        if (error) {
          throw error;
      }
    }
    catch (error) {
        return { message: (error as Error).message };
    }
    
    console.log(data, error) 
    redirect("/blog/signin")
    return {message : "Success"}
  }

export async function getblogs(count:number){
    //return count - 10 last posts 
    // return stuff
    await new Promise(resolve => setTimeout(resolve, 8000));
    let x = ["lmao","lmao","lmao","lmao","lmao","lmao","lmao","lmao",]
    return [...x, ...x, ...x, ...x, ...x, ...x, ...x, ...x];
}

