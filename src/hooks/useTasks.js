import { useEffect, useState } from "react";

export function useTasks() {

  // ─── Estados ────────────────────────────────────────────────────────────────

  // Lê o que está salvo no localStorage.
  // Se "saved" existir (não for null), converte o texto de volta pra array com JSON.parse.
  // Se não existir, começa com um array vazio [].
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks')
    return saved ? JSON.parse(saved) : []
  });

  // Categoria usada para filtrar as tarefas. Vazio = mostra todas.
  const [activeCategory, setActiveCategory] = useState('')


  // ─── Ações ──────────────────────────────────────────────────────────────────

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

  // Marca/desmarca uma tarefa como concluída
  function toggleTaskDone(Id){
    setTasks(tasks.map(task => {
      if (task.id === Id) {
        return {...task, done: !task.done}
      } else {
        return task
      }
    }))
  }


  // ─── Dados calculados ───────────────────────────────────────────────────────

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

  // Lista de tarefas já filtrada pela categoria ativa
  const filteredTasks = tasks.filter(task => {
    if (!activeCategory) return true // se não tem filtro ativo, mostra tudo
    return task.category === activeCategory // senão, só mostra se bater
  })


  // ─── Efeitos ────────────────────────────────────────────────────────────────

  // Salva no localStorage toda vez que "tasks" mudar
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  },[tasks])


  // ─── Retorno do hook ────────────────────────────────────────────────────────

  return{
    tasks,
    addTask,
    deleteTask,
    stats,
    toggleTaskDone,
    filteredTasks,
    activeCategory,
    setActiveCategory,
  }
}