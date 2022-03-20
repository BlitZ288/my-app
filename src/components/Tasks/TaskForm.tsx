import React, { FC, useContext, useState } from 'react'
import { ListContext } from '../../Context';
import { useInput } from '../../Hooks/useInput';
import MyForm from '../UI/form/MyForm';
import MySelectInput from '../UI/input/MySelectInput';
import MyTextArena from '../UI/input/MyTextArena';
import MyTextInput from '../UI/input/MyTextInput';

 const TaskForm:FC<ITaskForm> = ({workingOnTask, close,task, lastId, titlePrimaryButton, titleForm} ) => {
    
    const {categories} = useContext(ListContext);
    const nameTask = useInput(task?.name??  '', {isEmpty:true, maxLenght:3});
    const descriptionTask = useInput(task?.description?? '', {isEmpty:true, maxLenght:4});   
    const [categoryIdTask,setCategoryId] = useState(0);
    const currentTask = task?? {} as ITask;
   
    
    const move = ()=>{
        const tempTask:ITask = currentTask ? {
            ...currentTask,
            name: nameTask.value,
            description: descriptionTask.value,
            categoryId:categoryIdTask      
        
        } : {
            name: nameTask.value,
            description: descriptionTask.value,
            remove: () => { },
            update: () => { },
            id: lastId?? 0,
            categoryId: categoryIdTask
        }
        workingOnTask(tempTask);
        close(false);  
    }
    

  return (
    <MyForm 
       titleForm={titleForm}        
       titlePrimaryButton={titlePrimaryButton}
       titleSecondaryButton={'Закрыть'} 
       move={move}        
       close={close}   
       >
       <div className='content__add'>
          <div className='conteiner__first__row'>
            <MyTextInput
            valid={(nameTask.isDirty && nameTask.errorMessages.length != 0)} 
            name='task__name'
            className={'input__AddTask '}
            labelInput='Имя' 
            onChange = {e=> nameTask.onChange(e)}
            onBlur={e=> nameTask.onBlur(e)}
            value ={nameTask.value}
            type="text" 
            placeholder='Назавание'
            required>          
            </MyTextInput>
            {(nameTask.isDirty && nameTask.errorMessages.length != 0)
             ?
             nameTask.errorMessages.map((message)=>{
                 <span className='error__messages'>{message}</span>
             })
             : ''
            }
            <MySelectInput                      
            defaultValue={currentTask.categoryName?? 'Выберите категорию'} 
            labelSelect='Категория'
            optionsCategories={categories}            
            onChange={category=>setCategoryId(category)}
            required={false}
            >
            </MySelectInput>
            
          </div>
          <MyTextArena
          valid={(descriptionTask.isDirty && descriptionTask.errorMessages.length != 0)} 
          name='task__description'
          className='description__textarea'
          labelInput='Описание' 
          onChange = {e=> descriptionTask.onChange(e)} 
          value={descriptionTask.value}
          placeholder='Описание'
          required
          >
          </MyTextArena>
          {(descriptionTask.isDirty && descriptionTask.errorMessages.length != 0)
             ?
             descriptionTask.errorMessages.map((message)=>{
                 <span className='error__messages'>{message}</span>
             })
             : ''
            }
        </div>
       </MyForm> 
  )
}
export default TaskForm;

