import { useState } from "react";


export function useTasks() {
  const [tasks, setTasks] = useState([]);

  function addTask(task){
    setTasks([...tasks, task])
  }

  function deleteTask(taskId){
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  const stats = {
    total: tasks.length,
    done: tasks.filter(task => task.done).length,
    pending: tasks.filter(task => !task.done).length, // Verifica se a tarefa não está concluída
    late: tasks.filter(task => { 
      if (!task.done || task.done) return false; // Verifica se a tarefa não está concluída ou se está marcada como concluída (para considerar apenas as tarefas pendentes)
      const [year, month, day] = task.date.split('-'); // Supondo que a data esteja no formato "YYYY-MM-DD"
      const taskDate = new Date(year, month - 1, day); // Cria um objeto Date para a data da tarefa
      const today = new Date(); // Data atual
      today.setHours(0, 0, 0, 0); // Zera as horas para comparar apenas a data
      return taskDate < today;
    }).length 
  }

  function toggleTaskDone(Id){
    setTasks(tasks.map(task => {
      if (task.id === Id) {
        return {...task, done: !task.done}
      } else {
        return task
      }
    }))
  }

  return{
    tasks,
    addTask,
    deleteTask,
    stats,
    toggleTaskDone
  }
    
}