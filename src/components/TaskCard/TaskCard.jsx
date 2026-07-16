

export function TaskCard({task, onDelete, onToggleDone}) {
  const MESES = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']
  const [year, month, day] = task.date ? task.date.split('-') : ['', '', '']
  const dataFormatada = task.date ? `${day} ${MESES[month - 1]} ${year}` : ''
  return(
    <div className="">
      <h3>{task.title}</h3>
      <p>{task.category}</p>
      <p>{task.priority}</p>
      <p>{dataFormatada}</p>
      <input type="checkbox" name="" id="" checked={task.done} onChange={() => onToggleDone(task.id)} />
      <button onClick={() => onDelete(task.id)}>X</button>
    </div>
  )
}