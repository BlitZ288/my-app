import React, { FC } from 'react';
import TaskItem from './TaskItem';
import '../../styles/ListToDo.css';


const TaskList :FC<ITaskList> = (tasks) => {
  return (
    <div>    
      {tasks.items.map((task)=> 
          <TaskItem remove={tasks.removeTask} 
           key={task.id} 
           id={task.id} 
           name={task.name}
           description={task.description}
           categoryName={task.categoryName}
           />
      )}
    </div>

  )
}

export default TaskList