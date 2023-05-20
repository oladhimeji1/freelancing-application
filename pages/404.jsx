import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function NotFound(){

    const router = useRouter();
    useEffect(()=>{
        setTimeout(()=>{
            router.push('/')
        }, 3000)
    }, [])
    return (
        <div className="py-20 text-center m-auto">
            <h1 className="text-4xl font-bold uppercase">Ooooops...</h1>
            <h2>That page cannot be found.</h2>
            <p>Go back to the <Link className="" href="/">Home</Link></p>
        </div>
    )
}