import { GoogleLogin } from "@react-oauth/google";
import React,{ useState } from "react"
function ToDoList(){
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

function handleInputChange(event){
  setNewTask(event.target.value);

}

function addTask(){
  if(newTask.trim() !== ""){
    setTasks(tasks => [...tasks, newTask]);
    setNewTask("");
  }
}
function deleteTask(index){
  const updatedTasks = tasks.filter((_, i)=> i !== index);
  setTasks(updatedTasks);


}
function moveTaskUp(index){
  if(index > 0){
    const updatedTasks = [... tasks];
    [updatedTasks[index],updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
    setTasks(updatedTasks);
  }

}
function moveTaskDown(index){
  if(index < tasks.length - 1){
    const updatedTasks = [... tasks];
    [updatedTasks[index],updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
    setTasks(updatedTasks);
  }

}

  return(<div className="to_do_list">
    <h1> To- Do-LIST</h1>
    <div>
      <input type ="text"
      placeholder="Enter a Task"
      value= {newTask}
      onChange={handleInputChange}/>
      <button className="addbutton"
      onClick={addTask}>➕</button>
    </div>
    <ol>
      {tasks.map((task, index)=> 
      <li key={index}>
        <span className="text">{task}</span>
        <button className="moveUp"
        onClick={() => moveTaskUp(index)}>
        ⬆️
        </button>
        <button className="movedown"
        onClick={() => moveTaskDown(index)}>
        ⏬
        </button>
        <button className="Delete-Button"
        onClick={() => deleteTask(index)}>
        🗑️
        </button>
      </li>)}
    </ol>

  </div>);

}
export default ToDoList