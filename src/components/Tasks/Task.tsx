import {useContext, useEffect} from 'react';
import TaskService from '../../API/TaskServise';
import TaskList from './TaskList';
import '../../styles/App.css'
import { ListContext } from '../../Context';

function Task() {
  const {tasks,setTasks} = useContext(ListContext);
  
  const removeTask = (idTask : number)=>{ 
    console.log(idTask);
    setTasks(tasks.filter(t=>t.id !== idTask));
    TaskService.RemoveTask(idTask);
  }
  const updateTask = (updateTask:ITask)=>{
    console.log(updateTask);
    const tempTasks: Array<ITask>=[];
    for(let task of tasks){
      if(task.id===updateTask.id){
        continue;
      }
      tempTasks.push(task);
    }
    tempTasks.push(updateTask);
   
    TaskService.UpdateTask(updateTask);
    setTasks(tempTasks);
  }


  return (
    <div className="App">  
       <TaskList removeTask={removeTask} updateTask={updateTask} items={tasks} ></TaskList>  
    </div>
  );
}

export default Task;