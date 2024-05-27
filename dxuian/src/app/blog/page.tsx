"use client";
import React from "react";
import { Suspense } from "react";
import { Button } from "@/components/ui/button"
import { SignupFormDemo } from "./signup";
import  { Signinreal }  from "./signin";
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
  
  useEffect(() => {
      if (signin == true || signup == true) {
        document.getElementById("clicker")?.click();
        if(signup == true){
        document.getElementById("signupopener")?.click();}
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
            IVE WORKED ON SOME STUFF 
            <Dialog onOpenChange={()=>{trigerchange(false)}}>
              <DialogTrigger><ButtonOutline text="Add blog" /></DialogTrigger>
              <DialogContent>
                {isSignedIn ? <></> :  (triger == false) ? <Signinreal trigger={trigerchange} /> : <SignupFormDemo trigger={trigerchange}/>} 
              </DialogContent>
            </Dialog>
        </div>
    )
}



function ButtonOutline({text}:{text:string}) {
  return <Button  variant="outline"><span id="clicker">{text}</span></Button>
}
