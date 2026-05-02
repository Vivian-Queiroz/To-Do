

export function Header({ darkMode, setDarkMode, novaTarefa }) {
  const today = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })


  return (
    <header className="flex items-center justify-between">
      <div className="flex flex-col">
        <h1>Minhas tarefas</h1>
        <p>{today}</p>
      </div>

      <div className="flex gap-x-4 ">
        <button onClick={setDarkMode}>dark mode</button>
        <button onClick={novaTarefa}>+ Nova tarefa</button>
      </div>
    </header>
  )
}

