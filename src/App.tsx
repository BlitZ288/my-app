import {useEffect, useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/UI/NavBar/NavBar';
import { ListContext } from './Context';

import './styles/App.css';

function App() {
  
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [categories ,setCategories] = useState<ICategory[]>([]);
  return(
      <ListContext.Provider value={
        {
          tasks:tasks, 
          setTasks:setTasks,
          categories:categories,
          setCategories:setCategories
        }
      }>
      <BrowserRouter>
        <NavBar/>      
        <AppRouter/>
      </BrowserRouter>
      </ListContext.Provider>
  )
  
}

export default App;
