import react, { useState } from 'react';

function Todo (){
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
  
 const addTodo = () =>{
    if(newTodo.trim()==='') return;
        setTodos([...todos, newTodo]);
          setNewTodo('');
  };

  const removeTodo = (index) => {
    
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div>
       <h1> To-Do </h1>
        <input 
          type= "text"
          placeholder="add a new task"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}/>
        <button onClick={addTodo}>Add</button>
       <ul> 
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => removeTodo(index)}>Remove</button>
              </li>
             ))} 
             </ul>   
      </div>
    );
  
  }
  
  export default Todo;
