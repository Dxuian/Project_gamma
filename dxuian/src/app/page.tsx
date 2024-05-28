// import Image from "next/image";
"use client";
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


import  isusersignin  from "@/app/isusersignin"

export default  function Body(){
   var popl =  isusersignin()
   const [isSignedIn, setIsSignedIn] = useState(false);

   useEffect(() => {
     const fetchUser = async () => {
       const result = await isusersignin();
       setIsSignedIn(result);
     };
 
     fetchUser();
   }, []);


   
  return(
    <Suspense fallback={<Skeleton className="w-[100px] h-[20px] rounded-full" />  }><>
      <App className="absolute left-0 !float-left"/>
      <Head/>
      <Link href="/blog" prefetch={false} >blog</Link> 
    
      { isSignedIn ? <span>Signed in</span>  : <span>Signed out</span>}
      <ModeToggle ></ModeToggle>
    </></Suspense>
  )
}


