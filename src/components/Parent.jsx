import { useState } from "react"
import { Input } from "./Input"
import { Items } from "./Items"
export function Parent(){
    let [tasks,setTasks] = useState([])
    let [task,setTask] = useState('')
     function handleChange(e){
        // console.log('Chnged')
        setTask(e.target.value)
        // console.log(e.target.value)

    }
    function handleSubmit(){
        // console.log('JIIII')

        setTasks(prev=>[...prev,{todo:task,comp:false}])
        setTask('')

    }
    function toggleCompleted(idx) {
    setTasks((prevTasks) =>
      prevTasks.map((item, i) =>
        i === idx ? { ...item, comp: !item.comp } : item
      )
    );
  }
  function handleDelete(idx){
    // console.log('Wagwaana papa')
    setTasks(prev=>prev.filter((value,index)=> index !== idx 
    ))
    // setTasks(prev=>{
    //   prev.filter((x,id)=>id !== idx)
    // })
  }
    return (
        <>
          <div className="flex flex-col ">
            <Input change={handleChange} submit={handleSubmit} protask={task}/>
            <Items arr={tasks} toggle={toggleCompleted} deleteAction={handleDelete}/>
          </div>
        </>
    )
}