import {useEffect, useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import CategoryServise from './API/CategoryServise';
import TaskService from './API/TaskServise';
import AppRouter from './components/AppRouter';
import Loader from './components/UI/loader/Loader';
import NavBar from './components/UI/NavBar/NavBar';
import { ListContext } from './Context';

import './styles/App.css';

function App() {
  
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [categories ,setCategories] = useState<ICategory[]>([]);
  const [isLoadingTasks ,setIsLoadingTask] = useState(true);
  const [isLoadingCategories ,setisLoadingCategories] = useState(true);  
  const [loading ,setLoading] = useState(false);  
  
  const removeTask = (idTask : number)=>{    
    setTasks(tasks.filter(t=>t.id !== idTask));
    TaskService.RemoveTask(idTask);
  }
  const updateTask = (updateTask:ITask)=>{
    
    const tempTasks: Array<ITask>=[];
    for(let task of tasks){
      if(task.id===updateTask.id){
        continue;
      }
      tempTasks.push(task);
    }
    tempTasks.push(updateTask);   
    TaskService.UpdateTask(updateTask);
    setTasks(tempTasks);
  }
  const removeCategory = (idCategory :number)=>{
    setCategories(categories.filter(c=>c.id !== idCategory));
    CategoryServise.RemoveCategor(idCategory);
  }
  async function AddTask(task: ITask) {     
    await TaskService.AddTask(task);
  }
  async function AddCategory(category: ICategory) {     
    await CategoryServise.AddCategory(category);
  }
   const createTask = (newTask : ITask)=>{
      
      setTasks([...tasks, newTask]);    
      AddTask(newTask);
      
    }
    const createCategory = (newCategory : ICategory)=>{
  
      setCategories([...categories, newCategory]);  
      AddCategory(newCategory);  
    }
  
    const updateCategory = (updateCategoty:ICategory)=>{
      const tempCategories: Array<ICategory>=[];
      for(let category of categories){
        if(category.id===updateCategoty.id){
          continue;
        }
        tempCategories.push(category);
      }
      tempCategories.push(updateCategoty);   
      CategoryServise.UpdateCategory(updateCategoty);
      setCategories(tempCategories);
    }
  async function GetTasks() {
    const tasks = await TaskService.GetAllTasks();
    setTasks(tasks)
  }
  
  useEffect(()=>{
    setLoading(true);  
    setIsLoadingTask(true); 
      GetTasks().then(
        ()=>setIsLoadingTask(false)
      );  
      setisLoadingCategories(true);
      GetCategories().then(
        ()=>setisLoadingCategories(false)
      );
    setLoading(false);
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
          createTask:createTask,
          removeTask:removeTask,
          updateTask:updateTask,       

          categories:categories,
          setCategories:setCategories,
          isLoadingCategories:isLoadingCategories,
          setisLoadingCategories:setisLoadingCategories,
          createCategory:createCategory,
          removeCategory:removeCategory,
          updateCategory:updateCategory,
        }
      }>
      <BrowserRouter>        
          <NavBar/> 
          <AppRouter/>
      </BrowserRouter>
      </ListContext.Provider>
      :
      <Loader visible={loading} />
      
      
  )
  
}

export default App;

