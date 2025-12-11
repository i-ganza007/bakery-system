"use server"
import { redirect } from 'next/navigation'

export async function submitForm(formData: FormData){
    console.log(formData.get('email'),formData.get('password'))
    
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    redirect('/dashboard');
}