export function Header({ darkMode, setDarkMode, novaTarefa }) {
  const today = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })


  return (
    <header className="flex items-center justify-between ">
      <div className="gap-0.70 flex flex-col">
        <h1 className="text-[22px] font-medium">Minhas tarefas</h1>
        <p className="text-gray text-sm first-letter:uppercase">{today}</p>
      </div>

      <div className="flex gap-3">
        <button className="bg-white dark:bg-gray-800 dark:text-white border-solid text-base text-gray border-gray-light border rounded-lg cursor-pointer w-9 h-9 flex items-center justify-center" onClick={setDarkMode}>☾</button>
        <button className="bg-primary text-white text-sm border-solid border-primary rounded-lg cursor-pointer w-33 h-9 " onClick={novaTarefa}>+ Nova tarefa</button>
      </div>
    </header>
  )
}

