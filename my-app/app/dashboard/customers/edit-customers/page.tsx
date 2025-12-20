"use client"
import DashBoardTop from '../../../Components/DashBoardTop'
import {Card} from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function AddCustomer(){
    return (
        <div className='py-25 px-20 flex flex-col'>
            <div>
                <DashBoardTop title={"Edit Customers"}/>
            </div>
            <div className='py-2 self-center w-4/6 mt-10'>
                <Card className=' w-5/6 py-15 px-40 flex flex-col justify-center gap-15'>
                    <Input type="email" placeholder="Name" />
                    <Input type="email" placeholder="Email" />
                    <Input type="email" placeholder="Phone" />
                    <Textarea placeholder='Address'/>
                    <div className='flex justify-around'>
                        <Button className='text-[#945631] bg-[#FBF7E6] px-20 py-7 text-xl'>Cancel</Button>
                        <Button className='text-white bg-[#FFA440] px-20 py-7 text-xl'>Save</Button>
                    </div>
                </Card>
            </div>
        </div>
    )
}