

export function Toolbar({activeCategory, setActiveCategory}){
  
  return(
    <select value={activeCategory} onChange={(e) => setActiveCategory(e.target.value)}
    className="border rounded-lg h-9 px-4"
    >
      <option value="">Todas as categorias</option>
      <option value="Pessoal">Pessoal</option>
      <option value="Trabalho">Trabalho</option>
      <option value="Estudos">Estudos</option>
      <option value="Saúde">Saúde</option>
      <option value="Outros">Outros</option>
    </select>
  )
}

