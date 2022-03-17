import React, { FC, useContext, useState } from 'react'
import MyTextInput from '../UI/input/MyTextInput'
import '../../styles/form.css'
import '../../styles/select.css'
import MySelectInput from '../UI/input/MySelectInput'
import { ListContext } from '../../Context'
import MyForm from '../UI/form/MyForm'
import MyTextArena from '../UI/input/MyTextArena'

 const TaskFormAdd : FC<ICreateForm>  = ({createTask , lastId, close} ) => {

    const [task , setTask] = useState({name:'',description:'',categoryId:0,categoryName:''})
    const {categories} = useContext(ListContext);

    const addNewTask = (event:React.FormEvent<HTMLFormElement>)  =>
    {
       

        const newTask :ITask ={
             ...task ,
             id:lastId+1,             
             remove:()=>{},
             update:()=>{}
        }; 
        createTask?.(newTask);            
        setTask({name:'',description:'',categoryId:0,categoryName:''});  
        close(false);      
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
            defaultValue='Выберите категорию' 
            labelSelect='Категория'
            optionsCategories={categories}            
            onChange={category=>setTask({...task , categoryId:category})}
            required={false}
            >
            </MySelectInput>
            
          </div>
          <MyTextArena
          className='description__textarea'
          labelInput='Описание' 
          onChange = {(e:React.ChangeEvent<HTMLTextAreaElement>) => setTask({...task, description:e.currentTarget.value})}  
          placeholder='Описание'
          value={task.description}
          required
          >

          </MyTextArena>
        </div>
       </MyForm>       
  )
}
export default TaskFormAdd;
