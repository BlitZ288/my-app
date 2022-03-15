import {useContext, useEffect, useState} from 'react';
import TaskService from '../../API/TaskServise';
import TaskList from './TaskList';
import '../../styles/App.css'
import { ListContext } from '../../Context';

function Task() {
  const {tasks, setTasks} = useContext(ListContext);
  const [isLoadingData, setIsLoading] = useState(true);

  const removeTask = (idTask : number)=>{ 
    setTasks(tasks.filter(t=>t.id !== idTask));
    TaskService.RemoveTask(idTask);
  }
  async function GetTasks() {
    const tasks = await TaskService.GetAllTasks();
    setTasks(tasks)
  }
  
  useEffect(()=>{
    setIsLoading(true); 
    GetTasks();
    setIsLoading(false);
  },[])
  

  return (
    <div className="App">        
      {
        isLoadingData
        ?<h1>Идет загрузка</h1>
        :<TaskList removeTask={removeTask}  items={tasks} ></TaskList>     
      
      }
     
      
    </div>
  );
}

export default Task;