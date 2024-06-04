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

import { Description, Field, Fieldset, Input, Legend, Select } from '@headlessui/react'
const labels = require('@headlessui/react').Label;
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import EmojiPicker from 'emoji-picker-react';
import { Emoji, EmojiStyle } from 'emoji-picker-react';
import { FormEvent } from 'react'
import test from './checker'

function addtotextarea(emoji: any) {
  console.log(emoji);
  document.querySelectorAll("textarea")[1].value += emoji.emoji;
}
function Emojichooser(props: {}) {
  return (
    <div>
      <EmojiPicker  /*reactionsDefaultOpen={true}*/ onEmojiClick={addtotextarea} />
    </div>
  );
}


export function Example() {
  return (
    <div className="w-full max-w-lg px-4">
      <Fieldset className="space-y-6 rounded-xl bg-white/5 p-6 sm:p-10">
        <Legend className="text-base/7 font-semibold text-white">Add blog</Legend>
        <Field>
          <Label className="text-sm/6 font-medium text-white">Delivery notes</Label>
          <Description className="text-sm/6 text-white/50">
            If you have a tiger, we&apos;d like to know about it.
          </Description>
          <Textarea name="title"  />
          <Textarea name="content"  />
          <Emojichooser></Emojichooser>
        </Field>
        <Field>
          <Label className="text-sm/6 font-medium text-white">Add a image</Label>
          <Fileadder />
        </Field>
      </Fieldset>
      {/* <Script>
        console.log("logged in script tag")
      </Script> */}
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
import { useFormState } from "react-dom";
let initialState = {
  message: ""
}
export  function Form() {
  console.log("hahaha");
  let [state,action] = useFormState( test , initialState);
  return (
    <>
      <form action={action} >
        <Example></Example>
        <button type="submit" className="btn btn-primary">Submit</button>
        {state?.message}
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
        </div>
      </div></>
  )
}

function Addblog({ className }: { className?: string }) {
  return (
    <div className={className}>
      add blog bruh
      <Modal></Modal>
    </div>
  )

}




export default function Addblogtopage({ className }: { className: string }) {

  return (
    <div className={className}>
      <div >
        <Addblog className=""></Addblog>
      </div>
    </div>

  )

}
