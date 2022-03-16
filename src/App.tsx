import {useEffect, useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import CategoryServise from './API/CategoryServise';
import TaskService from './API/TaskServise';
import AppRouter from './components/AppRouter';
import NavBar from './components/UI/NavBar/NavBar';
import { ListContext } from './Context';

import './styles/App.css';

function App() {
  
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [categories ,setCategories] = useState<ICategory[]>([]);
  const [isLoadingTasks ,setIsLoadingTask] = useState(true);
  const [isLoadingCategories ,setisLoadingCategories] = useState(true);

  async function GetTasks() {
    const tasks = await TaskService.GetAllTasks();
    setTasks(tasks)
  }
  
  useEffect(()=>{
    setIsLoadingTask(true); 
    GetTasks().then(
      ()=>setIsLoadingTask(false)
    );

    setisLoadingCategories(true);
    GetCategories().then(
      ()=>setisLoadingCategories(false)
    );
    
  },[])
  
  async function GetCategories() {
    const categories = await CategoryServise.GetAllCategores();
    setCategories(categories);    
  }
  
  
  return(
      (isLoadingCategories===false && isLoadingTasks ===false) 
      ?
      <ListContext.Provider value={
        {
          tasks:tasks, 
          setTasks:setTasks,
          isLoadingTask:isLoadingTasks,
          setIsLoadingTask:setIsLoadingTask,

          categories:categories,
          setCategories:setCategories,
          isLoadingCategories:isLoadingCategories,
          setisLoadingCategories:setisLoadingCategories
        }
      }>
      <BrowserRouter>        
          <NavBar/> 
          <AppRouter/>
      </BrowserRouter>
      </ListContext.Provider>
      :
      <h1>Идет закгрузка</h1>
      
  )
  
}

export default App;
