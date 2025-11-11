const TodoList = ({todos}) => {
  return (
    <ul className="text-center mt-10">
        {todos.map((item)=>(
          <li className="list-none mt-3 text-2xl" key={item.id}>
            {item.text}
          </li>
        ))}
    </ul>
  )
}

export default TodoList