"use client"
import DashBoardTop from '../../Components/DashBoardTop'
import {Card} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Profile(){
    return (
        <div className='py-25 px-20 flex flex-col'>
            <DashBoardTop title={"Profile"}/>
            <div className='py-2 self-center w-4/6 mt-10'>
                <Card className='py-25 px-40 flex flex-col justify-center gap-25'>
                    <div className='flex flex-col items-start gap-6 text-2xl'>
                        <div className='flex gap-5'>
                            <p>Name:</p>
                            <p>Omkar deshmane</p>
                        </div>

                        <div className='flex gap-5'>
                            <p>Email:</p>
                            <p> omkardeshmane832@gmail.com</p>
                        </div>

                        <div className='flex gap-5'>
                            <p>Password:</p>
                            <p>*********</p>
                        </div>
                    </div>
                    <div className='flex justify-around'>
                        <Button className='text-[#945631] bg-[#FBF7E6] px-20 py-7 text-xl'>Cancel</Button>
                        <Button className='text-white bg-[#FFA440] px-20 py-7 text-xl'>Save</Button>
                    </div>
                </Card>
            </div>
        </div>
    )
}