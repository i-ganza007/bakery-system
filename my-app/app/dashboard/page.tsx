"use client"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import {SearchIcon} from "lucide-react"

export default function DashBoarHome(){
    return (
        <nav className="h-full w-full flex grow gap-20 bg-red-300">
            <div>
                <h1 className="text-5xl font-semibold">Dashboard</h1>
            </div>
            <div className="flex gap-4">
                <InputGroup>
                    <InputGroupInput placeholder="Search..." />
                    <InputGroupAddon>
                    <SearchIcon />
                    </InputGroupAddon>
                </InputGroup>
            </div>
        </nav>
    )
}