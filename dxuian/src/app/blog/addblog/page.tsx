"use client"
import { Suspense, useEffect } from "react";
import { Button } from "@/components/ui/button"
import Script from "next/script";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { CircleX } from 'lucide-react';
import { FileInput, Label } from "flowbite-react";
import { PopoverClose } from "@radix-ui/react-popover";
import { Textarea } from "@/components/ui/textarea"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


import { Input as Shadinput } from "@/components/ui/input"
import { Label as Shadlabel } from "@/components/ui/label"

export function InputWithLabel() {
  return (
    <div className="grid !w-full  items-center gap-1.5">
      <Shadlabel htmlFor="text">Title</Shadlabel>
      <Shadinput type="text" id="text" name="title" placeholder="Title" />
    </div>
  )
}


import { Description, Field, Fieldset, Input, Legend, Select } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import EmojiPicker from 'emoji-picker-react';
import { Theme } from 'emoji-picker-react';
import { Emoji, EmojiStyle } from 'emoji-picker-react';
import { FormEvent } from 'react'
import test from './checker'

function addtotextarea(emoji: any) {
  console.log(emoji);
  let textarea = document.getElementById("message-2") as HTMLTextAreaElement;
  if (textarea) {
    textarea.value += emoji.emoji;
  }
}
function Emojichooser(props: {}) {
  return (
    <div>
      <EmojiPicker className="mx-auto !w-full" theme={Theme.DARK} reactionsDefaultOpen={true} onEmojiClick={addtotextarea} />
    </div>
  );
}




export function TextareaWithText(name: any) {
  return (
    <div className="grid my-2 w-full gap-1.5">
      <Shadlabel htmlFor="message-2">Your Message <small>(MAX 300 chars)</small></Shadlabel>
      <Textarea name="content" placeholder="Type your message here." id="message-2" />
    </div>
  )
}

export function Example() {
  return (
    // <div className="w-full max-w-lg px-4">
    <>
      <Field>
        <InputWithLabel />
        <TextareaWithText name="content" className="" />
        <Emojichooser></Emojichooser>
      </Field>
      <Field>
        <Label className="text-sm/6 font-medium text-white">Add a image</Label>
        <Fileadder />
      </Field>
    </>
    // {/* </div> */}
  )
}
const Icon = () => {
  return (
    <CircleX className="absolute right-2 top-2" />
  );
};
// export function Fileadder() {
//   return (
//     <div className="flex w-full items-center justify-center">
//       <Label
//         htmlFor="dropzone-file"
//         className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
//       >
//         <div className="flex flex-col items-center justify-center pb-6 pt-5">
//           <svg
//             className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 20 16"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
//             />
//           </svg>
//           <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
//             <span className="font-semibold">Click to upload</span> or drag and drop
//           </p>
//           <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
//         </div>
//         <FileInput id="dropzone-file" className="hidden" name="file" />
//       </Label>
//     </div>
//   );
// }
import React, { useState } from 'react';

export function Fileadder() {
  const [fileName, setFileName] = useState('Click to upload');

  const handleFileChange = (e:any) => {
    setFileName(e.target.files[0].name);
  };

  return (
    <div className="flex w-full items-center justify-center">
      <Label
        htmlFor="dropzone-file"
        className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div className="flex flex-col items-center justify-center pb-6 pt-5">
          <svg
            className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">{fileName}</span>{fileName=="Click to upload" ? "or drag and drop" : ""} 
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 1MB)</p>
        </div>
        <FileInput id="dropzone-file" className="hidden" name="file" onChange={handleFileChange} />
      </Label>
    </div>
  );
}
import { useFormState } from "react-dom";
let initialState = {
  message: ""
}
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'
export function Form({ setOpen }: any) {
  console.log("hahaha");
  let [state, action] = useFormState(test, initialState);
  debugger; 
  if(state?.message=="Success")
  {
    const router = useRouter();
    console.log("success");
    setOpen(false);
    router.push("/blog");
  }  
  return (
    <>
      <form action={action} >
        <Example></Example>
          <button type="submit" className="relative mt-2 w-full inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Add blog
            </span>
          </button>
        {state?.message}
      </form>
    </>
  )
}



import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

function Modal() {
  let [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={() => {
      console.log("changing")
      debugger; 
      if (open == false) {
        setOpen(true)
      }
      if (open == true) {
        setOpen(false)
      }}}>
      <DialogTrigger>Add blog</DialogTrigger>
      <div className="overflow-y-hidden">
      <DialogContent className="overflow-y-scroll w-[96%] no-scrollbar mb-6 mx-2 mt-2 max-h-[92vh] mx-auto">
        <DialogHeader>
          <DialogTitle>Add a blog </DialogTitle>
          <DialogDescription>
            Leave a message for everyone to see ❤
          </DialogDescription>
        </DialogHeader>
        <Form setOpen={setOpen}></Form>
      </DialogContent>
      </div>
    </Dialog>

  )
}

function Addblog({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Modal></Modal>
    </div>
  )

}
export function Addblogtopage({ className }: { className?: string }) {

  return (
    <div className={className}>
      <Addblog className=""></Addblog>
    </div>

  )

}
export default function A({ className }: { className: string }) {
  return (
    <></>
  )
}
