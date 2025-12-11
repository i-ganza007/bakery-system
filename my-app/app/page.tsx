"use client"
import Image from "next/image";
import Cake from '../public/loginpageimg.webp'
import Form from 'next/form'
import CupCake from '../public/cupcake.webp'
import Logo from '../public/bakery_logo.webp'
import {LoginButton} from './Components/loginButton'
import {
  MailIcon
} from "lucide-react"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { submitForm } from "./serverAct/custom";
export default function Home() {
  return (
    <div className="h-screen flex">
      <div className="relative w-2/5">
        <Image src={Cake} alt="Cake Background" className="w-full h-screen"/>
        <Image src={Logo} alt='Logo' className="absolute top-0"/>
      </div>

      <div className="bg-[#F7E9B2] w-full flex flex-col justify-center gap-20 items-center">
        <div className="flex justify-center items-center">
          <Image src={CupCake} alt="Cupcake" className=""/>
          <h1 className="text-black text-8xl font-bold">Bakery</h1>
        </div>

        <div>
          <h1 className="text-black text-6xl font-bold">Welcome back!</h1>
        </div>

        <div>
          
          <Form action={submitForm}>
            <InputGroup className="p-8 w-[400px] mb-4 border border-black">
              <InputGroupInput placeholder="Email" className="text-3xl" name="email" id="email"/>
              <InputGroupAddon>
                <MailIcon size={"36"} absoluteStrokeWidth={false} color="black"/>
              </InputGroupAddon>
            </InputGroup>

            <InputGroup className="p-8 w-[400px] mb-4 border border-black">
              <InputGroupInput placeholder="Password" className="text-3xl" name="password" id="password"/>
              <InputGroupAddon>
                <MailIcon size={"36"} absoluteStrokeWidth={false} color="black"/>
              </InputGroupAddon>
            </InputGroup>

            <LoginButton/>
          </Form>
        </div>
      </div>
    </div>
  );
}
