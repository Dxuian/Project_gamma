"use server"
import isusersignin from "@/app/client"

export default async function RootLayout({ children }: { children: any }) {
  
  return (<>
    <div>
      <Dialogbox children={children}></Dialogbox>
    </div>
    
  </>
  );
}



import {Redirecttaddblog } from "@/app/blog/s"
async function fetchblogs() {



  return `blogs by me 
  cfcf 
  cfcfcf \n
  cfcfcf \n
  cfcfcf \n
  cfcfcf \n
  fcfcfc \n
  
  `
}
// import React, { createContext } from 'react';
// export const HideContext = createContext();
import  Blogpage  from "@/app/blog/s"
import { Clicomp } from "@/app/blog/s";



import  Blogs  from "@/app/blog/blogs";
async function Dialogbox({ children }: { children: any }) {
  let issignedin = await isusersignin() ;
  let blogs =  await fetchblogs();
  // console.log(children)
  return (
      <>
        <Blogs></Blogs>
        {children} 
  {issignedin ?<> <Redirecttaddblog /> <Clicomp /> </> : <Blogpage></Blogpage> }
  </>
  )
}





















