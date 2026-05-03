import { useState } from 'react'
import { Header } from './components/Header/Header'
import { useTasks } from './hooks/useTasks'
import { TaskForm } from './components/TaskForm/TaskForm'
import { TaskList } from './components/TaskList/TaskList'


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showForm, setShowForm] = useState(false)
  const { tasks, addTask, deleteTask } = useTasks()

  
  function handleSave(taskData) {
    addTask(taskData)
    setShowForm(false)
  }



  return (

    <div className="pt-[40px] px-[60px] ">
      <Header
        darkMode={darkMode}
        setDarkMode={() => setDarkMode(!darkMode)}
        novaTarefa={() => setShowForm(true)}
        />
        {showForm && <TaskForm onCancel={() => setShowForm(false)} onSave={handleSave} />}
        <TaskList tasks={tasks} onDelete={deleteTask} />
    </div>
  )
}  
export default App
