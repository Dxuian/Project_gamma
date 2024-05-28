"use client";
import React from "react";
import { Suspense } from "react";
import { Signupform as SignupFormDemo } from "./signup";
import  { Signinreal }  from "./signin";
import { signout } from "./server";
import  Signin  from "./signin";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import isusersignin from "@/app/isusersignin";
export default  function Blogpage({className ,  signin , signup}:{className:string ,  signin?:boolean ,  signup?:boolean}) {
  
  let [triger ,  trigerchange] = useState(false)
  let [isopen, setIsOpen] = useState(false); // Use a state variable for isopen
  // let isopen = false; 
  useEffect(() => {
    if (signin == true || signup == true) {
      console.log("clicking")
      setIsOpen(true); // Open the dialog
    }
  }, [signin, signup]);

  useEffect(() => {
    if(signup) {
      setTimeout(() => {
        document.getElementById("signupopener")?.click();
      }, 0.05); // Delay execution until next event loop
    }
  }, []);
    
  
  let [isSignedIn , setisSignedIn] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      let c = await isusersignin();
      setisSignedIn(c)
    };

    fetchData();
  }, []);

   
    return (
        <div>
            
            <Dialog open={isopen} onOpenChange={(isOpen)=>{setIsOpen(isOpen);trigerchange(false)}}>
              <DialogTrigger><ButtonOutline text="Add blog" /></DialogTrigger>
              <DialogContent>
                {isSignedIn ? <></> :  (triger == false) ? <Signinreal trigger={trigerchange} /> : <SignupFormDemo trigger={trigerchange}/>} 
              </DialogContent>
            </Dialog>
            {isSignedIn ? <button onClick={()=>{signout()}}>Sign out </button> : <></>}
        </div>
    )
}


