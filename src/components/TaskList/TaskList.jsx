import { TaskCard } from '../TaskCard/TaskCard';


export function TaskList({tasks, onDelete, onToggleDone}) { // TaskList recebe a lista de tarefas e a função de exclusão como props
  return(
    <div className="task-list">
      {tasks.map((task) => ( // Itera sobre a lista de tarefas usando map
        <TaskCard key={task.id} task={task} onDelete={onDelete} onToggleDone={onToggleDone} /> // Para cada tarefa na lista, renderiza um TaskCard, passando a tarefa e a função de exclusão como props
      ))}
    </div>
  )
}