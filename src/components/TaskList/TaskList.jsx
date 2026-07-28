import { TaskCard } from '../TaskCard/TaskCard';


export function TaskList({tasks, onDelete, onToggleDone, onEdit}) { // TaskList recebe a lista de tarefas e a função de exclusão como props
  return(
    <div className="task-list flex flex-col gap-2">
      {tasks.map((task) => ( // Itera sobre a lista de tarefas usando map
        <TaskCard key={task.id} task={task} onDelete={onDelete} onToggleDone={onToggleDone} onEdit={onEdit} /> // Para cada tarefa na lista, renderiza um TaskCard, passando a tarefa e a função de exclusão como props
      ))}
    </div>
  )
}