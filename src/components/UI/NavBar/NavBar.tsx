import React, { useContext, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { ListContext } from '../../../Context';
import   '../../../styles/navBar.css';
import CategoryForm from '../../Category/CategoryForm';
import TaskForm from '../../Tasks/TaskForm';
import MyModel from '../Model/MyModel';
import styleLink from './NavBar.module.css';

const NavBar = () => {

 const location = useLocation();
 const [modal , setModal] = useState(false);
 const {tasks,categories, createTask, createCategory} = useContext(ListContext);



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
            <MyModel visible={modal} setVisable={setModal} >
                {
                   
                        location.pathname ==='/Tasks' 
                        ?
                        <TaskForm 
                        close={setModal}
                        workingOnTask={createTask}
                        lastId={tasks[tasks.length-1].id}
                        titleForm='Создание задачи'
                        titlePrimaryButton='Создать'
                        categoryname='s'
                        
                        ></TaskForm>
                        :
                        <CategoryForm 
                        close={setModal}
                        workingOnCategory={createCategory}
                        lastId={categories[categories.length - 1].id}
                        titlePrimaryButton={'Создать'} 
                        titleForm={'Создание категории'}>
                        </CategoryForm> 
                    
                }
            </MyModel> 

        </div>
  )
}
export default NavBar
