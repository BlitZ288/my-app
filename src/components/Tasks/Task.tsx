import {useContext, useEffect, useState} from 'react';
import TaskService from '../../API/TaskServise';
import TaskList from './TaskList';
import '../../styles/App.css'
import { ListContext } from '../../Context';

function Task() {
  const {tasks,categories, setTasks} = useContext(ListContext);

  const removeTask = (idTask : number)=>{ 
    setTasks(tasks.filter(t=>t.id !== idTask));
    TaskService.RemoveTask(idTask);
  }
  function serchCategoryNameById(idCategory?:number) :string
  {   console.log(categories);
     
        let indexSerch = categories.findIndex(category=> (category.id === idCategory));
       
        return categories[indexSerch].name;
  }

  function SetNameCategory() 
  {   let updateTasks:Array<ITask> = [];
      tasks.map(task => 
      {
        let temp = task;
        temp.categoryName = serchCategoryNameById(task.categoryId);
        updateTasks.push(temp);
      });

      setTasks(updateTasks);        
  }

  useEffect(()=>{
    SetNameCategory();
  },[]);
 

  return (
    <div className="App">  
       <TaskList removeTask={removeTask}  items={tasks} ></TaskList>  
    </div>
  );
}

export default Task;