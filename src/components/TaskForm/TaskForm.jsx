import { useState } from 'react'



export function TaskForm({onCancel, onSave}) {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('') 
  const [priority, setPriority] = useState('')
  const [date, setDate] = useState('')

  function handleSubmit(e) {
  e.preventDefault() // impede o formulário de recarregar a página
  onSave({ title, category, priority, date })
}


  return (
    <form onSubmit={handleSubmit} className='border rounded-xl p-5 gap-2 flex flex-col'>
      <div className="flex flex-col gap-2 item-center text-sm">
        <input type="text" placeholder="Descreva sua tarefa"  value={title} onChange={(e) => setTitle(e.target.value)} required 
          className='border h-9 rounded-lg px-4'/>
        <div className="flex w-full flex-row flex-wrap gap-2 item-center">
          <div className="h-9 min-w-25 flex-1 rounded-lg px-4 border flex item-center" >
            <select value={category} onChange={(e) => setCategory(e.target.value)} className='flex-1 outline-none ' >
              <option value="" disabled selected>Categoria</option>
              <option value="Pessoal">Pessoal</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Estudos">Estudos</option>
              <option value="Saúde">Saúde</option>
              <option value="Outros">Outros</option>
            </select>
          </div>
          <div className="h-9 min-w-25 flex-1 rounded-lg px-4 border flex item-center" >
            <select value={priority} onChange={(e) => setPriority(e.target.value)} className='flex-1 outline-none'  >
              <option value=""disabled selected>Prioridade</option>
              <option value="Alta">Alta</option>
              <option value="Média">Média</option>
              <option value="Baixa">Baixa</option>
            </select>
          </div>
          <div className="h-9 min-w-25 flex-1 rounded-lg px-4 border flex item-center" >
            <input type="date" name="date" id="" value={date} onChange={(e) => setDate(e.target.value)} className='flex-1 outline-none'/>
          </div>
        </div>
      </div>

      <div className='flex gap-2 justify-end'>
        <button type="button" onClick={onCancel} className='border rounded-lg h-9 px-4 text-sm'>Cancelar</button>
        <button type="submit" className='border rounded-lg h-9 px-4 bg-primary text-white text-sm'>Salvar tarefa</button>
      </div>
    </form>
  )
}