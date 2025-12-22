"use client"
import DashBoardTop from '../../../Components/DashBoardTop'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
export default function EditProducts(){
    return (
        <div className='py-25 px-20'>
            <div className='flex flex-col gap-10'>
                <DashBoardTop title={"Add products"}/>
                <div className='flex gap-20'>
                    <div className='size-96 relative border border-[#FBEFD1] rounded-md'>
                        <Input id="picture" type="file" className='w-full h-full opacity-0 cursor-pointer' />
                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 pointer-events-none'>
                            <svg className='' width="101" height="76" viewBox="0 0 101 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M91.5312 0C96.7608 0 101 4.23924 101 9.46875V66.2812C101 71.5108 96.7608 75.75 91.5312 75.75H9.46875C4.23924 75.75 0 71.5108 0 66.2812V9.46875C5.15392e-07 4.23924 4.23924 0 9.46875 0H91.5312ZM71.1113 23.7676C70.187 22.8432 68.6883 22.8433 67.7637 23.7676L41.0312 50.5L30.0801 39.5488C29.1557 38.6245 27.657 38.6245 26.7324 39.5488L12.625 53.6562V63.125H88.375V41.0312L71.1113 23.7676ZM22.0938 11.0469C15.9927 11.0469 11.0469 15.9927 11.0469 22.0938C11.0469 28.1948 15.9927 33.1406 22.0938 33.1406C28.1948 33.1406 33.1406 28.1948 33.1406 22.0938C33.1406 15.9927 28.1948 11.0469 22.0938 11.0469Z" fill="#FBEBC4"/>
                            <path d="M91.5312 0C96.7608 0 101 4.23924 101 9.46875V66.2812C101 71.5108 96.7608 75.75 91.5312 75.75H9.46875C4.23924 75.75 0 71.5108 0 66.2812V9.46875C5.15392e-07 4.23924 4.23924 0 9.46875 0H91.5312ZM71.1113 23.7676C70.187 22.8432 68.6883 22.8433 67.7637 23.7676L41.0312 50.5L30.0801 39.5488C29.1557 38.6245 27.657 38.6245 26.7324 39.5488L12.625 53.6562V63.125H88.375V41.0312L71.1113 23.7676ZM22.0938 11.0469C15.9927 11.0469 11.0469 15.9927 11.0469 22.0938C11.0469 28.1948 15.9927 33.1406 22.0938 33.1406C28.1948 33.1406 33.1406 28.1948 33.1406 22.0938C33.1406 15.9927 28.1948 11.0469 22.0938 11.0469Z" stroke="#FBEBC4"/>
                            </svg>
                            <Label htmlFor="picture" className='text-center text-[#6E3B29]'>Upload Image</Label>
                        </div>
                    </div>
                    <div className=' w-[60%] flex flex-col gap-5'>
                        <div className='flex flex-col items-start gap-5'>
                            <Label htmlFor="picture" className='text-center text-[#6E3B29] text-xl'>Name</Label>
                            <Input id="picture" type="text" className='border border-[#FBEFD1] ' />
                        </div>

                        <div className='flex flex-col items-start gap-5'>
                            <Label htmlFor="picture" className='text-center text-[#6E3B29] text-xl'>Category</Label>
                            <Input id="picture" type="text" className='border border-[#FBEFD1] ' />
                        </div>

                        <div className='flex flex-col items-start gap-5'>
                            <Label htmlFor="picture" className='text-center text-[#6E3B29] text-xl'>Price</Label>
                            <Input id="picture" type="text" className='border border-[#FBEFD1] ' />
                        </div>

                        <div className='flex flex-col items-start gap-5'>
                            <Label htmlFor="picture" className='text-center text-[#6E3B29] text-xl'>Stock</Label>
                            <Input id="picture" type="text" className='border border-[#FBEFD1] ' />
                        </div>

                        <div className='flex gap-10'>
                            <Button className='bg-[#F38619] px-10 py-7'>Update</Button>
                            <Button className='text-[#4C200B] bg-[#FBEFD1] px-10 py-7'>Cancel</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}