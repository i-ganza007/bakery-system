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
                <div className="flex items-center justify-between gap-20">
                    <h1 className="text-5xl font-semibold">Products</h1>
                    <div className="rounded-full w-12 h-12 bg-red-200 flex items-center justify-center cursor-pointer hover:bg-red-300 transition-colors flex-shrink-0">
                        <svg width="20" height="20" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                        <path d="M14.3282 0C10.388 0 7.16411 4.0119 7.16411 8.95513C7.16411 13.8984 10.388 17.9103 14.3282 17.9103C18.2685 17.9103 21.4923 13.8984 21.4923 8.95513C21.4923 4.0119 18.2685 0 14.3282 0ZM6.84172 17.9103C3.04475 18.0894 0 21.2058 0 25.0744V28.6564H28.6564V25.0744C28.6564 21.2058 25.6475 18.0894 21.8147 17.9103C19.8804 20.0953 17.2297 21.4923 14.3282 21.4923C11.4268 21.4923 8.77603 20.0953 6.84172 17.9103Z" fill="#6B3E26"/>
                        </svg>
                    </div>
                </div>
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


            <div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className=" font-semibold text-black text-xl">Name</TableHead>
                            <TableHead className="font-semibold text-black text-xl">Price</TableHead>
                            <TableHead className="font-semibold text-black text-xl">Stock</TableHead>
                            <TableHead className="font-semibold text-black text-xl text-right">Category</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {invoices.map((invoice, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium p-5">{invoice.name}</TableCell>
                            <TableCell className="">{invoice.price}</TableCell>
                            <TableCell>{invoice.stock}</TableCell>
                            <TableCell className="text-right">{invoice.category}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                 </Table>
            </div>
        </div>
    )
}