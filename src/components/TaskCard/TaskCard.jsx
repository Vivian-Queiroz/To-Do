import { SquarePen, Trash2 } from 'lucide-react'


export function TaskCard({task, onDelete, onToggleDone, onEdit}) {
  const MESES = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']
  const [year, month, day] = task.date ? task.date.split('-') : ['', '', '']
  const dataFormatada = task.date ? `${day} ${MESES[month - 1]} ${year}` : ''

  return(
    <div className="border rounded-xl p-4 flex items-center gap-5 dark:bg-fundo">

      <input
        type="checkbox"
        checked={task.done}
        onChange={() => onToggleDone(task.id)}
        className="appearance-none w-4 h-4 rounded-full border-2 border-gray-light checked:bg-success checked:border-success cursor-pointer relative checked:after:content-['✓'] checked:after:absolute checked:after:inset-0 checked:after:flex checked:after:items-center checked:after:justify-center checked:after:text-white checked:after:text-[10px]"
      />

      <div className="flex flex-col gap-1 ">
        <div>
          <h3>{task.title}</h3>
        </div>

        <div className="flex gap-2">
          <p>{task.category}</p>
          <p>{task.priority}</p>
          <p>{dataFormatada}</p>
        </div>
      </div>
      
      <div className="flex gap-3 ml-auto p-2">
        <button onClick={() => onEdit(task)}>
          <SquarePen size={18} className="text-gray" /> {/* ícone de editar */}
        </button>

        <button onClick={() => onDelete(task.id)}>
          <Trash2 size={18} className="text-gray cursor-pointer" /> {/* ícone de deletar */}
        </button>
      </div>
        
    </div>
  )
}