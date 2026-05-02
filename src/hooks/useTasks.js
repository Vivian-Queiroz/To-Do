import { useState } from "react";


export function useTasks() {
  const [tasks, setTasks] = useState([]);

  function addTask(task){
    setTasks([...tasks, task])
  }

  return{
    tasks,
    addTask
  }
    
}