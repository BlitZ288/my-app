import TaskList from './TaskList';
import '../../styles/App.css'
import ServiceContextProvider from '../../Context/ServiceContextProvider';
import DataContextProvider from '../../Context/DataContextProvider';

function Task() {
  
  return (
    <div className="App"> 
      <DataContextProvider>
        <ServiceContextProvider>
          <TaskList ></TaskList>  
        </ServiceContextProvider>
       </DataContextProvider>
    </div>
  );
}

export default Task;