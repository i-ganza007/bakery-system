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

export default function ProductsPage(){
    const invoices = [
  {
    name: "Chocolate Croissant",
    price: "$3.50",
    stock: 45,
    category: "Pastries",
  },
  {
    name: "Sourdough Bread",
    price: "$5.99",
    stock: 28,
    category: "Breads",
  },
  {
    name: "Blueberry Muffin",
    price: "$2.75",
    stock: 60,
    category: "Muffins",
  },
  {
    name: "Red Velvet Cake",
    price: "$25.00",
    stock: 12,
    category: "Cakes",
  },
  {
    name: "Vanilla Cupcake",
    price: "$3.00",
    stock: 72,
    category: "Cupcakes",
  },
  {
    name: "Baguette",
    price: "$4.25",
    stock: 35,
    category: "Breads",
  },
  {
    name: "Cinnamon Roll",
    price: "$4.50",
    stock: 40,
    category: "Pastries",
  },
]
    return (
        <div className="py-10 px-20">
            <div className="flex flex-col justify-center gap-10 py-18">
                <DashBoardTop title={"Products"}/>
                <div className="flex items-center justify-between">
                    <InputGroup className="w-2/6 py-7 px-5">
                        <InputGroupInput className="text-black" placeholder="search product" />
                        <InputGroupAddon>
                        <SearchIcon />
                        </InputGroupAddon>
                    </InputGroup>
                    <Button className="bg-[#FF7C00] text-white text-2xl py-7 px-33 w-20">Add Product</Button>
                </div>
            </div>


            <div className="border border-gray-300 rounded-lg overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="font-semibold text-black text-xl text-center p-5">Name</TableHead>
                            <TableHead className="font-semibold text-black text-xl text-center">Price</TableHead>
                            <TableHead className="font-semibold text-black text-xl text-center">Stock</TableHead>
                            <TableHead className="font-semibold text-black text-xl text-center">Category</TableHead>
                            <TableHead className="font-semibold text-black text-xl text-center">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {invoices.map((invoice, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium p-5 text-center">{invoice.name}</TableCell>
                            <TableCell className="text-center">{invoice.price}</TableCell>
                            <TableCell className="text-center">{invoice.stock}</TableCell>
                            <TableCell className="text-center">{invoice.category}</TableCell>
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