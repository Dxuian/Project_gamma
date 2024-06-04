"use server"
import { Suspense,  } from "react"
import { ModeToggle } from "./ui/darkmode"
import { Skeleton } from "@/components/ui/skeleton"
import Link from 'next/link'






export async  function Component() {
  const isSignedIn = await isusersignin();
  return (
<div className="inline-flex !sticky top-4 mx-auto  rounded-md shadow-sm">
  <Link href="/blog" aria-current="page" className="px-4 py-1 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
    Blog
  </Link>
  {isSignedIn ? <form action={signout}>
  <input value={"Sign out"} type="submit" className="px-4 py-1 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
  </input>
  </form>  : <Link href="/blog/signin" className="px-4 py-1 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
    Sign in
  </Link>}
  {/* <Link href="/blog/signin" className="px-4 py-1 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
    Sign in
  </Link> */}
  
  {/* <Link href="#" className="px-4 py-1 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
    asdasd
  </Link> */}
</div>
  );
}


import isusersignin from "@/app/client"
export default async function Body() {

  let isSignedIn = await isusersignin();
  return (
  <div className="">
    <Suspense fallback={<Skeleton className="w-[100px] h-[20px] rounded-full" />}>
        <Component />
        {/* <App className="!z-0" /> */}
        <Head />
        <Link href="/blog"  >blog</Link>
        {isSignedIn ? <span>Signed in</span> : <span>Signed out</span>}
        <ModeToggle ></ModeToggle>
    </Suspense>
  </ div >

  )
}


import { headers } from 'next/headers';
import { redirect } from "next/navigation"
import { signin ,  signout} from "@/app/client"


function Head() {
  return (
    <>
      hello my name is unnat &nbsp;
      {/* <br /> */}

    </>
  )
}
