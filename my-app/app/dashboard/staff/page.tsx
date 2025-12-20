"use client"

import DashBoardTop from '../../Components/DashBoardTop'
import { Button } from "@/components/ui/button"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { Plus,SearchIcon } from 'lucide-react'
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


enum Role {
    Admin = "Admin",
    Staff = "Staff"
}
enum Status {
    Active='Active',
    DeActive='De-Activate'
}
interface Invoices{
    name:String
    email:String
    role:Role
    status:Status
}

export default function ManageStaff(){
    const invoices:Invoices[] = [
  {
    name: "John Doe",
    email: "john.doe@bakery.com",
    role: Role.Admin,
    status: Status.Active,
  },
  {
    name: "Jane Smith",
    email: "jane.smith@bakery.com",
    role: Role.Staff,
    status: Status.Active,
  },
  {
    name: "Mike Johnson",
    email: "mike.johnson@bakery.com",
    role: Role.Admin,
    status: Status.Active,
  },
  {
    name: "Sarah Williams",
    email: "sarah.williams@bakery.com",
    role: Role.Staff,
    status: Status.DeActive,
  },
  {
    name: "Tom Brown",
    email: "tom.brown@bakery.com",
    role: Role.Staff,
    status: Status.Active,
  },
  {
    name: "Emily Davis",
    email: "emily.davis@bakery.com",
    role: Role.Staff,
    status: Status.Active,
  },
  {
    name: "David Wilson",
    email: "david.wilson@bakery.com",
    role: Role.Staff,
    status: Status.DeActive,
  },
]
    return (
        <div className="py-25 px-20 flex flex-col gap-15">
            <div className='flex flex-col gap-10'>
                <DashBoardTop title={"List Staff"}/>
                <div className='flex items-center justify-between'>
                    <InputGroup className="w-3/6 py-7 px-5">
                        <InputGroupInput className="placeholder:text-xl placeholder:text-[#6B3E26]" placeholder="search product" />
                        <InputGroupAddon>
                        <SearchIcon color='#6B3E26' size={20}/>
                        </InputGroupAddon>
                    </InputGroup>
                    <Input type="email" placeholder="Role" className='text-center w-48 p-7 text-4xl placeholder:text-xl placeholder:text-[#6B3E26]'/>
                    <Button className="bg-[#FF7C00] text-white text-2xl py-6 px-33 w-48"><Plus/>Add Product</Button>
                </div>
            </div>
            <div className="border border-gray-300 rounded-lg overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="font-semibold text-black text-xl text-center p-5">Name</TableHead>
                            <TableHead className="font-semibold text-black text-xl text-center">Email</TableHead>
                            <TableHead className="font-semibold text-black text-xl text-center">Role</TableHead>
                            <TableHead className="font-semibold text-black text-xl text-center">Status</TableHead>
                            <TableHead className="font-semibold text-black text-xl text-center">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {invoices.map((invoice, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium p-5 text-center">{invoice.name}</TableCell>
                            <TableCell className="text-center">{invoice.email}</TableCell>
                            <TableCell className="text-center">{invoice.role}</TableCell>
                            <TableCell className="text-center">
                                <span className={`inline-block px-4 py-2 rounded-md text-sm font-medium ${invoice.status === Status.Active ? "bg-[#ECF8E5] text-[#2F5E1E]" : "bg-[#FFECD8] text-[#8B4513]"}`}>
                                    {invoice.status}
                                </span>
                            </TableCell>
                            <TableCell className="text-center">
                                <div className="flex gap-2 justify-center">
                                    <Button className="text-[#DE7E0A] bg-[#FDF8E9] px-4 py-1 text-sm">Edit</Button>
                                    <Button className="bg-[#DD6E42] text-white px-4 py-1 text-sm">Delete</Button>
                                </div>
                            </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                 </Table>
            </div>
        </div>
    )
}