import React, { FC, useContext, useEffect, useState } from 'react';
import TaskItem from './TaskItem';
import '../../styles/ListToDo.css';
import { ListContext } from '../../Context';
import { ServiceContext } from '../../Context/ServiceContext';
import { DataContext } from '../../Context/DataContext';


const TaskList :FC<{tasksd:Array<ITask>}> = ({tasksd}) => {

  const {removeTask, updateTask} = useContext(ListContext);
  const {TaskService} = useContext(ServiceContext);
  const {tasks} = useContext(DataContext);
  useEffect(()=>{
    console.log(tasks);
    TaskService.GetAll();
  },[])
  function handler(){

    const testTask: ITask = {
      id: 77,
      name: 'testTask',
      description: 'descriptionTask ',
      categoryId: 0,
      remove: () => { },
      update: ()=> { },
    }
    TaskService.Add(testTask);
  }
  return (
 
    <div>  
        
      {tasks.map((task)=> 
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