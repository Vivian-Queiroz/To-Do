import { useEffect, useState } from "react";


export function useTasks() {
  //funçao para o app ler o que esta salvo no localStorage,
  const [tasks, setTasks] = useState(() => { 
    const saved = localStorage.getItem('tasks')
    return saved ? JSON.parse(saved) : [] 
  });
  //Se saved existir (não for null), converte o texto de volta pra array com JSON.parse. Se não existir, começa com um array vazio [].
  //JSON.stringify(array) → transforma array em texto (pra salvar)
  //JSON.parse(texto)     → transforma texto de volta em array (pra usar)

  function addTask(task){
    const newTask = {
      id: Date.now(), // gera um número único baseado no tempo atual
      ...task,
    }
    setTasks([...tasks, newTask])
  }

  function deleteTask(taskId){
    
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  const stats = {
    total: tasks.length,
    done: tasks.filter(task => task.done).length, 
    pending: tasks.filter(task => !task.done).length, // Verifica se a tarefa não está concluída
    late: tasks.filter(task => { 
      if (!task.date || task.done) return false; // Se a tarefa não tem data, OU se a tarefa já está concluída, então ela não conta como atrasada
      const [year, month, day] = task.date.split('-'); // Supondo que a data esteja no formato "YYYY-MM-DD"
      const taskDate = new Date(year, month - 1, day); // Cria um objeto Date para a data da tarefa
      const today = new Date(); // Data atual
      today.setHours(0, 0, 0, 0); // Zera as horas para comparar apenas a data
      return taskDate < today;
    }).length 
  }

  //lógica para marcar como conluído
  function toggleTaskDone(Id){
    setTasks(tasks.map(task => {
      if (task.id === Id) {
        return {...task, done: !task.done}
      } else {
        return task
      }
    }))
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  },[tasks])

  return{
    tasks,
    addTask,
    deleteTask,
    stats,
    toggleTaskDone
  }
    
}