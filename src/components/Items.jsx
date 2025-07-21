import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { useState , useRef } from "react";
export function Items({arr,toggle,deleteAction}){
    // let [active,setActive] = useState(false)
    let cont = useRef(null)

    let [cancel,setCancel] = useState(false)

   
     const items = arr.map((x,idx)=>{
        return (
        <div className="flex justify-center align-items gap-5" key={idx} >
            <input type="checkbox" name="check" id="check"  onChange={() => toggle(idx)}/>
            <input type="text" disabled className={`bg-gray-100 text-center ${x.comp ? "line-through" : ""}`} value={x.todo} />
            <div className="flex justify-center items-center gap-5">
                <button className="text-3xl" onClick={()=> deleteAction(idx)}><MdDelete /></button>
                <button className="text-3xl"><MdEdit /></button>
            </div>

        </div>
        )
    })
    
    return (
        <div className="mt-10 flex flex-col gap-5">
            {items.length > 0 ? items : <p className="text-2xl text-gray-300 text-center">NOTHING YET</p>}
        </div>
    )
}