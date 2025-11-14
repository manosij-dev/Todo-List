import { useEffect, useState } from "react"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import DelModal from "./components/DelModal";
import EditModal from "./components/EditModal";

function App() {
    const [todos, setTodos] = useState(() => {
     const saved = localStorage.getItem("todos");
     return saved ? JSON.parse(saved) : [];
   });

   const [showModal , setShowModal] = useState(false);
   const [toDoDelete , setToDoDelete ] = useState(null);

   const [showEditModal , setShowEditModal] = useState(false);
   const [toDoEdit , setToDoEdit ] = useState(null);

   const handleDelClick = (id)=>{
      setShowModal(true);
      setToDoDelete(id);
   }

   const confirmDelete = ()=>{
    setTodos(todos.filter((item) => item.id !== toDoDelete));
    setShowModal(false);
    setToDoDelete(null);
  }

  const cancelDelete = () => {
    setShowModal(false);
    setToDoDelete(null);
  }

  const handleEditClick = (todo)=>{
      setShowEditModal(true);
      setToDoEdit(todo);
   }

  const confirmEdit = (newText) => {
    setTodos(
      todos.map(todo =>
        todo.id === toDoEdit.id ? { ...todo, text: newText } : todo))
    setShowEditModal(false);
    setToDoEdit(null);
  }

  const cancelEdit = () => {
    setShowEditModal(false);
    setToDoEdit(null);
  }
   
   useEffect(() => {
     localStorage.setItem("Task", JSON.stringify(todos))
    }, [todos])

   function addTodo(text){
    setTodos([...todos, {id:Date.now(), text, completed:false}])
  }

  return (
    <>
    <h1 className="text-center font-bold text-7xl mt-5 text-blue-800">Todo List</h1>
    <TodoForm addTodo={addTodo}/>
    <TodoList todos={todos} delToDo={handleDelClick} editToDo={handleEditClick}/>
    {showModal && <DelModal  onConfirm={confirmDelete} onCancel={cancelDelete}/>}
    {showEditModal && <EditModal  onConfirm={confirmEdit} onCancel={cancelEdit} currentText={toDoEdit.text}/>}
    </>
  )
}

export default App