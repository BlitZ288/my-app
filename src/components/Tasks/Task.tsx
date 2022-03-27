import {useContext} from 'react';
import TaskList from './TaskList';
import '../../styles/App.css'
import { ListContext } from '../../Context';
import ServiceContextProvider from '../../Context/ServiceContextProvider';
import DataContextProvider from '../../Context/DataContextProvider';

function Task() {
  const {tasks} = useContext(ListContext);
  
  return (
    <div className="App"> 
      <DataContextProvider>
        <ServiceContextProvider>
          <TaskList tasksd={tasks} ></TaskList>  
        </ServiceContextProvider>
       </DataContextProvider>
    </div>
  );
}

export default Task;