import { useState, useEffect } from "react"
import TodoServices from "../services/api/todoService"
import serviceClient from "../services/httpClient/serviceClient"
import CustomConsole from "../framework/utils/customConsole";
import { todo } from "node:test";

const Todo = () =>{
    const [todos, setTodos] = useState([] as any);
    useEffect(()=>{
        const todoService =  new TodoServices(serviceClient)
        const fetchTodos = async ()=>{
            const todos = await todoService.getTodos();
            CustomConsole.log(todos[2])
            setTodos(todos);
        }
        fetchTodos();
    },[])
    const addTodo = () => {
        setTodos([...todos, {
            completed :  false,
            id :  290,
            title :  "New 1",
            userId :  1
        }]);
      };
      
    const handleCreateTodo = async (todo:any) => {
        const todoService = new TodoServices(serviceClient);
        const createdTodo = await todoService.createTodo(todo);
        CustomConsole.log(createdTodo.id);
        setTodos([
            ...todos,{
                completed :  false,
                id :  createdTodo.id,
                title :  "New 1",
                userId :  1
            }

        ]);
        CustomConsole.log(todos);
    }

    return(
        <div>
            <h2>Todo List</h2>
            <button onClick={() => handleCreateTodo({title:'New todo', completed:false })}>
                Create Todo
            </button>
            <button onClick={()=>addTodo()}>Click Here!</button>
            <ul>
                {
                    todos.map((todo:any)=>(
                        <li key={todo.id}>{todo.title}</li>
                    ))
                }
            </ul>
        </div>
    )
}
export default Todo