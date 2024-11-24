import { useEffect, useState } from "react";
import Tasks from "../components/Tasks";
// const axios = require('axios');
import axios from "axios";


function Home() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {

    async function getTasks(){
      axios.get('http://localhost:3333/tasks')
      .then(function (response) {
        console.log(response.data);
      })
    }

    getTasks();

  }, [])


  function onTaskClick (taskId){
    const newTasks = tasks.map((task) => {
      if (task.id == taskId){
        return {
          ...task,
          isCompleted: !task.isCompleted,
        }
      }
      return task;
    });

    setTasks(newTasks);
  }



  return (
    <div className="h-screen w-screen flex flex-col items-center py-10 gap-5">
      <h1 className="text-white">Home Page!</h1>


      <div className="flex flex-col gap-2 w-1/2">
        <h1 className="text-white font-body">Add Task</h1>

        <input
          className="border border-slate-300 outline-black rounded-md px-4 py-2"
          type="text"
          placeholder="Digite o título da tarefa"
        />
        <input
          className="border border-slate-300 outline-black rounded-md px-4 py-2"
          type="text"
          placeholder="Digite a descrição da tarefa"
        />

        <button className="bg-white rounded-md">Add Task</button>
      </div>

      <h1 className="text-white">Tasks</h1>
      <Tasks tasks={tasks} onTaskClick={onTaskClick}/>


    </div>
  );
}

export default Home;
