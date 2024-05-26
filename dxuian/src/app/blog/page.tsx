import React from "react";
import { Suspense } from "react";
import { Button } from "@/components/ui/button"
import { SignupFormDemo } from "./signup";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"

export default function Blogpage({className}:{className:string}) {
    return (
        <div>
            IVE WORKED ON SOME STUFF 
            
            <Popover>
                <PopoverTrigger><span><ButtonOutline /></span></PopoverTrigger>
                <PopoverContent className="!w-full"><SignupFormDemo /></PopoverContent>
            </Popover>
        </div>
    )

}



function ButtonOutline() {
  return <Button  variant="outline">Sign up</Button>
}
