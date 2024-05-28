import { createClient  as frontendclient} from '@/utils/supabase/client'
// import { createClient  as backendclient} from '@/utils/supabase/server'

export default async function  isusersignin(){
    const supabasefront = frontendclient()
    // const supabaseback = frontendclient()

    const user = await  supabasefront.auth.getUser()
    // const userback = await  supabasefront.auth.getUser()
    debugger ; 
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