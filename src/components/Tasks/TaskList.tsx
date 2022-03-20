import React, { FC, useContext } from 'react';
import TaskItem from './TaskItem';
import '../../styles/ListToDo.css';
import { ListContext } from '../../Context';


const TaskList :FC<ITaskList> = (tasks) => {
  const {removeTask, updateTask} = useContext(ListContext);
  return (
    <div>    
      {tasks.items.map((task)=> 
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
    </div>

  )
}

export default TaskList