"use server"
import { Suspense, } from "react"
import { ModeToggle } from "./ui/darkmode"
import { Skeleton } from "@/components/ui/skeleton"
import Link from 'next/link'






export async function Component() {
  const isSignedIn = await isusersignin();
  return (
    <div className="inline-flex !sticky top-4 mx-auto z-50 rounded-md shadow-sm">
      <Link href="/blog" aria-current="page" className="px-4 py-1 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 focus:z-10  focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700  dark:focus:text-white">
        Blog
      </Link>
      {isSignedIn ? <form action={signout}>
        <input value={"Sign out"} type="submit" className="px-4 py-1 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10  focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700  dark:focus:text-white">
        </input>
      </form> : <Link href="/blog/signin" className="px-4 py-1 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10  focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700  dark:focus:text-white">
        Sign in
      </Link>}
      {/* <Link href="/blog/signin" className="px-4 py-1 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10  focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700  dark:focus:text-white">
    Sign in
  </Link> */}

      {/* <Link href="#" className="px-4 py-1 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10  focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700  dark:focus:text-white">
    asdasd
  </Link> */}
    </div>
  );
}

function Head() {
  return (
    <>
      <div>
        hello my name is unnat
      </div>
      <LoremIpsum />
    </>
  )
}


import App from "@/app/ui/App"
import isusersignin from "@/app/client"
import Pa from "@/app/test/page"
import { FollowerPointerCard, Lincomponent, TypewriterComponent } from "@/app/clienta"
import { AppWithUI } from "@/app/t"
import About from "./about"
import {Skills} from "./skills"
import Scrollfx from "./scrollfx"
import Projects from "./projects"
export default async function Body() {
  return (
    <div className="w-full flex flex-col">
      <Suspense fallback={<div className='skeleton wave w-[100vw] h-[100vh] success' ><div className="loading absolute top-1/2 mx-auto bottom-1/2 loading-infinity loading-lg"></div></div>}>
        {/* <FollowerPointerCard > */}
        <Lincomponent />
        {/* <Pa /> */}
        {/* <div className=" !sticky top-4 left-1/2"> */}
        <Component />
        {/* </div> */}
        <div className="mb-4">
          <ModeToggle className="float-right !mt-0  m-4 "></ModeToggle>
        </div>
        <Topanimations />
        <About />
        <Skills />
        <Scrollfx />
        <Projects />
        <Head />
        {/* </FollowerPointerCard> */}
      </Suspense>
    </ div >

  )
}


function Topanimations(){
  return(
<div className="flex p-8  !pt-12 flex-row">
          <div className="flex !w-1/2 mx-auto justify-center items-center">
            <AppWithUI />
          </div>
          <div className="flex justify-center items-center !w-1/2">
            <App className="" />
            <div className="flex !text-6xl text-center absolute  ">
              <TypewriterComponent />
            </div>
          </div>
        </div>
  )
}





import { signout } from "@/app/client"







export async function LoremIpsum() {
  return (
    <>
      <article>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
          rhoncus quam.
        </p>
        <p>
          Fringilla quam urna. Cras turpis elit, euismod eget ligula quis,
          imperdiet sagittis justo. In viverra fermentum ex ac vestibulum.
          Aliquam eleifend nunc a luctus porta. Mauris laoreet augue ut felis
          blandit, at iaculis odio ultrices. Nulla facilisi. Vestibulum cursus
          ipsum tellus, eu tincidunt neque tincidunt a.
        </p>
        <h2>Sub-header</h2>
        <p>
          In eget sodales arcu, consectetur efficitur metus. Duis efficitur
          tincidunt odio, sit amet laoreet massa fringilla eu.
        </p>
        <p>
          Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna.
          Mauris id mauris vel arcu commodo venenatis. Aliquam eu risus arcu.
          Proin sit amet lacus mollis, semper massa ut, rutrum mi.
        </p>
        <p>Sed sem nisi, luctus consequat ligula in, congue sodales nisl.</p>
        <p>
          Vestibulum bibendum at erat sit amet pulvinar. Pellentesque pharetra
          leo vitae tristique rutrum. Donec ut volutpat ante, ut suscipit leo.
        </p>
        <h2>Sub-header</h2>
        <p>
          Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla
          aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat
          sem, sit amet tempor nulla. Quisque fermentum felis faucibus, vehicula
          metus ac, interdum nibh. Curabitur vitae convallis ligula. Integer ac
          enim vel felis pharetra laoreet. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Pellentesque hendrerit ac augue quis
          pretium.
        </p>
        <p>
          Morbi ut scelerisque nibh. Integer auctor, massa non dictum tristique,
          elit metus efficitur elit, ac pretium sapien nisl nec ante. In et ex
          ultricies, mollis mi in, euismod dolor.
        </p>
        <p>Quisque convallis ligula non magna efficitur tincidunt.</p>
        <p>
          Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna.
          Mauris id mauris vel arcu commodo venenatis. Aliquam eu risus arcu.
          Proin sit amet lacus mollis, semper massa ut, rutrum mi.
        </p>
        <p>Sed sem nisi, luctus consequat ligula in, congue sodales nisl.</p>
        <p>
          Vestibulum bibendum at erat sit amet pulvinar. Pellentesque pharetra
          leo vitae tristique rutrum. Donec ut volutpat ante, ut suscipit leo.
        </p>
        <h2>Sub-header</h2>
        <p>
          Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla
          aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat
          sem, sit amet tempor nulla. Quisque fermentum felis faucibus, vehicula
          metus ac, interdum nibh. Curabitur vitae convallis ligula. Integer ac
          enim vel felis pharetra laoreet. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Pellentesque hendrerit ac augue quis
          pretium.
        </p>
        <p>
          Morbi ut scelerisque nibh. Integer auctor, massa non dictum tristique,
          elit metus efficitur elit, ac pretium sapien nisl nec ante. In et ex
          ultricies, mollis mi in, euismod dolor.
        </p>
        <p>Quisque convallis ligula non magna efficitur tincidunt.</p>
      </article>
    </>
  );
}


