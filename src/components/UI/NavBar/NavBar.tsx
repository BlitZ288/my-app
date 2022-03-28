import React, {  useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { useServiseContext } from '../../../Hooks/useServiseContext';
import   '../../../styles/navBar.css';
import CategoryForm from '../../Category/CategoryForm';
import TaskForm from '../../Tasks/TaskForm';
import MyModel from '../Model/MyModel';
import styleLink from './NavBar.module.css';

const NavBar = () => {

 const location = useLocation();
 const [modal , setModal] = useState(false);
 const {TaskService,CategoryServise} = useServiseContext();

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
                        workingOnTask={TaskService.Add}
                        titleForm='Создание задачи'
                        titlePrimaryButton='Создать'                        
                        categoryName=''
                        ></TaskForm>
                        :
                        <CategoryForm 
                        close={setModal}
                        workingOnCategory={CategoryServise.Add}
                        titlePrimaryButton={'Создать'} 
                        titleForm={'Создание категории'}>
                        </CategoryForm> 
                    
                }
            </MyModel> 

        </div>
  )
}
export default NavBar
