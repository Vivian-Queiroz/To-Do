import { useState } from 'react'

export function TaskForm({onCancel, onSave, taskEdit }) {
  const [title, setTitle] = useState(taskEdit ? taskEdit.title : '')
  const [category, setCategory] = useState(taskEdit ? taskEdit.category : '')
  const [priority, setPriority] = useState(taskEdit ? taskEdit.priority : '')
  const [date, setDate] = useState(taskEdit ? taskEdit.date : '')


  function handleSubmit(e) {
  e.preventDefault() // impede o formulário de recarregar a página
  onSave({ title, category, priority, date })
}
  return (
    <form onSubmit={handleSubmit} className='border rounded-xl p-5 gap-4 flex flex-col border-primary shadow-md bg-white dark:bg-fundo'>
      <div className="flex flex-col gap-2 item-center text-sm ">
        <input type="text" placeholder="Descreva sua tarefa"  value={title} onChange={(e) => setTitle(e.target.value)} required 
          className='border border-gray h-9 rounded-lg px-4 outline-none'/>
        <div className="flex w-full flex-row flex-wrap gap-2 item-center">
          <div className="h-9 min-w-25 flex-1 rounded-lg px-4 border flex item-center border-gray text-gray dark:text-gray-light" >
            <select value={category} onChange={(e) => setCategory(e.target.value)} className='flex-1 outline-none dark:bg-fundo cursor-pointer' >
              <option value="">Categoria</option>
              <option value="Pessoal">Pessoal</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Estudos">Estudos</option>
              <option value="Saúde">Saúde</option>
              <option value="Outros">Outros</option>
            </select>
          </div>
          <div className="h-9 min-w-25 flex-1 rounded-lg px-4 border flex item-center border-gray text-gray dark:text-gray-light" >
            <select value={priority} onChange={(e) => setPriority(e.target.value)} className='flex-1 outline-none dark:bg-fundo cursor-pointer'  >
              <option value="">Prioridade</option>
              <option value="Alta">Alta</option>
              <option value="Média">Média</option>
              <option value="Baixa">Baixa</option>
            </select>
          </div>
          <div className="h-9 min-w-25 flex-1 rounded-lg px-4 border flex item-center border-gray text-gray dark:text-gray-light dark:bg-fundo" >
            <input type="date" name="date" id="" value={date} onChange={(e) => setDate(e.target.value)} className='flex-1 outline-none dark:[color-scheme:dark] [&::-webkit-calendar-picker-indicator]:opacity-60 cursor-pointer' />
          </div>
        </div>
      </div>

      <div className='flex gap-2 justify-end'>
        <button type="button" onClick={onCancel} className='border border-gray rounded-lg h-9 px-4 text-sm cursor-pointer dark:text-gray-light '>Cancelar</button>
        <button type="submit" className='border-none rounded-lg h-9 px-4 bg-primary text-white text-sm cursor-pointer'>Salvar tarefa</button>
      </div>
    </form>
  )
}