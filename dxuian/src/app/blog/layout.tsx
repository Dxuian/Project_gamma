"use server"
import isusersignin from "@/app/client"






import Link from "next/link"
import { signout } from "@/app/client";
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












