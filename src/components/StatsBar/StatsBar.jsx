

export function StatsBar({stats}){
  return(
    <div className="grid grid-cols-4 gap-8">
      <StatCard label="Total" value={stats.total} color="text-primary" />
      <StatCard label="Concluídas" value={stats.done} color="text-success" />
      <StatCard label="Pendentes" value={stats.pending} color="text-warning" />
      <StatCard label="Atrasadas" value={stats.late} color="text-danger" />
    </div>
  )
}
function StatCard({label, value, color}){
    return(
      <div className="w-3xs h-18 rounded-xl text-xs border p-3 border-gray-light">
        <h3 className=" text-gray">{label}</h3>
        <p className={`text-2xl font-medium ${color}`}>{value}</p>
      </div>
    )
  }