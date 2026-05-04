

export function TaskCard({task, onDelete, onToggleDone}) {
  
  return(
    <div className="">
      <h3>{task.title}</h3>
      <p>{task.category}</p>
      <p>{task.priority}</p>
      <p>{task.date}</p>
      <input type="checkbox" name="" id="" checked={task.done} onChange={() => onToggleDone(task.id)} />
      <button onClick={() => onDelete(task.id)}>X</button>
    </div>
  )
}