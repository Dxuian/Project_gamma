// import Image from "next/image";
import { Suspense } from "react"
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
// function Darkmodetoggle(){
//   return <ModeToggle/>
// }
export default function Body(){
  return(
    <Suspense fallback={<Skeleton className="w-[100px] h-[20px] rounded-full" />  }><>
      <App className="absolute left-0 !float-left"/>
      <Head/>
      <Link href="/blog" prefetch={false} >blog</Link> 
      <ModeToggle ></ModeToggle>
      {/* < Darkmodetoggle> */}
    </></Suspense>

  )
}





