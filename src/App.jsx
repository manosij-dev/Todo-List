import { useEffect, useState } from "react"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
function App() {
    const [todos, setTodos] = useState(() => {
     const saved = localStorage.getItem("todos");
     return saved ? JSON.parse(saved) : [];
   });
   
   useEffect(() => {
     localStorage.setItem("Task", JSON.stringify(todos))
    }, [todos])

   function addTodo(text){
    setTodos([...todos, {id:Date.now(), text, completed:false}])
  }

  return (
    <>
    <h1 className="text-center font-bold text-7xl mt-5">Todo List</h1>
    <TodoForm addTodo={addTodo}/>
    <TodoList todos={todos}/>
    </>
  )
}

export default App