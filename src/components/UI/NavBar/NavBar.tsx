import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import   '../../../styles/navBar.css';
import TaskForm from '../../Tasks/TaskForm';
import MyModel from '../Model/MyModel';
import styleLink from './NavBar.module.css';
import NavLink from './NavLink';

const NavBar = () => {

 const location = useLocation();
 const [modal , setModal] = useState(false);
 const [tasks, setTasks]=useState<ITask[]>([]);
 
 const createTask = (newTask : ITask)=>{
    setTasks([...tasks, newTask]);
    setModal(false);
  }

 
  return (
    <div className="containerHeader">
         <div className='leftNavcontainer'>
            <label className="logoName">ToDo List</label>
            <NavLink pathname={location.pathname} />
         </div>
            <div onClick={()=>setModal(true)} className={styleLink.buttonNav}>
                    {
                        location.pathname ==='/Tasks' 
                        ?
                        <span>Добавить задачу</span> 
                        :
                        <span>Добавить категорию</span> 
                    }
            </div>
            <MyModel visible={modal} setVisable={setModal}>
                {
                   
                        location.pathname ==='/Tasks' 
                        ?
                        <TaskForm create={createTask} lastId={tasks.length-1}  > </TaskForm> 
                        :
                        <span>Добавить категорию</span> 
                    
                }
            </MyModel> 

        </div>
  )
}
export default NavBar
