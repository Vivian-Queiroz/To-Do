import { useState } from 'react'
import { Header } from './components/Header/Header'
import { useTasks } from './hooks/useTasks'
import { TaskForm } from './components/TaskForm/TaskForm'

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showForm, setShowForm] = useState(false)
  const { tasks, addTask } = useTasks()

  console.log(tasks)
  
  function handleSave(taskData) {
  addTask(taskData)
  setShowForm(false)
}

  return (
    <>
      <Header
        darkMode={darkMode}
        setDarkMode={() => setDarkMode(!darkMode)}
        novaTarefa={() => setShowForm(true)}
        />
        {showForm && <TaskForm onCancel={() => setShowForm(false)} onSave={handleSave} />}
    </>
  )
}  
export default App
