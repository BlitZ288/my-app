import {useContext} from 'react';
import TaskList from './TaskList';
import '../../styles/App.css'
import { ListContext } from '../../Context';

function Task() {
  const {tasks} = useContext(ListContext);
  return (
    <div className="App">  
       <TaskList tasks={tasks} ></TaskList>  
    </div>
  );
}

export default Task;