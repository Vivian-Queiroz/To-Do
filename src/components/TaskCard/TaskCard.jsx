import { useState } from "react";

export function TaskCard({task, onDelete}) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return(
    <div className="">
      <h3>{task.title}</h3>
      <p>{task.category}</p>
      <p>{task.priority}</p>
      <p>{task.date}</p>
      <input type="checkbox" name="" id="" checked={isChecked} onChange={handleCheckboxChange} />
      <button onClick={() => onDelete(task.id)}>X</button>
    </div>
  )
}