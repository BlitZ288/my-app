import {useContext, useEffect} from 'react';
import TaskService from '../../API/TaskServise';
import TaskList from './TaskList';
import '../../styles/App.css'
import { ListContext } from '../../Context';

function Task() {
  const {tasks} = useContext(ListContext);
  return (
    <div className="App">  
       <TaskList items={tasks} ></TaskList>  
    </div>
  );
}

export default Task;