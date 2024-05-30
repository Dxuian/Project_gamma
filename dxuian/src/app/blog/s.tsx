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
import { useState } from "react"
import { signin } from "@/app/client";
import { useFormState } from "react-dom";

let signinitialState = {
    message:""
  };
  import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils"
import {
  IconBrandGoogle,
} from "@tabler/icons-react";
// import { signUpNewUser } from "../server";
// import { useFormState } from "react-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { signUpNewUser } from "./server";
import { ButtonOutline } from "@/app/blog/staticcom";






var initialState = {
    message : ""
  }





export default  function Blogpage() {
    let [state, setter] = useState(false)
    let [isopen, setopen] = useState(false)
    return (<>
        <Dialog open={isopen}  onOpenChange={() => {
            // debugger;
            if (isopen == false) {
                if(state == false)
                {
                    window.history.pushState({}, "", "/blog/signin");
                }
                else
                {
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
            <DialogTrigger>
                <ButtonOutline text="Add blog" />
            </DialogTrigger>
            <DialogContent>
               {state == false  ? <Signinform setter={setter}/> : <Signupform />}
            </DialogContent>
        </Dialog>
    </>
    )
}




function Signinform({setter}:{setter:any}) {
    let [state , action ] = useFormState(signin, signinitialState)
    //change the url to /blog/signin without moving 
    
    return (<div><form action={action} className="mx-auto flex w-full max-w-lg flex-col rounded-xl border border-border bg-backgroundSecondary p-4 sm:p-20">
    <div className="flex w-full flex-col gap-2">
      <p>Sign in with</p>
      <div className="flex w-full flex-col gap-2">
        <button type="button" className="btn gap-2 bg-gray-5">
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
          <span>Sign up with google</span>
        </button>
      </div>
    </div>
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
          <button type="submit" className="btn btn-primary w-full">Sign in</button>
        </div>
      </div>
  
      <div className="form-field">
        <div className="form-control">
          <span  id="signupopener" className="link link-underline-hover link-primary text-sm" onClick={()=>{setter(true)}} >Don't have an account? 
          <span className="underlined" >
            &nbsp; Sign up
            </ span>
            </span>
        </div>
      </div>
    </div>
  </form></div>)
}    










export  function Signupform() {
  var [state , action] =  useFormState(signUpNewUser,initialState)
  window.history.pushState({}, "", "/blog/signup");

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={action}>
        <div className="grid gap-4">
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
          <Button type="submit" className="w-full">
            Create an account
          </Button>
          <Button variant="outline" className="w-full">
          <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" /> &nbsp; &nbsp;   Sign up with Google
          </Button>
        </div>
        </form>
        <div className="mt-4 text-center text-sm">
          {state?.message}
        </div>
      </CardContent>
    </Card>
  )
}




import { usePathname } from 'next/navigation'
import  Link  from 'next/link'
export   function Redirecttaddblog() {
  const router = usePathname();
  if (router == "/blog/addblog") {
    return (<></>)
  }  
  return (<Link id="hider" href="/blog/addblog" ><button >redirectbtn</button></Link>)
  
}



// import { usePathname } from "next/navigation";
import { signout } from "@/app/client"
export function Clicomp(){
  // let pathname = usePathname();
  // if(pathname=="/blog/addblog"){
  //   return (
  //   <></>
     
  // }
  console.log("ok giving signouts")
  return (
    <form action={signout}>
            <button   type="submit" className="!text-lg !text-blue-500 !font-semibold !bg-gray-100 !p-4 rounded shadow-lg">Sign out toh krle</button>
    </form>
  )
}