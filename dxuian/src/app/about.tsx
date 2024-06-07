"use server"
import React from 'react';
import MotionWrap from '@/app/motion-wrap';
import Reveal from '@/app/reveal';

import Link from 'next/link';
async function About() {
  return (
    <MotionWrap className="w-full py-24  lg:py-32" id="about">
      {/* TODO: Redesign for horizontal */}
      <div className="space-y-4 px-4 md:px-6 lg:space-y-10">
        <div className="flex w-full flex-col items-center justify-center text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <Reveal>
              <h2 className="text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
                About
              </h2>
            </Reveal>
            <Reveal>
              <h2 className="-mt-2 text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
                Me
              </h2>
            </Reveal>
          </div>
          <p className="mt-6 max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Here&apos;s where I share my journey through tech, highlighting the
            experiences and passions that drive my innovative pursuits.
            <Reveal>
            <Location />
            </Reveal>
           
          </p>
        </div>
        <p className="mt-6 max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
        I&apos;m a final year student at DTU and am constantly learning new things.
         My experience spans a range of web technologies, frameworks, and tools.
        I&apos;m always open to learning new concepts and am available for &nbsp;<Link scroll={false} href="#footerformer"> hiring opportunities</Link>
        </p>
      </div>
    </MotionWrap>
  );
}

import Image from 'next/image';
// function Location() {
//   return (
//     <div className="rounded-lg mt-4 mx-auto  border bg-card text-card-foreground lg:w-auto mb-4">
//       <div className="flex flex-col space-y-1.5 p-6">
//         <h3 className="text-lg font-semibold leading-none tracking-tight">
//           Where am I currently?
//         </h3>
//       </div>
//       <div className="p-6 pt-0 grid gap-4">
//         <div className="flex items-center rounded-md pl-2 hover:bg-background/40 hover:backdrop-blur-lg">
//           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin">
//           <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
//           <p className="ml-2 mr-auto text-sm font-medium leading-none">
//             Delhi
//           </p>
       
//           <Image alt="India gate" loading="lazy" width="56" height="56" decoding="async" data-nimg="1" className="h-16 w-16 rounded-md object-cover" style={{ color: "transparent" }} 
//              //@ts-ignore
//            src="/ig.jpg" />
//         </div>
//       </div>
//       <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full">
//       </div>
//       <div className="flex items-center p-6 pt-0">
//         <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 w-full" disabled>
//           Digital Nomad diaries
//           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
//         </button>
//       </div>
//     </div>
//   )
// }



export async function Location() {
  return (
    <div className="rounded-lg mt-4 mx-auto border bg-card text-card-foreground float-right w-full lg:w-3/4 mb-4">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="text-lg font-semibold leading-none tracking-tight">
          Where am I currently?
        </h3>
      </div>
      <div className="p-6 pt-0 grid gap-4">
        <div className="flex items-center rounded-md pl-2 hover:bg-background/40 hover:backdrop-blur-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-map-pin"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <p className="ml-2 mr-auto text-sm font-medium leading-none">Delhi</p>
          <Image
            alt="India gate"
            loading="lazy"
            width="56"
            height="56"
            decoding="async"
            data-nimg="1"
            className="h-16 w-16 rounded-md object-cover"
            style={{ color: 'transparent' }}
            src="/ig.jpg"
          />
        </div>
      </div>
      <div
        data-orientation="horizontal"
        role="none"
        className="shrink-0 bg-border h-[1px] w-full"
      ></div>
      {/* <div className="flex items-center p-6 pt-0">
        <button
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 w-full"
          disabled
        >
          Digital Nomad diaries
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-4 w-4"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </button>
      </div> */}
    </div>
  );
}


export default About;
