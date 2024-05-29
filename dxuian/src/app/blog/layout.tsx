import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DXU's blog",
  description: "lets talk",
};






export default async function RootLayout({ children }: { children: any }) {
  let blogs = fetchblogs();
  return (<>
    <div>
      <Dialogbox children={children}></Dialogbox>
    </div>
    <br />
    <div id="bloglist">
      IVE WORKED ON SOME STUFF
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <span className="!text-5xl " >{blogs}</span>
    </div>
  </>
  );
}
import isusersignin from "@/app/isusersignin"

async function Dialogbox({ children }: { children: any }) {
  let issignedin = await isusersignin();
  let isopen = true;
  return (<>
    {issignedin ? <Redirecttaddblog /> :  <>{children}</> }
  </>
  )
}







async function Redirecttaddblog() {
  return (<button /*onClick={() => { redirect("/blog/addblog") }}*/ >ADD A BLOG</button>)
}


async function fetchblogs() {
  return "blogs by me "
}