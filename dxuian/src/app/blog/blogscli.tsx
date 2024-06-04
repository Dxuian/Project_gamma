import Blogsser from "@/app/blog/bs";
import { Suspense } from "react";
export default async  function Blogs(){
    return(
      <>
      <Suspense fallback={<div>Loading...</div>}>
          <Blogsser></Blogsser>
      </Suspense>
      </>
    )
}