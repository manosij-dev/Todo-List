import { useState } from 'react'
const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("")

  function createTodo(){
    if(!value.trim()){
        setValue("")
        return
    }
    addTodo(value)
    setValue("")
  }
  return (
    <div className='mt-10 text-center'>
     <input className='border-solid h-10 w-100 bg-gray-300 p-5 rounded outline-none' type="text" value={value} placeholder="Enter a task" onChange={(e)=>setValue(e.target.value)} />
     <button className='ml-3 bg-green-400 rounded p-2 scale-95' onClick={createTodo}>Add Todo</button>
    </div>
  )
}

export default TodoForm