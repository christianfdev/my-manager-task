import { CheckIcon, ChevronRightIcon, Trash2Icon } from "lucide-react";

function Tasks ({tasks, onTaskClick}){

    return (
        <ul className=" flex flex-col items-center space-y-4 p-6 w-1/2 bg-slate-200 rounded-md shadow">
         
            {tasks.map((task) => (
                <li key={task.id} className="flex gap-2">

                    <button onClick={() => onTaskClick(task.id)} className={`flex bg-white w-96 rounded-md pl-4 p-2 gap-5`}>
                        {task.title}
                        {task.isCompleted && <CheckIcon color="green" />}
                    </button>

                    <button className="bg-white rounded-md p-2">
                        <ChevronRightIcon />
                    </button>
                    
                    <button className="bg-white rounded-md p-2">
                        <Trash2Icon/>
                    </button>

                </li>
                
            ))}


        </ul>
    )

}

export default Tasks;