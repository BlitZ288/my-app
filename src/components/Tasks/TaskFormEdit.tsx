import React, { FC, useContext, useState } from 'react'
import { ListContext } from '../../Context';
import MyForm from '../UI/form/MyForm';
import MySelectInput from '../UI/input/MySelectInput';
import MyTextArena from '../UI/input/MyTextArena';
import MyTextInput from '../UI/input/MyTextInput';

const TaskFormEdit:FC<IEditeFrom> = ({task,editTask,close}) => 
    {
        const [currentTask , setTask] = useState({...task});
        const {categories} = useContext(ListContext);
        const UpdateTask = ()  =>
      {
          console.log(currentTask);
          editTask(currentTask);                
          close(false);      
      }
       
      return (
          
           <MyForm 
           titleForm={'Редактирование задачи'}        
           titlePrimaryButton={'Сохранить'}
           titleSecondaryButton={'Закрыть'} 
           move={UpdateTask}        
           close={close}   
           >
           <div className='content__add'>
              <div className='conteiner__first__row'>
                <MyTextInput 
                className='input__AddTask'
                labelInput='Имя' 
                onChange = {(e:React.KeyboardEvent<HTMLInputElement>) => setTask({...currentTask ,name:e.currentTarget.value})}
                value ={currentTask?.name}
                type="text" 
                placeholder='Назавание'
                required>          
                </MyTextInput>
    
                <MySelectInput           
                defaultValue={currentTask.categoryName}
                labelSelect='Категория'
                optionsCategories={categories}            
                onChange={category=>setTask({...currentTask , categoryId:category})}
                required={false}
                >
                </MySelectInput>
                
              </div>
              <MyTextArena
              className='description__textarea'
              labelInput='Описание' 
              onChange = {(e:React.ChangeEvent<HTMLTextAreaElement>) => setTask({...currentTask, description:e.currentTarget.value})}  
              placeholder='Описание'
              value={currentTask.description}
              required
              >
    
              </MyTextArena>
            </div>
           </MyForm>       
      )
}


export default TaskFormEdit;