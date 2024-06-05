"use client"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { signin  } from "@/app/client";
import { useFormState, useFormStatus } from "react-dom";

let signinitialState = {
    message:""
  };
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils"
import {IconBrandGoogle} from "@tabler/icons-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { signUpNewUser } from "./server";
import { ButtonOutline } from "@/app/blog/staticcom";









export var initialState = {
    message : ""
  }
export default  function Signinaltdialogbox() {
    let [state, setter] = useState(false)
    let [isopen, setopen] = useState(false)
    return (<>
        <Dialog open={isopen}  onOpenChange={() => {
            if (isopen == false) {
                if(state == false)
                {
                    window.history.pushState({}, "", "/blog/signin");
                }
                setopen(true)
            }
            if (isopen == true ) {
                window.history.pushState({}, "", "/blog");
                setopen(false)
            }
            if (state == true) {
                setter(false)   
                return ;
            }
        }}>
            <DialogTrigger className="">
                <span id="clicker" >Add blog</span>
            </DialogTrigger>
            <DialogContent>
               {state == false  ? <Signinform setter={setter}/> : <Signupform />}
            </DialogContent>
        </Dialog>
    </>
    )
}


let signinitialStategoogle :any  = {
  message:""
}


function Submitgoogle() {
  const { pending } = useFormStatus();
  const [state, setState] = useState(false);

  useEffect(() => {
    if (pending) {
      setState(true);
      debugger;
    }
  }, [pending]);
  debugger;

  return (
    <button type="submit" className="btn gap-2 bg-gray-5 !w-full">
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 48 48" enableBackground="new 0 0 48 48" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657        C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36        c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
        <path
          fill="#1976D2"
          d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
            c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
        ></path>
      </svg>
      <span className="pt-1">
        Sign up with Google &nbsp;
        {(pending || state) &&   <span className="inline-flex items-center">

<span className="inline-block ml-2">
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="w-4 h-4 text-gray-300 animate-spin">
    <path d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" className="text-gray-900"></path>
  </svg>
</span>
</span> }
      </span>
    </button>
  );
}



function Singinnormal(){
  let { pending } = useFormStatus();
  // let [state,setter] = useState(pending)
  return(<button type="submit" className="btn btn-primary w-full">Sign in {pending ? <span className="loading loading-spinner text-warning"></span>  : null}</button>)
}

let actiongoogle = async () => {
  debugger ; 
  const supabase = await frontendclient();
  await supabase.auth.signInWithOAuth({
    provider:"google",
    options: {
      redirectTo: `${location.origin}/auth/callback`,
    },
  })      
}


import { useRouter } from "next/navigation";
// import {useEffect} from "react";
import { createClient as frontendclient } from "@/utils/supabase/client";
 function Signinform({setter}:{setter:any}) {
    let [state , action ] = useFormState(signin, signinitialState)


    return (
    <div id="sif">
      <div className="mx-auto flex w-full max-w-lg flex-col rounded-xl border border-border bg-backgroundSecondary p-4 sm:p-20">
    <div className="flex w-full flex-col gap-2">
      <p>Sign in with</p>
      <div className="flex w-full flex-col gap-2">
        <form action={actiongoogle}>
          <Submitgoogle></Submitgoogle>
        </form>
      </div>
    </div>
    <form action={action}>
    <div className="divider my-6 text-xs text-content2">or continue with</div>
  
    <div className="form-group">
      <div className="form-field">
        <label className="form-label">Email address</label>
  
        <input placeholder="Type here" type="email" name="email" className="input max-w-full" />
        <label className="form-label">
          <span className="form-label-alt">Please enter a valid email.</span>
        </label>
      </div>
      <div className="form-field">
        <label className="form-label">
          <span>Password</span>
        </label>
        <div className="form-control">
          <input placeholder="Type here" type="password" name="password" className="input max-w-full" />
        </div>
      </div>
      {state?.message}
      <div className="form-field">
        <div className="form-control justify-between">
          <div className="flex gap-2">
            <input type="checkbox" className="checkbox" />
            <a href="#">Remember me</a>
          </div>
          <label className="form-label">
            <a className="link link-underline-hover link-primary text-sm">Forgot your password?</a>
          </label>
        </div>
      </div>
      <div className="form-field pt-5">
        <div className="form-control justify-between">
          <Singinnormal />
        </div>
      </div>
  
      <div className="form-field">
        <div className="form-control">
          <span  id="signupopener" className="link link-underline-hover link-primary text-sm" onClick={()=>{setter(true)}} >Don&apos;t have an account? 
          <span className="underlined" >
            &nbsp; Sign up
            </ span>
            </span>
        </div>
      </div>
    </div>
  </form>
  </div>
  </div>)
}    








function Singupsubmit(){
  let {pending} = useFormStatus();
  return (<Button type="submit" className="w-full ">
  Create an account {pending ? <span className="loading loading-spinner text-warning"></span>  : null}
</Button>)
}

export  function Signupform() {
  var [state , action] =  useFormState(signUpNewUser,initialState)
  // window.history.pushState({}, "", "/blog/signup");
  let actiongoogle = async () => {
    debugger ; 
    const supabase = await frontendclient();
    await supabase.auth.signInWithOAuth({
      provider:"google",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    })      
  }
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        
        <div className="grid gap-4">
        <form action={action}>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">First name</Label>
              <Input id="first-name" placeholder="Max" name="fname" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input id="last-name" placeholder="Robinson" name="lname" required />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              name="email"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password" >Password</Label>
            <Input id="password" name="password" type="password" />
          </div>
          <br></br>
          <Singupsubmit />
          {state?.message}
          </form>
          <Button onClick={actiongoogle}  variant="outline" className="w-full ">
          <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" /> &nbsp; &nbsp;   Sign in with Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          
        </div>
      </CardContent>
    </Card>
  )
}




import { usePathname } from 'next/navigation'
import  Link  from 'next/link'
export   function Redirecttaddblog({className}:{className:string}) {
  const router = usePathname();
  if (router == "/blog/addblog") {
    return (<></>)
  }  
  return (<Link id="hider" href="/blog/addblog" className="px-4" ><button >redirectbtn</button></Link>)
  
}



import { signout } from "@/app/client"
export function Clicomp({className}:{className:string}){

  console.log("ok giving signouts")
  return (
    <form action={signout}>
            <button   type="submit" className="!text-lg !text-blue-500 !font-semibold !bg-gray-100 !p-4 rounded shadow-lg !px-4">Sign out toh krle</button>
    </form>
  )
}