"use server"
import isusersignin from "@/app/client";
import signout from "@/app/client"
import { redirect } from "next/navigation";
import { Clicomp } from "@/app/blog/s";
export default async  function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  let isSignedIn = await  isusersignin();
  if (!isSignedIn) {
   redirect("/blog/signin")
  }
  return (
            <>
              {children}
              {/* {isSignedIn ? <span>signed in </span> : <span>not signed in</span>} */}
            </>
  );
}