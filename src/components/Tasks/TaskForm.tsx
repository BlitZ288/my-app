import React, { FC, useContext, useState } from 'react'
import { ListContext } from '../../Context';
import { useInput } from '../../Hooks/useInput';
import MyForm from '../UI/form/MyForm';
import MySelectInput from '../UI/input/MySelectInput';
import MyTextArena from '../UI/input/MyTextArena';
import MyTextInput from '../UI/input/MyTextInput';

 const TaskForm:FC<ITaskForm> = ({workingOnTask, close,task, lastId, categoryname, titlePrimaryButton, titleForm} ) => {
    
    const {categories} = useContext(ListContext);
    const nameTask = useInput(task?.name??  '', {isEmpty:true, maxLenght:254 });
    const descriptionTask = useInput(task?.description?? '', { maxLenght:1535 });   
    const [categoryIdTask,setCategoryId] = useState(0);
    const currentTask = task?? {} as ITask;     
    const defualtValue = useState(categoryname);
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
       valid={(nameTask.errorMap.size === 0 && descriptionTask.errorMap.size === 0) }  
       titleForm={titleForm}        
       titlePrimaryButton={titlePrimaryButton}
       titleSecondaryButton={'Закрыть'} 
       move={move}        
       close={close}   
       >
       <div className='content__add'>
          <div className='conteiner__first__row'>
            <MyTextInput
            errors={ nameTask.isDirty ?   Array.from(nameTask.errorMap.values()) : []}
            name='task__name'
            className={((nameTask.errorMap.size && nameTask.isDirty) ? 'error__input' : '' )}
            labelInput='Имя' 
            onChange = {e => nameTask.onChange(e)}
            onBlur={e => nameTask.onBlur(e)}
            value ={nameTask.value}
            type="text" 
            placeholder='Назавание'
            required />          
            
            <MySelectInput
            defaultValue={defualtValue[0]} 
            labelSelect='Категория'
            optionsCategories={categories}            
            onChange={category=>setCategoryId(category)}
            required={false}
            />

          </div>
          <MyTextArena
          errors={Array.from(descriptionTask.errorMap.values())}
          name='task__description'
          className={'description__textarea ' + ((descriptionTask.errorMap.size) ? 'error__input' : '')}
          labelInput='Описание' 
          onChange = {e => descriptionTask.onChange(e)} 
          value={descriptionTask.value}
          placeholder='Описание'          
          />         
        </div>
       </MyForm> 
  )
}
export default TaskForm;

