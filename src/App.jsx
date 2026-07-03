import { useState, useEffect } from 'react'
import { Header } from './components/Header/Header'
import { useTasks } from './hooks/useTasks'
import { TaskForm } from './components/TaskForm/TaskForm'
import { TaskList } from './components/TaskList/TaskList'
import { StatsBar } from './components/StatsBar/StatsBar'


function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const fav = localStorage.getItem('darkMode')
    return fav ?  JSON.parse(fav) : false
  });

  const [showForm, setShowForm] = useState(false)
  const { tasks, addTask, deleteTask, stats, toggleTaskDone } = useTasks()

  
  function handleSave(taskData) {
    addTask(taskData)
    setShowForm(false)
  }

  useEffect(() => {
  document.body.classList.toggle('dark', darkMode)
  localStorage.setItem('darkMode', JSON.stringify(darkMode))
}, [darkMode])

  return (
    <div className=" max-w-6xl flex flex-col gap-4 mx-auto p-8">
      <Header
        darkMode={darkMode}
        setDarkMode={() => setDarkMode(!darkMode)} 
        novaTarefa={() => setShowForm(true)} 
        />
        <StatsBar stats={stats} /> {/* Passa as estatísticas para o componente StatsBar */}

        {showForm && <TaskForm onCancel={() => setShowForm(false)} onSave={handleSave} />} {/* Exibe o formulário de tarefa quando showForm for true */}
        
        <TaskList tasks={tasks} onDelete={deleteTask} onToggleDone={toggleTaskDone} />

    </div>
  )
}  
export default App