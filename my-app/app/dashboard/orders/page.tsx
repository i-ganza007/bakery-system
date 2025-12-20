"use client"

import { SearchIcon } from 'lucide-react'
import DashBoardTop from '../../Components/DashBoardTop'
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
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

export default function OrdersDashBoard(){
    const orders = [
        {
            orderId: "ORD-001",
            customer: "John Doe",
            date: "2024-12-10",
            status: "Completed",
            total: "$45.50",
            detail: "View"
        },
        {
            orderId: "ORD-002",
            customer: "Jane Smith",
            date: "2024-12-11",
            status: "Pending",
            total: "$32.75",
            detail: "View"
        },
        {
            orderId: "ORD-003",
            customer: "Michael Johnson",
            date: "2024-12-12",
            status: "Completed",
            total: "$89.00",
            detail: "View"
        },
        {
            orderId: "ORD-004",
            customer: "Emily Davis",
            date: "2024-12-12",
            status: "Processing",
            total: "$56.25",
            detail: "View"
        },
        {
            orderId: "ORD-005",
            customer: "Robert Wilson",
            date: "2024-12-13",
            status: "Completed",
            total: "$73.80",
            detail: "View"
        },
        {
            orderId: "ORD-006",
            customer: "Sarah Brown",
            date: "2024-12-13",
            status: "Cancelled",
            total: "$24.50",
            detail: "View"
        },
        {
            orderId: "ORD-007",
            customer: "David Martinez",
            date: "2024-12-14",
            status: "Pending",
            total: "$105.00",
            detail: "View"
        }
    ]
    
    return (
        <div className='py-25 px-20'>
            <div className='flex flex-col gap-10'>
                <DashBoardTop title={"Order List"}/>
                <div className='flex items-center justify-between'>
                    <div className="flex items-center justify-between">
                        <InputGroup className="w-5/6 py-7 px-5">
                            <InputGroupInput className="text-black" placeholder="search customer" />
                            <InputGroupAddon>
                            <SearchIcon />
                            </InputGroupAddon>
                        </InputGroup>
                    </div>
                    <div>
                        <Select>
                            <SelectTrigger className="w-[100px] p-5 bg-[#FCF8E7]">
                                <SelectValue placeholder="Status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                <SelectLabel>Fruits</SelectLabel>
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="blueberry">Blueberry</SelectItem>
                                <SelectItem value="grapes">Grapes</SelectItem>
                                <SelectItem value="pineapple">Pineapple</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Select>
                            <SelectTrigger className="w-[100px] p-5 bg-[#FCF8E7]">
                                <SelectValue placeholder="Date"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                <SelectLabel>Fruits</SelectLabel>
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="blueberry">Blueberry</SelectItem>
                                <SelectItem value="grapes">Grapes</SelectItem>
                                <SelectItem value="pineapple">Pineapple</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>
            <div className="border border-gray-300 rounded-lg overflow-hidden mt-10">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="font-semibold text-black text-xl text-center p-5">Order ID</TableHead>
                            <TableHead className="font-semibold text-black text-xl text-center">Customer</TableHead>
                            <TableHead className="font-semibold text-black text-xl text-center">Date</TableHead>
                            <TableHead className="font-semibold text-black text-xl text-center">Status</TableHead>
                            <TableHead className="font-semibold text-black text-xl text-center">Total</TableHead>
                            <TableHead className="font-semibold text-black text-xl text-center">Detail</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {orders.map((order, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium p-5 text-center">{order.orderId}</TableCell>
                            <TableCell className="text-center">{order.customer}</TableCell>
                            <TableCell className="text-center">{order.date}</TableCell>
                            <TableCell className="text-center">{order.status}</TableCell>
                            <TableCell className="text-center">{order.total}</TableCell>
                            <TableCell className="text-center text-[#DE7E0A] bg-[#FDF8E9]">{order.detail}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                 </Table>
            </div>
        </div>
    )
}