import { useState, useEffect } from 'react'
import { Header } from './components/Header/Header'
import { useTasks } from './hooks/useTasks'
import { TaskForm } from './components/TaskForm/TaskForm'
import { TaskList } from './components/TaskList/TaskList'
import { StatsBar } from './components/StatsBar/StatsBar'
import { Toolbar } from './components/Toolbar/Toolbar'

function App() {

  // ─── Estados ────────────────────────────────────────────────────────────────

  // Lê a preferência de tema salva no localStorage. Sem nada salvo, começa claro.
  const [darkMode, setDarkMode] = useState(() => {
    const fav = localStorage.getItem('darkMode')
    return fav ? JSON.parse(fav) : false
  });

  // Controla se o formulário de tarefa (novo ou edição) está visível
  const [showForm, setShowForm] = useState(false)

  // Guarda a tarefa sendo editada. null = criando uma tarefa nova
  const [taskEdit, setTaskEdit] = useState(null)

  const {
    addTask,
    deleteTask,
    stats,
    toggleTaskDone,
    filteredTasks,
    activeCategory,
    setActiveCategory,
    sort,
    setSort,
    editTask,
  } = useTasks()


  // ─── Handlers ───────────────────────────────────────────────────────────────

  // Salva o formulário: edita a tarefa existente se taskEdit estiver preenchido,
  // senão cria uma tarefa nova
  function handleSave(taskData) {
    if (taskEdit) {
      editTask(taskEdit.id, taskData)
    } else {
      addTask(taskData)
    }
    setShowForm(false)
  }

  // Abre o formulário já preenchido com os dados da tarefa clicada
  function handleEdit(task) {
    setTaskEdit(task)
    setShowForm(true)
  }

  // Abre o formulário vazio, para criar uma tarefa nova
  function handleNewTask() {
    setTaskEdit(null)
    setShowForm(true)
  }

  // Fecha o formulário e limpa a tarefa em edição
  function handleCancel() {
    setShowForm(false)
    setTaskEdit(null)
  }


  // ─── Efeitos ────────────────────────────────────────────────────────────────

  // Aplica a classe "dark" no body e salva a preferência de tema
  useEffect(() => {
    document.body.classList.toggle('dark', darkMode)
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])


  // ─── Render ─────────────────────────────────────────────────────────────────

  return (
    <div className="max-w-4xl flex flex-col gap-4 mx-auto p-8 ">
      <Header
        darkMode={darkMode}
        setDarkMode={() => setDarkMode(!darkMode)}
        novaTarefa={handleNewTask}
      />

      <StatsBar stats={stats} />

      {showForm && (
        <TaskForm
          taskEdit={taskEdit}
          onCancel={handleCancel}
          onSave={handleSave}
        />
      )}

      <Toolbar
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        sort={sort}
        setSort={setSort}
      />

      <TaskList
        tasks={filteredTasks}
        onDelete={deleteTask}
        onToggleDone={toggleTaskDone}
        onEdit={handleEdit}
      />
    </div>
  )
}

export default App