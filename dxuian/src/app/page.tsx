"use server"
import { Suspense,  } from "react"
import App from "./ui/App"
import { ModeToggle } from "./ui/darkmode"
import { Skeleton } from "@/components/ui/skeleton"
import Link from 'next/link'

import { ButtonGroup, Button } from "@material-tailwind/react";


export async function ButtonGroupsRoundedSmPrimaryBasic() {
  return (
    <>
      {/*<!-- Component: Sm sized primary basic button group --> */}
      <div className="inline-flex mt-4 mx-auto  overflow-hidden rounded ">
      <button className="inline-flex h-8 items-center justify-center gap-2 whitespace-nowrap   bg-[#f5f5f5] border   dark:bg-black text-[#a6adbb] dark:text-[#8d939f] px-4 text-xs font-medium tracking-wide  dark:text-white transition duration-300 hover:bg-[#282828] dark:hover:bg-[#282828] focus:bg-gray-700 dark:focus:bg-gray-700 focus-visible:outline-none dark:focus-visible:outline-none  disabled:shadow-none">
          <Link href="/blog">Small button</Link>
        </button>
        <button className="inline-flex h-8 items-center justify-center gap-2 whitespace-nowrap   bg-[#f5f5f5] border   dark:bg-black text-[#a6adbb] dark:text-[#8d939f] px-4 text-xs font-medium tracking-wide  dark:text-white transition duration-300 hover:bg-[#282828] dark:hover:bg-[#282828] focus:bg-gray-700 dark:focus:bg-gray-700 focus-visible:outline-none dark:focus-visible:outline-none  disabled:shadow-none">
          <Link href="/blog">Small button</Link>
        </button>
        <button className="inline-flex h-8 items-center justify-center gap-2 whitespace-nowrap   bg-[#f5f5f5] border   dark:bg-black text-[#a6adbb] dark:text-[#8d939f] px-4 text-xs font-medium tracking-wide  dark:text-white transition duration-300 hover:bg-[#282828] dark:hover:bg-[#282828] focus:bg-gray-700 dark:focus:bg-gray-700 focus-visible:outline-none dark:focus-visible:outline-none  disabled:shadow-none">
          <Link href="/blog">Small button</Link>
        </button>
      </div>
      {/*<!-- End Sm sized primary basic button group --> */}
    </>
  )
}

import isusersignin from "@/app/client"
export default async function Body() {

  let isSignedIn = await isusersignin();
  return (
  <div className="">
    <Suspense fallback={<Skeleton className="w-[100px] h-[20px] rounded-full" />}>
        <ButtonGroupsRoundedSmPrimaryBasic />
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
export async function ButtonGroupDefault() {
  let issignedin = await isusersignin();
  return (
<div className="btn-group mt-4  !mx-auto btn-group-scrollable">
  <button className="btn !min-h-[2rem] !h-[2rem]">Primary</button>
	<button className="btn !min-h-[2rem] !h-[2rem]">Primary</button>
	<button className="btn !min-h-[2rem] !h-[2rem]">Primary</button>
</div>
    //  </form>
    // <div className="btn-group sticky  top-4 z-50 mx-auto btn-group-scrollable">
    //   <input type="button" name="options" data-content="1" className={`btn !h-[2.5rem] bg-[#f5f5f5] dark:bg-black !min-h-[2.5rem] md:!h-[2rem] md:!min-h-[2rem]`}  ><Link href="">Blog</Link></input>
    //   {!issignedin ? <input type="button" name="options" data-content="1" className={`btn !h-[2.5rem] bg-[#f5f5f5] dark:bg-black !min-h-[2.5rem] md:!h-[2rem] md:!min-h-[2rem]`} value="Sign out" /> : <input type="button" name="options" data-content="1"  className={`btn !h-[2.5rem] bg-[#f5f5f5] dark:bg-black !min-h-[2.5rem] md:!h-[2rem] md:!min-h-[2rem]`} value="Sign in" />}
    // </div>
  );
}


function Head() {
  return (
    <>
      hello my name is unnat &nbsp;
      {/* <br /> */}

    </>
  )
}
