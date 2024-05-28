"use client";
import React, { useEffect, useState } from "react";
import { Suspense } from "react";
import { Button } from "@/components/ui/button"
import Script from "next/script";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { signout } from "../server";
import { CircleX } from 'lucide-react';
import { FileInput, Label } from "flowbite-react";
import { PopoverClose } from "@radix-ui/react-popover";
import { Textarea } from "@/components/ui/textarea"

import { Description, Field, Fieldset, Input,  Legend, Select } from '@headlessui/react'
const labels = require('@headlessui/react').Label;
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import EmojiPicker from 'emoji-picker-react';
import { Emoji, EmojiStyle } from 'emoji-picker-react';
import { FormEvent } from 'react'
import type { NextApiRequest, NextApiResponse } from 'next'
import test from './checker'

function addtotextarea(emoji: any){
  console.log(emoji);
  document.getElementsByTagName('textarea')[0].value += emoji.emoji;
}

function Emojichooser(props:{}) {
  return (
    <div>
      <EmojiPicker  /*reactionsDefaultOpen={true}*/ onEmojiClick={addtotextarea} />
    </div>
  );
}

export  function Example() {
  return (
    <div className="w-full max-w-lg px-4">
      <Fieldset className="space-y-6 rounded-xl bg-white/5 p-6 sm:p-10">
        <Legend className="text-base/7 font-semibold text-white">Add blog</Legend>
        <Field>
          <Label className="text-sm/6 font-medium text-white">Delivery notes</Label>
          <Description className="text-sm/6 text-white/50">
            If you have a tiger, we'd like to know about it.
          </Description>
          <Textarea
            // className={clsx(
            //   'mt-3 block w-full resize-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
            //   'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
            // )}
            // rows={3}
            name="content"
          />
          <Emojichooser></Emojichooser>
        </Field>
        <Field>
          <Label className="text-sm/6 font-medium text-white">Add a image</Label>
          <Fileadder/>
        </Field>
      </Fieldset>
      <Script>
        console.log("logged in script tag")
      </Script>
    </div>
  )
}













const Icon = () => {
  return (
    <CircleX className="absolute right-2 top-2" />
  );
};


export function Fileadder() {
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
            <span className="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <FileInput id="dropzone-file" className="hidden" name="file" />
      </Label>
    </div>
  );
}




export  async function  formhandler(event: FormEvent<HTMLFormElement>) {
  // console.log(e.target.elements); // Access form elements here
  // var name  = e.name 
  event.preventDefault()
  console.log("form submitted")
  const formData = new FormData(event.currentTarget)
  // const response = await fetch('/api/auth', {
  //   method: 'POST',
  //   body: formData,
  // })

  // res.red
  // return false ;
}




export function Form(){
  console.log("hahaha") ;
  // const router = useRouter()

  return (
  <>
    <form action={test} >
        <Example></Example>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </>
  )
}

   

function Modal() {
  return (
    <><label className="btn btn-primary" htmlFor="modal-2">Open Modal</label>
    <input className="modal-state" id="modal-2" type="checkbox" />
    <div className="modal w-screen">
      <label className="modal-overlay" htmlFor="modal-2"></label>
      <div className="modal-content flex flex-col gap-5 max-w-3xl">
        <label htmlFor="modal-2" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
        <h2 className="text-xl">Modal title 2</h2>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorum voluptate ratione dicta. Maxime cupiditate, est commodi consectetur earum iure, optio, obcaecati in nulla saepe maiores nobis iste quasi alias!
          <Form></Form>
        </span>
        {/* <div className="flex gap-3">
          <button className="btn btn-error btn-block">Delete</button>
          <button className="btn btn-block">Cancel</button>
        </div> */}
      </div>
    </div></>
  )
}

function Addblog({className}:{className?:string}) {
    return (
        <div className={className}>
           add blog bruh
            <Modal></Modal>
           {/* <Popover>
              <PopoverTrigger>Open</PopoverTrigger>
              <PopoverContent>
                  <Form></Form>
                  <PopoverClose asChild>
                      <button><Icon /></button>
                  </PopoverClose>
              </PopoverContent>
          </Popover> */}
          {/* <Popover>
            <PopoverTrigger>Open</PopoverTrigger>
            <PopoverContent>Place content for the popover here.  
              
            <PopoverTrigger><Icon></Icon></PopoverTrigger>
              
               </PopoverContent>
          </Popover> */}

           

        </div>
    )

}

import isusersignin from "@/app/isusersignin";

export default   function Blogpage({className}:{className:string}) {
    let [isSignedIn , setisSignedIn] = useState(false)
    useEffect( () => {
        const fetchData = async () => {
            let c = await isusersignin();
            debugger ; 
            setisSignedIn(c)
        };
        fetchData();
    }, []);
    // let isSignedIn =  isusersignin();
    return (
        <div className={className}>
            <div >
                {/* add blog bruh */}
                <Addblog className=""></Addblog>
                {isSignedIn ? <span>signed in </span> : <span>not signed in</span>}
                {isSignedIn ? <button onClick={()=>{signout()}}>Sign out </button> : <></>}
            </div>
        </div>
    )

}