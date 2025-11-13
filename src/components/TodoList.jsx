const TodoList = ({todos, delToDo}) => {
  return (
    <div className="mt-10 flex flex-col items-center w-full">
        {todos.map((item)=>(
          <div className="flex justify-between items-center w-1/3 bg-white shadow-md border border-gray-200 rounded-xl px-5 py-3 mt-3 transition hover:shadow-lg" key={item.id}>
            <span className="text-xl font-medium text-gray-800">
              {item.text}
            </span>
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg transition" onClick={()=>delToDo(item.id)}>Delete</button>
          </div>
        ))}
    </div>
  )
}

export default TodoList