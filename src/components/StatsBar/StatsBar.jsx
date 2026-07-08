

export function StatsBar({stats}){
  return(
    <div className="grid grid-cols-4 gap-8">
      <StatCard label="Total" value={stats.total} color="text-primary" 
      progress={stats.total > 0 ? (stats.done / stats.total) * 100 : 0} 
      progressText={`${stats.done} de ${stats.total} concluídas`}
      />

      <StatCard label="Concluídas" value={stats.done} color="text-success" />
      <StatCard label="Pendentes" value={stats.pending} color="text-warning" />
      <StatCard label="Atrasadas" value={stats.late} color="text-danger" />
    </div>
  )
}
function StatCard({label, value, color, progress, progressText}){
    return(
      <div className="w-full h-22 rounded-lg text-base border p-3 border-gray-light">
        <h3 className="text-[10px]  text-gray ">{label}</h3>
        <p className={`text-lg  ${color}`}>{value}</p>
          {progress !== undefined && (
            <div className="w-full h-1.5 bg-gray-light rounded-full mt-1">
              <div className="h-full bg-success rounded-full" style={{ width: `${progress}%` }} />
            </div>
          )}
          {progressText && <p className="text-[10px] text-gray mt-1">{progressText}</p>}
      </div>
    )
  } 