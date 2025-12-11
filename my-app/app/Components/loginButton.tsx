"use client"
import { useFormStatus } from "react-dom"
import { Button } from "@/components/ui/button"

export function LoginButton(){
    const {pending} = useFormStatus()
    return (
        <div>
            {pending ? <Button  size={"lg"} className="w-[400px] bg-[#F99333] text-grey text-2xl p-8">Signing In ...</Button> : <Button  size={"lg"} className="w-[400px] bg-[#F99333] text-white text-2xl p-8">Login</Button> }
        </div>
    )
}