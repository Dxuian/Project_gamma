"use server"
import isusersignin from "@/app/client"
import {Redirecttaddblog } from "@/app/blog/s"
import  Blogpage  from "@/app/blog/s"
import { Clicomp } from "@/app/blog/s";
import Blogs from "@/app/blog/blogscli";

export default async function RootLayout({ children }: { children: any }) {
  
  return (
  <>
    <div>
      <Dialogbox >{children}</Dialogbox>
    </div>
  </>
  );
}







async function Dialogbox({ children }: { children: any }) {
  let issignedin = await isusersignin() ;
  return (
      <>
        <Blogs></Blogs>
        {children} 
        {issignedin ?<> <Redirecttaddblog /> <Clicomp /> </> : <Blogpage></Blogpage> }
      </>
  )
}









