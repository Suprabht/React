import React, {useState, useEffect} from 'react';
import './App.css';
//Import component
import Form from './componenets/Form';
import TodoList from './componenets/TodoList';

function App() {
  
  const[inputText, setInputText] = useState("");
  const[todos, setTodos] = useState([]);
  const[status, setStatus] = useState("all");
  const[filteredTodos, setFilteredTodos] = useState([]);

  useEffect(()=>{
    getLocalToos();
  },[])

  useEffect(()=>{
    filterHandler();
    saveLocalToos();
  },[todos, status])

  const filterHandler = () =>
  {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo =>todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo =>todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;

    }
  }

  const saveLocalToos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
  }

  const getLocalToos = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    }else{
     let todoLocal = JSON.parse(localStorage.getItem("todos"));
     setTodos(todoLocal)
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Paul's Todo List</h1>
      </header>
      <Form 
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText} 
        status={status} 
        setStatus={setStatus}
        >
      </Form>
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}></TodoList>
    </div>
  );
}

export default App;
