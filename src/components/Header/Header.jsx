

export function Header({ darkMode, setDarkMode, novaTarefa }) {
  const today = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })


  return (
    <header className="flex items-center justify-between pt-[40px] px-[60px]">
      <div className="gap-0.75 flex flex-col">
        <h1 className="text-[22px] font-medium">Minhas tarefas</h1>
        <p className="text-gray text-[13px] first-letter:uppercase">{today}</p>
      </div>

      <div className="flex gap-2.75">
        <button className="bg-white border-solid border-gray-light border-[1px] rounded-[8px] w-[32px] h-[34px] flex items-center justify-center" onClick={setDarkMode}>☾</button>
        <button onClick={novaTarefa}>+ Nova tarefa</button>
      </div>
    </header>
  )
}

