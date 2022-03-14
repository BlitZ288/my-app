import {useEffect, useState} from 'react';
import TaskService from '../../API/TaskServise';
import MyButtonPrimary from '../UI/button/MyButtonPrimary';
import MyModel from '../UI/Model/MyModel';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import '../../styles/App.css'

function Task() {
  const [modal , setModal] = useState(false);
  const [tasks, setTasks]=useState<ITask[]>([]);
  const [isLoadingData, setIsLoading] = useState(true)
  const removeTask = (idTask : number)=>{ 
    setTasks(tasks.filter(t=>t.id !== idTask));
  }
  const createTask = (newTask : ITask)=>{
    setTasks([...tasks, newTask]);
    setModal(false);
  }


  async function GetTask() {
    const tasks = await TaskService.GetAllTasks();
    setTasks(tasks)
  }
  
  useEffect(()=>{
    setIsLoading(true); 
    console.log("sadas"); 
    GetTask();
    setIsLoading(false);
  },[])
  

  return (
    <div className="App">  
      
       <MyButtonPrimary  onClick={()=>setModal(true)}>
          Создать задачу 
        </MyButtonPrimary>
      <MyModel visible={modal} setVisable={setModal}>       

       <TaskForm  create={createTask} lastId={tasks.length-1} />

      </MyModel>
      {
        isLoadingData
        ?<h1>Идет загрузка</h1>
        :<TaskList removeTask={removeTask}  items={tasks} ></TaskList>     
      
      }
     
      
    </div>
  );
}

export default Task;