"use client"
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import * as React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SuspenseImage from "@/app/blog/bi"
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { timeStamp } from "console";

const img1 = "data:image/png;base64,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";
const img2 = "https://wallpapers.com/images/hd/anime-4k-pictures-q1cg89niv319ld1a.jpg";
const img3 = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Lana_Rhoades_2-2017.jpg/1200px-Lana_Rhoades_2-2017.jpg"
const img4 = "https://s1.zerochan.net/Mikasa.Ackerman.600.3909974.jpg";
const img5 = "https://m.media-amazon.com/images/I/51pUtvn6WvL.jpg";
const img6 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMClNGnc9AYISwWkMj3rYvdyfBh-2c79cSoQ&s"
const img7 = "C:/Users/death/Pictures/Screenshots/Screenshot (3).png";


export function ButtonGroupDefault() {
  return (
    <div className="btn-group sticky  top-4 z-50 mx-auto btn-group-scrollable">
      <input type="button" name="options" data-content="1" className={`btn !h-[2.5rem] bg-[#f5f5f5] dark:bg-black !min-h-[2.5rem] md:!h-[2rem] md:!min-h-[2rem]`} value="Portfolio" />
      <input type="button" name="options" data-content="1" className={`btn !h-[2.5rem] bg-[#f5f5f5] dark:bg-black !min-h-[2.5rem] md:!h-[2rem] md:!min-h-[2rem]`} value="Add blog" />
      <input type="button" name="options" data-content="1" className={`btn !h-[2.5rem] bg-[#f5f5f5] dark:bg-black !min-h-[2.5rem] md:!h-[2rem] md:!min-h-[2rem]`} value="Sign out" />
      <input type="button" name="options" data-content="1" className={`btn !h-[2.5rem] bg-[#f5f5f5] dark:bg-black !min-h-[2.5rem] md:!h-[2rem] md:!min-h-[2rem]`} value="Sign in" />
    </div>
  );
}

import { Button } from "flowbite-react";
import styles from "@/app/ui/addblog.module.css"
import Link from "next/link"
import { signout } from "@/app/client"
export function Components() {
  return (
    <div className="inline-flex !sticky top-4 mx-auto  rounded-md shadow-sm">
      <Link href="#" aria-current="page" className="px-4 py-1 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
        Profile
      </Link>
      <Link href="#" className="px-4 py-1 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
        Settings
      </Link>
      <form action={signout}>
        <input value={"Settings"} type="submit" className="px-4 py-1 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
        </input>
      </form>
      <Link href="#" className="px-4 py-1 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
        asdasd
      </Link>


    </div>
  );
}

export default function Pa() {
  const bloglist = [{ src: img1, title: "hello", username: "unnat", timestamp: "Sun Jun 02 2024 12:22:22", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae massa commodo pharetra. Vivamus sit amet augue nec erat dignissim scelerisque. Cras efficitur orci et metus posuere, sed fringilla ex aliquam. Mauris suscipit, erat a consectetur cursus, ligula sapien tincidunt." },
  { src: img2, title: "hello", username: "unnat", timeStamp: "Sun Jun 02 2024 12:22:22", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae massa commodo pharetra. Vivamus sit amet augue nec erat dignissim scelerisque. Cras efficitur orci et metus posuere, sed fringilla ex aliquam. Mauris suscipit, erat a consectetur cursus, ligula sapien tincidunt." },
  { src: img3, title: "hello", username: "unnat", timeStamp: "Sun Jun 02 2024 12:22:22", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae massa commodo pharetra. Vivamus sit amet augue nec erat dignissim scelerisque. Cras efficitur orci et metus posuere, sed fringilla ex aliquam. Mauris suscipit, erat a consectetur cursus, ligula sapien tincidunt." },
  { src: img4, title: "hello", username: "unnat", timeStamp: "Sun Jun 02 2024 12:22:22", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae massa commodo pharetra. Vivamus sit amet augue nec erat dignissim scelerisque. Cras efficitur orci et metus posuere, sed fringilla ex aliquam. Mauris suscipit, erat a consectetur cursus, ligula sapien tincidunt." },
  { src: img5, title: "hello", username: "unnat", timeStamp: "Sun Jun 02 2024 12:22:22", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae massa commodo pharetra. Vivamus sit amet augue nec erat dignissim scelerisque. Cras efficitur orci et metus posuere, sed fringilla ex aliquam. Mauris suscipit, erat a consectetur cursus, ligula sapien tincidunt." },
  { src: img6, title: "hello", username: "unnat", timeStamp: "Sun Jun 02 2024 12:22:22", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae massa commodo pharetra. Vivamus sit amet augue nec erat dignissim scelerisque. Cras efficitur orci et metus posuere, sed fringilla ex aliquam. Mauris suscipit, erat a consectetur cursus, ligula sapien tincidunt." },
  { src: img7, title: "hello", username: "unnat", timeStamp: "Sun Jun 02 2024 12:22:22", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae massa commodo pharetra. Vivamus sit amet augue nec erat dignissim scelerisque. Cras efficitur orci et metus posuere, sed fringilla ex aliquam. Mauris suscipit, erat a consectetur cursus, ligula sapien tincidunt." }
  ]
  return (
    <Pages blogslist={bloglist} />
  )
}



// import { Component } from "@/app/test/server"
export async  function Page({ blogslist, component }: { blogslist: any[], component: any }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  blogslist = await blogslist;
  return (
    <>
      <motion.div id="hell" className="fixed z-10 top-0 left-0 right-0 h-[10px] bg-red-500 origin-left" style={{ scaleX }} />
      <div className="flex gap-4 !w-full bg-gradient-to-b from-slate-50 from-30% via-gray-200 from-30% to-zinc-200  from-30% dark:bg-gradient-to-b dark:from-slate-900 dark:from-30% dark:via-violet-800 dark:from-30%  dark:to-fuchsia-900 dark:from-30% flex-col">
        {component}
        {/* //halowayfinder */}
        {blogslist.map((x, key) => {
          let timestampNumber = Number(x.timestamp);
          let date = new Date(timestampNumber);
          let datePart = date.toDateString(); // "Sun Jun 02 2024"
          let timePart = date.toTimeString().split(' ')[0]; // "12:22:22"
          let timestamp = datePart + ' ' + timePart;

          return (
            <CardWithForm
              key={key}
              src={x.filename}
              alt={x.filenameforalt}
              title={x.title}
              username={x.by}
              timestamp={timestamp}
              content={x.content}
              h={x.h}
              w={x.w}
            />
          );
        })}      </div>
    </>
  )
}

























export function Pages({ blogslist }: { blogslist: any[] }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <>
      <motion.div id="hell" className="fixed z-10 top-0 left-0 right-0 h-[10px] bg-red-500 origin-left" style={{ scaleX }} />
      <div className="flex gap-4 !w-full bg-gradient-to-b from-slate-50 from-30% via-gray-200 from-30% to-zinc-200  from-30% dark:bg-gradient-to-b dark:from-slate-900 dark:from-30% dark:via-violet-800 dark:from-30%  dark:to-fuchsia-900 dark:from-30% flex-col">
        <Components />
        {blogslist.map((x) => (<CardWithForm src={x.filename} alt={x.filenameforalt} title={x.title} username={x.by} timestamp={x.timestamp} content={x.content} />))}
      </div>
    </>
  )
}






export function CardWithForm({ src, alt, title, username, timestamp, content, h, w }: { src?: any; alt?: any; content: any; title?: any; username: any; timestamp: any; h?: any; w?: any }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (<>
    <Card ref={ref} className="w-[80%]  !mx-auto  !mb-12 !h-[35%] md:max-w-[50%]  m-2" style={{ transform: isInView ? "none" : "translateX(-200px)", opacity: isInView ? 1 : 0, transition: "all 0.4s cubic-bezier(.88,1.99,.55,.34) 0.5s" }}>
      <CardHeader>
        <CardTitle>By <span className="">{username}</span></CardTitle>
        <br></br>
        <CardDescription><Badge className="relative !right-1.5">{timestamp}</Badge></CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col">
          {src ? <SuspenseImage src={src} h={h} alt="random" /> : <></>}
          <br></br>
          <br></br>
          <br></br>
          {/* <Separator className="my-4" /> */}
          <div className="flex flex-col w-full">
            <div className="divider divider-start"> <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              {title}
            </h3></div>
          </div>
          <span className="makeitvis">
            {content}
          </span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
      </CardFooter>
    </Card>
  </>

  )
}







