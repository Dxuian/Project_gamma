"use server"
import { Suspense, } from "react"
import { ModeToggle } from "./ui/darkmode"
import Link from 'next/link'


import App from "@/app/ui/App"
import isusersignin from "@/app/client"
// import Pa from "@/app/test/page"
import {  Lincomponent, TypewriterComponent , Footer  } from "@/app/clienta"
import { AppWithUI } from "@/app/t"
import About from "./about"
import {Skills} from "./skills"
import Scrollfx from "./scrollfx"
import Projects from "./projects"
import { Skills as Skilsta } from "./skills11"



import { signOut } from "@/auth"
import { unstable_noStore as noStore } from 'next/cache';
async function Component() {
  noStore();
  const isSignedIn = await isusersignin();
  return (
    <div className="inline-flex !sticky top-12 md:top-4 mx-auto z-50 rounded-md shadow-sm">
      <Link href="/blog" aria-current="page" className="px-4 py-1 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 focus:z-10  focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700  dark:focus:text-white">
        Blog
      </Link>
      
      {isSignedIn ? <form
      action={async () => {
        "use server"   
        await signOut()}}>
        <input value={"Sign out"} type="submit" className="px-4 py-1 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10  focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700  dark:focus:text-white">
        </input>
      </form> : <Link href="/blog/signin" className="px-4 py-1 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10  focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700  dark:focus:text-white">
        Sign in
      </Link>}

    </div>
  );
}



import {Skeleton } from "@/components/ui/skeleton"
export default async function Body() {
  return (
    <Suspense fallback={<Skeleton className="!h-full !w-full" ><div className="loading absolute top-1/2 left-[48vw] md:left[50vw] loading-infinity loading-lg"></div></Skeleton>}>
      
    <div className="w-full flex flex-col">
        <Lincomponent />
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
        <Skilsta />
        <Footer />
        
        {/* <Head /> */}
    </ div >
            
    </Suspense>
  )
}

import Reveal from '@/app/reveal';
import "@/app/ui/SpinAnimation.css"
function Topanimations(){
  return(
        // <Reveal >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-32 p-8 !pt-12">

      <div className="relative spin-into-existence  flex items-center justify-center">
        <div className="relative  flex items-center justify-center">
        <AppWithUI /> 
        </div>
        <div className="absolute  flex !text-6xl text-center">
          <TypewriterComponent />
        </div>
      </div>

      <div className="relative spin-into-existence flex items-center justify-center">
          <App className="transform rounded-lg border-2 border-slate-500 p-2 md:p-4 transition-transform duration-500 ease-in-out scale-75 z-10" />
      </div>
    </div>
  )
}










// export async function LoremIpsum() {
//   return (
//     <>
//       <article>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
//           rhoncus quam.
//         </p>
//         <p>
//           Fringilla quam urna. Cras turpis elit, euismod eget ligula quis,
//           imperdiet sagittis justo. In viverra fermentum ex ac vestibulum.
//           Aliquam eleifend nunc a luctus porta. Mauris laoreet augue ut felis
//           blandit, at iaculis odio ultrices. Nulla facilisi. Vestibulum cursus
//           ipsum tellus, eu tincidunt neque tincidunt a.
//         </p>
//         <h2>Sub-header</h2>
//         <p>
//           In eget sodales arcu, consectetur efficitur metus. Duis efficitur
//           tincidunt odio, sit amet laoreet massa fringilla eu.
//         </p>
//         <p>
//           Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna.
//           Mauris id mauris vel arcu commodo venenatis. Aliquam eu risus arcu.
//           Proin sit amet lacus mollis, semper massa ut, rutrum mi.
//         </p>
//         <p>Sed sem nisi, luctus consequat ligula in, congue sodales nisl.</p>
//         <p>
//           Vestibulum bibendum at erat sit amet pulvinar. Pellentesque pharetra
//           leo vitae tristique rutrum. Donec ut volutpat ante, ut suscipit leo.
//         </p>
//         <h2>Sub-header</h2>
//         <p>
//           Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla
//           aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat
//           sem, sit amet tempor nulla. Quisque fermentum felis faucibus, vehicula
//           metus ac, interdum nibh. Curabitur vitae convallis ligula. Integer ac
//           enim vel felis pharetra laoreet. Interdum et malesuada fames ac ante
//           ipsum primis in faucibus. Pellentesque hendrerit ac augue quis
//           pretium.
//         </p>
//         <p>
//           Morbi ut scelerisque nibh. Integer auctor, massa non dictum tristique,
//           elit metus efficitur elit, ac pretium sapien nisl nec ante. In et ex
//           ultricies, mollis mi in, euismod dolor.
//         </p>
//         <p>Quisque convallis ligula non magna efficitur tincidunt.</p>
//         <p>
//           Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna.
//           Mauris id mauris vel arcu commodo venenatis. Aliquam eu risus arcu.
//           Proin sit amet lacus mollis, semper massa ut, rutrum mi.
//         </p>
//         <p>Sed sem nisi, luctus consequat ligula in, congue sodales nisl.</p>
//         <p>
//           Vestibulum bibendum at erat sit amet pulvinar. Pellentesque pharetra
//           leo vitae tristique rutrum. Donec ut volutpat ante, ut suscipit leo.
//         </p>
//         <h2>Sub-header</h2>
//         <p>
//           Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla
//           aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat
//           sem, sit amet tempor nulla. Quisque fermentum felis faucibus, vehicula
//           metus ac, interdum nibh. Curabitur vitae convallis ligula. Integer ac
//           enim vel felis pharetra laoreet. Interdum et malesuada fames ac ante
//           ipsum primis in faucibus. Pellentesque hendrerit ac augue quis
//           pretium.
//         </p>
//         <p>
//           Morbi ut scelerisque nibh. Integer auctor, massa non dictum tristique,
//           elit metus efficitur elit, ac pretium sapien nisl nec ante. In et ex
//           ultricies, mollis mi in, euismod dolor.
//         </p>
//         <p>Quisque convallis ligula non magna efficitur tincidunt.</p>
//       </article>
//     </>
//   );
// }



