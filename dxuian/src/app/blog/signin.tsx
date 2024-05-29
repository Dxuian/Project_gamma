import { useFormState } from "react-dom";
import { signin } from "./server";
import { use, useEffect, useState } from "react";
let signinitialState = {
  message:""
};
export default function Signinreal() {
  let [state , action ] = useFormState(signin, signinitialState)
  let [state2 , setter ] = useState(false)
  
  useEffect(() => {
    console.log("use effect")
  },[state2])

  return (
    <div>
      {state2 == false ?  : 
  <div><Signupform /></div>}
    </div>
  )
}





var initialState = {
  message : ""
}







import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils"
import {
  IconBrandGoogle,
} from "@tabler/icons-react";
// import { signUpNewUser } from "../server";
// import { useFormState } from "react-dom";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { signUpNewUser } from "./server";



export  function Signupform() {
  var [state , action] =  useFormState(signUpNewUser,initialState)
  
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={action}>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">First name</Label>
              <Input id="first-name" placeholder="Max" name="fname" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input id="last-name" placeholder="Robinson" name="lname" required />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              name="email"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password" >Password</Label>
            <Input id="password" name="password" type="password" />
          </div>
          <Button type="submit" className="w-full">
            Create an account
          </Button>
          <Button variant="outline" className="w-full">
          <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" /> &nbsp; &nbsp;   Sign up with Google
          </Button>
        </div>
        </form>
        <div className="mt-4 text-center text-sm">
          {state?.message}
        </div>
      </CardContent>
    </Card>
  )
}




const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
