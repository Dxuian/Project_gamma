import { Skeleton } from "@/components/ui/skeleton";
export  default function Loading() {
  return (
    // <Skeleton className="" /><>
    <div className='skeleton wave w-[100vw] h-[100vh] success' ><div className="loading absolute top-1/2 mx-auto bottom-1/2 loading-infinity loading-lg"></div></div>
    // <Skeleton className="w-[100vw] h-[100vh]" ><span className="loading absolute top-1/2 left-1/2 loading-infinity loading-lg"></span></Skeleton>
  )
}
