import { GoPlusCircle } from "react-icons/go";
export function Input({change,submit,protask}){
        
    return (
        <>
            <div className="flex justify-center items-center w-[600px] mx-auto mt-30 gap-7">
                <input type="text" name="task" id="task" className="w-24 h-14 rounded bg-gray-300 w-full text-center" onChange={(e)=>change(e)} value={protask} />
                <button onClick={()=>submit()} type="submit" className="text-3xl"><GoPlusCircle /></button>
            </div>
        </>
    )
}