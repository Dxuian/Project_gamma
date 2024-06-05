"use server"
import isusersignin from "@/app/client"




import  Signinaltdialogbox  from "@/app/blog/s"
import { headers } from "next/headers"
import Link from "next/link"
import { signout } from "@/app/client";
import {Addblogtopage} from "@/app/blog/addblog/page" 
export async  function Component() {
  const isSignedIn = await isusersignin();
  const headersList  = headers();
  const header_url = headersList.get('x-url') || false;
  console.log(header_url + " is the url")
  return (
<div className="inline-flex !sticky top-4 mx-auto  rounded-md shadow-sm">
  <Link href="/" aria-current="page" className="px-4 py-1 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 focus:z-10  focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700  dark:focus:text-white">
    Portfolio
  </Link>
   { isSignedIn && (header_url) ?  
    <span  className="px-4 nonedge py-1 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10  focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700  dark:focus:text-white">
      <Addblogtopage />
    </span>
    : 
    <></>
    }
  {isSignedIn ? <form action={signout}>
    <input  type="submit" value="Signout"   className="px-4 py-1 edging text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10  focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700  dark:focus:text-white">
    </input>
  </form> : 
  <span  className="px-4 py-1 edging text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10  focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700  dark:focus:text-white">
    <Signinaltdialogbox />
  </span>
  }
</div>
  );
}




import Blogsser from "@/app/blog/blogscli";
export default async function RootLayout({ children }: { children: any }) {
  const component = Component();
  const isusersignedin = await isusersignin();
  return (
  <div id="con" className="!w-full">
    {children} 
    <Blogsser component={component} />
  </div >
  );
}












