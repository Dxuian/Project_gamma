"use server"
import { createClient } from '@supabase/supabase-js'
import { redirect } from 'next/navigation'


const supabaseUrl = String(process.env.NEXT_PUBLIC_SUPABASE_URL)

const supabaseAnonKey = String(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

const supabase = createClient(supabaseUrl, supabaseAnonKey)


export async function signUpNewUser(prevstate:any , formData:FormData) {
    const email = String(formData.get('email'));
    const password = String(formData.get('pwd'));
    const fname = String(formData.get('fname'));
    const lname = String(formData.get('lname'));
  
    console.log(`email, password, fname, lname are ${email}, ${password}, ${fname}, ${lname}`)
    var data  , error ;
    try {
        ({ data, error } = await supabase.auth.signUp({
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