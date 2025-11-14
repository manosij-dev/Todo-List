const TodoList = ({todos, delToDo, editToDo}) => {
  return (
    <div className="mt-10 flex flex-col items-center w-full">
        {todos.map((item)=>(
          <div className="flex justify-between items-center w-1/3 bg-white shadow-md border border-gray-200 rounded-xl px-5 py-3 mt-3 " key={item.id}>
            <span className="text-xl font-medium text-gray-800">
              {item.text}
            </span>
            <div>
              <button className="bg-red-500 scale-95 text-white font-semibold px-4 py-2 rounded-lg" onClick={()=>delToDo(item.id)}>Delete</button>
              <button className="bg-orange-500 scale-95 text-white font-semibold px-4 py-2 rounded-lg" onClick={()=>editToDo(item)}>Edit</button>
            </div>
          </div>
        ))}
    </div>
  )
}

export default TodoList