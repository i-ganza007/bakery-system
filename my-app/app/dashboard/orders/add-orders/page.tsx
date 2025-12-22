"use client"
import { SearchIcon } from 'lucide-react'
import DashBoardTop from '../../../Components/DashBoardTop'
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import OrderCard from '../../../Components/OrderCard'
import {Card} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
export default function AddOrders(){
    return (
        <div className='py-25 px-20'>
            <div className='flex flex-col gap-10'>
                <DashBoardTop title={"Add Order"}/>
                <div className='flex '>
                    <div className='w-3/6 flex flex-col gap-5'>
                        <InputGroup className="w-full py-7 px-5">
                            <InputGroupInput className="text-black" placeholder="search product" />
                            <InputGroupAddon>
                            <SearchIcon />
                            </InputGroupAddon>
                        </InputGroup>
                        <div className='w-full border border-2 rounded-md p-3 flex flex-col gap-5'>
                            <OrderCard/>
                            <OrderCard/>
                            <OrderCard/>
                            <OrderCard/>
                            <OrderCard/>
                        </div>
                    </div>

                    <div className='w-2/5'>
                        <Card className='p-5'>
                            <h1 className='text-2xl '>Customer</h1>
                            <Select>
                                <SelectTrigger className="w-[90%] p-7 placeholder:text-2xl">
                                    <SelectValue placeholder="Select Customer" className='' />
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

                            <div>
                                <h1 className='text-2xl '>Cart Summary</h1>
                                <div  className='w-full border border-2 rounded-md p-3 flex flex-col gap-5'>
                                    <OrderCard/>
                                    <OrderCard/>    
                                </div>
                                <Select>
                                    <SelectTrigger className="w-[90%] p-7 placeholder:text-2xl">
                                        <SelectValue placeholder="Payment method"/>
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
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}