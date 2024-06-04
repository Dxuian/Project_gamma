"use server"
import { Skeleton } from "@/components/ui/skeleton"
export default async function Loading(){
    return (
        <Skeleton className="w-96 h-96" />
    )
}