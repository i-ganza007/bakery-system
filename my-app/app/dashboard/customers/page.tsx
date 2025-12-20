"use client"

import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { SearchIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
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
import DashBoardTop from '../../Components/DashBoardTop'

export default function CustomerDashBoard(){
    const invoices = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, New York, NY 10001",
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "+1 (555) 234-5678",
    address: "456 Oak Ave, Los Angeles, CA 90001",
  },
  {
    name: "Michael Johnson",
    email: "michael.j@example.com",
    phone: "+1 (555) 345-6789",
    address: "789 Pine Rd, Chicago, IL 60601",
  },
  {
    name: "Emily Davis",
    email: "emily.davis@example.com",
    phone: "+1 (555) 456-7890",
    address: "321 Elm St, Houston, TX 77001",
  },
  {
    name: "Robert Wilson",
    email: "robert.w@example.com",
    phone: "+1 (555) 567-8901",
    address: "654 Maple Dr, Phoenix, AZ 85001",
  },
  {
    name: "Sarah Brown",
    email: "sarah.brown@example.com",
    phone: "+1 (555) 678-9012",
    address: "987 Cedar Ln, Philadelphia, PA 19101",
  },
  {
    name: "David Martinez",
    email: "david.m@example.com",
    phone: "+1 (555) 789-0123",
    address: "147 Birch Blvd, San Antonio, TX 78201",
  },
]
    return (
        <div className="w-full h-full py-10 px-20">
            <div className="flex flex-col justify-center gap-10 py-18">
                <DashBoardTop title={"Customers"}/>
                <div className="flex items-center justify-between">
                    <InputGroup className="w-2/6 py-7 px-5">
                        <InputGroupInput className="text-black" placeholder="search customer" />
                        <InputGroupAddon>
                        <SearchIcon />
                        </InputGroupAddon>
                    </InputGroup>
                    <Button className="bg-[#FF7C00] text-white text-2xl py-7 px-33 w-20">Add Customer</Button>
                </div>
            </div>
            <div className="border border-gray-300 rounded-lg overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="font-semibold text-black text-xl text-center p-5">Name</TableHead>
                            <TableHead className="font-semibold text-black text-xl text-center">Email</TableHead>
                            <TableHead className="font-semibold text-black text-xl text-center">Phone</TableHead>
                            <TableHead className="font-semibold text-black text-xl text-center">Address</TableHead>
                            <TableHead className="font-semibold text-black text-xl text-center"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {invoices.map((invoice, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium p-5 text-center">{invoice.name}</TableCell>
                            <TableCell className="text-center">{invoice.email}</TableCell>
                            <TableCell className="text-center">{invoice.phone}</TableCell>
                            <TableCell className="text-center">{invoice.address}</TableCell>
                            <TableCell className="text-center text-[#DE7E0A] bg-[#FDF8E9]">Edit</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                 </Table>
            </div>
        </div>
    )
}