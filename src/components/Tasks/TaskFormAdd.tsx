import React, { FC, useContext, useState } from 'react'
import TaskService from '../../API/TaskServise'
import MyTextInput from '../UI/input/MyTextInput'
import '../../styles/form.css'
import '../../styles/select.css'
import MySelectInput from '../UI/input/MySelectInput'
import { ListContext } from '../../Context'
import MyForm from '../UI/form/MyForm'
import MyTextArena from '../UI/input/MyTextArena'

 const TaskFormAdd : FC<ICreateForm>  = ({createTask , lastId, close} ) => {

    const [task , setTask] = useState({name:'',description:'',categoryId:0,categoryName:''})
    const {tasks, categories} = useContext(ListContext);
    const [nameCategory , setnameCategory] = useState('');

    async function AddTask(task: ITask) {     
      await TaskService.AddTask(task);
    }
    
    const addNewTask = (event:React.FormEvent<HTMLFormElement>)  =>
    {
      event.preventDefault();   

        const newTask :ITask ={
             ...task ,
             id:lastId+1,
             categoryName:nameCategory,
             remove:()=>{}
        };     
        createTask?.(newTask);   
        AddTask(newTask);     
        setTask({name:'',description:'',categoryId:0,categoryName:''});        
    }

  return (

       <MyForm 
       titleForm={'Создание задачи'}        
       titlePrimaryButton={'Создать'}
       titleSecondaryButton={'Закрыть'} 
       move={addNewTask}        
       close={close}   
       >
       <div className='content__add'>
          <div className='conteiner__first__row'>
            <MyTextInput 
            className='input__AddTask'
            labelInput='Имя' 
            onChange = {(e:React.KeyboardEvent<HTMLInputElement>) => setTask({...task, name:e.currentTarget.value})}
            value ={task.name}
            type="text" 
            placeholder='Назавание'
            required>          
            </MyTextInput>

            <MySelectInput
            optionsTasks={tasks}
            defaultValue='Выберите категорию' 
            labelSelect='Категория'
            optionsCategories={categories} 
            value={task.categoryId}
            onChange={category=>setTask({...task , categoryId:category})}
            required={false}
            setNameCategory={setnameCategory}
            >
            </MySelectInput>
            
          </div>
          <MyTextArena
          className='description__input'
          labelInput='Описание' 
          onChange = {(e:React.KeyboardEvent<HTMLInputElement>) => setTask({...task, description:e.currentTarget.value})}
          type="text"
          value ={task.description}
          placeholder='Описание '
          required
          >

          </MyTextArena>
        </div>
       </MyForm>       
  )
}
export default TaskFormAdd;
