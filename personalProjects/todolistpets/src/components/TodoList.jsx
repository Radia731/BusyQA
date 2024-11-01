import { useState, useEffect } from "react";

function TodoList(){
  const [ newTask , setNewTask] = useState("") // to add a new task
  const [tasks, setTasks] = useState(["wash the dogs", "fill up the water cup"]) //to store the tasks
  const [isEditing, setIsEditing]= useState(null) // to track the task that's being edited 
  const [editedTask, setEditedTask]= useState("") // to store edited tasks

// handles input change
  function handleInputChange(e){
      setNewTask(e.target.value)
    }
    
//to add a new function 
  function handleAddTask( ){
    if(newTask.trim() !== "")
    setTasks([...tasks, newTask])
   setNewTask("")
  }
  
  function taskStatus( index){
    
  }
  function editTask( index){
    
  }
  function deleteTask(index) {
    
  }
    return (
    <>
        <div>
         <h3> Daily Duty</h3>
            <input 
                type="text" 
                placeholder="add a duty"
                value={newTask} 
                onChange={handleInputChange}
            />
            <button className="addButton"
                  onClick={handleAddTask}>
                     Add
             </button>
        </div>

        <ol>
        {tasks.map((tasks, index) =>
            <li key={index}>
                <span className="text"> {tasks}</span>
                <button 
                    className="delete-btn"
                    onClick={deleteTask(index)}>
                    Delete
                </button>
            </li>
        )}
        </ol>    

    </>
    )
}
export default TodoList