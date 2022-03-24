import React, { FC, useContext, useState } from 'react';
import TaskItem from './TaskItem';
import '../../styles/ListToDo.css';
import { ListContext } from '../../Context';
import { TaskContext } from '../../Context/TaskContext';
import NTaskRepositoryService from '../../API/NTaskRepositoryService';


const TaskList :FC<{tasks:Array<ITask>}> = ({tasks}) => {

  const {removeTask, updateTask} = useContext(ListContext);
  const con = useContext(TaskContext);
  const taskService = new NTaskRepositoryService(con);
  const ddd = useContext(ListContext);
  function handler(){
    const a = ddd.tasks;
    console.log(ddd.tasks);
    a[0].name="dasdasdsadsadsadsadsa";
    console.log(ddd.tasks);    

    
  }
  return (
 
    <div>  
        
      {ddd.tasks.map((task)=> 
          <TaskItem         
           key={task.id} 
           id={task.id} 
           name={task.name}
           description={task.description}
           categoryId={task.categoryId}           
           remove={removeTask} 
           update={updateTask}
           />
      )}
      <button onClick={()=>handler()}>Handler</button>
    </div>

  )
}

export default TaskList