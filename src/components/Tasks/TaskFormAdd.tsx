import React, { FC, useContext, useState } from 'react'
import TaskService from '../../API/TaskServise'
import MyButtonPrimary from '../UI/button/MyButtonPrimary'
import MyTextInput from '../UI/input/MyTextInput'
import '../../styles/form.css'
import '../../styles/select.css'
import MySelectInput from '../UI/input/MySelectInput'
import { ListContext } from '../../Context'

 const TaskFormAdd : FC<ITaskForm>  = ({create : createTask , lastId} ) => {

    const [task , setTask] = useState({name:'',description:'',categoryId:0})
    const {tasks} = useContext(ListContext);

    async function AddTask(task: ITask) {     
      await TaskService.AddTask(task);
    }

    const addNewTask = (event:React.FormEvent<HTMLFormElement>)  =>
    {
        event.preventDefault();
        
        const newTask :ITask ={
             ...task ,
             id:lastId+1,
             remove:()=>{}
        };        
        createTask(newTask);
        setTask({name:'',description:'',categoryId:0});
        AddTask(newTask);
    }

  return (
   <form className='from__addTask' onSubmit={(e:React.FormEvent<HTMLFormElement>)=>addNewTask(e)}>  

        <div className='content__form'>
          <MyTextInput
          labelInput='Имя' 
          onChange = {(e:React.KeyboardEvent<HTMLInputElement>) => setTask({...task, name:e.currentTarget.value})}
          value ={task.name}
          type="text" 
          placeholder='Назавание'>          
          </MyTextInput>

          <MySelectInput
           optionsTasks={tasks}
           defaultValue='Выберите категорию' 
           labelSelect='Категория'
           optionsCategories={[]} 
           value={task.categoryId}
           onChange={category=>setTask({...task , categoryId:category})}>
          </MySelectInput>

          <MyTextInput
          labelInput='Описание' 
          onChange = {(e:React.KeyboardEvent<HTMLInputElement>) => setTask({...task, description:e.currentTarget.value})}
          type="text"
          value ={task.description}
          placeholder='Описание '></MyTextInput>

          <MyButtonPrimary>Создать задачу</MyButtonPrimary>
        </div>

    </form>
   
  )
}
export default TaskFormAdd;
