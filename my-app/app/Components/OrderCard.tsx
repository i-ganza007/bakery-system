"use client"
import Choco from '../../public/choco.jpg'
import Image from "next/image"

export default function OrderCard(){
    return (
        <div className='flex items-center gap-5 border border-2 p-2 w-[99%] rounded-md'>
            <div>
                <Image src={Choco} alt='choco-image' className='size-13 rounded-md'/>
                
            </div>
            <div className=''>
                <h2 className='font-semibold'>choco-lava cake</h2>
                <p>stocks: 120</p>
            </div>
        </div>
    )
}