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
                <div className="flex items-center justify-between gap-20">
                    <h1 className="text-5xl font-semibold">Customers</h1>
                    <div className="rounded-full w-12 h-12 bg-red-200 flex items-center justify-center cursor-pointer hover:bg-red-300 transition-colors flex-shrink-0">
                        <svg width="20" height="20" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                        <path d="M14.3282 0C10.388 0 7.16411 4.0119 7.16411 8.95513C7.16411 13.8984 10.388 17.9103 14.3282 17.9103C18.2685 17.9103 21.4923 13.8984 21.4923 8.95513C21.4923 4.0119 18.2685 0 14.3282 0ZM6.84172 17.9103C3.04475 18.0894 0 21.2058 0 25.0744V28.6564H28.6564V25.0744C28.6564 21.2058 25.6475 18.0894 21.8147 17.9103C19.8804 20.0953 17.2297 21.4923 14.3282 21.4923C11.4268 21.4923 8.77603 20.0953 6.84172 17.9103Z" fill="#6B3E26"/>
                        </svg>
                    </div>
                </div>
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