import React, { FC, useState } from 'react'
import MyButtonPrimary from '../UI/button/MyButtonPrimary'
import MyInput from '../UI/input/MyInputWithLabel'



 const TaskForm : FC<ITaskForm>  = ({create : createTask , lastId} ) => {

    const [task , setTask] = useState({name:'',description:''})

    const addNewTask = (event:React.FormEvent<HTMLFormElement>)  =>
    {
        event.preventDefault();
        const newTask :ITask ={
             ...task ,
             id:lastId+1,
             remove:()=>{}
        }
        
        createTask(newTask);
        setTask({name:'',description:''});
    }

  return (
   <form onSubmit={(e:React.FormEvent<HTMLFormElement>)=>addNewTask(e)}>
        <MyInput 
        onChange = {(e:React.KeyboardEvent<HTMLInputElement>) => setTask({...task, name:e.currentTarget.value})}
        value ={task.name}
        type="text" 
        placeholder='Назавание'>          
        </MyInput>
        <MyInput
        onChange = {(e:React.KeyboardEvent<HTMLInputElement>) => setTask({...task, description:e.currentTarget.value})}
        type="text"
        value ={task.description}
        placeholder='Описание '></MyInput>
        <MyButtonPrimary >Создать задачу</MyButtonPrimary>
    </form>
   
  )
}
export default TaskForm;
