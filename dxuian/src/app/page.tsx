// import Image from "next/image";
import { Suspense, useEffect, useState } from "react"
import App from "./ui/App"

// import Head from "next/head";
import { ModeToggle } from "./ui/darkmode"
import { Skeleton } from "@/components/ui/skeleton"
import  Link  from 'next/link' 


function Head(){
  return(
    <>
      hello my name is unnat &nbsp;
      {/* <br /> */}
      
    </>
  )
}


import  isusersignin  from "@/app/client"
export default async  function Body(){

   let isSignedIn = await isusersignin();
  return(
    <Suspense fallback={<Skeleton className="w-[100px] h-[20px] rounded-full" />  }><>
      <App className="absolute left-0 !float-left"/>
      <Head/>
      <Link href="/blog"  >blog</Link> 
    
      { isSignedIn ? <span>Signed in</span>  : <span>Signed out</span>}
      <ModeToggle ></ModeToggle>
    </></Suspense>
  )
}


