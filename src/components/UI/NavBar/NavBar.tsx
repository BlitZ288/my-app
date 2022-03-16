import React, { useContext, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { ListContext } from '../../../Context';
import   '../../../styles/navBar.css';
import CategoryFormAdd from '../../Category/CategoryFormAdd';
import TaskFormAdd from '../../Tasks/TaskFormAdd';
import MyModel from '../Model/MyModel';
import styleLink from './NavBar.module.css';

const NavBar = () => {

 const location = useLocation();
 const [modal , setModal] = useState(false);
 const {tasks,categories, setTasks,setCategories} = useContext(ListContext);
 
 const createTask = (newTask : ITask)=>{

    setTasks([...tasks, newTask]);    
    setModal(false);
  }
  const createCategory = (newCategory : ICategory)=>{

    setCategories([...categories, newCategory]);    
    setModal(false);
  }


  return (
    <div className="containerHeader">
         <div className='leftNavcontainer'>
            <label className="logoName">ToDo List</label>

            <nav className="continerButtonHeader"> 
                <NavLink to={'Tasks'} className={({isActive}) => isActive ? styleLink.buttonNavActive : styleLink.buttonNav}> Задачи</NavLink>
                <span className="separator">|</span>
                <NavLink to={'Category'} className={({isActive}) => isActive ? styleLink.buttonNavActive : styleLink.buttonNav}>Категории </NavLink>
            </nav>

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
            <MyModel visible={modal} setVisable={setModal} title={'adas'}>
                {
                   
                        location.pathname ==='/Tasks' 
                        ?
                        <TaskFormAdd close={setModal} createTask={createTask} lastId={tasks[tasks.length-1].id}> </TaskFormAdd> 
                        :
                        <CategoryFormAdd close={setModal} createCategory={createCategory}  lastId={categories[categories.length-1].id}>Добавить категорию</CategoryFormAdd> 
                    
                }
            </MyModel> 

        </div>
  )
}
export default NavBar
