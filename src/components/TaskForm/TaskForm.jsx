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
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Descreva sua tarefa"  value={title} onChange={(e) => setTitle(e.target.value)} required/>
      <select value={category} onChange={(e) => setCategory(e.target.value)} >
        <option value="">Categoria</option>
        <option value="Pessoal">Pessoal</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Estudos">Estudos</option>
        <option value="Saúde">Saúde</option>
        <option value="Outros">Outros</option>
      </select>

      <select value={priority} onChange={(e) => setPriority(e.target.value)} >
        <option value="">Prioridade</option>
        <option value="Alta">Alta</option>
        <option value="Média">Média</option>
        <option value="Baixa">Baixa</option>
      </select>

      <input type="date" name="date" id="" value={date} onChange={(e) => setDate(e.target.value)} />

      <button type="button" onClick={onCancel}>Cancelar</button>
      <button type="submit">Salvar tarefa</button>
    </form>
  )
}