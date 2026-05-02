import { useState } from "react";


export function useTasks() {
  const [tasks, setTasks] = useState([]);

  function addTask(task){
    setTasks([...tasks, task])
  }

  function deleteTask(taskId){
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  return{
    tasks,
    addTask,
    deleteTask,
  }
    
}