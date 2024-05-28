import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Inter as FontSans } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
const inter = Inter({ subsets: ["latin"] });
import { cn } from "@/lib/utils"
export const metadata: Metadata = {
  title: "DXU's blog",
  description: "lets talk",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"

import { redirect } from "next/navigation";

export default function RootLayout({ children }: { children: any }) {


  return (<>
    <div>
      <Dialogbox children={children}></Dialogbox>
    </div>
    <div id="bloglist">
      IVE WORKED ON SOME STUFF
    </div>
  </>
  );
}

function Dialogbox({ children }: { children: any }) {
  let issignedin = false;
  let isopen = true;
  return (<>
    {issignedin ? <Redirecttaddblog /> : <Actualdialog children={children} />}
  </>
  )
}

function ButtonOutline({ text }: { text: string }) {
  return <Button variant="outline"><span id="clicker">{text}</span></Button>
}


function Redirecttaddblog() {
  return (<button onClick={() => { redirect("/blog/addblog") }}>ADD A BLOG</button>)
}

function Actualdialog({ children }: { children: any }) {
  return (
    <Dialog /* open={isopen} onOpenChange={(isOpen)=>{setIsOpen(isOpen);trigerchange(false)}}*/ >
      <DialogTrigger>
        <ButtonOutline text="Add blog" />
      </DialogTrigger>
      <DialogContent>
        {children}
      </DialogContent>
    </Dialog>
  )
}




