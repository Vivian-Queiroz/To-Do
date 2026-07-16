

export function Toolbar({activeCategory, setActiveCategory, sort, setSort}){
  
  return(
    <div className="border-none flex gap-2">
      <div className="border rounded-lg h-9 px-4 flex flex-1 p-1">
        <select value={activeCategory} onChange={(e) => setActiveCategory(e.target.value)} className='flex-1 outline-none'>
          <option value="">Todas as categorias</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Estudos">Estudos</option>
          <option value="Saúde">Saúde</option>
          <option value="Outros">Outros</option>
        </select>
      </div>

      <div className="border rounded-lg h-9 px-4 flex flex-1 p-1">
        <select value={sort} onChange={(e) => setSort(e.target.value)} className=' flex-1 outline-none'>
          <option value="priority">Ordenar:prioridade</option>
          <option value="date">Ordenar:data</option>
          <option value="category">Ordenar:categoria</option>
        </select>
      </div>


    </div>

    

  
  )
}

