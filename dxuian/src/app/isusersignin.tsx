"use server"
import { createClient } from '@supabase/supabase-js'

export default async function  isusersignin(){
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL as string, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string)

    const user = await  supabase.auth.getUser()
    // const session = await supabase.auth.getSession()
    var popl ;
    if (!user.error) {
      // User is signed in
      return true
      // popl =   (<div>SIGNED_IN</div>)
    } else {
      // User is not signed in
      return false ;
      // popl =  (<div>SIGNED_OUT</div>)
    }
    return false  ; 
}