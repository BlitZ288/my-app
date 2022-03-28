import React, { FC,  useEffect, useState,  } from 'react';
import TaskItem from './TaskItem';
import '../../styles/ListToDo.css';
import { useServiseContext } from '../../Hooks/useServiseContext';
import { useDataContext } from '../../Hooks/useDataContext';
import Loader from '../UI/loader/Loader';


const TaskList :FC = () => {

  const {TaskService,CategoryServise} = useServiseContext();
  const {tasks} = useDataContext();
  const [loading ,setLoading] = useState(false);  

  useEffect(()=>{
    setLoading(true);
    TaskService.GetAll();
    CategoryServise.GetAll();
    setLoading(false);
  },[])
  
  return ( 
    <div>   
      {
      loading 
      ? 
      <Loader visible = {loading}/>
      :
      tasks.map((task)=> 
          <TaskItem         
           key={task.id} 
           id={task.id} 
           name={task.name}
           description={task.description}
           categoryId={task.categoryId}           
           remove={TaskService.Remove} 
           update={TaskService.Update}
           />
      )} 
    </div>
  )
}

export default TaskList